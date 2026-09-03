import {React , useEffect} from 'react';
import './CSS/AboutPage.css';
import Contact from '../Components/Contact/Contact';
import icon1 from '../Components/Assets/value1.png'
import icon2 from '../Components/Assets/value2.png'
import icon3 from '../Components/Assets/value3.png'
import icon4 from '../Components/Assets/value4.png'
import icon5 from '../Components/Assets/value5.png'
import icon6 from '../Components/Assets/value6.png'


const AboutP = () => {

  useEffect(()=>{window.scrollTo(0,0);},[]);

  return (
    <div className="about-page">
      <div className='about-title-img'>
        <div className='about-title'>
          <h1>About Us</h1>
        </div>
      </div>
      <div className='about-missions-values'>
        <div className='mission-aboutimg'>
          <div className='about-img'>
            <img src="/images/logo1.png" alt="" />
          </div>
          <div className='mission'>
           <h4>Our Mission</h4>
            <div className='mission-state'>
              <p>Rodgers Consulting Services Inc., it is our mission to positively impact the lives of our consumers by providing compassionate care, training and support with their functional and basic self-help skills.  We are dedicated to empowering our consumers to live, learn and thrive as active members of their communities, promoting greater independence and a higher quality of life.  We are committed to fostering a sense of dignity, self-worth and achievement.  Rodgers Consulting Services Inc., is devoted to upholding the highest standard of competence, ethics and professionalism.  Rodgers Consulting Services Inc., will provide ongoing training to both consumers and staff to ensure excellence in service.</p>
            </div>
          </div>
        </div>
        <div className='values'>
          <h4>Our Values</h4>
          <div className='value-cards'>
            <div className='value-card'>
              <img src={icon1} alt="" />
              <p>Recognizes and Values Cultural Diversity</p>
            </div>
            <div className='value-card'>
              <img src={icon2} alt="" />
              <p>Promotes Consumer Rights</p>
            </div>
            <div className='value-card'>
              <img src={icon3} alt="" />
              <p>Supporting Independence Through Training</p>
            </div>
            <div className='value-card'>
              <img src={icon4} alt="" />
              <p>Providing Reliable and Compassionate Support</p>
            </div>
            <div className='value-card'>
              <img src={icon5} alt="" />
              <p>Respecting the Dignity of Every Individual</p>
            </div>
            <div className='value-card'>
              <img src={icon6} alt="" />
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
