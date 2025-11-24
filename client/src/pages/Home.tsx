import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ConsultationSection from "@/components/ConsultationSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <ConsultationSection />
        <AboutSection />
        <ContactSection />
      </main>
      <footer className="border-t py-8" style={{ backgroundColor: '#e0e0db' }}>
        <div className="max-w-7xl mx-auto px-6 text-center text-sm" style={{ color: '#253551', opacity: 0.8 }}>
          <p>&copy; {new Date().getFullYear()} GeoTutor. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
