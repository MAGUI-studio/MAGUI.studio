"use client"

import * as React from "react"

import { useLocale, useTranslations } from "next-intl"

import { locales } from "@/src/i18n/config"
import { usePathname, useRouter } from "@/src/i18n/navigation"
import { CaretDown, Check } from "@phosphor-icons/react"
import Cookies from "js-cookie"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu"

import { cn } from "@/src/lib/utils/utils"

interface FlagProps {
  className?: string
}

function BrazilFlag({ className }: FlagProps): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 20 14"
      aria-hidden="true"
      className={cn("h-3.5 w-5 shrink-0 rounded-[2px] shadow-xs", className)}
    >
      <rect width="20" height="14" fill="#009b3a" />
      <polygon points="10,1.8 18.2,7 10,12.2 1.8,7" fill="#fedf00" />
      <circle cx="10" cy="7" r="3.2" fill="#002776" />
      <path
        d="M 6.9 7.6 C 7.9 6.2 12.1 6.2 13.1 7.6"
        fill="none"
        stroke="#ffffff"
        strokeWidth="0.6"
      />
    </svg>
  )
}

function UsaFlag({ className }: FlagProps): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 20 14"
      aria-hidden="true"
      className={cn("h-3.5 w-5 shrink-0 rounded-[2px] shadow-xs", className)}
    >
      <rect width="20" height="14" fill="#b22234" />
      <rect y="1.08" width="20" height="1.08" fill="#ffffff" />
      <rect y="3.23" width="20" height="1.08" fill="#ffffff" />
      <rect y="5.38" width="20" height="1.08" fill="#ffffff" />
      <rect y="7.54" width="20" height="1.08" fill="#ffffff" />
      <rect y="9.69" width="20" height="1.08" fill="#ffffff" />
      <rect y="11.85" width="20" height="1.08" fill="#ffffff" />
      <rect width="8" height="7.54" fill="#3c3b6e" />
      <circle cx="1.6" cy="1.5" r="0.45" fill="#ffffff" />
      <circle cx="3.2" cy="1.5" r="0.45" fill="#ffffff" />
      <circle cx="4.8" cy="1.5" r="0.45" fill="#ffffff" />
      <circle cx="6.4" cy="1.5" r="0.45" fill="#ffffff" />
      <circle cx="2.4" cy="2.7" r="0.45" fill="#ffffff" />
      <circle cx="4.0" cy="2.7" r="0.45" fill="#ffffff" />
      <circle cx="5.6" cy="2.7" r="0.45" fill="#ffffff" />
      <circle cx="1.6" cy="3.9" r="0.45" fill="#ffffff" />
      <circle cx="3.2" cy="3.9" r="0.45" fill="#ffffff" />
      <circle cx="4.8" cy="3.9" r="0.45" fill="#ffffff" />
      <circle cx="6.4" cy="3.9" r="0.45" fill="#ffffff" />
      <circle cx="2.4" cy="5.1" r="0.45" fill="#ffffff" />
      <circle cx="4.0" cy="5.1" r="0.45" fill="#ffffff" />
      <circle cx="5.6" cy="5.1" r="0.45" fill="#ffffff" />
      <circle cx="1.6" cy="6.3" r="0.45" fill="#ffffff" />
      <circle cx="3.2" cy="6.3" r="0.45" fill="#ffffff" />
      <circle cx="4.8" cy="6.3" r="0.45" fill="#ffffff" />
      <circle cx="6.4" cy="6.3" r="0.45" fill="#ffffff" />
    </svg>
  )
}

interface FlagIconProps {
  className?: string
  locale: string
}

function FlagIcon({ locale, className }: FlagIconProps): React.JSX.Element {
  if (locale === "pt") {
    return <BrazilFlag className={className} />
  }
  return <UsaFlag className={className} />
}

export function LanguageSwitcher(): React.JSX.Element {
  const t = useTranslations("Locale")
  const currentLocale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const handleLocaleChange = React.useCallback(
    (newLocale: string): void => {
      if (newLocale === currentLocale) return
      Cookies.set("NEXT_LOCALE", newLocale, { expires: 365 })

      router.replace(pathname, {
        locale: newLocale,
      })
    },
    [currentLocale, pathname, router]
  )

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className="cursor-pointer outline-none">
        <div className="group flex h-9 items-center gap-2 rounded-sm border border-border/60 bg-background/50 px-3 backdrop-blur-sm transition-all hover:border-border hover:bg-muted/50">
          <div className="flex items-center gap-2">
            <FlagIcon
              locale={currentLocale}
              className="opacity-90 transition-all group-hover:opacity-100"
            />
            <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-foreground">
              {currentLocale}
            </span>
          </div>
          <CaretDown
            size={12}
            weight="bold"
            className="text-muted-foreground/60 transition-colors group-hover:text-foreground"
          />
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        sideOffset={8}
        className="z-110 w-40 rounded-sm border border-border/60 bg-background/95 p-1.5 shadow-xl shadow-black/5 backdrop-blur-xl"
      >
        {locales.map((loc) => (
          <DropdownMenuItem
            key={loc}
            onClick={() => handleLocaleChange(loc)}
            className={cn(
              "group mb-0.5 flex cursor-pointer items-center justify-between rounded-sm px-2.5 py-2 text-sm transition-all last:mb-0",
              currentLocale === loc
                ? "bg-muted font-bold text-brand-primary"
                : "text-muted-foreground hover:bg-muted/40 hover:text-foreground"
            )}
          >
            <div className="flex items-center gap-2.5">
              <FlagIcon
                locale={loc}
                className={cn(
                  "transition-all",
                  currentLocale === loc
                    ? "opacity-100"
                    : "opacity-60 group-hover:opacity-100"
                )}
              />
              <span className="font-bold tracking-tight">{t(loc)}</span>
            </div>
            {currentLocale === loc && (
              <div className="opacity-100 transition-opacity duration-200">
                <Check weight="bold" size={12} className="text-brand-primary" />
              </div>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
