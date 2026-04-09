import { Star, MapPin, BadgeCheck } from "lucide-react";
import cleanerImg from "@/assets/cleaner-profile.jpg";

const cleaners = [
  { name: "Grace Wanjiku", location: "Westlands, Nairobi", rating: 4.9, jobs: 127, specialty: "Deep Cleaning" },
  { name: "James Odhiambo", location: "Kilimani, Nairobi", rating: 4.8, jobs: 98, specialty: "Standard Turnover" },
  { name: "Faith Muthoni", location: "Karen, Nairobi", rating: 5.0, jobs: 203, specialty: "Premium Cleaning" },
];

const FeaturedCleaners = () => (
  <section className="section-padding">
    <div className="container-app">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Top-Rated Cleaners</h2>
        <p className="text-muted-foreground">Verified professionals trusted by hundreds of Airbnb hosts</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cleaners.map((c, i) => (
          <div key={i} className="card-elevated p-6 flex flex-col items-center text-center">
            <div className="relative mb-4">
              <img src={cleanerImg} alt={c.name} className="w-20 h-20 rounded-full object-cover" loading="lazy" width={80} height={80} />
              <BadgeCheck size={20} className="absolute -bottom-1 -right-1 text-primary bg-background rounded-full" />
            </div>
            <h3 className="font-semibold text-lg">{c.name}</h3>
            <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
              <MapPin size={14} /> {c.location}
            </p>
            <div className="flex items-center gap-1 mt-2 text-sm">
              <Star size={14} className="text-warning fill-warning" />
              <span className="font-medium">{c.rating}</span>
              <span className="text-muted-foreground">· {c.jobs} jobs</span>
            </div>
            <span className="badge-status bg-coral-light text-primary mt-3">{c.specialty}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedCleaners;
