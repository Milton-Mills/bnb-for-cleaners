import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingCalculator from "@/components/PricingCalculator";

const Pricing = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="container-app section-padding text-center">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">Pricing</h1>
      <p className="text-muted-foreground max-w-xl mx-auto">
        Transparent, fair pricing for both property owners and cleaners. No hidden fees.
      </p>
    </div>
    <PricingCalculator />
    <div className="section-padding">
      <div className="container-app max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Payment Methods</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="card-elevated p-6 text-center">
            <div className="text-3xl mb-3">📱</div>
            <h3 className="font-semibold text-lg mb-2">M-Pesa</h3>
            <p className="text-sm text-muted-foreground">Pay instantly via Safaricom M-Pesa. Cleaners receive payouts directly to their M-Pesa number within 24 hours.</p>
          </div>
          <div className="card-elevated p-6 text-center">
            <div className="text-3xl mb-3">💳</div>
            <h3 className="font-semibold text-lg mb-2">Visa Card</h3>
            <p className="text-sm text-muted-foreground">Secure card payments via Visa debit or credit. Protected with 3D Secure authentication.</p>
          </div>
        </div>

        <div className="mt-8 card-elevated p-6">
          <h3 className="font-semibold text-lg mb-4">Fee Breakdown</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between"><span className="text-muted-foreground">Cleaner receives</span><span className="font-semibold text-success">80%</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Platform fee</span><span className="font-semibold">20%</span></div>
            <div className="border-t border-border pt-3 text-xs text-muted-foreground">
              The 20% platform fee covers: transaction processing, M-Pesa transfer charges, taxes, platform maintenance, and service management by CEO Milton Mills.
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Pricing;
