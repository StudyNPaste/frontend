import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <div className='footer-logo'>
        <img src="" alt="" />
      </div>
      <div className='footer-links'>
              <div className='nav-links'>
                  <Link to="/">Home</Link>
                  <Link to="/about">About Us</Link>
                  <Link to="/services">Services</Link>
                  <Link to="/contact">Contact</Link>
              </div>
              <div className='nav-links'>
                  <Link to="/">Home</Link>
                  <Link to="/about">About Us</Link>
                  <Link to="/services">Services</Link>
                  <Link to="/contact">Contact</Link>
              </div>
              <div className='nav-links'>
                  <Link to="/">Home</Link>
                  <Link to="/about">About Us</Link>
                  <Link to="/services">Services</Link>
                  <Link to="/contact">Contact</Link>
              </div>
              <div className='nav-links'>
                  <Link to="/">Home</Link>
                  <Link to="/about">About Us</Link>
                  <Link to="/services">Services</Link>
                  <Link to="/contact">Contact</Link>
              </div>
          </div>
    </div>
  );
};

export default Footer;
