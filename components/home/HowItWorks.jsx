"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HowItWorks() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const steps = [
    {
      number: "1",
      title: "Choose Your Experience",
      text: "Traditional Santa or Black Santa. Both are premium. Both are magical. Pick what feels right for your family."
    },
    {
      number: "2",
      title: "Pick Your Location and Time",
      text: "8 locations across the USA. Mississippi, Texas, Arkansas, Nebraska, Minnesota, Pennsylvania, and Alabama. Morning, afternoon, and evening slots throughout the holiday season."
    },
    {
      number: "3",
      title: "Show Up and Make Magic",
      text: "Your session is confirmed the moment you book. We handle everything else. You show up and enjoy the moment."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#F9F7F4] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-20 md:mb-28">
          <h2 className="font-bodoni text-4xl md:text-5xl lg:text-6xl text-[#113122] tracking-tight leading-tight mb-8">
            Book your perfect session <br className="hidden md:block" />
            <span className="italic text-brand-red">in three steps</span>
          </h2>
          <div className="w-16 h-[2px] bg-brand-red mx-auto rounded-full"></div>
        </div>

        {/* Steps Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-20"
        >
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="flex flex-col relative group"
            >
              {/* Connecting Line (Desktop only) */}
              {idx !== steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-full h-[1px] bg-gradient-to-r from-brand-red/30 to-transparent pointer-events-none" />
              )}
              
              <div className="flex flex-col md:items-center text-left md:text-center">
                {/* Step Number */}
                <div className="w-24 h-24 mb-8 relative flex items-center justify-center">
                  <span className="font-bodoni text-7xl lg:text-[6rem] text-brand-red/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none group-hover:scale-110 group-hover:text-brand-red/20 transition-all duration-500">
                    {step.number}
                  </span>
                  <span className="font-bodoni text-4xl text-[#113122] relative z-10">
                    {step.number}
                  </span>
                </div>
                
                <h3 className="font-bodoni text-2xl lg:text-3xl text-[#113122] mb-4">
                  {step.title}
                </h3>
                
                <p className="text-[#113122]/70 font-light text-base lg:text-lg leading-relaxed max-w-sm">
                  {step.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center"
        >
          <Link 
            href="/book-now"
            className="inline-flex items-center justify-center gap-4 bg-brand-red text-white px-10 py-5 rounded-sm text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#113122] transition-colors duration-300 shadow-xl group"
          >
            Book Now — It Takes 60 Seconds
            <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
