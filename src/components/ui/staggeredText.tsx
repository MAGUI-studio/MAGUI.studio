"use client"

import * as React from "react"

import { m, useInView, useReducedMotion } from "framer-motion"

interface StaggeredTextProps {
  text: string
  className?: string
}

const STAGGER_DELAY = 0.04
const EASE_REVEAL: [number, number, number, number] = [0.16, 1, 0.3, 1]

export const StaggeredText = React.memo(function StaggeredText({
  text,
  className,
}: StaggeredTextProps): React.JSX.Element {
  const ref = React.useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" })
  const shouldReduceMotion = useReducedMotion()
  const words = text.split(" ")

  if (shouldReduceMotion) {
    return (
      <span
        className={
          className
            ? `inline-flex flex-wrap ${className}`
            : "inline-flex flex-wrap"
        }
      >
        {words.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="mr-[0.2em] inline-block overflow-hidden last:mr-0"
          >
            <span className="inline-block">{word}</span>
          </span>
        ))}
      </span>
    )
  }

  return (
    <span
      ref={ref}
      className={
        className
          ? `inline-flex flex-wrap ${className}`
          : "inline-flex flex-wrap"
      }
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="mr-[0.2em] inline-block overflow-hidden last:mr-0"
        >
          <m.span
            initial={{ y: "100%" }}
            animate={isInView ? { y: 0 } : { y: "100%" }}
            transition={{
              duration: 0.8,
              delay: i * STAGGER_DELAY,
              ease: EASE_REVEAL,
            }}
            className="inline-block"
          >
            {word}
          </m.span>
        </span>
      ))}
    </span>
  )
})
