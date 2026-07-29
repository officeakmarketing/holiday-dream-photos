"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function WindChimesAnimation({ className = "" }) {
  const [animationData, setAnimationData] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    fetch("/animations/Christmas wind chimes.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Failed to load wind chimes animation:", err));
  }, []);

  if (!mounted || !animationData) return null;

  return (
    <div className={`pointer-events-none flex items-start justify-center ${className}`}>
      <Lottie 
        animationData={animationData} 
        loop={true} 
        autoplay={true}
        style={{ width: "100%", height: "100%", objectFit: "contain" }} 
      />
    </div>
  );
}
