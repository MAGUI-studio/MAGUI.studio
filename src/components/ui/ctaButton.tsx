"use client"

import * as React from "react"

import Link from "next/link"

import { Link as LocalizedLink } from "@/src/i18n/navigation"
import { cn } from "@/src/lib/utils/utils"

export type CtaButtonSize = "xs" | "sm" | "md" | "lg"
export type CtaButtonVariant =
  | "primary"
  | "outline"
  | "filled"
  | "secondary"
  | "dark-outline"

export interface CtaButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  className?: string
  disableRipple?: boolean
  href?: string
  isFullWidth?: boolean
  native?: boolean
  rel?: string
  size?: CtaButtonSize
  sliderClassName?: string
  target?: string
  textClassName?: string
  variant?: CtaButtonVariant
}

interface RippleItem {
  id: number
  size: number
  x: number
  y: number
}

interface RippleProps {
  onComplete: () => void
  size: number
  variant?: CtaButtonVariant
  x: number
  y: number
}

const sizeClasses: Record<CtaButtonSize, string> = {
  xs: "px-4 py-2 text-[10px] uppercase tracking-wider font-semibold",
  sm: "px-5 py-2.5 text-[11px] uppercase tracking-wider font-semibold",
  md: "px-7 py-3.5 sm:px-8 sm:py-4 text-xs uppercase tracking-widest font-semibold",
  lg: "px-9 py-4 sm:px-10 sm:py-4.5 text-xs sm:text-sm uppercase tracking-widest font-semibold",
}

const variantClasses: Record<CtaButtonVariant, string> = {
  primary: "bg-brand-primary text-white border-0 shadow-md hover:shadow-lg",
  outline:
    "bg-transparent text-foreground border border-border shadow-xs hover:border-foreground/30",
  filled:
    "bg-background text-foreground border border-border shadow-xs hover:border-foreground/30",
  secondary:
    "bg-muted text-foreground border border-border shadow-xs",
  "dark-outline":
    "bg-white/5 text-white border border-white/20 shadow-xs hover:border-white/40",
}

const defaultSliderClasses: Record<CtaButtonVariant, string> = {
  primary: "bg-brand-primary-dark",
  outline: "bg-foreground/10 dark:bg-white/10",
  filled: "bg-foreground/8 dark:bg-white/10",
  secondary: "bg-foreground/10",
  "dark-outline": "bg-white/15",
}

const defaultTextClasses: Record<CtaButtonVariant, string> = {
  primary: "text-white",
  outline: "text-foreground",
  filled: "text-foreground",
  secondary: "text-foreground",
  "dark-outline": "text-white",
}

const Ripple = React.memo(function Ripple({
  x,
  y,
  size,
  variant = "primary",
  onComplete,
}: RippleProps): React.JSX.Element {
  React.useEffect(() => {
    const timer = setTimeout(onComplete, 600)
    return () => clearTimeout(timer)
  }, [onComplete])

  const rippleColor =
    variant === "primary" ? "bg-white/35" : "bg-foreground/20"

  return (
    <span
      className={cn(
        "pointer-events-none absolute rounded-full animate-ripple",
        rippleColor
      )}
      style={{
        width: size,
        height: size,
        left: x - size / 2,
        top: y - size / 2,
      }}
    />
  )
})

Ripple.displayName = "Ripple"

function useRipples(): {
  addRipple: (x: number, y: number, size: number) => void
  removeRipple: (id: number) => void
  ripples: RippleItem[]
} {
  const [ripples, setRipples] = React.useState<RippleItem[]>([])

  const addRipple = React.useCallback(
    (x: number, y: number, size: number): void => {
      const id = Date.now() + Math.random()
      setRipples((prev) => [...prev, { x, y, size, id }])
    },
    []
  )

  const removeRipple = React.useCallback((id: number): void => {
    setRipples((prev) => prev.filter((r) => r.id !== id))
  }, [])

  return { ripples, addRipple, removeRipple }
}

export const CtaButton = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  CtaButtonProps
>(function CtaButton(
  {
    href,
    target,
    rel,
    native = false,
    size = "md",
    variant = "primary",
    disableRipple = false,
    isFullWidth = false,
    children,
    className,
    sliderClassName,
    textClassName,
    type = "button",
    disabled,
    onClick,
    ...props
  },
  ref
): React.JSX.Element {
  const { ripples, addRipple, removeRipple } = useRipples()

  const handlePointerClick = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ): void => {
    if (disabled) return

    if (!disableRipple) {
      const rect = e.currentTarget.getBoundingClientRect()
      const rippleSize = Math.max(rect.width, rect.height)
      addRipple(e.clientX - rect.left, e.clientY - rect.top, rippleSize)
    }

    onClick?.(e as React.MouseEvent<HTMLButtonElement>)
  }

  const combinedClasses = cn(
    "group/cta relative inline-flex items-center justify-center overflow-hidden rounded-sm cursor-pointer select-none transition-all duration-300 ease-out active:scale-[0.98] will-change-transform",
    sizeClasses[size],
    variantClasses[variant],
    isFullWidth && "w-full",
    disabled &&
      "opacity-50 cursor-not-allowed pointer-events-none active:scale-100",
    className
  )

  const renderedSlider = (
    <span
      aria-hidden="true"
      className={cn(
        "absolute inset-0 w-full h-full translate-y-full group-hover/cta:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none rounded-sm",
        defaultSliderClasses[variant],
        sliderClassName
      )}
    />
  )

  const renderedText = (
    <span
      className={cn(
        "relative z-10 inline-flex items-center justify-center gap-2 transition-colors duration-300 pointer-events-none",
        isFullWidth && "w-full",
        defaultTextClasses[variant],
        textClassName
      )}
    >
      {children}
    </span>
  )

  const renderedRipples = ripples.map((r) => (
    <Ripple
      key={r.id}
      x={r.x}
      y={r.y}
      size={r.size}
      variant={variant}
      onComplete={() => removeRipple(r.id)}
    />
  ))

  if (href) {
    const isExternal =
      href.startsWith("http:") ||
      href.startsWith("https:") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:")
    const isAnchor = href.startsWith("#")

    if (native || isExternal || isAnchor) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          target={
            target ||
            (isExternal &&
            !href.startsWith("mailto:") &&
            !href.startsWith("tel:")
              ? "_blank"
              : undefined)
          }
          rel={rel || (isExternal ? "noopener noreferrer" : undefined)}
          onClick={handlePointerClick}
          className={combinedClasses}
          {...(props as unknown as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {renderedSlider}
          {renderedText}
          {renderedRipples}
        </a>
      )
    }

    return (
      <LocalizedLink
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href as never}
        target={target}
        rel={rel}
        onClick={handlePointerClick}
        className={combinedClasses}
        {...(props as unknown as Omit<
          React.ComponentPropsWithoutRef<typeof LocalizedLink>,
          "href"
        >)}
      >
        {renderedSlider}
        {renderedText}
        {renderedRipples}
      </LocalizedLink>
    )
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={type}
      disabled={disabled}
      onClick={handlePointerClick}
      className={combinedClasses}
      {...props}
    >
      {renderedSlider}
      {renderedText}
      {renderedRipples}
    </button>
  )
})

CtaButton.displayName = "CtaButton"
