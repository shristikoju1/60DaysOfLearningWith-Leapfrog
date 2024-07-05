import React from 'react';
import './Newsbox.scss';
import blueArrow from "../../assets/blue-arrow.svg";

const Newsbox = ({ imgSrc, altText, title, paragraph }) => {
  const truncateText = (text, limit) => {
    return text.length > limit ? text.substring(0, limit) + "..." : text;
  };

  return (
    <div className="news-box">
      <div className="news-box-img">
        <img src={imgSrc} alt={altText} />
      </div>
      <div className='news-box-content'>
        <h3>{truncateText(title, 37)}</h3>
        <p>{truncateText(paragraph, 124)}</p>
        <span>
          Learn more <img src={blueArrow} alt="arrow" />
        </span>
      </div>
    </div>
  );
};

export default Newsbox;