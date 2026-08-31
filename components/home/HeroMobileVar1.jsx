"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FadeIn from "../animations/FadeIn";
import FadeInItem from "../animations/FadeInItem";
import StaggerContainer from "../animations/StaggerContainer";

export default function HeroMobileVar1() {
  return (
    <section className="relative w-full h-[100svh] bg-[#050a08] overflow-hidden flex flex-col lg:hidden">
      
      {/* Top Half: Editorial Image Frame */}
      <div className="relative w-full h-[60svh] bg-brand-dark">
        <Image
          src="/images/traditional-santa.jpg"
          alt="Premium Santa Experience"
          fill
          className="object-cover object-[center_35%] opacity-90"
          priority
        />
        {/* Subtle top/bottom gradients to frame the image */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050a08]/60 via-transparent to-[#050a08] mix-blend-multiply" />
        
        {/* Decorative inner frame */}
        <div className="absolute inset-4 border border-white/10 pointer-events-none" />
      </div>

      {/* Bottom Half: Content Overlap */}
      <div className="relative w-full flex-1 flex flex-col items-center px-6 -mt-10 z-10 pb-10">
        <div className="bg-[#050a08] border border-white/5 shadow-2xl p-6 sm:p-8 w-full max-w-[340px] mx-auto text-center relative">
          
          <StaggerContainer className="flex flex-col gap-4">
            {/* Label */}
            <FadeInItem className="inline-flex items-center justify-center gap-3 mx-auto mb-1">
              <div className="w-4 h-[1px] bg-brand-red"></div>
              <span className="text-brand-red text-[9px] uppercase tracking-[0.3em] font-bold">Holiday Dream</span>
              <div className="w-4 h-[1px] bg-brand-red"></div>
            </FadeInItem>

            {/* Headline */}
            <FadeInItem as="h1" className="font-heading text-4xl sm:text-5xl text-brand-light leading-[1.05] tracking-tight">
              A Memory <br />
              <span className="italic font-light text-white/70">That Lasts</span>
            </FadeInItem>
            
            {/* Body */}
            <FadeInItem as="p" className="text-brand-light/60 font-light text-[11px] leading-relaxed max-w-[240px] mx-auto mt-2">
              Premium photography. Unhurried sessions. A magical experience they will never forget.
            </FadeInItem>

            {/* Button */}
            <FadeInItem className="mt-4">
              <Link 
                href="/book-now" 
                className="w-full inline-flex items-center justify-center gap-3 bg-brand-red text-white py-4 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-brand-red transition-colors border border-brand-red hover:border-white rounded-sm group"
              >
                Reserve Session <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </FadeInItem>
          </StaggerContainer>
          
          {/* Subtle accent line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-brand-red"></div>
        </div>
      </div>
    </section>
  );
}
