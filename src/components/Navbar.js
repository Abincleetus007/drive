import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/', { replace: false });
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100); // Delay for page transition
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">HireLoop</div>
        <div className="nav-links">
          <button className="nav-button" onClick={() => handleNav('home')}>Home</button>
          <button className="nav-button" onClick={() => handleNav('services')}>Services</button>
          <button className="nav-button" onClick={() => handleNav('Contacts')}>Contact</button>
    
        </div>
      </div>

      

     
    </nav>
  );
};

export default Navbar;
