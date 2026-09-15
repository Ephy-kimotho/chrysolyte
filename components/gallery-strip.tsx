import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Reveal } from "@/components/reveal"
import { cn } from "@/lib/utils"

export interface GalleryItem {
  image: string
  alt: string
  title: string
  body: string
}

interface GalleryStripProps {
  items: GalleryItem[]
  className?: string
}

/**
 * Two image cards side by side above 1081px, stacked below.
 * Used at the foot of both Process and Services.
 */
export function GalleryStrip({ items, className }: GalleryStripProps) {
  return (
    <div className={cn("grid gap-4.5 lg:grid-cols-2", className)}>
      {items.map((item, i) => (
        <Reveal key={item.title} delay={i * 90} className="h-full">
          <Card className="h-full gap-0 overflow-hidden rounded-3xl border-white/10 bg-[#111] py-0 shadow-(--shadow-panel)">
            <div className="relative h-52 w-full md:h-64 lg:h-80">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 1080px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="px-5.5 py-5">
              <h3 className="mb-2 text-[1.35rem] font-bold">{item.title}</h3>
              <p className="text-muted-foreground">{item.body}</p>
            </div>
          </Card>
        </Reveal>
      ))}
    </div>
  )
}
