import { NextResponse } from "next/server";
import { validateSubmission } from "@/lib/spamFilter";

export async function POST(request) {
  try {
    const body = await request.json();
    
    // Validate submission through the spam barrier
    const validation = validateSubmission(body, { isServer: true });
    if (!validation.isValid) {
      if (validation.isSpam) {
        return NextResponse.json({ message: "Successfully submitted contact enquiry." }, { status: 200 });
      }
      return NextResponse.json({ error: validation.reason }, { status: 400 });
    }

    console.log("Contact form submission received:", body);

    return NextResponse.json(
      { message: "Successfully submitted contact enquiry." },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Error submitting form" },
      { status: 500 }
    );
  }
}
