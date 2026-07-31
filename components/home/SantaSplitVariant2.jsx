"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SantaSplitVariant2() {
  return (
    <section className="bg-[#F9F7F4] relative overflow-hidden py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <h2 className="font-bodoni text-4xl md:text-5xl lg:text-6xl text-[#113122] tracking-tight leading-tight mb-2">
            Two magical experiences. <br className="hidden md:block" />
            <span className="italic text-brand-red">One unforgettable standard.</span>
          </h2>
        </div>

        {/* Minimalist Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Traditional Santa Card */}
          <div className="flex flex-col bg-white rounded-sm shadow-xl hover:shadow-2xl transition-shadow duration-500 overflow-hidden group">
            {/* Image Container - Fixed Aspect Ratio */}
            <div className="relative w-full aspect-[4/3] md:aspect-square lg:aspect-[4/3] overflow-hidden">
              <img 
                src="/images/traditional-santa.jpg" 
                alt="Traditional Santa"
                className="absolute inset-0 w-full h-full object-cover object-top md:object-center group-hover:scale-105 transition-transform duration-1000 ease-out" 
              />
            </div>
            
            {/* Content Container - White Background, Dark Text */}
            <div className="flex flex-col flex-1 p-8 md:p-10 lg:p-12">
              <span className="text-brand-red font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">
                The Classic
              </span>
              <h3 className="font-bodoni text-4xl lg:text-5xl mb-6 text-[#113122]">
                Traditional Santa
              </h3>
              <p className="text-[#113122]/70 font-light text-sm lg:text-base leading-relaxed mb-10 flex-1">
                The classic Christmas magic your family knows and loves — delivered at the highest standard. Warm, festive, and filled with the kind of wonder that makes children's eyes light up.
              </p>
              
              <Link 
                href="/book-now"
                className="inline-flex items-center justify-center gap-3 bg-brand-red text-white px-8 py-4 rounded-sm text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#113122] transition-colors duration-300 w-full sm:w-auto self-start"
              >
                Book Traditional Santa
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
          
          {/* Black Santa Card */}
          <div className="flex flex-col bg-white rounded-sm shadow-xl hover:shadow-2xl transition-shadow duration-500 overflow-hidden group">
            <div className="relative w-full aspect-[4/3] md:aspect-square lg:aspect-[4/3] overflow-hidden">
              <img 
                src="/images/black-santa.jpg" 
                alt="Black Santa"
                className="absolute inset-0 w-full h-full object-cover object-[50%_25%] md:object-[50%_15%] group-hover:scale-105 transition-transform duration-1000 ease-out" 
              />
            </div>
            
            <div className="flex flex-col flex-1 p-8 md:p-10 lg:p-12">
              <span className="text-brand-red font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">
                The Culture
              </span>
              <h3 className="font-bodoni text-4xl lg:text-5xl mb-6 text-[#113122]">
                Black Santa
              </h3>
              <p className="text-[#113122]/70 font-light text-sm lg:text-base leading-relaxed mb-10 flex-1">
                Representation matters. Christmas magic belongs to every family. The same premium photography and enchanting atmosphere — with a Santa who looks like your family and makes the magic feel truly personal. Families travel from across the country for this experience.
              </p>
              
              <Link 
                href="/book-now"
                className="inline-flex items-center justify-center gap-3 bg-brand-red text-white px-8 py-4 rounded-sm text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#113122] transition-colors duration-300 w-full sm:w-auto self-start"
              >
                Book Black Santa
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
