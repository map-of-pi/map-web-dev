import React from 'react';
import Header from './components/Header/Index';
import HeroSection from './components/HeroSection';
import Audience from './components/Audience';
import Services from './components/Services';
import Team from './components/Team';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className='relative'>
      <CustomCursor />
      <Header />
      <HeroSection />
      <Audience />
      <Services />
      <Team />
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
