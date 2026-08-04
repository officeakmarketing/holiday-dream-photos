import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: 'Join Our Team | Holiday Dream Photos',
  description: 'Join the Holiday Dream Photos team as a real-bearded Santa or support staff.',
};

export default function HiringPage() {
  return (
    <div className="bg-[#fcfaf9] min-h-screen font-sans">
      
      {/* SECTION 1: HERO */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-24 px-4 bg-black text-center relative overflow-hidden mb-24 lg:mb-32">
        {/* Cinematic Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image 
            src="/images/traditional-santa.jpg" 
            alt="Holiday Dream Photos Team" 
            fill
            sizes="(max-width: 1024px) 100vw, 100vw"
            className="object-cover scale-105 object-top"
          />
          {/* Clean Transparent Black Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-brand-red font-bold uppercase tracking-[0.3em] text-xs md:text-sm mb-4 md:mb-6 block drop-shadow-md">
            Careers
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl text-white mb-6 md:mb-8 leading-tight drop-shadow-xl">
            Join the Holiday Dream Photos Team
          </h1>
          <p className="text-white/80 font-light text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto drop-shadow-md px-4">
            We are always looking for exceptional Santas and support staff who believe that every family deserves a truly magical Christmas experience.
          </p>
        </div>
      </section>

      {/* SECTION 2: WHAT WE LOOK FOR */}
      <section className="px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto mb-32">
        <div className="text-center mb-16">
          <h2 className="font-heading text-5xl md:text-6xl text-brand-dark mb-4">What We Look For</h2>
          <div className="w-16 h-1 bg-brand-red mx-auto"></div>
        </div>

        {/* Side-by-Side Typographic Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 lg:divide-x lg:divide-brand-dark/10">
          
          {/* For Santas */}
          <div className="lg:pr-16 xl:pr-24">
            <h3 className="font-heading text-3xl md:text-4xl text-brand-red mb-8">For Santas</h3>
            <ul className="space-y-6">
              {[
                { bold: true, text: "A real, full beard this is a firm requirement and non-negotiable" },
                { bold: false, text: "A natural warmth and genuine love for working with children" },
                { bold: false, text: "Professionalism, reliability, and punctuality" },
                { bold: false, text: "A passion for creating real magic moments that families remember forever" }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="text-brand-red font-bold text-[10px] uppercase tracking-[0.2em] mt-1 shrink-0">0{i+1}</span>
                  <span className={`text-brand-dark/80 text-lg leading-relaxed ${item.bold ? 'font-bold text-brand-dark' : 'font-light'}`}>
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* For Support Staff */}
          <div className="lg:pl-16 xl:pl-24">
            <h3 className="font-heading text-3xl md:text-4xl text-brand-dark mb-8">For Support Staff</h3>
            <ul className="space-y-6">
              {[
                { text: "A warm, positive energy and excellent communication" },
                { text: "Reliability and punctuality" },
                { text: "Experience with children or events is a strong advantage" }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="text-brand-dark/40 font-bold text-[10px] uppercase tracking-[0.2em] mt-1 shrink-0">0{i+1}</span>
                  <span className="text-brand-dark/80 font-light text-lg leading-relaxed">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* SECTION 3: CTA */}
      <section className="w-full bg-brand-dark py-24 md:py-32 relative overflow-hidden text-center flex flex-col items-center justify-center">
        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-red/10 to-transparent mix-blend-overlay"></div>
        
        <div className="relative z-10 px-4 max-w-4xl mx-auto">
          <h2 className="font-heading text-5xl md:text-6xl text-white mb-10 leading-tight">
            Think you have what it takes?
          </h2>
          
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-brand-red text-white px-12 py-5 text-xs font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-brand-red transition-all duration-300 shadow-[0_15px_30px_rgba(200,16,46,0.2)] hover:shadow-[0_20px_40px_rgba(200,16,46,0.3)]"
          >
            Apply Now
          </a>
          <p className="text-[10px] text-white/40 mt-6 uppercase tracking-[0.3em]">
            Links to external application portal
          </p>
        </div>
      </section>

    </div>
  );
}
