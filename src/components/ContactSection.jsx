import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Send, CheckCircle2, Sparkles, Building2, Store } from 'lucide-react';
import { BUSINESS_INFO } from '../data/productsData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    inquiryType: 'Retail (Individual Customer)',
    productInterest: 'Full Moon Guppy',
    quantity: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const text = `Hello Nexa Aquatics (%2B91 8825775913),%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Order Type:* ${encodeURIComponent(formData.inquiryType)}%0A*Product:* ${encodeURIComponent(formData.productInterest)}%0A*Quantity / Estimate:* ${encodeURIComponent(formData.quantity || 'Standard')}%0A*Notes:* ${encodeURIComponent(formData.message || 'Please share current price and dispatch details.')}`;

    window.open(`${BUSINESS_INFO.whatsappUrl}?text=${text}`, '_blank');
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 border-t border-cyan-500/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs uppercase tracking-widest font-mono">
            <Sparkles size={13} className="text-cyan-400" />
            <span>Direct WhatsApp Desk</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Connect with <span className="text-shimmer">Nexa Aquatics</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Whether you need a single pair of Full Moon Guppies for your home aquarium or bulk thermocol master crates for your pet shop, our team at Thandarai is available 7 days a week on WhatsApp and call.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Direct Contact Details & WhatsApp Callout */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white font-display">
                Wholesale & Retail Inquiries
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                We respond promptly to phone calls and WhatsApp messages. Get live photos, videos, and personalized advice for all 6 core products and livestock.
              </p>

              {/* Direct WhatsApp Box */}
              <div className="glass-card rounded-3xl p-6 border border-emerald-500/30 bg-gradient-to-br from-emerald-950/40 via-ocean-950 to-ocean-900 shadow-xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                    <MessageCircle size={24} fill="currentColor" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">Nexa WhatsApp Desk</h4>
                    <p className="text-xs text-emerald-400 font-mono">Active: +91 8825775913</p>
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Tap below to start an instant chat. We share high-definition live videos and dispatch timelines immediately.
                </p>
                <a
                  href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(
                    'Hello Nexa Aquatics, I am reaching out from your website to enquire about your products.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-2xl bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-300 hover:to-teal-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/30 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <MessageCircle size={16} fill="currentColor" />
                  <span>Chat on WhatsApp (+91 8825775913)</span>
                </a>
              </div>

              {/* Quick Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="glass-card rounded-2xl p-5 border border-cyan-500/20 hover:border-cyan-400/50 transition-all block group"
                >
                  <Phone size={20} className="text-cyan-400 mb-2 group-hover:scale-110 transition-transform" />
                  <p className="text-xs text-slate-400 uppercase tracking-wider">Direct Call</p>
                  <p className="text-sm font-bold text-white font-mono mt-0.5">{BUSINESS_INFO.phoneDisplay}</p>
                </a>

                <div className="glass-card rounded-2xl p-5 border border-cyan-500/20">
                  <MapPin size={20} className="text-cyan-400 mb-2" />
                  <p className="text-xs text-slate-400 uppercase tracking-wider">Facility Address</p>
                  <p className="text-xs font-bold text-white mt-0.5 leading-snug">Thandarai, TN 635110</p>
                </div>
              </div>
            </div>

            {/* Trust note */}
            <div className="flex items-center gap-2 text-xs text-slate-400 pt-4 border-t border-cyan-500/15">
              <CheckCircle2 size={15} className="text-cyan-400 flex-shrink-0" />
              <span>Wholesale Crates & Retail Courier Delivery across Tamil Nadu, Bangalore & South India.</span>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-cyan-500/25 relative overflow-hidden">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white">
                  Send an Inquiry
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Select whether you are ordering retail or wholesale. Your message will be formatted directly for WhatsApp dispatch.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full px-4 py-3 rounded-xl bg-ocean-900/80 border border-cyan-500/20 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 9876543210"
                      className="w-full px-4 py-3 rounded-xl bg-ocean-900/80 border border-cyan-500/20 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      Customer Type
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-ocean-900/80 border border-cyan-500/20 text-white text-sm focus:outline-none focus:border-cyan-400 transition-all"
                    >
                      <option value="Retail (Individual Customer)">Retail (Individual Customer)</option>
                      <option value="Wholesale (Pet Shop / Dealer / Bulk)">Wholesale (Pet Shop / Dealer / Bulk)</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      Product of Interest
                    </label>
                    <select
                      value={formData.productInterest}
                      onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-ocean-900/80 border border-cyan-500/20 text-white text-sm focus:outline-none focus:border-cyan-400 transition-all"
                    >
                      <option value="Full Moon Guppy">1. Full Moon Guppy</option>
                      <option value="Fantail Goldfish">2. Fantail Goldfish</option>
                      <option value="Small Fish Bowl">3. Small Fish Bowl</option>
                      <option value="Fish Medicines">4. Fish Medicines</option>
                      <option value="Aquarium Colour Stones">5. Aquarium Colour Stones</option>
                      <option value="Fish Foods">6. Fish Foods</option>
                      <option value="Multiple Products / Complete Setup">Multiple Products / Complete Setup</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Quantity / Estimate (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    placeholder="e.g. 2 Pairs (Retail) or 1 Crate / 50 Pairs (Wholesale)"
                    className="w-full px-4 py-3 rounded-xl bg-ocean-900/80 border border-cyan-500/20 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Message / Delivery Location
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Enter your town or city, preferred delivery, or questions..."
                    className="w-full px-4 py-3 rounded-xl bg-ocean-900/80 border border-cyan-500/20 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-slate-950 font-bold text-sm tracking-wide shadow-[0_0_25px_rgba(0,242,254,0.4)] hover:shadow-[0_0_35px_rgba(0,242,254,0.6)] transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <Send size={16} />
                  <span>Send Inquiry to WhatsApp (+91 8825775913)</span>
                </button>
              </form>

              {submitted && (
                <div className="mt-4 p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center gap-2 text-xs text-emerald-300 animate-in fade-in">
                  <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0" />
                  <span>Redirecting to WhatsApp (+91 8825775913)... If not opened, click the WhatsApp button directly.</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
