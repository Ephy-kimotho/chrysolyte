import { Reveal } from "@/components/reveal"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface SectionHeadingProps {
  /** Small gold label above the title. */
  eyebrow: string
  title: ReactNode
  /** Optional paragraph, sits right-aligned beside the title on desktop. */
  lead?: ReactNode
  className?: string
}

/**
 * Shared across About, Projects, Process, Services and Contact.
 * Stacks below 761px, splits into a two-column row above it.
 */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "mb-7.5 flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between",
        className
      )}
    >
      <div>
        <span className="mb-2.5 block text-[0.78rem] tracking-[0.22em] text-gold uppercase">
          {eyebrow}
        </span>
        <h2 className="text-h2 font-bold">{title}</h2>
      </div>
      {lead ? <p className="max-w-152 text-muted-foreground">{lead}</p> : null}
    </Reveal>
  )
}
