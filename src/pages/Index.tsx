
import { Hero } from "@/components/sections/Hero";
import { Problems } from "@/components/sections/Problems";
import { Solutions } from "@/components/sections/Solutions";
import { StyleGallery } from "@/components/sections/StyleGallery";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Problems />
      <Solutions />
      <StyleGallery />
      <HowItWorks />
      <Testimonials />
    </div>
  );
};

export default Index;
