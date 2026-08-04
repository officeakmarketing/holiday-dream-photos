import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import FadeIn from "../animations/FadeIn";

export default function Urgency() {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden bg-gradient-to-br from-[#c8102e] via-[#a30b24] to-[#7a0619]">
      
      {/* Warm Glowing Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ff4d4d]/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-10 pointer-events-none">
        <Image src="/images/hero_wreath.png" alt="Wreath" fill className="object-contain" />
      </div>
     

      <div className="max-w-[1200px] mx-auto px-0 sm:px-6 lg:px-12 relative z-10 flex items-center justify-center">
        
        {/* The "Golden Ticket" / Invitation Card */}
        <FadeIn 
          y={50}
          duration={1}
          className="w-full max-w-4xl bg-brand-light sm:rounded-sm p-6 md:p-16 lg:p-20 shadow-2xl relative"
        >
          {/* Inner Gold Border (for that premium invitation feel) */}
          <div className="absolute inset-4 border border-brand-gold/30 pointer-events-none rounded-sm" />
          
          <div className="text-center relative z-10">
            
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-12 h-[1px] bg-brand-red"></div>
              <span className="text-brand-red font-bold uppercase tracking-[0.4em] text-xs">
                Important Notice
              </span>
              <div className="w-12 h-[1px] bg-brand-red"></div>
            </div>
            
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-brand-dark tracking-tight leading-[1.1] mb-4 md:mb-6 drop-shadow-sm">
              The calendar <br className="hidden md:block"/>fills up fast.
            </h2>
            <h3 className="font-heading text-xl md:text-2xl lg:text-3xl italic text-brand-red mb-8">
              Every year families miss out.
            </h3>
            <p className="text-brand-dark/80 font-light text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-6 px-4 md:px-0">
              We operate across 8 locations with a limited number of sessions available each day. Once a slot is gone, it is gone.
            </p>
            
            <p className="font-bold text-brand-dark text-lg md:text-xl mb-10 tracking-wide uppercase px-4 md:px-0">
              Do not let your family miss out this Christmas.
            </p>
            <Link 
              href="/book-now"
              className="inline-flex items-center justify-center gap-3 bg-brand-dark text-white px-8 py-4 md:px-10 md:py-5 rounded-sm text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] hover:bg-brand-red transition-colors duration-300 shadow-xl group w-full sm:w-auto"
            >
              Check Available Slots Now
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
            </Link>

          </div>
        </FadeIn>

      </div>
    </section>
  );
}
