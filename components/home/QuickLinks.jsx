"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function QuickLinks() {
  const [activeIndex, setActiveIndex] = useState(0);

  const links = [
    {
      title: "Locations",
      description: "Find a premium Santa photo experience near you.",
      href: "/locations",
      image: "/images/mall1.jpg" // Premium interior with Christmas tree
    },
    {
      title: "Private Events",
      description: "Book Santa for corporate events, parties, or home visits.",
      href: "/private-events",
      image: "images/mall2.jpg" // Christmas party setting (kept same)
    },
    {
      title: "Join the Team",
      description: "We are hiring real-bearded Santas and elves.",
      href: "/hiring",
      image: "http://localhost:3000/_next/image?url=%2Fimages%2Fmall2.jpg&w=1920&q=75" // Santa adjusting his suit
    },
    {
      title: "Contact Us",
      description: "Have questions? Our magical support team is here.",
      href: "/contact",
      image: "images/mall2.jpg" // Writing a letter
    }
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-[#F9F7F4] border-t border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 lg:mb-24">
          <div className="max-w-2xl">
            <p className="text-brand-red font-semibold uppercase tracking-[0.3em] text-xs md:text-sm mb-6">
              Directory
            </p>
            <h2 className="font-bodoni text-5xl md:text-6xl lg:text-[5rem] font-medium text-[#113122] leading-none tracking-tight">
              Explore More
            </h2>
          </div>
          <p className="text-gray-500 text-lg font-light mt-8 lg:mt-0 max-w-sm lg:text-right">
            Everything you need to plan your magical, unhurried holiday experience.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
          
          {/* Sticky Image Reveal (Left Side) */}
          <div className="hidden lg:block w-5/12">
            <div className="sticky top-32 h-[700px] w-full overflow-hidden shadow-2xl rounded-sm">
              {links.map((link, idx) => (
                <img 
                  key={idx}
                  src={link.image}
                  alt={link.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${activeIndex === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
                />
              ))}
              <div className="absolute inset-0 bg-[#113122]/10 mix-blend-multiply" />
            </div>
          </div>

          {/* List (Right Side) */}
          <div className="w-full lg:w-7/12 flex flex-col border-t border-[#113122]/20">
            {links.map((item, idx) => (
              <Link 
                href={item.href} 
                key={idx}
                onMouseEnter={() => setActiveIndex(idx)}
                className="group relative flex flex-col sm:flex-row sm:items-center justify-between py-10 lg:py-16 border-b border-[#113122]/20 hover:bg-white transition-all duration-500 px-6 lg:px-12 -mx-6 lg:-mx-0 lg:ml-0"
              >
                <div className="flex items-center gap-8 lg:gap-12 w-full sm:w-auto mb-6 sm:mb-0">
                  <span className="text-[#113122]/30 font-bodoni text-2xl lg:text-3xl italic group-hover:text-brand-red transition-colors duration-500">
                    0{idx + 1}
                  </span>
                  <h3 className="font-bodoni text-3xl lg:text-5xl font-bold text-[#113122] group-hover:translate-x-4 transition-transform duration-500">
                    {item.title}
                  </h3>
                </div>
                
                <div className="flex items-center justify-between sm:justify-end gap-6 sm:gap-12 pl-12 sm:pl-0">
                  <p className="text-gray-500 text-sm lg:text-base font-light max-w-[200px] hidden md:block">
                    {item.description}
                  </p>
                  <div className="w-12 h-12 rounded-full border border-[#113122]/20 flex items-center justify-center group-hover:bg-[#113122] group-hover:text-white transition-all duration-500 group-hover:-rotate-45 shrink-0">
                    <ArrowRight size={20} strokeWidth={1.5} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
