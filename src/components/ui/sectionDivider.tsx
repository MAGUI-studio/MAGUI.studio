"use client"

import * as React from "react"

import { m, useInView, useReducedMotion } from "framer-motion"

import { cn } from "@/src/lib/utils/utils"

interface SectionDividerProps {
  className?: string
}

const EASE_REVEAL: [number, number, number, number] = [0.16, 1, 0.3, 1]

export function SectionDivider({
  className,
}: SectionDividerProps): React.JSX.Element {
  const ref = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" })
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return (
      <div
        className={cn(
          "flex items-center justify-center px-6 lg:px-12",
          className
        )}
      >
        <div className="h-px w-full bg-foreground/8" />
      </div>
    )
  }

  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center justify-center px-6 lg:px-12",
        className
      )}
    >
      <m.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1.2, ease: EASE_REVEAL }}
        className="h-px w-full origin-left bg-foreground/8"
      />
    </div>
  )
}
