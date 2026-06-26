import * as React from "react"

import { getTranslations } from "next-intl/server"
import Image from "next/image"
import Link from "next/link"

import { Section } from "@/src/components/ui/section"
import { ArrowUpRightIcon } from "@/src/components/ui/serverIcons"
import { StaggeredText } from "@/src/components/ui/staggeredText"

import { featuredProjects } from "@/src/config/projects"

export async function PortfolioShowcase(): Promise<React.JSX.Element> {
  const t = await getTranslations("Index.Showcase")
  const idT = await getTranslations("Index.Ids")

  return (
    <Section
      id={idT("portfolio")}
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
                <StaggeredText text={t("title_primary")} />
              </span>
              <span className="mt-3 block text-brand-primary">
                <StaggeredText text={t("title_accent")} />
              </span>
            </h2>
          </div>

          <p className="max-w-4xl text-xl font-medium leading-tight tracking-tight text-muted-foreground md:text-3xl lg:text-4xl">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`https://portfolio.magui.studio/${project.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col space-y-5 rounded-2xl border border-border/60 bg-card/20 p-4 transition-all duration-300 hover:border-brand-primary/40 hover:bg-card/40 backdrop-blur-sm"
            >
              <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border/40">
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
                    <h3 className="text-xl font-bold uppercase tracking-tight text-foreground group-hover:text-brand-primary transition-colors duration-300">
                      {project.title}
                    </h3>
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
                      className="rounded-full border border-border/80 bg-foreground/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground transition-colors duration-300 group-hover:border-brand-primary/20 group-hover:text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center pt-8">
          <Link
            href="https://portfolio.magui.studio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 items-center justify-center rounded-full border border-border bg-transparent px-8 text-sm font-bold uppercase tracking-wider text-foreground hover:bg-foreground hover:text-background transition-all duration-300 gap-2"
          >
            <span>{t("view_more")}</span>
            <ArrowUpRightIcon size={18} />
          </Link>
        </div>
      </div>
    </Section>
  )
}
