import { Hero } from '@/components/Hero';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { MasonryGallery } from '@/components/MasonryGallery';
import { PujaCatalog } from '@/components/PujaCatalog';
import { BookingForm } from '@/components/BookingForm';

export default function HomePage() {
    return (
        <>
            <Navbar />
            <Hero />
            <main className="min-h-screen">
                <PujaCatalog />
                <MasonryGallery />
                <BookingForm />
            </main>
            <Footer />
        </>
    );
}
