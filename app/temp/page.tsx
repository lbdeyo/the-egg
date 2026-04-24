"use client";

import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import { NativeWaitlistSubscribeForm } from "@/components/NativeWaitlistSubscribeForm";

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
        {/* <NavBar /> */}

        {/* Title + subheader – shrink-wrapped block centered in viewport; text left inside the block */}
        <h1 className="font-bogart px-8 pt-8 text-4xl tracking-tight text-zinc-100 drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)] md:px-12 md:pt-10 md:text-5xl lg:text-8xl">
          THE EGG
        </h1>
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
          <section id="watch" className="px-8 py-2 max-w-4xl md:px-12">
            <div className="p-2">
              <h2 className="font-bogart mb-3 text-2xl tracking-wide text-orange-500 md:text-3xl drop-shadow-[0_1px_0_rgba(0,0,0,0.12)]">
                <a
                  href="https://seedandspark.com/fund/the-egg-a-play"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-sm text-inherit no-underline transition hover:underline hover:decoration-orange-400/90 hover:underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black/50"
                >
                  Support THE EGG on Seed & Spark
                </a>
              </h2>
              <p className="font-bogart mb-5 max-w-3xl text-base leading-relaxed text-zinc-100 drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)] md:text-lg">
                THE EGG is a one-of-a-kind theatrical experience featuring freakish
                birdpeople, illegal surgery, and out-of-control technology.
              </p>
              <div className="relative w-full overflow-hidden rounded-lg border border-zinc-200/20 bg-black/50 shadow-2xl">
                <div className="relative w-full pt-[56.25%]">
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src="https://www.youtube.com/embed/e5HnMOaWHGc"
                    title="The Egg video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>
              <a
                href="https://seedandspark.com/fund/the-egg-a-play?token=29b74830a1f32f0b1a467d5b0fd655718ca5ee87206cb558566f375daebc16e2"
                className="font-bogart mt-4 inline-flex items-center justify-center rounded-md bg-orange-600 px-6 py-3 text-base font-normal text-zinc-100 shadow-md transition hover:bg-orange-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black/50"
                target="_blank"
                rel="noopener noreferrer"
              >
                Preview the Campaign
              </a>
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
