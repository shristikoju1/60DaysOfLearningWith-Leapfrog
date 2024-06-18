import React from 'react'
import './About.css'
import aboutImg from '../../assets/about-img.jpeg'
import playIcon from '../../assets/play-button.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={aboutImg} alt="" className='about-img'/>
            <img src={playIcon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className="about-right">
            <h3>ABOUT फूलNOOK</h3>
            <h2>Fresh Flowers, Fresh Smiles</h2>
            <p>At फूलNOOK, we believe that every petal tells a story. Our commitment to excellence shines through in every bouquet we create, combining artistry with nature's finest blooms. Whether you’re celebrating a special occasion, expressing love, or simply brightening someone's day, our carefully curated floral arrangements are designed to make every moment unforgettable.</p>
            <p>Our team of floral artisans is dedicated to crafting floral dreams with precision and passion. Each arrangement is a masterpiece, thoughtfully designed to convey your sentiments perfectly. We source only the freshest flowers to ensure that every bouquet bursts with vibrant colors and intoxicating fragrances. From classic roses to exotic orchids, we offer a diverse selection that caters to all tastes and preferences, making your floral experience truly unique.</p>
            <p>At फूलNOOK, we understand the joy that flowers bring. That’s why we’re committed to delivering more than just flowers—we deliver smiles. Our seamless delivery service ensures that your floral gifts arrive fresh and on time, spreading happiness to your loved ones’ doorsteps. Trust us to be your local floral artisans, brightening days and creating lasting memories with every petal we arrange. Join us in celebrating life's beautiful moments with the elegance and charm of our exquisite floral creations.</p>
        </div>
    </div>
  )
}

export default About