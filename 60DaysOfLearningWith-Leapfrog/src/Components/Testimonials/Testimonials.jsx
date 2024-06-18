import React, {useRef} from 'react'
import './testimonials.css'
import nextIcon from '../../assets/next-icon-removebg-preview.png'
import backIcon from '../../assets/back-icon-bg-remove.png'
import user1 from '../../assets/user1.jpg'
import user2 from '../../assets/user2.jpg'
import user3 from '../../assets/user3.webp'
import user4 from '../../assets/user4.jpg'

const Testimonials = () => {

  const slider = useRef();
  let tx = 0;

const slideForward = () => {

  if(tx > -50){
    tx -=25;
  }
  slider.current.style.transform = `translateX(${tx}%)`

}

const slideBackward = () => {
    if(tx < 0){
    tx +=25;
  }
  slider.current.style.transform = `translateX(${tx}%)`
}


  return (
    <div className='testimonials'>
        <img src={nextIcon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={backIcon} alt="" className='back-btn' onClick={slideBackward} />
        <div className="slider">
          <ul ref ={slider} >
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user4} alt="" />
                  <div>
                  <h3>William Jackson</h3>
                    <span>Hattiban, Godawari</span>
                  </div>
                </div>
                <p>"फूलNOOK is an absolute gem! Their flower arrangements are masterpieces crafted with love and attention to detail. Every visit greets me with stunning blooms and friendly smiles. Whether for a special occasion or to brighten someone's day, फूलNOOK always exceeds my expectations. Their dedication to quality and customer satisfaction shines through in every arrangement. I wouldn't trust anyone else with my floral needs!"</p>
              </div>
            </li>

            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user1} alt="" />
                  <div>
                   
                    <h3>Jasmine Basnet</h3>
                    <span>Baneswor, Kathmandu</span>
                  </div>
                </div>
                <p>"I ordered a bouquet from फूलNOOK for my anniversary, and it was absolutely stunning! The flowers were fresh, vibrant, and arranged beautifully. My wife was over the moon with the surprise. The staff was incredibly helpful and ensured that my special request was met with perfection. I highly recommend फूलNOOK for any occasion!"</p>
              </div>
            </li>

            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user2} alt="" />
                  <div>
                  <h3>Alex Handerson</h3>
                    <span>Birtamode, Jhapa</span>
                  </div>
                </div>
                <p>"फूलNOOK never disappoints! I've been a loyal customer for years, and every arrangement I've purchased has been gorgeous and long-lasting. Their attention to detail and customer service are top-notch. Whether it's a last-minute gift or a planned event, फूलNOOK is always my go-to for flowers."

</p>
              </div>
            </li>

            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user3} alt="" />
                  <div>
                
                    <h3>Mahima Thapa</h3>
                    <span>Thimi, Bhaktapur</span>
                  </div>
                </div>
                <p>"I recently used फूलNOOK for my sister's wedding, and the floral arrangements were beyond our expectations. The colors, variety, and creativity in the designs were breathtaking. The team worked tirelessly to bring our vision to life and added a magical touch to our celebration. Thank you, फूलNOOK, for making our day so special!"</p>
              </div>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Testimonials