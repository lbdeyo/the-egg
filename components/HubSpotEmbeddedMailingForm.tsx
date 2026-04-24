"use client";

import Script from "next/script";
import {
  HUBSPOT_WAITLIST_FORM_GUID,
  HUBSPOT_WAITLIST_PORTAL_ID,
} from "@/lib/hubspot-waitlist";

const HUBSPOT_FORMS_SCRIPT = `https://js-na2.hsforms.net/forms/embed/${HUBSPOT_WAITLIST_PORTAL_ID}.js`;

/**
 * HubSpot “form frame” embed (same as client’s snippet).
 * Visual styling is overridden in `app/hubspot-form-overrides.css` to match the old MailingListForm.
 */
export function HubSpotEmbeddedMailingForm() {
  return (
    <div className="hubspot-mailing-embed flex w-full min-w-0 flex-col items-stretch gap-1">
      <h2 className="hubspot-mailing-heading m-0 w-full p-0 text-left text-2xl font-normal leading-tight text-zinc-400 drop-shadow-[0_1px_0_rgba(0,0,0,0.08)] md:text-3xl lg:text-4xl">
        Join our mailing list
      </h2>
      <div className="hubspot-form-slot w-full min-w-0 text-left">
        <Script
          id={`hs-forms-embed-${HUBSPOT_WAITLIST_PORTAL_ID}`}
          src={HUBSPOT_FORMS_SCRIPT}
          strategy="afterInteractive"
        />
        <div
          className="hs-form-frame"
          data-region="na2"
          data-form-id={HUBSPOT_WAITLIST_FORM_GUID}
          data-portal-id={HUBSPOT_WAITLIST_PORTAL_ID}
        />
      </div>
    </div>
  );
}
