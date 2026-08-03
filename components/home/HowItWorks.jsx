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
      text: "Traditional Santa or Black Santa. Both are premium. Both are magical. Pick what feels right for your family.",
      bgColor: "bg-brand-red",
      textColor: "text-white",
      iconColor: "text-brand-red",
    },
    {
      number: "2",
      title: "Pick Your Location & Time",
      text: "8 locations across the USA. Mississippi, Texas, Arkansas, Nebraska, Minnesota, Pennsylvania, and Alabama. Morning, afternoon, and evening slots throughout the holiday season.",
      bgColor: "bg-brand-dark",
      textColor: "text-white",
      iconColor: "text-brand-dark",
    },
    {
      number: "3",
      title: "Show Up and Make Magic",
      text: "Your session is confirmed the moment you book. We handle everything else. You show up and enjoy the moment.",
      bgColor: "bg-brand-red",
      textColor: "text-white",
      iconColor: "text-brand-red",
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-[1px] bg-brand-red"></div>
            <p className="text-brand-red font-bold uppercase tracking-[0.2em] text-xs md:text-sm">
              How It Works
            </p>
            <div className="w-8 h-[1px] bg-brand-red"></div>
          </div>
          
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-brand-dark leading-tight drop-shadow-sm">
            Book your perfect session <br className="hidden md:block" />
            <span className="italic text-brand-red">in three steps</span>
          </h2>
        </div>

        {/* Steps Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16 md:mb-24"
        >
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className={`flex flex-col items-center text-center px-4 py-6 sm:px-5 sm:py-8 md:px-6 md:py-12 lg:px-10 lg:py-14 ${step.bgColor} rounded-sm shadow-xl hover:-translate-y-2 transition-transform duration-500`}
            >
              {/* Unique Step Number Badge (Clean Outlined Soft Square) */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-white/5 border border-white/40 flex items-center justify-center mb-4 sm:mb-6 md:mb-8 font-heading text-2xl sm:text-3xl md:text-4xl text-white group-hover:scale-110 group-hover:bg-white/20 transition-all duration-500">
                {step.number}
              </div>
              
              <h3 className={`font-heading text-xl md:text-2xl lg:text-3xl mb-2 sm:mb-3 md:mb-4 ${step.textColor}`}>
                {step.title}
              </h3>
              
              <div className="w-8 sm:w-10 md:w-12 h-[2px] bg-white/30 mb-3 sm:mb-4 md:mb-6 rounded-full"></div>
              
              <p className={`${step.textColor} font-light text-sm sm:text-base leading-relaxed opacity-90`}>
                {step.text}
              </p>
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
            className="inline-flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 bg-brand-red text-white px-8 md:px-10 py-4 md:py-5 rounded-sm text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] hover:bg-brand-dark transition-colors duration-300 shadow-xl group text-center leading-snug"
          >
            <span>Book Now <span className="hidden md:inline">|</span></span>
            <span className="flex items-center gap-2 md:gap-4">
              It Takes 60 Seconds
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
