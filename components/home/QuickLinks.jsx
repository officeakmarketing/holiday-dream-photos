"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

export default function QuickLinks() {
  const scrollRef = useRef(null);
  const cursorRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

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
    };
  }, [isHovering]);

  const handleMouseDown = (e) => {
    setIsDown(true);
    setIsDragging(false);
    if (!scrollRef.current) return;
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
    
    // Disable snap and smooth scroll while dragging
    scrollRef.current.classList.remove('snap-x', 'snap-mandatory', 'scroll-smooth');
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setIsDown(false);
    if (!scrollRef.current) return;
    scrollRef.current.classList.add('snap-x', 'snap-mandatory', 'scroll-smooth');
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseUp = () => {
    setIsDown(false);
    if (!scrollRef.current) return;
    scrollRef.current.classList.add('snap-x', 'snap-mandatory', 'scroll-smooth');
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    if (!scrollRef.current) return;
    
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; 
    
    if (Math.abs(walk) > 5) {
      setIsDragging(true);
    }
    
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleLinkClick = (e) => {
    if (isDragging) {
      e.preventDefault();
    }
  };

  const links = [
    {
      title: "Edgewater Mall",
      description: "Biloxi, MS",
      href: "/locations/edgewater-mall",
      image: "/images/mall1.jpg",
      number: "01"
    },
    {
      title: "Almeda Mall",
      description: "Houston, TX",
      href: "/locations/almeda-mall",
      image: "/images/mall2.jpg",
      number: "02"
    },
    {
      title: "Central Mall",
      description: "Texarkana, TX",
      href: "/locations/central-mall",
      image: "/images/mall1.jpg",
      number: "03"
    },
    {
      title: "Outlets at Little Rock",
      description: "Little Rock, AR",
      href: "/locations/outlets-at-little-rock",
      image: "/images/mall2.jpg",
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
      image: "/images/mall2.jpg",
      number: "06"
    },
    {
      title: "Clearview Mall",
      description: "Butler, PA",
      href: "/locations/clearview-mall",
      image: "/images/mall1.jpg",
      number: "07"
    },
    {
      title: "The Shoppes at Bel Air",
      description: "Mobile, AL",
      href: "/locations/shoppes-at-bel-air",
      image: "/images/mall2.jpg",
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
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Custom Follower Cursor */}
      <div 
        ref={cursorRef}
        className={`hidden md:flex fixed top-0 left-0 w-24 h-24 rounded-full bg-brand-red/90 backdrop-blur-md pointer-events-none z-50 items-center justify-center text-white text-xs font-bold uppercase tracking-widest transition-opacity duration-300 transform -translate-x-1/2 -translate-y-1/2 mix-blend-normal shadow-2xl ${isHovering ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
        style={{ transitionProperty: 'opacity, transform', transitionDuration: '300ms', transform: `translate(-50%, -50%) scale(${isHovering ? 1 : 0.5}) ${isDown ? 'scale(0.8)' : ''}` }}
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
            <h2 className="font-bodoni text-5xl md:text-6xl lg:text-[7rem] text-[#113122] leading-[0.9] tracking-tight">
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

      {/* Horizontal Scroll Gallery */}
      <div className="pl-4 sm:pl-6 lg:pl-12 w-full">
        <div 
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 md:gap-8 pb-12 pr-4 sm:pr-6 lg:pr-12 hide-scrollbar scroll-smooth cursor-auto md:cursor-none"
        >
          {links.map((item, idx) => (
            <Link 
              href={item.href} 
              key={idx}
              onClick={handleLinkClick}
              draggable={false}
              className="group relative flex-none w-[85vw] sm:w-[400px] md:w-[450px] lg:w-[500px] h-[500px] md:h-[650px] snap-center sm:snap-start overflow-hidden bg-[#F9F7F4] select-none"
            >
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  draggable={false}
                  className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110 pointer-events-none"
                />
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#113122]/90 via-[#113122]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-700 pointer-events-none" />

              {/* Content */}
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between text-white pointer-events-none">
                <div className="flex justify-between items-start">
                  <span className="font-bodoni text-2xl italic text-white/70 group-hover:text-brand-red transition-colors duration-500">
                    {item.number}
                  </span>
                  <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm group-hover:bg-brand-red group-hover:border-brand-red transition-all duration-500 group-hover:scale-110 group-hover:-rotate-45">
                    <ArrowUpRight size={20} strokeWidth={1.5} />
                  </div>
                </div>

                <div className="transform translate-y-4 md:translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                  <h3 className="font-bodoni text-4xl md:text-5xl mb-4">
                    {item.title}
                  </h3>
                  <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-700 ease-out overflow-hidden">
                    <p className="text-white/80 text-sm md:text-base font-light max-w-[280px] pt-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
