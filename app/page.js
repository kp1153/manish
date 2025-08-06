import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import PackagesSection from "../components/PackagesSection";
import VenuesSection from "../components/VenuesSection";
import CaseStudiesSection from "../components/CaseStudiesSection";
import AboutSection from "../components/AboutSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <PackagesSection />
      <VenuesSection />
      <CaseStudiesSection />
      <AboutSection />
    </div>
  );
}
