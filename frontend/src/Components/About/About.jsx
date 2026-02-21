import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import aboutpic from '../Assets/about.jpg';

const About = () => {
  return (
    <div className='about'>
      <div className="about-title-box">
          <h2>About Us</h2>
          <p><i>"Rodgers Consulting Services offers exemplary support systems in which people with intellectual disabilities have rightful opportunities to excel in life with enhanced independence and strengthened abilities."</i></p>
      </div>
      <div className='about-container'>
        <div className='about-content'>
          <div className='about-left'>
            <img src={aboutpic} alt="About Us" />
          </div>
          <div className='about-right'>
            <div className="about-image-text">
              <img src='' alt="" />
              <p>Our caring professional training and support to help individuals gain the skills and confidence needed for independent living.</p>
            </div>
            <div className="about-image-text">
              <img src="" alt="" />
              <p>We believe in creating personalized plans that meet the unique needs of each individual.</p>
            </div>
            <Link to='/about'><div>
              <h3>Learn More About Us</h3>
            </div></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
