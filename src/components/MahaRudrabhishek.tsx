"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Droplets, Sparkles, Play } from 'lucide-react';
import { Section } from './ui/Section';

const videos = [
    '/images/maha rudrabhishek/WhatsApp Video 2026-04-10 at 8.43.25 AM.mp4',
    '/images/maha rudrabhishek/WhatsApp Video 2026-04-10 at 8.43.29 AM.mp4',
    '/images/maha rudrabhishek/WhatsApp Video 2026-04-10 at 8.44.49 AM.mp4',
    '/images/maha rudrabhishek/WhatsApp Video 2026-04-10 at 8.44.50 AM.mp4',
];

export function MahaRudrabhishek() {
    const t = useTranslations('SpecialSections.maharudra');

    return (
        <Section id="maha-rudrabhishek" className="bg-maroon">
            {/* Section Header */}
            <div className="text-center mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-cream text-[10px] uppercase font-bold tracking-[0.3em] mb-6 border border-white/10"
                >
                    <Droplets className="w-3.5 h-3.5 text-gold" />
                    <span>ॐ Shiva's Grace ॐ</span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight"
                >
                    {t('title')}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-lg text-cream/70 font-sans font-light max-w-2xl mx-auto italic"
                >
                    {t('subtitle')}
                </motion.p>
            </div>

            {/* Video Grid — 2 large + 2 smaller */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* First two videos — larger */}
                {videos.slice(0, 2).map((vid, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15, duration: 0.9 }}
                        className="relative rounded-[2.5rem] overflow-hidden border-[8px] border-white/10 shadow-2xl group"
                        style={{ aspectRatio: '16/10' }}
                    >
                        <video
                            src={vid}
                            muted
                            loop
                            playsInline
                            autoPlay
                            className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-maroon/70 via-transparent to-transparent" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="p-4 rounded-full bg-white/20 backdrop-blur-md border border-white/30">
                                <Play className="w-6 h-6 text-white fill-white" />
                            </div>
                        </div>
                    </motion.div>
                ))}

                {/* Last two videos — in a side-by-side sub-grid */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.9 }}
                    className="relative rounded-[2.5rem] overflow-hidden border-[8px] border-white/10 shadow-2xl group"
                    style={{ aspectRatio: '16/10' }}
                >
                    <video
                        src={videos[2]}
                        muted
                        loop
                        playsInline
                        autoPlay
                        className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-maroon/70 via-transparent to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="p-4 rounded-full bg-white/20 backdrop-blur-md border border-white/30">
                            <Play className="w-6 h-6 text-white fill-white" />
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.45, duration: 0.9 }}
                    className="relative rounded-[2.5rem] overflow-hidden border-[8px] border-white/10 shadow-2xl group"
                    style={{ aspectRatio: '16/10' }}
                >
                    <video
                        src={videos[3]}
                        muted
                        loop
                        playsInline
                        autoPlay
                        className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-maroon/70 via-transparent to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="p-4 rounded-full bg-white/20 backdrop-blur-md border border-white/30">
                            <Play className="w-6 h-6 text-white fill-white" />
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Badge */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="mt-16 flex items-center gap-4 justify-center"
            >
                <div className="h-px w-24 bg-gradient-to-r from-transparent to-gold/40" />
                <Sparkles className="w-4 h-4 text-gold" />
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-gold">Har Har Mahadev</span>
                <Sparkles className="w-4 h-4 text-gold" />
                <div className="h-px w-24 bg-gradient-to-l from-transparent to-gold/40" />
            </motion.div>
        </Section>
    );
}
