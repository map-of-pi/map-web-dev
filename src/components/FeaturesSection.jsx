import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const FeaturesSection = () => {
  const featureRefs = useRef([]);
  featureRefs.current = [];

  useEffect(() => {
    featureRefs.current.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            end: 'bottom 60%',
            scrub: true,
          },
        }
      );
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !featureRefs.current.includes(el)) {
      featureRefs.current.push(el);
    }
  };

  return (
    <section className='py-12 bg-white'>
      <div className='max-w-7xl mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center mb-8'>Features</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {[1, 2, 3].map((feature, index) => (
            <div
              key={index}
              ref={addToRefs}
              className='p-6 bg-gray-100 rounded-lg shadow-lg'
            >
              <h3 className='text-xl font-semibold'>Feature {feature}</h3>
              <p className='mt-4 text-gray-600'>
                Description for feature {feature}.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
