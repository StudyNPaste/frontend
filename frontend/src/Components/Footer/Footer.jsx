import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import ServiceData from "../Assets/Data/Services";


const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <h3 className="footer-title">Rodgers <span id="footer-text">Consulting Services Inc.</span></h3>
          <img
            className="footer-logo-img"
            src="/images/logo1.png"
            fetchpriority="high"
            alt="Rodgers Consulting Services logo"
          />
        </div>

        <div className="footer-right">
          <div className="footer-nav-links">
            <h6 className="footer-header">Company</h6>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            {ServiceData.slice(0, 4).map((service, index) => (
              <Link
                id="footer-service-links"
                key={service.id || index}
                to='/services'>
                Services
              </Link>
            ))}
            <Link to='/contact'>Contact Us</Link>
          </div>

          <div className="footer-nav-links">
            <h6 className="footer-header">Services</h6>
            {ServiceData.slice(0, 4).map((service, index) => (
              <Link
                id="footer-service-links"
                key={service.id || index}
                to='/services'>
                {service.term}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Proudly Serving Intellectual Disabled Adults in SARC, RCEB, and ACRC</p>
        <p>All rights reserved. Rodgers Consulting Services Inc. © {year} </p>
      </div>
    </footer>
  );
};

export default Footer;
