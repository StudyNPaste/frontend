import React from 'react';
import './Services.css';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="services">
      <div>
        <h2>Our Services</h2>
        <p>We offer a range of services to help adults with disabilities achieve independent living goals.</p>
      </div>
      <div className="service-list">
        <div className="service-item">
          <h3>Life Skills Training</h3>
        </div>
        <div className="service-item">
          <h3>Job Coaching</h3>
        </div>
        <div className="service-item">
          <h3>Social Integration</h3>
        </div>
        <div className="service-item">
          <h3>Social Integration</h3>
        </div>
      </div>
      <Link to='/ServicesPage'><div className="view-more-btn">
        <h4>View All Services</h4>
      </div></Link>
    </div>
  );
};

export default Services;
