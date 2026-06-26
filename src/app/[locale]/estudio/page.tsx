import * as React from "react"

import { Metadata } from "next"
import { getTranslations, setRequestLocale } from "next-intl/server"
import Image from "next/image"

import { getPathname } from "@/src/i18n/navigation"

import { ScrollReveal } from "@/src/components/ui/scrollReveal"
import { Section } from "@/src/components/ui/section"
import { SectionDivider } from "@/src/components/ui/sectionDivider"
import { CheckIcon, SparkleIcon } from "@/src/components/ui/serverIcons"

import { Footer } from "@/src/components/common/footer"
import { Header } from "@/src/components/common/header"
import { Contact } from "@/src/components/sections/contact"
import { Manifesto } from "@/src/components/sections/manifesto"

import { siteConfig } from "@/src/config/site"

interface StudioPageProps {
  params: Promise<{
    locale: string
  }>
}

export async function generateMetadata({
  params,
}: StudioPageProps): Promise<Metadata> {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations("StudioPage")
  const url = new URL(
    getPathname({
      locale,
      href: siteConfig.studio.path,
    }),
    siteConfig.url
  )

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: url.toString(),
    },
    openGraph: {
      title: t("metaTitle"),
      description: t("metaDescription"),
      type: "website",
      url: url.toString(),
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: t("metaTitle"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("metaTitle"),
      description: t("metaDescription"),
      images: [siteConfig.ogImage],
    },
  }
}

interface PhilosophyItem {
  title: string
  description: string
}

export default async function StudioPage({
  params,
}: StudioPageProps): Promise<React.JSX.Element> {
  const { locale } = await params
  setRequestLocale(locale)

  const t = await getTranslations("StudioPage")

  const philosophyItems = t.raw("philosophy_items") as PhilosophyItem[]
  const nonNegotiableValues = t.raw("values") as string[]
  const founders = t.raw("founders") as Array<{
    name: string
    role: string
    description: string
    image: string
    imageAlt: string
  }>

  return (
    <div className="relative min-h-svh w-full overflow-x-hidden bg-background font-sans text-foreground selection:bg-brand-primary/30 selection:text-brand-primary">
      <Header />

      <main>
        {/* Manifesto Page Opener */}
        <ScrollReveal variant="fadeUp" delay={0.05}>
          <Manifesto />
        </ScrollReveal>

        <SectionDivider />

        {/* Positioning & Boutique Model */}
        <Section className="py-20 md:py-32 lg:py-40" withContainer>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Positioning */}
            <ScrollReveal
              variant="fadeUp"
              className="space-y-6 flex flex-col justify-between rounded-4xl border border-border/60 bg-muted/5 p-8 md:p-10 lg:p-12"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-px w-8 bg-brand-primary" />
                  <span className="text-[10px] font-black uppercase tracking-[0.42em] text-brand-primary">
                    {t("vision_label")}
                  </span>
                </div>
                <h2 className="font-heading text-3xl font-black uppercase tracking-tight md:text-5xl">
                  {t("vision_title")}
                </h2>
              </div>
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                {t("vision_description")}
              </p>
            </ScrollReveal>

            {/* Boutique Model */}
            <ScrollReveal
              variant="fadeUp"
              delay={0.15}
              className="space-y-6 flex flex-col justify-between rounded-4xl border border-border/60 bg-muted/5 p-8 md:p-10 lg:p-12"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-px w-8 bg-brand-primary" />
                  <span className="text-[10px] font-black uppercase tracking-[0.42em] text-brand-primary">
                    {t("boutique_label")}
                  </span>
                </div>
                <h2 className="font-heading text-3xl font-black uppercase tracking-tight md:text-5xl">
                  {t("boutique_title")}
                </h2>
              </div>
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                {t("boutique_description")}
              </p>
            </ScrollReveal>
          </div>
        </Section>

        <SectionDivider />

        {/* Philosophy & Non-negotiable Values */}
        <Section className="py-20 md:py-32 lg:py-40 bg-muted/5" withContainer>
          <div className="space-y-16 md:space-y-24">
            {/* Header */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
              <ScrollReveal className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-px w-8 bg-brand-primary" />
                  <span className="text-[10px] font-black uppercase tracking-[0.42em] text-brand-primary">
                    {t("approach_label")}
                  </span>
                </div>
                <h2 className="font-heading text-4xl font-black uppercase leading-tight tracking-tight md:text-6xl">
                  {t("philosophy_title")}
                </h2>
              </ScrollReveal>
              <ScrollReveal
                variant="fadeUp"
                delay={0.1}
                className="flex items-end"
              >
                <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
                  {t("philosophy_description")}
                </p>
              </ScrollReveal>
            </div>

            {/* Content grids */}
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Philosophy cards */}
              <div className="space-y-8 lg:col-span-7">
                {Array.isArray(philosophyItems) &&
                  philosophyItems.map((item, index) => (
                    <ScrollReveal
                      key={item.title}
                      variant="fadeUp"
                      delay={index * 0.1}
                      className="group flex gap-6 rounded-3xl border border-border/40 bg-background p-6 md:p-8"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary transition-transform duration-500 group-hover:rotate-12">
                        <SparkleIcon size={20} weight="bold" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-heading text-xl font-black uppercase tracking-tight md:text-2xl">
                          {item.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                          {item.description}
                        </p>
                      </div>
                    </ScrollReveal>
                  ))}
              </div>

              {/* Non-negotiables panel */}
              <div className="lg:col-span-5">
                <ScrollReveal
                  variant="scaleUp"
                  className="h-full rounded-4xl border border-border/60 bg-foreground p-8 text-background dark:bg-white dark:text-black md:p-10"
                >
                  <div className="space-y-8">
                    <span className="inline-flex rounded-full bg-background/10 dark:bg-black/5 px-4 py-2 text-[10px] font-black uppercase tracking-[0.4em]">
                      {t("values_label")}
                    </span>

                    <ul className="space-y-5" role="list">
                      {Array.isArray(nonNegotiableValues) &&
                        nonNegotiableValues.map((value) => (
                          <li
                            key={value}
                            className="flex items-start gap-4 text-base font-bold leading-snug"
                          >
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-primary text-white">
                              <CheckIcon size={14} weight="bold" />
                            </span>
                            <span>{value}</span>
                          </li>
                        ))}
                    </ul>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </Section>

        <SectionDivider />

        {/* Interactive Founders/Team Section */}
        <Section className="py-20 md:py-32 lg:py-40" withContainer>
          <div className="space-y-14 lg:space-y-20">
            <header className="space-y-5 max-w-4xl">
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-brand-primary" />
                <p className="text-[10px] font-black uppercase tracking-[0.42em] text-brand-primary">
                  {t("team_label")}
                </p>
              </div>
              <h2 className="font-heading text-4xl font-black uppercase leading-[1.1] tracking-[-0.05em] md:text-6xl lg:text-7xl">
                {t("team_title")}
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
                {t("team_description")}
              </p>
            </header>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-8 lg:gap-12">
              {Array.isArray(founders) &&
                founders.map((founder, index) => (
                  <ScrollReveal
                    key={founder.name}
                    variant="fadeUp"
                    delay={index * 0.15}
                    className={`group space-y-6 ${
                      index % 2 !== 0 ? "md:pt-12" : ""
                    }`}
                  >
                    <div className="relative aspect-4/5 overflow-hidden rounded-4xl border border-border/60 bg-muted/20">
                      <Image
                        src={founder.image}
                        alt={founder.imageAlt}
                        fill
                        sizes="(max-width: 767px) 100vw, 50vw"
                        className="object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
                        priority={index === 0}
                      />
                    </div>
                    <figcaption className="max-w-xl space-y-3">
                      <p className="text-[10px] font-black uppercase tracking-[0.34em] text-brand-primary/80">
                        {founder.role}
                      </p>
                      <h3 className="font-heading text-3xl font-black uppercase leading-none tracking-tight md:text-4xl">
                        {founder.name}
                      </h3>
                      <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                        {founder.description}
                      </p>
                    </figcaption>
                  </ScrollReveal>
                ))}
            </div>
          </div>
        </Section>

        <SectionDivider />

        {/* Bottom CTA */}
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
