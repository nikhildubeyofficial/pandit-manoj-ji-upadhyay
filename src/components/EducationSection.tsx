"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { GraduationCap, Sparkles, BookOpen, ArrowRight } from 'lucide-react';
import { Section } from './ui/Section';

const educationImages = [
    '/images/education/WhatsApp Image 2026-04-15 at 11.43.33 AM.jpeg',
];

export function EducationSection() {
    const t = useTranslations('SpecialSections.education');

    return (
        <Section id="education" className="bg-gradient-to-b from-white to-cream">
            {/* Section Header */}
            <div className="text-center mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 text-maroon text-[10px] uppercase font-bold tracking-[0.3em] mb-6"
                >
                    <GraduationCap className="w-3.5 h-3.5 text-gold" />
                    <span>ॐ Vidya & Wisdom ॐ</span>
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

            {/* Content Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Images Side */}
                <div className="lg:col-span-6">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.02 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        className="relative rounded-[2.5rem] overflow-hidden border-[10px] border-white shadow-2xl group cursor-pointer mx-auto max-w-md bg-white"
                    >
                        <img
                            src={educationImages[0]}
                            alt="Guruji's Educational Background"
                            className="w-full h-auto block object-contain group-hover:scale-105 transition-transform duration-700 relative z-10"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-maroon/50 via-transparent to-transparent z-20 pointer-events-none" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-maroon/20 via-transparent to-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none" />
                        <div className="absolute inset-0 rounded-[calc(2.5rem-10px)] ring-0 group-hover:ring-2 ring-gold/40 transition-all duration-500 z-20 pointer-events-none" />
                    </motion.div>
                </div>

                {/* Info Side */}
                <div className="lg:col-span-6 flex flex-col gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="p-8 rounded-[2.5rem] bg-white border border-gold/15 shadow-lg"
                    >
                        <div className="flex items-start gap-4 mb-6">
                            <div className="p-3 rounded-xl bg-gradient-to-br from-saffron to-maroon shadow-lg flex-shrink-0">
                                <BookOpen className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <p className="text-[10px] uppercase tracking-widest font-bold text-gold mb-1">Academic Credentials</p>
                                <h3 className="text-xl font-serif font-bold text-maroon">Vedic Scholar & Acharya</h3>
                            </div>
                        </div>
                        <p className="text-sm text-dark/70 font-sans leading-relaxed mb-6">
                            Pandit Manoj Upadhyay Ji holds deep-rooted knowledge in Vedic scriptures and Sanskrit literature. 
                            His educational journey is dedicated to the preservation of ancient spiritual traditions and 
                            the precise execution of Vedic rituals as per the authentic lineages of Ujjain.
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                'Deep Study of Vedas', 
                                'Sanskrit Sahitya Expertise', 
                                'Vedic Ritual Certification', 
                                'Traditional Gurukul Training',
                                'Expert in Karma Kanda',
                                'Mastery in Astrology'
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-maroon font-medium">
                                    <Sparkles className="w-3.5 h-3.5 text-saffron flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="flex justify-center lg:justify-start"
                    >
                        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-maroon/5 border border-maroon/10 text-maroon text-xs font-bold uppercase tracking-widest">
                            <GraduationCap className="w-4 h-4 text-gold" />
                            <span>Preserving Vedic Heritage</span>
                        </div>
                    </motion.div>
                </div>
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
                <GraduationCap className="w-4 h-4 text-gold" />
                <div className="h-px w-24 bg-gradient-to-l from-transparent to-gold/40" />
            </motion.div>
        </Section>
    );
}
