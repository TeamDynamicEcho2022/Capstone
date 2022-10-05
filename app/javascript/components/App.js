import React from 'react'
import PropTypes from 'prop-types'
import AboutUs from './pages/AboutUs'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<AboutUs/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    );
  }
}

export default App
