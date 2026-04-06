import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import '../globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Tiro_Devanagari_Hindi } from 'next/font/google';

const tiro = Tiro_Devanagari_Hindi({
    subsets: ['devanagari', 'latin'],
    weight: ['400'],
    variable: '--font-tiro'
});

export const metadata = {
    title: 'Pt. Manoj ji Upadhyay | Spiritual Service Platform',
    description: 'Spiritual Service Platform in Hatkeshwar, Ujjain'
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
        <html lang={locale} suppressHydrationWarning>
            <body className={`${tiro.variable} font-serif antialiased bg-rice-white text-charcoal dark:bg-temple-shadow dark:text-gray-100 transition-colors duration-300`}>
                <NextIntlClientProvider messages={messages}>
                    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                        {children}
                    </ThemeProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
