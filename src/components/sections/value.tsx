import * as React from "react"

import { getMessages, getTranslations } from "next-intl/server"

import { Discipline } from "@/src/types/sections"

import { ScrollReveal } from "@/src/components/ui/scrollReveal"
import { Section } from "@/src/components/ui/section"
import { SectionHeader } from "@/src/components/ui/sectionHeader"
import { StaggeredText } from "@/src/components/ui/staggeredText"

export async function Value(): Promise<React.JSX.Element> {
  const t = await getTranslations("Index.Value")
  const idT = await getTranslations("Index.Ids")
  const messages = await getMessages()
  const disciplines = messages.Index.Value.disciplines as Discipline[]

  return (
    <Section
      id={idT("value")}
      className="pt-24 md:pt-26 lg:pt-40"
      withContainer={true}
    >
      <div className="space-y-16 md:space-y-20 lg:space-y-28">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <SectionHeader
            eyebrow={t("eyebrow")}
            titlePrimary={t("title_1")}
            titleAccent={t("title_2")}
          />

          <div className="lg:max-w-xl xl:max-w-2xl lg:pb-3">
            <ScrollReveal variant="fadeUp" delay={0.2}>
              <p className="text-lg font-medium leading-relaxed tracking-tight text-muted-foreground sm:text-xl lg:text-2xl xl:text-3xl">
                {t("description")}
              </p>
            </ScrollReveal>
          </div>
        </div>

        <ScrollReveal variant="fadeUp" delay={0.3}>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
            {disciplines.map((discipline) => (
              <article
                key={discipline.id}
                className="relative isolate flex flex-col justify-between space-y-8 pt-4"
              >
                <span
                  className="pointer-events-none absolute -top-8 right-0 select-none font-heading text-8xl font-black leading-none tracking-tighter text-foreground/[0.06] sm:text-9xl md:text-[130px] lg:-top-12 lg:text-[160px] xl:text-[180px]"
                  aria-hidden="true"
                >
                  {discipline.id}
                </span>

                <div className="relative z-10 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-px w-6 bg-brand-primary" />
                    <span className="text-[11px] font-black uppercase tracking-[0.45em] text-brand-primary">
                      {discipline.label}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-heading text-3xl font-black uppercase leading-[1.1] tracking-[-0.04em] text-foreground sm:text-4xl lg:text-5xl">
                      <StaggeredText text={discipline.title} />
                    </h3>

                    <div className="h-[2px] w-12 bg-foreground/15" />
                  </div>

                  <p className="text-base font-medium leading-relaxed text-muted-foreground sm:text-lg">
                    {discipline.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </Section>
  )
}
