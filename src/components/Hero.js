// src/components/Hero.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>HIRE DRIVERS</h1>
        <h2>Drivers on Demand. Reliable Rides, Just Around the Corner — Because Every Journey Matters.</h2>
        <button className="book-now-btn" onClick={() => navigate('/pricing')}>
          Book Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
