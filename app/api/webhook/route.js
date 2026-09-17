import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const data = await req.json();
    
    // 1. Strict Payload Sanitization & Validation
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
        // Force conversion to string (prevents malicious nested objects/arrays)
        const strValue = String(data[key]).trim();
        
        // Reject if it exceeds realistic lengths (stops payload injection attacks)
        if (strValue.length > maxLength) {
          return NextResponse.json(
            { error: `Field '${key}' exceeds maximum length of ${maxLength} characters.` },
            { status: 400 }
          );
        }
        
        sanitizedData[key] = strValue;
      }
    }

    // Extract Vercel headers for location
    const city = req.headers.get('x-vercel-ip-city') || 'Unknown';
    const country = req.headers.get('x-vercel-ip-country') || 'Unknown';
    
    // Attach location data to the payload
    const payload = {
      ...sanitizedData,
      user_city: city,
      user_country: country,
    };

    // The Make.com Webhook URL and optional API Key
    // Pulling these from environment variables keeps them secure on the server
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
