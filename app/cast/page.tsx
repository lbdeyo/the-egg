import type { Metadata } from "next";
import Image from "next/image";
import { SiteNav } from "@/components/SiteNav";

export const metadata: Metadata = {
  title: "Cast — The Egg",
  description: "Meet the cast of THE EGG.",
};

type CastMember = {
  character: string;
  actor: string;
  photo: string;
  bio?: string;
  instagram?: string;
  website?: string;
  websiteLabel?: string;
};

const CAST_LINK_CLASS =
  "text-orange-400 underline-offset-2 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";

const CAST: CastMember[] = [
  {
    character: "Mavis",
    actor: "Jessica Brynn Cohen",
    photo: "/img/cast-photos/Jessica Cohen.jpg",
    bio: "Jessica Brynn Cohen is an actor, writer, and musician. She's appeared on stages like City Theatre, the Vortex, and most recently Hyde Park Theatre in The Zahir's production of Oversight. She holds a B. Iden Payne Award and an Austin Theatre Critics Award nomination. Along with several shorts, film credits include Richard Linklater’s Netflix film Apollo 10½.",
    instagram: "jessa.cohen",
  },
  {
    character: "Raymond",
    actor: "Justin Smith",
    photo: "/img/cast-photos/justin-smith.jpg",
    bio: "Justin G. Smith is an actor and musician originally from Memphis, Tennessee and a company member with The Zahir. A longtime performer within Austin's creative community, he has spent over a decade appearing on regional stages and recordings and has toured nationally and internationally as a musician. Recent theatre credits include productions with Dirty Gold, Ground Floor Theatre, Jarrott Productions, Austin Shakespeare and more. Justin is most drawn to grounded, character-driven stories.",
  },
  {
    character: "Chuy",
    actor: "Frank Rivera",
    photo: "/img/cast-photos/Frank Rivera.jpg",
    bio: "Frank Rivera acts, writes, and teaches in Austin thanks to the continued support of his friends and family. He has been involved with productions with the Austin Rainbow Theatre, Different Stages, and The Stage. Offstage, he bravely faces the Texas public education system as an English teacher. He’d like to thank The Zahir for their hospitality and talent.",
  },
  {
    character: "Agnes",
    actor: "Danu Mara",
    photo: "/img/cast-photos/DanuMara.jpeg",
    bio: "Danu Mara (Agnes) played Rep. Johnston, Oversight; The Woman, Apprehension; B. Iden Payne and Austin Theatre Critic’s Award winner as Dre, I Wanna Be a F*cking Princess. World tours with The Intergalactic Nemesis, Emmy nominated with The Latino Comedy Project; B.A.Theatre, TWU; graduate of Second City Training Center in Chicago and The Robichaux Studio.",
    website: "https://www.danumara.com",
    websiteLabel: "www.DanuMara.com",
  },
  {
    character: "Falco",
    actor: "Beau Paul",
    photo: "/img/cast-photos/BeauPaulMaster2.jpg",
    bio: "Beau has been working in the Austin Theatre Community for many years as an actor, dramaturg, and director. He recently appeared in Midnight and Much Ado About Nothing. Beau has earned B. Iden Payne nominations for his roles in Different Stages’ Heartbreak House and Jarrot Productions’ The Frog Prince. He studied acting and directing at Texas State University.",
  },
  {
    character: "Hortensia",
    actor: "Meg Hobgood",
    photo: "/img/cast-photos/meg-hobgood.jpg",
    bio: "Meg Hobgood was last seen breaking the seal of the dance floor at the Stargaze Theater Festival, as June in A Bad Influence, and Rose Wilder Lane in The Last Seance of Harry Houdini. Meg got their start in Austin as Lynn Beaver’s ASM. Lynn’s grace has guided them every step of the way ever since. Gratitude to Bobo who taught them to, “Make ’Em Laugh”.",
  },
  {
    character: "Soraya",
    actor: "Laura D'Eramo",
    photo: "/img/cast-photos/laura-headshot.jpg",
    bio: "Laura D’Eramo is a St. Edward’s University graduate. She trained at Atlantic Acting School in NYC. She spent two years in Japan teaching English and performed with Tokyo International Players. Since returning to Austin in 2024, credits include Austin Shakespeare, The Vortex, The Stage Austin, and Walking Shadow Shakespeare. Most recently, she appeared in The Zahir’s Oversight.",
  },
  {
    character: "Doot",
    actor: "Devon Ragsdale",
    photo: "/img/cast-photos/Devon Ragsdale.png",
    bio: "Devon is delighted to join The Zahir for the first time. Roles this year include Miss Nelson and Miss Swamp in Miss Nelson is Missing, the Frontera Fest Best of Fest-winning play A Great Relief, and Jennifer in the Southwest regional premiere of Destination. She has a background in improv and sketch comedy, and also works in film.",
  },
  {
    character: "Ah",
    actor: "Delan Crawford",
    photo: "/img/cast-photos/delan crawford.jpg",
    bio: "Delan Crawford has been seen locally in Falling Down The Mountain of Great Storms (Hedgehog), The Last Match (Sergei), and Unbury Your Gays (Jess/Historian). Other notable credits include Yellow Inn (Chef) and She Kills Monsters (Orcus). He is an Alumni from the TXST BFA Acting program and wishes to thank all of his friends and family who are his biggest supporters.",
  },
  {
    character: "Bootay + Patient",
    actor: "Samantha Plumb",
    photo: "/img/cast-photos/sam_plumb.jpg",
    bio: "Samantha Plumb is a passionate, and versatile performer. With experience in both classical and contemporary theatre, she is committed to bringing authenticity, energy, and emotional depth to every performance. Recent credits include Charmian in Walking Shadow Shakespeare's production of Caesar & Antony & Cleopatra, Lavinia in Titus Andronicus (Stage ATX) and Heron Chick in Falling Down The Mountain of Great Storms (Broad Theatre).",
  },
  {
    character: "Lambast P. Sketch + Wulfgar",
    actor: "Bryan Headrick",
    photo: "/img/cast-photos/bryanh.jpg",
    bio: "How, or in what way, can Bryan Headrick make himself sound accomplished and impressive in three hundred and seventy-five characters, or perhaps even fewer characters than three hundred seventy-five? Where to begin? Where to end? What kinds of things might go in the middle? It is a difficult thing to contemplate. To be sure, this abbreviated biography MUST begin with an",
  },
  {
    character: "Hector + Therapist",
    actor: "Michael Morse",
    photo: "/img/cast-photos/Michael Morse.jpg",
    bio: "Michael Morse is an actor, musician, and multidisciplinary artist/designer based in Austin, TX. He grew up in New York City where he studied drama and improv comedy. In Austin, he has had the honor of working with multiple theatre companies including Austin Shakespeare and The Filigree Theatre. He has played music at historic venues and displayed art at expos and galleries around the world.",
  },
  {
    character: "Pete + Eddie",
    actor: "Denis Harrigan",
    photo: "/img/cast-photos/denis.png",
    bio: "Denis Harrigan is a trained, Austin-based actor with experience in stage and on-camera performance. His work ranges from classical theatre to character-driven productions for younger audiences. He brings focus, physical awareness, adaptability, and a professional, collaborative approach to every role.",
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

          <ul className="grid max-w-6xl grid-cols-1 items-start gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {CAST.map(
              ({
                character,
                actor,
                photo,
                bio,
                instagram,
                website,
                websiteLabel,
              }) => (
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
                  {bio && (
                    <p className="pt-2 text-sm leading-relaxed text-zinc-200/90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)] md:text-base">
                      {bio}
                      {instagram && (
                        <>
                          {" "}
                          (
                          <a
                            href={`https://www.instagram.com/${instagram}/`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={CAST_LINK_CLASS}
                          >
                            @{instagram}
                          </a>
                          )
                        </>
                      )}
                      {website && (
                        <>
                          {" "}
                          <a
                            href={website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={CAST_LINK_CLASS}
                          >
                            {websiteLabel ?? website}
                          </a>
                        </>
                      )}
                    </p>
                  )}
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
