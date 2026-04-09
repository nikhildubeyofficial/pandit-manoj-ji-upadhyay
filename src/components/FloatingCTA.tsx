"use client";

import { MessageCircle, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export function FloatingCTA() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4"
                >
                    {/* WhatsApp Button */}
                    <motion.a
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.9 }}
                        href="https://wa.me/917773084685"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-14 h-14 bg-[#25D366] text-white rounded-2xl shadow-xl flex items-center justify-center border-4 border-white transition-all hover:shadow-2xl hover:shadow-green-500/20"
                    >
                        <MessageCircle className="w-7 h-7 fill-current" />
                    </motion.a>

                    {/* Quick Call Button */}
                    <motion.a
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.9 }}
                        href="tel:+917773084685"
                        className="w-14 h-14 bg-maroon text-cream rounded-2xl shadow-xl flex items-center justify-center border-4 border-white transition-all hover:shadow-2xl hover:shadow-maroon/20"
                    >
                        <Phone className="w-6 h-6 fill-current" />
                    </motion.a>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

