import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Auditions — The Egg",
  description: "Audition information for THE EGG.",
};

const TALENTS = [
  "Mime",
  "Dance",
  "Movement",
  "Existential Dread",
  "Intensity",
  "Incorrigibility",
  "Insanity",
];

function Divider() {
  return (
    <hr
      className="my-6 max-w-md border-0 border-t border-zinc-400/40"
      aria-hidden
    />
  );
}

export default function AuditionsPage() {
  return (
    <div className="relative min-h-screen w-full font-sans bg-black">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image
          src="/img/site-bg-girl.jpg"
          alt=""
          fill
          className="object-cover object-top"
          sizes="100vw"
          priority
          unoptimized
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0 z-1 bg-black/60"
        aria-hidden
      />
      <div className="relative z-10 flex min-h-screen flex-col">
        <header className="px-8 pt-8 md:px-12 md:pt-10">
          <Link
            href="/"
            className="font-bogart text-4xl tracking-tight text-zinc-100 drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)] transition hover:text-orange-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black/50 md:text-5xl lg:text-6xl"
          >
            THE EGG
          </Link>
        </header>

        <main className="font-bogart px-8 py-6 text-zinc-100 md:px-12 md:py-8">
          <div className="max-w-2xl p-2">
            <h1 className="text-3xl tracking-wide text-orange-500 drop-shadow-[0_1px_0_rgba(0,0,0,0.12)] md:text-4xl">
              THE EGG Auditions
            </h1>
            <Link
              href="/"
              className="font-bogart mt-4 inline-block text-xl tracking-wide text-orange-500 underline decoration-orange-500/70 underline-offset-4 transition hover:text-orange-400 hover:decoration-orange-400/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black/50 md:text-2xl drop-shadow-[0_1px_0_rgba(0,0,0,0.12)]"
            >
              ← Home
            </Link>

            <Divider />

            <div className="space-y-1 text-lg leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)] md:text-xl">
              <p>Sunday, June 21st</p>
              <p>1:00pm – 4:00pm</p>
            </div>

            <Divider />

            <address className="space-y-1 text-lg not-italic leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)] md:text-xl">
              <p>Central Christian Church</p>
              <p>ATX Theatre [Room 220]</p>
              <p>1110 Guadalupe St, 78701</p>
            </address>

            <Divider />

            <div className="space-y-4 text-lg leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)] md:text-xl">
              <p>
                Seeking Actors with talents including, but not limited to:
              </p>
              <p>{TALENTS.join(", ")}</p>
            </div>

            <Divider />

            <p className="text-lg leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)] md:text-xl">
              To RSVP, email{" "}
              <a
                href="mailto:davidritch.creative@outlook.com"
                className="text-orange-400 underline decoration-orange-400/70 underline-offset-4 transition hover:text-orange-300 hover:decoration-orange-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black/50"
              >
                davidritch.creative@outlook.com
              </a>
            </p>
          </div>
        </main>

        <footer className="sticky bottom-0 z-30 mt-auto flex w-full justify-end bg-transparent px-8 py-6 md:px-12 md:py-8">
          <a
            href="https://the-zahir.org"
            className="inline-flex shrink-0 cursor-pointer rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            aria-label="Visit The Zahir"
          >
            <Image
              src="/img/zahir-logo-rev.png"
              alt=""
              width={300}
              height={300}
              className="pointer-events-none block h-21 w-auto mix-blend-screen opacity-60 transition-opacity hover:opacity-100 md:h-24"
              aria-hidden
            />
          </a>
        </footer>
      </div>
    </div>
  );
}
