import { pathnames } from "@/src/i18n/routing"
import { describe, expect, it } from "vitest"

describe("i18n routing", () => {
  it("should localize the static studio pages in english", () => {
    expect(pathnames["/contato"].en).toBe("/contact")
  })

  it("should preserve the portuguese slugs for the static studio pages", () => {
    expect(pathnames["/contato"].pt).toBe("/contato")
  })
})
