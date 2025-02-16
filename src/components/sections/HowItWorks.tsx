
import { ArrowRight } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Fill out a short form",
      description: "Tell us about your wedding details and preferences.",
    },
    {
      number: "02",
      title: "AI finds perfect matches",
      description: "Get matched with verified photographers and videographers who match your style and budget.",
    },
    {
      number: "03",
      title: "Secure booking",
      description: "Book through escrow payments with a backup guarantee.",
    },
  ];

  return (
    <section className="section-padding bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            How It Works
          </h2>
        </div>

        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-primary/20 -translate-y-1/2 hidden md:block" />
          
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="glass-card p-6 rounded-lg relative z-10">
                  <div className="text-4xl font-bold text-primary/20 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-1/2 -right-4 text-primary/20 z-20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
