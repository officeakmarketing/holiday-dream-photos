"use client";

import Link from "next/link";
import FadeIn from "../animations/FadeIn";
import StaggerContainer from "../animations/StaggerContainer";
import FadeInItem from "../animations/FadeInItem";
import TrustBar from "./TrustBar";

export default function HeroMobile() {
  return (
    <section className="relative w-full min-h-[100svh] bg-white flex flex-col lg:hidden pt-28 pb-20">
      
      {/* Center Content */}
      <div className="flex-1 w-full relative z-20 flex flex-col items-center justify-center -mt-8">
        <StaggerContainer className="flex flex-col items-center text-center w-full max-w-[360px] mx-auto px-5">
          
          <FadeInItem as="h1" className="flex flex-col items-center w-full">
            <span className="font-heading text-[2.25rem] leading-[1.15] font-medium text-brand-dark tracking-tight">
              Most Santa photos<br/>end up in a drawer.
            </span>
            <span className="font-heading text-[2.25rem] leading-[1.15] text-brand-red italic font-light mt-1">
              Here is why yours<br/>will end up on the wall.
            </span>
          </FadeInItem>

          <FadeInItem as="p" className="text-[16px] text-brand-dark/70 font-light mt-8 mb-10 leading-[1.6]">
            Professional photography. Two magical<br/>
            experiences. Now at 8 locations across<br/>
            the USA this Christmas season.
          </FadeInItem>

          <FadeInItem className="w-full">
            <Link 
              href="/book-now" 
              className="w-full py-4.5 bg-brand-red text-white font-bold text-[11px] tracking-[0.15em] uppercase hover:bg-brand-dark transition-colors rounded-md shadow-sm block text-center"
            >
              Book Your Session Now
            </Link>
          </FadeInItem>
          
        </StaggerContainer>
      </div>

      {/* Trust Bar anchored at the bottom */}
      <div className="absolute bottom-0 left-0 w-full z-30 bg-brand-red">
        <TrustBar />
      </div>
      
    </section>
  );
}
