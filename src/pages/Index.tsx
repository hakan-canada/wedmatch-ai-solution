
import { Hero } from "@/components/sections/Hero";
import { Problems } from "@/components/sections/Problems";
import { Solutions } from "@/components/sections/Solutions";
import { StyleGallery } from "@/components/sections/StyleGallery";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCTA } from "@/components/sections/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Problems />
      <Solutions />
      <StyleGallery />
      <HowItWorks />
      <Testimonials />
      <FinalCTA />
    </div>
  );
};

export default Index;
