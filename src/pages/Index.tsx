
import { Hero } from "@/components/sections/Hero";
import { Problems } from "@/components/sections/Problems";
import { Solutions } from "@/components/sections/Solutions";
import { StyleGallery } from "@/components/sections/StyleGallery";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { TopBanner } from "@/components/sections/TopBanner";
import { Footer } from "@/components/sections/Footer";
import { SecureBooking } from "@/components/sections/SecureBooking";
import { CreatorSection } from "@/components/sections/CreatorSection";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <TopBanner />
      <Hero />
      <Problems />
      <Solutions />
      <StyleGallery />
      <HowItWorks />
      <Testimonials />
      <FinalCTA />
      <SecureBooking />
      <CreatorSection />
      <Footer />
    </div>
  );
};

export default Index;
