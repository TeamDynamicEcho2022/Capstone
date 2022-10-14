import React from "react";
import { render, screen } from "@testing-library/react"
import NotFound from "./NotFound";


describe("<NotFound />", () => {
    it("renders without crashing", () => {
        render(<NotFound />)
        const element = screen.getByText(/Sorry, we couldn't find what you were looking for./i)
        expect(element).toBeInTheDocument()
    })
})