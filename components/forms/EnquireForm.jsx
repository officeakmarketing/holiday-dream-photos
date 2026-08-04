"use client";

import React, { useState } from "react";
import Lottie from "lottie-react";
import santaSleigh from "../../public/animations/santa sleigh.json";
import { Sparkles, Check } from "lucide-react";

const EnquireForm = React.memo(function EnquireForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500); 
  };

  const inputClass = "w-full bg-[#f4f4f4] border border-transparent focus:border-brand-red focus:bg-white rounded-none py-4 px-5 text-brand-dark text-base outline-none transition-colors duration-300 placeholder:text-brand-dark/40 hover:bg-[#eaeaea] shadow-none";
  const labelClass = "block text-sm text-brand-dark/80 font-bold mb-2 ml-1";

  return (
    <div className="relative bg-white rounded-3xl shadow-[0_30px_80px_-20px_rgba(17,49,34,0.15)] border border-brand-dark/5 overflow-hidden w-full group flex flex-col lg:flex-row">
      
      {/* LEFT COLUMN: CINEMATIC IMAGE & TEXT */}
      <div className="w-full lg:w-5/12 relative min-h-[300px] lg:min-h-full flex flex-col justify-end p-10 md:p-14 overflow-hidden">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/background3.jpg" 
            alt="Private Event Magic" 
            className="w-full h-full object-cover scale-105"
          />
          {/* Gradients to blend and darken */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-brand-dark/40 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-brand-red/10 mix-blend-overlay"></div>
        </div>


        {/* Content */}
        <div className="relative z-20 mt-auto">
          <h3 className="font-heading text-4xl md:text-5xl text-white leading-tight mb-4 drop-shadow-lg">
            Let's create something unforgettable.
          </h3>
          <p className="text-white/70 font-light text-base md:text-lg leading-relaxed max-w-sm">
            Fill in the details for your event, and our concierge team will reach out within 24 hours to secure your date.
          </p>
        </div>
      </div>

      {/* RIGHT COLUMN: THE FORM */}
      <div className="w-full lg:w-7/12 p-8 md:p-12 lg:p-16 relative z-20 bg-gradient-to-b from-brand-light/30 to-white">
        
        {/* Top accent line (only visible on mobile, since layout changes on desktop) */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-brand-red lg:hidden"></div>
        {/* Left accent line (visible on desktop) */}
        <div className="hidden lg:block absolute top-0 left-0 w-1.5 h-full bg-brand-red"></div>

        {submitted ? (
          <div className="flex flex-col items-center justify-center w-full h-full min-h-[450px] animate-in fade-in duration-1000 relative">
            <div className="w-80 h-40 mb-2 pointer-events-none absolute top-10">
              <Lottie animationData={santaSleigh} loop={false} />
            </div>
            
            <div className="mt-32 flex flex-col items-center">
              <div className="w-20 h-20 bg-brand-red rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(200,16,46,0.3)] mb-8 animate-in zoom-in duration-500 delay-300 fill-mode-both">
                <Check className="w-10 h-10 text-white" strokeWidth={3} />
              </div>
              <p className="font-heading text-4xl text-brand-dark mb-3">Thank You!</p>
              <p className="text-brand-dark/60 font-light text-lg text-center max-w-sm leading-relaxed">
                Your enquiry has been securely transmitted to our concierge team.
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              <div>
                <label htmlFor="name" className={labelClass}>Full Name</label>
                <input required type="text" id="name" className={inputClass} placeholder="e.g. Jane Doe" />
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>Email Address</label>
                <input required type="email" id="email" className={inputClass} placeholder="jane@example.com" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              <div>
                <label htmlFor="phone" className={labelClass}>Phone Number</label>
                <input type="tel" id="phone" className={inputClass} placeholder="(555) 123-4567" />
              </div>
              <div>
                <label className={labelClass}>Event Type</label>
                <select required defaultValue="" className={inputClass}>
                  <option value="" disabled>Select an option</option>
                  <option>Corporate Holiday Party</option>
                  <option>Private Family Gathering</option>
                  <option>Community / Neighborhood Event</option>
                  <option>School / Church Event</option>
                  <option>Brand Activation / Retail</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              <div>
                <label className={labelClass}>Event Date</label>
                <input required type="date" className={inputClass} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="guests" className={labelClass}>Guests</label>
                  <input required type="number" id="guests" min="1" className={inputClass} placeholder="150" />
                </div>
                <div>
                  <label htmlFor="location" className={labelClass}>City/State</label>
                  <input required type="text" id="location" className={inputClass} placeholder="Houston, TX" />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="message" className={labelClass}>Event Vision</label>
              <textarea required id="message" rows="3" className={`${inputClass} resize-none`} placeholder="Tell us a bit about what you are planning..."></textarea>
            </div>

            <div className="pt-6">
              <button disabled={loading} type="submit" className="w-full px-8 py-5 bg-brand-red text-white uppercase tracking-[0.3em] text-xs font-bold hover:bg-brand-dark transition-colors duration-300 disabled:opacity-70 rounded-none shadow-none flex items-center justify-center group">
                {loading ? (
                   <span className="flex items-center gap-3">
                     <span className="w-4 h-4 border-2 border-white/30 rounded-full border-t-white animate-spin"></span>
                     Transmitting...
                   </span>
                ) : (
                   <span className="flex items-center gap-3">
                     Submit Enquiry
                   </span>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
});

export default EnquireForm;
