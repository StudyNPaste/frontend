import React from 'react';
import './Services.css';
import { Link } from 'react-router-dom';
import ServiceData from '../Assets/Data/Services';

const Services = () => {
  return (
    <div className="hp-services">
      <div className='hp-services-title'>
        <h2>Our Services</h2>
        <p>We offer a range of services to help adults with intellectual disabilities achieve independent living goals.</p>
      </div>
      <div className="hp-service-list">
        {ServiceData.map((service, index) => (
          <Link key={service.id || index} to={`/services?service=${index}`}>
            <div className="hp-service-item">
              <h3>{service.term || service.title}</h3>
              <p>{service.definition || service.description}</p>
            </div>
          </Link>
        ))}
      </div>
      {/*<Link to='/services'><div className="view-more-btn">
        <h4>View All Services</h4>
      </div></Link>*/}
    </div>
  );
};

export default Services;
