import React from 'react';
import './CSS/AboutPage.css';
import Contact from '../Components/Contact/Contact';

const AboutP = () => {
  return (
    <div className="about-page">
      <div className='about-title-img'>
        <div className='about-title'>
          <h1>About Us</h1>
        </div>
        <div className='about-img'>
          <img src="" alt="" />
        </div>
      </div>
      <div className='about-missions-values'>
        <div className='mission'>
          <h4>Our Mission</h4>
          <div>
            <p></p>
            <p></p>
          </div>
        </div>
        <div className='values'>
          <h4>Our Values</h4>
          <div className='value-cards'>
            <div className='value-card'>
              <img src="" alt="" />
              <p>Recognizes and Values Cultural Diversity</p>
            </div>
            <div className='value-card'>
              <img src="" alt="" />
              <p>Promotes and Protects Consumer Rights</p>
            </div>
            <div className='value-card'>
              <img src="" alt="" />
              <p>Supporting Independence Through Care</p>
            </div>
            <div className='value-card'>
              <img src="" alt="" />
              <p>Providing Reliable and Compassionate Support</p>
            </div>
            <div className='value-card'>
              <img src="" alt="" />
              <p>Respecting the Dignity of Every Individual</p>
            </div>
            <div className='value-card'>
              <img src="" alt="" />
              <p>Honoring Personal Goals and Choices</p>
            </div>
          </div>
        </div>
        <Contact />
      </div>

    </div>
  );
};

export default AboutP;
