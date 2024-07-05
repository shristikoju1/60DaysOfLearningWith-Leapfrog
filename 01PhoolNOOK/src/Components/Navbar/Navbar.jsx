
import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll';


import './Navbar.css'
import logo from '../../assets/white-logo.png'
import menu from '../../assets/menu-icon-removebg-preview.png'

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu? setMobileMenu(false) : setMobileMenu(true);
  } 

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
        <img src={logo} alt="" className='logo'/>
        <ul className={mobileMenu?'': 'hide-mobile-menu'}>
          <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
          <li><Link to='product' smooth={true} offset={-260} duration={500}>Products</Link></li>
          <li><Link to='about' smooth={true} offset={-150} duration={500}>About</Link></li>
          <li><Link to='gallery' smooth={true} offset={-260} duration={500}>Gallery</Link></li>
          <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
          <li><Link to='contact' smooth={true} offset={-260} duration={500}className='btn'>Contact Us</Link></li>
        </ul>
        <img src={menu} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>    
)
}

export default Navbar