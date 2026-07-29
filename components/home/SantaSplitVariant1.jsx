"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function SantaSplitVariant1() {
  return (
    <section className="bg-[#F9F7F4] relative overflow-hidden py-24">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Enchanting Header */}
        <div className="flex flex-col items-center text-center mb-20 relative z-10">
          <div className="inline-flex items-center gap-3 mb-6">
            <Sparkles className="text-brand-red w-5 h-5" />
            <span className="text-brand-red font-bold uppercase tracking-[0.4em] text-[10px]">
              The Holiday Dream
            </span>
            <Sparkles className="text-brand-red w-5 h-5" />
          </div>
          <h2 className="font-bodoni text-6xl md:text-[7rem] text-[#113122] tracking-tighter leading-none mb-8">
            Our <span className="italic text-brand-red relative inline-block">Magic
              {/* Suggestion: You can place a Lottie 'Sparkle' animation here to loop continuously! */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-yellow-200/20 blur-xl rounded-full"></div>
            </span>
          </h2>
          <p className="text-[#113122]/60 max-w-2xl text-lg font-light leading-relaxed">
            We are proud to offer two distinct, breathtaking Santa experiences. Select the one that perfectly fits your family's most cherished holiday traditions.
          </p>
        </div>

        {/* Gateway Split Panels */}
        <div className="relative flex flex-col md:flex-row min-h-[900px] md:min-h-0 md:h-[600px] lg:h-[700px] w-full gap-2 lg:gap-4 rounded-3xl overflow-hidden p-2 bg-white shadow-2xl">
          
          {/* Central Floating Badge */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-32 h-32 bg-white rounded-full shadow-2xl items-center justify-center border-4 border-[#F9F7F4]">
             <div className="w-[90%] h-[90%] rounded-full border border-brand-red/20 flex flex-col items-center justify-center text-center">
                <span className="text-brand-red font-bodoni italic text-sm md:text-lg">Choose</span>
                <span className="text-[#113122] uppercase tracking-widest text-[8px] md:text-[10px] font-bold mt-1">Your Magic</span>
             </div>
          </div>

          {/* Traditional Santa */}
          <Link 
            href="/our-santas" 
            className="relative flex-1 group overflow-hidden transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] rounded-2xl"
          >
            <img 
              src="/images/traditional-santa.jpg" 
              alt="Traditional Santa"
              className="absolute inset-0 w-full h-full object-cover object-top md:object-center transition-transform duration-[2000ms] ease-out group-hover:scale-105" 
            />
            {/* Elegant Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#113122]/90 via-[#113122]/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="absolute bottom-0 left-0 p-5 sm:p-6 md:p-8 lg:p-12 w-full text-white z-10 flex flex-col justify-end h-full">
              <div className="mt-auto">
                <span className="text-white/90 font-bold uppercase tracking-[0.4em] text-[9px] md:text-[10px] mb-2 md:mb-4 flex items-center gap-2">
                  <div className="w-8 h-[1px] bg-brand-red"></div>
                  The Classic
                </span>
                <h3 className="font-bodoni text-3xl sm:text-4xl md:text-5xl lg:text-[4.5rem] mb-2 md:mb-4 text-white leading-none tracking-tight drop-shadow-lg">
                  Traditional
                </h3>
              
                <div className="mb-4 md:mb-8">
                    <p className="text-white/90 font-light text-xs sm:text-sm lg:text-base leading-relaxed max-w-sm drop-shadow-md">
                      The heartwarming Christmas experience featuring our authentic, real-bearded Traditional Santa Claus in a beautifully decorated premium setting.
                    </p>
                </div>
                
                <div className="inline-flex items-center gap-3 md:gap-4 bg-brand-red text-white px-5 md:px-8 py-3 md:py-4 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] group-hover:bg-white group-hover:text-brand-red transition-all duration-500 shadow-lg group-hover:shadow-xl w-fit">
                  Explore Traditional 
                  <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-500 md:w-4 md:h-4" />
                </div>
              </div>
            </div>
          </Link>
          
          {/* Black Santa */}
          <Link 
            href="/black-santa" 
            className="relative flex-1 group overflow-hidden transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] rounded-2xl"
          >
            <img 
              src="/images/black-santa.jpg" 
              alt="Black Santa"
              className="absolute inset-0 w-full h-full object-cover object-[50%_25%] md:object-[50%_15%] transition-transform duration-[2000ms] ease-out group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#113122]/90 via-[#113122]/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="absolute bottom-0 left-0 p-5 sm:p-6 md:p-8 lg:p-12 w-full text-white z-10 flex flex-col justify-end h-full">
              <div className="mt-auto">
                <span className="text-white/90 font-bold uppercase tracking-[0.4em] text-[9px] md:text-[10px] mb-2 md:mb-4 flex items-center gap-2">
                  <div className="w-8 h-[1px] bg-brand-red"></div>
                  The Culture
                </span>
                <h3 className="font-bodoni text-3xl sm:text-4xl md:text-5xl lg:text-[4.5rem] mb-2 md:mb-4 text-white leading-none tracking-tight drop-shadow-lg">
                  Black Santa
                </h3>
              
                <div className="mb-4 md:mb-8">
                    <p className="text-white/90 font-light text-xs sm:text-sm lg:text-base leading-relaxed max-w-sm drop-shadow-md">
                      Celebrate the magic of representation. A joyful, premium holiday photo experience with our authentic, real-bearded Black Santa.
                    </p>
                </div>
                
                <div className="inline-flex items-center gap-3 md:gap-4 bg-brand-red text-white px-5 md:px-8 py-3 md:py-4 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] group-hover:bg-white group-hover:text-brand-red transition-all duration-500 shadow-lg group-hover:shadow-xl w-fit">
                  Explore Black Santa 
                  <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-500 md:w-4 md:h-4" />
                </div>
              </div>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}
