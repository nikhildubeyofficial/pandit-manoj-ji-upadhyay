"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Crown, Sparkles, Play } from 'lucide-react';
import { Section } from './ui/Section';

const cmMedia = {
    image: '/images/mantriji abhishek/WhatsApp Image 2026-04-10 at 8.39.27 AM.jpeg',
    videos: [
        '/images/mantriji abhishek/WhatsApp Video 2026-04-10 at 8.39.49 AM.mp4',
        '/images/mantriji abhishek/WhatsApp Video 2026-04-10 at 8.39.57 AM.mp4',
    ]
};

export function CMSection() {
    const t = useTranslations('SpecialSections.cm');

    return (
        <Section id="cm-pujan" className="bg-white">
            {/* Section Header */}
            <div className="text-center mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 text-maroon text-[10px] uppercase font-bold tracking-[0.3em] mb-6"
                >
                    <Crown className="w-3.5 h-3.5 text-gold" />
                    <span>ॐ Special Occasion ॐ</span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl font-serif font-bold text-maroon mb-6 leading-tight"
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

            {/* Media Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="lg:col-span-7 relative rounded-[2.5rem] overflow-hidden border-[10px] border-white shadow-2xl group"
                    style={{ aspectRatio: '4/3' }}
                >
                    <Image
                        src={cmMedia.image}
                        alt="Chief Minister Pujan by Pandit Ji"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-maroon/60 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 text-white">
                        <div className="flex items-center gap-2 mb-2">
                            <Crown className="w-4 h-4 text-gold" />
                            <span className="text-[10px] uppercase tracking-widest font-bold text-gold">Divine Ceremony</span>
                        </div>
                        <p className="text-lg font-serif font-bold">{t('title')}</p>
                    </div>
                </motion.div>

                {/* Video Stack */}
                <div className="lg:col-span-5 flex flex-col gap-6">
                    {cmMedia.videos.map((video, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.15 * (index + 1), duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                            className="relative rounded-[2rem] overflow-hidden border-[8px] border-white shadow-xl group"
                            style={{ aspectRatio: '16/9' }}
                        >
                            <video
                                src={video}
                                muted
                                loop
                                playsInline
                                autoPlay
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-maroon/20 group-hover:bg-maroon/10 transition-colors duration-500 flex items-center justify-center">
                                <div className="p-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                                    <Play className="w-5 h-5 text-white fill-white" />
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* Caption Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="p-6 rounded-[1.5rem] bg-cream border border-gold/20 shadow-sm"
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-xl bg-gradient-to-br from-saffron to-maroon shadow-lg flex-shrink-0">
                                <Sparkles className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <p className="text-[10px] uppercase tracking-widest font-bold text-gold mb-1">Divine Honor</p>
                                <p className="text-sm text-dark/70 font-sans leading-relaxed">
                                    {t('subtitle')}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
}
