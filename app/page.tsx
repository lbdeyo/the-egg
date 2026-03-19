"use client";

import Image from "next/image";
import { Fragment } from "react";
import { NavBar } from "./NavBar";

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
    <div className="relative min-h-screen w-full font-sans bg-[#181818]">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image
          src="/img/ostrich-egg-px.png"
          alt="bg"
          width={1600}
          height={1600}
          className="h-full w-full max-w-[975px] xl:max-w-[1265px] object-contain"
          style={{ transform: "translateX(-50%) scale(0.75)" }}
          priority
          unoptimized
        />
      </div>
      <div className="relative z-10 flex min-h-screen flex-col">
        <NavBar />

        <div className="translate-x-[40px]">
          {/* Title – on background, no hero block */}
          <section className="bg-transparent px-8 pt-10 pb-6 md:px-12 lg:px-20">
            <div className="max-w-5xl lg:ms-40">
              <h1
                className="text-5xl tracking-tight text-orange-500 md:text-6xl lg:text-7xl drop-shadow-[0_2px_0_rgba(0,0,0,1)]"
                style={{
                  fontFamily: '"superscore-vf", sans-serif',
                  fontVariationSettings: '"FLUX" 0, "wght" 700',
                }}
              >
                The Egg <br></br>
                <span
                  className="text-zinc-400 text-3xl md:text-7xl"
                  style={{
                    fontFamily: '"superscore-vf", sans-serif',
                    fontVariationSettings: '"FLUX" 0, "wght" 400',
                  }}
                >
                  A Play
                </span>
              </h1>
              <p
                className="mt-4 text-2xl lg:text-3xl text-zinc-500 drop-shadow-[0_2px_0_rgba(0,0,0,1)]"
                style={{
                  fontFamily: '"cc-overbyte-off", sans-serif',
                  fontWeight: 400,
                  fontStyle: "normal",
                }}
              >
                Welcome to the incubation
              </p>
            </div>
          </section>

          {/* About the Play */}
          <section
            id="about"
            className="px-8 py-4 max-w-2xl md:px-12 lg:px-20 lg:ms-40"
          >
            <div className="p-2 bg-[#181818]">
              <h2 className="tk-kallisto-lined mb-3 text-2xl uppercase tracking-wide text-orange-500 md:text-3xl drop-shadow-[0_2px_0_rgba(0,0,0,1)]">
                About the Play
              </h2>
              <div
                className="space-y-5 text-base leading-relaxed text-white/90"
                style={{
                  fontFamily: '"bitcount-grid-single-circle", sans-serif',
                  fontWeight: 500,
                  fontStyle: "normal",
                }}
              >
                {ABOUT_PARAS.map((para, i) => (
                  <p key={i} className="drop-shadow-[0_2px_0_rgba(0,0,0,1)]">
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
              <h2 className="tk-kallisto-lined mb-10 text-2xl uppercase tracking-wide text-orange-500 md:text-3xl drop-shadow-[0_2px_0_rgba(0,0,0,1)]">
                Characters
              </h2>
              <div className="grid gap-x-12 gap-y-4 md:grid-cols-[auto_1fr]">
                {CHARACTERS.map(({ name, description }) => (
                  <Fragment key={name}>
                    <div className="font-semibold uppercase tracking-wide text-white drop-shadow-[0_2px_0_rgba(0,0,0,1)]">
                      {name}
                    </div>
                    <p className="text-white/90 drop-shadow-[0_2px_0_rgba(0,0,0,1)]">
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
