"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Compass, Sparkles, ArrowRight } from 'lucide-react';
import { Section } from './ui/Section';

const vastuImages = [
    '/images/vastu/WhatsApp Image 2026-04-15 at 11.56.10 AM.jpeg',
    '/images/vastu/WhatsApp Image 2026-04-15 at 11.56.10 AM (1).jpeg',
    '/images/vastu/WhatsApp Image 2026-04-15 at 11.56.11 AM.jpeg',
    '/images/vastu/WhatsApp Image 2026-04-15 at 11.56.12 AM.jpeg',
    '/images/vastu/WhatsApp Image 2026-04-15 at 11.56.12 AM (1).jpeg',
];

const vastuBenefits = [
    { title: 'Home Harmony', desc: 'Align your living space with cosmic energies for peace and prosperity.' },
    { title: 'Business Growth', desc: 'Optimize your workplace layout to attract success and abundance.' },
    { title: 'Health & Wellness', desc: 'Remove negative energies and Vastu doshas for better health.' },
    { title: 'Relationship Peace', desc: 'Harmonize family relationships through spatial corrections.' },
];

export function VastuSection() {
    const t = useTranslations('SpecialSections.vastu');

    return (
        <Section id="vastu" className="bg-cream">
            {/* Section Header */}
            <div className="text-center mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-saffron/10 text-maroon text-[10px] uppercase font-bold tracking-[0.3em] mb-6"
                >
                    <Compass className="w-3.5 h-3.5 text-saffron" />
                    <span>ॐ Sacred Architecture ॐ</span>
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

            {/* Image Mosaic Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-20">
                {/* Large Hero Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9 }}
                    className="md:col-span-7 relative rounded-[2.5rem] overflow-hidden border-[10px] border-white shadow-2xl group"
                    style={{ aspectRatio: '4/3' }}
                >
                    <Image
                        src={vastuImages[0]}
                        alt="Vastu Shastra Consultation"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-maroon/60 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 text-white">
                        <div className="flex items-center gap-2 mb-2">
                            <Compass className="w-4 h-4 text-gold" />
                            <span className="text-[10px] uppercase tracking-widest font-bold text-gold">Vastu Expertise</span>
                        </div>
                        <p className="text-lg font-serif font-bold">Sacred Space Alignment</p>
                    </div>
                </motion.div>

                {/* Stacked Images */}
                <div className="md:col-span-5 flex flex-col gap-6">
                    {vastuImages.slice(1, 3).map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.15 * (index + 1), duration: 0.9 }}
                            className="relative rounded-[2rem] overflow-hidden border-[8px] border-white shadow-xl group"
                            style={{ aspectRatio: '16/9' }}
                        >
                            <Image
                                src={img}
                                alt={`Vastu ceremony ${index + 1}`}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-maroon/10 group-hover:bg-maroon/5 transition-colors duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Bottom Row Images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-20">
                {vastuImages.slice(3).map((img, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * index, duration: 0.8 }}
                        className="relative rounded-[2rem] overflow-hidden border-[8px] border-white shadow-xl group"
                        style={{ aspectRatio: '16/10' }}
                    >
                        <Image
                            src={img}
                            alt={`Vastu consultation ${index + 3}`}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-maroon/40 via-transparent to-transparent" />
                    </motion.div>
                ))}
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {vastuBenefits.map((benefit, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        className="group p-8 rounded-[2rem] bg-white border border-gold/10 hover:shadow-2xl hover:shadow-maroon/5 hover:-translate-y-2 transition-all duration-500"
                    >
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-saffron to-maroon p-3 text-white shadow-lg mb-6 group-hover:rotate-6 transition-transform">
                            <Compass className="w-6 h-6" />
                        </div>
                        <h4 className="text-lg font-serif font-bold text-maroon mb-3 group-hover:text-saffron transition-colors">{benefit.title}</h4>
                        <p className="text-sm text-dark/60 font-sans font-light leading-relaxed">{benefit.desc}</p>
                    </motion.div>
                ))}
            </div>

            {/* CTA */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-16 text-center"
            >
                <a
                    href="#contact"
                    className="inline-flex items-center gap-3 btn-primary px-10 py-5 text-sm uppercase tracking-[0.2em] font-bold shadow-xl shadow-maroon/20"
                >
                    <span>Book Vastu Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                </a>
            </motion.div>
        </Section>
    );
}
