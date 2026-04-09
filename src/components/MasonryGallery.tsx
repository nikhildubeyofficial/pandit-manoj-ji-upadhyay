"use client";

import { useTranslations } from 'next-intl';
import Masonry from 'react-masonry-css';
import { motion } from 'framer-motion';
import { Eye, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { Section } from './ui/Section';

const items = [
    { id: 1, height: 350, image: '/images/WhatsApp Image 2026-04-09 at 10.31.20 PM.jpeg' },
    { id: 2, height: 450, image: '/images/WhatsApp Image 2026-04-09 at 10.31.41 PM.jpeg' },
    { id: 3, height: 300, image: '/images/WhatsApp Image 2026-04-09 at 10.31.54 PM.jpeg' },
    { id: 4, height: 400, image: '/images/WhatsApp Image 2026-04-09 at 10.32.14 PM.jpeg' },
    { id: 5, height: 350, image: '/images/WhatsApp Image 2026-04-09 at 10.32.22 PM.jpeg' },
    { id: 6, height: 450, image: '/images/WhatsApp Image 2026-04-09 at 10.32.35 PM.jpeg' },
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
        <Section id="gallery" className="bg-cream">
            <div className="text-center mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-saffron/10 text-maroon text-[10px] uppercase font-bold tracking-[0.3em] mb-6"
                >
                    <Sparkles className="w-3.5 h-3.5 text-saffron" />
                    <span>ॐ Divine Glimpses ॐ</span>
                </motion.div>
                
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-maroon mb-6">
                    {t('title')}
                </h2>
                
                <p className="text-lg text-dark/60 font-sans font-light max-w-2xl mx-auto italic">
                    {t('subtitle')}
                </p>
            </div>

            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="flex w-auto -ml-8"
                columnClassName="pl-8 bg-clip-padding"
            >
                {items.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.8 }}
                        className="mb-8 rounded-[3rem] overflow-hidden relative group cursor-pointer border-[10px] border-white shadow-2xl hover:shadow-maroon/10 transition-all duration-500"
                        style={{ height: item.height }}
                    >
                        <Image
                            src={item.image}
                            alt="Sacred ceremony visuals"
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                        />
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-maroon/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm">
                            <motion.div 
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                className="p-5 rounded-full bg-cream text-maroon shadow-2xl"
                            >
                                <Eye className="w-6 h-6" />
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </Masonry>
        </Section>
    );
}

