"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Lottie from "lottie-react";
import letItSnow from "@/public/animations/Let it snow.json";

export default function SantaCard({
  imageSrc,
  altText,
  badgeText,
  titlePart1,
  titlePart2,
  description,
  buttonText,
  buttonHref = "/book-now",
  imagePosition = "object-center",
}) {
  return (
    <div className="relative w-full lg:w-1/2 h-[500px] md:h-[600px] lg:h-full group overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={imageSrc} 
          alt={altText}
          className={`w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105 ${imagePosition}`}
        />
      </div>
      
      {/* Gradient: Smooth bottom-up fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent transition-opacity duration-700"></div>
      
      {/* Lottie Snow Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 mix-blend-screen hidden lg:block">
        <Lottie 
          animationData={letItSnow} 
          loop={true} 
          className="w-full h-full object-cover scale-110" 
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full max-w-[1400px] mx-auto px-6 sm:px-12 flex flex-col justify-end pb-12 lg:pb-24 items-center text-center">
        <div className="max-w-xl transition-all duration-700 transform translate-y-4 group-hover:translate-y-0">
          <span className="text-brand-red font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4 block drop-shadow-md">
            {badgeText}
          </span>
          <h3 className="font-bodoni text-5xl md:text-6xl lg:text-7xl mb-6 text-[#F9F7F4] drop-shadow-lg">
            {titlePart1} <br className="lg:hidden" /> {titlePart2}
          </h3>
          <p className="text-[#F9F7F4]/90 font-light text-sm md:text-base lg:text-lg leading-relaxed mb-10 hidden lg:block">
            {description}
          </p>
          
          <Link 
            href={buttonHref}
            className="inline-flex items-center justify-center gap-3 bg-brand-red text-white px-10 py-5 rounded-sm text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-brand-red transition-all duration-300 shadow-[0_0_20px_rgba(200,16,46,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
          >
            {buttonText}
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
