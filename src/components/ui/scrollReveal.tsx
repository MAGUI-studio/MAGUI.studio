"use client"

import * as React from "react"

import { Variants, m, useInView, useReducedMotion } from "framer-motion"

type ScrollRevealVariant = "fadeUp" | "fadeLeft" | "fadeRight" | "scaleUp"

interface ScrollRevealProps {
  children: React.ReactNode
  variant?: ScrollRevealVariant
  delay?: number
  duration?: number
  once?: boolean
  className?: string
}

const EASE_REVEAL: [number, number, number, number] = [0.16, 1, 0.3, 1]

const revealVariants: Record<ScrollRevealVariant, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  },
}

export function ScrollReveal({
  children,
  variant = "fadeUp",
  delay = 0,
  duration = 0.7,
  once = true,
  className,
}: ScrollRevealProps): React.JSX.Element {
  const ref = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: "-12% 0px" })
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <m.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={revealVariants[variant]}
      transition={{ duration, delay, ease: EASE_REVEAL }}
      className={className}
    >
      {children}
    </m.div>
  )
}
