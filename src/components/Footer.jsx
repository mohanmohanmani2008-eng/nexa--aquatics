import React from 'react';
import { Phone, MessageCircle, MapPin, ArrowUp, ShieldCheck, Navigation } from 'lucide-react';
import { BUSINESS_INFO } from '../data/productsData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-ocean-950 border-t border-cyan-500/20 pt-16 pb-12 overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-cyan-500/10 filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-cyan-500/15">
          {/* Brand Info with Original Logo */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center">
              <img
                src="/assets/nexa-logo.png"
                alt="Nexa Aquatics"
                className="h-12 w-auto object-contain filter drop-shadow-[0_2px_12px_rgba(0,242,254,0.3)]"
              />
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Nexa Aquatics – Premier Wholesale and Retail supplier of ornamental fish, aquariums, glass bowls, healthcare, color stones, and balanced aquatic feeds in Tamil Nadu.
            </p>

            <div className="flex items-center gap-2 pt-1 text-xs text-cyan-400">
              <ShieldCheck size={16} />
              <span>Wholesale & Retail Livestock & Supplies</span>
            </div>
          </div>

          {/* Core Products */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-300">
              Core Products
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>1. Full Moon Guppy (Broad-Tail)</li>
              <li>2. Fantail Goldfish (Wen-Head)</li>
              <li>3. Small Fish Bowl (Clear Glass)</li>
              <li>4. Fish Medicines (Broad Spectrum)</li>
              <li>5. Aquarium Colour Stones</li>
              <li>6. Fish Foods (Nutrition Pellets)</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-300">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#retail" className="hover:text-cyan-300 transition-colors">Retail Collection</a></li>
              <li><a href="#wholesale" className="hover:text-cyan-300 transition-colors">Wholesale Bulk</a></li>
              <li><a href="#breeds" className="hover:text-cyan-300 transition-colors">Fish Breeds</a></li>
              <li><a href="#services" className="hover:text-cyan-300 transition-colors">Aquascaping</a></li>
              <li><a href="#gallery" className="hover:text-cyan-300 transition-colors">Gallery</a></li>
              <li><a href="#location" className="hover:text-cyan-300 transition-colors">Location & Map</a></li>
            </ul>
          </div>

          {/* Contact Details with Exact Location */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-300">
              Location & Contact
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin size={15} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>
                  {BUSINESS_INFO.address}<br />
                  <span className="text-[11px] text-slate-400 font-mono">Plus Code: {BUSINESS_INFO.plusCode}</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={15} className="text-cyan-400 flex-shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-cyan-300 font-mono">
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle size={15} className="text-emerald-400 flex-shrink-0" />
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 font-mono font-semibold"
                >
                  WhatsApp: +91 8825775913
                </a>
              </div>
              <div className="pt-1">
                <a
                  href={BUSINESS_INFO.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-white font-medium"
                >
                  <Navigation size={12} />
                  <span>Get Driving Directions</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Nexa Aquatics. Wholesale & Retail. Thandarai, Tamil Nadu 635110.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-ocean-900 border border-cyan-500/20 text-cyan-300 hover:text-white hover:bg-ocean-800 transition-all"
            aria-label="Scroll to top"
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
