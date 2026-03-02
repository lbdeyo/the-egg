"use client";

import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "History", href: "#history" },
  { label: "Get Involved", href: "#get-involved" },
  { label: "Playwright", href: "#playwright" },
  { label: "Contact", href: "#contact" },
];

const ABOUT_PARAS = [
  "THE EGG is about an egg-laying college professor, a feather-faced hacker, and a mute street artist whose lives collide when a disruptive technology enters the scene.",
  "THE EGG is about identity and being true to oneself.",
  "THE EGG is about isolation and connection.",
  "THE EGG is about what happens when corporations take artificial intelligence to its logical extreme.",
  "THE EGG is about the role of art in daily life.",
  "THE EGG is about mortality and immortality. Aging and childhood. Love and death and friendship.",
  "And it's got an army of dolls.",
];

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
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full font-sans bg-transparent">
      {/* Background */}
      <Image
        src="/img/egg-site-bg.png"
        alt="bg"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />
      <div className="relative z-10 flex min-h-screen flex-col ">
        {/* Header – sits on top of full-bleed background */}
        <header className="flex shrink-0 items-center justify-between border-b border-white/10 bg-[#363636] pl-[10px] pr-6 py-1.5">
          {/* Left: egg icon + desktop nav */}
          <div className="flex items-center gap-[10px]">
            <Image
              src="/img/egg-icon.svg"
              alt=""
              width={24}
              height={24}
              className="h-6 w-6 shrink-0"
            />
            {/* Desktop nav */}
            <nav className="hidden md:flex flex-wrap items-center gap-2 text-[0.7rem] uppercase tracking-wide text-white">
              {NAV_LINKS.map((link, i) => (
                <span key={link.href} className="flex items-center gap-2">
                  <Link
                    href={link.href}
                    className="hover:text-orange-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                  {i < NAV_LINKS.length - 1 && (
                    <span className="text-white/40">|</span>
                  )}
                </span>
              ))}
            </nav>
          </div>

          {/* Desktop tagline */}
          <p className="hidden md:block ps-3 shrink-0 whitespace-nowrap text-[0.7rem] uppercase tracking-wide text-[#cccccc]">
            A dark comedy about technology gone very, very wrong.
          </p>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="ml-2 flex h-8 w-8 flex-col items-center justify-center md:hidden space-y-0.5"
            aria-label="Toggle navigation"
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span className="h-0.5 w-4 bg-white" />
            <span className="h-0.5 w-4 bg-white" />
            <span className="h-0.5 w-4 bg-white" />
          </button>
        </header>

        {/* Mobile menu */}
        {mobileOpen && (
          <nav className="md:hidden border-b border-white/10 bg-[#363636] pl-[10px] pr-6 py-2">
            <ul className="flex flex-col gap-2 text-[0.7rem] uppercase tracking-wide text-white">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-orange-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {/* Title – on background, no hero block */}
        <section className="bg-transparent px-8 pt-10 pb-6 md:px-12 lg:px-20">
          <div className="max-w-5xl">
            <h1 className="tk-baroque-text-jf text-5xl tracking-tight text-orange-500 md:text-6xl lg:text-8xl">
              The Egg <span className="text-zinc-700">A Play</span>
            </h1>
            <p className="mt-4 text-lg text-zinc-500">
              Welcome to the incubation
            </p>
          </div>
        </section>

        {/* About the Play */}
        <section id="about" className="px-8 py-16 md:px-12 lg:px-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="tk-kallisto-lined mb-8 text-2xl uppercase tracking-wide text-orange-500 md:text-3xl">
              About the Play
            </h2>
            <div className="space-y-5 text-base leading-relaxed text-white/90">
              {ABOUT_PARAS.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Characters */}
        <section id="characters" className="px-8 py-16 md:px-12 lg:px-20">
          <div className="mx-auto max-w-4xl">
            <h2 className="tk-kallisto-lined mb-10 text-2xl uppercase tracking-wide text-orange-500 md:text-3xl">
              Characters
            </h2>
            <div className="grid gap-x-12 gap-y-4 md:grid-cols-[auto_1fr]">
              {CHARACTERS.map(({ name, description }) => (
                <Fragment key={name}>
                  <div className="font-semibold uppercase tracking-wide text-white">
                    {name}
                  </div>
                  <p className="text-white/90">{description}</p>
                </Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* Footer accent */}
        <footer className="px-8 py-4 md:px-12 lg:px-20">
          <span className="text-xs uppercase tracking-wider text-orange-500/70">
            Abeper →
          </span>
        </footer>
      </div>
    </div>
  );
}
