"use client";

import { Flower2, MapPin, Phone, Mail, Instagram, Facebook, Youtube, Sparkles } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';

export function Footer() {
    const t = useTranslations('Footer');
    const nt = useTranslations('Navigation');
    const ct = useTranslations('About');

    const navLinks = [
        { name: nt('home'), href: '/' },
        { name: nt('about'), href: '#about' },
        { name: nt('services'), href: '#services' },
        { name: nt('contact'), href: '#contact' },
    ];

    return (
        <footer className="relative bg-[#0A0A0A] text-cream pt-32 pb-16 overflow-hidden border-t border-white/5">
            {/* Soft Ambient Glows */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-maroon/10 rounded-full blur-[120px] -ml-48 -mt-48" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-saffron/10 rounded-full blur-[120px] -mr-48 -mb-48" />
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-24 mb-24">
                    
                    {/* Brand Section */}
                    <div className="lg:col-span-4 flex flex-col gap-10">
                        <Link href="/" className="flex items-center gap-4 group">
                            <div className="p-3 bg-gradient-to-br from-saffron to-maroon rounded-2xl shadow-lg shadow-maroon/20 group-hover:rotate-12 transition-transform duration-500">
                                <Flower2 className="w-8 h-8 text-white" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-serif font-bold tracking-tight text-white italic">Pt. Manoj Upadhyay</span>
                                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-gold shrink-0">Vedic Rituals · Ujjain City</span>
                            </div>
                        </Link>
                        
                        <p className="text-sm font-sans font-light leading-loose text-cream/50 max-w-sm tracking-wide">
                            {t('tagline')} Dedicated to preserving the ancient Vedic traditions with purity, devotion, and supreme spiritual wisdom.
                        </p>
                        
                        <div className="flex gap-5">
                            {[Instagram, Facebook, Youtube].map((Icon, i) => (
                                <motion.a
                                    key={i}
                                    href="#"
                                    whileHover={{ y: -5, backgroundColor: 'rgba(255, 153, 51, 0.2)', color: '#FF9933' }}
                                    className="p-4 rounded-3xl bg-white/5 border border-white/10 transition-all duration-300"
                                >
                                    <Icon className="w-5 h-5" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Explore */}
                    <div className="lg:col-span-2 flex flex-col gap-10">
                        <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold">Explore Path</h3>
                        <ul className="flex flex-col gap-5">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm font-sans font-medium text-cream/50 hover:text-saffron transition-colors relative group w-fit">
                                        {link.name}
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-saffron transition-all group-hover:w-full" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & Sacred Space */}
                    <div className="lg:col-span-3 flex flex-col gap-10">
                        <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold">Divine Reach</h3>
                        <ul className="flex flex-col gap-8">
                            <li className="flex items-start gap-4 group">
                                <div className="p-3 rounded-2xl bg-white/5 border border-white/5 text-saffron group-hover:bg-saffron group-hover:text-white transition-colors">
                                    <MapPin className="w-5 h-5 shrink-0" />
                                </div>
                                <div className="text-left">
                                    <h4 className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Ritual Place</h4>
                                    <span className="text-sm text-cream/70 italic font-serif tracking-wide">{ct('location')}</span>
                                </div>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <div className="p-3 rounded-2xl bg-white/5 border border-white/5 text-saffron group-hover:bg-saffron group-hover:text-white transition-colors">
                                    <Phone className="w-5 h-5 shrink-0" />
                                </div>
                                <div className="text-left">
                                    <h4 className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Direct Line</h4>
                                    <a href="tel:+917773084685" className="text-base font-bold text-cream hover:text-saffron transition-colors tracking-tight">+91 7773084685</a>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Divine Mantra */}
                    <div className="lg:col-span-3 flex flex-col gap-10">
                        <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold">Divine Presence</h3>
                        <div className="relative group p-8 rounded-[2.5rem] bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 overflow-hidden text-center">
                            <Sparkles className="w-6 h-6 text-gold mb-6 mx-auto animate-pulse" />
                            <p className="text-xs text-cream/40 leading-[1.8] italic font-serif">
                                "Shubham Karoti Kalyanam, Arogyam Dhansampada. Shatru Buddhi Vinashaya, Deepa Jyoti Namostute."
                            </p>
                            <div className="mt-8 pt-6 border-t border-white/5">
                                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-saffron">May All Be Blessed</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-cream/20">
                        {t('copyright')}
                    </p>
                    
                    <div className="flex items-center gap-4 group">
                        <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-cream/20 group-hover:text-cream/40 transition-colors">
                            Designed & Developed with <span className="text-saffron group-hover:animate-pulse inline-block">❤</span> by
                        </span>
                        <a 
                            href="#"
                            className="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-gold uppercase tracking-[0.2em] hover:bg-gold hover:text-maroon hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-500"
                        >
                            Nikhil Dubey
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

