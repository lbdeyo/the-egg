import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { HubSpotTracker } from "@/components/HubSpotTracker";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Egg — A Play",
  description: "A dark comedy about technology gone very, very wrong.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/dmt4kkh.css" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-zinc-900`}
      >
        <Script
          id="hs-script-loader"
          src="https://js-na2.hs-scripts.com/244639378.js"
          strategy="afterInteractive"
        />
        <HubSpotTracker />
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
