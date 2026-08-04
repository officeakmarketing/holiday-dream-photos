import Link from "next/link";
import { Quote } from "lucide-react";
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
      <div className="flex flex-col min-h-[100svh] lg:min-h-0 pb-16 lg:pb-24">
        
        {/* SECTION 1: ENTRY HOOK & HEADLINE */}
        <section className="pt-28 md:pt-32 pb-4 md:pb-8 px-4 max-w-4xl mx-auto text-center flex flex-col justify-center shrink-0">
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
      <section className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-12 flex-1 flex flex-col pb-8 lg:pb-12">
        
        {/* Unified Responsive Grid (Cinematic Split Screen on Mobile, Side-by-Side on Desktop) */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-12 flex-1 h-full">
          
          {/* Traditional Santa Card */}
          <div className="rounded-xl overflow-hidden flex flex-col shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-all duration-500 group relative flex-1 lg:flex-auto lg:h-[55vh] 2xl:h-[65vh] lg:min-h-[500px] lg:max-h-[750px] border border-black/5 lg:hover:-translate-y-2 lg:hover:shadow-[0_30px_60px_rgba(0,0,0,0.3)]">
            
            {/* Cinematic Image Background */}
            <div className="absolute inset-0 w-full h-full bg-brand-dark z-0">
              <img 
                src="/images/traditional-santa.jpg" 
                alt="Traditional Santa" 
                className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105 opacity-90 group-hover:opacity-100" 
              />
              {/* Rich Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20 group-hover:via-black/50 transition-colors duration-700"></div>
            </div>

            {/* Content Container */}
            <div className="flex flex-col flex-1 items-start justify-end p-0 lg:p-8 relative z-10 h-full w-full">
              
              {/* Always-Visible Panel (Simple Overlay on Mobile, Glass on Desktop) */}
              <div className="w-full text-left transition-all duration-500 bg-black/40 lg:backdrop-blur-xl lg:bg-black/30 p-5 lg:p-8 lg:rounded-2xl lg:border lg:border-white/20 lg:shadow-lg lg:group-hover:bg-black/40 lg:group-hover:border-white/30">
                <span className="text-brand-red font-bold uppercase tracking-[0.2em] text-[8px] lg:text-[11px] mb-1 lg:mb-2 block drop-shadow-md">
                  The Classic Choice
                </span>
                
                {/* Delicate Accent Line */}
                <div className="w-8 lg:w-12 h-[1px] bg-white/30 mb-2 lg:mb-4 transition-all duration-500 group-hover:w-16"></div>

                <h2 className="font-heading text-xl sm:text-3xl lg:text-5xl text-white mb-2 lg:mb-4 leading-tight drop-shadow-lg">
                  Traditional Santa
                </h2>
                
                {/* Description (Always Visible) */}
                <div className="mb-4 lg:mb-8">
                  <p className="text-white/80 lg:text-white/90 text-[10px] lg:text-sm leading-[1.5] lg:leading-relaxed line-clamp-2 lg:line-clamp-none font-light">
                    Every detail of the Christmas magic your family knows and loves delivered at the highest standard. Warm, festive, and filled with wonder.
                  </p>
                </div>
              
              {/* ENGINEER NOTE: Hidden until client confirms pricing */}
              <div className="hidden">
                [PLACEHOLDER: Package names and prices — client providing next week.]
              </div>

              <Link 
                href="/book-now" 
                className="w-full inline-flex items-center justify-center bg-brand-red text-white py-3.5 lg:py-4 text-[10px] lg:text-xs font-bold uppercase tracking-[0.2em] hover:bg-brand-dark transition-all duration-300 rounded-md shadow-[0_0_15px_rgba(200,30,30,0.5)] lg:shadow-[0_0_20px_rgba(200,30,30,0.4)] lg:hover:shadow-[0_0_25px_rgba(17,49,34,0.6)]"
              >
                Book <span className="inline">&nbsp;Traditional</span>
              </Link>
              </div>
            </div>
          </div>

          {/* Black Santa Card */}
          <div className="rounded-xl overflow-hidden flex flex-col shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-all duration-500 group relative flex-1 lg:flex-auto lg:h-[55vh] 2xl:h-[65vh] lg:min-h-[500px] lg:max-h-[750px] border border-black/5 lg:hover:-translate-y-2 lg:hover:shadow-[0_30px_60px_rgba(0,0,0,0.3)]">
            
            {/* Cinematic Image Background */}
            <div className="absolute inset-0 w-full h-full bg-brand-dark z-0">
              <img 
                src="/images/black-santa.jpg" 
                alt="Black Santa" 
                className="w-full h-full object-cover object-[50%_15%] transition-transform duration-[1500ms] group-hover:scale-105 opacity-90 group-hover:opacity-100" 
              />
              {/* Rich Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20 group-hover:via-black/50 transition-colors duration-700"></div>
            </div>

            {/* Content Container */}
            <div className="flex flex-col flex-1 items-start justify-end p-0 lg:p-8 relative z-10 h-full w-full">
              
              {/* Always-Visible Panel (Simple Overlay on Mobile, Glass on Desktop) */}
              <div className="w-full text-left transition-all duration-500 bg-black/40 lg:backdrop-blur-xl lg:bg-black/30 p-5 lg:p-8 lg:rounded-2xl lg:border lg:border-white/20 lg:shadow-lg lg:group-hover:bg-black/40 lg:group-hover:border-white/30">
                <span className="text-brand-red font-bold uppercase tracking-[0.2em] text-[8px] lg:text-[11px] mb-1 lg:mb-2 block drop-shadow-md">
                  The Inclusive Choice
                </span>

                {/* Delicate Accent Line */}
                <div className="w-8 lg:w-12 h-[1px] bg-white/30 mb-2 lg:mb-4 transition-all duration-500 group-hover:w-16"></div>

                <h2 className="font-heading text-xl sm:text-3xl lg:text-5xl text-white mb-2 lg:mb-4 leading-tight drop-shadow-lg">
                  Black Santa
                </h2>
                
                {/* Description (Always Visible) */}
                <div className="mb-4 lg:mb-8">
                  <p className="text-white/80 lg:text-white/90 text-[10px] lg:text-sm leading-[1.5] lg:leading-relaxed line-clamp-2 lg:line-clamp-none font-light">
                    Representation matters. The same premium photography and enchanting atmosphere with a Santa who looks like your family.
                  </p>
                </div>
              
              {/* ENGINEER NOTE: Hidden until client confirms pricing */}
              <div className="hidden">
                [PLACEHOLDER: Package names and prices — client providing next week.]
              </div>

              <Link 
                href="/book-now" 
                className="w-full inline-flex items-center justify-center bg-brand-red text-white py-3.5 lg:py-4 text-[10px] lg:text-xs font-bold uppercase tracking-[0.2em] hover:bg-brand-dark transition-all duration-300 rounded-md shadow-[0_0_15px_rgba(200,30,30,0.5)] lg:shadow-[0_0_20px_rgba(200,30,30,0.4)] lg:hover:shadow-[0_0_25px_rgba(17,49,34,0.6)]"
              >
                Book <span className="inline">&nbsp;Black Santa</span>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>

      {/* SECTION 3: SHARED SOCIAL PROOF */}
      <section className="bg-white pt-8 pb-16 lg:pt-10 lg:pb-20 border-t border-brand-dark/10 relative overflow-hidden">
        {/* Subtle background element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-square bg-brand-gold/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
          <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl text-brand-dark mb-4 md:mb-6">
            What people are saying
          </h3>
          
          <div className="relative flex flex-col items-center max-w-3xl mx-auto px-2 sm:px-6">
            <Quote className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-brand-gold/40 mb-2 md:mb-4" />
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-brand-dark leading-relaxed font-heading italic mb-6 md:mb-8 relative z-10 drop-shadow-sm">
              "Holiday Dream Photos continues to exceed our expectations every holiday season. Their Black Santa is truly special. Families travel from all over just to take photos with him. It is more than just photos, it is a magical experience for the community."
            </p>
            <p className="text-brand-red font-bold uppercase tracking-[0.2em] text-[10px] sm:text-xs">
              Baldwin Hills Crenshaw Shopping Center
            </p>
          </div>

          {/* ENGINEER NOTE: Hidden family testimonials pending content */}
          <div className="hidden">
            <p>[PLACEHOLDER: Family testimonial 1]</p>
            <p>[PLACEHOLDER: Family testimonial 2]</p>
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
