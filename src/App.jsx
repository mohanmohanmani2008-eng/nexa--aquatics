import React from 'react';
import Navbar from './components/Navbar';
import HeroCanvas from './components/HeroCanvas';
import GallerySection from './components/GallerySection';
import ServicesSection from './components/ServicesSection';
import ProductsSection from './components/ProductsSection';
import LocationSection from './components/LocationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import UnderwaterBubbles from './components/UnderwaterBubbles';
import { MessageCircle, Phone } from 'lucide-react';
import { BRAND_INFO } from './data/websiteData';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#020712] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Ambient underwater floating bubble particles */}
      <UnderwaterBubbles />

      {/* Sticky Premium Navbar */}
      <Navbar />

      {/* Fullscreen Sticky Canvas Scroll Animation Hero */}
      <HeroCanvas />

      {/* Gallery Section: Displays Strictly ONLY Full Moon Guppy and Gold Fish */}
      <GallerySection />

      {/* Services Section: Delivery, Wholesale (10% OFF), Retail */}
      <ServicesSection />

      {/* Products Section: Full Moon Guppy & Gold Fish with WhatsApp Inquiry */}
      <ProductsSection />

      {/* Location Section: Address, Google Maps embed, Directions */}
      <LocationSection />

      {/* Contact Section: Phone, WhatsApp, Call button, Form */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Floating Quick Action Button for Mobile / Desktop Bottom-Right */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
        <a
          href={BRAND_INFO.whatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(16,185,129,0.5)] hover:shadow-[0_0_35px_rgba(16,185,129,0.8)] hover:scale-105 active:scale-95 transition-all duration-300"
          title="Direct WhatsApp Inquiry"
          aria-label="Direct WhatsApp Inquiry"
        >
          <MessageCircle className="w-5 h-5 fill-white" />
          <span className="hidden sm:inline">WhatsApp Us</span>
        </a>
      </div>
    </div>
  );
}
