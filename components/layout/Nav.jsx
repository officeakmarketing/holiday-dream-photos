"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Lottie from "lottie-react";
import christmasLights from "../../public/animations/Coloured Christmas lights.json";

const Nav = React.memo(function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Check if we are on a page with a dark hero section
  const isDarkHeader = pathname === '/locations' || pathname === '/private-events' || pathname === '/book-now' || pathname === '/hiring' || pathname === '/contact';

  // Close menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Handle scroll state
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when full screen menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  const links = [
    { name: "Home", href: "/" },
    { name: "Pick Your Santa", href: "/pick-your-santa" },
    { name: "Locations", href: "/locations" },
    { name: "Private Events", href: "/private-events" },
    { name: "About", href: "/about" },
    { name: "Hiring", href: "/hiring" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>

      <div className="fixed top-0 w-full z-40">
        {/* Christmas Lights Decoration */}
        <div className={`absolute left-0 w-full overflow-hidden pointer-events-none z-50 h-24 md:h-32 flex items-start justify-center transition-all duration-700 ease-in-out ${scrolled ? 'opacity-0 -translate-y-10 invisible' : 'opacity-90 -translate-y-0 visible -mt-2 md:-mt-4'}`}>
          <Lottie 
            animationData={christmasLights} 
            loop={true} 
            className="w-full min-w-[1200px] md:min-w-[2000px] max-w-none drop-shadow-md"
          />
        </div>
        <nav className={`w-full transition-all duration-700 ease-in-out border-b ${scrolled ? 'bg-white/90 backdrop-blur-lg border-gray-200/50 py-3 shadow-sm' : 'bg-transparent border-transparent py-6'}`}>
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 relative">
            <div className="flex items-center justify-between transition-all duration-500 relative z-10">

              {/* Left: Logo */}
              <Link href="/" className="flex items-center gap-3 group z-50 relative">
                <img
                  src="/images/logo.png"
                  alt="Holiday Dream Photos"
                  className={`transition-all duration-700 object-contain ${scrolled ? 'h-10 md:h-12' : 'h-14 md:h-14'} ${!scrolled && isDarkHeader ? 'brightness-0 invert' : ''}`}
                />
              </Link>

              {/* Right: Links & CTA (Desktop - Top State Only) */}
              <div className={`hidden lg:flex items-center space-x-10 transition-all duration-700 absolute right-0 ${scrolled ? 'opacity-0 invisible translate-y-4 pointer-events-none' : 'opacity-100 visible translate-y-0'}`}>
                {links.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`text-[0.65rem] font-bold transition-all duration-300 uppercase tracking-[0.2em] relative group py-2 ${
                        !scrolled && isDarkHeader 
                          ? (isActive ? 'text-white' : 'text-white/80 hover:text-white') 
                          : (isActive ? 'text-brand-red' : 'text-brand-dark hover:text-brand-red')
                      }`}
                    >
                      {link.name}
                      <span className={`absolute bottom-0 left-0 w-full h-[2px] transition-transform duration-300 origin-left bg-brand-red ${
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}></span>
                    </Link>
                  );
                })}
                <Link
                  href="/book-now"
                  className="px-8 py-3.5 bg-brand-red text-white text-[0.65rem] font-bold uppercase tracking-[0.2em] hover:bg-brand-dark transition-colors duration-300 rounded-sm"
                >
                  Book Now
                </Link>
              </div>

              {/* Right: Menu Button (Shows on Mobile ALWAYS, and Desktop when Scrolled) */}
              <div className={`flex items-center gap-4 transition-all duration-700 ${!scrolled ? 'lg:opacity-0 lg:invisible lg:-translate-y-4 lg:pointer-events-none' : 'lg:opacity-100 lg:visible lg:translate-y-0'}`}>
                
                <button
                  className="flex items-center gap-3 group transition-colors"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <span className={`text-[0.65rem] font-bold uppercase tracking-[0.2em] hidden sm:block transition-colors mt-0.5 ${!scrolled && isDarkHeader ? 'text-white hover:text-white/70' : 'text-brand-dark group-hover:text-brand-red'}`}>Menu</span>
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full border bg-white flex items-center justify-center group-hover:border-brand-red group-hover:bg-brand-red group-hover:text-white transition-all duration-300 shadow-sm ${!scrolled && isDarkHeader ? 'border-white/20' : 'border-gray-200'}`}>
                    <Menu size={20} strokeWidth={1.5} className="md:w-5 md:h-5 text-brand-dark group-hover:text-white" />
                  </div>
                </button>
              </div>

            </div>
          </div>
        </nav>
      </div>

      {/* Full Screen Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] bg-brand-light flex flex-col lg:flex-row overflow-y-auto overflow-x-hidden"
          >
            {/* Christmas Lights spanning full width of the overlay */}
            <div className="absolute top-[-10px] left-0 w-full overflow-hidden flex items-start justify-center pointer-events-none opacity-80 z-20">
              <Lottie 
                animationData={christmasLights} 
                loop={true} 
                className="w-full min-w-[1200px] md:min-w-[2000px] max-w-none drop-shadow-2xl"
              />
            </div>

            {/* Left Panel: Graphic (Desktop Only) */}
            <div className="hidden lg:flex w-full lg:w-1/2 lg:h-screen bg-brand-dark relative flex-col justify-between p-6 sm:p-12 order-2 lg:order-1 min-h-[400px] lg:min-h-0">
               
               {/* Logo moved to Left Top (Desktop Only) */}
               <div className="relative z-10 hidden lg:block">
                 <Link href="/" onClick={() => setTimeout(() => setMobileMenuOpen(false), 200)}>
                   <img src="/images/logo.png" alt="Holiday Dream Photos" className="h-10 sm:h-12 lg:h-14 object-contain brightness-0 invert" />
                 </Link>
               </div>
               
               {/* Content over animation */}
               <div className="relative z-10 text-brand-light flex-1 flex items-center justify-center lg:justify-start mt-8 lg:mt-0">
                 <h2 className="font-heading text-3xl sm:text-4xl lg:text-[clamp(2.5rem,4vw,4rem)] leading-tight tracking-tight max-w-sm">
                   Experience the Magic of the Holidays.
                 </h2>
               </div>
               
               <div className="relative z-10 hidden lg:block mt-8">
                 <p className="text-[10px] text-brand-light/60 font-semibold tracking-[0.2em] uppercase">Holiday Dream Photos &copy; {new Date().getFullYear()}</p>
               </div>
            </div>

            {/* Right Panel: Navigation */}
            <div className="w-full lg:w-1/2 min-h-[100svh] lg:h-screen flex flex-col justify-between p-6 sm:p-12 order-1 lg:order-2 bg-brand-light relative">
              
              {/* Overlay Header */}
              <div className="flex justify-between items-start lg:items-center w-full mb-8 lg:mb-12 shrink-0">
                
                {/* Mobile Logo (Hidden on Desktop) */}
                <div className="lg:hidden">
                  <Link href="/" onClick={() => setTimeout(() => setMobileMenuOpen(false), 200)}>
                    <img src="/images/logo.png" alt="Holiday Dream Photos" className="h-10 sm:h-12 object-contain" />
                  </Link>
                </div>

                {/* Desktop Top Header (CTA & Socials - Hidden on 2xl) */}
                <div className="hidden lg:flex 2xl:hidden flex-1 items-center justify-start gap-8 lg:px-4">
                  <Link
                    href="/book-now"
                    onClick={() => setTimeout(() => setMobileMenuOpen(false), 200)}
                    className="inline-block bg-brand-red text-white text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] px-6 py-3.5 hover:bg-brand-dark transition-colors rounded-sm"
                  >
                    Book Your Session
                  </Link>
                  <div className="flex gap-4">
                    <a href="https://www.instagram.com/holidaydreamphotos" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-brand-dark/20 flex items-center justify-center text-brand-dark hover:border-brand-red hover:bg-brand-red hover:text-white transition-all duration-300">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </a>
                    <a href="https://www.facebook.com/holidaydreamphotos" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-brand-dark/20 flex items-center justify-center text-brand-dark hover:border-brand-red hover:bg-brand-red hover:text-white transition-all duration-300">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    </a>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  className="flex items-center gap-3 group text-brand-dark transition-colors ml-auto"
                  onClick={() => setTimeout(() => setMobileMenuOpen(false), 200)}
                >
                  <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] hidden sm:block group-hover:text-brand-red transition-colors mt-0.5">Close</span>
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-brand-dark/20 flex items-center justify-center group-hover:border-brand-red group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                    <X size={20} strokeWidth={1.5} className="md:w-5 md:h-5" />
                  </div>
                </button>
              </div>

              {/* Links Container */}
              <div className="flex-1 flex flex-col justify-center py-4 lg:pl-4">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={{
                    visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } }
                  }}
                  className="flex flex-col gap-y-3 sm:gap-y-4 lg:gap-y-[clamp(0.75rem,2vh,1.5rem)] w-full max-w-lg lg:mx-0"
                >
                  {links.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <motion.div
                        key={link.name}
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
                        }}
                        className="group/link border-b border-brand-dark/10 pb-3 sm:pb-4 w-full relative overflow-hidden"
                      >
                        <Link
                          href={link.href}
                          onClick={() => setTimeout(() => setMobileMenuOpen(false), 200)}
                          className={`font-heading text-[clamp(1.75rem,5vh,3.5rem)] transition-all duration-500 tracking-tight leading-none block w-full relative z-10 ${
                            isActive 
                              ? 'text-brand-red translate-x-4 sm:translate-x-6' 
                              : 'text-brand-dark hover:text-brand-red hover:translate-x-4 sm:hover:translate-x-6'
                          }`}
                        >
                          {link.name}
                        </Link>
                        
                        {/* Active indicator line */}
                        <div className={`absolute left-0 top-0 bottom-3 sm:bottom-4 w-1.5 bg-brand-red transition-transform duration-500 origin-left ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover/link:scale-x-100'}`}></div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>

              {/* Footer CTA & Socials (Mobile & 2xl screens) */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] } }
                }}
                className="w-full flex lg:hidden 2xl:flex flex-col sm:flex-row items-start sm:items-center justify-between border-t border-brand-dark/10 pt-6 mt-6 shrink-0 gap-6"
              >
                <Link
                  href="/book-now"
                  onClick={() => setTimeout(() => setMobileMenuOpen(false), 200)}
                  className="inline-block bg-brand-red text-white text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] px-6 sm:px-8 py-3.5 hover:bg-brand-dark transition-colors rounded-sm"
                >
                  Book Your Session
                </Link>

                <div className="flex gap-4">
                  <a href="https://www.instagram.com/holidaydreamphotos" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-brand-dark/20 flex items-center justify-center text-brand-dark hover:border-brand-red hover:bg-brand-red hover:text-white transition-all duration-300">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </a>
                  <a href="https://www.facebook.com/holidaydreamphotos" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-brand-dark/20 flex items-center justify-center text-brand-dark hover:border-brand-red hover:bg-brand-red hover:text-white transition-all duration-300">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});

export default Nav;
