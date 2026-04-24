"use client";

import { FormEvent, useState } from "react";

const LEGAL_COPY =
  "The Zahir Productions needs the contact information you provide to us to contact you about our products and services. You may unsubscribe from these communications at any time.";

/** In-page waitlist: same API as the HubSpot iframe embed, which site CSS cannot style. */
export function NativeWaitlistSubscribeForm() {
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);
  const [feedback, setFeedback] = useState<{ kind: "ok" | "err"; text: string } | null>(
    null,
  );

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFeedback(null);
    setBusy(true);
    try {
      const res = await fetch("/api/hubspot/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setFeedback({
          kind: "err",
          text: data.error || "Something went wrong.",
        });
        return;
      }
      setFeedback({ kind: "ok", text: "Thanks — you're on the list." });
      setEmail("");
    } catch {
      setFeedback({
        kind: "err",
        text: "Network error. Try again shortly.",
      });
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="flex w-full min-w-0 flex-col items-stretch gap-2 font-bogart">
      <h2 className="m-0 w-full p-0 text-left text-2xl font-normal leading-tight text-zinc-100 drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)] md:text-3xl lg:text-4xl">
        Join our mailing list
      </h2>
      <form onSubmit={onSubmit} className="flex w-full flex-col gap-2 text-left">
        <label
          htmlFor="egg-waitlist-email"
          className="text-xl text-zinc-100 lg:text-2xl drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]"
        >
          Email<span className="text-zinc-300">*</span>
        </label>
        <input
          id="egg-waitlist-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-md border border-zinc-300/40 bg-black/35 px-2 py-2 text-base text-zinc-100 placeholder:text-zinc-400"
          placeholder="you@example.com"
          disabled={busy}
        />
        <p className="m-0 max-w-prose text-sm leading-relaxed text-zinc-200">
          {LEGAL_COPY}
        </p>
        <div className="flex justify-end pt-1">
          <button
            type="submit"
            disabled={busy}
            className="rounded-md border border-zinc-200 bg-transparent px-4 py-2 text-sm font-medium text-zinc-100 transition hover:bg-white/10 disabled:opacity-50"
          >
            {busy ? "Submitting…" : "Submit"}
          </button>
        </div>
        {feedback && feedback.kind === "err" ? (
          <p role="alert" className="text-sm text-red-400">
            {feedback.text}
          </p>
        ) : feedback ? (
          <p role="status" className="text-sm text-zinc-300">
            {feedback.text}
          </p>
        ) : null}
      </form>
    </div>
  );
}
