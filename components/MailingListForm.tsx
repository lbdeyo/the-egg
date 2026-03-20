"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

export function MailingListForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const emailInput = form.elements.namedItem("email") as HTMLInputElement;
    const email = emailInput?.value?.trim();
    if (!email) return;

    setStatus("loading");
    setMessage(null);

    try {
      const res = await fetch("/api/hubspot/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = (await res.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!res.ok) {
        setStatus("error");
        setMessage(
          data.error || "Something went wrong. Please try again in a moment.",
        );
        return;
      }

      setStatus("success");
      setMessage("Thanks — you’re on the list.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <form className="flex flex-col gap-1" onSubmit={handleSubmit}>
      <label
        htmlFor="mailing-email"
        className="text-xl lg:text-2xl text-zinc-400 drop-shadow-[0_1px_0_rgba(0,0,0,0.08)]"
      >
        Join the wait list.
      </label>
      <input
        id="mailing-email"
        name="email"
        type="email"
        autoComplete="email"
        required
        disabled={status === "loading"}
        placeholder="Email"
        className="w-full rounded-md border border-zinc-200 p-2 text-zinc-400 placeholder:text-zinc-400 disabled:opacity-60"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="my-2 rounded-md border border-zinc-400 bg-transparent px-4 py-2 text-zinc-400 transition-colors hover:border-zinc-500 hover:bg-zinc-50 hover:text-zinc-500 disabled:pointer-events-none disabled:opacity-60"
      >
        {status === "loading" ? "Joining…" : "Join"}
      </button>
      {message && status === "error" ? (
        <p className="text-sm text-red-600" role="alert">
          {message}
        </p>
      ) : null}
      {message && status === "success" ? (
        <p className="text-sm text-zinc-500" aria-live="polite">
          {message}
        </p>
      ) : null}
    </form>
  );
}
