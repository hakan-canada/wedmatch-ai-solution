
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "I almost booked someone who had terrible reviews, but this platform matched me with trusted professionals. I finally felt secure in my choice.",
    author: "Sarah M.",
  },
  {
    quote: "A friend told me horror stories about hidden fees and bad contracts, so I used this platform. The escrow protection made sure everything was transparent.",
    author: "Michael & Kate",
  },
  {
    quote: "I was worried about finding a videographer who could match my photographer's style, but the AI found the perfect team that worked seamlessly together!",
    author: "Jessica R.",
  },
  {
    quote: "We were running out of time and had no idea where to start, but this platform matched us with three amazing professionals within hours!",
    author: "David & Emma",
  },
  {
    quote: "I had no idea how to tell if a photographer was reliable, but this platform handled it all. I booked with confidence and had zero stress.",
    author: "Rachel B.",
  },
];

export const Testimonials = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Our Couples Say
          </h2>
          <p className="text-gray-600">
            Real experiences from couples who found their perfect match
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <Card className="p-6 h-full glass-card">
                    <Quote className="w-10 h-10 text-primary/20 mb-4" />
                    <blockquote className="text-lg mb-4">
                      {testimonial.quote}
                    </blockquote>
                    <footer className="text-sm font-medium text-gray-600">
                      — {testimonial.author}
                    </footer>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
