import {React, useEffect} from 'react'
import './CSS/ContactPage.css'
import email from '../Components/Assets/email.png'
import phone from '../Components/Assets/phone.png'
import fax from '../Components/Assets/fax.png'
import map from '../Components/Assets/map.png'
import team from '../Components/Assets/team.png'



const ContactPage = () => {

  useEffect(()=>{window.scrollTo(0,0);},[]);

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h2>Contact Us</h2>
      </div>
      <div className="contact-grid-map">
        <div className='contact-grid'>
          <div className="contact-card">
            <div className='contact-title'>
              <img src={phone} alt="" />
              <h3>Phone</h3>
            </div>
            <div className='contact-details'>
              <p>(650) 938-3124</p>
              <p>(916) 822-6854</p>
            </div>
          </div>
          <div className="contact-card">
            <div className='contact-title'>
              <img src={fax} alt="" />
              <h3>Fax</h3>
            </div>
            <div className='contact-details'>
              <p>(650) 938-3984</p>
              <p>(916) 244-9896</p>
            </div>
          </div>
          <div className="contact-card">
            <div className='contact-title'>
              <img src={email} alt="" />
              <h3>Email</h3>
            </div>
            <div className='contact-details'>
              <p>Frodgers@inficonsult.com</p>
              <p>Arodgers@inficonsult.com</p>
            </div>
          </div>
          <div className="contact-card">
            <div className='contact-title'>
              <img src={team} alt="" />
              <h3>Management Team</h3>
            </div>
            <div className='contact-details'>
              <div>
                <p>Fredrick Rodgers, <i><b>Director</b></i></p>
                <p>Angela Rodgers, <i><b>Service Manager</b></i></p>
              </div>
            </div>
          </div>
          <div className="contact-card">
            <div className='contact-title'>
              <img src={map} alt="" />
              <h3>Address</h3>
            </div>
            <div className='contact-details'>
              <p>2680 Bayshore Parkway, Suite 208</p>
              <p>Mountain View, CA  94043</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactPage