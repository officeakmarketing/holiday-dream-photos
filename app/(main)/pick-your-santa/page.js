import Link from "next/link";
import { Quote, Star } from "lucide-react";
import Image from "next/image";
import FaqAccordion from "@/components/home/FaqAccordion";
import FinalCTA from "@/components/home/FinalCTA";
import ChimesMirrored from "@/components/animations/ChimesMirrored";

export const metadata = {
  title: 'Pick Your Santa | Holiday Dream Photos',
  description: 'Two premium experiences. One unforgettable standard. Choose between our Traditional and Black Santa experiences.',
};

export default function OurSantasPage() {
  return (
    <div className="bg-brand-light min-h-screen">
      {/* ABOVE THE FOLD FULL-SCREEN CONTAINER */}
      <div className="flex flex-col h-[100svh] 2xl:h-auto 2xl:min-h-[100svh] pb-2 lg:pb-4 2xl:pb-16 min-h-[500px]">
        
        {/* SECTION 1: ENTRY HOOK & HEADLINE */}
        <section className="pt-28 lg:pt-28 pb-2 lg:pb-4 px-4 max-w-4xl mx-auto text-center flex flex-col justify-center shrink-0">
        <p className="text-brand-red font-bold uppercase tracking-[0.1em] text-[10px] md:text-xs mt-2 mb-2 lg:mb-4">
          Families travel from across the country.
        </p>
        <h1 className="font-heading text-4xl lg:text-5xl font-medium text-brand-dark leading-none mb-1 lg:mb-3">
          Pick Your Santa
        </h1>
        <p className="text-brand-dark/80 text-xs md:text-sm font-light leading-snug max-w-2xl mx-auto px-2">
          Two premium experiences. One unforgettable standard. Choose the magic that feels right for your family.
        </p>
      </section>

      {/* SECTION 2: THE TWO CARDS */}
      <section className="max-w-[1000px] 2xl:max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-12 flex-1 flex flex-col pb-2 lg:pb-4 min-h-0">
        
        {/* Unified Responsive Grid */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-3 sm:gap-6 lg:gap-12 flex-1 min-h-0">
          
          {/* Traditional Santa Card */}
          <div className="rounded-[1.25rem] overflow-hidden shadow-2xl transition-all duration-500 group relative bg-brand-dark flex flex-col justify-end flex-1 min-h-[160px] lg:min-h-[200px] 2xl:min-h-[550px] border border-black/5">
            
            {/* Cinematic Image Background (Always absolute) */}
            <div className="absolute inset-0 w-full h-full z-0">
              <Image 
                src="/images/traditional-santa.jpg" 
                alt="Traditional Santa" 
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-[2000ms] group-hover:scale-105" 
              />
              {/* Responsive Gradient Overlay: Darker on mobile for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent lg:bg-none lg:bg-black/50 transition-colors duration-500 lg:group-hover:bg-black/60 z-10 pointer-events-none"></div>
            </div>

            {/* Inner Content Container */}
            <div className="relative z-20 p-4 sm:p-6 lg:p-8 flex flex-col justify-end 2xl:items-center 2xl:text-center h-full w-full">
              
              <span className="text-[#d82b3d] font-bold uppercase tracking-[0.2em] text-[9px] sm:text-[9px] lg:text-[10px] mb-1 sm:mb-2 block drop-shadow-md">
                The Classic Choice
              </span>
              
              <div className="w-8 lg:w-12 h-[1px] bg-white/30 mb-1 sm:mb-2 lg:mb-4 2xl:mx-auto"></div>

              <h2 className="font-heading text-xl sm:text-3xl lg:text-4xl text-white mb-1 sm:mb-2 lg:mb-2 leading-none drop-shadow-lg">
                Traditional Santa
              </h2>
              
              <div className="mb-2 sm:mb-3 lg:mb-6">
                <p className="text-white/90 lg:text-white/70 text-[11px] sm:text-xs lg:text-xs leading-snug lg:leading-snug font-light line-clamp-2">
                  Every detail of the Christmas magic your family knows and loves delivered at the highest standard. Warm, festive, and filled with wonder.
                </p>
              </div>

              <div className="hidden">
                [PLACEHOLDER: Package names and prices — client providing next week.]
              </div>

              <Link 
                href="/book-now" 
                className="w-full inline-flex items-center justify-center bg-[#c71e32] text-white py-3 lg:py-3 text-[10px] lg:text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-[#c71e32] transition-colors duration-300 rounded-md lg:rounded-lg shadow-lg shrink-0"
              >
                Book Traditional
              </Link>
            </div>
          </div>

          {/* Black Santa Card */}
          <div className="rounded-[1.25rem] overflow-hidden shadow-2xl transition-all duration-500 group relative bg-brand-dark flex flex-col justify-end flex-1 min-h-[160px] lg:min-h-[200px] 2xl:min-h-[550px] border border-black/5">
            
            {/* Cinematic Image Background (Always absolute) */}
            <div className="absolute inset-0 w-full h-full z-0">
              <Image 
                src="/images/nick-cannon-clean.png" 
                alt="Black Santa" 
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-[50%_15%] transition-transform duration-[2000ms] group-hover:scale-105" 
              />
              {/* Responsive Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent lg:bg-none lg:bg-black/50 transition-colors duration-500 lg:group-hover:bg-black/60 z-10 pointer-events-none"></div>
            </div>

            {/* Inner Content Container */}
            <div className="relative z-20 p-4 sm:p-6 lg:p-8 flex flex-col justify-end 2xl:items-center 2xl:text-center h-full w-full">
              
              <span className="text-[#d82b3d] font-bold uppercase tracking-[0.2em] text-[9px] sm:text-[9px] lg:text-[10px] mb-1 sm:mb-2 block drop-shadow-md">
                The Inclusive Choice
              </span>
              
              <div className="w-8 lg:w-12 h-[1px] bg-white/30 mb-1 sm:mb-2 lg:mb-4 2xl:mx-auto"></div>

              <h2 className="font-heading text-xl sm:text-3xl lg:text-4xl text-white mb-1 sm:mb-2 lg:mb-2 leading-none drop-shadow-lg">
                Black Santa
              </h2>
              
              <div className="mb-2 sm:mb-3 lg:mb-6">
                <p className="text-white/90 lg:text-white/70 text-[11px] sm:text-xs lg:text-xs leading-snug lg:leading-snug font-light line-clamp-2">
                  Representation matters. The same premium photography and enchanting atmosphere with a Santa who looks like your family.
                </p>
              </div>
              
              <div className="hidden">
                [PLACEHOLDER: Package names and prices — client providing next week.]
              </div>

              <Link 
                href="/black-santa" 
                className="w-full inline-flex items-center justify-center bg-[#c71e32] text-white py-3 lg:py-3 text-[10px] lg:text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-[#c71e32] transition-colors duration-300 rounded-md lg:rounded-lg shadow-lg shrink-0"
              >
                Book Black Santa
              </Link>
            </div>
          </div>
        </div>
      </section>
      </div>



      {/* SECTION 3: SHARED SOCIAL PROOF */}
      <section className="bg-white pt-8 pb-16 lg:pt-10 lg:pb-20 border-t border-brand-dark/10 relative overflow-hidden">
        
        {/* Mirrored Chimes */}
        <ChimesMirrored />

        {/* Subtle background element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-square bg-brand-gold/5 rounded-full blur-3xl pointer-events-none z-0"></div>
        
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <h3 className="text-center font-heading text-3xl sm:text-4xl md:text-5xl text-brand-dark mb-10 md:mb-12">
            What people are saying
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            
            {/* Testimonial 1 - Traditional Santa */}
            <div className="flex flex-col relative p-10 lg:p-12 text-center rounded-3xl bg-[#fcfaf9] shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-black/[0.03] border-t-4 border-t-[#c71e32] hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500">
              <Quote className="absolute top-6 left-6 w-10 h-10 text-[#c71e32]/10 fill-[#c71e32]/5 rotate-180" />
              <div className="flex justify-center gap-1.5 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#c71e32] fill-[#c71e32]" />
                ))}
              </div>
              <p className="text-brand-dark/90 font-light text-base lg:text-lg leading-relaxed mb-8 flex-1 italic drop-shadow-sm">
                "We have done the mall Santa experience every year for the last five years and nothing has come close to Holiday Dream Photos. The setup was beautiful, the photographer was incredible, and our daughter actually believed. The photos came out better than anything we have ever had. We are already booked for next year."
              </p>
              <div className="flex flex-col items-center justify-center mt-auto pt-6 border-t border-brand-dark/5">
                <span className="font-bold text-brand-dark uppercase tracking-[0.2em] text-[10px] lg:text-xs mb-1.5">
                  Marcus T
                </span>
                <span className="text-[#c71e32] text-[9px] lg:text-[10px] uppercase tracking-[0.3em] font-bold opacity-80">
                  Traditional Santa
                </span>
              </div>
            </div>

            {/* Testimonial 2 - Black Santa */}
            <div className="flex flex-col relative p-10 lg:p-12 text-center rounded-3xl bg-[#fcfaf9] shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-black/[0.03] border-t-4 border-t-[#c71e32] hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500">
              <Quote className="absolute top-6 left-6 w-10 h-10 text-[#c71e32]/10 fill-[#c71e32]/5 rotate-180" />
              <div className="flex justify-center gap-1.5 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#c71e32] fill-[#c71e32]" />
                ))}
              </div>
              <p className="text-brand-dark/90 font-light text-base lg:text-lg leading-relaxed mb-8 flex-1 italic drop-shadow-sm">
                "Holiday Dream Photos did something I did not think was possible, they made my whole family want to take a Christmas photo together. My husband never joins in. This year he was the one suggesting we book early. The Black Santa experience was genuine, warm, and absolutely magical. We are telling everyone we know."
              </p>
              <div className="flex flex-col items-center justify-center mt-auto pt-6 border-t border-brand-dark/5">
                <span className="font-bold text-brand-dark uppercase tracking-[0.2em] text-[10px] lg:text-xs mb-1.5">
                  Keisha
                </span>
                <span className="text-[#c71e32] text-[9px] lg:text-[10px] uppercase tracking-[0.3em] font-bold opacity-80">
                  Black Santa
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: FAQ */}
      <div className="relative border-t border-brand-dark/10 overflow-hidden bg-brand-light">
        {/* Subtle decorative background */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none"></div>
        <FaqAccordion />
      </div>

      {/* SECTION 5: FINAL CTA */}
      <FinalCTA 
        headline="Not sure which to choose?"
        body="Both are premium and magical. The only difference is which Santa feels right for your family. You cannot go wrong with either."
        ctaText="Book Your Session Now"
      />

    </div>
  );
}
