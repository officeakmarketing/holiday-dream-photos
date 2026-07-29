"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function SnowAnimation() {
  const [animationData, setAnimationData] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Fetch the animation data from the public folder
    // This avoids bundling the large JSON file in the main JS bundle
    fetch("/animations/Let it snow.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Failed to load snow animation:", err));
  }, []);

  // We tile the animation horizontally to make the snowflakes smaller
  // while ensuring they spread perfectly across the entire width of the container.
  
  if (!mounted || !animationData) return null;

  return (
    <div className="absolute -top-[30%] -bottom-[10%] left-0 right-0 pointer-events-none z-0 overflow-hidden opacity-50 flex">
      {/* Tile 1 - Always visible */}
      <div className="w-full md:w-1/2 xl:w-1/3 h-full relative flex-shrink-0">
        <Lottie 
          animationData={animationData} 
          loop={true} 
          autoplay={true}
          rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
          style={{ width: "100%", height: "100%" }} 
        />
      </div>
      {/* Tile 2 - Tablet and up (Flipped for seamless organic look) */}
      <div className="hidden md:block md:w-1/2 xl:w-1/3 h-full relative flex-shrink-0 opacity-80 scale-x-[-1]">
        <Lottie 
          animationData={animationData} 
          loop={true} 
          autoplay={true}
          rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
          style={{ width: "100%", height: "100%" }} 
        />
      </div>
      {/* Tile 3 - Desktop and up */}
      <div className="hidden xl:block w-1/3 h-full relative flex-shrink-0 opacity-90">
        <Lottie 
          animationData={animationData} 
          loop={true} 
          autoplay={true}
          rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
          style={{ width: "100%", height: "100%" }} 
        />
      </div>
    </div>
  );
}
