import React, { useState } from 'react';
import { BRAND_INFO } from '../data/websiteData';
import { Phone, MessageCircle, Send, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    itemChoice: 'Full Moon Guppy',
    orderType: 'Retail',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Build prefilled WhatsApp message from form inputs
    const inquiryText = `*NEXA AQUATICS WEBSITE ENQUIRY*\n` +
      `• *Name:* ${formData.name || 'Not provided'}\n` +
      `• *Phone:* ${formData.phone || 'Not provided'}\n` +
      `• *Interest / Item:* ${formData.itemChoice}\n` +
      `• *Order Category:* ${formData.orderType}\n` +
      `• *Message / Requirement:* ${formData.message || 'Please provide current rates and availability.'}`;

    const url = `${BRAND_INFO.whatsAppUrl}?text=${encodeURIComponent(inquiryText)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#020712] via-[#040e21] to-[#020712] overflow-hidden">
      {/* Decorative ambient backdrop */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs uppercase tracking-widest font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Connect With Us</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-cyan-400">Touch</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Have questions about Full Moon Guppy lines, Goldfish, aquarium medicines, decorative stones, feeds, or wholesale dispatch? We are here to help.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Quick Direct Contact Options */}
          <div className="lg:col-span-5 space-y-6">
            {/* Phone Card */}
            <div className="rounded-3xl glass-panel-glow p-8 border border-cyan-500/30 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-cyan-400 font-bold">
                  Direct Phone Call
                </span>
                <h3 className="text-2xl font-display font-bold text-white mt-1">
                  {BRAND_INFO.phone}
                </h3>
                <p className="text-slate-300 text-xs mt-1">
                  Instant verbal consultation for orders, fish care, and urgent dispatch queries.
                </p>
              </div>
              <a
                href={`tel:${BRAND_INFO.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-cyan-500/40 text-cyan-300 hover:text-white font-bold text-xs uppercase tracking-wider transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now (+91 8825775913)</span>
              </a>
            </div>

            {/* WhatsApp Card */}
            <div className="rounded-3xl glass-panel-glow p-8 border border-emerald-500/30 space-y-4 shadow-[0_0_30px_rgba(16,185,129,0.15)]">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300">
                <MessageCircle className="w-6 h-6 fill-emerald-300" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-emerald-400 font-bold">
                  Instant WhatsApp Desk
                </span>
                <h3 className="text-2xl font-display font-bold text-white mt-1">
                  Chat in Seconds
                </h3>
                <p className="text-slate-300 text-xs mt-1">
                  Send photos, request video clips of active stock, and get instant wholesale quotations.
                </p>
              </div>
              <a
                href={BRAND_INFO.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Open WhatsApp Chat</span>
              </a>
            </div>
          </div>

          {/* Interactive Enquiry Form */}
          <div className="lg:col-span-7 rounded-3xl glass-panel p-8 sm:p-10 border border-cyan-500/30 shadow-2xl">
            <h3 className="text-2xl font-display font-bold text-white mb-2">
              Send an Aquatic Enquiry
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mb-6">
              Fill out this form to connect directly with our dispatch manager on WhatsApp.
            </p>

            {submitted && (
              <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 text-xs flex items-center gap-3 mb-6">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>
                  Thank you! Your inquiry has been routed to WhatsApp. We will reply promptly with rates and active stock video!
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-cyan-300 uppercase tracking-wider mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white text-sm outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-cyan-300 uppercase tracking-wider mb-2">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white text-sm outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-cyan-300 uppercase tracking-wider mb-2">
                    Product / Fish of Interest
                  </label>
                  <select
                    value={formData.itemChoice}
                    onChange={(e) => setFormData({ ...formData, itemChoice: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white text-sm outline-none transition-all"
                  >
                    <optgroup label="Ornamental Fish">
                      <option value="Full Moon Guppy">Full Moon Guppy</option>
                      <option value="Goldfish">Goldfish</option>
                      <option value="Both Full Moon Guppy & Goldfish">Both Full Moon Guppy & Goldfish</option>
                    </optgroup>
                    <optgroup label="Aquarium Products">
                      <option value="Fish Medicines & Care Treatments">Fish Medicines & Care Treatments</option>
                      <option value="Aquarium Decorative Colour Stones">Aquarium Decorative Colour Stones</option>
                      <option value="Nutritional Fish Food">Nutritional Fish Food</option>
                      <option value="Small Fish Bowl (Transparent Glass)">Small Fish Bowl (Transparent Glass)</option>
                      <option value="Complete Aquarium Combo / Supplies">Complete Aquarium Combo / Supplies</option>
                    </optgroup>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-cyan-300 uppercase tracking-wider mb-2">
                    Order Category
                  </label>
                  <select
                    value={formData.orderType}
                    onChange={(e) => setFormData({ ...formData, orderType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white text-sm outline-none transition-all"
                  >
                    <option value="Retail (Personal Aquarium)">Retail (Personal Aquarium)</option>
                    <option value="Wholesale (Special 10% OFF Bulk)">Wholesale (Special 10% OFF Bulk)</option>
                    <option value="Commercial Shop Partnership">Commercial Shop Partnership</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-cyan-300 uppercase tracking-wider mb-2">
                  Message / Quantity Requirements
                </label>
                <textarea
                  rows="3"
                  placeholder="Tell us about the desired quantities, items, or delivery location..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white text-sm outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm tracking-wide shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(34,211,238,0.7)] flex items-center justify-center gap-2.5 active:scale-98 transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Submit Enquiry via WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
