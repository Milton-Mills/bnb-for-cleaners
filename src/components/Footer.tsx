import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="container-app section-padding">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="Logo" className="h-8 w-8" />
            <span className="text-lg font-bold">Airbnb for Cleaners</span>
          </div>
          <p className="text-sm opacity-70 leading-relaxed">
            Kenya's trusted platform connecting Airbnb property owners with professional cleaners. Fast, reliable, and affordable.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">For Owners</h4>
          <ul className="space-y-2 text-sm opacity-70">
            <li><Link to="/book" className="hover:opacity-100 transition-opacity">Book a Cleaner</Link></li>
            <li><Link to="/register" className="hover:opacity-100 transition-opacity">Register Property</Link></li>
            <li><Link to="/pricing" className="hover:opacity-100 transition-opacity">Pricing</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">For Cleaners</h4>
          <ul className="space-y-2 text-sm opacity-70">
            <li><Link to="/jobs" className="hover:opacity-100 transition-opacity">Find Jobs</Link></li>
            <li><Link to="/register" className="hover:opacity-100 transition-opacity">Join as Cleaner</Link></li>
            <li><Link to="/how-it-works" className="hover:opacity-100 transition-opacity">How It Works</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm opacity-70">
            <li><Link to="/how-it-works" className="hover:opacity-100 transition-opacity">About Us</Link></li>
            <li><span>Support: hello@airbnbcleaners.co.ke</span></li>
            <li><span>Payment: M-Pesa & Visa</span></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-background/20 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm opacity-60">
          © {new Date().getFullYear()} Airbnb for Cleaners. All rights reserved.
        </p>
        <p className="text-sm opacity-60">
          Created by <span className="font-semibold opacity-100">Milton Mills</span> 🇰🇪
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
