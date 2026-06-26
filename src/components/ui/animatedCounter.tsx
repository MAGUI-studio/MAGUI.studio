"use client"

import * as React from "react"

import { animate, useInView, useReducedMotion } from "framer-motion"

interface AnimatedCounterProps {
  value: number
  suffix?: string
  prefix?: string
  duration?: number
  decimals?: number
  className?: string
}

const EASE_REVEAL: [number, number, number, number] = [0.16, 1, 0.3, 1]

export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 2,
  decimals = 0,
  className,
}: AnimatedCounterProps): React.JSX.Element {
  const ref = React.useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const shouldReduceMotion = useReducedMotion()
  const [displayValue, setDisplayValue] = React.useState(
    decimals > 0 ? (0).toFixed(decimals) : "0"
  )

  React.useEffect((): (() => void) | undefined => {
    if (!isInView) return undefined

    if (shouldReduceMotion) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDisplayValue(decimals > 0 ? value.toFixed(decimals) : String(value))
      return undefined
    }

    const controls = animate(0, value, {
      duration,
      ease: EASE_REVEAL,
      onUpdate: (latest) => {
        setDisplayValue(
          decimals > 0 ? latest.toFixed(decimals) : String(Math.round(latest))
        )
      },
    })

    return controls.stop
  }, [isInView, value, duration, decimals, shouldReduceMotion])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  )
}
