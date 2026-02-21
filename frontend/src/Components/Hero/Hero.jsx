import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
      <div className="hero">
        <div className='hero-left'>
          <h2>Helping Adults with Intellectual Disabilities Live Independently</h2>
          <p>We provide personalized training and support to help adults build daily living skills with confidence and dignity.</p>
          <div className='hero-btn'>
            <Link to="/about"><h5 id='hero-about'>Learn more</h5></Link>
            <Link to="/services"><h5 id='hero-services'>View our Services</h5></Link>
          </div>
        </div>
        <div className='hero-right'/>
      </div>
  );
};

export default Hero;
