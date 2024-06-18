import React from "react";
import "./Resources.scss";
import tool1 from "../../assets/Tool1.svg";
import tool2 from "../../assets/Tool2.svg";
import tool3 from "../../assets/Tool3.svg";
import blueArrow from "../../assets/blue-arrow.svg";
import Title from "../Title/Title";

const ResourceBox = ({ title, text, imgSrc, toolText, toolImgClass }) => (
  <div className="resources-box">
    <div className="tool">
      <div className={toolImgClass}>
        <img src={imgSrc} alt="Tool" />
      </div>
      <p className="tool-text">{toolText}</p>
    </div>
    <h3>{title}</h3>
    <p className="paragraph">{text}</p>
    <span>
      Learn more <img src={blueArrow} alt="" />
    </span>
  </div>
);

const Resources = () => {
  return (
    <div className="resources" id="resources">
      <div className="heading">
        {/* <Title
          title="Latest resources"
          paragraph="The latest resources includes Transparency Toolkit, Evidence, Best Practices"
        /> */}

        <h1>Latest resources</h1>
        <p>The latest resources includes Transparency Toolkit, Evidence, Best Practices</p>
      </div>

      <div className="resources-container">
        <ResourceBox
          title="Defence Elvis"
          text="It allows creating networks of public spending on goods services used in defense in 28 EU countries..."
          imgSrc={tool1}
          toolText="Tool"
          toolImgClass="tool1-img"
        />

        <ResourceBox
          title="Defence Elvis"
          text="It allows creating networks of public spending on goods services used in defense in 28 EU countries..."
          imgSrc={tool2}
          toolText="Tool"
          toolImgClass="tool2-img"
        />

        <ResourceBox
          title="Defence Elvis"
          text="It allows creating networks of public spending on goods services used in defense in 28 EU countries..."
          imgSrc={tool3}
          toolText="Tool"
          toolImgClass="tool3-img"
        />
      </div>

      <button className="resources-btn">View all resources</button>
      
    </div>
  );
};

export default Resources;
