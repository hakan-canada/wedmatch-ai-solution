
import { FileText, Shield, Users } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

export const SecureBooking = () => {
  const benefits = [
    {
      icon: FileText,
      title: "Create a Clear Contract",
      description: "If you don't have one yet, we'll help you draft and finalize all the details."
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description: "Coordinate deposits and final balances through our platform, reducing risk for everyone."
    },
    {
      icon: Users,
      title: "Backup & Second Shooter",
      description: "Need extra coverage or a safety net? We have vetted pros ready to assist."
    }
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Found a Photographer on Your Own But Haven't Paid a Deposit?
          </h2>
          <p className="text-lg text-gray-600">
            Let us handle the contract and payments so you never worry about ghosting, cancellations, or missing coverage.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <benefit.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            onClick={() => window.location.href = '/onboard'}
            className="bg-primary hover:bg-primary/90"
          >
            Bring Your Photographer On Board
          </Button>
          <p className="mt-4 text-sm text-gray-600">
            We'll reach out to them and streamline everything, giving you total peace of mind.
          </p>
        </div>
      </div>
    </section>
  );
};
