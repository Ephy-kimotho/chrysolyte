import { useEffect, useState } from "react"

/**
 * Tracks which of the given section ids sits under the middle of the viewport.
 *
 * Returns null when none of them does — the hero has no nav link, so nothing
 * should be marked active while it fills the screen.
 */
export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (sections.length === 0) {
      return
    }

    const visible = new Set<string>()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible.add(entry.target.id)
          } else {
            visible.delete(entry.target.id)
          }
        }

        // Sections are contiguous, so the band normally holds exactly one.
        // Falling back to document order keeps the choice stable if it holds two.
        setActive(ids.find((id) => visible.has(id)) ?? null)
      },
      // A 1px band across the middle of the viewport: whatever crosses it is
      // what the reader is looking at.
      { rootMargin: "-50% 0px -50% 0px" }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [ids])

  return active
}
