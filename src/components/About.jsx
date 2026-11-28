import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, HeartHandshake, Eye, Award, Sparkles, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-reveal', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.2,
        ease: 'power3.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden border-t border-cyan-500/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs uppercase tracking-widest font-mono">
            <Sparkles size={13} className="text-cyan-400" />
            <span>The Nexa Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Elevating Aquatic Life into <span className="text-shimmer">Living Art</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Headquartered in Krishnagiri, Tamil Nadu, Nexa Aquatics is more than an ornamental fish gallery—it is a specialized sanctuary dedicated to biological perfection, ethical breeding, and bespoke biotope design.
          </p>
        </div>

        {/* Grid: Story Card + Visual Highlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Left Narrative */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-8 sm:p-10 flex flex-col justify-between space-y-6 border border-cyan-500/20 relative overflow-hidden">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-cyan-400 text-sm font-semibold tracking-wider uppercase font-mono">
                <MapPin size={16} />
                <span>Krishnagiri, Tamil Nadu, India</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                Where Passion Meets Scientific Fish Keeping
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Founded with a singular vision to provide hobbyists, interior architects, and serious collectors with show-quality ornamental fish, Nexa Aquatics pairs traditional fish-husbandry wisdom with state-of-the-art filtration and sterile quarantine tanks.
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Every specimen in our care—whether an Indonesian Chili Red Arowana, a high-grade Thai Kamfa Flowerhorn, or fragile wild Altum Angels—undergoes our rigorous 21-day medical acclimatization before reaching your tank.
              </p>
            </div>

            {/* Core Values / Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-cyan-500/20">
              <div className="space-y-1">
                <p className="text-xl font-bold text-cyan-300 font-display">0%</p>
                <p className="text-xs text-slate-400">Pathogen Tolerance</p>
              </div>
              <div className="space-y-1">
                <p className="text-xl font-bold text-cyan-300 font-display">24/7</p>
                <p className="text-xs text-slate-400">Biological Filtration</p>
              </div>
              <div className="space-y-1">
                <p className="text-xl font-bold text-cyan-300 font-display">100%</p>
                <p className="text-xs text-slate-400">Pedigree Verified</p>
              </div>
            </div>
          </div>

          {/* Right Visual Image Card */}
          <div className="lg:col-span-5 relative group rounded-3xl overflow-hidden glass-panel border border-cyan-500/20 min-h-[380px]">
            <img
              src="/assets/aquarium-hero.jpg"
              alt="Nexa Aquatics Facility"
              className="w-full h-full object-cover transform duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ocean-950 via-ocean-950/40 to-transparent p-8 flex flex-col justify-end">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-1">
                Sanctuary Atmosphere
              </span>
              <h4 className="text-xl font-bold text-white mb-2">
                Pristine Water. Unmatched Vitality.
              </h4>
              <p className="text-xs text-slate-300 line-clamp-2">
                Experience crystal clear waters illuminated by customized full-spectrum lighting and natural botanical infusions.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="about-reveal glass-card rounded-2xl p-6 border border-cyan-500/15 hover:border-cyan-400/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
              <ShieldCheck size={24} />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">21-Day Medical Quarantine</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Dewormed, parasite-free, and thoroughly transitioned to commercial and frozen diets before hand-off.
            </p>
          </div>

          <div className="about-reveal glass-card rounded-2xl p-6 border border-cyan-500/15 hover:border-cyan-400/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
              <HeartHandshake size={24} />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Lifetime Husbandry Advice</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Direct access to our Krishnagiri aquatics team for water chemistry, feeding regimes, and disease prevention.
            </p>
          </div>

          <div className="about-reveal glass-card rounded-2xl p-6 border border-cyan-500/15 hover:border-cyan-400/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
              <Eye size={24} />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Show-Grade Aesthetics</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Carefully chosen anatomical posture, symmetrical finnage, vibrant pearling, and radiant color pigmentation.
            </p>
          </div>

          <div className="about-reveal glass-card rounded-2xl p-6 border border-cyan-500/15 hover:border-cyan-400/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
              <Award size={24} />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Custom Tank Engineering</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Ultra-clear low iron Starphire glass and German silicone for seamless, distortion-free underwater views.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
