import * as React from "react"

import { Metadata } from "next"
import { getTranslations, setRequestLocale } from "next-intl/server"
import Image from "next/image"

import { getPathname } from "@/src/i18n/navigation"

import { ScrollReveal } from "@/src/components/ui/scrollReveal"
import { Section } from "@/src/components/ui/section"
import { SectionDivider } from "@/src/components/ui/sectionDivider"
import { CheckIcon } from "@/src/components/ui/serverIcons"
import { StaggeredText } from "@/src/components/ui/staggeredText"

import { Footer } from "@/src/components/common/footer"
import { Header } from "@/src/components/common/header"
import { Contact } from "@/src/components/sections/contact"

import { siteConfig } from "@/src/config/site"

interface MethodPageProps {
  params: Promise<{
    locale: string
  }>
}

export async function generateMetadata({
  params,
}: MethodPageProps): Promise<Metadata> {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations("MethodPage")
  const url = new URL(
    getPathname({
      locale,
      href: siteConfig.method.path,
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

interface PhaseDetails {
  id: string
  title: string
  label: string
  image: string
  description: string
  details: string[]
}

interface CadenceItem {
  title: string
  description: string
}

export default async function MethodPage({
  params,
}: MethodPageProps): Promise<React.JSX.Element> {
  const { locale } = await params
  setRequestLocale(locale)

  const t = await getTranslations("MethodPage")

  const phases = t.raw("phases") as PhaseDetails[]
  const cadenceItems = t.raw("cadence_items") as CadenceItem[]
  const qaItems = t.raw("qa_items") as string[]

  return (
    <div className="relative min-h-svh w-full overflow-x-hidden bg-background font-sans text-foreground selection:bg-brand-primary/30 selection:text-brand-primary">
      <Header />

      <main>
        {/* Hero Section */}
        <Section
          className="pt-32 pb-16 md:pt-44 md:pb-24 lg:pt-52"
          withContainer
        >
          <div className="space-y-8 md:space-y-12">
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-brand-primary" />
              <span className="text-[10px] font-black uppercase tracking-[0.45em] text-brand-primary">
                {t("eyebrow")}
              </span>
            </div>

            <div className="space-y-6 md:space-y-8">
              <h1 className="font-heading text-5xl font-black uppercase leading-[1.1] tracking-[-0.05em] text-foreground md:text-8xl lg:text-9xl">
                <span className="block">
                  <StaggeredText text={t("title")} />
                </span>
              </h1>
              <ScrollReveal variant="fadeUp" delay={0.15}>
                <p className="max-w-4xl text-xl font-medium leading-tight tracking-tight text-muted-foreground md:text-3xl lg:text-4xl">
                  {t("description")}
                </p>
              </ScrollReveal>
            </div>
          </div>
        </Section>

        <SectionDivider />

        {/* Phases section (Method Map) */}
        <Section className="py-20 md:py-32 lg:py-40" withContainer>
          <div className="space-y-16 md:space-y-24">
            <ScrollReveal>
              <div className="flex items-center gap-4">
                <div className="h-px w-8 bg-brand-primary" />
                <h2 className="text-[10px] font-black uppercase tracking-[0.45em] text-brand-primary">
                  {t("map_label")}
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 gap-12 md:gap-16 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-20">
              {Array.isArray(phases) &&
                phases.map((phase, index) => {
                  const clipPath =
                    index % 2 === 0
                      ? "polygon(0 0, calc(100% - 48px) 0, 100% 48px, 100% 100%, 0 100%)"
                      : "polygon(48px 0, 100% 0, 100% 100%, 0 100%, 0 48px)"

                  return (
                    <ScrollReveal
                      key={phase.id}
                      variant="fadeUp"
                      delay={index * 0.1}
                      className="group flex flex-col justify-between rounded-4xl border border-border/60 bg-muted/5 p-8 transition-colors duration-500 hover:bg-muted/10 md:p-10 lg:p-12"
                    >
                      <div className="space-y-8">
                        <header className="flex items-start justify-between gap-6">
                          <div className="space-y-2">
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-primary/80">
                              {phase.label}
                            </span>
                            <h3 className="font-heading text-2xl font-black uppercase tracking-tight md:text-4xl">
                              {phase.title}
                            </h3>
                          </div>
                          <span className="font-heading text-4xl font-black text-brand-primary/20 md:text-5xl">
                            {phase.id}
                          </span>
                        </header>

                        <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                          {phase.description}
                        </p>

                        <div
                          className="relative overflow-hidden border border-foreground/5"
                          style={{ clipPath }}
                        >
                          <div className="relative h-48 w-full md:h-64">
                            <Image
                              src={phase.image}
                              alt={phase.title}
                              fill
                              sizes="(max-width: 1024px) 100vw, 45vw"
                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/40" />
                          </div>
                        </div>

                        <div className="space-y-4">
                          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/60">
                            {t("phase_focus_label")}
                          </p>
                          <ul className="space-y-3" role="list">
                            {phase.details.map((detail) => (
                              <li
                                key={detail}
                                className="flex items-center gap-3 text-sm font-medium text-muted-foreground"
                              >
                                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
                                  <CheckIcon size={12} weight="bold" />
                                </span>
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </ScrollReveal>
                  )
                })}
            </div>
          </div>
        </Section>

        <SectionDivider />

        {/* Cadence Section */}
        <Section className="py-20 md:py-32 lg:py-40 bg-muted/5" withContainer>
          <div className="space-y-16 md:space-y-24">
            <div className="space-y-6 max-w-4xl">
              <div className="flex items-center gap-4">
                <div className="h-px w-8 bg-brand-primary" />
                <span className="text-[10px] font-black uppercase tracking-[0.45em] text-brand-primary">
                  {t("cadence_label")}
                </span>
              </div>
              <h2 className="font-heading text-4xl font-black uppercase leading-tight tracking-tight md:text-6xl">
                {t("cadence_title")}
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
                {t("cadence_description")}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-4xl border border-border/40 bg-border/40 md:grid-cols-3">
              {Array.isArray(cadenceItems) &&
                cadenceItems.map((item, index) => (
                  <ScrollReveal
                    key={item.title}
                    variant="fadeUp"
                    delay={index * 0.15}
                    className="bg-background p-8 md:p-10 lg:p-12 space-y-6"
                  >
                    <span className="font-heading text-3xl font-black text-brand-primary/20">
                      0{index + 1}
                    </span>
                    <div className="space-y-3">
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
          </div>
        </Section>

        <SectionDivider />

        {/* QA Checklist Section */}
        <Section className="py-20 md:py-32 lg:py-40" withContainer>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
            <ScrollReveal className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-px w-8 bg-brand-primary" />
                <span className="text-[10px] font-black uppercase tracking-[0.45em] text-brand-primary">
                  Rigor
                </span>
              </div>
              <h2 className="font-heading text-4xl font-black uppercase leading-tight tracking-tight md:text-6xl">
                {t("qa_title")}
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
                {t("qa_description")}
              </p>
            </ScrollReveal>

            <ScrollReveal variant="scaleUp" className="flex items-center">
              <div className="w-full rounded-4xl border border-border/60 bg-muted/5 p-8 md:p-10 lg:p-12">
                <ul className="space-y-6" role="list">
                  {Array.isArray(qaItems) &&
                    qaItems.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-4 text-base font-bold text-foreground md:text-lg"
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
                          <CheckIcon size={14} weight="bold" />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                </ul>
              </div>
            </ScrollReveal>
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
