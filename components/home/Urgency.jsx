"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";

export default function Urgency() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-br from-[#c8102e] via-[#a30b24] to-[#7a0619]">
      
      {/* Warm Glowing Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ff4d4d]/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-10 pointer-events-none">
        <Image src="/images/hero_wreath.png" alt="Wreath" fill className="object-contain" />
      </div>

      {/* Floating Sparkles for Christmas Magic */}
      <div className="absolute top-[20%] left-[15%] opacity-50"><Sparkles className="w-8 h-8 text-[#D4AF37]" /></div>
      <div className="absolute bottom-[20%] right-[15%] opacity-50"><Sparkles className="w-12 h-12 text-[#D4AF37]" /></div>
      <div className="absolute top-[60%] right-[30%] opacity-30"><Sparkles className="w-6 h-6 text-white" /></div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 flex items-center justify-center">
        
        {/* The "Golden Ticket" / Invitation Card */}
        <motion.div 
          initial={{ opacity: 0, y: 50, rotate: -2 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          className="w-full max-w-4xl bg-[#F9F7F4] rounded-sm p-10 md:p-16 lg:p-20 shadow-2xl relative"
        >
          {/* Inner Gold Border (for that premium invitation feel) */}
          <div className="absolute inset-4 border border-[#D4AF37]/30 pointer-events-none rounded-sm" />
          
          <div className="text-center relative z-10">
            
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-12 h-[1px] bg-brand-red"></div>
              <span className="text-brand-red font-bold uppercase tracking-[0.4em] text-xs">
                Important Notice
              </span>
              <div className="w-12 h-[1px] bg-brand-red"></div>
            </div>
            
            <h2 className="font-bodoni text-5xl md:text-6xl lg:text-7xl text-[#113122] tracking-tighter leading-[1.1] mb-8 drop-shadow-sm">
              Sessions fill up <br className="hidden md:block" />
              weeks in advance.
            </h2>
            <h3 className="font-bodoni text-3xl md:text-4xl italic text-brand-red mb-10">
              Every year families miss out.
            </h3>
            
            <div className="w-24 h-[1px] bg-gray-300 mx-auto mb-10"></div>
            
            <p className="text-[#113122]/80 font-light text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-6">
              We operate across 8 locations with a limited number of sessions available each day. Once a slot is gone, it is gone.
            </p>
            
            <p className="font-bold text-[#113122] text-xl md:text-2xl mb-12 tracking-wide uppercase">
              Do not let your family miss out this Christmas.
            </p>

            <Link 
              href="/book-now"
              className="inline-flex items-center justify-center gap-4 bg-[#113122] text-white px-10 py-5 rounded-sm text-xs md:text-sm font-bold uppercase tracking-[0.2em] hover:bg-brand-red transition-colors duration-300 shadow-xl group"
            >
              Check Available Slots Now
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
            </Link>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
