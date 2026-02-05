import React from 'react';
import Hero from '../Components/Hero/Hero';
import Contact from '../Components/Contact/Contact';
import Services from '../Components/Services/Services';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Services />
      <Contact />
    </div>
  );
};

export default Home;

