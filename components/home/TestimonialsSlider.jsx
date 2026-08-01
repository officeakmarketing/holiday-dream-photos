"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
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

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 md:py-32 bg-[#F9F7F4] relative overflow-hidden">
      
      {/* Decorative Wreath Backgrounds */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] opacity-[0.03] pointer-events-none z-0">
        <Image src="/images/hero_wreath.png" alt="Wreath" fill className="object-contain" />
      </div>
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] opacity-[0.03] pointer-events-none z-0 rotate-180">
        <Image src="/images/hero_wreath.png" alt="Wreath" fill className="object-contain" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-20 md:mb-28 relative pt-8">
          <div className="relative inline-block w-full">
            <span className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bodoni text-[5rem] md:text-[7rem] lg:text-[10rem] text-[#113122]/5 italic whitespace-nowrap pointer-events-none select-none">
              Testimonials
            </span>
            <h2 className="relative z-10 font-bodoni text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#113122] tracking-tight leading-tight px-4">
              What people <br className="sm:hidden" />
              <span className="italic text-brand-red drop-shadow-sm">are saying</span>
            </h2>
          </div>
        </div>

        {/* Editorial Slider */}
        <div className="max-w-5xl mx-auto px-4 relative">
          
          <div className="relative h-[450px] sm:h-[350px] md:h-[400px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.05, filter: "blur(8px)" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center px-2 md:px-16"
              >
                <Quote className="w-8 h-8 md:w-12 md:h-12 text-brand-red opacity-20 mb-6" />
                
                <p className="text-gray-800 font-bodoni text-xl sm:text-3xl md:text-4xl lg:text-5xl leading-relaxed italic mb-8 md:mb-12">
                  "{testimonials[currentIndex].quote}"
                </p>

                <div className="flex flex-col items-center justify-center">
                  <div className="flex justify-center gap-1 mb-4">
                    {[...Array(testimonials[currentIndex].stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-[#D4AF37] fill-[#D4AF37]" />
                    ))}
                  </div>
                  <span className="font-bold text-[#113122] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-xs md:text-sm mb-2">
                    {testimonials[currentIndex].name}
                  </span>
                  <span className="text-brand-red text-[10px] md:text-xs uppercase tracking-widest font-semibold">
                    {testimonials[currentIndex].subtitle}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-12 md:mt-16">
            <button onClick={prevSlide} className="w-12 h-12 rounded-full border border-[#113122]/10 flex items-center justify-center text-[#113122] hover:bg-brand-red hover:text-white hover:border-brand-red transition-all duration-300">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-brand-red' : 'w-2 bg-[#113122]/20'}`}
                />
              ))}
            </div>
            <button onClick={nextSlide} className="w-12 h-12 rounded-full border border-[#113122]/10 flex items-center justify-center text-[#113122] hover:bg-brand-red hover:text-white hover:border-brand-red transition-all duration-300">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
