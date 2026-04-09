import { useState } from "react";
import { ArrowLeft, ArrowRight, MapPin, Home, Sparkles, Calendar, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import cleanPropertyImg from "@/assets/clean-property.jpg";

const tidyLevels = [
  { label: "Light", emoji: "✨", description: "Quick turnover, mostly tidy", multiplier: 1 },
  { label: "Moderate", emoji: "🧹", description: "Normal guest checkout mess", multiplier: 1.5 },
  { label: "Heavy", emoji: "🧽", description: "Significant mess, deep clean needed", multiplier: 2 },
  { label: "Extreme", emoji: "⚠️", description: "Major cleaning required", multiplier: 2.5 },
];

const basePrices: Record<string, number> = {
  Studio: 1000, "1 Bedroom": 1500, "2 Bedrooms": 2000, "3 Bedrooms": 2800, "4+ Bedrooms": 3500,
};

const BookCleaner = () => {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    propertyName: "",
    location: "",
    propertyType: "1 Bedroom",
    bathrooms: "1",
    tidyLevel: 1,
    date: "",
    time: "",
    notes: "",
    paymentMethod: "mpesa",
  });

  const update = (field: string, value: string | number) => setForm((f) => ({ ...f, [field]: value }));

  const base = basePrices[form.propertyType] || 1500;
  const total = Math.min(Math.round(base * tidyLevels[form.tidyLevel].multiplier), 4000);
  const cleanerEarns = Math.round(total * 0.8);

  const steps = [
    // Step 1: Property Details
    <div key="property" className="animate-fade-in">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Home size={24} className="text-primary" /> Property Details</h2>
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium mb-1 block">Property / Airbnb Name</label>
          <input className="w-full p-3 rounded-lg border border-border bg-background text-foreground" placeholder="e.g. Sunset Villa Westlands" value={form.propertyName} onChange={(e) => update("propertyName", e.target.value)} />
        </div>
        <div>
          <label className="text-sm font-medium mb-1 block">Location</label>
          <div className="relative">
            <MapPin size={16} className="absolute left-3 top-3.5 text-muted-foreground" />
            <input className="w-full p-3 pl-9 rounded-lg border border-border bg-background text-foreground" placeholder="e.g. Kilimani, Nairobi" value={form.location} onChange={(e) => update("location", e.target.value)} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium mb-1 block">Property Type</label>
            <select className="w-full p-3 rounded-lg border border-border bg-background text-foreground" value={form.propertyType} onChange={(e) => update("propertyType", e.target.value)}>
              {Object.keys(basePrices).map((p) => <option key={p}>{p}</option>)}
            </select>
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">Bathrooms</label>
            <select className="w-full p-3 rounded-lg border border-border bg-background text-foreground" value={form.bathrooms} onChange={(e) => update("bathrooms", e.target.value)}>
              {["1", "2", "3", "4+"].map((b) => <option key={b}>{b}</option>)}
            </select>
          </div>
        </div>
      </div>
    </div>,

    // Step 2: Cleaning Level
    <div key="cleaning" className="animate-fade-in">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Sparkles size={24} className="text-primary" /> How Untidy Is It?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {tidyLevels.map((level, i) => (
          <button key={i} onClick={() => update("tidyLevel", i)} className={`p-5 rounded-xl border-2 text-left transition-all ${form.tidyLevel === i ? "border-primary bg-coral-light" : "border-border hover:border-primary/50"}`}>
            <div className="text-2xl mb-2">{level.emoji}</div>
            <div className="font-semibold">{level.label}</div>
            <div className="text-sm text-muted-foreground mt-1">{level.description}</div>
          </button>
        ))}
      </div>
      <div className="mt-4">
        <label className="text-sm font-medium mb-1 block">Additional Notes</label>
        <textarea className="w-full p-3 rounded-lg border border-border bg-background text-foreground min-h-[80px]" placeholder="Any special instructions..." value={form.notes} onChange={(e) => update("notes", e.target.value)} />
      </div>
    </div>,

    // Step 3: Schedule
    <div key="schedule" className="animate-fade-in">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Calendar size={24} className="text-primary" /> Schedule Cleaning</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium mb-1 block">Date</label>
          <input type="date" className="w-full p-3 rounded-lg border border-border bg-background text-foreground" value={form.date} onChange={(e) => update("date", e.target.value)} />
        </div>
        <div>
          <label className="text-sm font-medium mb-1 block">Preferred Time</label>
          <select className="w-full p-3 rounded-lg border border-border bg-background text-foreground" value={form.time} onChange={(e) => update("time", e.target.value)}>
            <option value="">Select time</option>
            {["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"].map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>
      </div>
      <img src={cleanPropertyImg} alt="Clean property" className="w-full h-48 object-cover rounded-xl mt-6" loading="lazy" />
    </div>,

    // Step 4: Payment
    <div key="payment" className="animate-fade-in">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><CreditCard size={24} className="text-primary" /> Payment</h2>
      <div className="bg-secondary rounded-xl p-5 mb-6">
        <div className="flex justify-between mb-2"><span className="text-muted-foreground">Property</span><span className="font-medium">{form.propertyName || form.propertyType}</span></div>
        <div className="flex justify-between mb-2"><span className="text-muted-foreground">Cleaning Level</span><span className="font-medium">{tidyLevels[form.tidyLevel].label}</span></div>
        <div className="flex justify-between mb-2"><span className="text-muted-foreground">Date</span><span className="font-medium">{form.date || "Not set"}</span></div>
        <div className="border-t border-border my-3" />
        <div className="flex justify-between"><span className="font-semibold">Total</span><span className="text-xl font-bold text-primary">KSh {total.toLocaleString()}</span></div>
        <p className="text-xs text-muted-foreground mt-2">Cleaner receives KSh {cleanerEarns.toLocaleString()} (80%) • Platform fee KSh {(total - cleanerEarns).toLocaleString()} (20%)</p>
      </div>

      <div className="space-y-3">
        <label className="text-sm font-medium block">Payment Method</label>
        {[
          { id: "mpesa", label: "M-Pesa", desc: "Pay via M-Pesa mobile money" },
          { id: "visa", label: "Visa Card", desc: "Debit or credit card" },
        ].map((pm) => (
          <button key={pm.id} onClick={() => update("paymentMethod", pm.id)} className={`w-full p-4 rounded-xl border-2 text-left transition-all flex items-center gap-4 ${form.paymentMethod === pm.id ? "border-primary bg-coral-light" : "border-border"}`}>
            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${form.paymentMethod === pm.id ? "border-primary" : "border-muted-foreground"}`}>
              {form.paymentMethod === pm.id && <div className="w-2.5 h-2.5 rounded-full bg-primary" />}
            </div>
            <div>
              <div className="font-medium">{pm.label}</div>
              <div className="text-sm text-muted-foreground">{pm.desc}</div>
            </div>
          </button>
        ))}
      </div>
    </div>,
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container-app section-padding">
        <Link to="/" className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 mb-6">
          <ArrowLeft size={16} /> Back to Home
        </Link>

        {/* Progress bar */}
        <div className="flex gap-2 mb-8">
          {["Property", "Cleaning", "Schedule", "Payment"].map((s, i) => (
            <div key={i} className="flex-1">
              <div className={`h-1 rounded-full transition-colors ${i <= step ? "bg-primary" : "bg-border"}`} />
              <p className={`text-xs mt-1 ${i <= step ? "text-primary font-medium" : "text-muted-foreground"}`}>{s}</p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          {steps[step]}

          <div className="flex justify-between mt-8">
            <button onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0} className="px-6 py-3 rounded-lg border border-border font-medium disabled:opacity-30 transition-opacity">
              Back
            </button>
            {step < 3 ? (
              <button onClick={() => setStep(step + 1)} className="btn-coral flex items-center gap-2">
                Continue <ArrowRight size={16} />
              </button>
            ) : (
              <button className="btn-coral flex items-center gap-2" onClick={() => alert("Booking submitted! Payment integration coming soon.")}>
                Confirm & Pay KSh {total.toLocaleString()}
              </button>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookCleaner;
