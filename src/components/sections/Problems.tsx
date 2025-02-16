
import { useState } from "react";
import { Card } from "../ui/card";

export const Problems = () => {
  const [stats] = useState([
    { 
      value: 40, 
      label: "Ghosting Rate",
      image: "https://images.unsplash.com/photo-1501286353178-1ec881214838",
      description: "Photographers disappearing after initial contact"
    },
    { 
      value: 30, 
      label: "No-shows",
      image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d",
      description: "Last-minute cancellations leaving couples stranded"
    },
    { 
      value: 40, 
      label: "Style Regrets",
      image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3",
      description: "Mismatched expectations in photography style"
    },
    { 
      value: 20, 
      label: "Last-minute Cancellations",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      description: "Photographers backing out close to the wedding date"
    },
  ]);

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            The Reality: Wedding Photography Problems Couples Face
          </h2>
          <p className="text-gray-600 text-lg">
            Based on our research and thousands of couple reviews
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-lg transition-all">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={stat.image} 
                  alt={stat.label} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold">{stat.label}</h3>
                  <span className="text-3xl font-bold text-primary">{stat.value}%</span>
                </div>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
