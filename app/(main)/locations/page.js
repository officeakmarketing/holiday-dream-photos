import Link from "next/link";
import { MapPin, CalendarClock } from "lucide-react";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata = {
  title: 'Locations | Holiday Dream Photos',
  description: 'Find a Holiday Dream Photos premium Santa experience near you. 8 locations nationwide.',
};

const locations = [
  { id: 1, mall: "Edgewater Mall", city: "Biloxi", state: "MS", image: "/images/edgewatermall.png" },
  { id: 2, mall: "Almeda Mall", city: "Houston", state: "TX", image: "/images/almedamall.png" },
  { id: 3, mall: "Central Mall", city: "Texarkana", state: "TX", image: "/images/centralmall.png" },
  { id: 4, mall: "Outlets at Little Rock", city: "Little Rock", state: "AR", image: "/images/outletsmall.png" },
  { id: 5, mall: "Omaha Mall", city: "Omaha", state: "NE", image: "/images/omahamall.png" },
  { id: 6, mall: "Northtown Mall", city: "Blaine", state: "MN", image: "/images/northmall.png" },
  { id: 7, mall: "Clearview Mall", city: "Butler", state: "PA", image: "/images/clearviewmall.png" },
  { id: 8, mall: "The Shoppes at Bel Air", city: "Mobile", state: "AL", image: "/images/belairmall.png" },
];

export default function LocationsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-light">
      
      {/* SECTION 1: HERO */}
      <PageHero 
        title="Find Your Nearest Location"
        subtitle="Nationwide Magic"
        description="8 locations bringing the magic of Holiday Dream Photos to communities across the USA this Christmas."
        imageSrc="/images/background2.jpg"
        imageAlt="Christmas Atmosphere"
        className="pt-32 pb-16 md:pt-40 md:pb-16"
      />

      {/* SECTION 2: LOCATION CARDS GRID */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-12 w-full max-w-[1200px] xl:max-w-[1400px] 2xl:max-w-[1800px] mx-auto relative z-20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 xl:gap-10 2xl:gap-12">
          {locations.map((loc) => (
            <div 
              key={loc.id}
              className="bg-white rounded-xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_rgba(17,49,34,0.15)] transition-all duration-500 group flex flex-col h-full border border-brand-dark/5 hover:-translate-y-2"
            >
              {/* Card Header (Cinematic Image Area) */}
              <div className="h-48 md:h-56 2xl:h-64 bg-brand-dark relative overflow-hidden">
                <Image 
                  src={loc.image}
                  alt={`${loc.mall} location`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-[1500ms] group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Floating Map Pin Badge */}
                <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-md border border-white/30 text-white p-2.5 rounded-full shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-5 h-5 drop-shadow-md" />
                </div>
              </div>
              
              {/* Card Content */}
              <div className="p-6 md:p-8 flex flex-col flex-1 bg-white relative">
                <div className="mb-auto">
                  <span className="text-brand-red font-bold uppercase tracking-[0.2em] text-[10px] block mb-2">
                    {loc.city}, {loc.state}
                  </span>
                  <h2 className="font-heading text-2xl md:text-3xl text-brand-dark mb-3 leading-tight">
                    {loc.mall}
                  </h2>
                  <p className="text-[11px] md:text-xs text-brand-dark/70 leading-relaxed font-light">
                    Experience the magic of Holiday Dream Photos this Christmas. A premium, unforgettable Santa photo event for the whole family right here in {loc.city}.
                  </p>
                </div>
                
                {/* Status / Button Area */}
                <div className="mt-8 pt-6 border-t border-brand-dark/10">
                  <div className="w-full inline-flex items-center justify-center gap-2 bg-brand-light border border-brand-dark/20 text-brand-dark/60 py-3.5 px-4 text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] rounded-md cursor-not-allowed select-none transition-colors duration-300 shadow-sm">
                    <CalendarClock size={16} className="opacity-70" />
                    <span>Schedule Coming Soon</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: FINAL CTA */}
      <div className="mt-8 md:mt-16">
        <FinalCTA 
          headline={<>The most <span className="italic text-brand-red">magical</span> time of the year is approaching.</>}
          body="Schedules for all 8 nationwide locations will be officially confirmed starting 15 August. Check back soon to secure your family's spot."
          ctaText="Contact Us"
          ctaLink="/contact"
        />
      </div>

    </div>
  );
}
