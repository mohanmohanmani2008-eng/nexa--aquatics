import React from 'react';
import { BRAND_INFO } from '../data/websiteData';
import { MapPin, Navigation, Clock, ShieldAlert, Phone, Sparkles } from 'lucide-react';

export default function LocationSection() {
  return (
    <section id="location" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#020712] overflow-hidden">
      {/* Decorative ambient backdrop */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs uppercase tracking-widest font-semibold mb-4">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            <span>Visit Our Sanctuary</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
            Our Breeding & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-cyan-400">Retail Location</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Experience our healthy tanks firsthand. Located in Tamil Nadu with state-of-the-art oxygenated packaging facilities.
          </p>
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Information Column */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl glass-panel-glow p-8 sm:p-10 border border-cyan-500/30">
            <div className="space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest font-bold text-cyan-400">
                  Facility Address
                </span>
                <h3 className="mt-2 text-2xl sm:text-3xl font-display font-bold text-white">
                  NEXA AQUATICS
                </h3>
                <p className="mt-3 text-slate-200 text-base leading-relaxed flex items-start gap-2.5">
                  <MapPin className="w-5 h-5 text-cyan-400 shrink-0 mt-1" />
                  <span>{BRAND_INFO.location.address}</span>
                </p>
              </div>

              {/* Hours / Schedule */}
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span>Operational Hours</span>
                </div>
                <div className="text-xs sm:text-sm text-slate-300 space-y-1">
                  <p className="flex justify-between">
                    <span>Monday – Saturday:</span>
                    <span className="text-white font-medium">9:00 AM – 8:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="text-cyan-300 font-medium">10:00 AM – 6:00 PM</span>
                  </p>
                </div>
              </div>

              {/* Visiting Guidelines */}
              <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-800/40 text-xs text-cyan-200/90 flex items-start gap-3">
                <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  Wholesale bulk buyers and pet shop partners are recommended to call ahead for scheduled private viewing and lot reservations.
                </span>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="mt-8 space-y-3 pt-4 border-t border-slate-800">
              <a
                href={BRAND_INFO.location.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm tracking-wide shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(34,211,238,0.7)] transition-all"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions on Google Maps</span>
              </a>

              <a
                href={`tel:${BRAND_INFO.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2.5 py-3 px-6 rounded-2xl bg-slate-900/80 hover:bg-slate-800 border border-cyan-500/30 text-cyan-300 hover:text-white font-semibold text-sm transition-all"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>Call Before Visiting: {BRAND_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Google Maps Embed Column */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden glass-panel border border-cyan-500/30 shadow-2xl min-h-[380px] lg:min-h-full relative">
            <iframe
              title="Nexa Aquatics Location"
              src={BRAND_INFO.location.embedMapUrl}
              className="w-full h-full min-h-[420px] border-0 filter contrast-125 saturate-75 opacity-90 hover:opacity-100 transition-opacity duration-300"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
