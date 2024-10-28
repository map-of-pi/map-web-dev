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
      className='relative flex items-center justify-center h-screen bg-cover bg-center'
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Blurred Background Overlay */}
      <div className='absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg'></div>

      <div className='relative z-10 text-center px-4'>
        <h1 className='text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight'>
          Welcome to Map of Pi
        </h1>
        <p className='mt-4 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto'>
          Discover, buy, and sell with ease on our dynamic platform.
        </p>
        <button className='mt-8 px-8 py-3 bg-primary text-black font-semibold rounded-full transition duration-300 hover:bg-white hover:text-primary transform hover:scale-105 shadow-md'>
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
