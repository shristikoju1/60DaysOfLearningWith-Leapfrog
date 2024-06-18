import React from 'react'
import './Products.css'
import main from '../../assets/main.jpg'
import occasion from '../../assets/occasion.png'
import season from '../../assets/season.webp'
import mainIcon from '../../assets/main-flower.png'
import occasionIcon from '../../assets/occasion-flower.png'
import seasonIcon from '../../assets/season-flower.png'




const Products = () => {
  return (
    <div className='products'>
        <div className="product">
            <img src={main} alt="" />
            <div className="caption">
                <img src={mainIcon} alt="" />
                <p>Main Category</p>
            </div>
        </div>
        <div className="product">
            <img src={occasion} alt="" />
            <div className="caption">
                <img src={occasionIcon} alt="" />
                <p>Occasional Flowers</p>
            </div>
        </div>
        <div className="product">
            <img src={season} alt="" />
            <div className="caption">
                <img src={seasonIcon} alt="" />
                <p>Seasonal Flowers</p>
            </div>
        </div>

    </div>
  )
}

export default Products