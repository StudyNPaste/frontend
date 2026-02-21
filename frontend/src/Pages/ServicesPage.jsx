import React from 'react';
import { useSearchParams } from 'react-router-dom';
import './CSS/ServicesPage.css';
import Offer from '../Components/Assets/Data/Services'


const Service = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeIndex = searchParams.get('service') !== null ? parseInt(searchParams.get('service')) : null;

  return (
    <div className="services">
      <div>
        <h1>Our Services</h1>
        <p>We offer a range of services to help adults with intellectual disabilities achieve independent living goals.</p>
      </div>

      <div className="service-list">
        <div className="service-links">
          {Offer.map((item, index) => {
            return (
              <div key={item.id || index} style={{ display: index === activeIndex ? 'none' : 'block' }}>
                <div onClick={() => setSearchParams({ service: index })}>{item.term || item.title}</div>
              </div>
            );
          })}
        </div>

        <div className="service-item">
          {activeIndex === null ? (
            Offer.map((item, index) => (
              <div key={item.id || index}>
                <h3>{item.term || item.title}</h3>
                <p>{item.definition || item.description}</p>
              </div>
            ))
          ) : (
            <div>
              <h3>{Offer[activeIndex].term || Offer[activeIndex].title}</h3>
              <p>{Offer[activeIndex].definition || Offer[activeIndex].description}</p>
              <div>
                <button onClick={() => setSearchParams({})}>Close</button>
              </div>
              <div>
                <h4>{Offer[activeIndex].bulletsTitle[0]}</h4>
                <ul>
                  {Offer[activeIndex].bulletsA.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>{Offer[activeIndex].bulletsTitle[1]}</h4>
                <ul>
                  {Offer[activeIndex].bulletsB.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Service;
