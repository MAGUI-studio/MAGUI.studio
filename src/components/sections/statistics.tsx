import * as React from "react"

import { getTranslations } from "next-intl/server"

import { AnimatedCounter } from "@/src/components/ui/animatedCounter"
import { ScrollReveal } from "@/src/components/ui/scrollReveal"
import { Section } from "@/src/components/ui/section"
import { StaggeredText } from "@/src/components/ui/staggeredText"

export async function Statistics(): Promise<React.JSX.Element> {
  const t = await getTranslations("Index.Statistics")
  const idT = await getTranslations("Index.Ids")

  return (
    <Section
      id={idT("statistics") || "statistics"}
      className="py-24 md:py-32 lg:py-40 border-t border-border/40"
      withContainer={true}
    >
      <div className="space-y-16 lg:space-y-24">
        <div className="flex flex-col gap-12 lg:gap-16">
          <div className="space-y-10">
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
              <span className="mt-3 block text-brand-primary">
                <StaggeredText text={t("title_2")} />
              </span>
            </h2>
          </div>
        </div>

        <ScrollReveal variant="scaleUp" delay={0.2}>
          <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-12">
            <div className="space-y-4">
              <div className="font-heading text-5xl font-black text-brand-primary lg:text-7xl">
                <AnimatedCounter value={4} suffix="+" />
              </div>
              <h3 className="text-lg font-bold text-foreground">
                {t("stat_1_label")}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {t("stat_1_desc")}
              </p>
            </div>

            <div className="space-y-4">
              <div className="font-heading text-5xl font-black text-brand-primary lg:text-7xl">
                <AnimatedCounter value={100} suffix="%" />
              </div>
              <h3 className="text-lg font-bold text-foreground">
                {t("stat_2_label")}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {t("stat_2_desc")}
              </p>
            </div>

            <div className="space-y-4">
              <div className="font-heading text-5xl font-black text-brand-primary lg:text-7xl">
                <AnimatedCounter value={90} suffix="+" />
              </div>
              <h3 className="text-lg font-bold text-foreground">
                {t("stat_3_label")}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {t("stat_3_desc")}
              </p>
            </div>

            <div className="space-y-4">
              <div className="font-heading text-5xl font-black text-brand-primary lg:text-7xl">
                <AnimatedCounter value={2026} />
              </div>
              <h3 className="text-lg font-bold text-foreground">
                {t("stat_4_label")}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {t("stat_4_desc")}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  )
}
