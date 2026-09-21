"use client";

import React, { useState, useEffect } from "react";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Check if the user has already accepted or declined cookies
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      // Small delay to allow the site to load first before animating in
      const timer = setTimeout(() => {
        setShow(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setShow(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie_consent", "declined");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full md:bottom-6 md:left-6 md:w-auto z-50 animate-in slide-in-from-bottom-10 fade-in duration-700 p-4">
      <div className="bg-brand-dark/95 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-2xl shadow-2xl max-w-sm flex flex-col gap-4 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-red/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex items-center gap-3">
          <span className="text-3xl">🍪</span>
          <h3 className="text-white font-heading text-xl">Cookies for Santa</h3>
        </div>
        
        <p className="text-white/70 text-sm leading-relaxed font-light">
          Just like Santa, our website uses cookies to ensure you have a magical and seamless booking experience. We promise they're the good kind!
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
          <button 
            onClick={handleAccept}
            className="w-full sm:w-auto px-6 py-3 bg-brand-red text-white text-xs uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-brand-red transition-colors duration-300 rounded-sm shadow-lg shadow-brand-red/20"
          >
            Accept Cookies
          </button>
          <button 
            onClick={handleDecline}
            className="w-full sm:w-auto px-4 py-2 text-white/50 text-xs uppercase tracking-wider font-medium hover:text-white transition-colors duration-300"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
