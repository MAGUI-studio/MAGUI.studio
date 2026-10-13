import * as React from "react"

import { getMessages, getTranslations } from "next-intl/server"
import Image from "next/image"
import Link from "next/link"

import { CtaButton } from "@/src/components/ui/ctaButton"
import { ScrollReveal } from "@/src/components/ui/scrollReveal"
import { Section } from "@/src/components/ui/section"
import {
  ArrowUpRightIcon,
  BracketsCurlyIcon,
  CompassRoseIcon,
  GiftIcon,
  HeartIcon,
  SparkleIcon,
  SquaresFourIcon,
  TargetIcon,
  UsersIcon,
} from "@/src/components/ui/serverIcons"

import { siteConfig } from "@/src/config/site"

interface ProductFeature {
  icon: React.ComponentType<{
    className?: string
    size?: number
    weight?: "bold" | "duotone" | "fill" | "regular"
  }>
  title: string
}

export async function MaguiConnect(): Promise<React.JSX.Element> {
  const t = await getTranslations("Index.MaguiConnect")
  const idT = await getTranslations("Index.Ids")
  const messages = await getMessages()

  const connectTags = (messages as IntlMessages).Index.MaguiConnect.connect.tags
  const foreverTags = (messages as IntlMessages).Index.MaguiConnect.forever.tags

  const connectFeatures: ProductFeature[] = [
    { icon: SquaresFourIcon, title: t("connect.features.0") },
    { icon: TargetIcon, title: t("connect.features.1") },
    { icon: BracketsCurlyIcon, title: t("connect.features.2") },
    { icon: CompassRoseIcon, title: t("connect.features.3") },
  ]

  const foreverFeatures: ProductFeature[] = [
    { icon: UsersIcon, title: t("forever.features.0") },
    { icon: GiftIcon, title: t("forever.features.1") },
    { icon: SparkleIcon, title: t("forever.features.2") },
    { icon: HeartIcon, title: t("forever.features.3") },
  ]

  return (
    <Section
      id={idT("connect")}
      className="py-12 md:py-16 lg:py-20"
      withContainer={true}
    >
      <ScrollReveal variant="fadeUp" delay={0.2}>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
          <article className="group flex flex-col space-y-6">
            <Link
              href={siteConfig.products.connect}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block aspect-16/10 w-full overflow-hidden bg-muted/20"
            >
              <Image
                src="/utils/products/connect/product_showcase.png"
                alt={t("connect.image_alt")}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />

              <div className="absolute left-4 top-4 flex items-center gap-2 rounded-xs border border-border/60 bg-background px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-foreground shadow-xs">
                <span className="text-[10px] font-semibold text-muted-foreground">
                  {t("connect.card_label")}
                </span>
                <span className="text-muted-foreground/40">•</span>
                <span className="font-bold text-foreground">
                  {t("connect.price")}
                </span>
              </div>

              <div
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-sm bg-background/80 text-foreground backdrop-blur-md opacity-0 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100"
                aria-label={t("connect.cta")}
              >
                <ArrowUpRightIcon size={18} weight="bold" />
              </div>
            </Link>

            <div className="flex flex-1 flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex h-7 items-center gap-2">
                  {connectTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-sm bg-foreground/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground transition-colors duration-300 group-hover:text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-2">
                  <div className="flex h-20 items-center sm:h-24 md:h-28">
                    <Image
                      src="/utils/products/connect/logo_black.svg"
                      alt="Connect"
                      width={1246}
                      height={251}
                      className="h-14 w-auto object-contain object-left dark:hidden sm:h-18 md:h-22"
                      priority
                    />
                    <Image
                      src="/utils/products/connect/logo_white.svg"
                      alt="Connect"
                      width={1246}
                      height={251}
                      className="hidden h-14 w-auto object-contain object-left dark:block sm:h-18 md:h-22"
                      priority
                    />
                  </div>
                </div>

                <p className="flex items-start text-sm font-normal leading-relaxed text-muted-foreground md:h-[6.5rem] md:text-base lg:h-[5.5rem]">
                  {t("connect.description")}
                </p>

                <ul className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
                  {connectFeatures.map((feature) => {
                    const Icon = feature.icon

                    return (
                      <li
                        key={feature.title}
                        className="group/feature relative flex h-[88px] items-center overflow-hidden rounded-sm bg-foreground/[0.03] p-4 dark:bg-foreground/[0.04] sm:h-[92px]"
                      >
                        <p className="relative z-10 text-xs font-medium leading-relaxed text-foreground/90 sm:text-sm">
                          {feature.title}
                        </p>
                        <div className="pointer-events-none absolute -bottom-6 -right-3 text-foreground/[0.06] transition-transform duration-500 group-hover/feature:scale-110 dark:text-foreground/[0.08]">
                          <Icon size={96} />
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex flex-col justify-center rounded-sm border border-border/60 bg-background p-4 text-xs leading-relaxed text-muted-foreground md:h-[104px] lg:h-[96px]">
                  <span className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-foreground">
                    {t("connect.offer_eyebrow")}
                  </span>
                  <p>{t("connect.offer")}</p>
                </div>

                <CtaButton
                  href={siteConfig.products.connect}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="sm"
                  className="h-11 px-6 text-xs font-bold uppercase tracking-wider"
                >
                  <span>{t("connect.cta")}</span>
                  <ArrowUpRightIcon
                    size={15}
                    weight="bold"
                    className="transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
                  />
                </CtaButton>
              </div>
            </div>
          </article>

          <article className="group flex flex-col space-y-6">
            <Link
              href={siteConfig.products.forever}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block aspect-16/10 w-full overflow-hidden bg-muted/20"
            >
              <Image
                src="/utils/products/forever/product_showcase.png"
                alt={t("forever.image_alt")}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />

              <div className="absolute left-4 top-4 flex items-center gap-2 rounded-xs border border-border/60 bg-background px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-foreground shadow-xs">
                <span className="text-[10px] font-semibold text-muted-foreground">
                  {t("forever.card_label")}
                </span>
                <span className="text-muted-foreground/40">•</span>
                <span className="font-bold text-foreground">
                  {t("forever.price")}
                </span>
              </div>

              <div
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-sm bg-background/80 text-foreground backdrop-blur-md opacity-0 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100"
                aria-label={t("forever.cta")}
              >
                <ArrowUpRightIcon size={18} weight="bold" />
              </div>
            </Link>

            <div className="flex flex-1 flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex h-7 items-center gap-2">
                  {foreverTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-sm bg-foreground/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground transition-colors duration-300 group-hover:text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-2">
                  <div className="flex h-20 items-center sm:h-24 md:h-28">
                    <Image
                      src="/utils/products/forever/logo_black.svg"
                      alt="Forever"
                      width={1422}
                      height={454}
                      className="h-16 w-auto object-contain object-left dark:hidden sm:h-20 md:h-24"
                      priority
                    />
                    <Image
                      src="/utils/products/forever/logo_white.svg"
                      alt="Forever"
                      width={1422}
                      height={454}
                      className="hidden h-16 w-auto object-contain object-left dark:block sm:h-20 md:h-24"
                      priority
                    />
                  </div>
                </div>

                <p className="flex items-start text-sm font-normal leading-relaxed text-muted-foreground md:h-[6.5rem] md:text-base lg:h-[5.5rem]">
                  {t("forever.description")}
                </p>

                <ul className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
                  {foreverFeatures.map((feature) => {
                    const Icon = feature.icon

                    return (
                      <li
                        key={feature.title}
                        className="group/feature relative flex h-[88px] items-center overflow-hidden rounded-sm bg-foreground/[0.03] p-4 dark:bg-foreground/[0.04] sm:h-[92px]"
                      >
                        <p className="relative z-10 text-xs font-medium leading-relaxed text-foreground/90 sm:text-sm">
                          {feature.title}
                        </p>
                        <div className="pointer-events-none absolute -bottom-6 -right-3 text-foreground/[0.06] transition-transform duration-500 group-hover/feature:scale-110 dark:text-foreground/[0.08]">
                          <Icon size={96} />
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex flex-col justify-center rounded-sm border border-border/60 bg-background p-4 text-xs leading-relaxed text-muted-foreground md:h-[104px] lg:h-[96px]">
                  <span className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-foreground">
                    {t("forever.offer_eyebrow")}
                  </span>
                  <p>{t("forever.offer")}</p>
                </div>

                <CtaButton
                  href={siteConfig.products.forever}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="sm"
                  className="h-11 px-6 text-xs font-bold uppercase tracking-wider"
                >
                  <span>{t("forever.cta")}</span>
                  <ArrowUpRightIcon
                    size={15}
                    weight="bold"
                    className="transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
                  />
                </CtaButton>
              </div>
            </div>
          </article>
        </div>
      </ScrollReveal>
    </Section>
  )
}
