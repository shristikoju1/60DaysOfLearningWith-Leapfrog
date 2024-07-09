import React, { useRef } from 'react';
import './Testimonials.css';
import user1 from '../../assets/user1.png'; 
import user2 from '../../assets/user2.png';
import user3 from '../../assets/user3.png';
import user4 from '../../assets/user4.png';

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -66.66) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className='Testimonials'>
      <div className='testimonials-title'>
        <h2>Testimonials</h2>
        <p>Learning communicate to global world and build a bright future and career development, increase your skill with our histudy.</p>
      </div>
      <div className='testimonials-content'>
        <div className='navigation'>
          <div className='back-btn' onClick={slideBackward}>
            <span className="material-icons-round">chevron_left</span>
          </div>
        </div>
        <div className='slider'>
          <ul ref={slider}>
            <li>
              <div className='slide'>
                <div className='user-info'>
                  <img src={user4} alt='' />
                  <div>
                    <h3>Anish Bista</h3>
                    <span>Web Development</span>
                  </div>
                </div>
                <p>"I took the Web Development course at Sipalaya InfoTech, and it was a game-changer for my career. The instructors were knowledgeable and provided hands-on experience with the latest technologies. I landed my first job as a frontend developer within two months of completing the course!"</p>
                <div className="rating">
                <span className="material-icons-round">star</span>
                <span className="material-icons-round">star</span>
                <span className="material-icons-round">star</span>
                <span className="material-icons-round">star</span>
                <span className="material-icons-round">star_outline</span>
              </div>
              </div>
            </li>
            <li>
              <div className='slide'>
                <div className='user-info'>
                  <img src={user1} alt='' />
                  <div>
                    <h3>Ravi Kumar</h3>
                    <span>Data Science</span>
                  </div>
                </div>
                <p>"The Data Science program at Sipalaya Infotech exceeded my expectations. The curriculum was comprehensive, covering everything from Python to machine learning. The real-world projects and personalized support helped me build a strong portfolio, and I now work as a Data Analyst at a leading firm."</p>
                <div className="rating">
                <span className="material-icons-round">star</span>
                <span className="material-icons-round">star</span>
                <span className="material-icons-round">star</span>
                <span className="material-icons-round">star</span>
                <span className="material-icons-round">star_outline</span>
              </div>
              </div>
            </li>
            <li>
              <div className='slide'>
                <div className='user-info'>
                  <img src={user2} alt='' />
                  <div>
                    <h3>Alex Handerson</h3>
                    <span>CyberSecurity</span>
                  </div>
                </div>
                <p>"As someone looking to transition into cybersecurity, Sipalaya Infotech provided the perfect training. The course content was up-to-date and relevant, and the practical labs were incredibly beneficial. I've gained the confidence and skills needed to protect digital assets effectively."</p>
                <div className="rating">
                <span className="material-icons-round">star</span>
                <span className="material-icons-round">star</span>
                <span className="material-icons-round">star</span>
                <span className="material-icons-round">star</span>
                <span className="material-icons-round">star_outline</span>
              </div>
              </div>
            </li>
            <li>
              <div className='slide'>
                <div className='user-info'>
                  <img src={user3} alt='' />
                  <div>
                    <h3>Suresh Thapa</h3>
                    <span>Cloud Computing</span>
                  </div>
                </div>
                <p>"Sipalaya InfoTech's Cloud Computing course was a fantastic learning experience. The instructors were industry experts, and the course offered deep insights into cloud architecture and services. After completing the course, I received multiple job offers and now work as a Cloud Solutions Architect."</p>
                <div className="rating">
                <span className="material-icons-round">star</span>
                <span className="material-icons-round">star</span>
                <span className="material-icons-round">star</span>
                <span className="material-icons-round">star</span>
                <span className="material-icons-round">star_outline</span>
              </div>
              </div>
            </li>
          </ul>
        </div>
        <div className='navigation'>
          <div className='next-btn' onClick={slideForward}>
            <span className="material-icons-round">chevron_right</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
