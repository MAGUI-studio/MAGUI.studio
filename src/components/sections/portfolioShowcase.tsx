import * as React from "react"

import { getMessages, getTranslations } from "next-intl/server"
import Image from "next/image"
import Link from "next/link"

import { ScrollReveal } from "@/src/components/ui/scrollReveal"
import { Section } from "@/src/components/ui/section"
import { ArrowUpRightIcon } from "@/src/components/ui/serverIcons"
import { StaggeredText } from "@/src/components/ui/staggeredText"

import { featuredProjects } from "@/src/config/projects"

export async function PortfolioShowcase(): Promise<React.JSX.Element> {
  const t = await getTranslations("Index.Showcase")
  const idT = await getTranslations("Index.Ids")
  const messages = await getMessages()
  const tags = messages.Index.Showcase.featured_case.tags as string[]

  return (
    <Section
      id={idT("portfolio")}
      className="py-24 md:py-32 lg:py-40"
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
                <StaggeredText text={t("title_primary")} />
              </span>
              <span className="mt-3 block text-brand-primary">
                <StaggeredText text={t("title_accent")} />
              </span>
            </h2>
          </div>

          <ScrollReveal variant="fadeUp" delay={0.1}>
            <p className="max-w-4xl text-xl font-medium leading-tight tracking-tight text-muted-foreground md:text-3xl lg:text-4xl">
              {t("description")}
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal variant="fadeUp" delay={0.2}>
          <article className="space-y-8 lg:space-y-10">
            <Link
              href="https://parqueuna.piramideimoveissjc.com.br/pt"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-16/9 w-full overflow-hidden rounded-2xl bg-muted/20 md:aspect-21/9 md:rounded-3xl"
            >
              <Image
                src="/projects/piramide_imoveis_parque_una.webp"
                alt={t("featured_case.image_alt")}
                fill
                sizes="(max-width: 1440px) 100vw, 1440px"
                priority
                className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
              <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur-md opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105">
                <ArrowUpRightIcon size={18} weight="bold" />
              </div>
            </Link>

            <div className="w-full space-y-6">
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-foreground/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground transition-colors duration-300 group-hover:text-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="w-full space-y-3">
                <h3 className="w-full font-heading text-3xl font-black uppercase leading-[1.1] tracking-[-0.04em] text-foreground md:text-5xl lg:text-6xl">
                  {t("featured_case.title")}
                </h3>
                <p className="w-full text-base font-medium leading-relaxed text-muted-foreground md:text-xl">
                  {t("featured_case.subtitle")}
                </p>
              </div>

              <div className="flex w-full flex-wrap items-center gap-3">
                <Link
                  href="https://parqueuna.piramideimoveissjc.com.br/pt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-brand-primary px-6 py-3.5 text-xs font-black uppercase tracking-[0.25em] text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>{t("featured_case.visit_project")}</span>
                  <ArrowUpRightIcon
                    size={16}
                    weight="bold"
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>

                <Link
                  href={`/#${idT("contact")}`}
                  className="group inline-flex items-center gap-2.5 rounded-full border border-border/80 bg-foreground/5 px-6 py-3.5 text-xs font-black uppercase tracking-[0.25em] text-foreground transition-all duration-300 hover:bg-foreground hover:text-background active:scale-[0.98]"
                >
                  <span>{t("featured_case.cta")}</span>
                </Link>
              </div>
            </div>
          </article>
        </ScrollReveal>

        <div className="space-y-10 pt-4 lg:pt-8">
          <div className="flex items-center gap-4">
            <div className="h-px w-8 bg-border" />
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground">
              {t("other_projects_label")}
            </h3>
            <div className="h-px flex-1 bg-border" />
          </div>

          <ScrollReveal variant="scaleUp" delay={0.2}>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.map((project) => (
                <Link
                  key={project.slug}
                  href={`https://portfolio.magui.studio/projetos/${project.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col space-y-5 rounded-2xl bg-card/20 p-4 transition-all duration-300 hover:bg-card/40 backdrop-blur-sm active:scale-[0.98]"
                >
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl">
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
                        <h4 className="text-xl font-bold uppercase tracking-tight text-foreground group-hover:text-brand-primary transition-colors duration-300">
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
                          className="rounded-full bg-foreground/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground transition-colors duration-300 group-hover:text-foreground"
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
              <Link
                href="https://portfolio.magui.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center justify-center rounded-full bg-transparent px-8 text-sm font-bold uppercase tracking-wider text-foreground hover:bg-foreground hover:text-background transition-all duration-300 gap-2 active:scale-[0.97]"
              >
                <span>{t("view_more")}</span>
                <ArrowUpRightIcon size={18} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </Section>
  )
}
