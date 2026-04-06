"use client";

import { useTranslations } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/routing';
import { useTheme } from 'next-themes';
import { Moon, Sun, Home, Flower2, Phone, Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

export function Navbar() {
    const t = useTranslations('Navigation');
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const params = useParams();
    const locale = params.locale as string;
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => setMounted(true), []);

    const toggleLanguage = () => {
        const nextLocale = locale === 'en' ? 'hi' : 'en';
        router.replace(pathname, { locale: nextLocale });
    };

    return (
        <>
            {/* Desktop Top Navbar */}
            <nav className="fixed top-0 w-full z-50 glassmorphism shadow-md dark:shadow-none hidden md:block">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <Link href="/" className="text-2xl font-bold text-saffron dark:text-gold flex items-center gap-2">
                        <Flower2 className="w-8 h-8" />
                        <span>Pt. Manoj ji Upadhyay</span>
                    </Link>

                    <div className="flex items-center gap-8 text-lg font-medium">
                        <Link href="/" className="hover:text-vermillion transition-colors">{t('home')}</Link>
                        <Link href="#pujas" className="hover:text-vermillion transition-colors">{t('pujas')}</Link>
                        <Link href="#portfolio" className="hover:text-vermillion transition-colors">{t('portfolio')}</Link>
                        <Link href="#contact" className="hover:text-vermillion transition-colors">{t('contact')}</Link>
                    </div>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={toggleLanguage}
                            className="px-3 py-1 bg-saffron text-white rounded-full hover:bg-saffron-dark transition-colors font-bold"
                        >
                            {locale === 'en' ? 'हिन्दी' : 'English'}
                        </button>
                        <button
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                            aria-label="Toggle Dark Mode"
                        >
                            {mounted && (theme === 'dark' ? <Sun className="w-6 h-6 text-gold" /> : <Moon className="w-6 h-6 text-charcoal" />)}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Top Navbar (Logo + Toggles only) */}
            <nav className="fixed top-0 w-full z-50 glassmorphism p-4 flex justify-between items-center md:hidden shadow-sm">
                <Link href="/" className="text-xl font-bold text-saffron dark:text-gold flex items-center gap-2">
                    <Flower2 className="w-6 h-6" />
                    <span>Pt. Manoj ji</span>
                </Link>
                <div className="flex items-center gap-3">
                    <button
                        onClick={toggleLanguage}
                        className="px-2 py-1 text-sm bg-saffron text-white rounded-md font-bold"
                    >
                        {locale === 'en' ? 'HI' : 'EN'}
                    </button>
                    <button
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="p-1 rounded-full"
                    >
                        {mounted && (theme === 'dark' ? <Sun className="w-5 h-5 text-gold" /> : <Moon className="w-5 h-5 text-charcoal" />)}
                    </button>
                </div>
            </nav>

            {/* Mobile Bottom Navigation */}
            <nav className="fixed bottom-0 w-full z-50 glassmorphism border-t border-white/20 pb-safe md:hidden">
                <div className="flex justify-around items-center p-3">
                    <Link href="/" className="flex flex-col items-center text-charcoal dark:text-gray-300 hover:text-saffron dark:hover:text-gold">
                        <Home className="w-6 h-6" />
                        <span className="text-xs mt-1">{t('home')}</span>
                    </Link>
                    <Link href="#pujas" className="flex flex-col items-center text-charcoal dark:text-gray-300 hover:text-saffron dark:hover:text-gold">
                        <Flower2 className="w-6 h-6" />
                        <span className="text-xs mt-1">{t('pujas')}</span>
                    </Link>
                    <Link href="#contact" className="flex flex-col items-center text-charcoal dark:text-gray-300 hover:text-saffron dark:hover:text-gold">
                        <Phone className="w-6 h-6" />
                        <span className="text-xs mt-1">{t('contact')}</span>
                    </Link>
                </div>
            </nav>
        </>
    );
}
