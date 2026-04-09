import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Lock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container-app section-padding">
        <div className="max-w-md mx-auto">
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 mb-6">
            <ArrowLeft size={16} /> Back
          </Link>

          <div className="card-elevated p-6 sm:p-8">
            <h1 className="text-2xl font-bold mb-2 text-center">Welcome Back</h1>
            <p className="text-muted-foreground text-center mb-6">Log in to Airbnb for Cleaners</p>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-1 block">Email</label>
                <div className="relative">
                  <Mail size={16} className="absolute left-3 top-3.5 text-muted-foreground" />
                  <input type="email" className="w-full p-3 pl-9 rounded-lg border border-border bg-background text-foreground" placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Password</label>
                <div className="relative">
                  <Lock size={16} className="absolute left-3 top-3.5 text-muted-foreground" />
                  <input type="password" className="w-full p-3 pl-9 rounded-lg border border-border bg-background text-foreground" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
              </div>
              <button className="btn-coral w-full" onClick={() => alert("Login integration coming soon!")}>
                Log In
              </button>
              <p className="text-sm text-center text-muted-foreground">
                Don't have an account?{" "}
                <Link to="/register" className="text-primary font-medium hover:underline">Sign Up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
