"use client";

import Image from "next/image";
import { Fragment } from "react";
import { MailingListForm } from "@/components/MailingListForm";

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

export default function Home() {
  return (
    <div className="relative min-h-screen w-full font-sans bg-white">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <Image
          src="/img/whiteegg.png"
          alt="bg"
          width={1600}
          height={1600}
          className="h-full max-h-full w-auto max-w-[975px] shrink-0 object-contain xl:max-w-[1265px]"
          style={{ transform: "scale(0.75)" }}
          priority
          unoptimized
        />
      </div>
      <div className="relative z-10 flex min-h-screen flex-col">
        {/* <NavBar /> */}

        <p className="pointer-events-none absolute left-0 top-0 z-20 max-w-[calc(100vw-4rem)] px-8 pt-8 text-sm leading-snug text-zinc-500 sm:max-w-xl md:px-12 md:pt-10 lg:max-w-2xl lg:px-20">
          The Egg: Coming to The Rosette theater, Austin, TX, October 29 -
          November 21.
        </p>

        {/* Title + subheader – shrink-wrapped block centered in viewport; text left inside the block */}
        <section className="flex min-h-screen flex-col justify-center bg-transparent px-8 py-8 md:px-12 lg:px-20">
          <div className="mx-auto w-fit max-w-[min(100%,64rem)] text-left">
            <MailingListForm />
          </div>
        </section>

        <div className="translate-x-[40px]">
          {/* About the Play */}
          <section
            id="about"
            className="px-8 py-4 max-w-2xl md:px-12 lg:px-20 lg:ms-40 hidden"
          >
            <div className="p-2 bg-white">
              <h2 className="tk-kallisto-lined mb-3 text-2xl uppercase tracking-wide text-orange-600 md:text-3xl drop-shadow-[0_1px_0_rgba(0,0,0,0.12)]">
                About the Play
              </h2>
              <div
                className="space-y-5 text-base leading-relaxed text-zinc-800"
                style={{
                  fontFamily: '"bitcount-grid-single-circle", sans-serif',
                  fontWeight: 500,
                  fontStyle: "normal",
                }}
              >
                {ABOUT_PARAS.map((para, i) => (
                  <p key={i} className="drop-shadow-[0_1px_0_rgba(0,0,0,0.06)]">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </section>

          {/* Characters */}
          <section
            id="characters"
            className="px-8 py-16 md:px-12 lg:px-20 lg:ms-55 hidden"
          >
            <div className="mx-auto max-w-4xl">
              <h2 className="tk-kallisto-lined mb-10 text-2xl uppercase tracking-wide text-orange-600 md:text-3xl drop-shadow-[0_1px_0_rgba(0,0,0,0.12)]">
                Characters
              </h2>
              <div className="grid gap-x-12 gap-y-4 md:grid-cols-[auto_1fr]">
                {CHARACTERS.map(({ name, description }) => (
                  <Fragment key={name}>
                    <div className="font-semibold uppercase tracking-wide text-zinc-900 drop-shadow-[0_1px_0_rgba(0,0,0,0.08)]">
                      {name}
                    </div>
                    <p className="text-zinc-800 drop-shadow-[0_1px_0_rgba(0,0,0,0.06)]">
                      {description}
                    </p>
                  </Fragment>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
