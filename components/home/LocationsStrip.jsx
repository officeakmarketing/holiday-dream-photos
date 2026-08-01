"use client";

import { motion } from "framer-motion";
import { MapPin, CalendarDays } from "lucide-react";

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
    <section className="py-16 md:py-20 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-brand-red"></div>
            <span className="text-brand-red font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs">
              Our Locations
            </span>
            <div className="w-8 h-[1px] bg-brand-red"></div>
          </div>
          <h2 className="font-bodoni text-3xl md:text-4xl lg:text-5xl text-[#113122] tracking-tight leading-tight mb-6">
            Find Your Location
          </h2>
          <p className="text-[#113122]/70 font-light text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            8 locations bringing the magic of Holiday Dream Photos to your community this Christmas.
          </p>
        </div>

        {/* Full Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {locations.map((loc, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="bg-[#F9F7F4] border border-gray-100 rounded-lg shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group flex flex-col h-full relative overflow-hidden"
            >
              {/* Premium Image Header */}
              <div className="relative w-full h-48 md:h-56 overflow-hidden bg-gray-200">
                <img 
                  src="/images/placeholder-mall.png" 
                  alt="Mall Placeholder" 
                  className="w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                
                {/* Massive Bodoni Watermark over Image */}
                <div className="absolute -bottom-4 right-4 font-bodoni text-[6rem] leading-none text-white/20 pointer-events-none select-none z-20 transition-transform duration-700 group-hover:-translate-x-2">
                  0{idx + 1}
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-col flex-1 p-6 md:p-8 relative z-30 bg-[#F9F7F4]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-[#113122]/5 flex items-center justify-center text-[#113122] transition-colors duration-500 group-hover:bg-[#113122] group-hover:text-[#D4AF37]">
                    <MapPin size={16} />
                  </div>
                  <p className="text-brand-red font-bold tracking-[0.2em] uppercase text-[10px]">
                    {loc.city}
                  </p>
                </div>
                
                <h3 className="font-bodoni text-2xl text-[#113122] mb-3 leading-tight">
                  {loc.name}
                </h3>
                
                <div className="w-8 h-[1px] bg-[#D4AF37]/50 mb-6 transition-all duration-500 group-hover:w-16"></div>

                <div className="flex flex-col gap-3 mb-6">
                  <div className="flex items-start gap-2.5">
                    <MapPin size={14} className="mt-0.5 text-brand-red shrink-0" />
                    <span className="text-[#113122]/70 text-[11px] leading-snug">{loc.address}</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CalendarDays size={14} className="mt-0.5 text-brand-red shrink-0" />
                    <span className="text-[#113122]/70 text-[11px] font-bold">{loc.dates}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-2">
                    {loc.experiences.map((exp, i) => (
                      <span key={i} className="px-2.5 py-1 bg-[#113122]/5 rounded-sm text-[9px] font-bold uppercase tracking-wider text-[#113122] border border-[#113122]/10">
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Flexible spacer to push button to bottom */}
                <div className="flex-1"></div>
                
                {/* 
                  ENGINEER NOTE (GLOBAL RULE): 
                  Booking buttons on location cards activate per location as each venue schedule is 
                  confirmed by the client from 15 August. Do not show a booking button for any 
                  location without a confirmed schedule.
                */}
                <div className="w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-sm text-[10px] font-bold uppercase tracking-[0.1em] border border-gray-200 bg-white text-gray-400 mt-auto transition-colors duration-300 group-hover:border-[#113122]/20 group-hover:text-[#113122]">
                  <CalendarDays size={14} />
                  Schedule Coming Soon
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
