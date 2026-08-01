"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    quote: "Holiday Dream Photos continues to exceed our expectations every holiday season. Their Black Santa is truly special, families travel from all over just to take photos with him. It is more than just photos, it is a magical experience for the community.",
    name: "Baldwin Hills Crenshaw Shopping Center",
    subtitle: "Verified Partner",
    stars: 5,
  },
  {
    id: 2,
    quote: "Our family has been coming to see Santa here for 4 years in a row. The set design is absolutely stunning and the photos are always flawless. The kids talk about it for months!",
    name: "Sarah Jenkins",
    subtitle: "Los Angeles, CA",
    stars: 5,
  },
  {
    id: 3,
    quote: "The most authentic, heartwarming holiday experience we've ever had. Santa was incredibly patient with our newborn and the quality of the premium photo package is unmatched.",
    name: "The Mitchell Family",
    subtitle: "Culver City, CA",
    stars: 5,
  }
];

export default function TestimonialsMasonry() {
  return (
    <section className="py-16 md:py-20 bg-[#F9F7F4] relative overflow-hidden">
      
      {/* Decorative Wreath Backgrounds */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] opacity-[0.03] pointer-events-none z-0">
        <Image src="/images/hero_wreath.png" alt="Wreath" fill className="object-contain" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12 relative">
          <div className="relative inline-block w-full">
            <span className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bodoni text-[5rem] md:text-[7rem] lg:text-[10rem] text-[#113122]/5 italic whitespace-nowrap pointer-events-none select-none">
              Testimonials
            </span>
            <h2 className="relative z-10 font-bodoni text-3xl sm:text-4xl md:text-5xl text-[#113122] tracking-tight leading-tight px-4">
              What people <br className="sm:hidden" />
              <span className="italic text-brand-red drop-shadow-sm">are saying</span>
            </h2>
          </div>
        </div>

        {/* Single Featured Wide Card */}
        <div className="max-w-4xl mx-auto w-full mt-8 md:mt-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ 
              y: -10,
              boxShadow: "0 40px 80px -20px rgba(0, 0, 0, 0.1)"
            }}
            className="flex flex-col relative px-5 py-8 sm:p-12 lg:p-16 text-center rounded-[2rem] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-gray-100/60 transition-all duration-500 w-full"
          >
            {/* Massive Elegant Quote Mark */}
            <Quote className="hidden sm:block absolute top-8 left-8 lg:top-12 lg:left-12 w-12 h-12 lg:w-16 lg:h-16 text-[#113122]/5 fill-current rotate-180" />
            <Quote className="hidden sm:block absolute bottom-8 right-8 lg:bottom-12 lg:right-12 w-12 h-12 lg:w-16 lg:h-16 text-[#113122]/5 fill-current" />

            <div className="flex justify-center gap-2 mb-6 sm:mb-8 relative z-10 pt-2 sm:pt-4">
              {[...Array(testimonials[0].stars)].map((_, i) => (
                <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#D4AF37] fill-[#D4AF37]" />
              ))}
            </div>

            <p className="text-gray-800 font-bodoni text-lg sm:text-2xl lg:text-3xl leading-[1.6] italic mb-8 sm:mb-10 relative z-10 max-w-3xl mx-auto px-2 sm:px-0">
              "{testimonials[0].quote}"
            </p>

            <div className="flex flex-col items-center justify-center relative z-10 mt-6">
              <span className="font-bold text-[#113122] uppercase tracking-[0.25em] text-xs md:text-sm mb-2.5">
                {testimonials[0].name}
              </span>
              <span className="text-brand-red text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold">
                {testimonials[0].subtitle}
              </span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
