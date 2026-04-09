"use client";

import { ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

export function Button({ 
  children, 
  variant = 'primary', 
  className = "", 
  ...props 
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold uppercase tracking-[0.2em] transition-all active:scale-95";
  
  const variants = {
    primary: "bg-maroon text-cream shadow-xl shadow-maroon/20 hover:bg-maroon/90",
    secondary: "bg-saffron text-white shadow-xl shadow-saffron/20 hover:bg-saffron/90",
    outline: "border-2 border-maroon/20 text-maroon hover:border-maroon/40"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
