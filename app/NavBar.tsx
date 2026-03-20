"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "History", href: "#history" },
  { label: "Get Involved", href: "#get-involved" },
  { label: "Playwright", href: "#playwright" },
  { label: "Contact", href: "#contact" },
];

export function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="flex shrink-0 items-center justify-between border-b border-zinc-200 bg-white pl-[10px] pr-6 py-1.5">
        {/* Left: egg icon + desktop nav */}
        <div className="flex items-center gap-[10px]">
          <Link href="/" aria-label="Home">
            <Image
              src="/img/egg-icon.svg"
              alt=""
              width={24}
              height={24}
              className="h-6 w-6 shrink-0"
            />
          </Link>
          {/* Desktop nav */}
          <nav className="hidden md:flex flex-wrap items-center gap-2 text-[0.7rem] uppercase tracking-wide text-zinc-800 drop-shadow-[0_1px_0_rgba(0,0,0,0.06)]">
            {NAV_LINKS.map((link, i) => (
              <span key={link.href} className="flex items-center gap-2">
                <Link
                  href={link.href}
                  className="hover:text-orange-600 transition-colors"
                >
                  {link.label}
                </Link>
                {i < NAV_LINKS.length - 1 && (
                  <span className="text-zinc-300">|</span>
                )}
              </span>
            ))}
          </nav>
        </div>

        {/* Desktop tagline */}
        <p className="hidden md:block ps-3 shrink-0 whitespace-nowrap text-[0.7rem] uppercase tracking-wide text-zinc-600 drop-shadow-[0_1px_0_rgba(0,0,0,0.06)]">
          A dark comedy about technology gone very, very wrong.
        </p>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="ml-2 flex h-8 w-8 flex-col items-center justify-center space-y-0.5 md:hidden"
          aria-label="Toggle navigation"
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span className="h-0.5 w-4 bg-zinc-800" />
          <span className="h-0.5 w-4 bg-zinc-800" />
          <span className="h-0.5 w-4 bg-zinc-800" />
        </button>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="md:hidden border-b border-zinc-200 bg-white pl-[10px] pr-6 py-2">
          <ul className="flex flex-col gap-2 text-[0.7rem] uppercase tracking-wide text-zinc-800 drop-shadow-[0_1px_0_rgba(0,0,0,0.06)]">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-orange-600 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}
