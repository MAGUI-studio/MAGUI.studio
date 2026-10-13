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
  "blogs",
] as const

export function ServiceMarquee({
  className,
}: ServiceMarqueeProps): React.JSX.Element {
  const t = useTranslations("Index.ServiceMarquee")

  const items = MARQUEE_KEYS.map((key) => t(key))

  return (
    <section
      className={cn(
        "relative overflow-hidden pt-0 pb-4 md:pb-6 lg:pb-8",
        className
      )}
      aria-hidden="true"
    >
      <div className="relative w-full bg-brand-primary py-2.5 md:py-3.5 flex items-center justify-center">
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
            "flex shrink-0 items-center whitespace-nowrap font-heading text-lg font-black uppercase leading-none tracking-[-0.03em] text-white sm:text-xl md:text-2xl lg:text-3xl",
            animationClass
          )}
        >
          {items.map((item, index) => (
            <React.Fragment key={`${item}-${index}`}>
              <span className="px-5 sm:px-6 md:px-8 select-none">{item}</span>
              <span className="text-white/45 text-sm sm:text-base md:text-lg select-none">
                ✦
              </span>
            </React.Fragment>
          ))}
        </div>
      ))}
    </div>
  )
}
