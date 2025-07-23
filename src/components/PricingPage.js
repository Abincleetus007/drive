// src/pages/PricingPage.js
import React from 'react';

const plans = [
  {
    title: 'Hourly Driver Hire',
    price: '₹199/hr',
    features: [
      'Ideal for short trips or meetings',
      'Professional drivers',
      'Air-conditioned car (yours)',
      'Min. 2 hours booking'
    ]
  },
  {
    title: 'Round Trip Driver',
    price: '₹1599/day',
    features: [
      'Perfect for return journeys',
      'Experienced drivers',
      'Fuel included in pricing',
      'Unlimited stops in round trip'
    ]
  },
  {
    title: 'Bike Pickup & Drop',
    price: '₹99/trip',
    features: [
      'Quick pickup and drop',
      'Experienced riders',
      'Safety ensured',
      'City limits only'
    ]
  },
  {
    title: 'Outstation Drop',
    price: '₹13/km',
    features: [
      'One-way outstation travel',
      'Flexible timings',
      'Experienced highway drivers',
      'Instant quote on call'
    ]
  }
];

const PricingPage = () => {
  const handleBooking = () => {
    window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLSdLLmC8kMK04CxYliln76cR2epURP5GNftopcAeNPO0MAwtAQ/viewform?usp=header',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div className="pricing-page">
      <div className="section-header">
        <h2>Our Driver Pricing Plans</h2>
        <p>Choose a plan that fits your travel needs. Affordable, flexible and reliable options.</p>
      </div>
      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <div className="pricing-card" key={index}>
            <h3>{plan.title}</h3>
            <p className="price">{plan.price}</p>
            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button className="enquiry-btn" onClick={handleBooking}>
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
