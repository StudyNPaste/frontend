import React from 'react';
import './Services.css';
import ServiceData from '../Assets/Data/Services';

const Services = () => {
  return (
    <div className="hp-service-list">
        <div className='hp-service-title'>
          <h2>Our Services</h2>
          <p>We offer a wide range of services to assist adults with intellectual disabilities achieve their independent living goals.</p>
        </div>
        {ServiceData.map((service, index) => (
            <div className="hp-service-item">
              <div className='hp-services-left'>
                <h3>{service.term || service.title}</h3>
                <p id='service-info'>{service.definition || service.description}</p>
              </div>
              <div className='hp-services-right'>
                <h4>{service.bulletsTitle[0]}</h4>
                <ul>{service.bulletsA.map((b, i) => (<li key={i}>{b}</li>))}</ul>
              </div>
            </div>
        ))}
      </div>
  );
};

export default Services;
