import React from "react";
import { render, screen } from "@testing-library/react"
import ProtectedShow from "./ProtectedShow";
import mockMedicationsData from '../MockMedications'
import {BrowserRouter} from 'react-router-dom'

describe("<ProtectedShow />", () => {
    it("renders without crashing", () => {
        render(<ProtectedShow />)
        const title = screen.getByText(/Current List of Medications:/i)
        expect(title).toBeInTheDocument
    })
    
    it("renders the Card Header", () => {
        render(
            <BrowserRouter>
            <ProtectedShow mockMedicationsDataPass={mockMedicationsData}/>
            </BrowserRouter>
        )
        const cardheader = screen.getAllByRole("heading")
        expect(cardheader).toBeiInTheDocument
        screen.debug(cardheader)
    })
})