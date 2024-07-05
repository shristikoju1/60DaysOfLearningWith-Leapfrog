import React, { useState } from "react";
import "./Navbar.scss";
import { Link as ScrollLink } from "react-scroll";
import logo from "../../assets/Company logo.svg";
import searchBar from "../../assets/search-icon.svg";
import book from "../../assets/book.svg";
import zap from "../../assets/zap.svg";
import playButton from "../../assets/play_button.svg";
import dropdown from "../../assets/dropdown.png";
import menu from "../../assets/menu-icon.png";

const Navbar = ({ toggleSearchBar }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleMenuClick = () => {
    setIsActive(!isActive);
  };
  return (
    <div>
      <nav className={`navbar ${isActive ? "is-active" : ""}`}>
        <img src={logo} alt="Company logo" className="logo" />
        <ul>
          <li>
            <ScrollLink
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              About Us
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="news"
              spy={true}
              smooth={true}
              offset={-10}
              duration={500}
            >
              Case Studies
            </ScrollLink>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setShowDropdown(!showDropdown);
              }}
              className="resources-link"
            >
              Resources{" "}
              <img src={dropdown} alt="dropdown" className="dropdown-img" />
            </a>
            {showDropdown && (
              <div className="dropdown">
                <div className="dropdown-box">
                  <div className="dropdown-item">
                    <img src={book} alt="Blog" />
                    <div className="dropdown-item-content">
                      <h2>Blog</h2>
                      <p>The latest industry news, updates, and info.</p>
                    </div>
                  </div>
                  <div className="dropdown-item">
                    <img src={zap} alt="Customer stories" />
                    <div className="dropdown-item-content">
                      <h2>Customer stories</h2>
                      <p>Learn how our customers are making big changes.</p>
                    </div>
                  </div>
                  <div className="dropdown-item">
                    <img src={playButton} alt="Video tutorials" />
                    <div className="dropdown-item-content">
                      <h2>Video tutorials</h2>
                      <p>Get up and running on new features and techniques.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </li>
        </ul>
        <div className="navbar-right">
          <img
            src={searchBar}
            alt="Search"
            className="search-icon"
            onClick={toggleSearchBar}
            style={{ cursor: "pointer" }}
          />
          {/* hamburger menu  */}
          <button
            className={`hamburger ${isActive ? "is-active" : ""}`}
            onClick={handleMenuClick}
          >
            <div className="bar"></div>
          </button>
        </div>
      </nav>

      {/* mobile menu */}
      <nav class={`mobile-nav ${isActive ? "is-active" : ""}`}>
        <div>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#news">Case Studies</a>
          </li>
          <li>
            <a href="#">
              Resources{" "}
            </a>
          </li>
        </div>
      </nav>
      <div class={`overlay ${isActive ? "is-active" : ""}`}></div>
    </div>
  );
};

export default Navbar;
