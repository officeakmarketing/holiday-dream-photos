"use client";

import StaggerContainer from "../animations/StaggerContainer";
import FadeInItem from "../animations/FadeInItem";
import LocationCard from "./LocationCard";

export default function LocationsStrip() {
  const locations = [
    { 
      name: "Edgewater Mall", 
      city: "Biloxi, MS",
      address: "2600 Beach Blvd, Biloxi, MS 39531",
      dates: "Nov 24 - Dec 24",
      experiences: ["Traditional", "Black Santa"],
      image: "/images/edgewatermall.png"
    },
    { 
      name: "Almeda Mall", 
      city: "Houston, TX",
      address: "12200 Gulf Fwy, Houston, TX 77034",
      dates: "Nov 17 - Dec 24",
      experiences: ["Black Santa"],
      image: "/images/almedamall.png"
    },
    { 
      name: "Central Mall", 
      city: "Texarkana, TX",
      address: "2400 Richmond Rd, Texarkana, TX 75503",
      dates: "Nov 24 - Dec 24",
      experiences: ["Traditional"],
      image: "/images/centralmall.png"
    },
    { 
      name: "Outlets at Little Rock", 
      city: "Little Rock, AR",
      address: "11201 Bass Pro Pkwy, Little Rock, AR 72210",
      dates: "Nov 24 - Dec 24",
      experiences: ["Traditional", "Black Santa"],
      image: "/images/outletsmall.png"
    },
    { 
      name: "Omaha Mall", 
      city: "Omaha, NE",
      address: "10000 California St, Omaha, NE 68114",
      dates: "Nov 17 - Dec 24",
      experiences: ["Traditional"],
      image: "/images/omahamall.png"
    },
    { 
      name: "Northtown Mall", 
      city: "Blaine, MN",
      address: "398 Northtown Dr, Blaine, MN 55434",
      dates: "Nov 24 - Dec 24",
      experiences: ["Traditional", "Black Santa"],
      image: "/images/northmall.png"
    },
    { 
      name: "Clearview Mall", 
      city: "Butler, PA",
      address: "101 Clearview Cir, Butler, PA 16001",
      dates: "Nov 24 - Dec 24",
      experiences: ["Traditional"],
      image: "/images/clearviewmall.png"
    },
    { 
      name: "The Shoppes at Bel Air", 
      city: "Mobile, AL",
      address: "3299 Bel Air Mall, Mobile, AL 36606",
      dates: "Nov 17 - Dec 24",
      experiences: ["Traditional", "Black Santa"],
      image: "/images/belairmall.png"
    },
  ];

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

        {/* Full Grid */}
        <StaggerContainer 
          staggerChildren={0.1}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6 md:gap-8 xl:gap-10 2xl:gap-12"
        >
          {locations.map((loc, idx) => (
            <FadeInItem 
              key={idx}
              duration={0.5}
              y={20}
              className="h-full"
            >
              <LocationCard loc={loc} />
            </FadeInItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
}
