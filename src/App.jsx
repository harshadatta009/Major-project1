import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./components/Home/Home"
import ContactUs from './components/ContactUS/ContactUs'
import CourtServices from './components/CourtServices/CourtServices'
import BookAppointment from './components/BookAppointment/BookAppointment'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<ContactUs/>}/>
      <Route path="/courtservices" element={<CourtServices/>}/>
      <Route path="/appointment" element={<BookAppointment/>}/>
      
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App