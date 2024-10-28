import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import backgroundImage from '/assets/background.jpg';

const HeroSection = () => {
  const heroRef = useRef();

  useEffect(() => {
    gsap.fromTo(heroRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-primary opacity-50 blur-lg md:blur-none"></div>
      <div className="z-10 text-center">
        <h1 className="text-4xl md:text-6xl text-white font-bold">Buy and Sell with Map of PI</h1>
        <button className="mt-6 px-8 py-3 bg-white text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
