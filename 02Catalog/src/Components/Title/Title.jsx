import React from 'react'
import './Title.scss'

const Title = ({title, paragraph}) => {
  return (
    <div className='title'>
        <h2>{title}</h2>
        <p>{paragraph}</p>
    </div>
  )
}

export default Title