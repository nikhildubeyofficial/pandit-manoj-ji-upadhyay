"use client";

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
    return (
        <motion.a
            href="https://wa.me/917773084685"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1, rotate: 12 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] transition-shadow"
            aria-label="Connect on WhatsApp"
        >
            <MessageCircle className="w-8 h-8 fill-white" />
            
            {/* Pulsing Ring */}
            <span className="absolute inset-0 rounded-full border-4 border-[#25D366] animate-ping opacity-20" />
            
            {/* Tooltip */}
            <div className="absolute right-20 bg-white text-[#1A1A1A] px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl border border-[#25D366]/10 pointer-events-none">
                Connect with Pandit Ji
            </div>
        </motion.a>
    );
}
