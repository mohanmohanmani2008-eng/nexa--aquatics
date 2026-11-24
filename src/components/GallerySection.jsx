import React, { useState } from 'react';
import { GALLERY_FISH, BRAND_INFO } from '../data/websiteData';
import { Eye, MessageCircle, Sparkles, X, Check } from 'lucide-react';

export default function GallerySection() {
  const [selectedFish, setSelectedFish] = useState(null);

  return (
    <section id="gallery" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#020712] via-[#051329] to-[#030c1c] overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs uppercase tracking-widest font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Curated Fish Gallery</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
            Exquisite <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-cyan-400">Fish Varieties</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Discover our two premier ornamental species — pure linebred Full Moon Guppies and graceful Goldfish, photographed directly from our healthy breeding stocks.
          </p>
        </div>

        {/* Gallery Cards - STRICTLY ONLY TWO CATEGORIES: Full Moon Guppy & Goldfish */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {GALLERY_FISH.map((fish) => {
            return (
              <div
                key={fish.id}
                className="group relative rounded-3xl overflow-hidden glass-panel border border-cyan-500/25 hover:border-cyan-400/60 transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:shadow-[0_25px_60px_rgba(6,182,212,0.25)] flex flex-col"
              >
                {/* Image Container with Cinematic Zoom & Precise Framing */}
                <div className="relative h-80 sm:h-96 w-full overflow-hidden bg-slate-950 flex items-center justify-center">
                  <img
                    src={fish.image}
                    alt={fish.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Gradient vignette overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040e1d] via-[#040e1d]/30 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#040e1d]/30 via-transparent to-transparent" />

                  {/* Category tag badge */}
                  <div className="absolute top-5 left-5">
                    <span className="px-3.5 py-1.5 rounded-full bg-[#030a16]/85 backdrop-blur-md border border-cyan-400/40 text-cyan-300 text-xs font-semibold tracking-wide shadow-lg flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-cyan-400" />
                      {fish.category}
                    </span>
                  </div>

                  {/* Quick inspect button */}
                  <button
                    onClick={() => setSelectedFish(fish)}
                    className="absolute bottom-5 right-5 p-3 rounded-full bg-cyan-500/85 hover:bg-cyan-400 text-slate-950 shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 backdrop-blur-md"
                    aria-label={`View details of ${fish.name}`}
                    title="View Specimen Profile"
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                </div>

                {/* Card Content Details */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex items-baseline justify-between flex-wrap gap-2 mb-2">
                      <h3 className="text-2xl sm:text-3xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {fish.name}
                      </h3>
                      <span className="text-xs italic text-cyan-300/80 font-mono">
                        {fish.scientificName}
                      </span>
                    </div>

                    <p className="text-slate-300 text-sm leading-relaxed">
                      {fish.description}
                    </p>

                    {/* Highlights list */}
                    <div className="mt-5 space-y-2">
                      {fish.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-cyan-100/90">
                          <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quick specs pill row */}
                  <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                    <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
                      <span className="block text-slate-400 text-[10px] uppercase font-semibold">Water Temp</span>
                      <span className="font-bold text-cyan-300">{fish.specs.waterTemp}</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
                      <span className="block text-slate-400 text-[10px] uppercase font-semibold">pH Range</span>
                      <span className="font-bold text-cyan-300">{fish.specs.phLevel}</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-center col-span-2 sm:col-span-1">
                      <span className="block text-slate-400 text-[10px] uppercase font-semibold">Care Level</span>
                      <span className="font-bold text-cyan-300 truncate block">{fish.specs.careLevel.split(' ')[0]}</span>
                    </div>
                  </div>

                  {/* Card CTA Buttons */}
                  <div className="flex items-center gap-3 pt-2">
                    <button
                      onClick={() => setSelectedFish(fish)}
                      className="flex-1 py-3 px-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-semibold tracking-wide transition-all text-center"
                    >
                      View Profile
                    </button>

                    <a
                      href={`${BRAND_INFO.whatsAppUrl}?text=${encodeURIComponent(fish.whatsappEnquiryMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white text-xs sm:text-sm font-bold tracking-wide shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>WhatsApp Inquiry</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox / Details Modal */}
      {selectedFish && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#01050d]/90 backdrop-blur-xl animate-in fade-in duration-300">
          <div className="relative w-full max-w-3xl rounded-3xl glass-panel-glow border border-cyan-400/40 overflow-hidden shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedFish(null)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-950/80 hover:bg-slate-800 text-cyan-300 hover:text-white border border-cyan-500/30 transition-all"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[85vh] overflow-y-auto">
              <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-slate-950 flex items-center justify-center">
                <img
                  src={selectedFish.image}
                  alt={selectedFish.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040e1d] to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <span className="text-xs uppercase tracking-widest text-cyan-400 font-bold">
                    {selectedFish.category}
                  </span>
                  <h3 className="text-3xl font-display font-bold text-white">
                    {selectedFish.name}
                  </h3>
                  <p className="text-xs italic text-cyan-200 font-mono">
                    {selectedFish.scientificName}
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-cyan-300 uppercase tracking-wider mb-2">
                    Specimen Profile
                  </h4>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {selectedFish.description}
                  </p>
                </div>

                {/* Biological Parameters */}
                <div>
                  <h4 className="text-sm font-semibold text-cyan-300 uppercase tracking-wider mb-3">
                    Aquarium Parameters & Care Standards
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                    <div className="p-3 rounded-xl bg-slate-900/80 border border-cyan-900/40">
                      <span className="text-slate-400 block mb-1">Water Temp</span>
                      <span className="text-cyan-200 font-bold">{selectedFish.specs.waterTemp}</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900/80 border border-cyan-900/40">
                      <span className="text-slate-400 block mb-1">pH Level</span>
                      <span className="text-cyan-200 font-bold">{selectedFish.specs.phLevel}</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900/80 border border-cyan-900/40">
                      <span className="text-slate-400 block mb-1">Care Level</span>
                      <span className="text-cyan-200 font-bold">{selectedFish.specs.careLevel}</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900/80 border border-cyan-900/40 col-span-2 sm:col-span-3">
                      <span className="text-slate-400 block mb-1">Recommended Diet</span>
                      <span className="text-cyan-200 font-medium">{selectedFish.specs.diet}</span>
                    </div>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-3">
                  <a
                    href={`${BRAND_INFO.whatsAppUrl}?text=${encodeURIComponent(selectedFish.whatsappEnquiryMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-sm shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Inquire on WhatsApp Now</span>
                  </a>
                  <button
                    onClick={() => setSelectedFish(null)}
                    className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-sm transition-all"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
