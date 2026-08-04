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
    <section className="py-20 md:py-28 bg-brand-light relative border-t border-brand-dark/5">
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
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 xl:gap-10 2xl:gap-12"
        >
          {locations.map((loc, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="bg-white rounded-xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_rgba(17,49,34,0.15)] transition-all duration-500 group flex flex-col h-full border border-brand-dark/5 hover:-translate-y-2"
            >
              {/* Cinematic Image Area */}
              <div className="h-48 md:h-56 2xl:h-64 bg-brand-dark relative overflow-hidden">
                <img 
                  src={`/images/mall${(idx % 2) === 0 ? '2' : '1'}.jpg`}
                  alt={`${loc.name} location`}
                  className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Floating Map Pin Badge */}
                <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-md border border-white/30 text-white p-2.5 rounded-full shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-5 h-5 drop-shadow-md" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 md:p-8 flex flex-col flex-1 bg-white relative">
                
                <div className="mb-6">
                  <span className="text-brand-red font-bold uppercase tracking-[0.2em] text-[10px] block mb-2">
                    {loc.city}
                  </span>
                  <h3 className="font-heading text-2xl md:text-3xl text-brand-dark leading-tight">
                    {loc.name}
                  </h3>
                </div>
                
                <div className="flex flex-col gap-4 mb-8 flex-1">
                  <div className="flex items-start gap-3">
                    <span className="text-brand-dark/70 text-sm leading-snug">
                      {loc.address}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CalendarDays size={16} className="text-brand-red shrink-0" />
                    <span className="text-brand-dark text-sm font-semibold">
                      {loc.dates}
                    </span>
                  </div>
                  
                  <div className="mt-2 pt-4 border-t border-brand-dark/5">
                    <span className="text-[10px] text-brand-dark/50 uppercase tracking-[0.2em] block mb-1 font-semibold">
                      Featuring
                    </span>
                    <p className="text-brand-dark text-sm font-medium">
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
                  <button className="w-full flex items-center justify-center bg-brand-dark/5 text-brand-dark/50 px-5 py-4 rounded-sm text-[10px] font-bold uppercase tracking-[0.2em] cursor-not-allowed border border-transparent transition-colors group-hover:bg-brand-dark/10">
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
