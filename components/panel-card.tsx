import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { ComponentProps } from "react"

/**
 * The design's recurring panel: a barely-there white gradient, a 10% white
 * hairline, 28px radius and a deep soft shadow.
 *
 * Wraps shadcn's Card so every section shares one definition. The py-0/gap-0
 * reset clears Card's built-in vertical padding and flex gap — we control
 * spacing per section instead.
 */
export function PanelCard({
  className,
  ...props
}: ComponentProps<typeof Card>) {
  return (
    <Card
      className={cn(
        "gap-0 overflow-hidden rounded-[28px] border-white/10 py-0",
        "bg-transparent bg-linear-[180deg] from-white/4 to-white/2",
        "shadow-(--shadow-panel)",
        className
      )}
      {...props}
    />
  )
}
