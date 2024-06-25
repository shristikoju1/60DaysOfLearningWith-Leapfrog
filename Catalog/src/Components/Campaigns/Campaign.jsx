import React from "react";
import "./Campaign.scss";
import img1 from "../../assets/img1.svg";
import img2 from "../../assets/img2.svg";
import img3 from "../../assets/img3.svg";
import blueArrow from "../../assets/blue-arrow.svg";
import Title from "../Title/Title";

const Campaign = () => {
  return (
    <div className="campaigns">
      <Title
        title="Campaigns"
        paragraph="We aim to stop public funds siphoning off and we have a plan that will help. We are working at the national and EU levels to advance."
      />
      <div className="campaign">
        <div className="campaign-box">
          <div className="campaign-img">
            <img src={img1} alt="" />
          </div>
          <h3>Open Data Directive</h3>
          <p>
            In view of Russia’s military action against the Ukrainian people,
            being concerned about ensuring that European funds In view of
            Russia’s military action against the Ukrainian people.
          </p>

          <span>
            Learn more <img src={blueArrow} alt="" />
          </span>
        </div>

        <div className="campaign-box">
          <div className="campaign-img">
            <img src={img2} alt="" />
          </div>
          <h3>Beneficial Ownership</h3>
          <p>
            In view of Russia’s military action against the Ukrainian people,
            being concerned about ensuring that European funds In view of
            Russia’s military action against the Ukrainian people,{" "}
          </p>
          <span>
            Learn more <img src={blueArrow} alt="" />
          </span>
        </div>

        <div className="campaign-box">
          <div className="campaign-img">
            <img src={img3} alt="" />
          </div>
          <h3>EU Recovery Transparency</h3>
          <p>
            In view of Russia’s military action against the Ukrainian people,
            being concerned about ensuring that European funds In view of
            Russia’s military action against the Ukrainian people,{" "}
          </p>
          <span>
            Learn more <img src={blueArrow} alt="" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Campaign;
