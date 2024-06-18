import React from 'react'
import './Gallery.css'
import gallery_1 from '../../assets/gallery1.jpg' 
import gallery_2 from '../../assets/gallery2.avif' 
import gallery_3 from '../../assets/gallery3.jpg' 
import gallery_4 from '../../assets/gallery4.png' 
import whiteArrow from '../../assets/white-arrow.png'

const Gallery = () => {
  return (
    <div className='galleries'>
        <div className='gallery'>
            <img src={gallery_1} alt="" />
            <img src={gallery_2} alt="" />
            <img src={gallery_3} alt="" />
            <img src={gallery_4} alt="" />
        </div>
        <button className='btn dark-btn'>See more here <img src={whiteArrow} alt="" /></button>


    </div>
  )
}

export default Gallery