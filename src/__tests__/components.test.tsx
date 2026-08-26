import * as React from "react"

import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { Button } from "@/src/components/ui/button"

import { PortfolioShowcase } from "@/src/components/sections/portfolioShowcase"

describe("Components", () => {
  describe("Button", () => {
    it("renders correctly with children", () => {
      render(<Button>Click me</Button>)
      expect(screen.getByText("Click me")).toBeInTheDocument()
    })
  })

  describe("PortfolioShowcase", () => {
    it("renders the showcase section with featured case study banner", async () => {
      render(await PortfolioShowcase())

      expect(screen.getByText("Portfólio Curado")).toBeInTheDocument()
      expect(screen.getByText("Urbanismo")).toBeInTheDocument()
      expect(
        screen.getByText("Pirâmide Imóveis • Parque Una SJC")
      ).toBeInTheDocument()
      expect(screen.getByText("Ver projeto")).toBeInTheDocument()
      expect(screen.getByText("Mais projetos selecionados")).toBeInTheDocument()
    })
  })
})
