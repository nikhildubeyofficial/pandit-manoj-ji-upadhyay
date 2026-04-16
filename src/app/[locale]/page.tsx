import { Hero } from '@/components/Hero';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AboutSection } from '@/components/AboutSection';
import { MasonryGallery } from '@/components/MasonryGallery';
import { PujaCatalog } from '@/components/PujaCatalog';
import { BookingForm } from '@/components/BookingForm';
import { PanditJiCards } from '@/components/PanditJiCards';
import { CMSection } from '@/components/CMSection';
import { MahaRudrabhishek } from '@/components/MahaRudrabhishek';
import { VastuSection } from '@/components/VastuSection';
import { EducationSection } from '@/components/EducationSection';

export default function HomePage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen">
                <Hero />
                <AboutSection />
                <PanditJiCards />
                <PujaCatalog />
                <CMSection />
                <MahaRudrabhishek />
                <VastuSection />
                <EducationSection />
                <MasonryGallery />
                <BookingForm />
            </main>
            <Footer />
        </>
    );
}
