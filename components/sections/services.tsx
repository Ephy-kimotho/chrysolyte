import Image from "next/image"
import { PanelCard } from "@/components/panel-card"
import { SectionHeading } from "@/components/section-heading"
import { GalleryStrip, type GalleryItem } from "@/components/gallery-strip"
import { Reveal } from "@/components/reveal"
import { IMAGES } from "@/lib"

const CAPABILITIES = [
  {
    title: "Architectural Design",
    body: "Residential, commercial and institutional planning, elevations, concepts, working drawings and coordinated design development.",
  },
  {
    title: "Structural Coordination",
    body: "Structural planning and interdisciplinary coordination to keep architectural intent and engineering requirements aligned.",
  },
  {
    title: "Interior + Landscape Design",
    body: "Office, restaurant and residential interiors, plus residential and commercial landscape planning responsive to climate and use.",
  },
  {
    title: "BOQs + EIAs",
    body: "Cost documentation, quantity planning and environmental assessment support where required.",
  },
  {
    title: "Project Management",
    body: "Coordination of consultants, contractors, site progress, quality and programme from pre-construction through handover.",
  },
  {
    title: "Feasibility + Value Engineering",
    body: "Early-stage viability studies and practical design reviews that improve performance, constructability and cost efficiency.",
  },
]

const RENDERS: GalleryItem[] = [
  {
    image: IMAGES.villaRender,
    alt: "Country villa concept render",
    title: "Concept render: Country Villa",
    body: "A modern multi-level residential concept with strong massing, neutral tones and a confident vertical signage element.",
  },
  {
    image: IMAGES.entryInterior,
    alt: "Warm modern entry interior detail",
    title: "Interior atmosphere",
    body: "Lighting, timber finishes and compact storage solutions shape a calm, high-end interior experience.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-section">
      <div className="site-container">
        <div className="grid items-center gap-5.5 md:grid-cols-[0.82fr_1.18fr]">
          <Reveal>
            {/* Portrait flyer: cap its width on phones so it stays short. */}
            <PanelCard className="max-md:mx-auto max-md:max-w-64">
              <Image
                src={IMAGES.flyerFloorPlan}
                alt="CHRYSOLYTE architectural flyer showing a floor plan"
                width={864}
                height={1536}
                sizes="(max-width: 760px) 256px, 38vw"
                className="h-auto w-full object-cover"
              />
            </PanelCard>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="Capabilities"
              title={
                <>
                  Complete built-environment
                  <br />
                  services under one studio.
                </>
              }
              className="mb-4.5"
            />

            <dl className="grid gap-3.5">
              {CAPABILITIES.map((item, i) => (
                <Reveal key={item.title} delay={i * 60}>
                  <div className="rounded-[20px] border border-white/10 bg-white/3 px-5 py-4.5">
                    <dt className="mb-1 font-bold">{item.title}</dt>
                    <dd className="text-muted-foreground">{item.body}</dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>

        <GalleryStrip items={RENDERS} className="mt-6.5" />
      </div>
    </section>
  )
}
