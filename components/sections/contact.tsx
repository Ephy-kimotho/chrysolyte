import { Card } from "@/components/ui/card"
import { Reveal } from "@/components/reveal"
import { CONTACT } from "@/lib"

export function Contact() {
  return (
    <section id="contact" className="pb-22.5">
      <div className="site-container">
        <Reveal>
          <Card className="relative gap-0 overflow-hidden rounded-4xl border border-white/30 bg-transparent bg-linear-[135deg] from-white/8 to-white/3 p-6.5 shadow-(--shadow-panel) md:p-8.5">
            {/* Gold bloom bleeding off the bottom-right corner */}
            <div
              aria-hidden
              className="pointer-events-none absolute right-[-10%] bottom-[-60%] size-80 blur-[10px]"
              style={{
                background:
                  "radial-gradient(circle, var(--gold-glow), transparent 70%)",
              }}
            />

            <div className="relative z-2 grid items-end gap-5 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <h2 className="mb-3.5 text-h2-cta font-bold">
                  From first sketch to final handover, CHRYSOLYTE brings the
                  project together.
                </h2>
                <p className="max-w-136 text-base leading-normal text-[#d6dde5]">
                  Architecture, structure, interiors, landscape, BOQs,
                  feasibility, value engineering and project management can be
                  coordinated as one clear delivery path.
                </p>
              </div>

              <address className="grid gap-2.5 justify-self-start not-italic lg:justify-self-end lg:text-right">
                <strong className="text-[1.05rem]">{CONTACT.name}</strong>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-[1.05rem] transition-colors hover:text-white"
                >
                  {CONTACT.email}
                </a>
                <a
                  href={`tel:${CONTACT.phoneHref}`}
                  className="text-[1.05rem] transition-colors hover:text-white"
                >
                  {CONTACT.phone}
                </a>
                <small className="text-[0.8rem] leading-normal text-muted-foreground">
                  Contact details can be replaced with your confirmed official
                  information.
                </small>
              </address>
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  )
}
