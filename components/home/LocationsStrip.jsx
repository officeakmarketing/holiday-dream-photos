"use client";

import { motion } from "framer-motion";
import { MapPin, CalendarDays, ChevronRight } from "lucide-react";

export default function LocationsStrip() {
  const locations = [
    { 
      name: "Edgewater Mall", 
      city: "Biloxi, MS",
      address: "2600 Beach Blvd, Biloxi, MS 39531",
      dates: "Nov 24 - Dec 24",
      experiences: ["Traditional", "Black Santa"]
    },
    { 
      name: "Almeda Mall", 
      city: "Houston, TX",
      address: "12200 Gulf Fwy, Houston, TX 77034",
      dates: "Nov 17 - Dec 24",
      experiences: ["Black Santa"]
    },
    { 
      name: "Central Mall", 
      city: "Texarkana, TX",
      address: "2400 Richmond Rd, Texarkana, TX 75503",
      dates: "Nov 24 - Dec 24",
      experiences: ["Traditional"]
    },
    { 
      name: "Outlets at Little Rock", 
      city: "Little Rock, AR",
      address: "11201 Bass Pro Pkwy, Little Rock, AR 72210",
      dates: "Nov 24 - Dec 24",
      experiences: ["Traditional", "Black Santa"]
    },
    { 
      name: "Omaha Mall", 
      city: "Omaha, NE",
      address: "10000 California St, Omaha, NE 68114",
      dates: "Nov 17 - Dec 24",
      experiences: ["Traditional"]
    },
    { 
      name: "Northtown Mall", 
      city: "Blaine, MN",
      address: "398 Northtown Dr, Blaine, MN 55434",
      dates: "Nov 24 - Dec 24",
      experiences: ["Traditional", "Black Santa"]
    },
    { 
      name: "Clearview Mall", 
      city: "Butler, PA",
      address: "101 Clearview Cir, Butler, PA 16001",
      dates: "Nov 24 - Dec 24",
      experiences: ["Traditional"]
    },
    { 
      name: "The Shoppes at Bel Air", 
      city: "Mobile, AL",
      address: "3299 Bel Air Mall, Mobile, AL 36606",
      dates: "Nov 17 - Dec 24",
      experiences: ["Traditional", "Black Santa"]
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-20 md:py-28 bg-[#F9F7F4] relative border-t border-[#113122]/5">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-brand-red font-bold uppercase tracking-[0.2em] text-xs mb-4 block">
            Our Locations
          </span>
          <h2 className="font-bodoni text-4xl md:text-5xl lg:text-6xl text-[#113122] mb-6">
            Find Your Nearest Santa
          </h2>
          <p className="text-[#113122]/70 font-light text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            We are bringing the magic of Holiday Dream Photos to 8 premium locations across the country this Christmas.
          </p>
        </div>

        {/* Full Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {locations.map((loc, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-200 overflow-hidden flex flex-col group h-full"
            >
              {/* Clean Image Header */}
              <div className="relative w-full aspect-[16/9] bg-gray-100 overflow-hidden">
                <img 
                  src="/images/placeholder-mall.png" 
                  alt={loc.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Card Body - High Utility */}
              <div className="p-6 md:p-8 flex flex-col flex-1">
                
                <div className="mb-6 border-b border-gray-100 pb-6">
                  <span className="text-brand-red font-bold uppercase tracking-[0.15em] text-[10px] block mb-2">
                    {loc.city}
                  </span>
                  <h3 className="font-bodoni text-2xl text-[#113122] leading-tight">
                    {loc.name}
                  </h3>
                </div>
                
                <div className="flex flex-col gap-4 mb-8 flex-1">
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-brand-red shrink-0 mt-0.5" />
                    <span className="text-[#113122]/70 text-sm leading-snug">
                      {loc.address}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CalendarDays size={16} className="text-brand-red shrink-0" />
                    <span className="text-[#113122] text-sm font-semibold">
                      {loc.dates}
                    </span>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <span className="text-xs text-gray-500 uppercase tracking-widest block mb-2 font-semibold">
                      Featuring
                    </span>
                    <p className="text-[#113122] text-sm font-medium">
                      {loc.experiences.join(" & ")}
                    </p>
                  </div>
                </div>
                
                {/* 
                  ENGINEER NOTE (GLOBAL RULE): 
                  Booking buttons on location cards activate per location as each venue schedule is 
                  confirmed by the client from 15 August. Do not show a booking button for any 
                  location without a confirmed schedule.
                */}
                <div className="mt-auto">
                  <button className="w-full flex items-center justify-between bg-[#113122]/5 text-[#113122]/50 px-5 py-4 rounded-sm text-xs font-bold uppercase tracking-widest cursor-not-allowed border border-transparent transition-colors group-hover:bg-[#113122]/10">
                    <span>Schedule Coming Soon</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
