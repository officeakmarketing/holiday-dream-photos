"use client";

import Lottie from "lottie-react";
import letItSnow from "@/public/animations/Let it snow.json";

export default function LottieSnow() {
  return (
    <Lottie
      animationData={letItSnow}
      loop={true}
      className="w-full h-full scale-110"
      rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
    />
  );
}
