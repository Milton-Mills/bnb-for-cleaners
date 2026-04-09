import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, User, Home, Phone, Mail, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Register = () => {
  const [role, setRole] = useState<"owner" | "cleaner" | null>(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", location: "", airbnbLink: "", experience: "", idNumber: "" });

  const update = (field: string, value: string) => setForm((f) => ({ ...f, [field]: value }));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container-app section-padding">
        <Link to="/" className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 mb-6">
          <ArrowLeft size={16} /> Back
        </Link>

        <div className="max-w-lg mx-auto">
          <h1 className="text-3xl font-bold mb-2 text-center">Create Your Account</h1>
          <p className="text-muted-foreground text-center mb-8">Join Kenya's #1 Airbnb cleaning marketplace</p>

          {!role ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button onClick={() => setRole("owner")} className="card-elevated p-8 text-center hover:border-primary transition-colors">
                <Home size={40} className="mx-auto mb-4 text-primary" />
                <h3 className="font-semibold text-lg mb-1">Property Owner</h3>
                <p className="text-sm text-muted-foreground">I need cleaners for my Airbnb properties</p>
              </button>
              <button onClick={() => setRole("cleaner")} className="card-elevated p-8 text-center hover:border-primary transition-colors">
                <User size={40} className="mx-auto mb-4 text-primary" />
                <h3 className="font-semibold text-lg mb-1">Cleaner</h3>
                <p className="text-sm text-muted-foreground">I want to find cleaning jobs</p>
              </button>
            </div>
          ) : (
            <div className="card-elevated p-6 animate-fade-in">
              <button onClick={() => setRole(null)} className="text-sm text-muted-foreground mb-4 hover:text-foreground flex items-center gap-1">
                <ArrowLeft size={14} /> Change role
              </button>
              <h2 className="text-xl font-bold mb-6">
                {role === "owner" ? "Register as Property Owner" : "Register as Cleaner"}
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">Full Name</label>
                  <div className="relative">
                    <User size={16} className="absolute left-3 top-3.5 text-muted-foreground" />
                    <input className="w-full p-3 pl-9 rounded-lg border border-border bg-background text-foreground" placeholder="Enter your name" value={form.name} onChange={(e) => update("name", e.target.value)} />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Email</label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-3 top-3.5 text-muted-foreground" />
                    <input type="email" className="w-full p-3 pl-9 rounded-lg border border-border bg-background text-foreground" placeholder="your@email.com" value={form.email} onChange={(e) => update("email", e.target.value)} />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Phone (M-Pesa)</label>
                  <div className="relative">
                    <Phone size={16} className="absolute left-3 top-3.5 text-muted-foreground" />
                    <input className="w-full p-3 pl-9 rounded-lg border border-border bg-background text-foreground" placeholder="0712345678" value={form.phone} onChange={(e) => update("phone", e.target.value)} />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Location</label>
                  <div className="relative">
                    <MapPin size={16} className="absolute left-3 top-3.5 text-muted-foreground" />
                    <input className="w-full p-3 pl-9 rounded-lg border border-border bg-background text-foreground" placeholder="e.g. Westlands, Nairobi" value={form.location} onChange={(e) => update("location", e.target.value)} />
                  </div>
                </div>

                {role === "owner" && (
                  <div>
                    <label className="text-sm font-medium mb-1 block">Airbnb Profile Link (optional)</label>
                    <input className="w-full p-3 rounded-lg border border-border bg-background text-foreground" placeholder="https://airbnb.com/users/show/..." value={form.airbnbLink} onChange={(e) => update("airbnbLink", e.target.value)} />
                    <p className="text-xs text-muted-foreground mt-1">Link your Airbnb to auto-import your property listings</p>
                  </div>
                )}

                {role === "cleaner" && (
                  <>
                    <div>
                      <label className="text-sm font-medium mb-1 block">ID/Passport Number</label>
                      <input className="w-full p-3 rounded-lg border border-border bg-background text-foreground" placeholder="For verification" value={form.idNumber} onChange={(e) => update("idNumber", e.target.value)} />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block">Cleaning Experience</label>
                      <select className="w-full p-3 rounded-lg border border-border bg-background text-foreground" value={form.experience} onChange={(e) => update("experience", e.target.value)}>
                        <option value="">Select</option>
                        <option>Less than 1 year</option>
                        <option>1-3 years</option>
                        <option>3-5 years</option>
                        <option>5+ years</option>
                      </select>
                    </div>
                  </>
                )}

                <button className="btn-coral w-full mt-4" onClick={() => alert("Registration submitted! Backend integration coming soon.")}>
                  Create Account
                </button>
                <p className="text-xs text-muted-foreground text-center">
                  By registering, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
