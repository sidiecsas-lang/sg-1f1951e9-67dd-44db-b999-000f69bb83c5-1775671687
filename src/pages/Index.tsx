import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import ServicesGrid from "@/components/ServicesGrid";
import ImmersionSection from "@/components/ImmersionSection";
import SpacesSection from "@/components/SpacesSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProjectsCarousel />
      <ServicesGrid />
      <ImmersionSection />
      <SpacesSection />
      <AboutSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
