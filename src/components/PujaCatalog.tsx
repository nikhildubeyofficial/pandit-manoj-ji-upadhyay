"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Sparkles, ArrowRight, ShieldCheck, Heart, Moon, Sun, Star, Flame } from 'lucide-react';
import { Section } from './ui/Section';

const pujaKeys = [
    { 
        key: 'navgrah', 
        icon: <Sparkles className="w-6 h-6" />,
        image: '/images/pujas/navgrah.png',
    },
    { 
        key: 'rudrabhishek', 
        icon: <Moon className="w-6 h-6" />,
        image: '/images/pujas/rudrabhishek.png',
    },
    { 
        key: 'mahamrityunjay', 
        icon: <ShieldCheck className="w-6 h-6" />,
        image: '/images/pujas/mahamrityunjay.png',
    },
    { 
        key: 'grihapravesh', 
        icon: <Sun className="w-6 h-6" />,
        image: '/images/pujas/grihapravesh.png',
    },
    { 
        key: 'marriage', 
        icon: <Heart className="w-6 h-6" />,
        image: '/images/pujas/marriage.png',
    },
    { 
        key: 'custom', 
        icon: <Sparkles className="w-6 h-6" />,
        image: '/images/pujas/rudrabhishek.png',
    },
    { 
        key: 'mangalbhat', 
        icon: <Star className="w-6 h-6" />,
        image: '/images/pujas/mangalbhat.png',
    },
    { 
        key: 'kalsarp', 
        icon: <Flame className="w-6 h-6" />,
        image: '/images/pujas/kalsarp.png',
    },
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {pujaKeys.map((puja, index) => (
                    <motion.div
                        key={puja.key}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.08, duration: 0.8 }}
                        className="group relative rounded-[2.5rem] bg-cream/30 border border-gold/10 hover:bg-white hover:shadow-2xl hover:shadow-maroon/5 hover:-translate-y-3 transition-all duration-500 overflow-hidden"
                    >
                        {/* Puja Image */}
                        <div className="relative w-full overflow-hidden rounded-t-[2.5rem]" style={{ aspectRatio: '16/10' }}>
                            <Image
                                src={puja.image}
                                alt={t(`list.${puja.key}.name`)}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-maroon/60 via-maroon/10 to-transparent" />
                            
                            {/* Floating Icon Badge */}
                            <div className="absolute top-5 right-5 w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-sm p-3 text-maroon shadow-lg group-hover:rotate-12 transition-transform duration-500">
                                {puja.icon}
                            </div>

                            {/* Puja Name on Image */}
                            <div className="absolute bottom-4 left-5 right-5">
                                <h3 className="text-xl font-serif font-bold text-white leading-tight drop-shadow-lg">
                                    {t(`list.${puja.key}.name`)}
                                </h3>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="p-8">
                            <p className="text-dark/60 leading-relaxed mb-8 text-sm font-sans font-light h-20 overflow-hidden line-clamp-4">
                                {t(`list.${puja.key}.description`)}
                            </p>

                            <div className="pt-6 border-t border-gold/10 flex items-center justify-between">
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
