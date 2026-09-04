import Image from "next/image"
import { PanelCard } from "@/components/panel-card"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { CardContent } from "@/components/ui/card"
import { IMAGES } from "@/lib"

const DISCIPLINES = [
  {
    title: "Architecture",
    detail: "Residential, commercial and institutional design",
  },
  {
    title: "Interiors",
    detail: "Office, hospitality and residential environments",
  },
  {
    title: "Landscape",
    detail: "Residential and commercial landscape planning",
  },
]

export function About() {
  return (
    <section id="about" className="py-section">
      <div className="site-container">
        <SectionHeading
          eyebrow="Studio"
          title={
            <>
              Design with intent.
              <br />
              Build with control.
            </>
          }
          lead="These visuals show the full CHRYSOLYTE story construction progress, concept direction, fit-out work and completed project outcomes."
        />

        <div className="grid items-stretch gap-7 lg:grid-cols-[1.08fr_0.92fr]">
          <Reveal>
            <PanelCard className="h-full">
              <CardContent className="p-7.5">
                <p className="text-[1.04rem] text-[#d6dee6]">
                  CHRYSOLYTE is a multidisciplinary design-and-build practice
                  delivering architectural, structural, interior and landscape
                  solutions, supported by BOQs, EIAs, project management,
                  feasibility studies and value engineering. Our work moves from
                  concept and planning through documentation, site coordination
                  and final delivery.
                </p>

                <ul className="mt-6 grid gap-3 md:grid-cols-3">
                  {DISCIPLINES.map(({ title, detail }) => (
                    <li
                      key={title}
                      className="rounded-[20px] border border-white/6 bg-white/4 p-4.5"
                    >
                      <b className="mb-1 block text-[1.4rem]">{title}</b>
                      <span className="text-[0.85rem] text-muted-foreground">
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </PanelCard>
          </Reveal>

          <Reveal delay={120}>
            <PanelCard className="relative h-full min-h-105">
              <Image
                src={IMAGES.entryInterior}
                alt="Refined entry interior detail"
                fill
                sizes="(max-width: 1080px) 100vw, 45vw"
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-linear-to-b from-transparent from-30% to-black/75"
              />
              <div className="absolute inset-x-6 bottom-6 z-2">
                <small className="text-[0.78rem] tracking-[0.18em] text-[#c8d0d8] uppercase">
                  Interior detail
                </small>
                <h3 className="mt-2.5 mb-1.5 text-[1.6rem] font-bold">
                  Warm modern entry sequence
                </h3>
                <p className="text-[#d6dde5]">
                  A compact but premium arrival space with timber, soft lighting
                  and tailored storage.
                </p>
              </div>
            </PanelCard>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
