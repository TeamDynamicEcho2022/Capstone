import React from "react";
import { render, screen } from "@testing-library/react"
import ProtectedShow from "./ProtectedShow";
import mockMedicationsData from '../MockMedications'
import {MemoryRouter, Route, Routes} from 'react-router-dom'

describe("<ProtectedShow />", () => {
    it("renders without crashing", () => {
        render(
            <MemoryRouter initialEntries={["/1/medications"]}>
                <Routes>
                    <Route path='/:userid/medications' element={<ProtectedShow medications={mockMedicationsData} />}/>
                </Routes>
            </MemoryRouter>
            )
        const title = screen.getByText(/Current List of Medications:/i)
        expect(title).toBeInTheDocument
    })
    
    it("renders the Card Header", () => {
        render(
            <MemoryRouter initialEntries={["/1/medications"]}>
                <Routes>
                    <Route path='/:userid/medications' element={<ProtectedShow medications={mockMedicationsData} />}/>
                </Routes>
            </MemoryRouter>
        )
        const cardheader = screen.getAllByRole("heading")
        expect(cardheader).toBeiInTheDocument
        screen.debug(cardheader)
    })
})