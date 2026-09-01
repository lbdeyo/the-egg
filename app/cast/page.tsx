import type { Metadata } from "next";
import Image from "next/image";
import { SiteNav } from "@/components/SiteNav";

export const metadata: Metadata = {
  title: "Cast — The Egg",
  description: "Meet the cast of THE EGG.",
};

const CAST = [
  {
    character: "Mavis",
    actor: "Jessica Brynn Cohen",
    photo: "/img/cast-photos/Jessica Cohen.jpg",
  },
  {
    character: "Raymond",
    actor: "Justin Smith",
    photo: "/img/cast-photos/Justin Smith.jpeg",
  },
  {
    character: "Chuy",
    actor: "Frank Rivera",
    photo: "/img/cast-photos/Frank Rivera.jpg",
  },
  {
    character: "Agnes",
    actor: "Danu Mara",
    photo: "/img/cast-photos/DanuMara.jpeg",
  },
  {
    character: "Falco",
    actor: "Beau Paul",
    photo: "/img/cast-photos/BeauPaulMaster2.jpg",
  },
  {
    character: "Hortensia",
    actor: "Meg Hobgood",
    photo: "/img/cast-photos/meg-hobgood.jpg",
  },
  {
    character: "Soraya",
    actor: "Laura D'Eramo",
    photo: "/img/cast-photos/Laura D_Eramo.jpg",
  },
  {
    character: "Doot",
    actor: "Devon Ragsdale",
    photo: "/img/cast-photos/Devon Ragsdale.png",
  },
  {
    character: "Ah",
    actor: "Delan Crawford",
    photo: "/img/cast-photos/delan crawford.jpg",
  },
  {
    character: "Bootay + Patient",
    actor: "Samantha Plumb",
    photo: "/img/cast-photos/sam_plumb.jpg",
  },
  {
    character: "Lambast P. Sketch + Wulfgar",
    actor: "Bryan Headrick",
    photo: "/img/cast-photos/bryanh.jpg",
  },
  {
    character: "Hector + Therapist",
    actor: "Michael Morse",
    photo: "/img/cast-photos/Michael Morse.jpg",
  },
  {
    character: "Pete + Eddie",
    actor: "Denis Harrigan",
    photo: "/img/cast-photos/denis.png",
  },
];

export default function CastPage() {
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
        <SiteNav />

        <main className="font-bogart px-8 py-6 text-zinc-100 md:px-12 md:py-8">
          <h1 className="mb-10 text-4xl tracking-tight text-zinc-100 drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)] md:text-5xl">
            Cast
          </h1>

          <ul className="grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {CAST.map(({ character, actor, photo }) => (
              <li
                key={`${character}-${actor}`}
                className="overflow-hidden rounded-lg border border-zinc-200/20 bg-black/50 shadow-2xl"
              >
                <div className="relative aspect-3/4 w-full">
                  <Image
                    src={photo}
                    alt={actor}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    unoptimized
                  />
                </div>
                <div className="space-y-1 p-4">
                  <p className="text-lg text-orange-500 drop-shadow-[0_1px_0_rgba(0,0,0,0.12)] md:text-xl">
                    {character}
                  </p>
                  <p className="text-base leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)] md:text-lg">
                    {actor}
                  </p>
                </div>
              </li>
            ))}
          </ul>
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
