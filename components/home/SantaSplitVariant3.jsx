"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SantaSplitVariant3() {
  return (
    <section className="bg-white relative overflow-hidden py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-24">
          <h2 className="font-bodoni text-4xl md:text-5xl lg:text-6xl text-[#113122] tracking-tight leading-tight mb-2">
            Two magical experiences. <br className="hidden md:block" />
            <span className="italic text-brand-red">One unforgettable standard.</span>
          </h2>
        </div>

        <div className="flex flex-col gap-24 md:gap-32">
          
          {/* Traditional Santa - Image Left, Text Right */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2">
              <div className="relative w-full aspect-[4/5] lg:aspect-[3/4] rounded-sm overflow-hidden shadow-2xl">
                <img 
                  src="/images/traditional-santa.jpg" 
                  alt="Traditional Santa"
                  className="absolute inset-0 w-full h-full object-cover object-top md:object-center hover:scale-105 transition-transform duration-[2000ms] ease-out" 
                />
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <span className="text-brand-red font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block flex items-center gap-4">
                <div className="w-8 h-[1px] bg-brand-red"></div>
                The Classic
              </span>
              <h3 className="font-bodoni text-5xl lg:text-6xl mb-8 text-[#113122]">
                Traditional Santa
              </h3>
              <p className="text-[#113122]/70 font-light text-lg lg:text-xl leading-relaxed mb-12 max-w-lg">
                The classic Christmas magic your family knows and loves — delivered at the highest standard. Warm, festive, and filled with the kind of wonder that makes children's eyes light up.
              </p>
              
              <Link 
                href="/our-santas"
                className="inline-flex items-center justify-center gap-4 bg-brand-red text-white px-10 py-5 rounded-sm text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#113122] transition-colors duration-300 w-fit group"
              >
                Book Traditional Santa
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
          </div>
          
          {/* Black Santa - Text Left, Image Right (Reverse on Mobile) */}
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2 flex flex-col justify-center lg:pl-12">
              <span className="text-brand-red font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block flex items-center gap-4">
                <div className="w-8 h-[1px] bg-brand-red"></div>
                The Culture
              </span>
              <h3 className="font-bodoni text-5xl lg:text-6xl mb-8 text-[#113122]">
                Black Santa
              </h3>
              <p className="text-[#113122]/70 font-light text-lg lg:text-xl leading-relaxed mb-12 max-w-lg">
                Representation matters. Christmas magic belongs to every family. The same premium photography and enchanting atmosphere — with a Santa who looks like your family and makes the magic feel truly personal. Families travel from across the country for this experience.
              </p>
              
              <Link 
                href="/black-santa"
                className="inline-flex items-center justify-center gap-4 bg-brand-red text-white px-10 py-5 rounded-sm text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#113122] transition-colors duration-300 w-fit group"
              >
                Book Black Santa
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="relative w-full aspect-[4/5] lg:aspect-[3/4] rounded-sm overflow-hidden shadow-2xl">
                <img 
                  src="/images/black-santa.jpg" 
                  alt="Black Santa"
                  className="absolute inset-0 w-full h-full object-cover object-[50%_25%] md:object-[50%_15%] hover:scale-105 transition-transform duration-[2000ms] ease-out" 
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
