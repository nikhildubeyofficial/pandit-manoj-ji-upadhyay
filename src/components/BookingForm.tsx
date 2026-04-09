"use client";

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Send, User, Phone, MessageSquare, MapPin, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from './ui/Section';

export function BookingForm() {
    const t = useTranslations('Contact');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus('loading');

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries()) as {
            name?: string;
            phone?: string;
            message?: string;
        };

        try {
            const whatsappMessage = `Namaste Pandit Ji,%0A%0AName: ${encodeURIComponent(data.name ?? '')}%0APhone: ${encodeURIComponent(data.phone ?? '')}%0AMessage: ${encodeURIComponent(data.message ?? '')}`;
            const whatsappUrl = `https://wa.me/917773084685?text=${whatsappMessage}`;

            window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
            setStatus('success');
            (e.target as HTMLFormElement).reset();
            setTimeout(() => setStatus('idle'), 3000);
        } catch {
            setStatus('error');
        }
    }

    return (
        <Section id="contact" className="bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                
                {/* Information Sidebar */}
                <div className="lg:col-span-5 flex flex-col gap-12 text-center lg:text-left">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-saffron/10 text-maroon text-[10px] uppercase font-bold tracking-[0.3em] mb-6"
                        >
                            <Sparkles className="w-3.5 h-3.5 text-saffron" />
                            <span>ॐ Connect With Us ॐ</span>
                        </motion.div>
                        
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-maroon mb-6 leading-tight">
                            {t('title')}
                        </h2>
                        
                        <p className="text-lg text-dark/60 font-sans font-light max-w-xl lg:mx-0 mx-auto">
                            {t('subtitle')}
                        </p>
                    </div>

                    <div className="space-y-6 max-w-md lg:mx-0 mx-auto w-full">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="flex items-center gap-6 p-6 rounded-[2rem] bg-cream/40 border border-gold/10 group transition-all"
                        >
                            <div className="p-4 rounded-2xl bg-gradient-to-br from-maroon to-maroon/80 text-cream shadow-lg group-hover:rotate-6 transition-transform">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div className="text-left">
                                <h4 className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold mb-1">Direct Call</h4>
                                <p className="text-xl font-serif font-bold text-maroon tracking-tight">+91 7773084685</p>
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="flex items-center gap-6 p-6 rounded-[2rem] bg-cream/40 border border-gold/10 group transition-all"
                        >
                            <div className="p-4 rounded-2xl bg-gradient-to-br from-saffron to-saffron/80 text-white shadow-lg group-hover:-rotate-6 transition-transform">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div className="text-left">
                                <h4 className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold mb-1">Ritual Place</h4>
                                <p className="text-lg font-serif font-bold text-maroon tracking-tight">Ujjain, Madhya Pradesh</p>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Secure Form Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="lg:col-span-7 bg-cream/30 rounded-[3.5rem] p-8 md:p-16 border border-gold/10 relative overflow-hidden"
                >
                    {/* Background Soft Glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-saffron/5 rounded-full blur-[100px] -mr-32 -mt-32" />

                    <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex flex-col gap-3">
                                <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-maroon/50 ml-3">{t('form.name')}</label>
                                <div className="relative group">
                                    <User className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-maroon/20 group-focus-within:text-saffron transition-colors" />
                                    <input
                                        required
                                        name="name"
                                        type="text"
                                        placeholder="Enter your name"
                                        className="w-full pl-16 pr-8 py-5 rounded-3xl border border-gold/20 bg-white/70 backdrop-blur-sm focus:outline-none focus:ring-4 focus:ring-saffron/10 focus:border-saffron/30 transition-all font-medium text-maroon"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-maroon/50 ml-3">{t('form.phone')}</label>
                                <div className="relative group">
                                    <Phone className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-maroon/20 group-focus-within:text-saffron transition-colors" />
                                    <input
                                        required
                                        name="phone"
                                        type="tel"
                                        placeholder="+91..."
                                        className="w-full pl-16 pr-8 py-5 rounded-3xl border border-gold/20 bg-white/70 backdrop-blur-sm focus:outline-none focus:ring-4 focus:ring-saffron/10 focus:border-saffron/30 transition-all font-medium text-maroon"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3">
                            <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-maroon/50 ml-3">{t('form.message')}</label>
                            <div className="relative group">
                                <MessageSquare className="absolute left-6 top-6 w-5 h-5 text-maroon/20 group-focus-within:text-saffron transition-colors" />
                                <textarea
                                    required
                                    name="message"
                                    rows={5}
                                    placeholder="Briefly describe your ritual needs..."
                                    className="w-full pl-16 pr-8 py-6 rounded-3xl border border-gold/20 bg-white/70 backdrop-blur-sm focus:outline-none focus:ring-4 focus:ring-saffron/10 focus:border-saffron/30 transition-all font-medium text-maroon resize-none"
                                />
                            </div>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            disabled={status === 'loading'}
                            className="w-full group relative overflow-hidden bg-maroon text-cream rounded-[2rem] py-6 shadow-2xl shadow-maroon/20 font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-4 transition-all"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            
                            {status === 'loading' ? (
                                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <>
                                    <span>{t('form.submit')}</span>
                                    <Send className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </>
                            )}
                        </motion.button>

                        <AnimatePresence>
                            {status === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="p-5 rounded-2xl bg-green-500/10 border border-green-500/20 text-green-700 text-sm font-bold text-center"
                                >
                                    Thank you! Redirecting to WhatsApp for confirmation...
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </form>
                </motion.div>
            </div>
        </Section>
    );
}

