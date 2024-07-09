import React from 'react';
import './Cards.css';
import bossIcon from '../../assets/boss-icon.png';

const Cards = () => {
  return (
    <div className='cards'>
      <div className="card-box">
        <div className="card-left">
          <img src={bossIcon} alt="boss icon" />
        </div>
        <div className="card-right">
          <h3>Get Hired</h3>
          <p>Validate Your Skills, Open Doors: Earn Industry-Recognized Certificates!</p>
        </div>
      </div>
      <div className="card-box">
        <div className="card-left">
          <img src={bossIcon} alt="boss icon" />
        </div>
        <div className="card-right">
          <h3>Get Hired</h3>
          <p>Validate Your Skills, Open Doors: Earn Industry-Recognized Certificates!</p>
        </div>
      </div>
      <div className="card-box">
        <div className="card-left">
          <img src={bossIcon} alt="boss icon" />
        </div>
        <div className="card-right">
          <h3>Get Hired</h3>
          <p>Validate Your Skills, Open Doors: Earn Industry-Recognized Certificates!</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
