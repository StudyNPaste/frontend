import React from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div>
      <div className="contact">
        <h2>Learn more about our programs</h2>
        <p><i>Our programs are designed to support independent living and empower individuals to achieve their goals.</i></p>
        <div className='btn-container'>
          <Link to="/about"><div id='about-btn' className="contact-btn">
            <h4>Our Mission</h4>
          </div></Link>
          <Link to="/services"><div className="contact-btn">
            <h4>How We Help</h4>
          </div></Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
