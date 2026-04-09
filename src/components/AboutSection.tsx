"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { MapPin, Award, BookOpen, Star, Sparkles, Heart } from 'lucide-react';
import Image from 'next/image';
import { Section } from './ui/Section';

export function AboutSection() {
    const t = useTranslations('About');

    const benefits = [
        { icon: <MapPin className="w-5 h-5" />, text: t('location'), label: "Sacred City" },
        { icon: <Award className="w-5 h-5" />, text: "Certified Scholar", label: "Verification" },
        { icon: <BookOpen className="w-5 h-5" />, text: "Vedic Rituals", label: "Expertise" },
        { icon: <Star className="w-5 h-5" />, text: "Highly Trusted", label: "Review" },
    ];

    return (
        <Section id="about" className="bg-cream">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                {/* Visual Side */}
                <div className="lg:col-span-5 relative">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white active:scale-95 transition-transform"
                    >
                        <Image
                            src="/images/WhatsApp Image 2026-04-09 at 10.31.14 PM.jpeg"
                            alt="Pt. Manoj Upadhyay"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-maroon/80 via-transparent to-transparent" />
                        
                        <div className="absolute bottom-8 left-8 right-8 text-white">
                            <h3 className="text-2xl font-serif font-bold mb-1">Pt. Manoj Upadhyay</h3>
                            <div className="flex items-center gap-2">
                                <Sparkles className="w-4 h-4 text-gold" />
                                <p className="text-gold text-[10px] uppercase tracking-widest font-bold">Vedic Spiritual Guide</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Floating Achievement Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="absolute -bottom-6 -right-6 lg:-right-12 bg-white p-6 rounded-3xl shadow-2xl border border-gold/10 hidden md:block"
                    >
                        <div className="flex flex-col items-center">
                            <span className="text-4xl font-serif font-bold text-maroon">20+</span>
                            <span className="text-[10px] uppercase tracking-tighter font-bold text-dark/40">Years of Wisdom</span>
                        </div>
                    </motion.div>
                </div>

                {/* Content Side */}
                <div className="lg:col-span-7 flex flex-col gap-10 text-center lg:text-left">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-saffron/10 text-maroon text-xs font-bold uppercase tracking-widest"
                        >
                            <Heart className="w-3.5 h-3.5 fill-saffron text-saffron" />
                            <span>{t('title')}</span>
                        </motion.div>
                        
                        <h2 className="text-4xl md:text-6xl font-serif font-bold text-maroon leading-[1.1] mb-8">
                            Experience Sacred <br />
                            <span className="text-saffron italic">Spiritual Awakening</span>
                        </h2>
                        
                        <p className="text-lg text-dark/60 leading-relaxed font-sans font-light max-w-xl lg:mx-0 mx-auto">
                            {t('content')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {benefits.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * i }}
                                className="group p-5 rounded-[2rem] bg-white border border-gold/10 shadow-sm hover:shadow-xl hover:border-gold/30 transition-all text-left flex items-center gap-4"
                            >
                                <div className="p-4 rounded-2xl bg-saffron/5 text-maroon group-hover:bg-saffron group-hover:text-white transition-colors">
                                    {item.icon}
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-gold mb-0.5">{item.label}</p>
                                    <p className="text-sm font-bold text-maroon">{item.text}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}


