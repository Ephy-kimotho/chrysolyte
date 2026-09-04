"use client"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const { ref, inView } = useInView({
    threshold: 0.14,
    triggerOnce: true,
    // Visible before hydration, so content is never stranded at opacity 0.
    fallbackInView: true,
  })

  return (
    <div
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn(
        "transition-[opacity,transform] duration-700 ease-out",
        inView ? "translate-y-0 opacity-100" : "translate-y-6.5 opacity-0",
        className
      )}
    >
      {children}
    </div>
  )
}
