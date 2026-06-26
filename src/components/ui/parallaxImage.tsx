"use client"

import * as React from "react"

import { m, useReducedMotion, useScroll, useTransform } from "framer-motion"

import { cn } from "@/src/lib/utils/utils"

interface ParallaxImageProps {
  children: React.ReactNode
  factor?: number
  className?: string
}

export function ParallaxImage({
  children,
  factor = 0.1,
  className,
}: ParallaxImageProps): React.JSX.Element {
  const ref = React.useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`${factor * -100}%`, `${factor * 100}%`]
  )

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <m.div style={{ y }} className="h-full w-full relative">
        {children}
      </m.div>
    </div>
  )
}
