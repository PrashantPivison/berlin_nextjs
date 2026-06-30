import { NextResponse } from "next/server";

/**
 * Placeholder newsletter endpoint.
 *
 * TODO: wire this up to the real subscription provider. The original site
 * submits this form through WPForms (form id 54). Replace the body below with
 * a call to your ESP / CRM (Mailchimp, HubSpot, WPForms REST, etc.).
 */
export async function POST(request: Request) {
  try {
    const { firstName, lastName, email } = await request.json();

    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    // TODO: forward { firstName, lastName, email } to the newsletter provider.
    console.log("Newsletter signup:", { firstName, lastName, email });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 }
    );
  }
}
