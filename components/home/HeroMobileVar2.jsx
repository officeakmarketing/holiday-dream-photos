"use client";

import Image from "next/image";
import Link from "next/link";
import FadeIn from "../animations/FadeIn";
import FadeInItem from "../animations/FadeInItem";
import StaggerContainer from "../animations/StaggerContainer";

export default function HeroMobileVar2() {
  return (
    <section className="relative w-full h-[100svh] overflow-hidden flex flex-col lg:hidden bg-[#fcfaf9]">
      
      {/* Top Half: Image */}
      <div className="absolute top-0 left-0 w-full h-[55svh]">
        <Image
          src="/images/black-santa.jpg" 
          alt="Premium Santa Experience"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#fcfaf9] via-transparent to-black/20" />
      </div>

      {/* Floating Bridge Card */}
      <div className="relative z-10 w-full h-full flex flex-col justify-end px-5 pb-8 pt-[35svh]">
        <FadeIn className="w-full bg-white/80 backdrop-blur-3xl shadow-2xl border border-white/50 p-8 sm:p-10 relative overflow-hidden">
          {/* Subtle noise texture on card */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgNDBoNDBWMEgwek0zOSAzOUgxVjFoMzh6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDIiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==')] opacity-50 mix-blend-overlay pointer-events-none" />
          
          <StaggerContainer className="relative z-10 flex flex-col items-center text-center">
            
            <FadeInItem className="mb-4">
              <span className="text-brand-red font-bold uppercase tracking-[0.25em] text-[9px]">
                Holiday Dream Photos
              </span>
            </FadeInItem>

            <FadeInItem as="h1" className="font-heading text-[2.5rem] sm:text-5xl text-brand-dark leading-[1.1] mb-5 tracking-tight">
              Unhurried, <br/> 
              <span className="italic text-brand-red font-light">Magical</span> Memories
            </FadeInItem>
            
            <FadeInItem as="p" className="text-brand-dark/70 font-light text-xs leading-relaxed max-w-[280px] mx-auto mb-8">
              Experience Christmas the way it was meant to be. Secure your family's perfect moment today.
            </FadeInItem>

            <FadeInItem className="w-full">
              <Link 
                href="/book-now" 
                className="w-full bg-brand-dark text-white py-4.5 px-6 uppercase tracking-[0.2em] text-[10px] font-bold flex items-center justify-center hover:bg-brand-red transition-colors rounded-sm"
              >
                View Locations & Book
              </Link>
            </FadeInItem>

          </StaggerContainer>
        </FadeIn>
      </div>
    </section>
  );
}
