"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

declare global {
  interface Window {
    _hsq?: unknown[][];
  }
}

/**
 * Keeps HubSpot page context in sync with the Next.js app router (setPath + trackPageView).
 * Pair with the HubSpot script in root layout (portal 244639378).
 */
export function HubSpotTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    window._hsq = window._hsq || [];
    window._hsq.push(["setPath", pathname]);
    window._hsq.push(["trackPageView"]);
  }, [pathname]);

  return null;
}
