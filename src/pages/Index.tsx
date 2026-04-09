import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturedCleaners from "@/components/FeaturedCleaners";
import PricingCalculator from "@/components/PricingCalculator";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <TrustSection />
    <HowItWorksSection />
    <FeaturedCleaners />
    <PricingCalculator />
    <Footer />
  </div>
);

export default Index;
