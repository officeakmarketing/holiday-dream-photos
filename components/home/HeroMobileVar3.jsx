"use client";

import Image from "next/image";
import Link from "next/link";
import FadeIn from "../animations/FadeIn";
import FadeInItem from "../animations/FadeInItem";
import StaggerContainer from "../animations/StaggerContainer";
import { Sparkles } from "lucide-react";

export default function HeroMobileVar3() {
  return (
    <section className="relative w-full h-[100svh] flex flex-col lg:hidden bg-[#fcfaf9] overflow-hidden pt-20 px-6 pb-10">
      
      <StaggerContainer className="flex-1 flex flex-col relative z-10">
        
        {/* Top Header Typography */}
        <div className="flex flex-col text-center w-full mb-8">
          <FadeInItem className="mb-3">
            <span className="text-brand-red text-[9px] uppercase tracking-[0.3em] font-bold">
              The 2026 Season
            </span>
          </FadeInItem>

          <FadeInItem as="h1" className="font-heading text-[2.75rem] text-brand-dark leading-[1.05] tracking-tight">
            A Premium <br />
            <span className="italic text-brand-red font-light">Holiday Portrait</span>
          </FadeInItem>
        </div>

        {/* Center: Archway Image Frame */}
        <FadeInItem className="w-full flex-1 relative flex items-center justify-center min-h-[40svh]">
          <div className="w-full max-w-[280px] aspect-[3/4] relative rounded-t-full overflow-hidden border-4 border-white shadow-2xl">
            <Image
              src="/images/gallery-1.jpg" 
              alt="Santa Experience"
              fill
              className="object-cover object-center"
              priority
            />
            {/* Subtle vintage warm overlay */}
            <div className="absolute inset-0 bg-[#d4af37]/10 mix-blend-color pointer-events-none" />
          </div>
          
          {/* Decorative floating icon */}
          <div className="absolute top-10 right-4 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center border border-white/50">
             <Sparkles className="w-5 h-5 text-brand-red" />
          </div>
        </FadeInItem>

        {/* Bottom Content & CTA */}
        <div className="w-full flex flex-col text-center mt-8">
          <FadeInItem as="p" className="text-brand-dark/70 font-light text-[12px] max-w-[280px] mx-auto leading-relaxed mb-6">
            Step away from the crowded lines. We provide an exclusive, authentic encounter for your family.
          </FadeInItem>

          <FadeInItem>
            <Link 
              href="/book-now" 
              className="w-full bg-brand-dark text-white py-4.5 px-6 uppercase tracking-[0.25em] text-[10px] font-bold flex items-center justify-center rounded-sm hover:bg-brand-red transition-colors border border-brand-dark hover:border-brand-red"
            >
              Secure Your Slot
            </Link>
          </FadeInItem>
        </div>

      </StaggerContainer>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#d4af37]/5 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4 pointer-events-none" />
    </section>
  );
}
