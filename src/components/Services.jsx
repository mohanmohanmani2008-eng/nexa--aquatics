import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SERVICES } from '../data/servicesData';
import { Waves, ShieldCheck, Sparkles, LifeBuoy, Fish, Award, CheckCircle2, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  Waves: Waves,
  ShieldCheck: ShieldCheck,
  Sparkles: Sparkles,
  LifeBuoy: LifeBuoy,
  Fish: Fish,
  Award: Award
};

export default function Services() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.service-card', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        },
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative py-24 md:py-32 border-t border-cyan-500/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs uppercase tracking-widest font-mono">
            <Sparkles size={13} className="text-cyan-400" />
            <span>Master Crafts & Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Comprehensive <span className="text-shimmer">Aquatic Services</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            From custom low-iron Starphire aquascapes to medical-grade livestock quarantine and turnkey corporate installations in Krishnagiri and across South India.
          </p>
        </div>

        {/* Services 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((srv) => {
            const IconComponent = iconMap[srv.icon] || Waves;
            return (
              <div
                key={srv.id}
                className="service-card group rounded-3xl p-8 glass-card border border-cyan-500/15 hover:border-cyan-400/50 flex flex-col justify-between transition-all duration-500 relative overflow-hidden"
              >
                {/* Glow Accent Top Right */}
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-cyan-500/10 filter blur-2xl group-hover:bg-cyan-500/20 transition-all pointer-events-none" />

                <div className="space-y-4 relative z-10">
                  {/* Tag & Icon Row */}
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-300 shadow-[0_0_20px_rgba(0,242,254,0.2)]">
                      <IconComponent size={26} />
                    </div>
                    <span className="text-[11px] font-mono tracking-widest uppercase px-3 py-1 rounded-full bg-ocean-950/80 border border-cyan-500/20 text-cyan-300">
                      {srv.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-xs font-mono text-cyan-400/90 tracking-wider mt-0.5">
                      {srv.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {srv.description}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="space-y-2 pt-2 border-t border-cyan-500/15">
                    {srv.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 size={14} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* WhatsApp consultation link */}
                <div className="pt-6 mt-6 border-t border-cyan-500/15 relative z-10">
                  <a
                    href={`https://wa.me/918825775913?text=Hello%20Nexa%20Aquatics,%20I%20would%20like%20to%20consult%20regarding%20${encodeURIComponent(srv.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-xs font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors"
                  >
                    <span>Request Custom Quote</span>
                    <ArrowRight size={15} className="transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
