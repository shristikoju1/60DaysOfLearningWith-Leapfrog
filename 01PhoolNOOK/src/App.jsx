import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Products from './Components/Products/Products' 
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Gallery from './Components/Gallery/Gallery'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'

const App = () => {

  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title subtitle = 'Our PRODUCT' title = 'What we offer'/>
        <Products/>
        <About setPlayState={setPlayState}/>
        <Title subtitle = 'Gallery' title = 'Flower Photos'/>
        <Gallery/>
        <Title subtitle = 'TESTIMONIALS' title = 'What Customers Say'/>
        <Testimonials/>
        <Title subtitle = 'Contact Us' title = 'Get In Touch'/>
        <Contact/>
        <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
      
    </div>
  )
}

export default App
