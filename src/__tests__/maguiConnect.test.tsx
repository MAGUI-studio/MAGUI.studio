import * as React from "react"

import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { MaguiConnect } from "@/src/components/sections/maguiConnect"

describe("MaguiConnect", () => {
  it("renders the MAGUI Connect section content", async () => {
    render(await MaguiConnect())

    expect(screen.getByText("Quero meu Connect")).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /Quero meu Connect/i })).toBeDisabled()
    expect(screen.getByText("Em breve")).toBeInTheDocument()
    expect(screen.getByText("Quero meu Forever")).toBeInTheDocument()
    expect(screen.getByText("R$ 497")).toBeInTheDocument()
    expect(screen.getByText("R$ 997")).toBeInTheDocument()
  })
})
