import * as React from "react"

import { cn } from "@/src/lib/utils/utils"

interface DiagonalBackgroundProps {
  className?: string
}

export function DiagonalBackground({
  className,
}: DiagonalBackgroundProps): React.JSX.Element {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 z-0 select-none overflow-hidden",
        className
      )}
    >
      <svg
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="subtle-diagonal-lines"
            width="12"
            height="12"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M-1,1 l2,-2 M0,12 l12,-12 M11,13 l2,-2"
              stroke="currentColor"
              strokeWidth="0.65"
              className="text-foreground opacity-[0.025] dark:opacity-[0.02]"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#subtle-diagonal-lines)" />
      </svg>
    </div>
  )
}
