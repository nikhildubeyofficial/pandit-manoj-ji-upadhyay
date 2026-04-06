"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Clock, Info } from 'lucide-react';

const pujas = [
    { id: 1, key: 'kaalSarp', duration: '3-4 Hours' },
    { id: 2, key: 'mangalBhat', duration: '2 Hours' },
    { id: 3, key: 'rudrabhishek', duration: '2-3 Hours' },
];

export function PujaCatalog() {
    const t = useTranslations('Pujas');

    return (
        <section id="pujas" className="py-24 bg-rice-white dark:bg-black/50 overflow-hidden relative">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-vermillion dark:text-gold mb-4">{t('title')}</h2>
                    <p className="text-charcoal/80 dark:text-gray-300 max-w-2xl mx-auto">{t('subtitle')}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {pujas.map((puja, index) => (
                        <motion.div
                            key={puja.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-white dark:bg-temple-shadow rounded-3xl p-8 border border-saffron/10 dark:border-white/5 shadow-xl hover:shadow-2xl transition-all duration-300 group"
                        >
                            <div className="w-16 h-16 rounded-full bg-saffron/10 dark:bg-gold/10 flex items-center justify-center mb-6 text-saffron dark:text-gold group-hover:scale-110 transition-transform">
                                <span className="text-2xl font-serif mb-1">ॐ</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-charcoal dark:text-white">{t(`list.${puja.key}.name`)}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 min-h-[60px]">
                                {t(`list.${puja.key}.desc`)}
                            </p>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-start gap-3 text-sm">
                                    <Clock className="w-5 h-5 text-saffron flex-shrink-0" />
                                    <span className="dark:text-gray-300"><strong>Duration:</strong> {puja.duration}</span>
                                </div>
                                <div className="flex items-start gap-3 text-sm">
                                    <Info className="w-5 h-5 text-saffron flex-shrink-0" />
                                    <span className="dark:text-gray-300"><strong>Significance:</strong> {t(`list.${puja.key}.significance`)}</span>
                                </div>
                            </div>

                            <a
                                href="#contact"
                                className="block w-full text-center py-3 bg-white border-2 border-saffron dark:border-gold text-saffron dark:text-gold dark:bg-transparent rounded-xl font-bold hover:bg-saffron hover:text-white dark:hover:bg-gold dark:hover:text-black transition-colors"
                                onClick={(e) => {
                                    const selectElement = document.getElementById('pujaType') as HTMLSelectElement;
                                    if (selectElement) selectElement.value = puja.key;
                                }}
                            >
                                {t('bookBtn')}
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
