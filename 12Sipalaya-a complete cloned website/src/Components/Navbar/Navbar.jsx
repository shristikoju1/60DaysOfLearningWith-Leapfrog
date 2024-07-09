import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 70);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-content">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <div className={`list ${mobileMenu ? 'show-mobile-menu' : 'hide-mobile-menu'}`}>
          <ul>
            <li>
              <Link
                activeClass="active"
                to="hero"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="courses"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                All Courses
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="selectedStudents"
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
              >
                Verify Certificates
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="sipalaya"
                spy={true}
                smooth={true}
                offset={-75}
                duration={500}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="footer"
                spy={true}
                smooth={true}
                offset={-0}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="cart">
          <i className="material-icons-round">search</i>
          <div className="cart-icon">
            <i className="material-icons-round">shopping_cart</i>
            <span>(0)</span>
          </div>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <i className="material-icons-round">menu</i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
