"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { BadgeCheck, Sparkles } from 'lucide-react';
import { Section } from './ui/Section';

const cardImages = [
    { src: '/images/cards/WhatsApp Image 2026-04-10 at 8.36.01 AM.jpeg', alt: 'Pandit Ji Identity Card 1' },
    { src: '/images/cards/WhatsApp Image 2026-04-10 at 8.36.25 AM.jpeg', alt: 'Pandit Ji Identity Card 2' },
];

export function PanditJiCards() {
    const t = useTranslations('SpecialSections.cards');

    return (
        <Section id="credentials" className="bg-cream">
            {/* Section Header */}
            <div className="text-center mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-saffron/10 text-maroon text-[10px] uppercase font-bold tracking-[0.3em] mb-6"
                >
                    <BadgeCheck className="w-3.5 h-3.5 text-saffron" />
                    <span>ॐ Credentials ॐ</span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl font-serif font-bold text-maroon mb-6"
                >
                    {t('title')}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-lg text-dark/60 font-sans font-light max-w-2xl mx-auto italic"
                >
                    {t('subtitle')}
                </motion.p>
            </div>

            {/* Cards Grid */}
            <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
                {cardImages.map((card, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40, rotate: index === 0 ? -3 : 3 }}
                        whileInView={{ opacity: 1, y: 0, rotate: index === 0 ? -1.5 : 1.5 }}
                        whileHover={{ rotate: 0, scale: 1.04, y: -8 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="relative w-full max-w-sm rounded-[2rem] overflow-hidden shadow-2xl border-[8px] border-white group cursor-pointer"
                        style={{ aspectRatio: '3/2' }}
                    >
                        <Image
                            src={card.src}
                            alt={card.alt}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        {/* Shimmer overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-maroon/20 via-transparent to-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Gold border glow */}
                        <div className="absolute inset-0 rounded-[calc(2rem-8px)] ring-0 group-hover:ring-2 ring-gold/40 transition-all duration-500" />
                    </motion.div>
                ))}
            </div>

            {/* Decorative divider */}
            <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 1 }}
                className="mt-20 flex items-center gap-4 justify-center"
            >
                <div className="h-px w-24 bg-gradient-to-r from-transparent to-gold/40" />
                <Sparkles className="w-4 h-4 text-gold" />
                <div className="h-px w-24 bg-gradient-to-l from-transparent to-gold/40" />
            </motion.div>
        </Section>
    );
}
