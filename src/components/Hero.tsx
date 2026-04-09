"use client";

import { useTranslations } from 'next-intl';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Phone, Calendar, Sparkles, MoveDown } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
    const t = useTranslations('Index');
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);
    const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
        }
    };

    return (
        <section
            ref={containerRef}
            className="relative min-h-[100svh] w-full flex items-center overflow-hidden bg-maroon"
        >
            {/* Immersive Background */}
            <motion.div style={{ y, opacity, scale }} className="absolute inset-0 z-0">
                <Image
                    src="/images/WhatsApp Image 2026-04-09 at 10.32.28 PM (1).jpeg"
                    alt="Vedic Spiritual Background"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Layered Overlays for Text Contrast */}
                <div className="absolute inset-0 bg-gradient-to-r from-maroon/90 via-maroon/40 to-transparent z-10 hidden lg:block" />
                <div className="absolute inset-0 bg-maroon/60 z-10 lg:hidden" />
                <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-maroon to-transparent z-10" />
            </motion.div>

            {/* Content Section */}
            <div className="relative z-20 w-full max-w-7xl mx-auto px-6 py-20 lg:py-32">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-3xl text-center lg:text-left"
                >
                    <motion.div
                        variants={itemVariants}
                        className="inline-flex items-center gap-3 mb-8 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
                    >
                        <Sparkles className="w-4 h-4 text-gold" />
                        <span className="text-cream text-[10px] md:text-xs font-bold uppercase tracking-[0.4em]">
                            ॐ Divine Vedic Path ॐ
                        </span>
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 leading-[1.05] tracking-tight"
                    >
                        {t('title')}
                        <span className="block text-gold mt-2 text-3xl md:text-5xl lg:text-6xl italic font-serif">
                            {t('subtitle')}
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-lg md:text-xl text-cream/90 max-w-xl lg:max-w-2xl mb-12 leading-relaxed font-sans font-light tracking-wide lg:mx-0 mx-auto"
                    >
                        {t('description')}
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row items-center gap-6 lg:justify-start justify-center"
                    >
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#contact"
                            className="w-full sm:w-auto btn-primary flex items-center justify-center gap-3 px-10 py-5 text-sm uppercase tracking-[0.2em] font-bold"
                        >
                            <span>{t('bookBtn')}</span>
                            <Calendar className="w-4 h-4" />
                        </motion.a>

                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="tel:+917773084685"
                            className="w-full sm:w-auto px-10 py-5 rounded-full border-2 border-cream/30 text-cream font-bold text-sm uppercase tracking-[0.2em] hover:bg-cream hover:text-maroon transition-all flex items-center justify-center gap-3"
                        >
                            <span>{t('callBtn')}</span>
                            <Phone className="w-4 h-4" />
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
            >
                <span className="text-[10px] uppercase font-bold tracking-[0.5em] text-cream/40 rotate-90 origin-left ml-4">Scroll</span>
                <MoveDown className="w-5 h-5 text-gold animate-bounce" />
            </motion.div>
        </section>
    );
}
