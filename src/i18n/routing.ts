import { defineRouting } from "next-intl/routing"

import { defaultLocale, locales } from "./config"

export const pathnames = {
  "/": "/",
  "/contato": {
    pt: "/contato",
    en: "/contact",
  },
} as const

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: "never",
  pathnames,
})
