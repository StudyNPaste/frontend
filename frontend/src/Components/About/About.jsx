import React from 'react';
import './About.css';


const About = () => {
  return (
    <div className='about'>
      <div className="about-title-box">
          <h2>About Us</h2>
          <p><i>Rodgers Consulting Services Inc., it is our mission to positively impact the lives of our consumers by providing compassionate care, training and support with their functional and basic self-help skills.  We are dedicated to empowering our consumers to live, learn and thrive as active members of their communities, promoting greater independence and a higher quality of life.  We are committed to fostering a sense of dignity, self-worth and achievement.</i></p>
      </div>
      <div className='about-container'>
        <div className='about-content'>
          <div className='about-left'>
            <img src="/images/about.jpg" alt="About Us" />
          </div>
          <div className='about-right'>
            <div className="about-image-text">
              <p>With the help of our caring and supportive staff <span id='company'>Rodgers Consulting Services Inc.,</span> gives consumers an opportunity to excel in living a more independent life with confidence and strengthened abilities.</p>
            </div>
            <div className="about-image-text">
              <img src="" alt="" />
              <p>In joint relationship with the Regional Center and <span id='company'>Rodgers Consulting Services Inc.,</span> a personalized plan is developed for each consumer with specific goals toward greater skills and abilities.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
