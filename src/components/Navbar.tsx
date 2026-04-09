import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Book a Cleaner", path: "/book" },
  { label: "Find Jobs", path: "/jobs" },
  { label: "How It Works", path: "/how-it-works" },
  { label: "Pricing", path: "/pricing" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container-app flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Airbnb for Cleaners" className="h-8 w-8" />
          <span className="text-lg font-bold text-foreground">
            Airbnb <span className="text-primary">for Cleaners</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.path
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/register" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Sign Up
          </Link>
          <Link to="/login" className="btn-coral text-sm px-4 py-2 rounded-lg inline-block">
            Log In
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={`block py-2 text-sm font-medium transition-colors ${
                location.pathname === link.path
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-3 mt-3">
            <Link to="/register" onClick={() => setOpen(false)} className="text-sm font-medium text-foreground">
              Sign Up
            </Link>
            <Link to="/login" onClick={() => setOpen(false)} className="btn-coral text-sm px-4 py-2 rounded-lg">
              Log In
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
