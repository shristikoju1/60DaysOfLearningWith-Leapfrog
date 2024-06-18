import React from "react";
import "./Contact.scss";
import Title from "../Title/Title";

const Contact = () => {
  return (
    <div className="contact">
      <div className="heading-div">
        <Title
          className="heading"
          title="Contact Us"
          paragraph="If you have any further inquires, please let us know by filling the form below"
        />
      </div>

      <form>
        <div className="name">
          <div className="input-group">
            <label>First name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder=""
              required
            />
          </div>

          <div className="input-group">
            <label>Last name</label>
            <input
              type="text"
              name="name"
              placeholder=""
              required
            />
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="">Email Address</label>
          <input
            type="text"
            name="email"
            placeholder=""
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="">Write Your Message Here</label>
          <textarea
          className="message-box"
            name="message"
            rows="6"
            placeholder=""
            required
          ></textarea>
        </div>
        <div className="submit-div">
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
