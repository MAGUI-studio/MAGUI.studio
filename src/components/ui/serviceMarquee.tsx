"use client"

import * as React from "react"

import { useTranslations } from "next-intl"

import { cn } from "@/src/lib/utils/utils"

interface ServiceMarqueeProps {
  className?: string
  reverse?: boolean
}

type MarqueeDirection = "normal" | "reverse"

const MARQUEE_KEYS = [
  "landing_pages",
  "institutional",
  "interface_design",
  "sales_pages",
  "visual_strategy",
  "frontend_engineering",
] as const

export function ServiceMarquee({
  className,
}: ServiceMarqueeProps): React.JSX.Element {
  const t = useTranslations("Index.ServiceMarquee")

  const items = MARQUEE_KEYS.map((key) => t(key))

  return (
    <section
      className={cn("relative overflow-hidden py-14 md:py-20", className)}
      aria-hidden="true"
    >
      <div className="w-[110%] -left-[5%] relative -rotate-2 bg-brand-primary py-4 md:py-6 shadow-2xl flex items-center justify-center">
        <MarqueeRow items={items} direction="normal" />
      </div>
    </section>
  )
}

interface MarqueeRowProps {
  items: string[]
  direction: MarqueeDirection
}

function MarqueeRow({ items, direction }: MarqueeRowProps): React.JSX.Element {
  const animationClass =
    direction === "reverse" ? "animate-marquee-reverse" : "animate-marquee"

  return (
    <div className="flex overflow-hidden w-full">
      {[0, 1].map((i) => (
        <div
          key={i}
          className={cn(
            "flex shrink-0 items-center whitespace-nowrap font-heading text-3xl font-black uppercase leading-none tracking-[-0.03em] text-white md:text-5xl lg:text-6xl xl:text-7xl",
            animationClass
          )}
        >
          {items.map((item, index) => (
            <React.Fragment key={`${item}-${index}`}>
              <span className="px-6 md:px-8 select-none">{item}</span>
              <span className="text-white/40 text-xl md:text-3xl select-none">
                ✦
              </span>
            </React.Fragment>
          ))}
        </div>
      ))}
    </div>
  )
}
