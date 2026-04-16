"use client";

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CTAButtonProps {
    children: ReactNode;
    href?: string;
    variant?: 'primary' | 'secondary';
    className?: string;
    onClick?: () => void;
}

export function CTAButton({ children, href, variant = 'primary', className = "", onClick }: CTAButtonProps) {
    const Component = href ? motion.a : motion.button;
    
    const baseStyles = "inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full text-xs font-bold uppercase tracking-[0.3em] transition-all shadow-2xl active:scale-95 whitespace-nowrap";
    
    const variants = {
        primary: "bg-maroon text-cream hover:bg-saffron hover:text-white shadow-maroon/20",
        secondary: "border border-maroon text-maroon hover:bg-maroon hover:text-white shadow-xl shadow-black/5"
    };

    return (
        <Component
            href={href}
            onClick={onClick}
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`${baseStyles} ${variants[variant]} ${className}`}
        >
            {children}
        </Component>
    );
}
