"use client";

import React, { useMemo } from "react";
import { m } from "framer-motion";

export default function CleanSnowFramer({ count = 40 }) {
  const particles = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      // 3 layers of depth for cinematic feel
      const depth = Math.random();
      const isClose = depth > 0.8;
      const isMid = depth > 0.4 && depth <= 0.8;
      
      const size = isClose ? 6 + Math.random() * 6 : isMid ? 3 + Math.random() * 3 : 1 + Math.random() * 2;
      const blur = isClose ? "blur-[2px]" : isMid ? "blur-[1px]" : "blur-none";
      const duration = isClose ? 8 + Math.random() * 5 : isMid ? 15 + Math.random() * 10 : 25 + Math.random() * 15;
      const opacity = isClose ? 0.2 + Math.random() * 0.2 : isMid ? 0.4 + Math.random() * 0.3 : 0.6 + Math.random() * 0.4;
      const drift = (Math.random() - 0.5) * (isClose ? 100 : 40);

      // Give 20% of them a golden magical tint instead of pure white
      const isGolden = Math.random() > 0.8;
      
      return {
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 15, // Stagger them nicely
        duration,
        size,
        opacity,
        drift,
        blur,
        bgClass: isGolden ? "bg-[#d4af37] shadow-[0_0_8px_rgba(212,175,55,0.8)]" : "bg-white shadow-[0_0_8px_rgba(255,255,255,0.6)]",
      };
    });
  }, [count]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {particles.map((p) => (
        <m.div
          key={p.id}
          className={`absolute rounded-full ${p.blur} ${p.bgClass}`}
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: -20,
          }}
          animate={{
            y: [0, 1200], // Fall down through the container
            x: [0, p.drift, -p.drift, p.drift], // Gentle horizontal drift
            opacity: [0, p.opacity, p.opacity, 0],
            scale: [1, 1.2, 0.8, 1.1], // Twinkling effect
          }}
          transition={{
            y: {
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "linear",
            },
            x: {
              duration: p.duration / 1.5,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            },
            opacity: {
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "linear",
              times: [0, 0.15, 0.85, 1],
            },
            scale: {
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }
          }}
        />
      ))}
    </div>
  );
}
