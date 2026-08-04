"use client";

import { motion } from "framer-motion";

export default function FadeInItem({ children, className = "", y = 20, as = "div", duration = 0.8 }) {
  const Component = motion[as] || motion.div;

  const itemVariants = {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <Component variants={itemVariants} className={className}>
      {children}
    </Component>
  );
}
