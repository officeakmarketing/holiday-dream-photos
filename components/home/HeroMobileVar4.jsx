"use client";

import Image from "next/image";
import Link from "next/link";
import FadeIn from "../animations/FadeIn";
import StaggerContainer from "../animations/StaggerContainer";
import FadeInItem from "../animations/FadeInItem";
import TrustBar from "./TrustBar";

export default function HeroMobileVar4() {
  return (
    <section className="relative w-full h-[100svh] bg-brand-dark overflow-hidden flex flex-col lg:hidden">
      
      {/* Background Image (Centered Watermark with Transparency) */}
      <FadeIn
        y={0}
        duration={2}
        className="absolute inset-0 w-full h-full z-0 flex items-center justify-center pointer-events-none"
      >
        <Image
          src="/images/hero_santa.png"
          alt="Premium Santa Claus"
          fill
          className="object-contain object-center scale-[1.6] opacity-60"
          priority
          sizes="(max-width: 1024px) 100vw, 0vw"
        />
        {/* Soft black radial gradient to ensure text readability over Santa */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.6)_100%)] z-10" />
      </FadeIn>

      {/* Center Content */}
      <div className="flex-1 w-full px-6 relative z-20 flex flex-col items-center justify-center pb-12 pt-20">
        <StaggerContainer className="flex flex-col items-center text-center">
          <FadeInItem as="h1" className="font-heading text-4xl sm:text-5xl font-medium text-white leading-[1.1] mb-5 tracking-tight drop-shadow-lg">
            The Santa Experience <br />
            <span className="text-brand-red italic font-light">Your Family Will Never Forget</span>
          </FadeInItem>

          <FadeInItem as="p" className="text-sm sm:text-base text-white/80 font-medium max-w-[280px] sm:max-w-md mx-auto mb-8 leading-relaxed">
            Professional photography. Two magical experiences. Now at 8 locations across the USA this
            Christmas season.
          </FadeInItem>

          <FadeInItem className="w-full max-w-[280px] mx-auto">
            <Link href="/book-now" className="w-full px-6 py-4.5 bg-brand-red text-white font-bold text-[11px] tracking-[0.2em] uppercase hover:bg-white hover:text-brand-red transition-colors rounded-sm block text-center">
              Book Your Session Now
            </Link>
          </FadeInItem>
        </StaggerContainer>
      </div>

      {/* Trust Bar anchored at the bottom */}
      <div className="relative z-30 bg-brand-dark/95 backdrop-blur-sm border-t border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.8)]">
        <TrustBar />
      </div>
    </section>
  );
}
