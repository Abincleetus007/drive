// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <div className="footer-section">
          <h3>HireLoop</h3>
          <p>Your trusted partner for professional driver services. Since Now</p>
        </div>
        
        <div className="footer-section">
          <h4>Contact Us</h4>
          <div className="contact-info">
  <p>
    <span>📱</span> 
    <a href="tel:+919999999999" className="contact-link">99999999999</a>
  </p>
  <p>
    <span>✉️</span> 
    <a href="mailto:HIRE@drive-services.com" className="contact-link">HIRE@drive-services.com</a>
  </p>
</div>

        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} HIRE Services. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;