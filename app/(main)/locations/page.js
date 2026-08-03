import Link from "next/link";
import { MapPin, CalendarClock } from "lucide-react";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata = {
  title: 'Locations | Holiday Dream Photos',
  description: 'Find a Holiday Dream Photos premium Santa experience near you. 8 locations nationwide.',
};

const locations = [
  { id: 1, mall: "Edgewater Mall", city: "Biloxi", state: "MS" },
  { id: 2, mall: "Almeda Mall", city: "Houston", state: "TX" },
  { id: 3, mall: "Central Mall", city: "Texarkana", state: "TX" },
  { id: 4, mall: "Outlets at Little Rock", city: "Little Rock", state: "AR" },
  { id: 5, mall: "Omaha Mall", city: "Omaha", state: "NE" },
  { id: 6, mall: "Northtown Mall", city: "Blaine", state: "MN" },
  { id: 7, mall: "Clearview Mall", city: "Butler", state: "PA" },
  { id: 8, mall: "The Shoppes at Bel Air", city: "Mobile", state: "AL" },
];

export default function LocationsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-light">
      
      {/* SECTION 1: HERO */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 bg-brand-dark text-center relative overflow-hidden">
        {/* Subtle abstract background element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] lg:w-[1200px] aspect-square bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.12)_0%,_transparent_70%)] pointer-events-none blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-brand-gold font-bold uppercase tracking-[0.3em] text-xs md:text-sm mb-6 block drop-shadow-md">
            Nationwide Magic
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl text-white mb-6 md:mb-8 leading-tight drop-shadow-lg">
            Find Your Nearest Location
          </h1>
          <p className="text-white/80 font-light text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto drop-shadow-md px-4">
            8 locations bringing the magic of Holiday Dream Photos to communities across the USA this Christmas.
          </p>
        </div>
      </section>

      {/* SECTION 2: LOCATION CARDS GRID */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-12 max-w-[1400px] mx-auto w-full relative z-20 -mt-16 md:-mt-24">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {locations.map((loc) => (
            <div 
              key={loc.id}
              className="bg-white rounded-xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_rgba(17,49,34,0.15)] transition-all duration-500 group flex flex-col h-full border border-brand-dark/5 hover:-translate-y-2"
            >
              {/* Card Header (Premium Dark Header) */}
              <div className="h-32 sm:h-40 bg-brand-dark relative overflow-hidden flex items-center justify-center">
                {/* Subtle map pattern or gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(212,175,55,0.2)_0%,_transparent_70%)] transition-opacity duration-500 group-hover:opacity-60"></div>
                
                <MapPin className="w-10 h-10 text-brand-gold/80 relative z-10 transform group-hover:scale-110 transition-transform duration-500 drop-shadow-md" />
              </div>
              
              {/* Card Content */}
              <div className="p-6 md:p-8 flex flex-col flex-1 bg-white relative">
                <div className="mb-auto">
                  <span className="text-brand-red font-bold uppercase tracking-[0.2em] text-[10px] block mb-2">
                    {loc.city}, {loc.state}
                  </span>
                  <h2 className="font-heading text-2xl md:text-3xl text-brand-dark mb-2 leading-tight">
                    {loc.mall}
                  </h2>
                </div>
                
                {/* Status / Button Area */}
                <div className="mt-8 pt-6 border-t border-brand-dark/10">
                  <div className="w-full inline-flex items-center justify-center gap-2 bg-gray-100 border border-brand-dark/10 text-brand-dark/50 py-3.5 px-4 text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] rounded cursor-not-allowed select-none transition-colors duration-300 group-hover:bg-gray-200">
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
      <div className="mt-0">
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
