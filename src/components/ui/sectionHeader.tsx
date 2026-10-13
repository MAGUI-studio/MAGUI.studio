import * as React from "react"

import { cn } from "@/src/lib/utils/utils"

import { StaggeredText } from "./staggeredText"

interface SectionHeaderProps {
  eyebrow?: string
  titlePrimary: string
  titleAccent?: string
  description?: string
  align?: "left" | "center"
  inline?: boolean
  className?: string
  titleClassName?: string
  titleAccentClassName?: string
  descriptionClassName?: string
  children?: React.ReactNode
}

export function SectionHeader({
  eyebrow,
  titlePrimary,
  titleAccent,
  description,
  align = "left",
  inline = true,
  className,
  titleClassName,
  titleAccentClassName,
  descriptionClassName,
  children,
}: SectionHeaderProps): React.JSX.Element {
  return (
    <div
      className={cn(
        "space-y-8",
        align === "center" && "text-center",
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "flex items-center gap-4",
            align === "center" && "justify-center"
          )}
        >
          <div className="h-px w-12 bg-brand-primary" />
          <span className="text-[11px] font-black uppercase tracking-[0.5em] text-brand-primary">
            {eyebrow}
          </span>
        </div>
      )}

      <h2
        className={cn(
          "font-heading text-3xl font-black uppercase leading-[1.1] tracking-[-0.04em] text-foreground sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
          titleClassName
        )}
      >
        <span
          className={cn(inline ? "inline-block mr-3 sm:mr-4 md:mr-5" : "block")}
        >
          <StaggeredText text={titlePrimary} />
        </span>
        {titleAccent && (
          <span
            className={cn(
              inline
                ? "inline-block text-brand-primary"
                : "mt-2 block text-brand-primary md:mt-3",
              titleAccentClassName
            )}
          >
            <StaggeredText text={titleAccent} />
          </span>
        )}
      </h2>

      {description && (
        <p
          className={cn(
            "max-w-4xl text-lg font-medium leading-relaxed tracking-tight text-muted-foreground md:text-xl lg:text-2xl",
            align === "center" && "mx-auto",
            descriptionClassName
          )}
        >
          {description}
        </p>
      )}

      {children}
    </div>
  )
}
