"use client";

import { motion } from "framer-motion";
import { Sparkles, Camera, CalendarCheck } from "lucide-react";
import Image from "next/image";

export default function SolutionIntro() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const columns = [
    {
      icon: Sparkles,
      title: "The Magic",
      text: "From the moment your family arrives to the moment you leave, every detail is designed to feel like Christmas morning. The atmosphere, the setting, the experience — all of it built to make your child believe.",
      bgColor: "bg-brand-red",
      textColor: "text-white",
      iconColor: "text-brand-red",
    },
    {
      icon: Camera,
      title: "The Photography",
      text: "Every session is captured with professional lighting and equipment. These are not snapshots. These are the photos you frame, display, and share for the rest of your life.",
      bgColor: "bg-[#113122]",
      textColor: "text-white",
      iconColor: "text-[#113122]",
    },
    {
      icon: CalendarCheck,
      title: "The Booking",
      text: "Pick your location, pick your time, pay securely online. Your slot is confirmed instantly. No phone calls. No waiting lists. No uncertainty.",
      bgColor: "bg-brand-red",
      textColor: "text-white",
      iconColor: "text-brand-red",
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F9F7F4] relative overflow-hidden">
      
      {/* Decorative Wreath Background */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] opacity-[0.07] pointer-events-none z-0">
        <Image
          src="/images/hero_wreath.png"
          alt="Decorative Wreath"
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-[0.07] pointer-events-none z-0 rotate-180">
        <Image
          src="/images/hero_wreath.png"
          alt="Decorative Wreath"
          fill
          className="object-contain"
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-[1px] bg-brand-red"></div>
            <p className="text-brand-red font-bold uppercase tracking-[0.2em] text-xs md:text-sm">
              The Solution
            </p>
            <div className="w-8 h-[1px] bg-brand-red"></div>
          </div>
          
          <h2 className="font-bodoni text-4xl md:text-5xl lg:text-6xl font-medium text-[#113122] leading-tight drop-shadow-sm">
            A Santa experience designed around one thing — <span className="italic text-brand-red">your family's perfect moment.</span>
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {columns.map((col, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className={`flex flex-col items-center text-center px-6 py-12 lg:px-10 lg:py-16 ${col.bgColor} rounded-sm shadow-xl hover:-translate-y-2 transition-transform duration-500`}
            >
              {/* Icon in a white circle */}
              <div className={`w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center mb-8 ${col.iconColor}`}>
                <col.icon strokeWidth={1.5} size={28} />
              </div>
              
              <h3 className={`font-bodoni text-3xl mb-4 ${col.textColor}`}>
                {col.title}
              </h3>
              
              <div className="w-12 h-[2px] bg-white/30 mb-6 rounded-full"></div>
              
              <p className={`${col.textColor} font-light text-base leading-relaxed opacity-90`}>
                {col.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
