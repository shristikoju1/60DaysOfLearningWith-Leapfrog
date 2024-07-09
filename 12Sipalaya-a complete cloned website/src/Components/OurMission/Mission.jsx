import React from 'react';
import './Mission.css';
import missionImg from '../../assets/mission.jpg';

const Mission = () => {
  const images = Array(17).fill(missionImg); // Generate an array with 17 images

  return (
    <div className='mission'>
      <div className="mission-title">
        <h4>WE ARE ON A MISSION, JOIN US</h4>
      </div>
      <div className="mission-images">
        {images.map((img, index) => (
          <div className="image" key={index}>
            <img src={img} alt={`mission-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mission;
