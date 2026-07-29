"use client";

import Link from "next/link";
import Lottie from "lottie-react";
import snowGlobeAnimation from "../public/animations/404 Winter Snow Globe.json";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      
      <div className="z-10 flex flex-col items-center max-w-lg w-full">
        <Lottie 
          animationData={snowGlobeAnimation} 
          loop={true} 
          className="w-full max-w-[280px] md:max-w-[420px] mx-auto drop-shadow-xl py-4 md:py-6"
        />
        
        <Link 
          href="/"
          className="px-8 py-4 bg-[#c8102e] text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#113122] transition-colors duration-300"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
