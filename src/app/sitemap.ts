import { MetadataRoute } from "next"

import { locales } from "@/src/i18n/config"
import { getPathname } from "@/src/i18n/navigation"

import { siteConfig } from "@/src/config/site"

interface LocalizedRouteDefinition {
  changeFrequency: "weekly" | "monthly"
  href: "/" | "/contato" | "/metodo" | "/estudio"
  priority: number
}

interface SitemapRoute {
  changeFrequency: "weekly" | "monthly"
  path: string
  priority: number
  alternates?: {
    languages: Record<string, string>
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const localizedRouteDefinitions: LocalizedRouteDefinition[] = [
    {
      changeFrequency: "weekly",
      href: "/",
      priority: 1,
    },
    {
      changeFrequency: "monthly",
      href: "/contato",
      priority: 0.8,
    },
    {
      changeFrequency: "monthly",
      href: "/metodo",
      priority: 0.7,
    },
    {
      changeFrequency: "monthly",
      href: "/estudio",
      priority: 0.7,
    },
  ]

  const localizedPaths: SitemapRoute[] = localizedRouteDefinitions.flatMap(
    (route): SitemapRoute[] => {
      if (route.href === "/") {
        const languages: Record<string, string> = {}
        for (const locale of locales) {
          languages[locale] = new URL("/", siteConfig.url).toString()
        }

        return [
          {
            changeFrequency: route.changeFrequency,
            path: route.href,
            priority: route.priority,
            alternates: {
              languages,
            },
          },
        ]
      }

      return locales.map((locale) => {
        const languages: Record<string, string> = {}
        for (const l of locales) {
          languages[l] = new URL(
            getPathname({
              locale: l,
              href: route.href,
            }),
            siteConfig.url
          ).toString()
        }

        return {
          changeFrequency: route.changeFrequency,
          path: getPathname({
            locale,
            href: route.href,
          }),
          priority: route.priority,
          alternates: {
            languages,
          },
        }
      })
    }
  )

  return localizedPaths.map((route) => ({
    url: new URL(route.path, siteConfig.url).toString(),
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    alternates: route.alternates,
  }))
}
