import React from 'react';
import './CSS/HomePage.css';
import Hero from '../Components/Hero/Hero';
import Contact from '../Components/Contact/Contact';
import Services from '../Components/Services/Services';
import About from '../Components/About/About';
import Definitions from '../Components/Definitions/Definitions';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <About />
      <Definitions />
      <Services />
      <Contact />
    </div>
  );
};

export default Home;

