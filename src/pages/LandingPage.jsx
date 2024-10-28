import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    title: 'Map of Pi',
    subtitle: 'Buy and Sell with PI',
    description: 'The secure and easy way to trade using Pi cryptocurrency',
    bgColor: '#ffffff',
    illustration: (
      <div className='h-64 w-64 bg-blue-500/10 rounded-full flex items-center justify-center'>
        <div className='text-6xl'>π</div>
      </div>
    ),
  },
  {
    title: 'Trading Made Simple',
    subtitle: 'Connect with buyers and sellers',
    description:
      'Browse listings, make offers, and complete transactions safely',
    bgColor: '#f8fafc',
    illustration: (
      <div className='relative h-64 w-64'>
        <div className='absolute inset-0 bg-blue-600/10 rounded-lg transform rotate-3'></div>
        <div className='absolute inset-0 bg-pink-600/10 rounded-lg transform -rotate-3'></div>
      </div>
    ),
  },
  {
    title: 'Join the Community',
    subtitle: 'Start trading today',
    description: 'Be part of the growing Pi Network marketplace',
    bgColor: '#ffffff',
    illustration: (
      <div className='h-64 w-64 relative'>
        <div className='absolute inset-0 bg-purple-500/10 rounded-full'></div>
        <div className='absolute inset-0 transform translate-x-4 translate-y-4 bg-blue-500/10 rounded-full'></div>
      </div>
    ),
  },
];

const LandingPage = () => {
  const main = useRef();
  const headerRef = useRef();
  const sectionsRef = useRef([]);

  useEffect(() => {
    // Initial loading animation
    const tl = gsap.timeline();
    tl.to('.loading-screen', {
      height: 0,
      duration: 1.5,
      ease: 'power4.inOut',
      onComplete: () => {
        document.querySelector('.loading-screen').style.display = 'none';
      },
    });

    tl.from(headerRef.current, {
      y: 100,
      opacity: 0,
      duration: 0.8,
      ease: 'power4.out',
    });

    // Animate sections on scroll
    sectionsRef.current.forEach((section, i) => {
      if (i === 0) return; // Skip first section

      // Create circular reveal animation
      gsap.set(section, {
        clipPath: 'circle(0% at 50% 50%)',
      });

      ScrollTrigger.create({
        trigger: section,
        start: 'top bottom',
        end: 'top top',
        scrub: 1,
        onEnter: () => {
          gsap.to(section, {
            clipPath: 'circle(100% at 50% 50%)',
            duration: 1,
            ease: 'power4.inOut',
          });
        },
        onLeaveBack: () => {
          gsap.to(section, {
            clipPath: 'circle(0% at 50% 50%)',
            duration: 1,
            ease: 'power4.inOut',
          });
        },
      });

      // Animate content
      gsap.from(section.querySelector('.content-animation'), {
        y: 100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top center',
          end: 'top top',
          scrub: 1,
        },
      });
    });

    // Text reveal animation for the second section
    const revealText = document.querySelector('.reveal-text');
    if (revealText) {
      ScrollTrigger.create({
        trigger: revealText,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
        onUpdate: (self) => {
          gsap.to(revealText, {
            backgroundSize: `${self.progress * 100}% 100%`,
            duration: 0,
          });
        },
      });
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <div className='loading-screen fixed inset-0 bg-blue-600 z-50'></div>

      <header
        ref={headerRef}
        className='fixed top-0 w-full z-40 bg-white/90 backdrop-blur-sm'
      >
        <nav className='container mx-auto px-6 py-4 flex justify-between items-center'>
          <div className='text-2xl font-bold'>Map of Pi</div>
          <div className='flex gap-6'>
            <button className='px-6 py-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors'>
              Log In
            </button>
            <button className='px-6 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors'>
              Sign Up
            </button>
          </div>
        </nav>
      </header>

      <main ref={main} className='relative'>
        {sections.map((section, i) => (
          <section
            key={i}
            ref={(el) => (sectionsRef.current[i] = el)}
            className={`min-h-screen flex items-center justify-center ${
              i === 0 ? '' : 'relative'
            }`}
            style={{
              backgroundColor: section.bgColor,
              zIndex: 10 - i,
            }}
          >
            <div className='container mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center content-animation'>
              <div>
                <h2 className='text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-black bg-gradient-to-r from-blue-600 to-purple-600'>
                  {section.title}
                </h2>
                <h3 className='text-2xl md:text-3xl text-gray-600 mb-8'>
                  {section.subtitle}
                </h3>
                <p
                  className={`text-xl text-gray-500 max-w-2xl ${
                    i === 1 ? 'reveal-text' : ''
                  }`}
                >
                  {section.description}
                </p>
                {i === 0 && (
                  <button className='mt-8 px-8 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors'>
                    Get Started
                  </button>
                )}
              </div>
              <div className='flex justify-center'>{section.illustration}</div>
            </div>
          </section>
        ))}
      </main>
    </>
  );
};

export default LandingPage;
