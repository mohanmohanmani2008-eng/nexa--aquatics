import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FISH_BREEDS, CATEGORIES } from '../data/fishData';
import { MessageCircle, Info, Sparkles, Droplets, Thermometer, X, Check, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Breeds() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedFish, setSelectedFish] = useState(null);
  const containerRef = useRef(null);
  const gridRef = useRef(null);

  const filteredBreeds = activeCategory === 'All'
    ? FISH_BREEDS
    : FISH_BREEDS.filter(f => f.category === activeCategory);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.fish-card', {
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out'
      });
    }, containerRef);

    return () => ctx.revert();
  }, [activeCategory]);

  return (
    <section
      id="breeds"
      ref={containerRef}
      className="relative py-24 md:py-32 border-t border-cyan-500/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs uppercase tracking-widest font-mono">
            <Sparkles size={13} className="text-cyan-400" />
            <span>Exotic Curated Livestock</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Master-Grade <span className="text-shimmer">Ornamental Breeds</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Each specimen is hand-selected from premier pedigree lineages, fully quarantined, and ready to become the crown jewel of your aquarium.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-[0_0_20px_rgba(0,242,254,0.35)] scale-105'
                    : 'bg-ocean-900/70 text-slate-300 hover:text-white hover:bg-ocean-800/80 border border-cyan-500/15'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Fish Cards Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredBreeds.map((fish) => (
            <div
              key={fish.id}
              className="fish-card group relative rounded-3xl overflow-hidden glass-card border border-cyan-500/20 flex flex-col justify-between"
            >
              {/* Card Image with Hover Zoom Animation */}
              <div className="relative h-64 overflow-hidden bg-ocean-950">
                <img
                  src={fish.image}
                  alt={fish.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 filter brightness-95 group-hover:brightness-105"
                  onError={(e) => {
                    e.target.src = '/assets/aquarium-hero.jpg';
                  }}
                />
                
                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-950 via-transparent to-black/30 pointer-events-none" />

                {/* Badge Tag */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase bg-cyan-500/85 backdrop-blur-md text-slate-950 shadow-md">
                    {fish.badge}
                  </span>
                </div>

                {/* Care Level Tag */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-medium tracking-wider uppercase bg-ocean-950/80 backdrop-blur-md text-cyan-300 border border-cyan-500/30">
                    {fish.careLevel}
                  </span>
                </div>

                {/* Quick Hover Overlay Details Button */}
                <button
                  onClick={() => setSelectedFish(fish)}
                  className="absolute bottom-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-ocean-900/90 hover:bg-cyan-500 text-slate-200 hover:text-slate-950 text-xs font-semibold backdrop-blur-md border border-cyan-500/30 transition-all duration-300 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <Info size={14} />
                  <span>Specs</span>
                </button>
              </div>

              {/* Card Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[11px] font-mono text-cyan-400 tracking-wider uppercase">
                      {fish.category}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      {fish.origin}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {fish.name}
                  </h3>
                  <p className="text-xs italic text-slate-400 font-serif mb-3">
                    {fish.scientificName}
                  </p>

                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {fish.description}
                  </p>
                </div>

                {/* Water Parameters Compact Bar */}
                <div className="grid grid-cols-2 gap-2 p-2.5 rounded-xl bg-ocean-950/60 border border-cyan-500/10 text-[11px]">
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <Thermometer size={13} className="text-rose-400" />
                    <span>{fish.temperature}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <Droplets size={13} className="text-cyan-400" />
                    <span>pH {fish.ph}</span>
                  </div>
                </div>

                {/* WhatsApp & Modal CTA buttons */}
                <div className="flex items-center gap-2 pt-2 border-t border-cyan-500/15">
                  <a
                    href={`https://wa.me/918825775913?text=Hello%20Nexa%20Aquatics,%20I%20am%20interested%20in%20purchasing%20the%20${encodeURIComponent(fish.name)}.%20Please%20share%20availability%20and%20price.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500 text-emerald-300 hover:text-slate-950 border border-emerald-500/40 font-bold text-xs tracking-wide transition-all duration-300"
                  >
                    <MessageCircle size={15} fill="currentColor" />
                    <span>Enquire on WhatsApp</span>
                  </a>

                  <button
                    onClick={() => setSelectedFish(fish)}
                    className="p-2.5 rounded-xl bg-ocean-900/80 hover:bg-ocean-800 text-slate-300 hover:text-cyan-400 border border-cyan-500/20 transition-all"
                    title="View Full Specifications"
                  >
                    <Info size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fish Detail Modal */}
      {selectedFish && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-ocean-950 border border-cyan-500/30 rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300 max-h-[90vh] overflow-y-auto">
            {/* Modal Image Header */}
            <div className="relative h-64 sm:h-72 w-full bg-ocean-900">
              <img
                src={selectedFish.image}
                alt={selectedFish.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-950 via-transparent to-black/40" />

              <button
                onClick={() => setSelectedFish(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white transition-all"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="absolute bottom-4 left-6 right-6">
                <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase bg-cyan-500 text-slate-950">
                  {selectedFish.rarity}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2">
                  {selectedFish.name}
                </h3>
                <p className="text-xs sm:text-sm italic text-slate-300 font-serif">
                  {selectedFish.scientificName}
                </p>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-6">
              <p className="text-slate-300 text-sm leading-relaxed">
                {selectedFish.description}
              </p>

              {/* Water Parameters & Care Specs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 rounded-2xl bg-ocean-900/70 border border-cyan-500/15 text-center">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 block">Temperature</span>
                  <span className="text-sm font-bold text-rose-300 mt-1 block">{selectedFish.temperature}</span>
                </div>
                <div className="p-3 rounded-2xl bg-ocean-900/70 border border-cyan-500/15 text-center">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 block">pH Level</span>
                  <span className="text-sm font-bold text-cyan-300 mt-1 block">{selectedFish.ph}</span>
                </div>
                <div className="p-3 rounded-2xl bg-ocean-900/70 border border-cyan-500/15 text-center">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 block">Mature Size</span>
                  <span className="text-sm font-bold text-amber-300 mt-1 block">{selectedFish.size}</span>
                </div>
                <div className="p-3 rounded-2xl bg-ocean-900/70 border border-cyan-500/15 text-center">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 block">Care Level</span>
                  <span className="text-sm font-bold text-emerald-300 mt-1 block">{selectedFish.careLevel}</span>
                </div>
              </div>

              {/* Highlights List */}
              <div className="space-y-2">
                <h4 className="text-xs uppercase font-mono tracking-widest text-cyan-400">
                  Breed Distinctions
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {selectedFish.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-ocean-900/40 border border-cyan-500/10 text-xs text-slate-200">
                      <Check size={14} className="text-cyan-400 flex-shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Action CTA */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-cyan-500/20">
                <a
                  href={`https://wa.me/918825775913?text=Hello%20Nexa%20Aquatics,%20I%20want%20to%20reserve%20or%20inquire%20about%20the%20${encodeURIComponent(selectedFish.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-300 hover:to-teal-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/30 transition-all"
                >
                  <MessageCircle size={18} fill="currentColor" />
                  <span>Chat on WhatsApp (8825775913)</span>
                </a>

                <button
                  onClick={() => setSelectedFish(null)}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-ocean-900 hover:bg-ocean-800 text-slate-300 text-sm font-medium border border-cyan-500/20 transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
