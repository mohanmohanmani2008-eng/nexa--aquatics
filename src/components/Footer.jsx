import React, { useState } from 'react';
import { BRAND_INFO } from '../data/websiteData';
import { Sparkles, Phone, MessageCircle, MapPin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const [logoError, setLogoError] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#02050c] border-t border-cyan-500/20 pt-16 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden text-slate-400">
      {/* Decorative underwater top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#22d3ee]" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info & Logo */}
          <div className="space-y-4">
            <div className="flex items-center">
              {!logoError ? (
                <div className="py-1 px-2.5 rounded-xl bg-[#040e1d] border border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.3)] inline-block">
                  <img
                    src={BRAND_INFO.logo}
                    alt="Nexa Aquatics Logo"
                    className="h-9 w-auto object-contain"
                    onError={() => setLogoError(true)}
                  />
                </div>
              ) : (
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-[#040e1d] border border-cyan-400/40 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-cyan-300" />
                  </div>
                  <span className="font-display text-xl font-bold tracking-wider text-white">
                    NEXA <span className="text-cyan-400">AQUATICS</span>
                  </span>
                </div>
              )}
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Discover the beauty beneath the surface. Dedicated to healthy ornamental fish, aquarium care products, wholesale excellence, and trusted services.
            </p>
            <div className="text-xs text-cyan-300/80 font-mono">
              Thandarai, Tamil Nadu 635110
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className="text-xs uppercase font-bold text-white tracking-widest mb-4">
              Explore Sanctuary
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-cyan-300 transition-colors">Home Experience</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-cyan-300 transition-colors">Fish Gallery</a>
              </li>
              <li>
                <a href="#products" className="hover:text-cyan-300 transition-colors">Aquarium Products</a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-300 transition-colors">Wholesale & Delivery</a>
              </li>
              <li>
                <a href="#location" className="hover:text-cyan-300 transition-colors">Map & Facility</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-300 transition-colors">Get In Touch</a>
              </li>
            </ul>
          </div>

          {/* Featured Offerings */}
          <div>
            <h4 className="text-xs uppercase font-bold text-white tracking-widest mb-4">
              Fish & Aquarium Products
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <a href="#gallery" className="hover:text-cyan-300 transition-colors font-medium text-cyan-200">
                  Full Moon Guppy
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <a href="#gallery" className="hover:text-cyan-300 transition-colors font-medium text-amber-200">
                  Goldfish
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <a href="#products" className="hover:text-cyan-300 transition-colors">
                  Fish Medicines
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                <a href="#products" className="hover:text-cyan-300 transition-colors">
                  Decorative Colour Stones
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                <a href="#products" className="hover:text-cyan-300 transition-colors">
                  Fish Food & Fish Bowls
                </a>
              </li>
              <li className="pt-1 text-xs text-cyan-400/90 font-semibold">
                ★ 10% OFF Special Wholesale Pricing
              </li>
            </ul>
          </div>

          {/* Direct Communication */}
          <div>
            <h4 className="text-xs uppercase font-bold text-white tracking-widest mb-4">
              Direct Contact
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href={`tel:${BRAND_INFO.phoneRaw}`}
                className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>{BRAND_INFO.phone}</span>
              </a>

              <a
                href={BRAND_INFO.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-400/20" />
                <span>WhatsApp Desk Active</span>
              </a>

              <div className="flex items-start gap-2.5 text-slate-400 text-xs pt-1">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{BRAND_INFO.location.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500 text-center sm:text-left">
            © {new Date().getFullYear()} NEXA AQUATICS. All rights reserved. Premium Ornamental Fish & Aquarium Products.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-cyan-300 text-xs font-semibold transition-all hover:bg-slate-850"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
