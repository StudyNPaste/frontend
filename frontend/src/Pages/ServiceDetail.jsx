import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Offer from '../Components/Assets/Data/Services';
import './CSS/ServicesPage.css';

const ServiceDetail = () => {
  const { serviceIndex } = useParams();
  const index = parseInt(serviceIndex, 10);

  if (isNaN(index) || index < 0 || index >= Offer.length) {
    return (
      <div className="services">
        <h1>Service not found</h1>
        <Link to="/services">Back to all services</Link>
      </div>
    );
  }

  const item = Offer[index];

  return (
    <div className="services service-detail">
        <div>
            <h1 className='service-title'>{item.term || item.title}</h1>
        </div>
        <div className='service-container'>
          <div className='service-left'>
            <p className='service-description'>{item.definition}</p>
          </div>
          <div className='service-right'>
            {item.bulletsTitle && item.bulletsTitle.length > 0 && (
              <div >
                  <h4>{item.bulletsTitle[0]}</h4>
                  <ul className=''>{item.bulletsA.map((b, i) => (<li key={i}>{b}</li>))}</ul>
              </div>
              )}
          </div>
        </div>
    </div>
  );
};

export default ServiceDetail;
