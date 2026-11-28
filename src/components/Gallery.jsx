import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GALLERY_ITEMS, GALLERY_CATEGORIES } from '../data/galleryData';
import { Sparkles, Maximize2, X, Eye } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All Exhibits');
  const [lightboxItem, setLightboxItem] = useState(null);
  const containerRef = useRef(null);

  const filteredItems = activeCategory === 'All Exhibits'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.gallery-tile', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        },
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out'
      });
    }, containerRef);

    return () => ctx.revert();
  }, [activeCategory]);

  return (
    <section
      id="gallery"
      ref={containerRef}
      className="relative py-24 md:py-32 border-t border-cyan-500/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs uppercase tracking-widest font-mono">
            <Sparkles size={13} className="text-cyan-400" />
            <span>Showcase & Installations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Underwater <span className="text-shimmer">Gallery of Living Art</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            A window into the mesmerizing installations and luxury biotope aquascapes created by the artisans at Nexa Aquatics.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {GALLERY_CATEGORIES.map((cat) => (
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

        {/* Gallery Grid with Hover Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxItem(item)}
              className="gallery-tile group cursor-pointer relative h-80 rounded-3xl overflow-hidden glass-panel border border-cyan-500/20 shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 filter brightness-90 group-hover:brightness-105"
                onError={(e) => {
                  e.target.src = '/assets/aquarium-hero.jpg';
                }}
              />

              {/* Shimmer overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-950 via-ocean-950/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

              {/* Hover Zoom Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-ocean-950/80 backdrop-blur-md border border-cyan-500/30 flex items-center justify-center text-cyan-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <Maximize2 size={16} />
              </div>

              {/* Tag Top Left */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-cyan-500/90 text-slate-950 font-bold shadow-md">
                  {item.category}
                </span>
              </div>

              {/* Bottom Details Text */}
              <div className="absolute bottom-0 inset-x-0 p-6 transform transition-transform duration-300">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-2 mt-1.5 leading-relaxed">
                  {item.description}
                </p>
                <p className="text-[11px] font-mono text-cyan-400 mt-2">
                  {item.specs}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full-Screen Lightbox Modal */}
      {lightboxItem && (
        <div
          onClick={() => setLightboxItem(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-ocean-950 border border-cyan-500/30 rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300"
          >
            <div className="relative max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={lightboxItem.image}
                alt={lightboxItem.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              <button
                onClick={() => setLightboxItem(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-black/70 hover:bg-black text-white transition-all border border-white/20"
                aria-label="Close lightbox"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-ocean-950">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
                  {lightboxItem.category}
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {lightboxItem.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  {lightboxItem.specs}
                </p>
              </div>

              <a
                href={`https://wa.me/918825775913?text=Hello%20Nexa%20Aquatics,%20I%20love%20the%20${encodeURIComponent(lightboxItem.title)}%20from%20your%20gallery.%20Can%20we%20build%20something%20similar%20for%20my%20space?`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 text-slate-950 font-bold text-xs tracking-wide shadow-lg hover:shadow-cyan-500/30 transition-all"
              >
                Inquire About Similar Design
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
