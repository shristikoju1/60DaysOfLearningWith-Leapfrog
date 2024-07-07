import React, { useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('.navbar');
      if (nav) {
        if (window.scrollY > 50) {
          nav.classList.add('scrolled');
        } else {
          nav.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSetActive = (to) => {
    console.log(`${to} is active`);
  };

  return (
    <nav className='navbar'>
      <div className="navbar-content">

    
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="list">
        <ul>
          <li>
            <Link
              activeClass="active"
              to="hero"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onSetActive={handleSetActive}
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
              onSetActive={handleSetActive}
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
              onSetActive={handleSetActive}
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
              onSetActive={handleSetActive}
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
              onSetActive={handleSetActive}
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
      </div>
    </nav>
  );
};

export default Navbar;
