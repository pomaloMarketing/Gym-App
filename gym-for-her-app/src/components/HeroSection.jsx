import React from 'react';
import { Button } from 'react-bootstrap';

const HeroSection = () => {
  return (
    <div
      className="hero-section"
      style={{
        backgroundImage: 'url(../src/assets/background.webp)', // Replace with your image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // Full viewport height
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'white', // Make text white or any contrasting color
      }}
    >
      <div className="hero-content">
        <h1 className="display-3">Welcome to The Gym for Her</h1>
        <h2 className="lead">Achieve your fitness goals with us</h2>
        <Button variant="primary" size="lg" href="#explore">
          Explore More
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
