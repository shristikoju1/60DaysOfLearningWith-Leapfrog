import React from "react";
import "./About.scss";
import member1 from "../../assets/member1.svg";
import member2 from "../../assets/member2.svg";
import member3 from "../../assets/member3.svg";
import member4 from "../../assets/member4.svg";
import blueArrow from "../../assets/blue-arrow.svg";

const About = () => {
  return (
    <div className="about" id='about'>
      <div className="about-text">
        <h3>Who are we</h3>
        <p>
          We are a collaboration of Non Govt. and professionals working to
          ensure that government spending is done fairly, openly, efficiently,
          and creates the best value for money and best outcomes for Europe. We
          are working at the national and EU levels to advance the principles of
          openness in spending of funds, procurement, and company ownership
          within the EU.
        </p>
        <span>
          See more <img src={blueArrow} alt="arrow" />
        </span>
      </div>
      <div className="about-gallery">
        <div className="column col1">
          <div className="photo-box">
            <div className="photo">
              <img src={member1} alt="arrow" />
            </div>

            <h3>Adriana Homolova</h3>
          </div>
          <div className="photo-box">
            <div className="photo">
              <img src={member2} alt="arrow" />
            </div>
            <h3>Karolis Granickas</h3>
          </div>
        </div>

        <div className="column col2">
          <div className="photo-box">
            <div className="photo">
              <img src={member3} alt="arrow" />
            </div>
            <h3>Sandor Lederer</h3>
          </div>
          <div className="photo-box">
            <div className="photo">
              <img src={member4} alt="arrow" />
            </div>
            <h3>Emma Olivia</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
