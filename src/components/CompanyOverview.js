// src/components/CompanyOverview.js
import React from 'react';

const CompanyOverview = () => {
  return (
    <section className="company-overview">
      <div className="section-header">
        <h2>Company Overview</h2>
        <p>Your trusted partner for professional driver services</p>
      </div>
      
      <div className="overview-content">
        <div className="overview-text">
          <p>
            Drive is a premier driver hiring service that connects individuals and businesses 
            with professional, vetted drivers on demand..
          </p>
          <p>
            Our mission is to provide safe, reliable, and convenient driver services 
            that give you back your valuable time. Whether you need a driver for a few 
            hours, a day, or on an ongoing basis, we have the perfect solution for you.
          </p>
 <button
  className="enquiry-btn"
onClick={() =>
  window.open(
    'https://wa.me/+916238597406?text=Hello HIRE LOOP i would like%20to%20make%20an%20enquiry',
    '_blank',
    'noopener,noreferrer'
  )
}

>
  Make an Enquiry
</button>


        </div>
        <div className="overview-stats">
          <div className="stat-card">
            <h3>24/7</h3>
            <p>Customer Support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;