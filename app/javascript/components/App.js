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


const App = (props) => {
  

    return (
      <BrowserRouter>
        <Header {...props} MockMedicationsPass={mockMedicationsData}/>
        <Routes>
          <Route path='/' element={<Home{...props}/>}/>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path= '/*' element={<NotFound/>}/>
          <Route path= '/:userid/medications/' element={<ProtectedShow {...props} MockMedicationsPass={mockMedicationsData}/> }/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    );
  }


export default App
