"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Lottie from "lottie-react";
import christmasLights from "../../public/animations/Coloured Christmas lights.json";
export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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
    { name: "Pick Your Santa", href: "/our-santas" },
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
        <div className={`absolute sm:top-[-10px] left-0 w-full overflow-hidden pointer-events-none z-50 h-24 md:h-32 flex items-start justify-center transition-all duration-700 ease-in-out ${scrolled ? 'opacity-0 -translate-y-10 invisible' : 'opacity-90 -translate-y-0 visible -mt-2 md:-mt-4'}`}>
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
                  className={`transition-all duration-700 object-contain ${scrolled ? 'h-10 md:h-12' : 'h-14 md:h-14'}`}
                />
              </Link>

              {/* Right: Links & CTA (Desktop - Top State Only) */}
              <div className={`hidden lg:flex items-center space-x-10 transition-all duration-700 absolute right-12 ${scrolled ? 'opacity-0 invisible translate-y-4 pointer-events-none' : 'opacity-100 visible translate-y-0'}`}>
                {links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-[0.65rem] font-bold text-[#113122] hover:text-brand-red transition-colors uppercase tracking-[0.2em]"
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  href="/book-now"
                  className="px-8 py-3.5 bg-brand-red text-white text-[0.65rem] font-bold uppercase tracking-[0.2em] hover:bg-[#113122] transition-colors duration-300 rounded-sm"
                >
                  Book Now
                </Link>
              </div>

              {/* Right: Menu Button (Shows on Mobile ALWAYS, and Desktop when Scrolled) */}
              <div className={`flex items-center transition-all duration-700 ${!scrolled ? 'lg:opacity-0 lg:invisible lg:-translate-y-4 lg:pointer-events-none' : 'lg:opacity-100 lg:visible lg:translate-y-0'}`}>
                <button
                  className="flex items-center gap-3 group text-[#113122] transition-colors"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] hidden sm:block group-hover:text-brand-red transition-colors mt-0.5">Menu</span>
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center group-hover:border-brand-red group-hover:bg-brand-red group-hover:text-white transition-all duration-300 shadow-sm">
                    <Menu size={20} strokeWidth={1.5} className="md:w-5 md:h-5" />
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
            className="fixed inset-0 z-[100] bg-[#F9F7F4] flex flex-col"
          >
            {/* Christmas Lights Decoration inside Overlay */}
            <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none z-0 h-48 md:h-64 flex items-start justify-center opacity-100">
              <Lottie 
                animationData={christmasLights} 
                loop={true} 
                className="w-full min-w-[2000px] md:min-w-[2800px] max-w-none drop-shadow-md"
              />
            </div>

            {/* Overlay Header */}
            <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 py-6 flex justify-between items-center relative z-10">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <img
                  src="/images/logo.png"
                  alt="Holiday Dream Photos"
                  className="h-14 md:h-16 object-contain"
                />
              </Link>

              <button
                className="flex items-center gap-3 group text-[#113122] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] hidden sm:block group-hover:text-brand-red transition-colors mt-0.5">Close</span>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#113122]/20 flex items-center justify-center group-hover:border-brand-red group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                  <X size={20} strokeWidth={1.5} className="md:w-5 md:h-5" />
                </div>
              </button>
            </div>

            {/* Overlay Links */}
            <div className="flex-1 flex flex-col justify-center items-center px-6 w-full">
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } }
                }}
                className="flex flex-col items-center w-full max-w-5xl"
              >

                <div className="flex flex-col lg:flex-row gap-y-4 gap-x-12 lg:gap-x-24 w-full text-center lg:text-left mb-8 lg:mb-12">
                  
                  {/* Left Column */}
                  <div className="flex flex-col gap-4 lg:gap-8 flex-1">
                    {links.filter((_, i) => i % 2 === 0).map((link) => (
                      <motion.div
                        key={link.name}
                        variants={{
                          hidden: { opacity: 0, y: 40 },
                          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
                        }}
                        className="flex lg:justify-start justify-center relative w-full group/link border-b border-[#113122]/10 pb-4 lg:pb-6"
                      >
                        <Link
                          href={link.href}
                          className="font-bodoni text-4xl md:text-5xl lg:text-6xl transition-colors duration-300 tracking-tighter leading-none block w-full text-[#113122] hover:text-brand-red"
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* Right Column */}
                  <div className="flex flex-col gap-4 lg:gap-8 flex-1">
                    {links.filter((_, i) => i % 2 !== 0).map((link) => (
                      <motion.div
                        key={link.name}
                        variants={{
                          hidden: { opacity: 0, y: 40 },
                          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
                        }}
                        className="flex lg:justify-start justify-center relative w-full group/link border-b border-[#113122]/10 pb-4 lg:pb-6"
                      >
                        <Link
                          href={link.href}
                          className="font-bodoni text-4xl md:text-5xl lg:text-6xl transition-colors duration-300 tracking-tighter leading-none block w-full text-[#113122] hover:text-brand-red"
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                </div>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
                  }}
                  className="w-full flex flex-col lg:flex-row items-center justify-between border-t border-[#113122]/10 pt-8 lg:pt-10 gap-8 relative z-10"
                >
                  <Link
                    href="/book-now"
                    className="inline-block border border-[#113122]/20 text-[#113122] text-xs font-bold uppercase tracking-[0.3em] px-10 py-4 hover:bg-[#113122] hover:text-[#F9F7F4] transition-colors"
                  >
                    Book Your Session
                  </Link>

                  <div className="flex gap-4">
                    <a href="https://www.instagram.com/holidaydreamphotos" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-[#113122]/20 flex items-center justify-center text-[#113122] hover:border-brand-red hover:bg-brand-red hover:text-white transition-all duration-300">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </a>
                    <a href="https://www.facebook.com/holidaydreamphotos" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-[#113122]/20 flex items-center justify-center text-[#113122] hover:border-brand-red hover:bg-brand-red hover:text-white transition-all duration-300">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    </a>
                  </div>
                </motion.div>

              </motion.div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
