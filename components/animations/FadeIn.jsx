"use client";

import { m } from "framer-motion";

export default function FadeIn({ children, className = "", delay = 0, duration = 0.8, y = 20, as = "div", style = {} }) {
  const Component = m[as] || m.div;
  
  return (
    <Component
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      style={style}
    >
      {children}
    </Component>
  );
}
