import React from "react";
import './Hero.css';
import forwardArrow from '../../assets/forward-arrow.png';
import heroImg from '../../assets/hero.png';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h1>Career-Ready IT Training In Nepal</h1>
        <p>
          Gain job-ready skills with our IT courses in Nepal. Elevate your
          career prospects today!
        </p>
        <button>
          <span>
            Find The Course <img src={forwardArrow} alt="arrow" />
          </span>
        </button>
      </div>
      <div className="hero-right">
        <img src={heroImg} alt="hero img" />
      </div>
    </div>
  );
};

export default Hero;
