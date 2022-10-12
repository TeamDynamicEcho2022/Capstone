import React, { useState, useEffect } from 'react'
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
  const [ medications, setMedications ] = useState([])

  useEffect(() => {
    readMedication()
  }, [])

  const readMedication = () => {
    if (props.logged_in === true) {
      fetch(`/users/${props.current_user.id}/medications`)
      .then((response) => response.json())
      .then((payload) => setMedications(payload))
      .catch((error) => console.log(error))
    }
  }

  const createMedication = (medication) => {
    fetch(`/users/${props.current_user.id}/medications`, {
      body: JSON.stringify(medication),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then((response) => response.json())
    .then((payload) => readMedication())
    .catch((errors) => console.log("Creating medication errors: ", errors))
    console.log(`Medication has been created: ${medication}`)
  }

  const editMedication = (medication, id) => {
    fetch(`/users/${props.current_user.id}/medications/${id}`, {
      body: JSON.stringify(medication),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
    .then((response) => response.json())
    .then((payload) => readMedication())
    .catch((errors) => console.log("Update errors: ", errors))
  }

  const deleteMedication = (medication, id) => {
    fetch(`/users/${props.current_user.id}/medications/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
    .then((response) => response.json())
    .then((payload) => readMedication())
    .catch((errors) => console.log("Deleting errors: ", errors))
  }


  

    return (
      <BrowserRouter>
        <Header {...props} medications={medications}/>
        <Routes>
          <Route path= '/' element={<Home{...props}/>}/>
          <Route path= '/about' element={<AboutUs/>}/>
          <Route path= '/*' element={<NotFound/>}/>
          <Route path= '/medicationnew' element={<MedicationNew {...props} createMedication={createMedication}/>}/>
          <Route path= '/:userid/medications/' element={<ProtectedShow {...props} medications={medications}/> }/>
          <Route path= '/:userid/medications/:id' element={<ProtectedShowMedication {...props} medications={medications} deleteMedication={deleteMedication}/>}/>
          <Route path= '/:userid/medicationupdate/:id' element={<MedicationUpdate medications={medications} editMedication={editMedication}/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    );
  }


export default App
