"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";
import { m } from "framer-motion";
import Image from "next/image";

const QuickLinks = React.memo(function QuickLinks() {
  const carouselRef = useRef(null);
  const cursorRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Smoothly track mouse position even if not dragging
  useEffect(() => {
    const handleGlobalMouseMove = (e) => {
      if (cursorRef.current && isHovering) {
        // Use requestAnimationFrame for smoother following
        requestAnimationFrame(() => {
          if (cursorRef.current) {
            cursorRef.current.style.left = `${e.clientX}px`;
            cursorRef.current.style.top = `${e.clientY}px`;
          }
        });
      }
    };
    
    if (isHovering) {
      window.addEventListener('mousemove', handleGlobalMouseMove);
    }
    
    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove);
    }
  }, [isHovering]);

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    // Delay resetting so that onClick handlers catch the dragging state and prevent navigation
    setTimeout(() => {
      setIsDragging(false);
    }, 150);
  };

  const links = [
    {
      title: "Edgewater Mall",
      description: "Biloxi, MS",
      href: "/locations/edgewater-mall",
      image: "/images/edgewatermall.png",
      number: "01"
    },
    {
      title: "Almeda Mall",
      description: "Houston, TX",
      href: "/locations/almeda-mall",
      image: "/images/almedamall.png",
      number: "02"
    },
    {
      title: "Central Mall",
      description: "Texarkana, TX",
      href: "/locations/central-mall",
      image: "/images/centralmall.png",
      number: "03"
    },
    {
      title: "Outlets at Little Rock",
      description: "Little Rock, AR",
      href: "/locations/outlets-at-little-rock",
      image: "/images/outletsmall.png",
      number: "04"
    },
    {
      title: "Omaha Mall",
      description: "Omaha, NB",
      href: "/locations/omaha-mall",
      image: "/images/mall1.jpg",
      number: "05"
    },
    {
      title: "Northtown Mall",
      description: "Blaine, MN",
      href: "/locations/northtown-mall",
      image: "/images/northmall.png",
      number: "06"
    },
    {
      title: "Clearview Mall",
      description: "Butler, PA",
      href: "/locations/clearview-mall",
      image: "/images/clearviewmall.png",
      number: "07"
    },
    {
      title: "The Shoppes at Bel Air",
      description: "Mobile, AL",
      href: "/locations/shoppes-at-bel-air",
      image: "/images/belairmall.png",
      number: "08"
    },
    {
      title: "Private Events",
      description: "Corporate events and parties.",
      href: "/private-events",
      image: "/images/mall1.jpg",
      number: "09"
    },
    {
      title: "Join the Team",
      description: "Hiring Santas and elves.",
      href: "/hiring",
      image: "/images/mall2.jpg",
      number: "10"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-white overflow-hidden border-t border-gray-200">
      
      {/* Custom Follower Cursor */}
      <div 
        ref={cursorRef}
        className={`hidden md:flex fixed top-0 left-0 w-24 h-24 rounded-full bg-brand-red/90 backdrop-blur-md pointer-events-none z-50 items-center justify-center text-white text-xs font-bold uppercase tracking-widest transition-opacity duration-300 transform -translate-x-1/2 -translate-y-1/2 mix-blend-normal shadow-2xl ${isHovering ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
        style={{ transitionProperty: 'opacity, transform', transitionDuration: '300ms', transform: `translate(-50%, -50%) scale(${isHovering ? 1 : 0.5}) ${isDragging ? 'scale(0.8)' : ''}` }}
      >
        <span className="flex items-center gap-2">
          <ArrowLeft size={14} /> Drag <ArrowRight size={14} />
        </span>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 mb-12 md:mb-16 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
          <div className="max-w-2xl">
            <span className="text-gray-400 font-semibold uppercase tracking-[0.4em] text-[10px] mb-6 block">
              Directory
            </span>
            <h2 className="font-heading text-5xl md:text-6xl lg:text-[7rem] text-brand-dark leading-[0.9] tracking-tight">
              Explore <span className="italic text-brand-red">More</span>
            </h2>
          </div>
          
          <div className="flex flex-col items-start lg:items-end gap-6 md:gap-8">
            <p className="text-gray-500 text-lg font-light max-w-sm lg:text-right">
              Everything you need to plan your magical, unhurried holiday experience.
            </p>
          </div>
        </div>
      </div>

      {/* Horizontal Drag Gallery */}
      <div className="w-full max-w-[1600px] mx-auto overflow-hidden">
        <div 
          className="pl-4 sm:pl-6 lg:pl-12 w-full"
          ref={carouselRef}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => { setIsHovering(false); setIsDragging(false); }}
        >
        <m.div 
          drag="x"
          dragConstraints={carouselRef}
          whileTap={{ cursor: "grabbing" }}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          className="flex gap-6 md:gap-8 pr-4 sm:pr-6 lg:pr-12 w-max cursor-grab pb-12"
        >
          {links.map((item, idx) => (
            <m.div 
              key={idx} 
              className="relative flex-none w-[75vw] sm:w-[280px] md:w-[300px] lg:w-[340px] xl:w-[360px] h-[380px] md:h-[420px] lg:h-[480px] overflow-hidden bg-brand-light select-none group pointer-events-none rounded-sm"
            >
              <Link 
                href={item.href} 
                draggable={false}
                onClick={(e) => {
                  if (isDragging) {
                    e.preventDefault();
                  }
                }}
                className="absolute inset-0 pointer-events-auto"
              >
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    draggable={false}
                    fill
                    sizes="(max-width: 640px) 75vw, (max-width: 768px) 280px, (max-width: 1024px) 300px, 360px"
                    className="object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110 pointer-events-none"
                  />
                </div>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between text-white pointer-events-none">
                  <div className="flex justify-between items-start">
                    <span className="font-heading text-xl italic text-white/70 group-hover:text-brand-red transition-colors duration-500">
                      {item.number}
                    </span>
                    <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm group-hover:bg-brand-red group-hover:border-brand-red transition-all duration-500 group-hover:scale-110 group-hover:-rotate-45">
                      <ArrowUpRight size={16} strokeWidth={1.5} />
                    </div>
                  </div>

                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                    <h3 className="font-heading text-3xl md:text-4xl mb-3">
                      {item.title}
                    </h3>
                    <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-700 ease-out overflow-hidden">
                      <p className="text-white/80 text-sm font-light max-w-[280px] pt-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </m.div>
          ))}
        </m.div>
        </div>
      </div>
    </section>
  );
});

export default QuickLinks;
