
import { Camera, Lock, Star, Users } from "lucide-react";
import { Card } from "../ui/card";

export const Solutions = () => {
  const solutions = [
    {
      icon: Camera,
      title: "AI-Driven Matching",
      description: "AI crawls and matches couples with 3 verified professionals in their area.",
    },
    {
      icon: Users,
      title: "Manual Handpicking",
      description: "Opt for a quick human selection session at no cost—we earn from vendors.",
    },
    {
      icon: Lock,
      title: "Secure Escrow Payments",
      description: "We hold payments securely and only release them after service completion.",
    },
    {
      icon: Star,
      title: "Backup Guarantee",
      description: "If a photographer cancels, we provide a replacement immediately.",
    },
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            How Our Platform Solves These Issues
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <Card 
              key={index} 
              className="p-6 glass-card hover:shadow-lg transition-shadow"
            >
              <solution.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
              <p className="text-gray-600">{solution.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
