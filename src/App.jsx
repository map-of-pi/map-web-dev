import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className='relative'>
      <CustomCursor />
      <Header />
      <HeroSection />
      <FeaturesSection />
      <TeamSection />
      <Footer />
    </div>
  );
}

export default App;

// import LandingPage from './pages/LandingPage';

// function App() {
//   return <LandingPage />;
// }

// export default App;
