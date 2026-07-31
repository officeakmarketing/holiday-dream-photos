"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";

export default function FinalCTA() {
  return (
    <section className="py-24 md:py-32 lg:py-40 relative overflow-hidden text-center flex items-center justify-center">
      
      {/* Maximum Contrast Photographic Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/images/background3.jpg"
          alt="Magical Christmas Background"
          fill
          className="object-cover"
        />
        {/* Extremely dark green/black overlay for maximum contrast and readability */}
        <div className="absolute inset-0 bg-[#0a1510]/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[#050a08]/70" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <Sparkles className="w-12 h-12 text-[#D4AF37] mx-auto opacity-80" />
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="font-bodoni text-5xl md:text-6xl lg:text-[5rem] text-[#F9F7F4] tracking-tight leading-[1.1] mb-8 drop-shadow-xl"
        >
          Give your family a <br className="hidden md:block" />
          <span className="italic text-brand-red">Christmas memory</span> <br className="hidden md:block" />
          that lasts forever.
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-16 h-[1px] bg-brand-red/50 mx-auto mb-10"
        ></motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-[#F9F7F4]/80 font-light text-lg md:text-2xl leading-relaxed max-w-3xl mx-auto mb-16 drop-shadow-md"
        >
          Premium Santa photography. Two magical experiences. 8 locations nationwide. This is not a standard mall Santa. This is Holiday Dream Photos.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col items-center w-full"
        >
          <Link 
            href="/book-now"
            className="inline-flex items-center justify-center gap-4 bg-brand-red text-white px-12 py-6 md:py-8 rounded-sm text-xs md:text-sm font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-brand-red transition-all duration-500 shadow-[0_0_40px_rgba(200,16,46,0.4)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] w-full sm:w-auto group mb-6"
          >
            Book Your Session Now
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
          
          <p className="text-white/50 text-sm font-light italic tracking-wide uppercase">
            Slots fill up fast. Reserve yours before it is too late.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
