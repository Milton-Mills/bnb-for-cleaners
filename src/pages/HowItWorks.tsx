import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HowItWorksSection from "@/components/HowItWorksSection";
import TrustSection from "@/components/TrustSection";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HowItWorks = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="container-app section-padding text-center">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">How Airbnb for Cleaners Works</h1>
      <p className="text-muted-foreground max-w-xl mx-auto mb-4">
        Whether you're a property owner or a professional cleaner, we make it simple. Founded by <strong>Milton Mills</strong> to empower Kenya's cleaning professionals.
      </p>
    </div>
    <HowItWorksSection />
    <TrustSection />
    <div className="section-padding text-center">
      <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/book" className="btn-coral inline-flex items-center gap-2 justify-center">Book a Cleaner <ArrowRight size={16} /></Link>
        <Link to="/register" className="px-6 py-3 rounded-lg border border-border font-semibold hover:bg-secondary transition-colors inline-block">Join as a Cleaner</Link>
      </div>
    </div>
    <Footer />
  </div>
);

export default HowItWorks;
