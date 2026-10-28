"use client";

import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import { NativeWaitlistSubscribeForm } from "@/components/NativeWaitlistSubscribeForm";
import { SiteNav } from "@/components/SiteNav";

// const ABOUT_PARAS = [
//   "THE EGG is a seductive, unsettling collision of flesh and code. An egg-laying college professor, a feather-faced hacker, and a mute street artist are drawn together when a new technology begins to dissolve the boundary between human and manufactured. What begins as innovation turns mythic and corporate, intimate and apocalyptic.",

//   "This is a story about identity under siege, about the longing to be known and the terror of being replicated. It is about art in an age of algorithms, connection in a world engineered for isolation, mortality facing the promise of digital immortality. Childhood and decay. Love and betrayal. And somewhere in the shadows, an army of dolls waits.",
// ];

const ABOUT_PARAS = [
  "THE EGG is an absurdist dark comedy about technology and art",

  "It is about identity under siege, about the longing to be known and the terror of being replicated",
  "It is about art in an age of algorithms; connection in a world engineered for isolation; and mortality colliding with the promise of digital immortality",
  "Childhood and decay. Love and betrayal.",
  "And somewhere in the shadows, an army of dolls awaits.",
];

//  THE EGG is an absurdist dark comedy about technology and art.

// It is about identity under siege, about the longing to be known and the terror of being replicated.

// It is about art in an age of algorithms; connection in a world engineered for isolation; and mortality colliding with the promise of digital immortality.

// Childhood and decay. Love and betrayal.

// And somewhere in the shadows, an army of dolls awaits.

type Character = { name: string; description: string };

const CHARACTERS: Character[] = [
  { name: "Raymond", description: "A nebbishy computer programmer." },
  { name: "Mavis", description: "A frustrated academic." },
  {
    name: "Chuy",
    description: "Raymond's only friend, a silent street artist.",
  },
  { name: "Agnes", description: "A woman with a secret." },
  { name: "Hortensia", description: "A woman with a plan." },
  { name: "Falco", description: "A man with a mask." },
  { name: "Soraya", description: "A voice in the machine." },
  { name: "Hector", description: "A man with a mission." },
  { name: "Pete & Wulfgar", description: "Security." },
  { name: "Lambast P. Sketch", description: "A critic." },
  { name: "Eddie", description: "A friend." },
  {
    name: "Ensemble",
    description:
      "The Dollums**, Patient, Therapist, Elevator Riders / Tourists / Mourners",
  },
];

const BACKGROUND_IMAGES = [
  "/img/site-bg-girl.jpg",
  "/img/site-bg-tommys.jpg",
  "/img/site-bg-kids.jpg",
];

export default function TempPage() {
  const [backgroundImage, setBackgroundImage] = useState(BACKGROUND_IMAGES[0]);

  useEffect(() => {
    const rafId = window.requestAnimationFrame(() => {
      const randomNumber = window.crypto.getRandomValues(new Uint32Array(1))[0];
      const randomIndex = randomNumber % BACKGROUND_IMAGES.length;
      setBackgroundImage(BACKGROUND_IMAGES[randomIndex]);
    });

    return () => window.cancelAnimationFrame(rafId);
  }, []);

  return (
    <div className="relative min-h-screen w-full font-sans bg-black">
      {/* Background — full-viewport cover */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image
          src={backgroundImage}
          alt=""
          fill
          className="object-cover object-top"
          sizes="100vw"
          priority
          unoptimized
        />
      </div>
      {/* Darken photo so light text stays readable */}
      <div
        className="pointer-events-none absolute inset-0 z-1 bg-black/60"
        aria-hidden
      />
      <div className="relative z-10 flex min-h-screen flex-col">
        <SiteNav />

        {/* Temporary cancellation notice — remove after opening weekend */}
        <div
          role="alert"
          className="mx-8 mt-8 mb-2 max-w-4xl rounded-xl border-4 border-amber-400 bg-amber-50 px-6 py-7 text-zinc-950 shadow-[0_12px_40px_rgba(0,0,0,0.45)] md:mx-12 md:px-10 md:py-9"
        >
          <blockquote className="font-bogart text-2xl italic leading-snug md:text-4xl">
            <p>
              &ldquo;The best-laid schemes of mice and men
              <br />
              Often go awry.&rdquo;
            </p>
          </blockquote>
          <p className="font-bogart mt-5 text-xl leading-relaxed md:text-2xl">
            We&apos;re canceling our 10/29/2026 performance of THE EGG and will
            open Friday, 10/30/2026. Ticket payments for the 29th have been
            refunded and all those affected are urged to get tickets for later
            shows. We have plenty of seats available this weekend and in all
            subsequent weekends. Thank you very much for your kind
            understanding.
          </p>
        </div>

        {/* Title + subheader – shrink-wrapped block centered in viewport; text left inside the block */}
        <p className="font-bogart px-8 text-xl leading-relaxed text-zinc-100 drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)] md:px-12 md:text-2xl">
          The Zahir Presents:
        </p>
        <h1 className="font-bogart px-8 text-4xl tracking-tight text-zinc-100 drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)] md:px-12 md:text-5xl lg:text-8xl">
          THE EGG
        </h1>
        <div className="font-bogart space-y-5 px-8 max-w-3xl text-zinc-100 md:px-12">
          <div className="space-y-1 text-xl leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)] md:text-2xl">
            <p>By Noah Masterson</p>
            <p>Directed by David Ritch</p>
            <p>
              Running October 29 - November 21, 2026 at Austin&apos;s The Rosette
            </p>
          </div>
          <a
            href="https://tickets.atxtheatre.org/organizations/the-zahir"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-2xl tracking-wide text-orange-500 underline decoration-orange-500/70 underline-offset-4 transition hover:text-orange-400 hover:decoration-orange-400/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black/50 md:text-3xl drop-shadow-[0_1px_0_rgba(0,0,0,0.12)]"
          >
            Get Tickets
          </a>
          <div className="space-y-5 text-base leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)] md:text-lg">
            <p>
              Enter the world of THE EGG: A place immiserated and delighted by
              dark magic and even darker technology. A place where three social
              misfits, each carrying bizarre, intimate secrets, must navigate
              love and friendship under a rigid surveillance state.
            </p>
            <p>
              THE EGG is about art in an age of algorithms, connection in a
              culture of isolation, and the sirens&apos; call of digital
              immortality.
            </p>
            <p>
              THE EGG is a one-of-a-kind theatrical experience featuring
              freakish birdpeople, illegal surgery, and out-of-control
              technology.
            </p>
            <p>Enter at your own risk.</p>
            <div className="relative w-full overflow-hidden rounded-lg border border-zinc-200/20 bg-black/50 shadow-2xl">
              <div className="relative w-full pt-[56.25%]">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src="https://www.youtube.com/embed/CfJsYj6Uz1k?si=d_8WadqF03ZDBkOJ"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
        <div className="font-bogart text-zinc-100">
          {/* About the Play */}
          <section id="about" className="px-8 py-4 max-w-2xl md:px-12 hidden">
            <div className="p-2">
              <h2 className="font-bogart text-orange-500 mb-3 text-2xl uppercase tracking-wide md:text-3xl drop-shadow-[0_1px_0_rgba(0,0,0,0.12)]">
                About the Play
              </h2>
              <div className="space-y-5 text-base leading-relaxed">
                {ABOUT_PARAS.map((para, i) => (
                  <p key={i} className="drop-shadow-[0_1px_0_rgba(0,0,0,0.06)]">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </section>
          <section id="signup" className="px-8 py-4 max-w-4xl md:px-12">
            <div className="p-2">
              <div className="hubspot-form-on-dark rounded-lg border border-zinc-200/20 bg-black/50 p-4 shadow-2xl md:p-6">
                <NativeWaitlistSubscribeForm />
              </div>
            </div>
          </section>

          {/* Characters */}
          <section id="characters" className="hidden">
            <div className="max-w-4xl ms-15">
              <h2 className="font-bogart mb-10 text-2xl uppercase tracking-wide text-orange-600 md:text-3xl drop-shadow-[0_1px_0_rgba(0,0,0,0.12)]">
                Characters
              </h2>
              <div className="grid gap-x-12 gap-y-4 md:grid-cols-[auto_1fr]">
                {CHARACTERS.map(({ name, description }) => (
                  <Fragment key={name}>
                    <div className="font-bogart-bold uppercase tracking-wide p-2">
                      {name}
                    </div>
                    <p className="p-2 drop-shadow-[0_1px_0_rgba(0,0,0,0.06)]">
                      {description}
                    </p>
                  </Fragment>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* No visible chrome — only the logo reads; sticks to viewport bottom while scrolling */}
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
