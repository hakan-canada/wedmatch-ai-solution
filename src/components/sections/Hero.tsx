
import { ArrowRight, Camera, Shield, Sparkles } from "lucide-react";
import { Button } from "../ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden section-padding">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1473177104440-ffee2f376098)`,
        }}
      />
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/90 px-4 py-2 rounded-full text-sm font-medium text-accent mb-8 animate-fade-in">
            <Sparkles size={16} />
            AI-Powered Matching | Secure Payments | Backup Guarantee
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight animate-fade-up text-white">
            Imagine an AI Agent Finding Your Perfect Photographer or Videographer
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            No more ghosting, last-minute cancellations, or budget surprises. Our AI finds trusted professionals, secures your payment, and guarantees a backup—so you can book with confidence.
          </p>
          
          <Button 
            size="lg" 
            className="animate-fade-up bg-primary hover:bg-primary/90 text-white"
            style={{ animationDelay: "0.4s" }}
            onClick={() => window.location.href = '/match'}
          >
            Find Your Wedding Photographer
            <ArrowRight className="ml-2" size={18} />
          </Button>

          <div className="grid grid-cols-3 gap-4 mt-16 animate-fade-up" style={{ animationDelay: "0.6s" }}>
            <div className="glass-card p-6 rounded-lg backdrop-blur-lg bg-white/80">
              <Camera className="w-8 h-8 text-primary mb-4 mx-auto" />
              <h3 className="font-semibold">AI-Powered Matching</h3>
            </div>
            <div className="glass-card p-6 rounded-lg backdrop-blur-lg bg-white/80">
              <Shield className="w-8 h-8 text-primary mb-4 mx-auto" />
              <h3 className="font-semibold">Secure Payments</h3>
            </div>
            <div className="glass-card p-6 rounded-lg backdrop-blur-lg bg-white/80">
              <Sparkles className="w-8 h-8 text-primary mb-4 mx-auto" />
              <h3 className="font-semibold">Backup Guarantee</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
