import React from "react"
import {screen, render} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Navigation from "./Navigation"
import {BrowserRouter} from "react-router-dom"

describe("<Navigation />", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div")
        render(
            <BrowserRouter>
             <Navigation />
            </BrowserRouter>,
            div
        )
    })
    it("has clickable links", ( ) => {
        render(
            <BrowserRouter>
              <Navigation />
            </BrowserRouter>
        )
        userEvent.click(screen.getByText("Home"))
        expect(screen.getByText("Home")).toBeInTheDocument()
        userEvent.click(screen.getByText("About Us"))
        expect(screen.getByText("About Us")).toBeInTheDocument()
        
    })
})








