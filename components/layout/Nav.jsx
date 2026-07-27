"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

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
    { name: "Our Santas", href: "/our-santas" },
    { name: "Locations", href: "/locations" },
    { name: "Private Events", href: "/private-events" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <div className="fixed top-0 w-full z-50">
        <nav className={`w-full transition-all duration-700 ease-in-out border-b ${scrolled ? 'bg-white/90 backdrop-blur-lg border-gray-200/50 py-3 shadow-sm' : 'bg-transparent border-transparent py-6'}`}>
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
            <div className="flex items-center justify-between transition-all duration-500">
              
              {/* Left: Logo */}
              <Link href="/" className="flex items-center gap-3 group z-50 relative">
                <div className="flex flex-col justify-center">
                  <span className={`font-bodoni font-medium transition-all duration-700 ${scrolled ? 'text-2xl' : 'text-3xl'} text-[#113122] leading-none tracking-tight`}>
                    Holiday <span className="italic text-brand-red">Dream</span>
                  </span>
                  <span className="text-[0.55rem] font-bold uppercase tracking-[0.4em] text-gray-500 mt-1 leading-none pl-0.5">
                    Photos
                  </span>
                </div>
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
                  className="px-8 py-3.5 bg-[#113122] text-white text-[0.65rem] font-bold uppercase tracking-[0.2em] hover:bg-brand-red transition-colors duration-300"
                >
                  Book Now
                </Link>
              </div>

              {/* Right: Menu Button (Shows on Mobile ALWAYS, and Desktop when Scrolled) */}
              <div className={`flex items-center transition-all duration-700 ${!scrolled ? 'lg:opacity-0 lg:invisible lg:-translate-y-4 lg:pointer-events-none' : 'lg:opacity-100 lg:visible lg:translate-y-0'}`}>
                <button 
                  className="flex items-center gap-3 group text-[#113122] hover:text-brand-red transition-colors"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] hidden sm:block">Menu</span>
                  <Menu size={28} strokeWidth={1.5} />
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
            className="fixed inset-0 z-[100] bg-[#113122] flex flex-col"
          >
            {/* Overlay Header */}
            <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 py-6 flex justify-between items-center">
              <Link href="/" className="flex flex-col justify-center" onClick={() => setMobileMenuOpen(false)}>
                <span className="font-bodoni font-medium text-2xl text-white leading-none tracking-tight">
                  Holiday <span className="italic text-brand-red">Dream</span>
                </span>
                <span className="text-[0.55rem] font-bold uppercase tracking-[0.4em] text-white/50 mt-1 leading-none pl-0.5">
                  Photos
                </span>
              </Link>
              
              <button 
                className="flex items-center gap-3 group text-white hover:text-brand-red transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] hidden sm:block">Close</span>
                <X size={32} strokeWidth={1} />
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
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:gap-y-8 gap-x-12 lg:gap-x-24 w-full text-center lg:text-left mb-8 lg:mb-12">
                  {links.map((link) => (
                    <motion.div
                      key={link.name}
                      variants={{
                        hidden: { opacity: 0, y: 40 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
                      }}
                      className="flex lg:justify-start justify-center"
                    >
                      <Link 
                        href={link.href} 
                        className="font-bodoni text-4xl lg:text-6xl text-white hover:text-brand-red transition-colors tracking-tighter leading-none block"
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
                  }}
                  className="w-full flex justify-center lg:justify-start border-t border-white/20 pt-8 lg:pt-10"
                >
                  <Link 
                    href="/book-now"
                    className="inline-block border border-white/30 text-white text-xs font-bold uppercase tracking-[0.3em] px-10 py-4 hover:bg-white hover:text-[#113122] transition-colors"
                  >
                    Book Your Session
                  </Link>
                </motion.div>

              </motion.div>
            </div>
            
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
