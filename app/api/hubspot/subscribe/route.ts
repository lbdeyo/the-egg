import { NextRequest, NextResponse } from "next/server";
import {
  HUBSPOT_WAITLIST_FORM_GUID,
  HUBSPOT_WAITLIST_PORTAL_ID,
} from "@/lib/hubspot-waitlist";

/**
 * HubSpot Forms API v3 — same form as the site embed (`HubSpotEmbeddedMailingForm`).
 * Set `HUBSPOT_FORM_GUID` in `.env.local` only if you need a different form than the default.
 */
export async function POST(req: NextRequest) {
  const formGuid =
    process.env.HUBSPOT_FORM_GUID?.trim() || HUBSPOT_WAITLIST_FORM_GUID;

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const email =
    typeof body === "object" &&
    body !== null &&
    "email" in body &&
    typeof (body as { email: unknown }).email === "string"
      ? (body as { email: string }).email.trim()
      : "";

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
  }

  const fieldName = process.env.HUBSPOT_EMAIL_FIELD_NAME || "email";

  const referer = req.headers.get("referer") || undefined;

  const hsRes = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_WAITLIST_PORTAL_ID}/${formGuid}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        submittedAt: Date.now(),
        fields: [{ name: fieldName, value: email }],
        context: {
          ...(referer ? { pageUri: referer } : {}),
          pageName: "The Egg — A Play",
        },
      }),
    },
  );

  if (!hsRes.ok) {
    let detail = await hsRes.text();
    try {
      const j = JSON.parse(detail) as { message?: string };
      if (j.message) detail = j.message;
    } catch {
      /* keep raw text */
    }
    return NextResponse.json(
      { error: detail || "HubSpot rejected the submission." },
      { status: hsRes.status >= 400 && hsRes.status < 600 ? hsRes.status : 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
