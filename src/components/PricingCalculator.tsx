import { useState } from "react";
import { Calculator, Info } from "lucide-react";

const propertyTypes = ["Studio", "1 Bedroom", "2 Bedrooms", "3 Bedrooms", "4+ Bedrooms"];
const tidyLevels = [
  { label: "Light", description: "Quick turnover, mostly tidy", multiplier: 1 },
  { label: "Moderate", description: "Normal guest checkout mess", multiplier: 1.5 },
  { label: "Heavy", description: "Significant mess, deep clean needed", multiplier: 2 },
  { label: "Extreme", description: "Major cleaning required", multiplier: 2.5 },
];

const basePrices: Record<string, number> = {
  Studio: 1000,
  "1 Bedroom": 1500,
  "2 Bedrooms": 2000,
  "3 Bedrooms": 2800,
  "4+ Bedrooms": 3500,
};

const PricingCalculator = () => {
  const [property, setProperty] = useState("1 Bedroom");
  const [tidyLevel, setTidyLevel] = useState(0);

  const base = basePrices[property] || 1500;
  const total = Math.min(Math.round(base * tidyLevels[tidyLevel].multiplier), 4000);
  const platformFee = Math.round(total * 0.2);
  const cleanerEarns = total - platformFee;

  return (
    <section className="section-padding bg-secondary" id="pricing">
      <div className="container-app">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Transparent Pricing</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Fair rates from KSh 1,000 – KSh 4,000. Price depends on property size and cleaning level.
          </p>
        </div>

        <div className="max-w-2xl mx-auto card-elevated p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-6">
            <Calculator size={20} className="text-primary" />
            <h3 className="font-semibold text-lg">Price Estimator</h3>
          </div>

          {/* Property Type */}
          <div className="mb-6">
            <label className="text-sm font-medium mb-2 block">Property Type</label>
            <div className="flex flex-wrap gap-2">
              {propertyTypes.map((p) => (
                <button
                  key={p}
                  onClick={() => setProperty(p)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
                    property === p
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background border-border text-foreground hover:border-primary"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* Tidiness Level */}
          <div className="mb-8">
            <label className="text-sm font-medium mb-2 block">Untidiness Level</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {tidyLevels.map((level, i) => (
                <button
                  key={i}
                  onClick={() => setTidyLevel(i)}
                  className={`p-3 rounded-lg text-center border transition-all ${
                    tidyLevel === i
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background border-border text-foreground hover:border-primary"
                  }`}
                >
                  <div className="text-sm font-semibold">{level.label}</div>
                  <div className={`text-xs mt-1 ${tidyLevel === i ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    {level.description}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Price Breakdown */}
          <div className="bg-secondary rounded-xl p-5">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm text-muted-foreground">Total Price</span>
              <span className="text-2xl font-bold text-foreground">KSh {total.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center mb-2 text-sm">
              <span className="text-muted-foreground flex items-center gap-1">
                <Info size={14} /> Platform fee (20%)
              </span>
              <span className="text-muted-foreground">KSh {platformFee.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-success font-medium">Cleaner receives (80%)</span>
              <span className="text-success font-semibold">KSh {cleanerEarns.toLocaleString()}</span>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              Platform fee covers: handling charges, M-Pesa transaction costs, taxes & platform maintenance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCalculator;
