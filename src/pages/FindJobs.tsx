import { MapPin, Clock, DollarSign, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import cleanPropertyImg from "@/assets/clean-property.jpg";

const jobs = [
  { id: 1, title: "2BR Apartment Turnover", location: "Westlands, Nairobi", type: "Moderate", price: 2500, time: "Today, 2:00 PM", host: "Sarah K." },
  { id: 2, title: "Studio Deep Clean", location: "Kilimani, Nairobi", type: "Heavy", price: 3000, time: "Tomorrow, 9:00 AM", host: "David M." },
  { id: 3, title: "3BR Villa Standard Clean", location: "Karen, Nairobi", type: "Light", price: 2800, time: "Tomorrow, 11:00 AM", host: "Anna W." },
  { id: 4, title: "1BR Apartment Quick Turnover", location: "Lavington, Nairobi", type: "Light", price: 1500, time: "Today, 4:00 PM", host: "Peter O." },
  { id: 5, title: "4BR House Deep Clean", location: "Runda, Nairobi", type: "Extreme", price: 4000, time: "Friday, 8:00 AM", host: "Mary N." },
];

const FindJobs = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="container-app section-padding">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Available Cleaning Jobs</h1>
        <p className="text-muted-foreground">Browse and accept jobs from Airbnb hosts near you</p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-8">
        {["All", "Light", "Moderate", "Heavy", "Extreme"].map((f) => (
          <button key={f} className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${f === "All" ? "bg-primary text-primary-foreground border-primary" : "border-border text-foreground hover:border-primary"}`}>
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <div key={job.id} className="card-elevated overflow-hidden">
            <img src={cleanPropertyImg} alt={job.title} className="w-full h-40 object-cover" loading="lazy" width={400} height={160} />
            <div className="p-5">
              <div className="flex items-center justify-between mb-2">
                <span className={`badge-status text-xs ${job.type === "Light" ? "bg-success/10 text-success" : job.type === "Extreme" ? "bg-destructive/10 text-destructive" : "bg-warning/10 text-warning"}`}>
                  {job.type}
                </span>
                <span className="text-sm text-muted-foreground">by {job.host}</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">{job.title}</h3>
              <div className="space-y-1 text-sm text-muted-foreground mb-4">
                <p className="flex items-center gap-1"><MapPin size={14} /> {job.location}</p>
                <p className="flex items-center gap-1"><Clock size={14} /> {job.time}</p>
                <p className="flex items-center gap-1 text-foreground font-semibold"><DollarSign size={14} /> KSh {job.price.toLocaleString()} <span className="text-muted-foreground font-normal">(you earn KSh {Math.round(job.price * 0.8).toLocaleString()})</span></p>
              </div>
              <button className="btn-coral w-full text-sm py-2.5 flex items-center justify-center gap-2">
                Accept Job <ArrowRight size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
  </div>
);

export default FindJobs;
