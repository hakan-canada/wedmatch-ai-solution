
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export const TopBanner = () => {
  return (
    <div className="bg-accent text-white py-2 px-4">
      <div className="container mx-auto flex items-center justify-between">
        <nav className="flex items-center gap-6">
          <Link 
            to="/photographers" 
            className="text-sm hover:text-white/80 transition-colors"
          >
            Wedding Photographers
          </Link>
          <Link 
            to="/videographers" 
            className="text-sm hover:text-white/80 transition-colors"
          >
            Wedding Videographers
          </Link>
          <Link 
            to="/match" 
            className="text-sm hover:text-white/80 transition-colors"
          >
            Find Your Match
          </Link>
          <Link 
            to="/contact" 
            className="text-sm hover:text-white/80 transition-colors"
          >
            Contact Us
          </Link>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <Button 
            size="sm" 
            variant="secondary"
            asChild
          >
            <Link to="/match">
              Get Started
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
