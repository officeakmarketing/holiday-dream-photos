"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "Our Santas", href: "/our-santas" },
    { name: "Locations", href: "/locations" },
    { name: "Private Events", href: "/private-events" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="fixed top-0 w-full z-50">

      <nav className={`w-full transition-all duration-500 border-b ${scrolled ? 'bg-[#f5f9fa]/95 backdrop-blur-md border-gray-200/50 shadow-sm py-0' : 'bg-transparent border-transparent py-2'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-24 transition-all duration-500">
            
            {/* Left: Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="flex flex-col justify-center">
                  <span className="font-bodoni font-medium text-3xl text-[#113122] leading-none tracking-tight">
                    Holiday <span className="italic text-brand-red">Dream</span>
                  </span>
                  <span className="text-[0.6rem] font-bold uppercase tracking-[0.4em] text-gray-500 mt-1 leading-none pl-0.5">
                    Photos
                  </span>
                </div>
              </Link>
            </div>
            
            {/* Right: Links & CTA (Desktop) */}
            <div className="hidden lg:flex items-center space-x-10">
              {links.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className="text-[0.65rem] font-bold text-gray-500 hover:text-brand-red transition-colors uppercase tracking-[0.2em]"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                href="/book-now"
                className="px-8 py-3.5 bg-brand-red text-white text-[0.65rem] font-bold uppercase tracking-[0.2em] hover:bg-brand-red-dark transition-colors duration-300 rounded-sm shadow-sm"
              >
                Book Now
              </Link>
            </div>

            {/* Mobile hamburger */}
            <div className="flex lg:hidden justify-end">
              <button 
                className="p-2 text-[#113122]"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu size={28} />
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#F9F7F4] border-t border-gray-200 px-4 pt-4 pb-8 absolute w-full shadow-xl">
            <div className="flex flex-col space-y-6 mt-4">
              {links.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className="text-sm font-semibold text-[#113122] hover:text-brand-red uppercase tracking-[0.2em]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                href="/book-now"
                className="px-6 py-4 bg-[#113122] text-white text-center text-xs font-bold uppercase tracking-[0.2em] rounded-sm mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
