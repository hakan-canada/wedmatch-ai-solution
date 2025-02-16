
import { useState } from "react";
import { Card } from "../ui/card";

export const Problems = () => {
  const [stats] = useState([
    { value: 40, label: "Ghosting Rate" },
    { value: 30, label: "No-shows" },
    { value: 40, label: "Style Regrets" },
    { value: 20, label: "Last-minute Cancellations" },
  ]);

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            The Reality: Wedding Photography Problems Couples Face
          </h2>
          <p className="text-gray-600">
            Based on our surveys, AI sentiment analysis of online reviews, and industry research,
            these are the most common wedding photography issues couples face.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center glass-card transform hover:scale-105 transition-transform">
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}%</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
