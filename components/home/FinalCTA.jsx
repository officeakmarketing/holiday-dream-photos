"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden flex items-center justify-center text-center md:text-left">
      {/* High-End CSS Gradient Background */}
      <div className="absolute inset-0 w-full h-full z-0 bg-[#050a08] overflow-hidden">
        {/* Central glowing radial spotlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full min-w-[1000px] aspect-square bg-[radial-gradient(circle_at_center,_rgba(17,49,34,0.8)_0%,_rgba(10,29,20,0.5)_40%,_rgba(5,10,8,1)_70%)] opacity-90 pointer-events-none" />
        
        {/* Ambient corner glows for depth */}
        <div className="absolute -top-[30%] -left-[10%] w-[60%] aspect-square bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.15)_0%,_transparent_70%)] opacity-30 pointer-events-none blur-3xl" />
        <div className="absolute -bottom-[30%] -right-[10%] w-[60%] aspect-square bg-[radial-gradient(circle_at_center,_rgba(200,16,46,0.1)_0%,_transparent_70%)] opacity-30 pointer-events-none blur-3xl" />
        
        {/* Subtle grid pattern overlay for high-end texture */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgNDBoNDBWMEgwek0zOSAzOUgxVjFoMzh6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDMiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==')] opacity-40 mix-blend-overlay pointer-events-none" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
        
        <div className="flex-1 max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="font-bodoni text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-[#F9F7F4] tracking-tight leading-[1.2] md:leading-[1.1] mb-4 drop-shadow-xl"
          >
            Give your family a <span className="italic text-brand-red">Christmas memory</span> that lasts forever.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-[#F9F7F4]/80 font-light text-base sm:text-lg leading-relaxed drop-shadow-md"
          >
            Premium Santa photography. Two magical experiences. 8 locations nationwide. This is not a standard mall Santa. This is Holiday Dream Photos.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="w-full md:w-auto shrink-0 flex flex-col items-center md:items-end gap-3"
        >
          <Link 
            href="/book-now"
            className="inline-flex items-center justify-center gap-4 bg-brand-red text-white px-8 py-5 md:px-12 md:py-6 rounded-sm text-sm font-bold uppercase tracking-[0.25em] hover:bg-white hover:text-brand-red transition-all duration-300 shadow-2xl hover:shadow-[0_0_40px_rgba(200,16,46,0.4)] group w-full sm:w-auto"
          >
            Book Your Session
            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
          <p className="text-white/50 text-[10px] sm:text-xs font-light italic tracking-wide uppercase text-center md:text-right px-4">
            Slots fill up fast. Reserve yours before it is too late.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
