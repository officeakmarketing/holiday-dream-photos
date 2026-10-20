import { NextResponse } from 'next/server';
import { validateSubmission } from '@/lib/spamFilter';

// In-memory sliding window rate limiter
// Limits each IP to a max of 5 submissions per 10 minutes to prevent automated flooding
const ipSubmissionHistory = new Map();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const MAX_SUBMISSIONS_PER_WINDOW = 5;

function isRateLimited(ip) {
  const now = Date.now();
  const timestamps = ipSubmissionHistory.get(ip) || [];
  const recentTimestamps = timestamps.filter(ts => now - ts < RATE_LIMIT_WINDOW_MS);

  if (recentTimestamps.length >= MAX_SUBMISSIONS_PER_WINDOW) {
    ipSubmissionHistory.set(ip, recentTimestamps);
    return true;
  }

  recentTimestamps.push(now);
  ipSubmissionHistory.set(ip, recentTimestamps);

  // Clean up stale IPs periodically
  if (ipSubmissionHistory.size > 1000) {
    for (const [key, list] of ipSubmissionHistory.entries()) {
      if (list.every(ts => now - ts >= RATE_LIMIT_WINDOW_MS)) {
        ipSubmissionHistory.delete(key);
      }
    }
  }

  return false;
}

export async function POST(req) {
  try {
    const data = await req.json();

    // 1. IP extraction & Rate limiting
    const forwarded = req.headers.get('x-forwarded-for');
    const clientIp = forwarded ? forwarded.split(',')[0].trim() : (req.headers.get('x-real-ip') || '127.0.0.1');

    if (isRateLimited(clientIp)) {
      console.warn(`[RATE LIMIT TRIGGERED] Throttled submission from IP ${clientIp}`);
      // Return 200 to silence automated scripts
      return NextResponse.json({ success: true, filtered: true }, { status: 200 });
    }

    // 2. Comprehensive Spam, Gibberish, Honeypot & Velocity Barrier
    const validation = validateSubmission(data, { isServer: true });
    if (!validation.isValid) {
      console.warn(`[SPAM BARRIER BLOCKED] IP: ${clientIp} | Reason: ${validation.reason}`, {
        name: data.name,
        subject: data.subject,
        email: data.email,
        source: data.source
      });

      // If classified as spam (gibberish, bot velocity, honeypot trip, test keywords),
      // return a silent 200 OK so bots believe their query went through and do not adapt.
      // Do NOT forward to Make.com!
      if (validation.isSpam) {
        return NextResponse.json({ success: true, filtered: true }, { status: 200 });
      }

      return NextResponse.json(
        { error: validation.reason || 'Invalid submission details.' },
        { status: 400 }
      );
    }

    // 3. Strict Payload Sanitization & Field Whitelisting
    const allowedFields = {
      name: 50,
      email: 100,
      phone: 15,
      subject: 100,
      message: 800,
      source: 50,
      event_type: 100,
      event_date: 20,
      guests: 10,
      location: 100
    };

    const sanitizedData = {};

    for (const [key, maxLength] of Object.entries(allowedFields)) {
      if (data[key] !== undefined && data[key] !== null) {
        const strValue = String(data[key]).trim();
        if (strValue.length > maxLength) {
          return NextResponse.json(
            { error: `Field '${key}' exceeds maximum length of ${maxLength} characters.` },
            { status: 400 }
          );
        }
        sanitizedData[key] = strValue;
      }
    }

    // Extract Vercel headers for auto-detected geolocation
    const city = req.headers.get('x-vercel-ip-city') || 'Unknown';
    const country = req.headers.get('x-vercel-ip-country') || 'Unknown';

    // Attach verified location data to payload
    const payload = {
      ...sanitizedData,
      user_city: city,
      user_country: country,
    };

    // Forward ONLY validated, human submissions to Make.com
    const MAKE_WEBHOOK_URL = process.env.MAKE_WEBHOOK_URL || "https://hook.eu1.make.com/ngjfb2cy4b4et73omrrupxhgyskq2qh9";
    const MAKE_API_KEY = process.env.MAKE_API_KEY || "mk_live_a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6";

    const headers = {
      "Content-Type": "application/json"
    };

    if (MAKE_API_KEY) {
      headers["x-make-apikey"] = MAKE_API_KEY;
    }

    const response = await fetch(MAKE_WEBHOOK_URL, {
      method: "POST",
      headers,
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      console.error("Make.com Webhook failed with status:", response.status);
      return NextResponse.json({ error: "Webhook request failed" }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
