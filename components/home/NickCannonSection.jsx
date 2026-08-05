import { Star, Quote } from "lucide-react";
import Image from "next/image";
import FadeIn from "../animations/FadeIn";

export default function NickCannonSection() {
  return (
    <section className="py-16 md:py-24 bg-brand-light relative overflow-hidden">
      {/* Decorative Wreath Backgrounds */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] opacity-[0.03] pointer-events-none z-0">
        <Image src="/images/hero_wreath.png" alt="Wreath" fill className="object-contain" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12 relative">
          <div className="relative inline-block w-full">
            <span className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-heading text-[5rem] md:text-[7rem] lg:text-[10rem] text-brand-dark/5 italic whitespace-nowrap pointer-events-none select-none">
              Social Proof
            </span>
            <h2 className="relative z-10 font-heading text-3xl sm:text-4xl md:text-5xl text-brand-dark tracking-tight leading-tight px-4">
              Loved by <br className="sm:hidden" />
              <span className="italic text-brand-red drop-shadow-sm">everyone</span>
            </h2>
          </div>
        </div>

        {/* Massive Featured Testimonial Card */}
        <div className="max-w-4xl mx-auto w-full mt-8 md:mt-12">
          <FadeIn
            y={40}
            duration={0.8}
            className="flex flex-col relative px-5 py-8 sm:p-12 lg:p-16 text-center rounded-[2rem] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-gray-100/60 transition-all duration-500 w-full hover:-translate-y-2 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)]"
          >
            {/* Massive Elegant Quote Mark */}
            <Quote className="hidden sm:block absolute top-8 left-8 lg:top-12 lg:left-12 w-12 h-12 lg:w-16 lg:h-16 text-brand-dark/5 fill-current rotate-180" />
            <Quote className="hidden sm:block absolute bottom-8 right-8 lg:bottom-12 lg:right-12 w-12 h-12 lg:w-16 lg:h-16 text-brand-dark/5 fill-current" />

            <div className="flex justify-center gap-2 mb-6 sm:mb-8 relative z-10 pt-2 sm:pt-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-brand-dark fill-brand-dark" />
              ))}
            </div>

            <p className="text-gray-800 font-heading text-lg sm:text-2xl lg:text-3xl leading-[1.6] italic mb-8 sm:mb-10 relative z-10 max-w-3xl mx-auto px-2 sm:px-0">
              "Holiday Dream Photos continues to exceed our expectations every holiday season. Their Black Santa is truly special, families travel from all over just to take photos with him. It is more than just photos, it is a magical experience for the community."
            </p>

            <div className="flex flex-col items-center justify-center relative z-10 mt-6">
              <span className="font-bold text-brand-dark uppercase tracking-[0.25em] text-xs md:text-sm mb-2.5">
                Baldwin Hills Crenshaw Shopping Center
              </span>
              <span className="text-brand-red text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold">
                Verified Partner
              </span>

              {/* Nick Cannon Photo */}
              <div className="flex flex-col items-center mt-10">
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 shadow-lg transition-transform duration-500 rounded-sm bg-white p-2">
                  <Image 
                    src="/images/nick-cannon-polaroid.png" 
                    alt="Nick Cannon visiting Black Santa" 
                    fill 
                    className="object-contain" 
                  />
                </div>
                <p className="mt-6 text-brand-dark font-medium italic text-sm md:text-base opacity-90 tracking-wide">
                  Even Nick Cannon came to experience the magic.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
