// src/pages/PricingPage.js
import React from 'react';

const plans = [
  {
    title: 'Hourly Driver Hire',
    price: '₹499/hr',
    features: [
      'Ideal for short trips or meetings',
      'For the first three hours, additional hours will be charged ₹89/Hour'
    ]
  },
  {
    title: 'Round Trip Driver',
    price: '₹1599/day',
    features: [
      'Perfect for return journeys',
      'Experienced drivers',
      'Unlimited stops in round trip'
    ]
  },
  {
    title: 'Bike Pickup & Drop',
    price: '₹9/km',
    features: [
      'Quick pickup and drop',
      'Experienced riders',
      'Safety ensured',
    ]
  },
  {
    title: 'Car Pickup & Drop',
    price: '₹9/km',
    features: [
      'Quick pickup and drop',
      'Experienced drivers',
      'Safety ensured',
    ]
  },
  {
    title: 'Outstation Drop',
    price: '₹9/km',
    features: [
      'One-way outstation travel',
      'Flexible timings',
      'Experienced highway drivers',
    ]
  }
];

// 📝 Important Notes Section
const BookingNotes = () => (
  <div className="booking-notes">
    <h3>Important Notes</h3>
    <ul>
      <li>Food allowance also considered, if the driver is engaged for your drive at <strong>7AM, 1PM, or 8PM</strong>.</li>
      <li><strong>Best Booking time for City Drive:</strong> Minimum 12 hours before your trip.</li>
      <li><strong>Best Booking time for Outstation Drive:</strong> Minimum 2 day before your trip.</li>
    </ul>
  </div>
);

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

      {/* Notes Section */}
      <BookingNotes />

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
