"use client";

import { motion } from "framer-motion";

export default function StaggerContainer({ children, className = "", delay = 0, staggerChildren = 0.15, delayChildren = 0.1, as = "div" }) {
  const Component = motion[as] || motion.div;
  
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
