import React from 'react'
import './Hero.css'
import arrow from '../../assets/arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>Blossoming Beauty, Delivered with Love</h1>
        <p>At फूलNOOK, we specialize in crafting stunning floral arrangements that bring joy and elegance to every occasion. Our passion for flowers ensures each bouquet is handpicked and designed with care, delivering beauty and happiness right to your door.</p>
        <button className='btn'>Explore More <img src= {arrow} alt= "" /></button>
      </div>
    </div>

  )
}

export default Hero