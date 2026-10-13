import * as React from "react"

import { getMessages, getTranslations } from "next-intl/server"
import Image from "next/image"
import Link from "next/link"

import { CtaButton } from "@/src/components/ui/ctaButton"
import { ScrollReveal } from "@/src/components/ui/scrollReveal"
import { Section } from "@/src/components/ui/section"
import { SectionHeader } from "@/src/components/ui/sectionHeader"
import { ArrowUpRightIcon } from "@/src/components/ui/serverIcons"

import { featuredProjects } from "@/src/config/projects"

export async function PortfolioShowcase(): Promise<React.JSX.Element> {
  const t = await getTranslations("Index.Showcase")
  const idT = await getTranslations("Index.Ids")
  const messages = await getMessages()
  const tags = messages.Index.Showcase.featured_case.tags as string[]
  const blogTags = messages.Index.Showcase.featured_case_blog.tags as string[]

  return (
    <Section
      id={idT("portfolio")}
      className="py-12 md:py-16 lg:py-20"
      withContainer={true}
    >
      <div className="space-y-8 lg:space-y-12">
        <SectionHeader
          titlePrimary={t("title_primary")}
          titleAccent={t("title_accent")}
          description={t("description")}
          inline={true}
        />

        <ScrollReveal variant="fadeUp" delay={0.2}>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
            <article className="group flex flex-col space-y-6">
              <Link
                href="https://parqueuna.piramideimoveissjc.com.br/pt"
                target="_blank"
                rel="noopener noreferrer"
                className="relative block aspect-16/10 w-full overflow-hidden rounded-none bg-muted/20 md:rounded-none"
              >
                <Image
                  src="/projects/piramide_imoveis_parque_una.webp"
                  alt={t("featured_case.image_alt")}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
                <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-sm bg-background/80 text-foreground backdrop-blur-md opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105">
                  <ArrowUpRightIcon size={18} weight="bold" />
                </div>
              </Link>

              <div className="flex flex-1 flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-sm bg-foreground/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground transition-colors duration-300 group-hover:text-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-heading text-2xl font-bold uppercase tracking-tight text-foreground md:text-3xl">
                    {t("featured_case.title")}
                  </h3>

                  <p className="text-sm font-normal leading-relaxed text-muted-foreground md:text-base">
                    {t("featured_case.subtitle")}
                  </p>
                </div>

                <div className="pt-2">
                  <CtaButton
                    href="https://parqueuna.piramideimoveissjc.com.br/pt"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    size="sm"
                    className="h-11 px-6 text-xs font-bold uppercase tracking-wider"
                  >
                    <span>{t("featured_case.visit_project")}</span>
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
                href="https://blog.piramideimoveissjc.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative block aspect-16/10 w-full overflow-hidden rounded-none bg-muted/20 md:rounded-none"
              >
                <Image
                  src="/projects/piramide_imoveis_blog.jpg"
                  alt={t("featured_case_blog.image_alt")}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
                <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-sm bg-background/80 text-foreground backdrop-blur-md opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105">
                  <ArrowUpRightIcon size={18} weight="bold" />
                </div>
              </Link>

              <div className="flex flex-1 flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {blogTags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-sm bg-foreground/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground transition-colors duration-300 group-hover:text-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-heading text-2xl font-bold uppercase tracking-tight text-foreground md:text-3xl">
                    {t("featured_case_blog.title")}
                  </h3>

                  <p className="text-sm font-normal leading-relaxed text-muted-foreground md:text-base">
                    {t("featured_case_blog.subtitle")}
                  </p>
                </div>

                <div className="pt-2">
                  <CtaButton
                    href="https://blog.piramideimoveissjc.com.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    size="sm"
                    className="h-11 px-6 text-xs font-bold uppercase tracking-wider"
                  >
                    <span>{t("featured_case_blog.visit_project")}</span>
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

        <div className="pt-4 lg:pt-8">
          <ScrollReveal variant="scaleUp" delay={0.2}>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.map((project) => (
                <Link
                  key={project.slug}
                  href={`https://portfolio.magui.studio/projetos/${project.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col space-y-5 rounded-none bg-card/20 p-4 transition-all duration-300 hover:bg-card/40 backdrop-blur-sm active:scale-[0.98]"
                >
                  <div className="relative aspect-video w-full overflow-hidden rounded-none">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      priority={
                        project.slug === "cazetv" || project.slug === "powervet"
                      }
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xl font-bold uppercase tracking-tight text-foreground">
                          {project.title}
                        </h4>
                        <ArrowUpRightIcon
                          className="text-muted-foreground group-hover:text-brand-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                          size={20}
                        />
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {t(`projects.${project.slug}.description`)}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-sm bg-foreground/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground transition-colors duration-300 group-hover:text-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={0.3}>
            <div className="flex justify-center pt-4">
              <CtaButton
                href="https://portfolio.magui.studio"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="md"
                className="h-14"
              >
                <span className="flex items-center gap-2">
                  <span>{t("view_more")}</span>
                  <ArrowUpRightIcon
                    size={18}
                    weight="bold"
                    className="transition-transform duration-300 group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5"
                  />
                </span>
              </CtaButton>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </Section>
  )
}
