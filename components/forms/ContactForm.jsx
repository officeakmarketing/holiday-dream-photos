"use client";

import React, { useState, useCallback } from "react";
import { Check, MapPin, Phone, Mail } from "lucide-react";

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
      <div className="w-full md:w-[45%] lg:w-[40%] bg-brand-dark p-8 lg:p-12 2xl:p-16 text-white flex flex-col relative overflow-hidden">
        {/* Subtle background pattern/glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-black/10 rounded-full blur-2xl -ml-10 -mb-10"></div>
        
        <div className="relative z-10 flex-1 flex flex-col">
          <div className="mb-8 lg:mb-10">
            <h2 className="font-heading text-3xl lg:text-4xl mb-3 leading-tight whitespace-nowrap">Get in Touch</h2>
            <p className="text-white/80 font-light text-sm leading-relaxed max-w-xs">
              Whether you have a question about booking, our locations, or private events, our concierge team is ready to help.
            </p>
          </div>

          <div className="space-y-8 mt-auto">
            
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/60 mb-1">Email Us</p>
                <p className="text-sm font-medium">hello@holidaydreamphotos.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/60 mb-1">Call Us</p>
                <p className="text-sm font-medium">1-800-555-0199</p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/60 mb-1">Locations</p>
                <p className="text-sm font-medium">8 premium venues nationwide</p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/20">
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/60 mb-4 block">Follow Us</p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-brand-red transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-brand-red transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* RIGHT SIDE - FORM */}
      <div className="w-full md:w-[55%] lg:w-[60%] p-8 lg:p-12 2xl:p-16 flex flex-col justify-center relative bg-[#fcfaf9]">
        {submitted ? (
          <div className="flex flex-col items-center justify-center w-full h-full min-h-[350px] animate-in fade-in duration-1000 relative">
            <div className="mt-8 flex flex-col items-center text-center relative z-10">
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
