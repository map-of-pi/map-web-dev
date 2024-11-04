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
      <div className='absolute inset-0 bg-white bg-opacity-[0.2] backdrop-blur-[2px]'></div>

      <div className='relative z-10 text-center px-4'>
        <h1 className='text-4xl md:text-6xl font-extrabold text-black tracking-tight leading-tight'>
          Welcome to Map of PI
        </h1>
        <p className='mt-4 text-xl md:text-xl text-white-900 max-w-2xl mx-auto drop-shadow-2xl'>
          Discover, buy, and sell in map of pi Markeplace.
        </p>
        <button className='mt-8 px-8 py-3 bg-primary text-white font-semibold rounded-full transition duration-300 hover:bg-white hover:text-black transform hover:scale-105 shadow-md'>
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
