
import { ArrowRight, Shield, Gift } from "lucide-react";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { MatchAnimation } from "./MatchAnimation";

export const Hero = () => {
  const features = [
    "AI-Powered Matching",
    "Secure Payments",
    "Backup Guarantee",
    "No Extra Cost to You",
  ];

  const testimonials = [
    { image: "https://i.pravatar.cc/150?img=1", name: "Sarah" },
    { image: "https://i.pravatar.cc/150?img=2", name: "Mike" },
    { image: "https://i.pravatar.cc/150?img=3", name: "Emma" },
    { image: "https://i.pravatar.cc/150?img=4", name: "John" },
  ];

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden section-padding bg-purple-500">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Avatars */}
          <div className="flex justify-center mb-8">
            <div className="flex -space-x-3">
              {testimonials.map((testimonial, i) => (
                <Avatar key={i} className="border-2 border-white w-8 h-8">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                </Avatar>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight animate-fade-up text-white">
              Find Your Perfect Wedding Photographer with AI
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-8 animate-fade-up max-w-2xl mx-auto" style={{ animationDelay: "0.2s" }}>
              Let AI match you with trusted professionals who fit your style and budget.
            </p>
            
            <Button 
              size="lg"
              className="animate-fade-up bg-primary hover:bg-primary/90 text-white mb-12"
              style={{ animationDelay: "0.4s" }}
              onClick={() => window.location.href = '/match'}
            >
              Find Your Wedding Photographer
              <ArrowRight className="ml-2" size={18} />
            </Button>

            <div className="flex flex-wrap justify-center gap-6 max-w-2xl mx-auto animate-fade-up mb-12" style={{ animationDelay: "0.6s" }}>
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-white/90">
                  {index === features.length - 1 ? (
                    <Gift className="w-5 h-5 text-primary" />
                  ) : (
                    <Shield className="w-5 h-5 text-primary" />
                  )}
                  <span className="text-sm md:text-base">{feature}</span>
                </div>
              ))}
            </div>

            {/* Animation Section */}
            <div className="mt-12 mb-12">
              <MatchAnimation />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
