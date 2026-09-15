import Link from "next/link"
import { ArrowUp, Mail, MapPin, Phone } from "lucide-react"
import {
  BRAND,
  CONTACT,
  DISCIPLINES,
  FOOTER_TAGLINE,
  NAV_LINKS,
  IMAGES,
} from "@/lib"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/60 bg-linear-[135deg] from-white/8 to-white/3 pt-20 pb-14">
      {/* Gold bloom bleeding off the bottom-right corner */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -bottom-40 size-80 blur-[10px] lg:size-100"
        style={{
          background:
            "radial-gradient(circle, var(--gold-glow), transparent 70%)",
        }}
      />

      <div className="site-container">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between md:gap-0">
          <div>
            <Link href={"#home"}>
              <Image
                src={IMAGES.logo}
                alt="Chrysolyte logo"
                priority
                width={500}
                height={243}
                className="h-20 w-auto brightness-105"
              />
            </Link>

            <address className="mt-7 grid gap-4.5 not-italic">
              <p className="flex items-center gap-3.5 text-[#d6dde5] transition-colors hover:text-white">
                <Phone
                  aria-hidden
                  className="transition-color size-4.5 shrink-0 text-muted-foreground"
                />
                <span>Office Number: {CONTACT.phone}</span>
              </p>

              <p className="group flex items-center gap-3.5 text-[#d6dde5] transition-colors hover:text-white">
                <Mail
                  aria-hidden
                  className="transition-color size-4.5 shrink-0 text-muted-foreground"
                />
                <span>Email: {CONTACT.email}</span>
              </p>

              <p className="flex items-start gap-3.5 text-[#d6dde5]">
                <MapPin
                  aria-hidden
                  className="mt-0.5 size-4.5 shrink-0 text-muted-foreground"
                />
                <span>Address: {CONTACT.address}</span>
              </p>
            </address>
          </div>

          {/* Right link columns */}
          <div className="flex flex-col gap-12 md:flex-row md:gap-32">
            <nav aria-labelledby="footer-links">
              <h2
                id="footer-links"
                className="text-[0.9rem] font-bold tracking-[0.14em] uppercase"
              >
                Links
              </h2>
              <ul className="mt-6 grid gap-3.5">
                <li>
                  <Link
                    href="#home"
                    className="text-muted-foreground transition-colors hover:text-gold"
                  >
                    Home
                  </Link>
                </li>
                {NAV_LINKS.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="font-sans text-muted-foreground transition-colors hover:text-gold"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h2 className="text-[0.9rem] font-bold tracking-[0.14em] uppercase">
                Disciplines
              </h2>
              <ul className="mt-6 grid gap-3.5">
                {DISCIPLINES.map((item) => (
                  <li key={item} className="text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="#home"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-4 py-2.5 text-[0.9rem] transition-colors hover:bg-white/10 hover:text-white"
              >
                Back to top
                <ArrowUp aria-hidden className="size-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-18 border-t border-white/8 pt-6.5">
          <p className="text-[0.9rem] text-[#909aa5]">
            © {new Date().getFullYear()} {BRAND.name}. {FOOTER_TAGLINE}
          </p>
        </div>
      </div>
    </footer>
  )
}

// className="border-t border-white/60 pt-20 pb-14"

// className="relative gap-0 overflow-hidden rounded-4xl border border-white/30 bg-transparent bg-linear-[135deg] from-white/8 to-white/3 p-6.5 shadow-(--shadow-panel) md:p-8.5"
