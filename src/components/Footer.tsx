"use client";

import { Flower2, MapPin, Phone, Mail } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function Footer() {
    const t = useTranslations('Index'); // Assuming we add footer translations later, for now we can just hardcode or reuse

    return (
        <footer className="relative bg-rice-white dark:bg-temple-shadow border-t border-saffron/20 dark:border-gold/20 overflow-hidden pt-16 pb-24 md:pb-8">
            {/* Background SVG Mandala Pattern */}
            <div
                className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none"
                style={{
                    backgroundImage: "url('/assets/mandala.svg')",
                    backgroundSize: '400px',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'repeat'
                }}
            />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">

                    <div className="flex flex-col items-center md:items-start">
                        <div className="flex items-center gap-2 mb-4 text-saffron dark:text-gold">
                            <Flower2 className="w-8 h-8" />
                            <h2 className="text-2xl font-bold">Pt. Manoj ji Upadhyay</h2>
                        </div>
                        <p className="text-sm opacity-80 max-w-xs text-center md:text-left">
                            Guiding you through authentic Vedic rituals and spiritual journeys from the heart of Mahakal's city.
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-lg font-bold mb-4 text-vermillion dark:text-gold">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#home" className="hover:text-saffron transition-colors">Home</a></li>
                            <li><a href="#pujas" className="hover:text-saffron transition-colors">Yagyas & Pujas</a></li>
                            <li><a href="#portfolio" className="hover:text-saffron transition-colors">Spiritual Portfolio</a></li>
                            <li><a href="#contact" className="hover:text-saffron transition-colors">Book Now</a></li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-lg font-bold mb-4 text-vermillion dark:text-gold">Contact Darbar</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3">
                                <MapPin className="text-saffron w-5 h-5 flex-shrink-0" />
                                <span>Hatkeshwar Temple, Ujjain, MP, India</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-saffron w-5 h-5 flex-shrink-0" />
                                <a href="tel:+919999999999" className="hover:underline">+91 99999 99999</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-saffron w-5 h-5 flex-shrink-0" />
                                <a href="mailto:contact@manojupadhyay.com" className="hover:underline">contact@manojupadhyay.com</a>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="mt-12 pt-8 border-t border-charcoal/10 dark:border-white/10 text-center text-sm opacity-70">
                    <p>© {new Date().getFullYear()} Pt. Manoj ji Upadhyay. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
