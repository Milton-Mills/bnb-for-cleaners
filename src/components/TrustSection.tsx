import { Shield, CreditCard, Phone, Users } from "lucide-react";

const features = [
  { icon: Shield, title: "Verified Cleaners", desc: "Every cleaner is background-checked and rated by hosts" },
  { icon: CreditCard, title: "M-Pesa & Visa", desc: "Pay securely with M-Pesa or Visa card — instant confirmation" },
  { icon: Phone, title: "Direct Payouts", desc: "Cleaners receive 80% directly to their M-Pesa within 24hrs" },
  { icon: Users, title: "Airbnb Integration", desc: "Link your Airbnb account to auto-sync property listings" },
];

const TrustSection = () => (
  <section className="section-padding">
    <div className="container-app">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <div key={i} className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-coral-light flex items-center justify-center flex-shrink-0">
              <f.icon size={24} className="text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSection;
