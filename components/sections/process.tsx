import { Card } from "@/components/ui/card"
import { GalleryStrip, type GalleryItem } from "@/components/gallery-strip"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { IMAGES } from "@/lib"

const STEPS = [
  {
    number: "01",
    title: "Feasibility + Brief",
    body: "Study the site, requirements, opportunity, constraints, budget direction and development potential.",
  },
  {
    number: "02",
    title: "Design + Documentation",
    body: "Develop concepts, floor plans, elevations, working drawings, landscape and interior packages.",
  },
  {
    number: "03",
    title: "Cost + Value",
    body: "Prepare BOQs, review specifications and apply value engineering to balance performance, quality and cost.",
  },
  {
    number: "04",
    title: "Project Delivery",
    body: "Coordinate site execution, supervision, contractor interfaces, quality control and final handover.",
  },
]

const GALLERY: GalleryItem[] = [
  {
    image: IMAGES.heroResidential,
    alt: "Completed house with finished driveway and landscaping",
    title: "Completed result",
    body: "The finished outcome shows how architecture, surface finishing and external works combine into a stronger final identity.",
  },
  {
    image: IMAGES.houseElevation,
    alt: "House project nearing completion, before external works",
    title: "Site / near completion",
    body: "This image documents a late-stage condition before the landscaping and forecourt were fully resolved.",
  },
]

export function Process() {
  return (
    <section id="process" className="py-section">
      <div className="site-container">
        <SectionHeading
          eyebrow="Process"
          title={
            <>
              From feasibility
              <br />
              to final handover.
            </>
          }
          lead="Our process combines design thinking with technical coordination, cost awareness and site execution so decisions stay practical from the start."
        />

        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <li key={step.number} className="h-full">
              <Reveal delay={i * 90} className="h-full">
                <Card className="h-full gap-0 rounded-3xl border-white/10 bg-transparent bg-linear-[180deg] from-white/4 to-white/2 p-6 shadow-none">
                  <span
                    aria-hidden
                    className="mb-3.5 inline-flex size-9.5 items-center justify-center rounded-full bg-white/8 font-bold"
                  >
                    {step.number}
                  </span>
                  <h3 className="mb-2.5 text-[1.08rem] font-bold">
                    {step.title}
                  </h3>
                  <p className="text-[0.95rem] text-muted-foreground">
                    {step.body}
                  </p>
                </Card>
              </Reveal>
            </li>
          ))}
        </ol>

        <GalleryStrip items={GALLERY} className="mt-4.5" />
      </div>
    </section>
  )
}
