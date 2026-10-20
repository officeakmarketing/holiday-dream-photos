/**
 * Spam and Gibberish Detection Filter for Holiday Dream Photos
 * Protects form endpoints from automated bots, test queries, and randomized strings.
 */

// Common disposable/temporary email provider domains
const DISPOSABLE_EMAIL_DOMAINS = new Set([
  'mailinator.com',
  'guerrillamail.com',
  'tempmail.com',
  '10minutemail.com',
  'throwawaymail.com',
  'yopmail.com',
  'dispostable.com',
  'trashmail.com',
  'sharklasers.com',
  'getairmail.com',
  'crazymailing.com',
  'fakemailgenerator.com',
  'temp-mail.org',
  'burnermail.io'
]);

// Common test/dummy words used by automated scanners and form testers
const TEST_WORDS = [
  'test',
  'testing',
  'tester',
  'test123',
  'dummy',
  'sample',
  'asdf',
  'asdfgh',
  'qwerty',
  'zxcvbn',
  'nobody',
  'fake'
];

/**
 * Calculates Shannon entropy of a string.
 * Randomly generated strings typically have significantly higher entropy
 * and uniform character distributions than natural English words.
 */
export function calculateEntropy(str) {
  if (!str || str.length === 0) return 0;
  const len = str.length;
  const frequencies = {};
  for (let i = 0; i < len; i++) {
    const char = str[i];
    frequencies[char] = (frequencies[char] || 0) + 1;
  }
  let entropy = 0;
  for (const char in frequencies) {
    const p = frequencies[char] / len;
    entropy -= p * Math.log2(p);
  }
  return entropy;
}

/**
 * Detects unnatural case switches in individual word tokens.
 * Real names/words: "John", "McDonald" (M->c->D->onald), "O'Connor", "Mary-Jane".
 * Bot gibberish: "PZiPKBObiuCVptcW" (6+ case switches in a single word without spaces), "XdfAFWTLhtKeMewCPgdAOK".
 */
export function countCaseSwitches(word) {
  if (!word || word.length < 4) return 0;
  let switches = 0;
  let prevIsUpper = null;

  for (let i = 0; i < word.length; i++) {
    const ch = word[i];
    if (/[a-zA-Z]/.test(ch)) {
      const isUpper = ch === ch.toUpperCase();
      if (prevIsUpper !== null && isUpper !== prevIsUpper) {
        switches++;
      }
      prevIsUpper = isUpper;
    }
  }
  return switches;
}

/**
 * Checks if a word token has unnatural mixed casing typical of random string generators.
 * e.g. "PZiPKBObiuCVptcW", "dfAFWTlht", "XdfAFWTLhtKeMewCPgdAOK".
 */
export function hasUnnaturalCasing(token) {
  if (!token || token.length < 4) return false;

  // Split hyphenated names or apostrophes: "Mary-Jane" -> ["Mary", "Jane"]
  const subTokens = token.split(/[-'’.]+/).filter(Boolean);

  for (const sub of subTokens) {
    if (sub.length < 4) continue;

    const switches = countCaseSwitches(sub);
    const normalized = sub.toLowerCase();
    const isMcOrMac = normalized.startsWith('mc') || normalized.startsWith('mac');

    // In a normal word: "Hello" = 1 switch (H->e).
    // "McDonald" has 3 switches (M->c->D->o).
    // Bot gibberish like "PZiPKBObiuCVptcW" has 6+ switches.
    if (switches >= 4) {
      return true;
    }
    if (switches >= 3 && !isMcOrMac) {
      return true;
    }

    // Regex pattern: lowercase letter followed by 2 or more uppercase letters followed by a lowercase letter
    // e.g. "dfAFWTlht", "iuCVpt", "tKeMew"
    if (/[a-z][A-Z]{2,}[a-z]/.test(sub)) {
      return true;
    }
  }

  return false;
}

/**
 * Checks for unnatural consonant clusters or impossible vowel ratios.
 * Natural English/Spanish names and sentences require vowels.
 */
export function hasUnnaturalConsonants(word) {
  if (!word || word.length < 5) return false;

  // 5 or more consecutive consonants (excluding vowels and 'y')
  if (/[bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZ]{5,}/.test(word)) {
    return true;
  }

  // For words of length >= 6, check vowel ratio
  if (word.length >= 6) {
    const lettersOnly = word.replace(/[^a-zA-Z]/g, '');
    if (lettersOnly.length >= 6) {
      const vowels = lettersOnly.match(/[aeiouyAEIOUY]/g) || [];
      const vowelRatio = vowels.length / lettersOnly.length;
      // If less than 15% vowels (e.g. 0 or 1 vowel in 7+ chars) or over 85% vowels (e.g. "aeiouae")
      if (vowelRatio < 0.14 || vowelRatio > 0.85) {
        return true;
      }
    }
  }

  return false;
}

/**
 * Detects common keyboard mash sequences or long character repetitions.
 */
export function hasKeyboardMash(text) {
  if (!text) return false;
  const lower = text.toLowerCase();

  // 4 or more repeated characters: "aaaa", "1111", "xxxx"
  if (/(.)\1{3,}/.test(lower)) {
    return true;
  }

  // Common keyboard row walks
  const mashes = [
    'qwerty', 'asdfgh', 'zxcvbn', '123456', 'qazwsx',
    'wsxedc', 'edcrfv', 'rfvtgb', 'yuiop', 'hjkl;'
  ];

  for (const mash of mashes) {
    if (lower.includes(mash)) {
      return true;
    }
  }

  return false;
}

/**
 * Checks if the string matches common bot/developer test strings.
 */
export function isTestQuery(text) {
  if (!text) return false;
  const trimmed = text.trim().toLowerCase();
  
  // Exact match or matches with simple numbers (e.g. "test", "test 1", "test 123", "testing")
  for (const testWord of TEST_WORDS) {
    if (trimmed === testWord) return true;
    const testPattern = new RegExp(`^${testWord}\\s*\\d*$|^${testWord}\\s+${testWord}`, 'i');
    if (testPattern.test(trimmed)) return true;
  }

  return false;
}

/**
 * Comprehensive check to see if a piece of text appears to be bot gibberish.
 */
export function isGibberish(text, context = 'general') {
  if (!text || typeof text !== 'string') return false;
  const trimmed = text.trim();
  if (trimmed.length === 0) return false;

  // Check for test keywords
  if (isTestQuery(trimmed)) {
    return true;
  }

  // Check for keyboard mashes
  if (hasKeyboardMash(trimmed)) {
    return true;
  }

  const words = trimmed.split(/\s+/);

  // In a name or subject:
  if (context === 'name' || context === 'subject') {
    // A single unbroken string > 15 characters without spaces is almost never a legitimate name or subject
    if (words.length === 1 && trimmed.length >= 15) {
      if (hasUnnaturalCasing(trimmed) || hasUnnaturalConsonants(trimmed) || calculateEntropy(trimmed) > 3.4) {
        return true;
      }
    }

    // Check individual words
    for (const word of words) {
      if (hasUnnaturalCasing(word)) {
        return true;
      }
      if (hasUnnaturalConsonants(word)) {
        return true;
      }
    }

    // High entropy check for single unbroken strings (e.g. "XdfAFWTLhtKeMewCPgdAOK")
    if (words.length === 1 && trimmed.length >= 12 && calculateEntropy(trimmed) > 3.5) {
      const uniqueChars = new Set(trimmed).size;
      if (uniqueChars / trimmed.length > 0.7) {
        return true;
      }
    }
  }

  return false;
}

/**
 * Validates whether a message is legitimate customer communication.
 * Bots often post numbers, random characters, or single test words.
 */
export function validateMessage(message) {
  if (!message || typeof message !== 'string') {
    return { isValid: false, reason: 'Message is required.' };
  }

  const trimmed = message.trim();

  // Minimum length check
  if (trimmed.length < 5) {
    return { isValid: false, reason: 'Please enter a message describing your inquiry.' };
  }

  // Reject messages that are purely or predominantly digits (like "9449661692" in the spam screenshot)
  const digitsOnly = trimmed.replace(/\D/g, '');
  if (digitsOnly.length > 0 && digitsOnly.length / trimmed.length > 0.6) {
    return { isValid: false, reason: 'Message cannot be only numbers. Please tell us about your inquiry.' };
  }

  // Must contain at least some alphabetic letters
  const lettersOnly = trimmed.replace(/[^a-zA-Z]/g, '');
  if (lettersOnly.length < 4) {
    return { isValid: false, reason: 'Please write a brief description of how we can help you.' };
  }

  // Check for test query
  if (isTestQuery(trimmed)) {
    return { isValid: false, reason: 'Please enter a valid inquiry.' };
  }

  // Check for gibberish
  if (isGibberish(trimmed, 'message')) {
    return { isValid: false, reason: 'Please enter a valid message.' };
  }

  return { isValid: true };
}

/**
 * Validates a customer's full name.
 */
export function validateName(name) {
  if (!name || typeof name !== 'string') {
    return { isValid: false, reason: 'Name is required.' };
  }

  const trimmed = name.trim();
  if (trimmed.length < 2) {
    return { isValid: false, reason: 'Please enter your full name.' };
  }

  // Name should only contain letters, spaces, hyphens, apostrophes, and periods
  // Supports international accented characters (Latin-1 Supplement, Latin Extended)
  const validNameRegex = /^[a-zA-Z\u00C0-\u024F\s'.-]+$/;
  if (!validNameRegex.test(trimmed)) {
    return { isValid: false, reason: 'Name can only contain letters, spaces, hyphens, and apostrophes.' };
  }

  // Check test queries
  if (isTestQuery(trimmed)) {
    return { isValid: false, reason: 'Please enter a valid name.' };
  }

  // Check for gibberish like "PZiPKBObiuCVptcW"
  if (isGibberish(trimmed, 'name')) {
    return { isValid: false, reason: 'Please enter a valid full name.' };
  }

  return { isValid: true };
}

/**
 * Validates a subject field if provided.
 */
export function validateSubject(subject) {
  if (!subject || typeof subject !== 'string') {
    return { isValid: false, reason: 'Subject is required.' };
  }

  const trimmed = subject.trim();
  if (trimmed.length < 2) {
    return { isValid: false, reason: 'Please enter a valid subject.' };
  }

  // Pure digits check
  if (/^\d+$/.test(trimmed)) {
    return { isValid: false, reason: 'Subject cannot be numbers only.' };
  }

  // Test query check
  if (isTestQuery(trimmed)) {
    return { isValid: false, reason: 'Please enter a valid subject.' };
  }

  // Gibberish check like "XdfAFWTLhtKeMewCPgdAOK"
  if (isGibberish(trimmed, 'subject')) {
    return { isValid: false, reason: 'Please enter a valid subject.' };
  }

  return { isValid: true };
}

/**
 * Validates an email address and flags disposable/spammer patterns.
 */
export function validateEmail(email) {
  if (!email || typeof email !== 'string') {
    return { isValid: false, reason: 'Email is required.' };
  }

  const trimmed = email.trim().toLowerCase();
  
  // Standard format check
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  if (!emailRegex.test(trimmed)) {
    return { isValid: false, reason: 'Please enter a valid email address.' };
  }

  // Domain check
  const parts = trimmed.split('@');
  if (parts.length !== 2) return { isValid: false, reason: 'Invalid email format.' };
  
  const [localPart, domain] = parts;

  // Disposable domain check
  if (DISPOSABLE_EMAIL_DOMAINS.has(domain)) {
    return { isValid: false, reason: 'Temporary or disposable email addresses are not accepted.' };
  }

  // Excessive dots in local part (e.g. "i.f.o.z.o.f.u.q")
  const dotCount = (localPart.match(/\./g) || []).length;
  if (dotCount >= 4) {
    return { isValid: false, reason: 'Please enter a valid email address.' };
  }

  return { isValid: true };
}

/**
 * Master validation barrier for all form submissions.
 * Checks Honeypot, Time-to-submit, Gibberish, and Field integrity.
 */
export function validateSubmission(data, options = {}) {
  const { isServer = false } = options;

  // 1. HONEYPOT TRAP CHECK
  // If the honeypot field is filled with anything, it is 100% a bot.
  if (data.b_hp_query || data.company_website_hp || data._gotcha) {
    return {
      isValid: false,
      isSpam: true,
      reason: 'Automated submission detected (honeypot triggered).'
    };
  }

  // 2. VELOCITY / SUBMISSION SPEED CHECK (Server-side)
  // Humans take at least 2.5 seconds to fill out a contact or enquiry form.
  if (isServer && data._render_ts) {
    const renderTime = parseInt(data._render_ts, 10);
    const now = Date.now();
    if (!isNaN(renderTime) && now - renderTime < 2200) {
      return {
        isValid: false,
        isSpam: true,
        reason: 'Form submitted unnaturally fast (bot velocity detected).'
      };
    }
  }

  // 3. FULL NAME VALIDATION
  if (data.name !== undefined) {
    const nameCheck = validateName(data.name);
    if (!nameCheck.isValid) {
      return { isValid: false, isSpam: true, reason: nameCheck.reason };
    }
  }

  // 4. EMAIL VALIDATION
  if (data.email !== undefined) {
    const emailCheck = validateEmail(data.email);
    if (!emailCheck.isValid) {
      return { isValid: false, isSpam: true, reason: emailCheck.reason };
    }
  }

  // 5. PHONE VALIDATION
  if (data.phone !== undefined) {
    const digits = String(data.phone).replace(/\D/g, '');
    if (digits.length < 10) {
      return { isValid: false, isSpam: false, reason: 'Please enter a valid 10-digit phone number.' };
    }
    // Reject dummy repetition like "0000000000" or "1111111111"
    if (/^(\d)\1{9,}$/.test(digits)) {
      return { isValid: false, isSpam: true, reason: 'Please enter a valid phone number.' };
    }
  }

  // 6. SUBJECT VALIDATION (If present)
  if (data.subject !== undefined) {
    const subjectCheck = validateSubject(data.subject);
    if (!subjectCheck.isValid) {
      return { isValid: false, isSpam: true, reason: subjectCheck.reason };
    }
  }

  // 7. MESSAGE VALIDATION (If present)
  if (data.message !== undefined) {
    const messageCheck = validateMessage(data.message);
    if (!messageCheck.isValid) {
      return { isValid: false, isSpam: true, reason: messageCheck.reason };
    }
  }

  return { isValid: true, isSpam: false };
}
