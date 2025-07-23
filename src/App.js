// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import CompanyOverview from './components/CompanyOverview';
import Footer from './components/Footer';
import PricingPage from './components/PricingPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Services />
                <CompanyOverview />
              </>
            }
          />
          <Route path="/pricing" element={<PricingPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
