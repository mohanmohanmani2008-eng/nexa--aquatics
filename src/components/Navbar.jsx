import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/productsData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['home', 'retail', 'wholesale', 'breeds', 'services', 'gallery', 'location', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Retail', href: '#retail' },
    { name: 'Wholesale', href: '#wholesale' },
    { name: 'Fish Breeds', href: '#breeds' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-2.5 bg-ocean-950/90 backdrop-blur-xl border-b border-cyan-500/20 shadow-[0_10px_30px_rgba(0,0,0,0.6)]'
          : 'py-4 bg-ocean-950/40 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo on Left Side of Navbar (Original Nexa Aquatics Logo, no redesign, no stretch, no crop) */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 cursor-pointer group select-none"
            title="Nexa Aquatics"
          >
            <div className="flex items-center h-10 sm:h-12 md:h-14">
              <img
                src="/assets/nexa-logo.png"
                alt="Nexa Aquatics"
                className="h-9 sm:h-11 md:h-12 w-auto max-w-[210px] sm:max-w-[260px] object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_2px_12px_rgba(0,242,254,0.35)]"
                onError={(e) => {
                  // Fallback safe display
                  e.currentTarget.style.display = 'block';
                }}
              />
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 px-3 py-1.5 rounded-full bg-ocean-900/70 backdrop-blur-md border border-cyan-500/15">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 relative ${
                    isActive
                      ? 'text-cyan-300 bg-cyan-500/20 shadow-[0_0_12px_rgba(0,242,254,0.3)]'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-cyan-400 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Direct CTA Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-cyan-300 bg-ocean-900/80 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300"
            >
              <Phone size={13} className="text-cyan-400" />
              <span>{BUSINESS_INFO.phoneDisplay}</span>
            </a>

            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:shadow-[0_0_25px_rgba(16,185,129,0.55)] transform hover:-translate-y-0.5"
            >
              <MessageCircle size={15} fill="currentColor" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 sm:hidden"
              aria-label="WhatsApp"
            >
              <MessageCircle size={18} />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-ocean-900/90 border border-cyan-500/25 text-cyan-300 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 px-4 pb-6 pt-3 bg-ocean-950/95 backdrop-blur-2xl border-b border-cyan-500/20 shadow-2xl animate-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-semibold'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-cyan-500/20 flex flex-col gap-2.5">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-ocean-900 text-slate-200 border border-cyan-500/20 text-sm font-medium"
            >
              <Phone size={15} className="text-cyan-400" />
              <span>Call: {BUSINESS_INFO.phoneDisplay}</span>
            </a>
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20"
            >
              <MessageCircle size={17} fill="currentColor" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
