import Link from "next/link";
import { MapPin, CalendarClock } from "lucide-react";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import FinalCTA from "@/components/home/FinalCTA";
import LocationCard from "@/components/home/LocationCard";

export const metadata = {
  title: 'Locations | Holiday Dream Photos',
  description: 'Find a Holiday Dream Photos premium Santa experience near you. 9 locations nationwide.',
};

import { locationsData as locations } from "@/lib/locationsData";

export default function LocationsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-light">
      
      {/* SECTION 1: HERO */}
      <PageHero 
        title="Find Your Nearest Location"
        subtitle="Nationwide Magic"
        description="9 locations bringing the magic of Holiday Dream Photos to communities across the USA this Christmas."
        imageSrc="/images/background2.jpg"
        imageAlt="Christmas Atmosphere"
        className="pt-32 pb-16 md:pt-32 md:pb-12"
      />

      {/* SECTION 2: LOCATION CARDS GRID */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-12 w-full max-w-[1200px] xl:max-w-[1400px] 2xl:max-w-[1800px] mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 2xl:grid-cols-4 gap-6 md:gap-8 xl:gap-10 2xl:gap-12">
          {locations.map((loc, idx) => (
            <div 
              key={loc.id} 
              className="h-full lg:col-span-2 2xl:col-span-1"
            >
              <LocationCard loc={loc} />
            </div>
          ))}
        </div>

        {/* Global Disclaimer */}
        <div className="mt-12 md:mt-16 text-center border-t border-brand-dark/10 pt-8 max-w-3xl mx-auto">
          <p className="text-brand-dark font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs mb-2">
            NO PERSONAL PHOTOGRAPHY ALLOWED
          </p>
          <p className="italic text-brand-red text-xl md:text-3xl font-heading leading-tight">
            Thank you for helping us keep the magic!
          </p>
        </div>
      </section>

      {/* SECTION 4: FINAL CTA */}
      <div className="mt-8 md:mt-16">
        <FinalCTA 
          headline={<>The most <span className="italic text-brand-red">magical</span> time of the year is approaching.</>}
          body="Schedules for all 9 nationwide locations will be officially confirmed starting 15 August. Check back soon to secure your family's spot."
          ctaText="Contact Us"
          ctaLink="/contact"
        />
      </div>

    </div>
  );
}
