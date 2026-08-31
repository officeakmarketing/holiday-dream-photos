import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";

import HiringApplication from "@/components/forms/HiringApplication";

export const metadata = {
  title: 'Join Our Team | Holiday Dream Photos',
  description: 'Join the Holiday Dream Photos team as a real-bearded Santa or support staff.',
};

export default function HiringPage() {
  return (
    <div className="bg-[#fcfaf9] min-h-screen font-sans">
      
      {/* SECTION 1: HERO */}
      <PageHero 
        title="Join the Holiday Dream Photos Team"
        subtitle="Careers"
        description="We are always looking for exceptional Santas and support staff who believe that every family deserves a truly magical Christmas experience."
        imageSrc="/images/traditional-santa.jpg"
        imageAlt="Holiday Dream Photos Team"
        className="pt-32 pb-16 md:pt-32 md:pb-12"
        imagePosition="object-top"
        titleClassName="text-4xl sm:text-5xl md:text-6xl max-w-4xl mx-auto"
      />

      {/* SECTION 2: WHAT WE LOOK FOR */}
      <section className="px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto mb-16 mt-16 lg:mt-24">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-brand-dark mb-4">What We Look For</h2>
          <div className="w-16 h-1 bg-brand-red mx-auto"></div>
        </div>

        {/* Side-by-Side Typographic Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 lg:divide-x lg:divide-brand-dark/10">
          
          {/* For Santas */}
          <div className="lg:pr-16 xl:pr-24">
            <h3 className="font-heading text-3xl md:text-4xl text-brand-red mb-8 text-center lg:text-left">For Santas</h3>
            <ul className="space-y-6 max-w-lg mx-auto lg:mx-0">
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
            <h3 className="font-heading text-3xl md:text-4xl text-brand-dark mb-8 text-center lg:text-left">For Support Staff</h3>
            <ul className="space-y-6 max-w-lg mx-auto lg:mx-0">
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

      {/* SECTION 3: INTERACTIVE APPLICATION FLOW */}
      <HiringApplication />

    </div>
  );
}
