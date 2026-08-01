"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    quote: "Holiday Dream Photos continues to exceed our expectations every holiday season. Their Black Santa is truly special, families travel from all over just to take photos with him.",
    name: "Baldwin Hills Crenshaw",
    subtitle: "Verified Partner",
    stars: 5,
  },
  {
    id: 2,
    quote: "Our family has been coming to see Santa here for 4 years in a row. The set design is absolutely stunning and the photos are always flawless.",
    name: "Sarah Jenkins",
    subtitle: "Los Angeles, CA",
    stars: 5,
  },
  {
    id: 3,
    quote: "The most authentic, heartwarming holiday experience we've ever had. Santa was incredibly patient with our newborn.",
    name: "The Mitchell Family",
    subtitle: "Culver City, CA",
    stars: 5,
  },
  {
    id: 4,
    quote: "Such a beautiful experience! The lines move fast and the staff is wonderful.",
    name: "Marcus T.",
    subtitle: "Inglewood, CA",
    stars: 5,
  },
  {
    id: 5,
    quote: "The instant booking online made things so easy. We didn't have to wait in a crazy mall line. Highly recommended for families with toddlers!",
    name: "Elena Rodriguez",
    subtitle: "Compton, CA",
    stars: 5,
  }
];

// Duplicate the array for a seamless infinite loop
const duplicatedTestimonials = [...testimonials, ...testimonials];

export default function TestimonialsMarquee() {
  return (
    <section className="py-20 md:py-32 bg-[#F9F7F4] relative overflow-hidden">
      
      {/* Inline styles for the marquee animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: scroll 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />

      {/* Decorative Wreath Backgrounds */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] opacity-[0.03] pointer-events-none z-0">
        <Image src="/images/hero_wreath.png" alt="Wreath" fill className="object-contain" />
      </div>

      <div className="relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-24 relative pt-8 px-4">
          <div className="relative inline-block w-full max-w-[1400px] mx-auto">
            <span className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bodoni text-[5rem] md:text-[7rem] lg:text-[10rem] text-[#113122]/5 italic whitespace-nowrap pointer-events-none select-none">
              Testimonials
            </span>
            <h2 className="relative z-10 font-bodoni text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#113122] tracking-tight leading-tight">
              What people <br className="sm:hidden" />
              <span className="italic text-brand-red drop-shadow-sm">are saying</span>
            </h2>
          </div>
        </div>

        {/* Marquee Container */}
        <div className="flex overflow-hidden w-full relative before:absolute before:left-0 before:top-0 before:w-12 md:before:w-32 before:h-full before:bg-gradient-to-r before:from-[#F9F7F4] before:to-transparent before:z-20 after:absolute after:right-0 after:top-0 after:w-12 md:after:w-32 after:h-full after:bg-gradient-to-l after:from-[#F9F7F4] after:to-transparent after:z-20">
          
          <div className="flex w-max animate-marquee gap-6 px-3 py-6">
            {duplicatedTestimonials.map((testimonial, idx) => (
              <motion.div
                key={`${testimonial.id}-${idx}`}
                whileHover={{ 
                  y: -10,
                  rotateZ: 1, 
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
                }}
                className="w-[300px] sm:w-[350px] md:w-[450px] flex flex-col relative p-8 sm:p-10 text-center rounded-2xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-gray-100 transition-colors duration-300 hover:border-[#113122]/20 cursor-grab active:cursor-grabbing shrink-0"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-brand-red flex items-center justify-center shadow-lg z-20">
                  <Quote className="w-4 h-4 text-white fill-current" />
                </div>

                <div className="flex justify-center gap-1 mb-6 relative z-10 pt-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
                  ))}
                </div>

                <p className="text-gray-800 font-bodoni text-base sm:text-lg md:text-xl leading-relaxed italic mb-8 relative z-10 flex-grow">
                  "{testimonial.quote}"
                </p>

                <div className="flex flex-col items-center justify-center relative z-10 mt-auto">
                  <span className="font-bold text-[#113122] uppercase tracking-[0.15em] text-[10px] md:text-xs mb-1">
                    {testimonial.name}
                  </span>
                  <span className="text-brand-red text-[9px] uppercase tracking-widest font-semibold">
                    {testimonial.subtitle}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
