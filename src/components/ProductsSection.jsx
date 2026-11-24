import React, { useState } from 'react';
import { AQUARIUM_PRODUCTS, BRAND_INFO } from '../data/websiteData';
import { MessageCircle, Sparkles, AlertCircle, Check, Eye, X, ShieldCheck } from 'lucide-react';

export default function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section id="products" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#030c1c] via-[#040e21] to-[#020712] overflow-hidden">
      {/* Decorative ambient lighting rays */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-600/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs uppercase tracking-widest font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Aquarium Essentials Showcase</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
            Aquarium <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-cyan-400">Products</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Explore our curated selection of high-grade fish health care, decorative colour stones, quality nutrition, and display bowls.
          </p>

          {/* Pricing transparency note - strictly no invented prices */}
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-900/20 border border-cyan-400/30 text-cyan-200 text-xs sm:text-sm">
            <AlertCircle className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>
              Live rates vary by package size and wholesale volume. Tap below for instant live WhatsApp enquiry.
            </span>
          </div>
        </div>

        {/* 4 Aquarium Product Cards Showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {AQUARIUM_PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="group relative rounded-3xl glass-panel border border-cyan-500/25 hover:border-cyan-400/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(6,182,212,0.25)] flex flex-col justify-between overflow-hidden"
            >
              {/* Product Top Header */}
              <div>
                {/* Product Photograph Container with object-contain to display complete packaging */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-gradient-to-b from-[#030914] via-[#05152a] to-[#040e21] p-4 flex items-center justify-center border-b border-cyan-500/15">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-105 drop-shadow-[0_12px_24px_rgba(0,0,0,0.7)]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040e21]/60 via-transparent to-transparent pointer-events-none" />

                  {/* Badge */}
                  <div className="absolute top-3.5 left-3.5 z-10">
                    <span className="px-3 py-1 rounded-full bg-[#030914]/90 backdrop-blur-md border border-cyan-400/35 text-cyan-300 text-[11px] font-bold tracking-wide shadow-md">
                      {product.badge}
                    </span>
                  </div>

                  {/* Quick Inspect Button */}
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="absolute bottom-3.5 right-3.5 z-10 p-2.5 rounded-full bg-cyan-500/85 hover:bg-cyan-400 text-slate-950 shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 backdrop-blur-md"
                    aria-label={`View details of ${product.name}`}
                    title="Quick Details"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Product Content */}
                <div className="p-6 space-y-3">
                  <span className="text-[10px] uppercase tracking-widest text-cyan-400/80 font-bold block">
                    {product.category}
                  </span>

                  <h3 className="text-lg font-display font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    {product.name}
                  </h3>

                  {/* Specified Description */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-1.5 pt-2 border-t border-slate-800/80">
                    {product.features.slice(0, 3).map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-cyan-100/90">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-tight">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer: WhatsApp Enquiry Button */}
              <div className="p-6 pt-0 space-y-2">
                <a
                  href={`${BRAND_INFO.whatsAppUrl}?text=${encodeURIComponent(product.whatsappEnquiryMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] active:scale-98 transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Details Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#01050d]/90 backdrop-blur-xl animate-in fade-in duration-300">
          <div className="relative w-full max-w-2xl rounded-3xl glass-panel-glow border border-cyan-400/40 overflow-hidden shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-950/80 hover:bg-slate-800 text-cyan-300 hover:text-white border border-cyan-500/30 transition-all"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[85vh] overflow-y-auto">
              <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-gradient-to-b from-[#030914] to-[#040e21] p-6 flex items-center justify-center">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="max-h-full max-w-full object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040e21] via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-6">
                  <span className="text-xs uppercase tracking-widest text-cyan-400 font-bold">
                    {selectedProduct.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                    {selectedProduct.name}
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-5">
                <div>
                  <h4 className="text-xs font-bold text-cyan-300 uppercase tracking-wider mb-2">
                    Overview
                  </h4>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {selectedProduct.detailedDescription || selectedProduct.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-cyan-300 uppercase tracking-wider mb-3">
                    Product Highlights
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedProduct.features.map((feat, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-2.5 text-xs text-cyan-100">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-800/40 text-xs text-cyan-200/90 flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>Wholesale bulk discounts and custom packaging options available for pet shops and breeders.</span>
                </div>

                <div className="pt-3 border-t border-slate-800 flex flex-wrap gap-3">
                  <a
                    href={`${BRAND_INFO.whatsAppUrl}?text=${encodeURIComponent(selectedProduct.whatsappEnquiryMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-sm shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Inquire Rates on WhatsApp</span>
                  </a>
                  <button
                    onClick={() => setSelectedProduct(null)}
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
