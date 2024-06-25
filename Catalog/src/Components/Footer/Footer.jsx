import React from "react";
import "./Footer.scss";
import { Link as ScrollLink } from "react-scroll";
import logo from "../../assets/Company logo.svg";
import twitter from "../../assets/Twitter.svg";
import linkedin from "../../assets/LinkedIn.svg";
import youtube from "../../assets/YouTube.svg";
import ccLogo from "../../assets/cc-logo.svg";
import arrowUpward from "../../assets/arrow_upward.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-wrapper">
        <div className="footer-content-left">
          <span className="footer-logo">
            <img src={logo} alt="Company Logo" />
          </span>
          <p>
            We are a collaboration of non-government organisations and
            professionals working to ensure that government spending.
          </p>
          <div className="social-media-icons">
            <img src={twitter} alt="Twitter" />
            <img src={linkedin} alt="LinkedIn" />
            <img src={youtube} alt="YouTube" />
          </div>
        </div>
        <div className="footer-content-right">
          <ul>
            <p>Links</p>
            <a href="#">Campaigns</a>
            <a href="#">Resources</a>
            <a href="#">News</a>
            <a href="#">About Us</a>
          </ul>
          <ul>
            <p>Resources</p>
            <a href="#">Transparency Toolkit</a>
            <a href="#">Evidence</a>
            <a href="#">Best Practices</a>
          </ul>
          <ul>
            <p>Work With Us</p>
            <a href="#">Contact Us</a>
            <a href="#">Join Us</a>
          </ul>
        </div>
      </div>
        </div>
        
      <div className="footer-copyright">
        <div className="footer-copyright-left">
          <span>Terms and Conditions</span>
          <div className="cc-logo">
            <img src={ccLogo} alt="Creative Commons Logo" />
          </div>
        </div>

        <div className="upward-arrow">
        <ScrollLink
            to="hero"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
          >
             <img src={arrowUpward} alt="Upward Arrow" />
          </ScrollLink>
         
        </div>
      </div>
    </footer>
  );
}

export default Footer;
