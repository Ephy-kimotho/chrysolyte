import { Card } from "@/components/ui/card"
import { Reveal } from "@/components/reveal"
import { ContactForm } from "@/components/contact-form"

export function Contact() {
  return (
    <section id="contact" className="pb-22.5">
      <div className="site-container">
        <Reveal>
          <Card className="relative gap-8 overflow-hidden rounded-4xl border-white/10 bg-transparent bg-linear-[135deg] from-white/8 to-white/3 p-6.5 shadow-(--shadow-panel) md:p-8.5">
          
            <div className="relative z-2 grid gap-2.5">
              <h2 className="mb-3.5 max-w-3xl text-h2 font-bold">
                From first sketch to final handover, CHRYSOLYTE brings the
                project together.
              </h2>
              <p className="text-dim max-w-136 text-base leading-normal">
                Architecture, structure, interiors, landscape, BOQs,
                feasibility, value engineering and project management can be
                coordinated as one clear delivery path.
              </p>
            </div>

            <ContactForm />
          </Card>
        </Reveal>
      </div>
    </section>
  )
}
