import * as React from "react"

import { getTranslations } from "next-intl/server"
import dynamic from "next/dynamic"

import { ScrollReveal } from "@/src/components/ui/scrollReveal"
import { Section } from "@/src/components/ui/section"
import { SectionHeader } from "@/src/components/ui/sectionHeader"

const ProjectInquiryForm = dynamic(() =>
  import("@/src/components/common/projectInquiryForm").then(
    (module) => module.ProjectInquiryForm
  )
)

export async function Contact(): Promise<React.JSX.Element> {
  const t = await getTranslations("Index.CTA")
  const idT = await getTranslations("Index.Ids")
  const contactTitleParts = t("title").split(" ")
  const contactTitlePrimary = contactTitleParts.slice(0, -2).join(" ")
  const contactTitleAccent = contactTitleParts.slice(-2).join(" ")

  return (
    <Section
      id={idT("contact")}
      className="py-24 md:py-32 lg:py-40"
      withContainer={true}
    >
      <div className="space-y-14 lg:space-y-18">
        <header>
          <SectionHeader
            eyebrow={t("eyebrow")}
            titlePrimary={contactTitlePrimary}
            titleAccent={contactTitleAccent}
            description={t("description")}
          />
        </header>
        <ScrollReveal variant="scaleUp" delay={0.2}>
          <React.Suspense fallback={null}>
            <ProjectInquiryForm origin="contact" />
          </React.Suspense>
        </ScrollReveal>
      </div>
    </Section>
  )
}
