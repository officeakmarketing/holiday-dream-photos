"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-[#113122] relative overflow-hidden">
      
      {/* Decorative Wreath Backgrounds */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-[0.03] pointer-events-none z-0">
        <Image src="/images/hero_wreath.png" alt="Wreath" fill className="object-contain" />
      </div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] opacity-[0.03] pointer-events-none z-0 rotate-180">
        <Image src="/images/hero_wreath.png" alt="Wreath" fill className="object-contain" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24 relative">
          <div className="relative inline-block">
            {/* Elegant massive background watermark */}
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bodoni text-[5rem] md:text-[8rem] lg:text-[11rem] text-white/5 italic whitespace-nowrap pointer-events-none select-none">
              Testimonials
            </span>
            <h2 className="relative z-10 font-bodoni text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              What people <span className="italic text-brand-red drop-shadow-md">are saying</span>
            </h2>
          </div>
        </div>

        {/* Testimonials Container */}
        <div className="max-w-4xl mx-auto">
          
          {/* Featured Confirmed Testimonial - Baldwin Hills */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-white rounded-xl shadow-2xl p-10 md:p-16 text-center group"
          >
            {/* Decorative Quote Icon Background */}
            <Quote className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 text-gray-50 opacity-50 pointer-events-none" />

            {/* Top Border Accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-brand-red rounded-b-md" />

            <div className="flex justify-center gap-1.5 mb-8 relative z-10">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-[#D4AF37] fill-[#D4AF37]" />
              ))}
            </div>

            <p className="text-gray-800 font-bodoni text-2xl md:text-3xl lg:text-4xl leading-relaxed italic mb-10 relative z-10">
              "Holiday Dream Photos continues to exceed our expectations every holiday season. Their Black Santa is truly special — families travel from all over just to take photos with him. It is more than just photos — it is a magical experience for the community."
            </p>

            <div className="flex flex-col items-center justify-center relative z-10">
              <div className="w-12 h-12 rounded-full bg-[#113122] flex items-center justify-center shadow-md mb-4">
                <span className="text-white font-bodoni text-xl">BH</span>
              </div>
              <span className="font-bold text-[#113122] uppercase tracking-[0.2em] text-sm md:text-base mb-1">
                Baldwin Hills Crenshaw Shopping Center
              </span>
              <span className="text-brand-red text-xs uppercase tracking-widest font-semibold mt-1">
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
