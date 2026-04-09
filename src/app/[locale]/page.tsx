import { Hero } from '@/components/Hero';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AboutSection } from '@/components/AboutSection';
import { MasonryGallery } from '@/components/MasonryGallery';
import { PujaCatalog } from '@/components/PujaCatalog';
import { BookingForm } from '@/components/BookingForm';

export default function HomePage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen">
                <Hero />
                <AboutSection />
                <PujaCatalog />
                <MasonryGallery />
                <BookingForm />
            </main>
            <Footer />
        </>
    );
}
