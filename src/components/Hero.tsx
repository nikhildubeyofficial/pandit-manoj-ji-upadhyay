"use client";

import { useTranslations } from 'next-intl';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function Hero() {
    const t = useTranslations('Index');
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    // Parallax effect: background moves slower than foreground
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section
            ref={ref}
            className="relative h-screen w-full flex items-center justify-center overflow-hidden"
        >
            {/* Parallax Background */}
            <motion.div
                style={{ y: yBg }}
                className="absolute inset-0 z-0 bg-mahakal-bg bg-cover bg-center bg-no-repeat"
            >
                <div className="absolute inset-0 bg-temple-shadow/60 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-temple-shadow/20 to-rice-white dark:to-temple-shadow" />
            </motion.div>

            {/* Foreground Content */}
            <motion.div
                style={{ opacity: opacityText }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-10 container mx-auto px-4 text-center mt-20"
            >
                <div className="max-w-3xl mx-auto glassmorphism p-8 md:p-12 rounded-3xl shadow-2xl backdrop-blur-lg border border-saffron/20">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-saffron mb-4 drop-shadow-lg">
                        {t('title')}
                    </h1>
                    <p className="text-xl md:text-2xl text-white font-medium mb-8 drop-shadow-md">
                        {t('subtitle')}
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="#pujas"
                            className="px-8 py-3 bg-saffron text-white rounded-full font-bold text-lg hover:bg-gold transition-colors shadow-lg w-full sm:w-auto text-center"
                        >
                            {t('pujas')}
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 bg-white/20 text-white rounded-full font-bold text-lg hover:bg-white/30 transition-colors backdrop-blur-sm shadow-lg w-full sm:w-auto text-center border border-white/30"
                        >
                            {t('contact')}
                        </a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
