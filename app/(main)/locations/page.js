import Link from "next/link";
import { MapPin, CalendarClock } from "lucide-react";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import FinalCTA from "@/components/home/FinalCTA";
import LocationCard from "@/components/home/LocationCard";

export const metadata = {
  title: 'Locations | Holiday Dream Photos',
  description: 'Find a Holiday Dream Photos premium Santa experience near you. 8 locations nationwide.',
};

const locations = [
    { 
      id: 1,
      name: "Edgewater Mall", 
      city: "Biloxi, MS",
      address: "2600 Beach Blvd, Biloxi, MS 39531",
      dates: "Nov 24 - Dec 24",
      experiences: ["Traditional", "Black Santa"],
      image: "/images/edgewatermall.png"
    },
    { 
      id: 2,
      name: "Almeda Mall", 
      city: "Houston, TX",
      address: "12200 Gulf Fwy, Houston, TX 77034",
      dates: "Nov 17 - Dec 24",
      experiences: ["Black Santa"],
      image: "/images/almedamall.png"
    },
    { 
      id: 3,
      name: "Central Mall", 
      city: "Texarkana, TX",
      address: "2400 Richmond Rd, Texarkana, TX 75503",
      dates: "Nov 24 - Dec 24",
      experiences: ["Traditional"],
      image: "/images/centralmall.png"
    },
    { 
      id: 4,
      name: "Outlets at Little Rock", 
      city: "Little Rock, AR",
      address: "11201 Bass Pro Pkwy, Little Rock, AR 72210",
      dates: "Nov 24 - Dec 24",
      experiences: ["Traditional", "Black Santa"],
      image: "/images/outletsmall.png"
    },
    { 
      id: 5,
      name: "Omaha Mall", 
      city: "Omaha, NE",
      address: "10000 California St, Omaha, NE 68114",
      dates: "Nov 17 - Dec 24",
      experiences: ["Traditional"],
      image: "/images/omahamall.png"
    },
    { 
      id: 6,
      name: "Northtown Mall", 
      city: "Blaine, MN",
      address: "398 Northtown Dr, Blaine, MN 55434",
      dates: "Nov 24 - Dec 24",
      experiences: ["Traditional", "Black Santa"],
      image: "/images/northmall.png"
    },
    { 
      id: 7,
      name: "Clearview Mall", 
      city: "Butler, PA",
      address: "101 Clearview Cir, Butler, PA 16001",
      dates: "Nov 24 - Dec 24",
      experiences: ["Traditional"],
      image: "/images/clearviewmall.png"
    },
    { 
      id: 8,
      name: "The Shoppes at Bel Air", 
      city: "Mobile, AL",
      address: "3299 Bel Air Mall, Mobile, AL 36606",
      dates: "Nov 17 - Dec 24",
      experiences: ["Traditional", "Black Santa"],
      image: "/images/belairmall.png"
    },
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
        className="pt-32 pb-16 md:pt-32 md:pb-12"
      />

      {/* SECTION 2: LOCATION CARDS GRID */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-12 w-full max-w-[1200px] xl:max-w-[1400px] 2xl:max-w-[1800px] mx-auto relative z-20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6 md:gap-8 xl:gap-10 2xl:gap-12">
          {locations.map((loc) => (
            <div key={loc.id} className="h-full">
              <LocationCard loc={loc} />
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
