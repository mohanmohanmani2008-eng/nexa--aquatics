import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PRODUCTS, BUSINESS_INFO } from '../data/productsData';
import { MessageCircle, ShoppingBag, CheckCircle2, Sparkles, HeartHandshake } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function RetailSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.retail-card', {
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
  }, []);

  return (
    <section
      id="retail"
      ref={containerRef}
      className="relative py-24 md:py-32 border-t border-cyan-500/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs uppercase tracking-widest font-mono">
            <ShoppingBag size={13} className="text-cyan-400" />
            <span>Retail Collection • For Hobbyists & Home Aquariums</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Curated <span className="text-shimmer">Retail Products</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Premium live ornamental fish, crystal glassware, and daily aquatic essentials for individual hobbyists. Each specimen is hand-selected and acclimatized at our Thandarai facility.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ocean-900/80 border border-cyan-500/20 text-xs text-slate-300">
            <HeartHandshake size={14} className="text-cyan-400" />
            <span>Inquire directly for live stock availability, sizes & current pricing</span>
          </div>
        </div>

        {/* 6 Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="retail-card group rounded-3xl overflow-hidden glass-card border border-cyan-500/20 flex flex-col justify-between transition-all duration-500 hover:border-cyan-400/50 hover:shadow-[0_20px_40px_-15px_rgba(0,242,254,0.25)]"
            >
              {/* Image Area with Zoom & Badges */}
              <div className="relative h-64 overflow-hidden bg-ocean-950">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 filter brightness-95 group-hover:brightness-105"
                  onError={(e) => {
                    e.target.src = '/assets/aquarium-hero.jpg';
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-ocean-950 via-transparent to-black/30 pointer-events-none" />

                {/* Badge Top Left */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase bg-cyan-500 text-slate-950 shadow-md">
                    {product.badge}
                  </span>
                </div>

                {/* Category Top Right */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase bg-ocean-950/80 text-cyan-300 border border-cyan-500/30 backdrop-blur-md">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400/90 tracking-wide mt-0.5">
                    {product.tagline}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed mt-2.5 line-clamp-3">
                    {product.description}
                  </p>
                </div>

                {/* Bullet Highlights */}
                <ul className="space-y-1.5 py-2 border-y border-cyan-500/15">
                  {product.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 size={13} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Availability Spec Note */}
                <div className="p-2.5 rounded-xl bg-ocean-950/80 border border-cyan-500/10 text-[11px] text-slate-300 flex items-center justify-between">
                  <span className="text-slate-400">Retail Pack:</span>
                  <span className="font-medium text-cyan-300">{product.retailAvailability}</span>
                </div>

                {/* WhatsApp Action Button (No invented prices, direct inquiry) */}
                <div className="pt-2">
                  <a
                    href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(
                      `Hello Nexa Aquatics, I am interested in purchasing "${product.name}" for retail/personal use. Please share current availability and price.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    <MessageCircle size={16} fill="currentColor" />
                    <span>Enquire Price on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
