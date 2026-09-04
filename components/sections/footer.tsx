import Link from "next/link"
import { BRAND } from "@/lib"

export function Footer() {
  return (
    <footer className="pt-6.5 pb-12.5 text-[#909aa5]">
      <div className="site-container flex flex-col items-start gap-5 border-t border-white/8 pt-5.5 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {BRAND.name} — Design &amp; Build / Kenya
        </p>
        <p>Architecture • Interiors • Landscape • Project Delivery</p>
        <Link
          href="#home"
          className="rounded-full px-3 py-1.5 transition-colors hover:bg-white/8 hover:text-white"
        >
          Back to top ↑
        </Link>
      </div>
    </footer>
  )
}
