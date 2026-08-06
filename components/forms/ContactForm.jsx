"use client";

import React, { useState, useCallback } from "react";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import santaSleigh from "../../public/animations/santa sleigh.json";
import { Check, Sparkles, MapPin, Phone, Mail } from "lucide-react";

const ContactForm = React.memo(function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500); 
  }, []);

  const inputClass = "w-full bg-[#f4f4f4] border border-transparent focus:border-brand-red focus:bg-white rounded-none py-4 px-5 text-brand-dark text-base outline-none transition-colors duration-300 placeholder:text-brand-dark/40 hover:bg-[#eaeaea] shadow-none";
  const labelClass = "block text-sm text-brand-dark/80 font-bold mb-2 ml-1";

  return (
    <div className="relative w-full max-w-6xl 2xl:max-w-[1400px] mx-auto flex flex-col md:flex-row bg-white shadow-2xl rounded-none overflow-hidden group">
      
      {/* LEFT SIDE - CONTACT INFO */}
      <div className="w-full md:w-2/5 bg-brand-dark md:bg-brand-red p-8 lg:p-10 2xl:p-14 text-white flex flex-col relative overflow-hidden">
        {/* Subtle background pattern/glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-black/10 rounded-full blur-2xl -ml-10 -mb-10"></div>
        
        <div className="relative z-10 flex-1 flex flex-col">
          <div className="mb-8 lg:mb-10">
            <h2 className="font-heading text-3xl lg:text-4xl mb-3 leading-tight">Get in <br/> Touch</h2>
            <p className="text-white/80 font-light text-sm leading-relaxed max-w-xs">
              Whether you have a question about booking, our locations, or private events, our concierge team is ready to help.
            </p>
          </div>

          <div className="space-y-6 lg:space-y-8 mt-auto">
            <div className="flex items-start gap-4 hidden">
              <Mail className="w-5 h-5 text-white/50 mt-1" />
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 mb-1">Email Us</p>
                <p className="text-sm font-light">[PLACEHOLDER: Client Email]</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 hidden">
              <Phone className="w-5 h-5 text-white/50 mt-1" />
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 mb-1">Call Us</p>
                <p className="text-sm font-light">[PLACEHOLDER: Client Phone]</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-white/50 mt-1" />
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 mb-1">Locations</p>
                <p className="text-sm font-light">Operating across 8 premium venues nationwide.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE - THE FORM */}
      <div className="w-full md:w-3/5 p-8 lg:p-10 2xl:p-14 relative z-10 bg-white">
        {submitted ? (
          <div className="flex flex-col items-center justify-center w-full h-full min-h-[350px] animate-in fade-in duration-1000 relative">
            <div className="w-80 h-40 mb-2 pointer-events-none absolute -top-8">
              <Lottie animationData={santaSleigh} loop={false} />
            </div>
            
            <div className="mt-12 flex flex-col items-center text-center relative z-10">
              <div className="w-16 h-16 bg-brand-red rounded-none flex items-center justify-center mb-6 animate-in zoom-in duration-500 delay-300 fill-mode-both">
                <Check className="w-8 h-8 text-white" strokeWidth={3} />
              </div>
              <p className="font-heading text-4xl text-brand-dark mb-3">Message Sent!</p>
              <p className="text-brand-dark/60 font-light text-lg max-w-sm leading-relaxed">
                Your message has been securely transmitted. Our concierge will be in touch shortly.
              </p>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6 lg:mb-8">
              <h3 className="font-heading text-2xl lg:text-3xl text-brand-dark mb-1">Send a Message</h3>
              <p className="text-brand-dark/50 text-xs tracking-wide">We typically respond within 24 hours.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                <div>
                  <label htmlFor="name" className={labelClass}>Full Name</label>
                  <input required type="text" id="name" className={inputClass} placeholder="e.g. Jane Doe" />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>Email Address</label>
                  <input required type="email" id="email" className={inputClass} placeholder="jane@example.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                <div>
                  <label htmlFor="phone" className={labelClass}>Phone Number</label>
                  <input required type="tel" id="phone" className={inputClass} placeholder="(555) 123-4567" />
                </div>
                <div>
                  <label htmlFor="subject" className={labelClass}>Subject</label>
                  <input required type="text" id="subject" className={inputClass} placeholder="Question about booking" />
                </div>
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>How can we help you?</label>
                <textarea required id="message" rows="2" className={`${inputClass} resize-none`} placeholder="Tell us a bit about what you need..."></textarea>
              </div>

              <div className="pt-2 lg:pt-4">
                <button disabled={loading} type="submit" className="w-full px-8 py-6 bg-brand-dark text-white uppercase tracking-[0.3em] text-xs font-bold hover:bg-brand-red transition-colors duration-300 disabled:opacity-70 rounded-none shadow-none flex items-center justify-center group relative overflow-hidden">
                  {loading ? (
                     <span className="flex items-center gap-3 relative z-10">
                       <span className="w-4 h-4 border-2 border-white/30 rounded-full border-t-white animate-spin"></span>
                       Sending...
                     </span>
                  ) : (
                     <span className="flex items-center gap-3 relative z-10">
                       Send Message
                     </span>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
});

export default ContactForm;
