import React, { useState, useEffect } from "react";
import "./News.scss";
import NewsBox from "../Newsbox/Newsbox";
import news1 from "../../assets/news1.jpg";
import news2 from "../../assets/news2.png";
import news3 from "../../assets/news3.png";
import news4 from "../../assets/news4.png";
import news5 from "../../assets/news5.png";
import news6 from "../../assets/news6.png";
import blueArrow from "../../assets/blue-arrow.svg";
import Title from "../Title/Title";

const News = () => {
  const initialNewsData = [
    {
      image: news1,
      altText: "news1",
      title: "Statement from the Catalogue Coalition...",
      content:
        "In view of Russia’s military action against the Ukrainian people, being concerned about ensuring that European funds...",
    },
    {
      image: news2,
      altText: "news2",
      title: "Statement from the Catalogue Coalition...",
      content:
        "In view of Russia’s military action against the Ukrainian people, being concerned about ensuring that European funds...",
    },
    {
      image: news3,
      altText: "news3",
      title: "Statement from the Catalogue Coalition...",
      content:
        "In view of Russia’s military action against the Ukrainian people, being concerned about ensuring that European funds...",
    },
    {
      image: news4,
      altText: "news4",
      title: "Statement from the Catalogue Coalition...",
      content:
        "In view of Russia’s military action against the Ukrainian people, being concerned about ensuring that European funds...",
    },
    {
      image: news5,
      altText: "news5",
      title: "Statement from the Catalogue Coalition...",
      content:
        "In view of Russia’s military action against the Ukrainian people, being concerned about ensuring that European funds...",
    },
    {
      image: news6,
      altText: "news6",
      title: "Statement from the Catalogue Coalition...",
      content:
        "In view of Russia’s military action against the Ukrainian people, being concerned about ensuring that European funds...",
    },
  ];

  const [newsData, setNewsData] = useState(initialNewsData);
  const [isViewAll, setIsViewAll] = useState(false);
  const URL =
    "https://raw.githubusercontent.com/younginnovations/internship-challenges/master/front-end/news_list.json";

  useEffect(() => {
    if (isViewAll) {
      fetch(URL)
        .then((response) => response.json())
        .then((data) => setNewsData([...initialNewsData, ...data.news]));
    } else {
      setNewsData(initialNewsData);
    }
  }, [isViewAll]);

  const handleViewAllNewsClick = () => {
    setIsViewAll(!isViewAll);
  };

  return (
    <div className="news" id="news">
      <div className="heading">
        <Title
          title="News"
          paragraph="We aim to stop public funds siphoning off and we have a plan that will help. We are working at the national and EU levels to advance."
        />
      </div>
      <div className="news-container">
        {newsData.map((newsItem, index) => (
          <NewsBox
            key={index}
            imgSrc={newsItem.image}
            altText={newsItem.altText}
            title={newsItem.title}
            paragraph={newsItem.content}
          />
        ))}
      </div>
      <button className="news-btn" onClick={handleViewAllNewsClick}>
        {isViewAll ? "Hide news" : "View all news"}
      </button>
    </div>
  );
};

export default News;
