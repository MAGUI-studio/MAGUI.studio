import * as React from "react"

interface ServerIconProps {
  className?: string
  size?: number
  weight?: "bold" | "duotone" | "fill" | "regular"
}

function BaseIcon({
  children,
  className,
  size = 24,
}: React.PropsWithChildren<ServerIconProps>): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

export function ArrowUpIcon(props: ServerIconProps): React.JSX.Element {
  return (
    <BaseIcon {...props}>
      <path
        d="M12 19V5M12 5L6 11M12 5L18 11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseIcon>
  )
}

export function ArrowUpRightIcon(props: ServerIconProps): React.JSX.Element {
  return (
    <BaseIcon {...props}>
      <path
        d="M7 17L17 7M9 7H17V15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseIcon>
  )
}

export function BracketsCurlyIcon(props: ServerIconProps): React.JSX.Element {
  return (
    <BaseIcon {...props}>
      <path
        d="M9 5C7 5 7 7 7 8.5V10C7 11 6.5 11.5 5.5 12C6.5 12.5 7 13 7 14V15.5C7 17 7 19 9 19M15 5C17 5 17 7 17 8.5V10C17 11 17.5 11.5 18.5 12C17.5 12.5 17 13 17 14V15.5C17 17 17 19 15 19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseIcon>
  )
}

export function CaretDownIcon(props: ServerIconProps): React.JSX.Element {
  return (
    <BaseIcon {...props}>
      <path
        d="M7 10L12 15L17 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseIcon>
  )
}

export function CompassRoseIcon(props: ServerIconProps): React.JSX.Element {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M10 14L11.5 8.5L17 7L14 12.5L8.5 14L10 14Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </BaseIcon>
  )
}

export function LightbulbIcon(props: ServerIconProps): React.JSX.Element {
  return (
    <BaseIcon {...props}>
      <path
        d="M9 21H15M12 3C8.13 3 5 6.13 5 10C5 12.38 6.19 14.47 8 15.74V18C8 18.55 8.45 19 9 19H15C15.55 19 16 18.55 16 18V15.74C17.81 14.47 19 12.38 19 10C19 6.13 15.87 3 12 3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseIcon>
  )
}

export function PaintBrushIcon(props: ServerIconProps): React.JSX.Element {
  return (
    <BaseIcon {...props}>
      <path
        d="M14 4L20 10L12 18L6 12L14 4Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M5 19C5 16.5 6.5 15 9 15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </BaseIcon>
  )
}

export function PlusIcon(props: ServerIconProps): React.JSX.Element {
  return (
    <BaseIcon {...props}>
      <path
        d="M12 5V19M5 12H19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </BaseIcon>
  )
}

export function RocketLaunchIcon(props: ServerIconProps): React.JSX.Element {
  return (
    <BaseIcon {...props}>
      <path
        d="M14 5C17.5 5 19 7.5 19 10C19 13.5 16.5 16 13 16H9L5 20V16L8 13V10C8 7 10.5 5 14 5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="14" cy="10" r="1.5" fill="currentColor" />
    </BaseIcon>
  )
}

export function SparkleIcon(props: ServerIconProps): React.JSX.Element {
  return (
    <BaseIcon {...props}>
      <path
        d="M12 4L13.8 9.2L19 11L13.8 12.8L12 18L10.2 12.8L5 11L10.2 9.2L12 4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </BaseIcon>
  )
}

export function SquaresFourIcon(props: ServerIconProps): React.JSX.Element {
  return (
    <BaseIcon {...props}>
      <rect
        x="5"
        y="5"
        width="5"
        height="5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <rect
        x="14"
        y="5"
        width="5"
        height="5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <rect
        x="5"
        y="14"
        width="5"
        height="5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <rect
        x="14"
        y="14"
        width="5"
        height="5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </BaseIcon>
  )
}

export function TargetIcon(props: ServerIconProps): React.JSX.Element {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </BaseIcon>
  )
}

export function CheckIcon(props: ServerIconProps): React.JSX.Element {
  return (
    <BaseIcon {...props}>
      <path
        d="M20 6L9 17L4 12"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseIcon>
  )
}

export function ArrowRightIcon(props: ServerIconProps): React.JSX.Element {
  return (
    <BaseIcon {...props}>
      <path
        d="M5 12H19M19 12L12 5M19 12L12 19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseIcon>
  )
}

export function HeartIcon(props: ServerIconProps): React.JSX.Element {
  return (
    <BaseIcon {...props}>
      <path
        d="M12 20.35L10.55 19.03C5.4 14.36 2 11.28 2 7.5 2 4.42 4.42 2 7.5 2c1.74 0 3.41.81 4.5 2.09C13.09 2.81 14.76 2 16.5 2 19.58 2 22 4.42 22 7.5c0 3.78-3.4 6.86-8.55 11.54L12 20.35z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseIcon>
  )
}

export function GiftIcon(props: ServerIconProps): React.JSX.Element {
  return (
    <BaseIcon {...props}>
      <rect
        x="3"
        y="8"
        width="18"
        height="4"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M12 8v13M5 12v9h14v-9M7.5 8C6.12 8 5 6.88 5 5.5A2.5 2.5 0 017.5 3c1.5 0 3 2.5 4.5 5 1.5-2.5 3-5 4.5-5a2.5 2.5 0 012.5 2.5c0 1.38-1.12 2.5-2.5 2.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseIcon>
  )
}

export function UsersIcon(props: ServerIconProps): React.JSX.Element {
  return (
    <BaseIcon {...props}>
      <path
        d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseIcon>
  )
}
