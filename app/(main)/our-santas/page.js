import Link from "next/link";
import { Quote } from "lucide-react";

export const metadata = {
  title: 'Pick Your Santa | Holiday Dream Photos',
  description: 'Two premium experiences. One unforgettable standard. Choose between our Traditional and Black Santa experiences.',
};

export default function OurSantasPage() {
  return (
    <div className="bg-[#F9F7F4] min-h-screen">
      
      {/* SECTION 1: ENTRY HOOK & HEADLINE */}
      <section className="pt-32 md:pt-40 pb-16 px-4 max-w-4xl mx-auto text-center">
        <p className="text-brand-red font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-6">
          Families travel from across the country for this experience. Here is why.
        </p>
        <h1 className="font-bodoni text-5xl md:text-7xl font-medium text-[#113122] leading-none mb-6">
          Pick Your Santa
        </h1>
        <p className="text-[#113122]/70 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
          Two premium experiences. One unforgettable standard. Choose the magic that feels right for your family.
        </p>
      </section>

      {/* SECTION 2: THE TWO CARDS */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          
          {/* Traditional Santa Card */}
          <div className="bg-white border border-[#113122]/10 rounded-sm overflow-hidden flex flex-col shadow-sm hover:shadow-2xl transition-all duration-500 group">
            <div className="w-full aspect-[4/3] bg-gray-200 relative overflow-hidden">
              <img 
                src="/images/traditional-santa.jpg" 
                alt="Traditional Santa" 
                className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105" 
              />
            </div>
            <div className="p-8 md:p-12 flex flex-col flex-1 bg-white relative z-10">
              <span className="text-brand-red uppercase tracking-[0.2em] text-[10px] font-bold mb-4 block">
                The Classic Experience
              </span>
              <h2 className="font-bodoni text-4xl text-[#113122] mb-6">
                Traditional Santa
              </h2>
              <p className="text-[#113122]/70 text-sm md:text-base leading-relaxed mb-8 flex-1">
                Every detail of the Christmas magic your family knows and loves — delivered at the highest standard. Warm, festive, and filled with the kind of wonder that makes children's eyes light up.
              </p>
              
              {/* ENGINEER NOTE: Hidden until client confirms pricing */}
              <div className="hidden">
                [PLACEHOLDER: Package names and prices — client providing next week.]
              </div>

              <Link 
                href="/book-now" 
                className="w-full inline-flex items-center justify-center bg-[#113122] text-white py-4 md:py-5 text-xs font-bold uppercase tracking-widest hover:bg-brand-red transition-colors duration-300 rounded-sm mt-auto"
              >
                Book Traditional Santa
              </Link>
            </div>
          </div>

          {/* Black Santa Card */}
          <div className="bg-white border border-[#113122]/10 rounded-sm overflow-hidden flex flex-col shadow-sm hover:shadow-2xl transition-all duration-500 group">
            <div className="w-full aspect-[4/3] bg-gray-200 relative overflow-hidden">
              <img 
                src="/images/black-santa.jpg" 
                alt="Black Santa" 
                className="w-full h-full object-cover object-[50%_15%] transition-transform duration-[1500ms] group-hover:scale-105" 
              />
            </div>
            <div className="p-8 md:p-12 flex flex-col flex-1 bg-white relative z-10">
              <span className="text-brand-red uppercase tracking-[0.2em] text-[10px] font-bold mb-4 block">
                The Home of the Black Santa
              </span>
              <h2 className="font-bodoni text-4xl text-[#113122] mb-6">
                Black Santa
              </h2>
              <p className="text-[#113122]/70 text-sm md:text-base leading-relaxed mb-8 flex-1">
                Representation matters. Christmas magic belongs to every family. The same premium photography and enchanting atmosphere — with a Santa who looks like your family and makes the magic feel truly personal. Families travel from across the country for this experience.
              </p>
              
              {/* ENGINEER NOTE: Hidden until client confirms pricing */}
              <div className="hidden">
                [PLACEHOLDER: Package names and prices — client providing next week.]
              </div>

              <Link 
                href="/book-now" 
                className="w-full inline-flex items-center justify-center bg-[#113122] text-white py-4 md:py-5 text-xs font-bold uppercase tracking-widest hover:bg-brand-red transition-colors duration-300 rounded-sm mt-auto"
              >
                Book Black Santa
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: SHARED SOCIAL PROOF */}
      <section className="bg-white py-20 border-t border-[#113122]/10 relative overflow-hidden">
        {/* Subtle background element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-square bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center relative z-10">
          <h3 className="font-bodoni text-4xl md:text-5xl text-[#113122] mb-12">
            What people are saying
          </h3>
          
          <div className="relative inline-block max-w-3xl">
            <Quote className="absolute -top-6 -left-6 md:-top-10 md:-left-12 w-12 h-12 md:w-20 md:h-20 text-[#D4AF37]/20" />
            <p className="text-xl md:text-2xl lg:text-3xl text-[#113122] leading-relaxed font-bodoni italic mb-8 relative z-10 drop-shadow-sm">
              "Holiday Dream Photos continues to exceed our expectations every holiday season. Their Black Santa is truly special — families travel from all over just to take photos with him. It is more than just photos — it is a magical experience for the community."
            </p>
            <p className="text-brand-red font-bold uppercase tracking-[0.2em] text-xs">
              — Baldwin Hills Crenshaw Shopping Center
            </p>
          </div>

          {/* ENGINEER NOTE: Hidden family testimonials pending content */}
          <div className="hidden">
            <p>[PLACEHOLDER: Family testimonial 1 — full name and city required]</p>
            <p>[PLACEHOLDER: Family testimonial 2 — Black Santa specific, full name and city required]</p>
          </div>
        </div>
      </section>

      {/* SECTION 4: FAQ */}
      <section className="py-24 bg-[#F9F7F4] border-t border-[#113122]/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center mb-16">
            <h3 className="font-bodoni text-4xl md:text-5xl text-[#113122]">
              Frequently Asked Questions
            </h3>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-8 md:p-10 rounded-sm shadow-sm border border-[#113122]/5">
              <h4 className="text-lg font-bold text-[#113122] mb-4">Can I book both experiences?</h4>
              <p className="text-[#113122]/70 leading-relaxed font-light">
                Absolutely. Many families book both. Each session is separate and fully confirmed at the time of booking.
              </p>
            </div>
            
            <div className="bg-white p-8 md:p-10 rounded-sm shadow-sm border border-[#113122]/5">
              <h4 className="text-lg font-bold text-[#113122] mb-4">Which locations offer both experiences?</h4>
              <p className="text-[#113122]/70 leading-relaxed font-light">
                All 8 of our locations offer both the Traditional Santa and Black Santa experience. Select your location at checkout.
              </p>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-sm shadow-sm border border-[#113122]/5">
              <h4 className="text-lg font-bold text-[#113122] mb-4">What is included in a session?</h4>
              
              {/* ENGINEER NOTE: Hidden until client confirms details */}
              <div className="hidden">
                [PLACEHOLDER: Package details — client providing next week]
              </div>
              
              <p className="text-[#113122]/40 italic text-sm font-light">
                Package details and inclusions will be announced soon.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 5: FINAL CTA */}
      <section className="py-24 md:py-32 bg-[#113122] text-center px-4 relative overflow-hidden">
        {/* Subtle decorative background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_#D4AF37_0%,_transparent_70%)] mix-blend-screen blur-3xl opacity-20"></div>
        </div>
        
        <div className="max-w-2xl mx-auto relative z-10">
          <h3 className="font-bodoni text-4xl md:text-5xl lg:text-6xl text-[#F9F7F4] mb-6 drop-shadow-lg">
            Not sure which to choose?
          </h3>
          <p className="text-[#F9F7F4]/80 text-lg md:text-xl font-light leading-relaxed mb-10 md:mb-12">
            Both are premium. Both are magical. Both produce photos your family will keep forever. The only difference is which Santa feels right for your family. You cannot go wrong with either.
          </p>
          <Link 
            href="/book-now" 
            className="inline-block bg-brand-red text-white px-10 py-5 md:px-14 md:py-6 text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-brand-red transition-all duration-300 rounded-sm shadow-2xl hover:shadow-[0_0_40px_rgba(200,16,46,0.4)]"
          >
            Book Your Session Now
          </Link>
        </div>
      </section>

    </div>
  );
}
