import React from 'react';
import HeroSection from '../components/HeroSection';
import EventList from '../components/EventList';


const HomePage = () => {
  return (
    <div>
      <HeroSection /> {/* Use HeroSection in HomePage */}

      <EventList /> 

      {/* Other content for the HomePage */}
    </div>
  );
};

export default HomePage;
