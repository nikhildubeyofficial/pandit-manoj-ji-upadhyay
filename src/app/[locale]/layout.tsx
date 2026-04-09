import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import '../globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { FloatingCTA } from '@/components/FloatingCTA';

export const metadata = {
    title: 'Pandit Manoj Upadhyay | Vedic Priest in Ujjain | Navgrah Shanti & Puja',
    description: 'Experience divine peace through Vedic rituals performed by Pandit Manoj Upadhyay in Ujjain. Specializing in Navgrah Shanti, Rudrabhishek, and more.',
    keywords: 'Pandit in Ujjain, Manoj Upadhyay, Navgrah Shanti, Maharudrabhishek, Vedic Priest Ujjain',
};

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    if (!routing.locales.includes(locale as any)) {
        notFound();
    }

    const messages = await getMessages();

    return (
        <NextIntlClientProvider messages={messages}>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                {children}
                <FloatingCTA />
            </ThemeProvider>
        </NextIntlClientProvider>
    );
}
