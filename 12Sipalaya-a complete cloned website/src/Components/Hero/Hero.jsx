import React from "react";
import "./Hero.css";
import forwardArrow from "../../assets/forward-arrow.png";
import heroImg from "../../assets/hero.png";
import globeImg from "../../assets/globe.png";
import hatImg from "../../assets/hat.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-left">
          <h1>Career-Ready IT Training In Nepal</h1>
          <p>
            Gain job-ready skills with our IT courses in Nepal. Elevate your
            career prospects today!
          </p>
          <div className="hero-left-lower">
            <button>
              <span>
                Find The Course <img src={forwardArrow} alt="arrow" />
              </span>
            </button>
            <div className="globe">
              <img src={globeImg} alt="" />
            </div>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-img">
            <img src={heroImg} alt="hero img" />
          </div>
          <div className="hat">
            <img src={hatImg} alt="hat" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
