import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero">
      <div className='hero-left'>
        <h2>Helping Adults with Intellectual Disabilities Live Independently</h2>
        <p>We provide personalized training and support to help adults build daily living skills with confidence and dignity.</p>
        <div>
          <Link to="/about"><h5>View our Services</h5></Link>
          <Link to="/about"><h5>Get in touch</h5></Link>
        </div>
      </div>
      <div className='hero-right'>
        <div>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
