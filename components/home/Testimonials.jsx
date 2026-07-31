"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-[#113122] relative overflow-hidden">
      
      {/* Decorative Wreath Backgrounds */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] opacity-[0.03] pointer-events-none z-0">
        <Image src="/images/hero_wreath.png" alt="Wreath" fill className="object-contain" />
      </div>
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] opacity-[0.03] pointer-events-none z-0 rotate-180">
        <Image src="/images/hero_wreath.png" alt="Wreath" fill className="object-contain" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-20 md:mb-28 relative pt-8">
          <div className="relative inline-block w-full">
            {/* Elegant massive background watermark (hidden on mobile to prevent overflow) */}
            <span className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bodoni text-[5rem] md:text-[7rem] lg:text-[10rem] text-white/5 italic whitespace-nowrap pointer-events-none select-none">
              Testimonials
            </span>
            <h2 className="relative z-10 font-bodoni text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight px-4">
              What people <br className="sm:hidden" />
              <span className="italic text-brand-red drop-shadow-md">are saying</span>
            </h2>
          </div>
        </div>

        {/* Testimonials Container */}
        <div className="max-w-4xl mx-auto px-2 sm:px-4">
          
          {/* Featured Confirmed Testimonial - Baldwin Hills */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative p-8 sm:p-12 md:p-16 text-center group mt-8 rounded-2xl bg-[#163f2b] shadow-2xl border border-[#1f573c]"
          >
            {/* Decorative Quote Icon Floating */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 md:w-16 md:h-16 rounded-full bg-brand-red flex items-center justify-center shadow-lg z-20">
              <Quote className="w-5 h-5 md:w-7 md:h-7 text-white fill-current" />
            </div>

            <div className="flex justify-center gap-1 sm:gap-1.5 mb-8 md:mb-10 relative z-10 pt-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-[#D4AF37] fill-[#D4AF37]" />
              ))}
            </div>

            <p className="text-[#F9F7F4] font-bodoni text-lg sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed italic mb-8 md:mb-12 relative z-10 px-2">
              "Holiday Dream Photos continues to exceed our expectations every holiday season. Their Black Santa is truly special — families travel from all over just to take photos with him. It is more than just photos — it is a magical experience for the community."
            </p>

            <div className="flex flex-col items-center justify-center relative z-10">
              <span className="font-bold text-white uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[10px] sm:text-xs md:text-sm mb-2 max-w-[250px] sm:max-w-none text-center">
                Baldwin Hills Crenshaw Shopping Center
              </span>
              <span className="text-brand-red text-[9px] md:text-xs uppercase tracking-widest font-semibold">
                Verified Partner
              </span>
            </div>
            
          </motion.div>

          {/* HIDDEN PLACEHOLDERS FOR FAMILY TESTIMONIALS */}
          <div className="hidden">
            <div className="bg-white p-10 rounded-xl shadow-xl text-center">
              <p className="text-gray-800 font-bodoni text-2xl italic">"[Family Testimonial 1 Placeholder]"</p>
              <div className="font-bold text-[#113122] uppercase tracking-[0.2em] mt-6">[Full Name]</div>
              <div className="text-brand-red text-xs uppercase tracking-widest mt-1">[City, State]</div>
            </div>
            <div className="bg-white p-10 rounded-xl shadow-xl text-center">
              <p className="text-gray-800 font-bodoni text-2xl italic">"[Family Testimonial 2 Placeholder]"</p>
              <div className="font-bold text-[#113122] uppercase tracking-[0.2em] mt-6">[Full Name]</div>
              <div className="text-brand-red text-xs uppercase tracking-widest mt-1">[City, State]</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
