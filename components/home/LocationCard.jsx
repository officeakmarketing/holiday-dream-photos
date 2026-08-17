"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MapPin, CalendarDays, X, Gift, Sparkles, Image as ImageIcon } from "lucide-react";

export default function LocationCard({ loc }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <div className="bg-[#fdfbf9] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full border border-brand-dark/10 hover:-translate-y-1">
        {/* Image Area */}
        <div className="h-48 md:h-56 bg-brand-light relative shrink-0 overflow-hidden">
          <Image 
            src={loc.image} 
            alt={`${loc.name} location`} 
            fill 
            sizes="(max-width: 1200px) 50vw, 33vw" 
            className="object-cover transition-transform duration-700 group-hover:scale-105" 
          />
        </div>

        {/* Body Area */}
        <div className="p-6 md:p-8 flex flex-col flex-1 bg-transparent relative">
          
          <div className="mb-6">
            <span className="text-brand-red font-bold uppercase tracking-[0.1em] text-[10px] block mb-2">
              {loc.city}
            </span>
            <h3 className="font-heading text-2xl md:text-3xl text-brand-dark leading-tight group-hover:text-brand-red transition-colors duration-300">
              {loc.name}
            </h3>
          </div>
          
          <div className="flex flex-col gap-3 mb-8 flex-1">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-brand-red/5 flex items-center justify-center shrink-0 mt-0.5 border border-brand-red/10 group-hover:bg-brand-red/10 transition-colors duration-300">
                <MapPin className="w-4 h-4 text-brand-red" />
              </div>
              <span className="text-brand-dark/80 text-sm leading-snug font-medium pt-1">{loc.address}</span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-brand-dark/5 flex items-center justify-center shrink-0 border border-brand-dark/10 group-hover:bg-brand-dark/10 transition-colors duration-300">
                <CalendarDays className="w-4 h-4 text-brand-dark/70" />
              </div>
              <span className="text-brand-dark/80 text-sm font-semibold pt-1">{loc.dates}</span>
            </div>

            <div className="mt-3 pt-4 border-t border-brand-dark/10">
              <span className="text-brand-dark/60 text-sm">
                Featuring <span className="font-bold text-brand-dark">{loc.experiences?.join(" & ")}</span>
              </span>
            </div>
          </div>
          
          {/* Actions */}
          <div className="mt-auto flex flex-col gap-3">
            {loc.pricing && (
              <button 
                onClick={() => setIsOpen(true)}
                className="w-full flex items-center justify-center bg-brand-red text-white hover:bg-brand-red/90 px-6 py-4 rounded-lg text-xs font-bold uppercase tracking-[0.1em] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                View Packages & Pricing
              </button>
            )}
            <button className="w-full flex items-center justify-center bg-brand-dark text-white px-6 py-4 rounded-lg text-xs font-bold uppercase tracking-[0.1em] transition-colors border border-transparent cursor-not-allowed opacity-60 hover:opacity-100">
              <span>Schedule Coming Soon</span>
            </button>
          </div>
        </div>
      </div>

      {/* Modal Overlay - NO SCROLL */}
      {isOpen && loc.pricing && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 lg:p-6 overflow-hidden touch-none"
          data-lenis-prevent="true"
        >
          <div 
            className="absolute inset-0 bg-brand-dark/95 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          ></div>
          
          {/* Modal Content - Auto height so nothing is cut off */}
          <div className="bg-[#fdfbf9] rounded-2xl w-full max-w-[1200px] max-h-[95vh] relative z-10 shadow-2xl border border-white/10 flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 lg:top-5 lg:right-5 w-8 h-8 lg:w-10 lg:h-10 bg-brand-dark/5 hover:bg-brand-dark/10 rounded-full flex items-center justify-center transition-colors z-20"
            >
              <X className="w-4 h-4 lg:w-5 lg:h-5 text-brand-dark" />
            </button>

            {/* Strict overflow-hidden on laptops to guarantee NO scrollbars, auto on mobile */}
            <div className="flex flex-col p-4 lg:p-6 overflow-y-auto lg:overflow-hidden w-full h-full">
              
              {/* Header */}
              <div className="text-center shrink-0 mb-4 lg:mb-5">
                <span className="text-brand-red uppercase tracking-[0.2em] text-[9px] lg:text-[11px] font-bold mb-1 block">
                  {loc.name}
                </span>
                <h2 className="font-heading text-2xl lg:text-3xl text-brand-dark mb-2">
                  Holiday <span className="italic text-brand-red">Dream</span> Photos
                </h2>
                <div className="w-16 h-1 bg-brand-red/20 mx-auto rounded-full"></div>
              </div>

              {/* Bento Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-3 lg:gap-4">
                
                {/* 1. Rudolph (Hero Package) */}
                <div className="col-span-2 lg:col-span-1 lg:row-span-2 bg-brand-red text-white rounded-xl p-5 flex flex-col justify-center relative overflow-hidden shadow-inner">
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                  <div className="relative z-10 text-center lg:text-left flex flex-col gap-3 lg:gap-4">
                    <div>
                      <Gift className="w-6 h-6 lg:w-7 lg:h-7 text-white/90 mx-auto lg:mx-0 mb-2" />
                      <h3 className="font-heading text-2xl lg:text-3xl uppercase tracking-wide mb-1">{loc.pricing.packages[0].name}</h3>
                      <span className="font-heading text-4xl lg:text-5xl text-white">{loc.pricing.packages[0].price}</span>
                    </div>
                    <ul className="space-y-1.5 text-white/90 font-medium text-xs lg:text-sm">
                      {loc.pricing.packages[0].inclusions.map((inc, i) => (
                        <li key={i} className="flex items-start gap-2 justify-center lg:justify-start">
                          <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-white shrink-0 mt-1 lg:mt-1.5"></div>
                          <span className="leading-tight">{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* 2. Blitzen */}
                <div className="col-span-1 bg-white rounded-xl p-4 lg:p-5 border border-brand-dark/10 shadow-sm flex flex-col justify-center text-center lg:text-left">
                  <Sparkles className="w-4 h-4 lg:w-5 lg:h-5 text-brand-red/70 mx-auto lg:mx-0 mb-1.5" />
                  <h3 className="font-heading text-lg lg:text-xl text-brand-dark uppercase tracking-wide mb-0.5">{loc.pricing.packages[1].name}</h3>
                  <span className="font-heading text-2xl lg:text-3xl text-brand-red mb-2">{loc.pricing.packages[1].price}</span>
                  <ul className="text-brand-dark/70 text-[10px] lg:text-xs">
                    {loc.pricing.packages[1].inclusions.map((inc, i) => (
                      <li key={i} className="leading-tight font-medium">{inc}</li>
                    ))}
                  </ul>
                </div>

                {/* 3. Dasher */}
                <div className="col-span-1 bg-white rounded-xl p-4 lg:p-5 border border-brand-dark/10 shadow-sm flex flex-col justify-center text-center lg:text-left">
                  <ImageIcon className="w-4 h-4 lg:w-5 lg:h-5 text-brand-red/70 mx-auto lg:mx-0 mb-1.5" />
                  <h3 className="font-heading text-lg lg:text-xl text-brand-dark uppercase tracking-wide mb-0.5">{loc.pricing.packages[2].name}</h3>
                  <span className="font-heading text-2xl lg:text-3xl text-brand-red mb-2">{loc.pricing.packages[2].price}</span>
                  <ul className="text-brand-dark/70 text-[10px] lg:text-xs">
                    {loc.pricing.packages[2].inclusions.map((inc, i) => (
                      <li key={i} className="leading-tight font-medium">{inc}</li>
                    ))}
                  </ul>
                </div>

                {/* 4. Add Ons */}
                <div className="col-span-2 lg:col-span-1 lg:row-span-2 bg-brand-dark text-white rounded-xl p-5 lg:p-6 flex flex-col justify-center relative overflow-hidden shadow-inner border border-white/5">
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
                  <div className="absolute top-5 right-5 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
                  
                  <div className="relative z-10 text-center lg:text-left flex flex-col gap-5 lg:gap-6 h-full justify-center">
                    
                    <div className="flex items-center justify-center lg:justify-start gap-2 border-b border-white/10 pb-3">
                      <Sparkles className="w-5 h-5 lg:w-6 lg:h-6 text-white/90" />
                      <h3 className="font-heading text-xl lg:text-2xl tracking-widest text-white uppercase mt-1">Add Ons</h3>
                    </div>

                    <div className="flex flex-col gap-5 lg:gap-6">
                      {loc.pricing.addOns.map((addon, idx) => (
                        <div key={idx} className="flex flex-col gap-1 lg:gap-1.5">
                           <span className="font-heading text-3xl lg:text-4xl text-white">{addon.price}</span>
                           <span className="font-medium text-white/70 text-xs lg:text-sm uppercase leading-tight tracking-widest flex items-center justify-center lg:justify-start gap-2">
                             <div className="w-1.5 h-1.5 rounded-full bg-white/50 shrink-0"></div>
                             {addon.name}
                           </span>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>

                {/* 5. Frames */}
                <div className="col-span-2 lg:col-span-2 bg-white rounded-xl p-4 lg:p-5 border border-brand-dark/10 shadow-sm flex flex-col justify-center">
                  <h3 className="font-heading text-sm lg:text-base tracking-widest text-brand-dark uppercase mb-2 lg:mb-3 border-b border-brand-dark/10 pb-1.5 text-center lg:text-left">Frames</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1.5 lg:gap-y-2">
                    {loc.pricing.frames.map((frame, idx) => (
                      <div key={idx} className="flex justify-between items-center text-[10px] lg:text-[11px]">
                        <span className="font-bold text-brand-dark/80 uppercase truncate pr-2">{frame.name}</span>
                        <span className="font-heading text-brand-red text-xs lg:text-sm shrink-0">{frame.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
