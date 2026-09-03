import {React, useEffect} from "react";
import "./CSS/ServicesPage.css";
import ServiceData from '../Components/Assets/Data/Services';


const ServicesPage = () => {

  useEffect(()=>{window.scrollTo(0,0);},[]);

  return (
    <div className="services">
      <div className="service-title">
        <h2>Independent Living Skills Training</h2>
      </div>
      {ServiceData.map((service, index) => (
            <div className="hp-service-item">
              <div className='hp-services-left'>
                {/*<h3>{service.term || service.title}</h3>*/}
                <p id='hp-service-info'>{service.definition || service.description}</p>
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

export default ServicesPage;
