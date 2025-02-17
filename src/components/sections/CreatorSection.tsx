
import { Camera, FileText, Users } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

export const CreatorSection = () => {
  const benefits = [
    {
      icon: Camera,
      title: "New Bookings & Exposure",
      description: "Showcase your work and connect with more clients."
    },
    {
      icon: FileText,
      title: "Simplified Contract & Payment Management",
      description: "Handle all your paperwork and invoices in one place."
    },
    {
      icon: Users,
      title: "Second-Shooter Network",
      description: "Find backup photographers or videographers whenever you need."
    }
  ];

  return (
    <section className="section-padding bg-accent text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Are You a Photographer or Videographer?
          </h2>
          <p className="text-lg text-white/90">
            Expand your reach, streamline contracts, and tap into second-shooter opportunities. Our platform connects you with couples and fellow creatives, making it easier to grow your business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow bg-white/10 backdrop-blur border-white/20">
              <benefit.icon className="w-10 h-10 text-white mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-white">{benefit.title}</h3>
              <p className="text-white/80">{benefit.description}</p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            variant="secondary"
            onClick={() => window.location.href = '/creator-signup'}
            className="bg-white text-accent hover:bg-white/90"
          >
            Join as a Creator
          </Button>
        </div>
      </div>
    </section>
  );
};
