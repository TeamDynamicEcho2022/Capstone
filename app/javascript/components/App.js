import React from 'react'
import PropTypes from 'prop-types'
import AboutUs from './pages/AboutUs'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './pages/NotFound'
import ProtectedShow from './pages/ProtectedShow'
import mockMedicationsData from './MockMedications'
import MedicationNew from './pages/MedicationNew'
import ProtectedShowMedication from './pages/ProtectedShowMedication'
import MedicationUpdate from './pages/MedicationUpdate'

const App = (props) => {

  const createMedication = (medication) => {
    console.log(medication)
  }

  const editMedication = (medication, id) => {
    console.log("medication:", medication)
    console.log("id:", id)
  }

  

    return (
      <BrowserRouter>
        <Header {...props} MockMedicationsPass={mockMedicationsData}/>
        <Routes>
          <Route path= '/' element={<Home{...props}/>}/>
          <Route path= '/about' element={<AboutUs/>}/>
          <Route path= '/*' element={<NotFound/>}/>
          <Route path= '/medicationnew' element={<MedicationNew createMedication={createMedication}/>}/>
          <Route path= '/:userid/medications/' element={<ProtectedShow {...props} MockMedicationsPass={mockMedicationsData}/> }/>
          <Route path= '/:userid/medications/:id' element={<ProtectedShowMedication {...props} MockMedicationsPass={mockMedicationsData} />}/>
          <Route path= '/:userid/medicationupdate/:id' element={<MedicationUpdate MockMedicationsPass={mockMedicationsData} editMedication={editMedication}/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    );
  }


export default App
