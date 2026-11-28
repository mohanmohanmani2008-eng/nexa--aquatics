import React from 'react';
import Navbar from './components/Navbar';
import BackgroundAquarium from './components/BackgroundAquarium';
import Hero from './components/Hero';
import RetailSection from './components/RetailSection';
import WholesaleSection from './components/WholesaleSection';
import Breeds from './components/Breeds';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import LocationSection from './components/LocationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="relative min-h-screen text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
      {/* Continuous Animated Underwater Background (Swimming Fish & Floating Bubbles) */}
      <BackgroundAquarium />

      {/* Main Foreground Content */}
      <div className="relative z-10">
        <Navbar />
        
        <main>
          <Hero />
          <RetailSection />
          <WholesaleSection />
          <Breeds />
          <About />
          <Services />
          <Gallery />
          <LocationSection />
          <ContactSection />
        </main>

        <Footer />
        <FloatingWhatsApp />
      </div>
    </div>
  );
}
