"use client";

import dynamic from "next/dynamic";
import chimesAnimation from "@/public/animations/chimes.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function ChimesBackground() {
  return (
    <>
      {/* Decorative Chimes */}
      <div className="absolute top-0 left-0 w-24 sm:w-32 md:w-48 lg:w-64 pointer-events-none -translate-x-2 sm:-translate-x-4 -translate-y-2 sm:-translate-y-4">
        <Lottie animationData={chimesAnimation} loop={true} />
      </div>
      <div className="absolute top-0 right-0 w-32 sm:w-48 md:w-64 lg:w-80 pointer-events-none translate-x-2 sm:translate-x-4 -translate-y-2 sm:-translate-y-4">
        <Lottie animationData={chimesAnimation} loop={true} />
      </div>
    </>
  );
}
