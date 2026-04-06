"use client";

import { useTranslations } from 'next-intl';
import Masonry from 'react-masonry-css';
import { motion } from 'framer-motion';

const items = [
    { id: 1, title: 'Maha Rudrabhishek', height: 300, color: 'from-saffron/80 to-vermillion/80' },
    { id: 2, title: 'Kaal Sarp Dosh Nivaran', height: 400, color: 'from-blue-600/80 to-purple-800/80' },
    { id: 3, title: 'Navgraha Shanti Yagya', height: 250, color: 'from-green-600/80 to-teal-800/80' },
    { id: 4, title: 'Mangal Bhat Puja', height: 350, color: 'from-red-600/80 to-orange-800/80' },
    { id: 5, title: 'Bhagwat Katha', height: 300, color: 'from-yellow-500/80 to-amber-700/80' },
    { id: 6, title: 'Mahamrityunjay Jaap', height: 400, color: 'from-indigo-600/80 to-blue-900/80' },
];

const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1
};

export function MasonryGallery() {
    const t = useTranslations('Gallery');

    return (
        <section id="portfolio" className="py-24 bg-white dark:bg-temple-shadow">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-saffron mb-4">{t('title')}</h2>
                    <p className="text-charcoal/80 dark:text-gray-300 max-w-2xl mx-auto">{t('subtitle')}</p>
                </div>

                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="flex w-auto -ml-6"
                    columnClassName="pl-6 bg-clip-padding"
                >
                    {items.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="mb-6 rounded-2xl overflow-hidden relative group cursor-pointer"
                            style={{ height: item.height }}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} flex flex-col justify-end p-6 transition-transform duration-500 group-hover:scale-105`}>
                                <div className="glassmorphism p-4 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <h3 className="text-white font-bold text-lg">{item.title}</h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </Masonry>
            </div>
        </section>
    );
}
