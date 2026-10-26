import * as React from "react"

import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { Products } from "@/src/components/sections/products"

describe("Products", () => {
  it("renders the Products section content", async () => {
    render(await Products())

    expect(screen.getByText("Quero meu Forever")).toBeInTheDocument()
    expect(screen.getByText("Quero meu Flow")).toBeInTheDocument()
    expect(screen.getByText("forever.magui.studio")).toBeInTheDocument()
    expect(screen.getByText("flow.magui.studio")).toBeInTheDocument()
  })
})
