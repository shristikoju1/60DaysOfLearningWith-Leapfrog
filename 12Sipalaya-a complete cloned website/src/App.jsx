import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Cards from './Components/Cards/Cards'
import Sipalaya from './Components/Whysipalaya/Sipalaya'
import Register from './Components/RegisterBox/Register'
import Courses from './Components/Courses/Courses'
import Students from './Components/SelectedStudents/Students'
import Mission from './Components/OurMission/Mission'
import Testimonials from './Components/Testimonials/Testimonials'
import Footer from './Components/Footer/Footer'


function App() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <Cards/>
    <Sipalaya/>
    <Register/>
    <Courses/>
    <Students/>
    <Mission/>
    <Testimonials/>
    <Footer/>
    </>
  )
}

export default App
