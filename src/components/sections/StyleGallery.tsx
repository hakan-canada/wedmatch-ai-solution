
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { useNavigate } from "react-router-dom";

const styles = [
  {
    title: "Rustic & Boho Weddings",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
    description: "Natural, organic, and free-spirited photography that captures the essence of outdoor celebrations.",
  },
  {
    title: "Cinematic & Moody Edits",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    description: "Dramatic, emotional imagery with rich colors and striking contrasts.",
  },
  {
    title: "Classic & Timeless Portraits",
    image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098",
    description: "Traditional photography with an emphasis on elegant compositions and timeless moments.",
  },
  {
    title: "Modern & Urban Wedding Photography",
    image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2",
    description: "Contemporary, architectural approaches that embrace city landscapes and modern aesthetics.",
  },
];

export const StyleGallery = () => {
  const navigate = useNavigate();

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Find Your Perfect Photography Style
          </h2>
          <p className="text-gray-600">
            Browse our curated collection of wedding photography styles and let our AI match you with photographers who specialize in your preferred aesthetic.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {styles.map((style, index) => (
            <Card key={index} className="overflow-hidden group">
              <div className="relative h-[300px] overflow-hidden">
                <img
                  src={style.image}
                  alt={style.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{style.title}</h3>
                  <p className="text-white/90 mb-4">{style.description}</p>
                  <Button 
                    onClick={() => navigate('/match')}
                    variant="secondary"
                    className="w-full"
                  >
                    Like this style? Get Matched Instantly
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
