import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

// Opacity + translateY reveal. Content stays visible if motion is reduced.
export function Reveal({ children, delay = 0, className = '' }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;
