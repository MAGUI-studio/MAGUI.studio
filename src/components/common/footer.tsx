import * as React from "react"

import { getTranslations } from "next-intl/server"
import Image from "next/image"
import Link from "next/link"

import { NavLink } from "@/src/components/ui/navLink"
import { ArrowUpIcon, PlusIcon } from "@/src/components/ui/serverIcons"

import { siteConfig } from "@/src/config/site"

export async function Footer(): Promise<React.JSX.Element> {
  const t = await getTranslations("Footer")
  const configT = await getTranslations("Config")
  const navT = await getTranslations("Index.Nav")
  const idT = await getTranslations("Index.Ids")

  const navigationLinks = [
    { href: "/", label: navT("home") },
    { href: `/#${idT("services")}`, label: navT("services") },
    {
      href: siteConfig.portfolio.url,
      label: navT("portfolio"),
      rel: "noreferrer",
      target: "_blank",
    },
    { href: siteConfig.contact.path, label: navT("contact") },
  ]

  return (
    <footer
      className="relative w-full overflow-hidden border-t border-border/60 bg-background pt-16 pb-12 sm:pt-20 sm:pb-16 px-6 lg:px-12 transition-colors"
      aria-label={t("site_footer_label")}
    >
      <div className="absolute -bottom-4 sm:-bottom-6 lg:-bottom-8 inset-x-0 flex justify-center pointer-events-none overflow-hidden select-none px-4">
        <span className="font-heading text-[clamp(2.5rem,10.2vw,10.5rem)] font-black uppercase tracking-tighter text-foreground/[0.04] dark:text-white/[0.035] whitespace-nowrap leading-none text-center">
          MAGUI.studio
        </span>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-440 space-y-12 sm:space-y-16">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="space-y-8 lg:col-span-5">
            <div className="relative h-12 w-64">
              <Image
                src="/logos/LOGO_VAR_03_DM.svg"
                alt={configT("name")}
                fill
                sizes="256px"
                className="object-contain object-left dark:hidden"
              />
              <Image
                src="/logos/LOGO_VAR_03_LM.svg"
                alt={configT("name")}
                fill
                sizes="256px"
                className="hidden object-contain object-left dark:block"
              />
            </div>
            <p className="max-w-md text-base sm:text-lg font-medium leading-relaxed tracking-tight text-muted-foreground">
              {configT("description")}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:gap-14 lg:col-span-7 lg:pl-20">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <PlusIcon
                  weight="bold"
                  size={10}
                  className="text-brand-primary"
                  aria-hidden="true"
                />
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-primary">
                  {t("nav_title")}
                </span>
              </div>
              <ul className="space-y-5">
                {navigationLinks.map((link) => (
                  <li key={link.href} className="group overflow-hidden">
                    <NavLink
                      href={link.href}
                      label={link.label}
                      rel={link.rel}
                      target={link.target}
                      variant="footer"
                    />
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <PlusIcon
                  weight="bold"
                  size={10}
                  className="text-brand-primary"
                  aria-hidden="true"
                />
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-primary">
                  {t("social_title")}
                </span>
              </div>
              <ul className="space-y-5">
                {siteConfig.socials.map((link) => (
                  <li key={link.label} className="group overflow-hidden">
                    <NavLink
                      href={link.href}
                      label={link.label}
                      variant="footer"
                      rel="noreferrer"
                      target="_blank"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 pt-8 sm:flex-row">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/85">
            {t("credits", { year: new Date().getFullYear() })}
          </p>

          <Link
            href="#page-top"
            className="group inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-foreground transition-all duration-300 hover:text-brand-primary cursor-pointer"
            aria-label={t("scroll_to_top_label")}
          >
            <span>{t("back_to_top")}</span>
            <ArrowUpIcon
              weight="bold"
              size={14}
              className="transition-transform group-hover:-translate-y-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </footer>
  )
}
