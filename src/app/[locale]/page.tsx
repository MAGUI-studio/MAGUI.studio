import * as React from "react"

import { Metadata } from "next"
import { getTranslations, setRequestLocale } from "next-intl/server"
import dynamic from "next/dynamic"

import { SectionDivider } from "@/src/components/ui/sectionDivider"
import { ServiceMarquee } from "@/src/components/ui/serviceMarquee"

import { Footer } from "@/src/components/common/footer"
import { Header } from "@/src/components/common/header"
import { ScrollSpy } from "@/src/components/common/scrollSpy"
import { Hero } from "@/src/components/sections/hero"
import { PortfolioShowcase } from "@/src/components/sections/portfolioShowcase"
import { Products } from "@/src/components/sections/products"
import { Services } from "@/src/components/sections/services"
import { Value } from "@/src/components/sections/value"

import { siteConfig } from "@/src/config/site"

const CurvedLoop = dynamic(() =>
  import("@/src/components/common/curvedMarquee").then(
    (module) => module.default
  )
)

interface HomePageProps {
  params: Promise<{
    locale: string
  }>
}

export async function generateMetadata({
  params,
}: HomePageProps): Promise<Metadata> {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations("Config")
  const title = t("name")
  const description = t("description")
  const url = new URL(siteConfig.url)

  return {
    title,
    description,
    alternates: {
      canonical: url.toString(),
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: url.toString(),
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.ogImage],
    },
  }
}

export default async function Page({
  params,
}: HomePageProps): Promise<React.JSX.Element> {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations("Index.Marquee")

  return (
    <div className="relative min-h-svh w-full bg-background font-sans text-foreground selection:bg-brand-primary/30 selection:text-brand-primary overflow-x-hidden">
      <ScrollSpy />
      <Header />
      <main>
        <Hero />

        <ServiceMarquee />

        <Value />
        <Services />

        <div className="overflow-hidden py-4 md:py-8">
          <CurvedLoop marqueeText={t("text")} speed={1.5} curveAmount={150} />
        </div>

        <PortfolioShowcase />
        <SectionDivider />
        <Products />
      </main>
      <Footer />
    </div>
  )
}
