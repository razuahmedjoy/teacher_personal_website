import React from 'react';
// import HeroImage from '../assets/images/hero.png'
import { Link } from 'react-router-dom';
import { Education } from '../components/Education';
import HeroSection from '../components/HeroSection';
function LandingPage() {
  return (

    <>
      {/* Hero Section */}

      <HeroSection />

      {/* education */}

      <Education />
    </>
  );
}

export default LandingPage;
