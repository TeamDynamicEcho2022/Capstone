import React from "react"
import { render, screen } from "@testing-library/react"
import MedicationNew from "./MedicationNew"
import { BrowserRouter } from 'react-router-dom'


describe("<MedicationNew />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(
      <BrowserRouter>
        <MedicationNew />
      </BrowserRouter>
    )
    expect(screen.getByText("Add a New Medication Below:")).toBeInTheDocument()
    })
})