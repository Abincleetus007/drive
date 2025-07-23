// src/components/Services.js
import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Hourly Driver Hire",
      description: "Need a driver for a few hours? Book our hourly service for meetings, events, or personal use."
    },
    {
      title: "One-Way Car Drop",
      description: "Need to transport your car from one location to another? Our professional drivers can safely drive your car to your desired destination—across the city or even intercity."
    },
    {
      title: "Round Trip Driver Hire",
      description: "Need a driver for a full journey to and from your destination? Our round-trip service is ideal for day outings, business trips, or family visits—enjoy the ride while we take care of the driving both ways."
    },
    {
      title: "Outstation Driver Service",
      description: "Planning a trip outside the city? Book a trained driver for outstation journeys—comfortable, safe, and stress-free long-distance travel."
    },
    {
      title: "Temporary Driver for Car Servicing",
      description: "Can’t visit the service center? We’ll pick up your car, get it serviced, and return it—so you don’t have to spend your valuable time."
    },
    {
      title: "Two-Wheeler Drop Service",
      description: "Want to move your bike without riding it? Hire our expert riders to deliver your bike from point A to B, safely and on time."
    }
  ];

  return (
    <section className="services" id="services">
      <div className="section-header">
        <h2>Our Services</h2>
        <p>Professional driver solutions for all your needs</p>
      </div>
      
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;