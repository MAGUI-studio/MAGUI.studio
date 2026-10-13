import * as React from "react"

import { getTranslations } from "next-intl/server"

import { DiagonalBackground } from "@/src/components/common/diagonalBackground"
import { CtaButton } from "@/src/components/ui/ctaButton"
import { Section } from "@/src/components/ui/section"
import { ArrowUpRightIcon } from "@/src/components/ui/serverIcons"

import { siteConfig } from "@/src/config/site"

export async function Hero(): Promise<React.JSX.Element> {
  const t = await getTranslations("Index.Hero")
  const statT = await getTranslations("Index.Statistics")
  const idT = await getTranslations("Index.Ids")

  return (
    <Section
      id={idT("hero")}
      withContainer={false}
      className="relative overflow-hidden border-b border-border/60"
    >
      <DiagonalBackground />

      <div className="relative z-10 w-full px-6 pt-16 pb-16 sm:px-10 sm:pt-20 sm:pb-20 md:px-14 md:pt-24 md:pb-24 lg:px-16 lg:pt-28 lg:pb-28 2xl:px-20">
        <div className="flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-[0.3em] text-brand-primary">
          <span className="h-px w-8 bg-brand-primary" />
          <span>{t("system_tag")}</span>
        </div>

        <h1 className="mt-6 w-full font-heading text-5xl font-black uppercase tracking-[-0.04em] leading-[0.88] text-foreground sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[9.5rem] 2xl:text-[11.5rem]">
          <span className="block">{t("title_1")}</span>
          <span className="block text-brand-primary drop-shadow-xs">{t("title_2")}</span>
          <span className="block">{t("title_3")}</span>
        </h1>

        <div className="mt-10 max-w-4xl">
          <p className="text-lg font-normal leading-relaxed text-muted-foreground sm:text-xl md:text-2xl">
            {t("description")}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:items-center">
            <CtaButton
              href={siteConfig.contact.path}
              variant="primary"
              size="lg"
              className="h-14 sm:h-16 shadow-xl shadow-brand-primary/20"
              aria-label={t("cta")}
            >
              <span className="flex items-center gap-3">
                {t("cta")}
                <ArrowUpRightIcon
                  weight="bold"
                  className="h-4 w-4 transition-transform duration-300 group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5 sm:h-5 sm:w-5"
                />
              </span>
            </CtaButton>

            <CtaButton
              href={siteConfig.portfolio.url}
              variant="outline"
              size="lg"
              target="_blank"
              rel="noreferrer"
              className="h-14 sm:h-16"
            >
              <span className="flex items-center gap-3">
                {t("secondary_cta")}
                <ArrowUpRightIcon
                  weight="bold"
                  className="h-4 w-4 transition-transform duration-300 group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5 sm:h-5 sm:w-5"
                />
              </span>
            </CtaButton>
          </div>
        </div>
      </div>

      <div className="w-full border-t border-border/60 bg-muted/10">
        <div className="grid w-full grid-cols-1 divide-y divide-border/60 md:grid-cols-3 md:divide-y-0 md:divide-x">
          <div className="flex flex-col justify-between p-6 sm:p-8 md:p-10">
            <div className="font-mono text-xs font-bold tracking-wider text-brand-primary">
              {t("stat_prefix_1")}
            </div>
            <div className="mt-4 font-heading text-4xl font-black tracking-tight text-foreground sm:text-5xl">
              {statT("stat_1_val")}
              <span className="text-brand-primary">+</span>
            </div>
            <div className="mt-2 font-sans text-xs font-bold uppercase tracking-wider text-foreground">
              {statT("stat_1_label")}
            </div>
            <div className="mt-2 text-xs leading-relaxed text-muted-foreground">
              {statT("stat_1_desc")}
            </div>
          </div>

          <div className="flex flex-col justify-between p-6 sm:p-8 md:p-10">
            <div className="font-mono text-xs font-bold tracking-wider text-brand-primary">
              {t("stat_prefix_2")}
            </div>
            <div className="mt-4 font-heading text-4xl font-black tracking-tight text-foreground sm:text-5xl">
              {statT("stat_2_val")}
              <span className="text-brand-primary">%</span>
            </div>
            <div className="mt-2 font-sans text-xs font-bold uppercase tracking-wider text-foreground">
              {statT("stat_2_label")}
            </div>
            <div className="mt-2 text-xs leading-relaxed text-muted-foreground">
              {statT("stat_2_desc")}
            </div>
          </div>

          <div className="flex flex-col justify-between p-6 sm:p-8 md:p-10">
            <div className="font-mono text-xs font-bold tracking-wider text-brand-primary">
              {t("stat_prefix_3")}
            </div>
            <div className="mt-4 font-heading text-4xl font-black tracking-tight text-foreground sm:text-5xl">
              {statT("stat_4_val")}
            </div>
            <div className="mt-2 font-sans text-xs font-bold uppercase tracking-wider text-foreground">
              {statT("stat_4_label")}
            </div>
            <div className="mt-2 text-xs leading-relaxed text-muted-foreground">
              {statT("stat_4_desc")}
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
