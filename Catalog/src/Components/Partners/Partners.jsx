import React, { useState } from 'react'
import './Partners.scss'
import arrowBackward from '../../assets/arrow-backward.svg'
import arrowForward from '../../assets/arrow-forward.svg'
import layers from '../../assets/Layers.svg'
import quotient from '../../assets/Quotient.svg'
import sysphus from '../../assets/Sysphus.svg'
import hourglass from '../../assets/Hourglass.svg'
import circooles from '../../assets/Circooles.svg'

const Partners = () => {
  const [images, setImages] = useState([
    layers,
    quotient,
    sysphus,
    hourglass,
    circooles
  ]);

  const handleBackward = () => {
    const newImages = images.slice(1).concat(images[0]);
    setImages(newImages);
  };

  const handleForward = () => {
    const newImages = images.slice(-1).concat(images.slice(0, -1));
    setImages(newImages);
  };

  return (
    <div className='partners'>
      <img src={arrowBackward} alt="back" onClick={handleBackward} />
      {images.map((image, index) => (
        <img key={index} src={image} alt={`partner${index + 1}`} />
      ))}
      <img src={arrowForward} alt="forward" onClick={handleForward} />
    </div>
  )
}

export default Partners
