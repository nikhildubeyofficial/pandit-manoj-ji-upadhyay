"use client";

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}

export function Section({ 
  children, 
  id, 
  className = "", 
  containerClassName = "",
  animate = true 
}: SectionProps) {
  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
    }
  };

  return (
    <section id={id} className={`py-24 md:py-32 overflow-hidden ${className}`}>
      <motion.div
        initial={animate ? "hidden" : "visible"}
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={variants}
        className={`max-w-7xl mx-auto px-6 ${containerClassName}`}
      >
        {children}
      </motion.div>
    </section>
  );
}
