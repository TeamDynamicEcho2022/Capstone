import React from "react"
import {screen, render} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Home from "./Home"

describe("<Home />", () => {
    it("renders without crushing", () => {
        render(<Home />)
        const element = screen.getByText(/Welcome to simPill/i)
        expect(element).toBeInTheDocument()
    })
    
})