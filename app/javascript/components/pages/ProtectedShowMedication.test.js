import React from 'react'
import { render, screen } from "@testing-library/react"
import { MemoryRouter, Route, Routes } from "react-router-dom"
import ProtectedShowMedication from "./ProtectedShowMedication"
import mockMedicationsData from "../MockMedications";


const renderComponent = () => {
  render(
    <MemoryRouter initialEntries={["/1/medications/1"]}>
      <Routes>
        <Route path='/:userid/medications/:id' element={<ProtectedShowMedication MockMedicationsPass={mockMedicationsData} />}/>
      </Routes>
    </MemoryRouter>
  )
} 
describe('ProtectedShowMedication', () => { 
    it("renders the drug category: HMG-CoA reductase inhibitor", ()=> {
      renderComponent()
      expect(screen.getByText(`Drug Category: ${mockMedicationsData[0].drug_cat}`)).toBeInTheDocument()

    })
 })