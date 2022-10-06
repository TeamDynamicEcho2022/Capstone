import React from "react";
import { render, screen } from "@testing-library/react"
import NotFound from "./NotFound";


describe("<NotFound />", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div")
        render(<NotFound />, div)
        const header = screen.getByText("NotFound")
        expect(header).toBeInTheDocument()
    })
})