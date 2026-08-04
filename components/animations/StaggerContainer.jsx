"use client";

import { m } from "framer-motion";

export default function StaggerContainer({ children, className = "", delay = 0, staggerChildren = 0.15, delayChildren = 0.1, as = "div" }) {
  const Component = m[as] || m.div;
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren, delayChildren: delay + delayChildren },
    },
  };

  return (
    <Component
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      className={className}
    >
      {children}
    </Component>
  );
}
