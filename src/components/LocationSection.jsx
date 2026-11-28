import React from 'react';
import { MapPin, Navigation, Clock, Phone, MessageCircle, Sparkles, Building2, Store } from 'lucide-react';
import { BUSINESS_INFO } from '../data/productsData';

export default function LocationSection() {
  return (
    <section
      id="location"
      className="relative py-24 md:py-32 border-t border-cyan-500/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs uppercase tracking-widest font-mono">
            <Sparkles size={13} className="text-cyan-400" />
            <span>Facility & Showroom Location</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Visit <span className="text-shimmer">Nexa Aquatics</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Located on the Hosur–Denkanikottai Road in Thandarai, Tamil Nadu. Visit us for both individual retail selections and commercial wholesale bulk pickups.
          </p>
        </div>

        {/* Location Grid: Interactive Map + Showroom Information */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Map Embed Card */}
          <div className="lg:col-span-7 glass-panel rounded-3xl overflow-hidden border border-cyan-500/20 shadow-2xl min-h-[420px] flex flex-col">
            <div className="p-4 bg-ocean-950/80 border-b border-cyan-500/20 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-cyan-400" />
                <span className="text-sm font-bold text-white">Nexa Aquatics Facility</span>
                <span className="text-xs font-mono text-cyan-300">Thandarai, TN 635110</span>
              </div>
              <a
                href={BUSINESS_INFO.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-cyan-400 hover:text-white font-semibold transition-colors"
              >
                <Navigation size={13} />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Google Maps Embed iframe with exact location */}
            <div className="relative flex-1 w-full h-full min-h-[380px] bg-ocean-900">
              <iframe
                title="Nexa Aquatics Location Map"
                src={BUSINESS_INFO.mapEmbedUrl}
                className="w-full h-full border-0 filter contrast-125 brightness-90 hover:brightness-100 transition-all duration-300"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Location & Showroom Details */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            {/* Address & Hours Card */}
            <div className="glass-card rounded-3xl p-8 border border-cyan-500/20 space-y-6">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <MapPin size={24} />
                </div>
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl font-bold text-white font-display">
                    Nexa Aquatics
                  </h3>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 uppercase">
                    Wholesale & Retail
                  </span>
                </div>
                <p className="text-slate-200 text-sm font-medium leading-relaxed">
                  {BUSINESS_INFO.address}
                </p>
                <p className="text-xs text-slate-400">
                  {BUSINESS_INFO.road} • Near Hosur Junction
                </p>
                <div className="inline-block px-3 py-1 rounded-xl bg-ocean-950 text-[11px] font-mono text-cyan-400 border border-cyan-500/20">
                  Plus Code: {BUSINESS_INFO.plusCode}
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-cyan-500/15">
                <div className="flex items-start gap-3">
                  <Clock size={18} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-white uppercase tracking-wider">
                      Operating Hours (Wholesale & Retail)
                    </p>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Monday – Saturday: 9:00 AM – 8:30 PM<br />
                      Sunday: 9:30 AM – 7:30 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={18} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-white uppercase tracking-wider">
                      Contact & WhatsApp Desk
                    </p>
                    <div className="flex items-center gap-3 mt-1">
                      <a
                        href={`tel:${BUSINESS_INFO.phone}`}
                        className="text-xs text-cyan-300 hover:text-white font-mono"
                      >
                        {BUSINESS_INFO.phoneDisplay}
                      </a>
                      <span className="text-slate-600">•</span>
                      <a
                        href={BUSINESS_INFO.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-emerald-400 hover:text-emerald-300 font-mono font-semibold"
                      >
                        WhatsApp Active
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Get Directions & Open Map */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={BUSINESS_INFO.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5"
                >
                  <Navigation size={16} />
                  <span>Get Directions</span>
                </a>

                <a
                  href={BUSINESS_INFO.viewMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-ocean-900/90 hover:bg-ocean-800 text-slate-200 hover:text-white border border-cyan-500/30 text-xs font-semibold transition-all"
                >
                  <MapPin size={16} />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>

            {/* Business Features Mini Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card rounded-2xl p-4 border border-cyan-500/10 flex items-center gap-3">
                <Store size={22} className="text-cyan-400" />
                <div>
                  <p className="text-xs font-bold text-white">Retail Counter</p>
                  <p className="text-[11px] text-slate-400">Walk-in Hobbyists</p>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-4 border border-cyan-500/10 flex items-center gap-3">
                <Building2 size={22} className="text-cyan-400" />
                <div>
                  <p className="text-xs font-bold text-white">Wholesale Depot</p>
                  <p className="text-[11px] text-slate-400">Oxygen Bulk Packing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
