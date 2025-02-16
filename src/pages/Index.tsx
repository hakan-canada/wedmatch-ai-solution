
import { Hero } from "@/components/sections/Hero";
import { Problems } from "@/components/sections/Problems";
import { Solutions } from "@/components/sections/Solutions";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { StyleGallery } from "@/components/sections/StyleGallery";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Problems />
      <Solutions />
      <StyleGallery />
      <HowItWorks />
    </div>
  );
};

export default Index;
