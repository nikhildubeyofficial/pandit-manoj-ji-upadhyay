"use client";

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Send, Calendar, User, Phone } from 'lucide-react';

export function BookingForm() {
    const t = useTranslations('Index'); // Fallback to index or create 'Booking' specific translations later
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus('loading');

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('/api/send-booking', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus('success');
                (e.target as HTMLFormElement).reset();
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    }

    return (
        <section id="contact" className="py-24 bg-white dark:bg-temple-shadow">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="glassmorphism rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-saffron via-gold to-vermillion" />

                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-charcoal dark:text-gold mb-4">Book a Darshan or Puja</h2>
                        <p className="text-gray-600 dark:text-gray-300">Submit your inquiry and Pandit ji will get back to you with auspicious muhurats.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    required
                                    name="name"
                                    type="text"
                                    placeholder="Full Name"
                                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-black/20 focus:outline-none focus:ring-2 focus:ring-saffron dark:focus:ring-gold transition-all"
                                />
                            </div>
                            <div className="relative">
                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    required
                                    name="phone"
                                    type="tel"
                                    placeholder="WhatsApp Number"
                                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-black/20 focus:outline-none focus:ring-2 focus:ring-saffron dark:focus:ring-gold transition-all"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="relative">
                                <select
                                    required
                                    id="pujaType"
                                    name="pujaType"
                                    className="w-full px-4 py-4 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-black/20 focus:outline-none focus:ring-2 focus:ring-saffron dark:focus:ring-gold transition-all appearance-none"
                                    defaultValue=""
                                >
                                    <option value="" disabled>Select Puja Type</option>
                                    <option value="kaalSarp">Kaal Sarp Dosh Nivaran</option>
                                    <option value="mangalBhat">Mangal Bhat Puja</option>
                                    <option value="rudrabhishek">Maha Rudrabhishek</option>
                                    <option value="general">General Consultation</option>
                                </select>
                            </div>
                            <div className="relative">
                                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                                <input
                                    required
                                    name="date"
                                    type="date"
                                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-black/20 focus:outline-none focus:ring-2 focus:ring-saffron dark:focus:ring-gold transition-all"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="w-full bg-saffron hover:bg-gold text-white dark:text-black font-bold text-lg py-4 rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                        >
                            {status === 'loading' ? 'Sending Request...' : (
                                <>
                                    <span>Send Inquiry</span>
                                    <Send className="w-5 h-5" />
                                </>
                            )}
                        </button>

                        {status === 'success' && (
                            <div className="p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-xl text-center font-medium">
                                Your inquiry has been sent successfully. Sri Mahakaleshwar's blessings be with you!
                            </div>
                        )}

                        {status === 'error' && (
                            <div className="p-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-xl text-center font-medium">
                                Something went wrong. Please try contacting directly via phone or WhatsApp.
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}
