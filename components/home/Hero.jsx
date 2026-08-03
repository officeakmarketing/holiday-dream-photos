"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import TrustBar from "./TrustBar";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative w-full min-h-[100svh] bg-white overflow-hidden flex items-center pt-24 lg:pt-32 pb-32">
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      {/* Right Image (Large Santa) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-12 right-0 w-full lg:w-[60%] h-[calc(100%-3rem)] hidden lg:block z-0"
      >
        <Image
          src="/images/hero_santa.png"
          alt="Premium Santa Claus"
          fill
          className="object-contain object-right-bottom mix-blend-multiply brightness-[1.05]"
          priority
        />
      </motion.div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="flex flex-col items-center text-center lg:items-start lg:text-left lg:w-[50%]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-medium text-brand-dark leading-tight mb-6 tracking-tight"
          >
            The Santa Experience <br />
            <span className="text-brand-red italic font-light">Your Family Will Never Forget</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base text-gray-600 max-w-md mb-8 leading-relaxed"
          >
            Professional photography. Two magical experiences. Now at 8 locations across the USA this
            Christmas season.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center lg:items-start gap-4 w-full sm:w-auto"
          >
            <button className="w-full sm:w-auto px-8 py-3.5 bg-brand-red text-white font-semibold text-xs tracking-[0.2em] uppercase hover:bg-brand-red-dark transition-colors rounded-sm shadow-sm">
              Book Your Session Now
            </button>

          </motion.div>

      
        </motion.div>
      </div>

      {/* Trust Bar (Static Marquee) */}
      <TrustBar />

    </section>
  );
}
