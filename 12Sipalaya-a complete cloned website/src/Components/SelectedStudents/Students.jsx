import React, { useState } from "react";
import "./Students.css";
import student1 from "../../assets/student1.png";
import student2 from "../../assets/student2.png";
import student3 from "../../assets/student3.png";
import student4 from "../../assets/student4.png";
import student5 from "../../assets/student5.png";
import student6 from "../../assets/student6.png";
import student7 from "../../assets/student7.png";

const Students = () => {
  const [images, setImages] = useState([
    student1,
    student2,
    student3,
    student4,
    student5,
    student6,
    student7,
  ]);

  const handleBackward = () => {
    const newImages = images.slice(1).concat(images[0]);
    setImages(newImages);
  };

  const handleForward = () => {
    const newImages = images.slice(-1).concat(images.slice(0, -1));
    setImages(newImages);
  };

  return (
    <div className="selectedStudents">
      <div className="students-title">
        <h4>OUR SELECTED STUDENTS</h4>
      </div>

      <div className="students">
        <div className="arrow" onClick={handleBackward}>
          <span className="material-icons-round">arrow_back_ios</span>
        </div>
        <div className="students-images">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`student${index + 1}`} className="student-image" />
          ))}
        </div>
        <div className="arrow" onClick={handleForward}>
          <span className="material-icons-round">arrow_forward_ios</span>
        </div>
      </div>
    </div>
  );
};

export default Students;
