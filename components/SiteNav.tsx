"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Cast", href: "/cast" },
];

export function SiteNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Main"
      className="font-bogart flex items-center gap-4 px-8 pt-6 text-sm uppercase tracking-wide md:px-12 md:pt-8 md:text-base"
    >
      {NAV_LINKS.map((link, i) => {
        const isActive =
          link.href === "/"
            ? pathname === "/"
            : pathname.startsWith(link.href);

        return (
          <span key={link.href} className="flex items-center gap-4">
            <Link
              href={link.href}
              className={`transition focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black/50 ${
                isActive
                  ? "text-orange-400"
                  : "text-zinc-100 hover:text-orange-400"
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              {link.label}
            </Link>
            {i < NAV_LINKS.length - 1 && (
              <span className="text-zinc-500" aria-hidden>
                |
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
