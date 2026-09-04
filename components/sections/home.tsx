import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"
import { IMAGES } from "@/lib"

const TAGS = ["Architecture", "Interiors", "Construction", "Renovation"]

export function Home() {
  return (
    <section
      id="home"
      className="relative grid min-h-svh items-end pt-30 pb-8.5 md:pt-32.5"
    >
      {/* Background image + scrims */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={IMAGES.heroResidential}
          alt="Completed CHRYSOLYTE residential project"
          fill
          priority
          sizes="100vw"
          className="scale-[1.04] object-cover"
        />

        {/* Darkening gradient so the headline stays legible over the photo */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, rgba(7,8,10,.35), rgba(7,8,10,.16) 25%, rgba(7,8,10,.75) 75%, #07080a 100%),
                         radial-gradient(circle at right top, rgba(255,255,255,.08), transparent 38%)`,
          }}
        />
      </div>

      <div className="relative z-2 site-container grid items-end gap-7 lg:grid-cols-[1.25fr_0.75fr]">
        <div>
          <p className="inline-flex items-center gap-2.5 rounded-full border border-white/16 bg-white/[0.07] px-3.5 py-2 text-eyebrow tracking-[0.18em] text-[#e5ebf0] uppercase backdrop-blur-sm">
            Kenya-based design &amp; build studio
          </p>

          <h1 className="my-4.5 max-w-[10ch] text-display md:max-w-[8ch]">
            From raw structure to{" "}
            <span className="text-white [text-shadow:0_8px_40px_rgba(0,0,0,.2)]">
              finished spaces.
            </span>
          </h1>

          <p className="max-w-152 text-lead text-[#dbe3ea]">
            CHRYSOLYTE delivers architecture, interiors and construction with a
            clean visual language and a practical build mindset — taking
            projects from concept, to site, to completion.
          </p>

          <div className="mt-7 flex flex-wrap gap-3.5">
            <Button
              asChild
              className="h-auto rounded-full bg-white px-5 py-3.5 font-semibold text-[#090b0e] shadow-(--shadow-glow) transition hover:-translate-y-0.5 hover:bg-white"
            >
              <Link href="#projects">View projects</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-auto rounded-full border-white/18 bg-white/6 px-5 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/12 hover:text-white"
            >
              <Link href="#contact">Start a project</Link>
            </Button>
          </div>
        </div>

        <Reveal className="max-w-none justify-self-start rounded-[26px] border border-white/10 bg-linear-to-b from-[rgba(16,18,22,0.82)] to-[rgba(11,13,16,0.7)] p-5.5 shadow-(--shadow-panel) backdrop-blur-[18px] lg:max-w-90 lg:justify-self-end">
          <p className="text-[0.74rem] tracking-[0.22em] text-[#98a4b3] uppercase">
            Featured Project
          </p>
          <h2 className="mt-2.5 mb-1.5 text-[1.35rem] font-bold">
            Contemporary residential completion
          </h2>
          <p className="mb-4.5 text-[0.95rem] text-[#c6d0da]">
            A clean finished home with bold vertical stone elements, patterned
            balustrades and a fully resolved driveway and landscape edge.
          </p>
          <ul className="flex flex-wrap gap-2.5">
            {TAGS.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-white/10 bg-white/4 px-3 py-2 text-[0.8rem] text-[#d4dbe3]"
              >
                {tag}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
