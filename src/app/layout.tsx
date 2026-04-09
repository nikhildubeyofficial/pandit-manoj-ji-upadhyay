import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { FloatingCTA } from "@/components/FloatingCTA";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pandit Manoj Upadhyay | Vedic Priest in Ujjain",
  description: "Experience authentic Vedic rituals and spiritual services by Pt. Manoj Upadhyay in the holy city of Ujjain. Expert in Navgrah Puja, Rudrabhishek, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${playfair.variable} ${poppins.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
          <FloatingCTA />
        </ThemeProvider>
      </body>
    </html>
  );
}

