"use client";

import Link from "next/link";
import Lottie from "lottie-react";
import christmasLights from "../../public/animations/Coloured Christmas lights.json";
import snowAnimation from "../../public/animations/Let it snow.json";

export default function Footer() {
  return (
    <footer className="w-full bg-brand-light pt-28 lg:pt-36 pb-12 relative overflow-hidden border-t border-brand-dark/10">
      
      {/* Background Snow Animation */}
      <div className="hidden md:flex absolute inset-0 w-full h-full opacity-10 pointer-events-none z-10 items-center justify-center filter brightness-0">
        <Lottie 
          animationData={snowAnimation} 
          loop={true} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Christmas Lights Decoration */}
      <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none z-30 h-48 md:h-64 -mt-4 flex items-start justify-center opacity-100">
        <Lottie 
          animationData={christmasLights} 
          loop={true} 
          className="w-full min-w-[2000px] md:min-w-[2800px] max-w-none drop-shadow-xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 isolate">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 text-brand-dark">
          {/* Left Column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="uppercase tracking-[0.2em] text-xs font-bold mb-6 text-brand-red">Quick Links</h4>
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-brand-dark/70 hover:text-brand-dark transition-colors text-sm font-medium">Home</Link>
              <Link href="/pick-your-santa" className="text-brand-dark/70 hover:text-brand-dark transition-colors text-sm font-medium">Pick Your Santa</Link>
              <Link href="/locations" className="text-brand-dark/70 hover:text-brand-dark transition-colors text-sm font-medium">Locations</Link>
              <Link href="/private-events" className="text-brand-dark/70 hover:text-brand-dark transition-colors text-sm font-medium">Private Events</Link>
              <Link href="/about" className="text-brand-dark/70 hover:text-brand-dark transition-colors text-sm font-medium">About</Link>
              <Link href="/hiring" className="text-brand-dark/70 hover:text-brand-dark transition-colors text-sm font-medium">Hiring</Link>
              <Link href="/contact" className="text-brand-dark/70 hover:text-brand-dark transition-colors text-sm font-medium">Contact</Link>
            </div>
          </div>

          {/* Center Column - Logo */}
          <div className="flex flex-col items-center justify-center">
            <img src="/images/logo.png" alt="Holiday Dream Photos" className="h-16 md:h-20 object-contain mb-8 drop-shadow-sm" />
            <p className="text-brand-dark/60 font-heading italic text-xl text-center">
              "Creating unhurried, magical memories"
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <h4 className="uppercase tracking-[0.2em] text-xs font-bold mb-6 text-brand-red">Connect</h4>
            <div className="flex flex-col gap-4">
              <a href="mailto:hello@holidaydreamphotos.com" className="text-brand-dark/70 hover:text-brand-dark transition-colors text-sm font-medium">hello@holidaydreamphotos.com</a>
              <div className="flex gap-4 mt-2 justify-center md:justify-end">
                <a href="https://www.instagram.com/holidaydreamphotos" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-brand-dark/20 flex items-center justify-center text-brand-dark/70 hover:bg-brand-dark hover:text-brand-light hover:border-brand-dark transition-all duration-300">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="https://www.facebook.com/holidaydreamphotos" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-brand-dark/20 flex items-center justify-center text-brand-dark/70 hover:bg-brand-dark hover:text-brand-light hover:border-brand-dark transition-all duration-300">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-brand-dark/10 flex flex-col md:flex-row justify-between items-center gap-4 w-full">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-8">
            <p className="text-brand-dark/50 text-xs font-medium text-center md:text-left">
              &copy; {new Date().getFullYear()} Holiday Dream Photos. All rights reserved.
            </p>
            <p className="text-brand-dark/50 text-xs font-medium text-center md:text-left">
              Powered by <a href="https://akmarketing.agency/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition-colors underline decoration-brand-dark/20 underline-offset-4 hover:decoration-brand-red font-semibold">AK Marketing</a>
            </p>
          </div>
          <div className="flex gap-6 mt-2 md:mt-0">
            <Link href="/privacy" className="text-brand-dark/50 hover:text-brand-dark transition-colors text-xs font-medium">Privacy Policy</Link>
            <Link href="/terms" className="text-brand-dark/50 hover:text-brand-dark transition-colors text-xs font-medium">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
