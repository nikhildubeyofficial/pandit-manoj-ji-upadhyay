"use client";

import { motion } from 'framer-motion';
import { Flower2 } from 'lucide-react';

export function SectionDivider() {
    return (
        <div className="w-full flex items-center justify-center gap-8 py-10 opacity-30">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
            <motion.div
                initial={{ rotate: 0 }}
                whileInView={{ rotate: 180 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
                <Flower2 className="w-5 h-5 text-gold" />
            </motion.div>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-gold to-transparent" />
        </div>
    );
}
