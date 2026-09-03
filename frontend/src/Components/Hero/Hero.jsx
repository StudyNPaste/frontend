import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";


const slides = [
  { id: 1, image: '/images/hero1.jpg' },
  { id: 2, image: '/images/hero2.jpg' },
  { id: 3, image: '/images/hero3.jpg' },
  { id: 4, image: '/images/hero4.jpg' },
];

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>Serving Adults with Intellectual Disabilities</h2>

        <p>
          Rodgers Consulting Services Inc. provides personalized training and
          support to help consumers experience a more comfortable lifestyle with
          greater independence and strengthened abilities.
        </p>

        <div className="hero-btn">
          <Link to="/about">
            <h5 id="hero-about">Learn More</h5>
          </Link>
        </div>
      </div>

      <Carousel
        className="hero-carousel"
        interval={5000}
        pause={false}
        fade
        indicators={false}
        controls={false}
        touch={false}
        ride="carousel"
      >
        {slides.map((slide) => (
          <Carousel.Item key={slide.id}>
            <img className="hero-image" src={slide.image} alt="hero" />

            <div className="carousel-caption-custom">
              <h2>Service.</h2>
              <h2>Training.</h2>
              <h2>Growth.</h2>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
