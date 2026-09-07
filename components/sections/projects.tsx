import Image from "next/image"
import { Card } from "@/components/ui/card"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { IMAGES } from "@/lib"
import { cn } from "@/lib/utils"

interface Stage {
  number: string
  image: string
  alt: string
  label: string
  body: string
}

/**
 * A single project followed chronologically: frame, room formation, fit-out,
 * completion. The first three render as a row of progress frames; the fourth
 * is the full-width payoff beneath them.
 *
 * To add a second case study later, lift this array into a `cases` prop —
 * the markup below already takes its shape from the data.
 */
const STAGES: Stage[] = [
  {
    number: "01",
    image: IMAGES.underConstruction,
    alt: "Multi-storey building under construction",
    label: "Structure",
    body: "Frame, slabs and enclosure taken up floor by floor.",
  },
  {
    number: "02",
    image: IMAGES.interiorMasonry,
    alt: "Interior masonry and room formation on site",
    label: "Room formation",
    body: "Internal masonry sets out how each space will be used.",
  },
  {
    number: "03",
    image: IMAGES.kitchenInstall,
    alt: "Kitchen installation in progress",
    label: "Fit-out",
    body: "Joinery, services and finishes installed on site.",
  },
]

const COMPLETION: Stage = {
  number: "04",
  image: IMAGES.heroResidential,
  alt: "Completed house front elevation",
  label: "Completion",
  body: "Elevation, driveway and landscape resolved as one result.",
}

function StageBadge({ number }: { number: string }) {
  return (
    <span
      aria-hidden
      className="inline-flex size-9.5 items-center justify-center rounded-full border border-white/10 bg-white/8 font-bold backdrop-blur-sm"
    >
      {number}
    </span>
  )
}

export function Projects() {
  return (
    <section id="projects" className="py-section">
      <div className="site-container">
        <SectionHeading
          eyebrow="Selected Work"
          title={
            <>
              One project,
              <br />
              from frame to finish.
            </>
          }
          lead="Most studios publish finished photography only.This is a single residential project followed through the stages in between structure, room formation,fit-out and completion."
        />

        <ol className="grid gap-4.5 md:grid-cols-3">
          {STAGES.map((stage, i) => (
            <li key={stage.number} className="h-full">
              <Reveal delay={i * 90} className="h-full">
                <Card
                  className={cn(
                    "group relative h-full min-h-80 gap-0 overflow-hidden",
                    "rounded-3xl border-white/10 bg-[#111] py-0",
                    "shadow-(--shadow-panel)"
                  )}
                >
                  <Image
                    src={stage.image}
                    alt={stage.alt}
                    fill
                    sizes="(max-width: 761px) 100vw, 33vw"
                    className={cn(
                      "object-cover transition-transform duration-600 ease-out",
                      "group-hover:scale-[1.04] motion-reduce:transition-none",
                      "motion-reduce:group-hover:scale-100"
                    )}
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-linear-[180deg] from-transparent from-35% to-[rgba(9,11,14,0.92)]"
                  />
                  <div className="absolute inset-x-5.5 bottom-5 z-2">
                    <StageBadge number={stage.number} />
                    <h3 className="mt-3 mb-1.5 text-[1.35rem] leading-[1.05] font-bold">
                      {stage.label}
                    </h3>
                    <p className="text-[0.95rem] text-[#c2ccd6]">
                      {stage.body}
                    </p>
                  </div>
                </Card>
              </Reveal>
            </li>
          ))}

          <li className="h-full md:col-span-3">
            <Reveal delay={270} className="h-full">
              <Card
                className={cn(
                  "group relative h-[50%] min-h-90 gap-0 overflow-hidden lg:min-h-130",
                  "rounded-3xl border-white/10 bg-[#111] py-0",
                  "shadow-var(--shadow-panel)"
                )}
              >
                <Image
                  src={COMPLETION.image}
                  alt={COMPLETION.alt}
                  fill
                  sizes="100vw"
                  className={cn(
                    "object-cover transition-transform duration-600 ease-out",
                    "group-hover:scale-[1.04] motion-reduce:transition-none",
                    "motion-reduce:group-hover:scale-100"
                  )}
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-linear-[180deg] from-transparent from-45% to-[rgba(9,11,14,0.92)]"
                />
                <div className="absolute inset-x-5.5 bottom-6 z-2 max-w-136 lg:inset-x-8.5">
                  <StageBadge number={COMPLETION.number} />
                  <h3 className="mt-3 mb-2 text-h2 font-bold">
                    {COMPLETION.label}
                  </h3>
                  <p className="text-base text-[#d6dde5]">{COMPLETION.body}</p>
                </div>
              </Card>
            </Reveal>
          </li>
        </ol>
      </div>
    </section>
  )
}
