import React from "react";
import "./Hero.scss";
import forwardArrow from "../../assets/arrow_forward.svg";
import closeImg from "../../assets/close.svg";

const Hero = ({ searchVisible, toggleSearchBar }) => {
  return (
    <div className="hero container-div" id="hero">
      <div className="hero-text">
        <div className={`search-bar ${searchVisible ? "" : "hidden"}`}>
          <input type="text" placeholder="Search" className="search-input" />
          <div className="close" onClick={toggleSearchBar}>
            <img src={closeImg} alt="close" />
          </div>
        </div>

        <h1>Beautiful analytics to grow smarter</h1>
        <p>
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
        <button className="btn">
          Why catalog? <img src={forwardArrow} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Hero;
