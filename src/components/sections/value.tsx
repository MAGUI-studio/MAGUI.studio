import * as React from "react"

import { getMessages, getTranslations } from "next-intl/server"

import { Discipline } from "@/src/types/sections"

import { ScrollReveal } from "@/src/components/ui/scrollReveal"
import { Section } from "@/src/components/ui/section"
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
        <div className="flex flex-col gap-10 md:gap-12 2xl:flex-row lg:gap-20">
          <div className="space-y-7 md:space-y-8">
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-brand-primary" />
              <span className="text-[11px] font-black uppercase tracking-[0.5em] text-brand-primary">
                {t("eyebrow")}
              </span>
            </div>

            <h2 className="font-heading text-5xl font-black uppercase leading-[1.15] tracking-[-0.06em] text-foreground md:text-8xl 2xl:text-[136px]">
              <span className="block">
                <StaggeredText text={t("title_1")} />
              </span>
              <span className="mt-2 block text-brand-primary md:mt-3">
                <StaggeredText text={t("title_2")} />
              </span>
            </h2>
          </div>

          <div className="2xl:max-w-3xl 2xl:self-end">
            <ScrollReveal variant="fadeUp" delay={0.2}>
              <div className="relative overflow-hidden">
                <p className="text-lg font-medium leading-snug tracking-tight text-muted-foreground md:text-xl lg:text-3xl">
                  {t("description")}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <ScrollReveal variant="fadeUp" delay={0.3}>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
            {disciplines.map((discipline) => (
              <article key={discipline.id} className="group space-y-6">
                <div className="flex items-baseline justify-between">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-primary">
                    {discipline.label}
                  </span>
                  <span className="font-heading text-4xl font-black leading-none text-foreground/20 group-hover:text-brand-primary/40 transition-colors duration-500">
                    {discipline.id}
                  </span>
                </div>

                <h3 className="font-heading text-2xl font-black uppercase leading-tight tracking-tight text-foreground md:text-3xl">
                  {discipline.title}
                </h3>

                <div className="h-[2px] w-12 bg-foreground/10 group-hover:w-full group-hover:bg-brand-primary transition-all duration-500 my-3" />

                <p className="text-base font-medium leading-relaxed text-muted-foreground md:text-lg">
                  {discipline.description}
                </p>
              </article>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </Section>
  )
}
