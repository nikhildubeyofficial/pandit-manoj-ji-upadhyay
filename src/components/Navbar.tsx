"use client";

import { useTranslations } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/routing';
import { Flower2, Phone, Menu, Globe, X, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
    const t = useTranslations('Navigation');
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
    const params = useParams();
    const locale = params.locale as string;
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleLanguage = () => {
        const nextLocale = locale === 'en' ? 'hi' : 'en';
        router.replace(pathname, { locale: nextLocale });
    };

    const navLinks = [
        { name: t('home'), href: '/' },
        { name: t('about'), href: '#about' },
        { name: t('services'), href: '#services' },
        { name: t('contact'), href: '#contact' },
    ];

    const isActive = (href: string) => {
        if (href === '/') return pathname === '/';
        return pathname.includes(href);
    };

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
                    scrolled 
                    ? 'py-3 bg-cream/90 backdrop-blur-xl border-gold/20 shadow-lg' 
                    : 'py-6 bg-transparent border-transparent'
                }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    {/* Brand Logo */}
                    <Link href="/" className="group flex items-center gap-3 active:scale-95 transition-transform">
                        <div className="relative">
                            <div className="p-2.5 bg-gradient-to-br from-saffron to-maroon rounded-xl shadow-lg group-hover:rotate-12 transition-transform duration-500">
                                <Flower2 className="w-6 h-6 text-cream" />
                            </div>
                            <Sparkles className="absolute -top-2 -right-2 w-4 h-4 text-gold animate-pulse" />
                        </div>
                        <div className="flex flex-col">
                            <span className={`text-xl font-serif font-bold tracking-tight transition-colors duration-500 ${scrolled ? 'text-maroon' : 'text-white'}`}>
                                Pt. Manoj Upadhyay
                            </span>
                            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold shrink-0">
                                Vedic Priest · Ujjain
                            </span>
                        </div>
                    </Link>

                    {/* Navigation - Desktop */}
                    <nav className="hidden lg:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <Link 
                                key={link.name} 
                                href={link.href} 
                                className={`text-sm font-bold uppercase tracking-widest transition-all duration-300 relative group flex items-center gap-1.5 ${
                                    scrolled ? 'text-dark/70 hover:text-maroon' : 'text-cream/80 hover:text-white'
                                }`}
                            >
                                <span className={isActive(link.href) ? 'text-saffron' : ''}>{link.name}</span>
                                <span className={`absolute -bottom-1.5 left-0 h-0.5 bg-saffron transition-all duration-500 ${
                                    isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
                                }`} />
                            </Link>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-5">
                        <button
                            onClick={toggleLanguage}
                            className={`hidden sm:flex items-center gap-2 px-4 py-2 rounded-full border transition-all active:scale-95 ${
                                scrolled 
                                ? 'border-maroon/20 text-maroon hover:bg-maroon hover:text-cream' 
                                : 'border-white/20 text-white hover:bg-white hover:text-maroon'
                            }`}
                        >
                            <Globe className="w-4 h-4" />
                            <span className="text-[10px] font-bold uppercase tracking-widest leading-none mt-0.5">
                                {locale === 'en' ? 'हिन्दी' : 'English'}
                            </span>
                        </button>

                        <a 
                            href="#contact"
                            className="hidden md:flex items-center gap-2 btn-primary px-7 py-3 text-xs uppercase tracking-widest shadow-xl shadow-maroon/20"
                        >
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Book Puja</span>
                        </a>

                        {/* Mobile Toggle */}
                        <button
                            onClick={() => setMobileMenuOpen(true)}
                            className={`lg:hidden p-2.5 rounded-xl transition-colors ${
                                scrolled ? 'text-maroon bg-maroon/5' : 'text-white bg-white/10'
                            }`}
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Sidebar Navigation */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <div className="fixed inset-0 z-[100] lg:hidden">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMobileMenuOpen(false)}
                            className="absolute inset-0 bg-maroon/40 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="absolute right-0 top-0 h-full w-[300px] bg-cream shadow-2xl flex flex-col p-8"
                        >
                            <div className="flex justify-between items-center mb-16">
                                <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2">
                                    <Flower2 className="w-6 h-6 text-maroon" />
                                    <span className="font-serif font-bold text-maroon">Nav Vidhi</span>
                                </Link>
                                <button 
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="p-2 rounded-full bg-maroon/5 text-maroon hover:bg-maroon/10"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            <nav className="flex flex-col gap-8">
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <Link 
                                            href={link.href} 
                                            onClick={() => setMobileMenuOpen(false)}
                                            className={`text-2xl font-serif font-bold transition-all ${
                                                isActive(link.href) ? 'text-saffron italic' : 'text-maroon/60 hover:text-maroon'
                                            }`}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>

                            <div className="mt-auto pt-10 border-t border-gold/10 space-y-4">
                                <button
                                    onClick={() => { toggleLanguage(); setMobileMenuOpen(false); }}
                                    className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl bg-white border border-gold/20 font-bold text-maroon shadow-sm"
                                >
                                    <Globe className="w-5 h-5 text-saffron" />
                                    {locale === 'en' ? 'Switch to हिन्दी' : 'Switch to English'}
                                </button>
                                <a 
                                    href="#contact"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="w-full btn-primary flex items-center justify-center gap-3 py-4 text-sm uppercase tracking-widest font-bold"
                                >
                                    <Sparkles className="w-4 h-4" />
                                    Book Now
                                </a>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}


