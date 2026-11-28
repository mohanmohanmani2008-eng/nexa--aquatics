import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { BUSINESS_INFO } from '../data/productsData';

export default function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);
  const [quickMsg, setQuickMsg] = useState('');

  const sendQuickChat = (e) => {
    e.preventDefault();
    const text = quickMsg.trim()
      ? encodeURIComponent(quickMsg)
      : encodeURIComponent('Hello Nexa Aquatics! I am interested in your wholesale and retail ornamental fish products.');
    window.open(`${BUSINESS_INFO.whatsappUrl}?text=${text}`, '_blank');
    setOpen(false);
    setQuickMsg('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Quick Chat Popup Card */}
      {open && (
        <div className="mb-3 w-80 sm:w-96 glass-panel rounded-3xl p-5 border border-emerald-500/40 shadow-2xl bg-ocean-950/95 backdrop-blur-2xl animate-in zoom-in-95 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-emerald-500/20">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <MessageCircle size={20} fill="currentColor" />
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-ocean-950 animate-pulse" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Nexa Aquatics Desk</h4>
                <p className="text-[10px] text-emerald-400 font-mono">Active on WhatsApp: +91 8825775913</p>
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="p-1.5 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              aria-label="Close chat bubble"
            >
              <X size={16} />
            </button>
          </div>

          <div className="py-4 space-y-2">
            <div className="bg-ocean-900/90 rounded-2xl p-3 border border-cyan-500/10 text-xs text-slate-200 leading-relaxed">
              Hello! 👋 Welcome to Nexa Aquatics (Thandarai, Tamil Nadu).
              <br /><br />
              Are you inquiring for <strong>Retail</strong> (individual order) or <strong>Wholesale</strong> (bulk crates for shops)? We're here to help!
            </div>

            <div className="flex gap-2 pt-1">
              <button
                type="button"
                onClick={() => setQuickMsg('Hi, I want to inquire about retail order for my aquarium.')}
                className="px-2.5 py-1 rounded-lg bg-ocean-800 hover:bg-cyan-500/20 border border-cyan-500/20 text-[11px] text-cyan-300"
              >
                Retail Order
              </button>
              <button
                type="button"
                onClick={() => setQuickMsg('Hi, I am interested in wholesale bulk crate pricing for my shop.')}
                className="px-2.5 py-1 rounded-lg bg-ocean-800 hover:bg-cyan-500/20 border border-cyan-500/20 text-[11px] text-cyan-300"
              >
                Wholesale Bulk
              </button>
            </div>
          </div>

          <form onSubmit={sendQuickChat} className="flex gap-2">
            <input
              type="text"
              value={quickMsg}
              onChange={(e) => setQuickMsg(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-3 py-2 rounded-xl bg-ocean-900 border border-emerald-500/30 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-emerald-400"
            />
            <button
              type="submit"
              className="p-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold transition-all shadow-md"
              aria-label="Send WhatsApp message"
            >
              <Send size={15} />
            </button>
          </form>
        </div>
      )}

      {/* Floating Action Badge Button */}
      <button
        onClick={() => setOpen(!open)}
        className="relative group p-4 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 text-slate-950 shadow-[0_0_25px_rgba(16,185,129,0.5)] hover:shadow-[0_0_35px_rgba(16,185,129,0.8)] transition-all duration-300 transform hover:scale-110 active:scale-95 flex items-center justify-center"
        aria-label="Open WhatsApp Chat"
      >
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-40 animate-ping group-hover:opacity-75" />
        <MessageCircle size={28} fill="currentColor" className="relative z-10" />
      </button>
    </div>
  );
}
