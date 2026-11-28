import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PRODUCTS, BUSINESS_INFO } from '../data/productsData';
import { Boxes, Truck, ShieldCheck, MessageCircle, ArrowRight, PackageCheck, Layers, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function WholesaleSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.wholesale-reveal', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="wholesale"
      ref={containerRef}
      className="relative py-24 md:py-32 border-t border-cyan-500/10 bg-gradient-to-b from-ocean-950/60 via-ocean-900/40 to-ocean-950/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs uppercase tracking-widest font-mono">
            <Boxes size={13} className="text-cyan-400" />
            <span>Wholesale & Commercial Supply</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Bulk Orders for <span className="text-shimmer">Pet Shops & Resellers</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Direct breeder and importer wholesale supply dispatched from our facility at Thandarai, Tamil Nadu. Specialized packaging, high survival rates, and dependable volume fulfillment.
          </p>
        </div>

        {/* 3 Pillars of Nexa Wholesale */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="wholesale-reveal glass-card rounded-3xl p-7 border border-cyan-500/20">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
              <PackageCheck size={24} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Oxygen-Packed Master Crates</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Industrial grade medical oxygen packing in heavy-gauge poly bags nestled in insulated EPS thermocol crates for up to 48-hour transit viability.
            </p>
          </div>

          <div className="wholesale-reveal glass-card rounded-3xl p-7 border border-cyan-500/20">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">100% Live Arrival Guarantee</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Full replacement or credit note assurance on every bulk crate. Thorough pre-shipment fasting and parasite checks prevent transit fouling.
            </p>
          </div>

          <div className="wholesale-reveal glass-card rounded-3xl p-7 border border-cyan-500/20">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
              <Truck size={24} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Express South India Transit</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Direct highway connectivity from Hosur–Denkanikottai Road to Bangalore, Chennai, Salem, Coimbatore, Erode, and all major South Indian hubs.
            </p>
          </div>
        </div>

        {/* Wholesale Product MOQ Table / Grid */}
        <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-cyan-500/20 mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-cyan-500/15 mb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 block mb-1">
                Wholesale Catalog Overview
              </span>
              <h3 className="text-2xl font-bold text-white">
                Available Bulk Categories & Minimum Quantities
              </h3>
            </div>

            <a
              href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(
                'Hello Nexa Aquatics, I am an aquarium shop owner / wholesale buyer. Please share your wholesale price sheet and master crate availability.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/30 transition-all transform hover:-translate-y-0.5 self-start md:self-auto"
            >
              <MessageCircle size={16} fill="currentColor" />
              <span>Request Wholesale Price Sheet</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((prod) => (
              <div
                key={`wholesale-${prod.id}`}
                className="p-5 rounded-2xl bg-ocean-900/60 border border-cyan-500/15 hover:border-cyan-400/40 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-14 h-14 rounded-xl object-cover border border-cyan-500/20"
                    onError={(e) => {
                      e.target.src = '/assets/aquarium-hero.jpg';
                    }}
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white">{prod.name}</h4>
                    <span className="text-[10px] font-mono text-cyan-400">{prod.category}</span>
                  </div>
                </div>

                <div className="space-y-1.5 p-3 rounded-xl bg-ocean-950/80 border border-cyan-500/10">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 block">Wholesale Packing / MOQ:</span>
                  <p className="text-xs font-semibold text-cyan-300">{prod.wholesaleMoq}</p>
                </div>

                <a
                  href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(
                    `Hello Nexa Aquatics, I want to place a wholesale bulk inquiry for: "${prod.name}". Please provide MOQ crate pricing and dispatch schedule.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-2 px-3 rounded-xl bg-ocean-800 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 text-xs font-medium border border-cyan-500/20 transition-all"
                >
                  <span>Inquire Bulk Crate</span>
                  <ArrowRight size={13} />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Wholesale Call to Action Banner */}
        <div className="glass-card rounded-3xl p-8 sm:p-10 border border-emerald-500/30 bg-gradient-to-r from-emerald-950/40 via-ocean-950 to-ocean-900 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
              Dealer Network Partnerships
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Looking for a Steady Bulk Aquatic Supplier?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              We supply retail aquariums, pet chains, and breeders with healthy, screened livestock and fast-moving accessories weekly from Thandarai, Tamil Nadu.
            </p>
          </div>

          <a
            href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(
              'Hello Nexa Aquatics Wholesale Desk, I would like to establish a regular wholesale dealer account with you.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-slate-950 font-bold text-sm tracking-wide shadow-xl shadow-emerald-500/30 transition-all transform hover:-translate-y-0.5 whitespace-nowrap"
          >
            <MessageCircle size={18} fill="currentColor" />
            <span>Chat with Wholesale Desk</span>
          </a>
        </div>
      </div>
    </section>
  );
}
