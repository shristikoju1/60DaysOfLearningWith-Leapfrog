import React from "react";
import "./Courses.css";
import course1 from "../../assets/course1.png";

const Courses = () => {
  // Sample data array
  const coursesData = [
    {
      id: 1,
      title: "App Development with Flutter | 2.5 Months",
      by: "Sipalaya Infotech",
      previousPrice: "Rs. 19,900",
      presentPrice: "Rs. 9,000",
      bookedPercentage: "10%",
    },
    {
      id: 2,
      title: "App Development with Flutter | 2.5 Months",
      by: "Sipalaya Infotech",
      previousPrice: "Rs. 19,900",
      presentPrice: "Rs. 9,000",
      bookedPercentage: "10%",
    },
    {
      id: 3,
      title: "App Development with Flutter | 2.5 Months",
      by: "Sipalaya Infotech",
      previousPrice: "Rs. 19,900",
      presentPrice: "Rs. 9,000",
      bookedPercentage: "10%",
    },
    {
      id: 4,
      title: "App Development with Flutter | 2.5 Months",
      by: "Sipalaya Infotech",
      previousPrice: "Rs. 19,900",
      presentPrice: "Rs. 9,000",
      bookedPercentage: "10%",
    },
    {
      id: 5,
      title: "App Development with Flutter | 2.5 Months",
      by: "Sipalaya Infotech",
      previousPrice: "Rs. 19,900",
      presentPrice: "Rs. 9,000",
      bookedPercentage: "10%",
    },
    {
      id: 6,
      title: "App Development with Flutter | 2.5 Months",
      by: "Sipalaya Infotech",
      previousPrice: "Rs. 19,900",
      presentPrice: "Rs. 9,000",
      bookedPercentage: "10%",
    },
    {
      id: 7,
      title: "App Development with Flutter | 2.5 Months",
      by: "Sipalaya Infotech",
      previousPrice: "Rs. 19,900",
      presentPrice: "Rs. 9,000",
      bookedPercentage: "10%",
    },
    {
      id: 8,
      title: "App Development with Flutter | 2.5 Months",
      by: "Sipalaya Infotech",
      previousPrice: "Rs. 19,900",
      presentPrice: "Rs. 9,000",
      bookedPercentage: "10%",
    },
    {
      id: 9,
      title: "App Development with Flutter | 2.5 Months",
      by: "Sipalaya Infotech",
      previousPrice: "Rs. 19,900",
      presentPrice: "Rs. 9,000",
      bookedPercentage: "10%",
    },
    {
      id: 10,
      title: "App Development with Flutter | 2.5 Months",
      by: "Sipalaya Infotech",
      previousPrice: "Rs. 19,900",
      presentPrice: "Rs. 9,000",
      bookedPercentage: "10%",
    },
    {
      id: 11,
      title: "App Development with Flutter | 2.5 Months",
      by: "Sipalaya Infotech",
      previousPrice: "Rs. 19,900",
      presentPrice: "Rs. 9,000",
      bookedPercentage: "10%",
    },
    {
      id: 12,
      title: "App Development with Flutter | 2.5 Months",
      by: "Sipalaya Infotech",
      previousPrice: "Rs. 19,900",
      presentPrice: "Rs. 9,000",
      bookedPercentage: "10%",
    },
    {
      id: 13,
      title: "App Development with Flutter | 2.5 Months",
      by: "Sipalaya Infotech",
      previousPrice: "Rs. 19,900",
      presentPrice: "Rs. 9,000",
      bookedPercentage: "10%",
    },
    {
      id: 14,
      title: "App Development with Flutter | 2.5 Months",
      by: "Sipalaya Infotech",
      previousPrice: "Rs. 19,900",
      presentPrice: "Rs. 9,000",
      bookedPercentage: "10%",
    },
    {
      id: 15,
      title: "App Development with Flutter | 2.5 Months",
      by: "Sipalaya Infotech",
      previousPrice: "Rs. 19,900",
      presentPrice: "Rs. 9,000",
      bookedPercentage: "10%",
    },
    {
      id: 16,
      title: "App Development with Flutter | 2.5 Months",
      by: "Sipalaya Infotech",
      previousPrice: "Rs. 19,900",
      presentPrice: "Rs. 9,000",
      bookedPercentage: "10%",
    }
  ];

  return (
    <div className="courses">
      <div className="courses-title">
        <h4>Physical | Online Internship Guaranteed IT Courses Training</h4>
      </div>
      <div className="courses-cards">
        {coursesData.map((course) => (
          <div className="courses-cards-box" key={course.id}>
            <div className="box-image">
              <img src={course1} alt="img" />
            </div>
            <div className="courses-package">
              <div className="rating">
                <span className="material-icons-round">star</span>
                <span className="material-icons-round">star</span>
                <span className="material-icons-round">star</span>
                <span className="material-icons-round">star</span>
                <span className="material-icons-round">star_outline</span>
              </div>
              <div className="package">
                <a href="#">{course.title}</a>
              </div>
              <div className="by">
                <span>By</span>
                <p>{course.by}</p>
              </div>
            </div>
            <div className="courses-price">
              <div className="courses-price-first">
                <div className="price">
                  <div className="previous">{course.previousPrice}</div>
                  <div className="present">{course.presentPrice}</div>
                </div>
                <div className="booking">
                  <div className="loader"></div>
                  <div className="booked">
                    <span>{course.bookedPercentage}</span>
                    <p>Booked</p>
                  </div>
                </div>
              </div>
              <div className="courses-price-second">
                
              <button>
                  <i className="material-icons-round">shopping_cart</i>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
