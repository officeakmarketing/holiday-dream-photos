"use client";

import React, { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";

const AnimatedNumber = ({ value }) => (
  <div className="relative inline-flex items-center justify-center overflow-hidden">
    <AnimatePresence mode="popLayout" initial={false}>
      <m.span
        key={value}
        initial={{ y: "100%", opacity: 0, filter: "blur(2px)" }}
        animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
        exit={{ y: "-100%", opacity: 0, filter: "blur(2px)" }}
        transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
        className="absolute inset-0 flex items-center justify-center"
      >
        {String(value).padStart(2, '0')}
      </m.span>
    </AnimatePresence>
    <span className="invisible">{String(value).padStart(2, '0')}</span>
  </div>
);

const CountdownBanner = React.memo(function CountdownBanner() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const calculateTimeLeft = () => {
      const year = new Date().getFullYear();
      let christmasDate = new Date(`12/25/${year} 00:00:00`).getTime();
      const now = new Date().getTime();
      
      // If Christmas has passed this year, countdown to next year
      if (now > christmasDate) {
        christmasDate = new Date(`12/25/${year + 1} 00:00:00`).getTime();
      }

      const difference = christmasDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft(); // Initial call
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) return null; // Avoid hydration mismatch

  return (
    <section className="relative w-full bg-brand-red py-10 md:py-12 overflow-hidden shadow-inner">
      
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100"
        style={{ backgroundImage: "url('/images/countdown-banner.jpg')" }}
      ></div>
      
      {/* Subtle vignette for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 flex flex-col md:flex-row items-center justify-center md:justify-around gap-10 md:gap-4">
        
        {/* Title */}
        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white font-medium text-center md:text-left leading-tight drop-shadow-md">
          Countdown to <br className="hidden md:block" />
          <span className="italic">Christmas</span>
        </h2>

        {/* Countdown Blocks */}
        <div className="flex items-center gap-2 sm:gap-4 lg:gap-6 mt-4 md:mt-0">
          
          {/* Days */}
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-brand-light rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
              <span className=" text-3xl sm:text-5xl font-bold text-brand-red "><AnimatedNumber value={timeLeft.days} /></span>
            </div>
            <span className="text-white font-heading italic font-semibold sm:font-medium text-[13px] sm:text-sm lg:text-base mt-2 drop-shadow-sm">Days</span>
          </div>

          <span className="text-white font-heading text-2xl sm:text-3xl lg:text-4xl -mt-6 sm:-mt-8 lg:-mt-10 font-bold opacity-90 drop-shadow-sm">:</span>

          {/* Hours */}
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-brand-light rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
              <span className=" text-3xl sm:text-5xl font-bold text-brand-red "><AnimatedNumber value={timeLeft.hours} /></span>
            </div>
            <span className="text-white font-heading italic font-semibold sm:font-medium text-[13px] sm:text-sm lg:text-base mt-2 drop-shadow-sm">Hours</span>
          </div>

          <span className="text-white font-heading text-2xl sm:text-3xl lg:text-4xl -mt-6 sm:-mt-8 lg:-mt-10 font-bold opacity-90 drop-shadow-sm">:</span>

          {/* Minutes */}
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-brand-light rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
              <span className="text-3xl sm:text-5xl font-bold text-brand-red "><AnimatedNumber value={timeLeft.minutes} /></span>
            </div>
            <span className="text-white font-heading italic font-semibold sm:font-medium text-[13px] sm:text-sm lg:text-base mt-2 drop-shadow-sm">Minutes</span>
          </div>

          <span className="text-white font-heading text-2xl sm:text-3xl lg:text-4xl -mt-6 sm:-mt-8 lg:-mt-10 font-bold opacity-90 drop-shadow-sm">:</span>

          {/* Seconds */}
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-brand-light rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
              <span className=" text-3xl sm:text-5xl font-bold text-brand-red "><AnimatedNumber value={timeLeft.seconds} /></span>
            </div>
            <span className="text-white font-heading italic font-semibold sm:font-medium text-[13px] sm:text-sm lg:text-base mt-2 drop-shadow-sm">Seconds</span>
          </div>

        </div>

      </div>
    </section>
  );
});

export default CountdownBanner;
