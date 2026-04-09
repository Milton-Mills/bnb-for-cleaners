import { Link } from "react-router-dom";
import { ArrowRight, Star, Shield, Clock } from "lucide-react";
import heroImage from "@/assets/hero-cleaning.jpg";

const HeroSection = () => (
  <section className="relative overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImage} alt="Professional cleaning service" className="w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-foreground/60" />
    </div>

    <div className="relative container-app section-padding text-center">
      <div className="max-w-3xl mx-auto">
        <div className="badge-status bg-primary/20 text-primary-foreground mb-6 mx-auto w-fit backdrop-blur-sm">
          🇰🇪 Trusted by 500+ Airbnb hosts in Kenya
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6" style={{ color: 'white' }}>
          Professional Cleaning for Your{" "}
          <span className="text-gradient-coral">Airbnb Property</span>
        </h1>
        <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
          Connect with verified, professional cleaners in minutes. Fair pricing from KSh 1,000 – KSh 4,000 based on your property's needs.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link to="/book" className="btn-coral text-base px-8 py-4 rounded-xl flex items-center gap-2 w-full sm:w-auto justify-center">
            Book a Cleaner <ArrowRight size={18} />
          </Link>
          <Link to="/register" className="px-8 py-4 rounded-xl font-semibold border-2 transition-all w-full sm:w-auto text-center" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.4)' }}>
            Join as a Cleaner
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>
          <span className="flex items-center gap-1"><Star size={16} className="text-warning" /> 4.9 Rating</span>
          <span className="flex items-center gap-1"><Shield size={16} className="text-success" /> Verified Cleaners</span>
          <span className="flex items-center gap-1"><Clock size={16} className="text-primary" /> Same-Day Service</span>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
