import React from "react";
import "./Sipalaya.css";
import skillImg from "../../assets/skillimage.png";

const Sipalaya = () => {
  return (
    <div className="sipalaya">
      <div className="title">
        <h1>Why Choose Sipalaya ?</h1>
        <p>
          Seize the future: Secure your career with Sipalaya's cutting-edge
          resources and transformative learning experiences.
        </p>
      </div>

      <div className="content">
        <div className="content-image">
          <img src={skillImg} alt="" />
        </div>
        <div className="mini-content">
          <div className="mini-content-one">
            <div className="numbers">
              <div className="box"></div>
              <div className="text">
                <h1>5K+</h1>
                <span>Students graduated</span>
              </div>
            </div>

            <div className="numbers">
              <div className="box"></div>
              <div className="text">
                <h1>3L-10L</h1>
                <span>Salary Range</span>
              </div>
            </div>

            <div className="numbers">
              <div className="box"></div>
              <div className="text">
                <h1>50+</h1>
                <span>Hiring Partners</span>
              </div>
            </div>
          </div>

          <div className="mini-content-two">
            <div className="numbers">
              <div className="box"></div>
              <div className="text">
                <h1>30+</h1>
                <span>Industry Mentors</span>
              </div>
            </div>
            <div className="numbers">
              <div className="box"></div>
              <div className="text">
                <h1>1:1</h1>
                <span>Career Support</span>
              </div>
            </div>
            <div className="numbers">
              <div className="box"></div>
              <div className="text">
                <h1>500+</h1>
                <span>Interview Coding Questions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sipalaya;
