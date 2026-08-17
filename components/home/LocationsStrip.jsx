"use client";

import StaggerContainer from "../animations/StaggerContainer";
import FadeInItem from "../animations/FadeInItem";
import LocationCard from "./LocationCard";
import { locationsData as locations } from "@/lib/locationsData";

export default function LocationsStrip() {

  return (
    <section className="py-12 md:py-16 bg-brand-light relative border-t border-brand-dark/5">
      <div className="w-full max-w-[1200px] xl:max-w-[1400px] 2xl:max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-brand-red font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4 block">
            Our Locations
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-brand-dark mb-6">
            Find Your Nearest Santa
          </h2>
          <p className="text-brand-dark/70 font-light text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            We are bringing the magic of Holiday Dream Photos to 8 premium locations across the country this Christmas.
          </p>
        </div>

        <StaggerContainer 
          staggerChildren={0.1}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 2xl:grid-cols-4 gap-6 md:gap-8 xl:gap-10 2xl:gap-12"
        >
          {locations.map((loc, idx) => (
            <FadeInItem 
              key={idx}
              duration={0.5}
              y={20}
              className={`h-full lg:col-span-2 2xl:col-span-1 ${idx === 6 ? 'lg:col-start-2 2xl:col-start-auto' : ''}`}
            >
              <LocationCard loc={loc} />
            </FadeInItem>
          ))}
        </StaggerContainer>

        {/* Global Disclaimer */}
        <div className="mt-12 md:mt-16 text-center border-t border-brand-dark/10 pt-8 max-w-3xl mx-auto">
          <p className="text-brand-dark font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs mb-2">
            NO PERSONAL PHOTOGRAPHY ALLOWED
          </p>
          <p className="italic text-brand-red text-xl md:text-3xl font-heading leading-tight">
            Thank you for helping us keep the magic!
          </p>
        </div>

      </div>
    </section>
  );
}
