import React from 'react';
import { SERVICES_LIST, BRAND_INFO } from '../data/websiteData';
import { Truck, Percent, Sparkles, CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react';

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#030915] overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs uppercase tracking-widest font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Dedicated Aquatic Solutions</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
            Our Specialized <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-cyan-400">Services</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Whether you run a commercial pet store, breed exotic strains, or cherish a home aquarium, we provide end-to-end expertise.
          </p>
        </div>

        {/* 3 Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES_LIST.map((srv) => {
            const isWholesale = srv.id === 'wholesale';
            return (
              <div
                key={srv.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 ${
                  isWholesale
                    ? 'glass-panel-glow border-2 border-cyan-400/50 shadow-[0_0_35px_rgba(6,182,212,0.25)]'
                    : 'glass-panel border border-cyan-500/20 hover:border-cyan-400/40 hover:shadow-[0_15px_35px_rgba(0,0,0,0.6)]'
                }`}
              >
                {/* Popular / Discount Badge for Wholesale */}
                {isWholesale && (
                  <div className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 text-xs font-black uppercase tracking-wider shadow-lg">
                    10% OFF Special
                  </div>
                )}

                <div>
                  {/* Service Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-blue-600/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300 mb-6 shadow-inner">
                    {srv.id === 'delivery' && <Truck className="w-7 h-7" />}
                    {srv.id === 'wholesale' && <Percent className="w-7 h-7 text-amber-300" />}
                    {srv.id === 'retail' && <Sparkles className="w-7 h-7" />}
                  </div>

                  {/* Badge */}
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${
                    isWholesale 
                      ? 'bg-amber-400/10 text-amber-300 border border-amber-400/30' 
                      : 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/20'
                  }`}>
                    {srv.badge}
                  </span>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-1">
                    {srv.title}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-cyan-400/70 font-semibold mb-4">
                    {srv.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {srv.description}
                  </p>

                  {/* Feature Checklist */}
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-200 mb-8">
                    {srv.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Inquiry CTA */}
                <a
                  href={`${BRAND_INFO.whatsAppUrl}?text=${encodeURIComponent(`Hello Nexa Aquatics! I would like to inquire regarding your ${srv.title} service.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-xs sm:text-sm font-bold tracking-wide transition-all ${
                    isWholesale
                      ? 'bg-cyan-400 hover:bg-cyan-300 text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.5)]'
                      : 'bg-slate-900/80 hover:bg-slate-800 border border-cyan-500/30 text-cyan-200 hover:text-white'
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Inquire for {srv.title.split(' ')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
