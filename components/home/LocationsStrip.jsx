"use client";

import { motion } from "framer-motion";
import { MapPin, CalendarDays } from "lucide-react";

export default function LocationsStrip() {
  const locations = [
    { name: "Edgewater Mall", city: "Biloxi, MS" },
    { name: "Almeda Mall", city: "Houston, TX" },
    { name: "Central Mall", city: "Texarkana, TX" },
    { name: "Outlets at Little Rock", city: "Little Rock, AR" },
    { name: "Omaha Mall", city: "Omaha, NE" },
    { name: "Northtown Mall", city: "Blaine, MN" },
    { name: "Clearview Mall", city: "Butler, PA" },
    { name: "The Shoppes at Bel Air", city: "Mobile, AL" },
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
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
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
          <h2 className="font-bodoni text-4xl md:text-5xl lg:text-6xl text-[#113122] tracking-tight leading-tight mb-6">
            Find your nearest location
          </h2>
          <p className="text-[#113122]/70 font-light text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            8 locations bringing the magic of Holiday Dream Photos to your community this Christmas.
          </p>
        </div>

        {/* Full Grid (All 8 locations listed visibly without scrolling) */}
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
              className="bg-[#F9F7F4] border border-gray-100 rounded-sm p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col h-full"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-12 h-12 rounded-full bg-[#113122] flex items-center justify-center text-white group-hover:bg-brand-red transition-colors duration-300">
                  <MapPin size={20} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                  0{idx + 1}
                </span>
              </div>
              
              <h3 className="font-bodoni text-2xl text-[#113122] mb-2 leading-tight flex-1">
                {loc.name}
              </h3>
              <p className="text-brand-red font-semibold tracking-wide uppercase text-xs mb-8">
                {loc.city}
              </p>
              
              {/* 
                ENGINEER NOTE (GLOBAL RULE): 
                Booking buttons on location cards activate per location as each venue schedule is 
                confirmed by the client from 15 August. Do not show a booking button for any 
                location without a confirmed schedule.
              */}
              <div className="w-full flex items-center justify-center gap-2 bg-white text-gray-400 px-4 py-3 rounded-sm text-[10px] md:text-xs font-bold uppercase tracking-[0.1em] border border-gray-200 mt-auto">
                <CalendarDays size={14} />
                Schedule Coming Soon
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
