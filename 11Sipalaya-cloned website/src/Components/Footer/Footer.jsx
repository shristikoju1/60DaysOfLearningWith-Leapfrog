import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import connectIps from "../../assets/connect ips.png";
import esewa from "../../assets/esewa.png";
import fb from "../../assets/fb.png";
import insta from "../../assets/insta.png";
import linkedin from "../../assets/linkedin.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-first">
        <div className="footer-first-content">
          <div className="first first-one">
            <div className="one-logo">
              <img src={logo} alt="logo" />
            </div>
            <p>
              At <span>Sipalaya</span>, We're here to help you thrive. Learn
              in-demand skills, get hired, and advance your career with us. Join
              today and start your journey to success.
            </p>
            <div>
              <p>
                <span>WhatsApp / Phone: </span>9851344071 | 9806393939
              </p>
              <p>
                <span>Email: </span>infotech@sipalaya.com
              </p>
            </div>
          </div>
          <div className="first first-two">
            <h2>QUICK LINKS</h2>
            <ul>
              <a href="#">Dashboard</a>
              <a href="#">Courses</a>
              <a href="#">Certificate Verification</a>
              <a href="#">Contact US</a>
              <a href="#">Refund & Cancellation Policy</a>
            </ul>
          </div>
          <div className="first first-three">
            <h2>EXPLORE OUR COURSES</h2>
            <ul>
              <a href="#">Python with Data Science | 3 months</a>
              <a href="#">MERN Stack | 3 months</a>
              <a href="#">
                Full Stack Web Development in Python with Django | 3 months
              </a>
            </ul>
          </div>
          <div className="first first-four">
            <h2>PAYMENT POWERED BY</h2>
            <div className="payment-partner">
              <div className="connect-ips">
                <img src={connectIps} alt="ips" />
              </div>
              <div className="esewa">
                <img src={esewa} alt="esewa" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-second">
        <div className="footer-second-content">
        <div className="second-upper">
          <div className="upper-one">
            <div className="social-media">
              <img src={fb} alt="fb" />
            </div>
            <div className="social-media">
              <img src={insta} alt="insta" />
            </div>
            <div className="social-media">
              <img src={linkedin} alt="linkedin" />
            </div>
          </div>
          <div className="upper-two">
            <a href="#">Blogs</a>
            <a href="#">Refund & Cancellation Policy</a>
          </div>
        </div>
        <div className="second-lower">
          <p>© All rights reserved.</p>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
