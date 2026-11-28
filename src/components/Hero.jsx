import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, Sparkles, Shield, Award, CheckCircle2, MessageCircle, Boxes, ShoppingBag } from 'lucide-react';
import JumpingFishFeature from './JumpingFishFeature';
import { BUSINESS_INFO } from '../data/productsData';

export default function Hero() {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const subheadRef = useRef(null);
  const ctaRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.hero-badge', {
        y: -30,
        opacity: 0,
        duration: 0.8,
        delay: 0.2
      })
      .from('.hero-title-line', {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15
      }, '-=0.4')
      .from(subheadRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8
      }, '-=0.5')
      .from(ctaRef.current?.children || [], {
        y: 25,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1
      }, '-=0.4')
      .from(statsRef.current?.children || [], {
        scale: 0.85,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15
      }, '-=0.3');

    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen pt-28 pb-20 md:pt-36 md:pb-28 flex flex-col justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Cinematic Text Reveal */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Pill Badge */}
            <div className="hero-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase shadow-[0_0_15px_rgba(0,242,254,0.2)]">
              <Sparkles size={14} className="text-cyan-400 animate-spin" style={{ animationDuration: '6s' }} />
              <span>Wholesale & Retail Aquatic Sanctuary • Thandarai, Tamil Nadu</span>
            </div>

            {/* Main Headline with Text Reveal Stagger */}
            <h1
              ref={headlineRef}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.1]"
            >
              <span className="block hero-title-line text-white">
                Nexa Aquatics.
              </span>
              <span className="block hero-title-line font-display text-shimmer">
                Wholesale & Retail.
              </span>
              <span className="block hero-title-line text-slate-300 text-2xl sm:text-3xl md:text-4xl font-light mt-1">
                Ornamental Fish & Aquarium Supplies
              </span>
            </h1>

            {/* Subheading */}
            <p
              ref={subheadRef}
              className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl font-light leading-relaxed mx-auto lg:mx-0"
            >
              Your trusted partner for Full Moon Guppies, Fantail Goldfish, Small Fish Bowls, Fish Medicines, Colour Stones, and High-Nutrition Fish Foods. Supplying both individual hobbyists and bulk pet shop dealers across South India.
            </p>

            {/* Action CTA Buttons */}
            <div
              ref={ctaRef}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2"
            >
              <a
                href="#retail"
                onClick={(e) => scrollToSection(e, 'retail')}
                className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-slate-950 font-bold text-sm tracking-wide shadow-[0_0_30px_rgba(0,242,254,0.4)] hover:shadow-[0_0_40px_rgba(0,242,254,0.65)] transition-all duration-300 transform hover:-translate-y-1"
              >
                <ShoppingBag size={17} />
                <span>Explore Retail</span>
              </a>

              <a
                href="#wholesale"
                onClick={(e) => scrollToSection(e, 'wholesale')}
                className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-ocean-900/90 hover:bg-ocean-800 border border-cyan-500/40 text-cyan-300 hover:text-white font-bold text-sm tracking-wide shadow-[0_0_20px_rgba(0,242,254,0.2)] transition-all duration-300 transform hover:-translate-y-1"
              >
                <Boxes size={17} />
                <span>Wholesale Bulk Orders</span>
              </a>

              <a
                href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(
                  'Hello Nexa Aquatics, I am reaching out to enquire about your ornamental fish and aquarium products.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-400/40 text-emerald-300 hover:text-emerald-200 font-semibold text-sm tracking-wide transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.35)] transform hover:-translate-y-1"
              >
                <MessageCircle size={18} fill="currentColor" />
                <span>WhatsApp: {BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 pt-3 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-cyan-400" />
                <span>Wholesale & Retail Available</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Shield size={15} className="text-cyan-400" />
                <span>100% Live Arrival Guarantee</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award size={15} className="text-cyan-400" />
                <span>Thandarai Facility, Tamil Nadu</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Jumping Fish Simulator Tank */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <JumpingFishFeature />
          </div>
        </div>

        {/* Live Metrics / Stats Banner */}
        <div
          ref={statsRef}
          className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          <div className="glass-card rounded-2xl p-5 border border-cyan-500/15 text-center">
            <p className="text-3xl sm:text-4xl font-extrabold text-cyan-400 font-display">
              Retail
            </p>
            <p className="text-xs uppercase tracking-wider text-slate-400 mt-1">
              Individual Home Orders
            </p>
          </div>

          <div className="glass-card rounded-2xl p-5 border border-cyan-500/15 text-center">
            <p className="text-3xl sm:text-4xl font-extrabold text-cyan-400 font-display">
              Wholesale
            </p>
            <p className="text-xs uppercase tracking-wider text-slate-400 mt-1">
              Bulk Master Crates
            </p>
          </div>

          <div className="glass-card rounded-2xl p-5 border border-cyan-500/15 text-center">
            <p className="text-3xl sm:text-4xl font-extrabold text-cyan-400 font-display">
              Thandarai
            </p>
            <p className="text-xs uppercase tracking-wider text-slate-400 mt-1">
              Tamil Nadu 635110
            </p>
          </div>

          <div className="glass-card rounded-2xl p-5 border border-cyan-500/15 text-center">
            <p className="text-3xl sm:text-4xl font-extrabold text-cyan-400 font-display">
              100%
            </p>
            <p className="text-xs uppercase tracking-wider text-slate-400 mt-1">
              Live Arrival Assured
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
