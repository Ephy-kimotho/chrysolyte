"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { BRAND, IMAGES, NAV_LINKS } from "@/lib"
import { useActiveSection } from "@/hooks/use-active-section"

const SECTION_IDS = NAV_LINKS.map(({ href }) => href.slice(1))

export function Navbar() {
  const [open, setOpen] = useState(false)
  const activeId = useActiveSection(SECTION_IDS)

  return (
    <header className="fixed inset-x-0 top-4.5 z-40">
      <div
        className={cn(
          "site-container flex items-center justify-between",
          "rounded-full border border-white/8",
          "bg-[rgba(10,12,15,0.68)] backdrop-blur-sm",
          "px-3.5 py-3 md:px-4.5 md:py-3.5",
          "shadow-(--shadow-topbar)"
        )}
      >
        <Link href="#home" className="flex min-w-0 items-center gap-3.5">
          <Image
            src={IMAGES.logo}
            alt=""
            width={500}
            height={243}
            priority
            className="h-9 w-auto brightness-105"
          />
          <span className="hidden flex-col leading-[1.1] md:flex">
            <span className="text-[0.9rem] font-bold tracking-[0.15em]">
              {BRAND.name}
            </span>
            <span className="text-[0.7rem] tracking-[0.22em] text-muted-foreground uppercase">
              {BRAND.tagline}
            </span>
          </span>
          <span className="sr-only">{BRAND.name} — home</span>
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="primary-nav"
          className={cn(
            "rounded-full border border-white/8 px-3.5 py-2.5",
            "text-base text-white md:hidden"
          )}
        >
          {open ? "Close" : "Menu"}
        </button>

        <nav
          id="primary-nav"
          className={cn(
            // Mobile: dropdown panel below the pill
            "absolute top-17.5 right-5 left-5 flex-col items-stretch",
            "rounded-3xl border border-white/10 bg-[rgba(9,11,14,0.96)] p-3 py-5",
            "space-y-4 shadow-(--shadow-panel)",
            open ? "flex" : "hidden",
            // Desktop: inline row, panel styling stripped off
            "md:static md:inset-auto md:flex md:flex-row md:flex-wrap md:items-center md:gap-2.5 md:space-y-0",
            "md:rounded-none md:border-0 md:bg-transparent md:p-0 md:shadow-none"
          )}
        >
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = activeId === href.slice(1)

            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                aria-current={isActive ? "location" : undefined}
                className={cn(
                  "rounded-full px-4 py-3.5 text-[0.9rem] text-[#d5dbe2]",
                  "bg-white/3 transition-colors duration-250",
                  "hover:bg-white/8 hover:text-white",
                  "md:bg-transparent md:px-3.5 md:py-2.5",
                  // The in-view section wears the hover state.
                  isActive && "bg-white/8 text-white md:bg-white/8"
                )}
              >
                {label}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
