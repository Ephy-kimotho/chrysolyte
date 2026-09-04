import Image from "next/image"
import { Card } from "@/components/ui/card"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { IMAGES } from "@/lib"
import { cn } from "@/lib/utils"

const PROJECTS = [
  {
    image: IMAGES.houseElevation,
    alt: "Completed house front elevation",
    category: "Residential / Classical",
    title:
      "Large openings, tall windows and a strong indoor-outdoor connection.",
    body: "Designed around generous views, natural light and a refined exterior composition, with the house and landscape treated as one experience.",
    span: "lg:col-span-7",
    minHeight: "min-h-115",
    sizes: "(max-width: 1080px) 100vw, 58vw",
  },
  {
    image: IMAGES.underConstruction,
    alt: "Multi-storey building under construction",
    category: "Ongoing Works",
    title: "Construction progressing from frame to enclosure.",
    body: "CHRYSOLYTE coordinates structural progress, masonry, detailing and sequencing so the finished building remains aligned with the original design intent.",
    span: "lg:col-span-5",
    minHeight: "min-h-115",
    sizes: "(max-width: 1080px) 100vw, 42vw",
  },
  {
    image: IMAGES.kitchenInstall,
    alt: "Kitchen installation in progress",
    category: "Residential Interior",
    title: "Kitchen fit-out, joinery and practical space planning.",
    body: "Our residential interiors bring comfort and ambience into lounges, dining spaces, kitchens and everyday living areas through coordinated finishes and custom cabinetry.",
    span: "lg:col-span-8",
    minHeight: "min-h-115",
    sizes: "(max-width: 1080px) 100vw, 66vw",
  },
  {
    image: IMAGES.interiorMasonry,
    alt: "Interior masonry and room formation on site",
    category: "Architectural Works",
    title: "From working drawings to built form.",
    body: "Plans, elevations, sections and details guide the transformation from a design concept into a coordinated, buildable project.",
    span: "lg:col-span-4",
    minHeight: "min-h-115",
    sizes: "(max-width: 1080px) 100vw, 34vw",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-section">
      <div className="site-container">
        <SectionHeading
          eyebrow="Selected Work"
          title={
            <>
              Architecture, interiors
              <br />
              and landscape.
            </>
          }
          lead="CHRYSOLYTE's portfolio spans residential architecture, commercial and institutional buildings, landscape design, interior design, working drawings and on-site construction."
        />

        <div className="grid gap-4.5 lg:grid-cols-12">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.title} delay={i * 90} className={project.span}>
              <Card
                className={cn(
                  "group relative h-full gap-0 overflow-hidden rounded-3xl py-0",
                  "border-white/10 bg-[#111] shadow-(--shadow-panel)",
                  project.minHeight
                )}
              >
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes={project.sizes}
                  className={cn(
                    "object-cover transition-transform duration-600 ease-out",
                    "group-hover:scale-[1.04] motion-reduce:transition-none",
                    "motion-reduce:group-hover:scale-100"
                  )}
                />

                <div
                  aria-hidden
                  className="absolute inset-0 bg-linear-to-b from-transparent from-35% to-[rgba(9,11,14,0.92)]"
                />

                <div className="absolute inset-x-5.5 bottom-5 z-2">
                  <small className="mb-2 block text-[0.78rem] tracking-[0.18em] text-gold uppercase">
                    {project.category}
                  </small>
                  <h3 className="mb-1.5 text-[1.55rem] leading-[1.05] font-bold">
                    {project.title}
                  </h3>
                  <p className="text-[#c2ccd6]">{project.body}</p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
