import React, { useState, useEffect } from 'react';
import { BRAND_INFO } from '../data/websiteData';
import { Menu, X, MessageCircle, Phone, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Services', href: '#services' },
    { name: 'Products', href: '#products' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#030914]/92 backdrop-blur-xl border-b border-cyan-500/20 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.85)]'
          : 'bg-gradient-to-b from-[#020712]/95 via-[#020712]/70 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo Anchor */}
          <a
            href="#home"
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="NEXA AQUATICS Home"
          >
            {/* Actual Logo Banner Display */}
            <div className="relative flex items-center">
              {!logoError ? (
                <div className="relative py-1 px-2.5 rounded-xl bg-[#040e1d]/90 border border-cyan-500/30 group-hover:border-cyan-400/60 shadow-[0_0_20px_rgba(34,211,238,0.25)] group-hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all duration-300">
                  <img
                    src={BRAND_INFO.logo}
                    alt="Nexa Aquatics Logo"
                    className="h-8 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    onError={() => setLogoError(true)}
                  />
                </div>
              ) : (
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-[#040e1d] border border-cyan-400/40 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-cyan-300" />
                  </div>
                  <span className="font-display text-xl sm:text-2xl font-black tracking-wider text-white">
                    NEXA <span className="text-cyan-400">AQUATICS</span>
                  </span>
                </div>
              )}
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 bg-[#051327]/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-cyan-500/20 shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-cyan-300 hover:bg-cyan-500/10 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${BRAND_INFO.phoneRaw}`}
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white rounded-lg border border-slate-700/60 hover:border-cyan-500/40 bg-slate-900/50 hover:bg-slate-850 transition-all duration-200"
              title="Call Nexa Aquatics"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>{BRAND_INFO.phone}</span>
            </a>

            <a
              href={BRAND_INFO.whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-wider font-bold text-white bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-lg shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:shadow-[0_0_30px_rgba(20,184,166,0.6)] hover:brightness-110 active:scale-95 transition-all duration-200"
              title="Connect on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={BRAND_INFO.whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 hover:text-white sm:hidden"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-900/80 border border-cyan-500/30 text-cyan-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#030a16]/98 border-b border-cyan-500/30 backdrop-blur-2xl px-6 pt-4 pb-6 mt-3 space-y-3 animate-in fade-in slide-in-from-top-4 duration-300 shadow-2xl">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-800 text-sm font-medium text-slate-200 hover:text-cyan-300 hover:border-cyan-500/40 hover:bg-cyan-950/30 transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800/80 flex flex-col gap-2.5">
            <a
              href={BRAND_INFO.whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-sm shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              Chat on WhatsApp ({BRAND_INFO.phone})
            </a>
            <a
              href={`tel:${BRAND_INFO.phoneRaw}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-900/80 border border-cyan-500/30 text-cyan-300 font-medium text-sm"
            >
              <Phone className="w-4 h-4" />
              Direct Call ({BRAND_INFO.phone})
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
