import Link from "next/link";
import { Quote, Star } from "lucide-react";
import Image from "next/image";
import FaqAccordion from "@/components/home/FaqAccordion";
import FinalCTA from "@/components/home/FinalCTA";
export const metadata = {
  title: 'Pick Your Santa | Holiday Dream Photos',
  description: 'Two premium experiences. One unforgettable standard. Choose between our Traditional and Black Santa experiences.',
};

export default function OurSantasPage() {
  return (
    <div className="bg-brand-light min-h-screen">
      {/* ABOVE THE FOLD FULL-SCREEN CONTAINER */}
      <div className="flex flex-col min-h-[85svh] lg:min-h-0 pb-4 lg:pb-24">
        
        {/* SECTION 1: ENTRY HOOK & HEADLINE */}
        <section className="pt-24 md:pt-32 pb-2 md:pb-8 px-4 max-w-4xl mx-auto text-center flex flex-col justify-center shrink-0">
        <p className="text-brand-red font-bold uppercase tracking-[0.1em] text-[10px] md:text-sm mb-3 md:mb-4">
          Families travel from across the country.
        </p>
        <h1 className="font-heading text-4xl md:text-6xl font-medium text-brand-dark leading-none mb-3 md:mb-4">
          Pick Your Santa
        </h1>
        <p className="text-brand-dark/80 text-xs md:text-lg font-light leading-relaxed max-w-2xl mx-auto px-2">
          Two premium experiences. One unforgettable standard. Choose the magic that feels right for your family.
        </p>
      </section>

      {/* SECTION 2: THE TWO CARDS */}
      <section className="max-w-[1200px] w-full mx-auto px-0 sm:px-6 lg:px-12 flex-1 flex flex-col pb-4 lg:pb-12">
        
        {/* Unified Responsive Grid (Cinematic Split Screen on Mobile, Side-by-Side on Desktop) */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-12 flex-1 h-full">
          
          {/* Traditional Santa Card */}
          <div className="rounded-none lg:rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-500 group relative flex-1 bg-brand-dark flex flex-col justify-end lg:min-h-[600px] hover:-translate-y-1 lg:hover:-translate-y-2 lg:hover:shadow-[0_40px_80px_rgba(0,0,0,0.3)] border-y lg:border border-black/5">
            
            {/* Cinematic Image Background (Always absolute) */}
            <div className="absolute inset-0 w-full h-full z-0">
              <Image 
                src="/images/traditional-santa.jpg" 
                alt="Traditional Santa" 
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-[2000ms] group-hover:scale-105" 
              />
              {/* Responsive Gradient Overlay: Full blend on mobile, subtle on desktop */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-95 lg:opacity-40 lg:from-black/50 lg:via-transparent"></div>
            </div>

            {/* Inner Content Container */}
            <div className="relative z-10 p-5 sm:p-6 lg:m-6 lg:p-8 lg:rounded-[1.5rem] lg:bg-black/40 lg:backdrop-blur-md lg:border lg:border-white/10 lg:shadow-2xl transition-all duration-500 lg:group-hover:bg-black/50 lg:group-hover:border-white/20">
              
              <span className="text-[#d82b3d] font-bold uppercase tracking-[0.2em] text-[8px] sm:text-[9px] lg:text-[10px] mb-2 block drop-shadow-md">
                The Classic Choice
              </span>
              
              <div className="w-8 lg:w-12 h-[1px] bg-white/20 mb-2 sm:mb-3 lg:mb-4 transition-all duration-500 group-hover:w-16"></div>

              <h2 className="font-heading text-2xl sm:text-3xl lg:text-5xl text-white mb-2 lg:mb-4 leading-none drop-shadow-lg">
                Traditional Santa
              </h2>
              
              <div className="mb-4 sm:mb-6 lg:mb-8">
                <p className="text-white/80 lg:text-white/70 text-[11px] sm:text-xs lg:text-[13px] leading-snug lg:leading-relaxed font-light">
                  Every detail of the Christmas magic your family knows and loves delivered at the highest standard. Warm, festive, and filled with wonder.
                </p>
              </div>

              <div className="hidden">
                [PLACEHOLDER: Package names and prices — client providing next week.]
              </div>

              <Link 
                href="/book-now" 
                className="w-full inline-flex items-center justify-center bg-[#c71e32] text-white py-3 lg:py-4 text-[10px] lg:text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-[#c71e32] transition-colors duration-300 rounded-md lg:rounded-lg shadow-lg"
              >
                Book Traditional
              </Link>
            </div>
          </div>

          {/* Black Santa Card */}
          <div className="rounded-none lg:rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-500 group relative flex-1 bg-brand-dark flex flex-col justify-end lg:min-h-[600px] hover:-translate-y-1 lg:hover:-translate-y-2 lg:hover:shadow-[0_40px_80px_rgba(0,0,0,0.3)] border-y lg:border border-black/5">
            
            {/* Cinematic Image Background (Always absolute) */}
            <div className="absolute inset-0 w-full h-full z-0">
              <Image 
                src="/images/nick-cannon-clean.png" 
                alt="Black Santa" 
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-[50%_15%] transition-transform duration-[2000ms] group-hover:scale-105" 
              />
              {/* Responsive Gradient Overlay: Full blend on mobile, subtle on desktop */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-95 lg:opacity-40 lg:from-black/50 lg:via-transparent"></div>
            </div>

            {/* Inner Content Container */}
            <div className="relative z-10 p-5 sm:p-6 lg:m-6 lg:p-8 lg:rounded-[1.5rem] lg:bg-black/40 lg:backdrop-blur-md lg:border lg:border-white/10 lg:shadow-2xl transition-all duration-500 lg:group-hover:bg-black/50 lg:group-hover:border-white/20 flex flex-col">
              
              <span className="text-[#d82b3d] font-bold uppercase tracking-[0.2em] text-[8px] sm:text-[9px] lg:text-[10px] mb-2 block drop-shadow-md">
                The Inclusive Choice
              </span>
              
              <div className="w-8 lg:w-12 h-[1px] bg-white/20 mb-2 sm:mb-3 lg:mb-4 transition-all duration-500 group-hover:w-16"></div>

              <h2 className="font-heading text-2xl sm:text-3xl lg:text-5xl text-white mb-2 lg:mb-4 leading-none drop-shadow-lg">
                Black Santa
              </h2>
              
              <div className="mb-4 sm:mb-6 lg:mb-8">
                <p className="text-white/80 lg:text-white/70 text-[11px] sm:text-xs lg:text-[13px] leading-snug lg:leading-relaxed font-light">
                  Representation matters. The same premium photography and enchanting atmosphere with a Santa who looks like your family.
                </p>
              </div>
              
              <div className="hidden">
                [PLACEHOLDER: Package names and prices — client providing next week.]
              </div>

              <Link 
                href="/book-now" 
                className="w-full mt-auto inline-flex items-center justify-center bg-[#c71e32] text-white py-3 lg:py-4 text-[10px] lg:text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-[#c71e32] transition-colors duration-300 rounded-md lg:rounded-lg shadow-lg"
              >
                Book Black Santa
              </Link>
            </div>
          </div>
        </div>
      </section>
      </div>

      {/* SECTION 2.5: NICK CANNON SPOTLIGHT */}
      <section className="bg-brand-dark py-20 lg:py-32 relative overflow-hidden">
        {/* Rich Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-dark to-black pointer-events-none z-0"></div>
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-red/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] opacity-[0.04] pointer-events-none z-0">
          <Image src="/images/hero_wreath.png" alt="Wreath" fill className="object-contain" />
        </div>

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          {/* Image Graphic */}
          <div className="w-full md:w-1/2 flex justify-center perspective-1000">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 transition-all duration-700 ease-out drop-shadow-[0_20px_35px_rgba(0,0,0,0.4)] z-10 group rounded-xl">
              <Image 
                src="/images/nick-cannon-polaroid.png"
                alt="Nick Cannon with Black Santa"
                fill
                className="object-contain transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Typography/Copy */}
          <div className="w-full md:w-1/2 text-center md:text-left relative">
            <Quote className="absolute -top-10 -left-6 md:-left-12 w-16 h-16 md:w-24 md:h-24 text-white/5 rotate-180 z-0" />
            
            <div className="relative z-10">
              <span className="text-brand-red font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs mb-4 block drop-shadow-md">
                Celebrity Endorsed
              </span>
              <h3 className="font-heading text-4xl sm:text-5xl lg:text-7xl text-brand-light mb-6 leading-[1.1] drop-shadow-lg">
                Even <span className="italic text-brand-red">Nick</span> came to experience the magic.
              </h3>
              <p className="text-brand-light/70 text-base sm:text-lg lg:text-xl font-light leading-relaxed max-w-lg mx-auto md:mx-0 mb-8">
                Families travel from all over to experience the premium quality and authentic joy of our Black Santa sessions. Join the countless families and a few familiar faces who have made Holiday Dream Photos their holiday tradition.
              </p>

              {/* Decorative Line */}
              <div className="w-16 h-[1px] bg-gradient-to-r from-brand-red to-transparent mx-auto md:mx-0"></div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: SHARED SOCIAL PROOF */}
      <section className="bg-white pt-8 pb-16 lg:pt-10 lg:pb-20 border-t border-brand-dark/10 relative overflow-hidden">
        {/* Subtle background element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-square bg-brand-gold/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <h3 className="text-center font-heading text-3xl sm:text-4xl md:text-5xl text-brand-dark mb-10 md:mb-12">
            What people are saying
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            
            {/* Testimonial 1 */}
            <div className="flex flex-col relative p-8 lg:p-10 text-center rounded-2xl bg-brand-light shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-brand-dark/5 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-300">
              <Quote className="absolute top-4 left-4 w-6 h-6 text-brand-gold/20" />
              <div className="flex justify-center gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-brand-dark fill-brand-dark" />
                ))}
              </div>
              <p className="text-brand-dark/80 font-light text-sm lg:text-base leading-relaxed mb-8 flex-1 italic">
                "Holiday Dream Photos continues to exceed our expectations every holiday season. Their Black Santa is truly special. Families travel from all over just to take photos with him. It is more than just photos, it is a magical experience for the community."
              </p>
              <div className="flex flex-col items-center justify-center mt-auto pt-5 border-t border-brand-dark/10">
                <span className="font-bold text-brand-dark uppercase tracking-[0.15em] text-[9px] lg:text-[10px] mb-1">
                  Baldwin Hills Crenshaw Shopping Center
                </span>
                <span className="text-brand-red text-[8px] uppercase tracking-[0.3em] font-bold">
                  Verified Partner
                </span>
              </div>
            </div>

            {/* Testimonial 2 (Placeholder) */}
            <div className="flex flex-col relative p-8 lg:p-10 text-center rounded-2xl bg-brand-light shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-brand-dark/5 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-300">
              <Quote className="absolute top-4 left-4 w-6 h-6 text-brand-gold/20" />
              <div className="flex justify-center gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-brand-dark fill-brand-dark" />
                ))}
              </div>
              <p className="text-brand-dark/80 font-light text-sm lg:text-base leading-relaxed mb-8 flex-1 italic">
                "[PLACEHOLDER: Pending new family testimonial from client. This layout is designed to perfectly fit your 2 total testimonials side-by-side.]"
              </p>
              <div className="flex flex-col items-center justify-center mt-auto pt-5 border-t border-brand-dark/10">
                <span className="font-bold text-brand-dark uppercase tracking-[0.15em] text-[9px] lg:text-[10px] mb-1">
                  [Family Name]
                </span>
                <span className="text-brand-red text-[8px] uppercase tracking-[0.3em] font-bold">
                  [Location]
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
