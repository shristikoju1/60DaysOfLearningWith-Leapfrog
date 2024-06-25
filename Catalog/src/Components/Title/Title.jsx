import React from 'react'
import './Title.css'

const Title = ({title, paragraph}) => {
  return (
    <div className='title'>
        <h2>{title}</h2>
        <p>{paragraph}</p>
    </div>
  )
}

export default Title