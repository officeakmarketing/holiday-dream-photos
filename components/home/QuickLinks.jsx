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
      image: "/images/mall2.jpg" // Christmas party setting
    },
    {
      title: "Join the Team",
      description: "We are hiring real-bearded Santas and elves.",
      href: "/hiring",
      image: "/images/mall1.jpg" // Hiring visual
    },
    {
      title: "Contact Us",
      description: "Have questions? Our magical support team is here.",
      href: "/contact",
      image: "/images/mall2.jpg" // Contact visual
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-t border-gray-200">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
        
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 lg:mb-24">
          <div className="max-w-2xl">
            <span className="text-gray-400 font-semibold uppercase tracking-[0.4em] text-[10px] mb-6 block">
              Directory
            </span>
            <h2 className="font-bodoni text-5xl md:text-6xl lg:text-[6rem] text-[#113122] leading-none tracking-tight">
              Explore <span className="italic text-brand-red">More</span>
            </h2>
          </div>
          <p className="text-gray-500 text-lg font-light mt-8 lg:mt-0 max-w-sm lg:text-right">
            Everything you need to plan your magical, unhurried holiday experience.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
          
          {/* Sticky Image Reveal (Desktop) */}
          <div className="hidden lg:block w-5/12">
            <div className="sticky top-40 h-[700px] w-full bg-[#F9F7F4]">
              {links.map((link, idx) => (
                <img 
                  key={idx}
                  src={link.image}
                  alt={link.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${activeIndex === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
                />
              ))}
            </div>
          </div>

          {/* List (Right Side / Mobile Full) */}
          <div className="w-full lg:w-7/12 flex flex-col border-t border-[#113122]">
            {links.map((item, idx) => (
              <Link 
                href={item.href} 
                key={idx}
                onMouseEnter={() => setActiveIndex(idx)}
                className="group relative flex flex-col py-8 lg:py-16 border-b border-gray-200 transition-all duration-500 hover:border-[#113122]"
              >
                
                {/* Mobile Image Reveal */}
                <div className="block lg:hidden w-full aspect-video overflow-hidden mb-6 bg-[#F9F7F4]">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 sm:gap-0">
                  <div className="flex items-center gap-6 lg:gap-12">
                    <span className="text-gray-300 font-bodoni text-2xl lg:text-3xl italic group-hover:text-brand-red transition-colors duration-500">
                      0{idx + 1}
                    </span>
                    <h3 className="font-bodoni text-3xl md:text-4xl lg:text-5xl text-[#113122] group-hover:translate-x-4 transition-transform duration-500">
                      {item.title}
                    </h3>
                  </div>
                  
                  <div className="flex items-center justify-between sm:justify-end gap-6 sm:gap-12 lg:pl-12">
                    <p className="text-gray-500 text-sm font-light max-w-[200px] hidden md:block">
                      {item.description}
                    </p>
                    <div className="w-12 h-12 border border-gray-200 flex items-center justify-center group-hover:bg-[#113122] group-hover:text-white transition-all duration-500 group-hover:-rotate-45 shrink-0 group-hover:border-[#113122]">
                      <ArrowRight size={20} strokeWidth={1} />
                    </div>
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
