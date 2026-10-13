import * as React from "react"

import { getMessages, getTranslations } from "next-intl/server"
import Image from "next/image"

import { CtaButton } from "@/src/components/ui/ctaButton"
import { ScrollReveal } from "@/src/components/ui/scrollReveal"
import { Section } from "@/src/components/ui/section"
import { SectionHeader } from "@/src/components/ui/sectionHeader"
import { ArrowUpRightIcon } from "@/src/components/ui/serverIcons"
import { StaggeredText } from "@/src/components/ui/staggeredText"

import { siteConfig } from "@/src/config/site"

const serviceImages = [
  "/utils/banners/landing-pages.webp",
  "/utils/banners/pagina-de-vendas.webp",
  "/utils/banners/site-institucional.webp",
  "/utils/banners/blogs.webp",
] as const

export async function Services(): Promise<React.JSX.Element> {
  const t = await getTranslations("Index.Services")
  const idT = await getTranslations("Index.Ids")
  const messages = await getMessages()

  const landingTags = messages.Index.Services.landing.tags as string[]
  const salesTags = messages.Index.Services.sales.tags as string[]
  const institutionalTags = messages.Index.Services.institutional.tags as string[]
  const blogTags = messages.Index.Services.blog.tags as string[]

  return (
    <Section
      id={idT("services")}
      className="overflow-hidden py-24 md:py-32 lg:py-40"
      withContainer={true}
    >
      <div className="space-y-16 lg:space-y-24">
        <div className="flex flex-col gap-12 lg:gap-16">
          <SectionHeader
            eyebrow={t("eyebrow")}
            titlePrimary={t("title_1")}
            titleAccent={t("title_2")}
            description={t("description")}
            inline={true}
          />
        </div>

        <ScrollReveal variant="scaleUp" delay={0.2}>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6">
            <article className="group relative isolate flex min-h-[500px] flex-col justify-between overflow-hidden rounded-none border border-white/10 bg-background p-8 text-white sm:p-10 lg:col-span-8 lg:min-h-[540px] lg:p-12">
              <Image
                src={serviceImages[0]}
                alt={t("landing.title")}
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                quality={75}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-br from-black/94 via-zinc-900/86 to-zinc-800/70 opacity-95 transition-opacity duration-700 group-hover:opacity-88" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[3rem_3rem] opacity-25" />

              <div className="relative z-10 flex items-start justify-between gap-6">
                <span className="font-heading text-5xl font-black leading-none text-white/45 md:text-6xl">
                  01
                </span>

                <div className="flex items-center gap-3">
                  <div className="h-px w-8 bg-white/40" />
                  <span className="text-[11px] font-black uppercase tracking-[0.45em] text-white/90">
                    {t("landing.label")}
                  </span>
                </div>
              </div>

              <div className="relative z-10 space-y-6 pt-12">
                <div className="space-y-4">
                  <h3 className="font-heading text-4xl font-black uppercase leading-[1.05] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
                    <StaggeredText text={t("landing.title")} />
                  </h3>

                  <p className="max-w-2xl text-base font-medium leading-relaxed text-white/90 sm:text-lg">
                    {t("landing.description")}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {landingTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-sm border border-white/20 bg-white/10 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div>
                  <CtaButton
                    href={siteConfig.contact.path}
                    variant="dark-outline"
                    size="sm"
                    className="h-11 px-5 border-white/20 bg-white/8 text-white hover:border-white/40"
                    sliderClassName="bg-white/20"
                  >
                    <span>{t("cta")}</span>
                    <ArrowUpRightIcon
                      size={16}
                      weight="bold"
                      className="transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
                    />
                  </CtaButton>
                </div>
              </div>
            </article>

            <article className="group relative isolate flex min-h-[460px] flex-col justify-between overflow-hidden rounded-none border border-white/10 bg-background p-8 text-white sm:p-10 lg:col-span-4 lg:min-h-[540px]">
              <Image
                src={serviceImages[1]}
                alt={t("sales.title")}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                quality={60}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-br from-black/94 via-zinc-900/86 to-zinc-800/70 opacity-95 transition-opacity duration-700 group-hover:opacity-88" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[3rem_3rem] opacity-20" />

              <div className="relative z-10 flex items-start justify-between gap-6">
                <span className="font-heading text-5xl font-black leading-none text-white/45 md:text-6xl">
                  02
                </span>
                <div className="flex items-center gap-3">
                  <div className="h-px w-8 bg-white/30" />
                  <span className="text-[11px] font-black uppercase tracking-[0.45em] text-white/85">
                    {t("sales.label")}
                  </span>
                </div>
              </div>

              <div className="relative z-10 space-y-6 pt-8">
                <div className="space-y-3">
                  <h3 className="font-heading text-3xl font-black uppercase leading-[1.1] tracking-[-0.05em] sm:text-4xl">
                    <StaggeredText text={t("sales.title")} />
                  </h3>

                  <p className="text-sm font-medium leading-relaxed text-white/80 sm:text-base">
                    {t("sales.description")}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {salesTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-sm border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/85 backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div>
                  <CtaButton
                    href={siteConfig.contact.path}
                    variant="dark-outline"
                    size="sm"
                    className="h-11 px-5 border-white/20 bg-white/8 text-white hover:border-white/40"
                    sliderClassName="bg-white/20"
                  >
                    <span>{t("cta")}</span>
                    <ArrowUpRightIcon
                      size={16}
                      weight="bold"
                      className="transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
                    />
                  </CtaButton>
                </div>
              </div>
            </article>

            <article className="group relative isolate flex min-h-[380px] flex-col justify-between overflow-hidden rounded-none border border-white/10 bg-background p-8 text-white sm:p-10 lg:col-span-6 lg:min-h-[420px]">
              <Image
                src={serviceImages[2]}
                alt={t("institutional.title")}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={60}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-br from-black/94 via-zinc-900/86 to-zinc-800/70 opacity-95 transition-opacity duration-700 group-hover:opacity-88" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[3rem_3rem] opacity-20" />

              <div className="relative z-10 flex items-start justify-between gap-6">
                <span className="font-heading text-5xl font-black leading-none text-white/45 md:text-6xl">
                  03
                </span>
                <div className="flex items-center gap-3">
                  <div className="h-px w-8 bg-white/30" />
                  <span className="text-[11px] font-black uppercase tracking-[0.45em] text-white/85">
                    {t("institutional.label")}
                  </span>
                </div>
              </div>

              <div className="relative z-10 space-y-6 pt-8">
                <div className="space-y-3">
                  <h3 className="font-heading text-3xl font-black uppercase leading-[1.1] tracking-[-0.05em] sm:text-4xl">
                    <StaggeredText text={t("institutional.title")} />
                  </h3>

                  <p className="max-w-xl text-sm font-medium leading-relaxed text-white/80 sm:text-base">
                    {t("institutional.description")}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {institutionalTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-sm border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/85 backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div>
                  <CtaButton
                    href={siteConfig.contact.path}
                    variant="dark-outline"
                    size="sm"
                    className="h-11 px-5 border-white/20 bg-white/8 text-white hover:border-white/40"
                    sliderClassName="bg-white/20"
                  >
                    <span>{t("cta")}</span>
                    <ArrowUpRightIcon
                      size={16}
                      weight="bold"
                      className="transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
                    />
                  </CtaButton>
                </div>
              </div>
            </article>

            <article className="group relative isolate flex min-h-[380px] flex-col justify-between overflow-hidden rounded-none border border-white/10 bg-background p-8 text-white sm:p-10 lg:col-span-6 lg:min-h-[420px]">
              <Image
                src={serviceImages[3]}
                alt={t("blog.title")}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={60}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-br from-black/94 via-zinc-900/86 to-zinc-800/70 opacity-95 transition-opacity duration-700 group-hover:opacity-88" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[3rem_3rem] opacity-20" />

              <div className="relative z-10 flex items-start justify-between gap-6">
                <span className="font-heading text-5xl font-black leading-none text-white/45 md:text-6xl">
                  04
                </span>
                <div className="flex items-center gap-3">
                  <div className="h-px w-8 bg-white/30" />
                  <span className="text-[11px] font-black uppercase tracking-[0.45em] text-white/85">
                    {t("blog.label")}
                  </span>
                </div>
              </div>

              <div className="relative z-10 space-y-6 pt-8">
                <div className="space-y-3">
                  <h3 className="font-heading text-3xl font-black uppercase leading-[1.1] tracking-[-0.05em] sm:text-4xl">
                    <StaggeredText text={t("blog.title")} />
                  </h3>

                  <p className="max-w-xl text-sm font-medium leading-relaxed text-white/80 sm:text-base">
                    {t("blog.description")}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {blogTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-sm border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/85 backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div>
                  <CtaButton
                    href={siteConfig.contact.path}
                    variant="dark-outline"
                    size="sm"
                    className="h-11 px-5 border-white/20 bg-white/8 text-white hover:border-white/40"
                    sliderClassName="bg-white/20"
                  >
                    <span>{t("cta")}</span>
                    <ArrowUpRightIcon
                      size={16}
                      weight="bold"
                      className="transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
                    />
                  </CtaButton>
                </div>
              </div>
            </article>
          </div>
        </ScrollReveal>

      </div>
    </Section>
  )
}
