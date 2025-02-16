
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export const TopBanner = () => {
  return (
    <div className="bg-accent text-white py-2 px-4">
      <div className="container mx-auto flex items-center justify-between">
        <span className="text-sm hidden md:inline">Ready to find your perfect match?</span>
        <Button 
          size="sm" 
          variant="secondary" 
          className="ml-auto"
          onClick={() => window.location.href = '/match'}
        >
          Get Started
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};
