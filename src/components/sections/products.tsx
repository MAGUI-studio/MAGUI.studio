import * as React from "react"

import { getMessages, getTranslations } from "next-intl/server"
import Image from "next/image"
import Link from "next/link"

import { CtaButton } from "@/src/components/ui/ctaButton"
import { ScrollReveal } from "@/src/components/ui/scrollReveal"
import { Section } from "@/src/components/ui/section"
import {
  ArrowUpRightIcon,
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

export async function Products(): Promise<React.JSX.Element> {
  const t = await getTranslations("Index.Products")
  const idT = await getTranslations("Index.Ids")
  const messages = await getMessages()

  const foreverTags = (messages as IntlMessages).Index.Products.forever.tags
  const flowTags = (messages as IntlMessages).Index.Products.flow.tags

  const foreverFeatures: ProductFeature[] = [
    { icon: UsersIcon, title: t("forever.features.0") },
    { icon: GiftIcon, title: t("forever.features.1") },
    { icon: SparkleIcon, title: t("forever.features.2") },
    { icon: HeartIcon, title: t("forever.features.3") },
  ]

  const flowFeatures: ProductFeature[] = [
    { icon: TargetIcon, title: t("flow.features.0") },
    { icon: SquaresFourIcon, title: t("flow.features.1") },
    { icon: CompassRoseIcon, title: t("flow.features.2") },
    { icon: UsersIcon, title: t("flow.features.3") },
  ]

  return (
    <Section
      id={idT("products")}
      className="py-12 md:py-16 lg:py-20"
      withContainer={true}
    >
      <ScrollReveal variant="fadeUp" delay={0.2}>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
          <article className="group flex flex-col space-y-6">
            <Link
              href={siteConfig.products.forever}
              target="_blank"
              rel="noopener noreferrer"
              className="group/window block w-full overflow-hidden rounded-xl border border-border/70 bg-card/60 shadow-lg shadow-black/5 transition-all duration-500 hover:border-border hover:shadow-2xl dark:border-border/60 dark:bg-card/40 dark:shadow-black/30 dark:hover:border-border/90 md:rounded-2xl"
            >
              <div className="flex h-9 items-center justify-between border-b border-border/60 bg-muted/50 px-3.5 backdrop-blur-sm sm:h-10 sm:px-4">
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56] opacity-80 ring-1 ring-[#E0443E]/50 transition-opacity duration-300 group-hover/window:opacity-100" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E] opacity-80 ring-1 ring-[#DEA123]/50 transition-opacity duration-300 group-hover/window:opacity-100" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F] opacity-80 ring-1 ring-[#1AAB29]/50 transition-opacity duration-300 group-hover/window:opacity-100" />
                </div>
                <div className="mx-2 flex h-6 max-w-[220px] flex-1 items-center justify-center gap-1.5 rounded-md border border-border/40 bg-background/70 px-2.5 text-[11px] font-mono font-medium text-muted-foreground/80 shadow-2xs sm:max-w-[260px]">
                  <svg
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-2.5 w-2.5 shrink-0 opacity-50"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 1a3.5 3.5 0 0 0-3.5 3.5V6H4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-.5V4.5A3.5 3.5 0 0 0 8 1Zm2 5V4.5a2 2 0 1 0-4 0V6h4Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="truncate text-[10.5px]">
                    forever.magui.studio
                  </span>
                </div>
                <div className="w-12 sm:w-14" aria-hidden="true" />
              </div>

              <div className="relative aspect-16/9 w-full overflow-hidden bg-background">
                <Image
                  src="/utils/products/forever/forever.webp"
                  alt={t("forever.image_alt")}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain transition-transform duration-700 ease-out group-hover/window:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover/window:bg-black/5 dark:group-hover/window:bg-white/[0.02]" />
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
                        <div className="pointer-events-none absolute -bottom-6 -right-3 text-foreground opacity-[0.06] transition-transform duration-500 group-hover/feature:scale-110 dark:opacity-[0.08]">
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

                <div className="flex h-11 items-center">
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
            </div>
          </article>

          <article className="group flex flex-col space-y-6">
            <Link
              href={siteConfig.products.flow}
              target="_blank"
              rel="noopener noreferrer"
              className="group/window block w-full overflow-hidden rounded-xl border border-border/70 bg-card/60 shadow-lg shadow-black/5 transition-all duration-500 hover:border-border hover:shadow-2xl dark:border-border/60 dark:bg-card/40 dark:shadow-black/30 dark:hover:border-border/90 md:rounded-2xl"
            >
              <div className="flex h-9 items-center justify-between border-b border-border/60 bg-muted/50 px-3.5 backdrop-blur-sm sm:h-10 sm:px-4">
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56] opacity-80 ring-1 ring-[#E0443E]/50 transition-opacity duration-300 group-hover/window:opacity-100" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E] opacity-80 ring-1 ring-[#DEA123]/50 transition-opacity duration-300 group-hover/window:opacity-100" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F] opacity-80 ring-1 ring-[#1AAB29]/50 transition-opacity duration-300 group-hover/window:opacity-100" />
                </div>
                <div className="mx-2 flex h-6 max-w-[220px] flex-1 items-center justify-center gap-1.5 rounded-md border border-border/40 bg-background/70 px-2.5 text-[11px] font-mono font-medium text-muted-foreground/80 shadow-2xs sm:max-w-[260px]">
                  <svg
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-2.5 w-2.5 shrink-0 opacity-50"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 1a3.5 3.5 0 0 0-3.5 3.5V6H4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-.5V4.5A3.5 3.5 0 0 0 8 1Zm2 5V4.5a2 2 0 1 0-4 0V6h4Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="truncate text-[10.5px]">
                    flow.magui.studio
                  </span>
                </div>
                <div className="w-12 sm:w-14" aria-hidden="true" />
              </div>

              <div className="relative aspect-16/9 w-full overflow-hidden bg-background">
                <Image
                  src="/utils/products/flow/flow.webp"
                  alt={t("flow.image_alt")}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain transition-transform duration-700 ease-out group-hover/window:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover/window:bg-black/5 dark:group-hover/window:bg-white/[0.02]" />
              </div>
            </Link>

            <div className="flex flex-1 flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex h-7 items-center gap-2">
                  {flowTags.map((tag) => (
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
                      src="/utils/products/flow/logo_black.svg"
                      alt="Flow"
                      width={891}
                      height={296}
                      className="h-14 w-auto object-contain object-left dark:hidden sm:h-18 md:h-22"
                      priority
                    />
                    <Image
                      src="/utils/products/flow/logo_white.svg"
                      alt="Flow"
                      width={891}
                      height={296}
                      className="hidden h-14 w-auto object-contain object-left dark:block sm:h-18 md:h-22"
                      priority
                    />
                  </div>
                </div>

                <p className="flex items-start text-sm font-normal leading-relaxed text-muted-foreground md:h-[6.5rem] md:text-base lg:h-[5.5rem]">
                  {t("flow.description")}
                </p>

                <ul className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
                  {flowFeatures.map((feature) => {
                    const Icon = feature.icon

                    return (
                      <li
                        key={feature.title}
                        className="group/feature relative flex h-[88px] items-center overflow-hidden rounded-sm bg-foreground/[0.03] p-4 dark:bg-foreground/[0.04] sm:h-[92px]"
                      >
                        <p className="relative z-10 text-xs font-medium leading-relaxed text-foreground/90 sm:text-sm">
                          {feature.title}
                        </p>
                        <div className="pointer-events-none absolute -bottom-6 -right-3 text-foreground opacity-[0.06] transition-transform duration-500 group-hover/feature:scale-110 dark:opacity-[0.08]">
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
                    {t("flow.offer_eyebrow")}
                  </span>
                  <p>{t("flow.offer")}</p>
                </div>

                <div className="flex h-11 items-center">
                  <CtaButton
                    href={siteConfig.products.flow}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    size="sm"
                    className="h-11 px-6 text-xs font-bold uppercase tracking-wider"
                  >
                    <span>{t("flow.cta")}</span>
                    <ArrowUpRightIcon
                      size={15}
                      weight="bold"
                      className="transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
                    />
                  </CtaButton>
                </div>
              </div>
            </div>
          </article>
        </div>
      </ScrollReveal>
    </Section>
  )
}
