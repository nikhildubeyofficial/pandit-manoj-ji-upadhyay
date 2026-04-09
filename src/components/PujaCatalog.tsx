"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, Heart, Moon, Sun } from 'lucide-react';
import { Section } from './ui/Section';

const pujaKeys = [
    { key: 'navgrah', icon: <Sparkles className="w-6 h-6" /> },
    { key: 'rudrabhishek', icon: <Moon className="w-6 h-6" /> },
    { key: 'mahamrityunjay', icon: <ShieldCheck className="w-6 h-6" /> },
    { key: 'grihapravesh', icon: <Sun className="w-6 h-6" /> },
    { key: 'marriage', icon: <Heart className="w-6 h-6" /> },
    { key: 'custom', icon: <Sparkles className="w-6 h-6" /> },
];

export function PujaCatalog() {
    const t = useTranslations('Services');

    return (
        <Section id="services" className="bg-white">
            <div className="text-center mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 text-maroon text-[10px] uppercase font-bold tracking-[0.3em] mb-6"
                >
                    <Sparkles className="w-3.5 h-3.5 text-saffron" />
                    <span>ॐ Divine Rituals ॐ</span>
                </motion.div>
                
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-maroon mb-8">
                    {t('title')}
                </h2>
                
                <p className="text-lg text-dark/60 font-sans font-light max-w-2xl mx-auto italic">
                    {t('subtitle')}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                {pujaKeys.map((puja, index) => (
                    <motion.div
                        key={puja.key}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.8 }}
                        className="group relative p-10 rounded-[2.5rem] bg-cream/30 border border-gold/10 hover:bg-white hover:shadow-2xl hover:shadow-maroon/5 hover:-translate-y-3 transition-all duration-500 overflow-hidden"
                    >
                        {/* Decorative Gradient Blob */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-maroon/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-maroon/10 transition-colors" />

                        <div className="relative z-10">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-saffron to-maroon p-5 text-white shadow-xl mb-10 group-hover:rotate-6 transition-transform duration-500">
                                {puja.icon}
                            </div>
                            
                            <h3 className="text-2xl font-serif font-bold text-maroon mb-6 leading-tight group-hover:text-saffron transition-colors">
                                {t(`list.${puja.key}.name`)}
                            </h3>
                            
                            <p className="text-dark/60 leading-relaxed mb-10 text-sm font-sans font-light h-20 overflow-hidden line-clamp-4">
                                {t(`list.${puja.key}.description`)}
                            </p>

                            <div className="pt-8 border-t border-gold/10 flex items-center justify-between">
                                <div className="flex flex-col">
                                    <span className="text-[10px] uppercase tracking-widest text-gold font-bold mb-1">Key Benefit</span>
                                    <span className="text-xs font-bold text-dark/80">{t(`list.${puja.key}.benefits`)}</span>
                                </div>
                                <a
                                    href="#contact"
                                    className="w-12 h-12 rounded-full bg-white border border-gold/20 flex items-center justify-center text-maroon shadow-sm group-hover:bg-maroon group-hover:text-white group-hover:shadow-xl transition-all"
                                >
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}


