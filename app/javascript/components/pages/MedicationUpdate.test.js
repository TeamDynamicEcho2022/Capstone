import React from 'react'
import { screen, render } from '@testing-library/react'
import MedicationUpdate from './MedicationUpdate'
import { BrowserRouter } from 'react-router-dom'


describe("<medEdit/>", () => {
    it(" has multiple input fields on the form", () => {
        render(
            <BrowserRouter>
                <MedicationUpdate/>
            </BrowserRouter>
        )
        const textbox = screen.getAllByRole("textbox")
        screen.debug(textbox)
        expect(textbox[0]).toBeEnabled()
        expect(textbox.length).toBeGreaterThan(0)
    })
})