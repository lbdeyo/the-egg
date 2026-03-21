"use client";

import Script from "next/script";

const HUBSPOT_FORMS_SCRIPT =
  "https://js-na2.hsforms.net/forms/embed/244639378.js";

/**
 * HubSpot “form frame” embed (same as client’s snippet).
 * Visual styling is overridden in `app/hubspot-form-overrides.css` to match the old MailingListForm.
 */
export function HubSpotEmbeddedMailingForm() {
  return (
    <div className="hubspot-mailing-embed flex w-full min-w-0 flex-col items-stretch gap-1">
      <h2 className="hubspot-mailing-heading m-0 w-full p-0 text-center text-xl font-normal text-zinc-400 drop-shadow-[0_1px_0_rgba(0,0,0,0.08)] lg:text-2xl">
        Join the wait list
      </h2>
      <div className="hubspot-form-slot w-full min-w-0 text-left">
        <Script
          id="hs-forms-embed-244639378"
          src={HUBSPOT_FORMS_SCRIPT}
          strategy="afterInteractive"
        />
        <div
          className="hs-form-frame"
          data-region="na2"
          data-form-id="7d448c69-ce15-451c-84b8-4dc6ce413019"
          data-portal-id="244639378"
        />
      </div>
    </div>
  );
}
