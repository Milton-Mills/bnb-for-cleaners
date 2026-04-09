import { ClipboardList, Search, CreditCard, Sparkles } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Describe Your Property",
    description: "Tell us about your Airbnb — number of rooms, bathrooms, and the level of cleaning needed.",
  },
  {
    icon: Search,
    title: "Get Matched",
    description: "We match you with verified, nearby cleaners based on your needs and budget.",
  },
  {
    icon: CreditCard,
    title: "Pay Securely",
    description: "Pay via M-Pesa or Visa card. Transparent pricing with no hidden fees.",
  },
  {
    icon: Sparkles,
    title: "Spotless Property",
    description: "Your cleaner arrives on time and leaves your property sparkling for the next guest.",
  },
];

const HowItWorksSection = () => (
  <section className="section-padding bg-secondary">
    <div className="container-app">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">How It Works</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Book a professional cleaner in 4 simple steps
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, i) => (
          <div key={i} className="card-elevated p-6 text-center">
            <div className="w-14 h-14 rounded-2xl bg-coral-light flex items-center justify-center mx-auto mb-4">
              <step.icon size={28} className="text-primary" />
            </div>
            <div className="text-xs font-bold text-primary mb-2">STEP {i + 1}</div>
            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
            <p className="text-sm text-muted-foreground">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
