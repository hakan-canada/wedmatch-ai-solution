
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";

export const TopBanner = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-accent text-white py-2 px-4 relative">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center z-20">
          <span className="text-xl font-bold">WedMatch</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-20"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-accent z-50 md:hidden">
            <nav className="flex flex-col py-4 px-4 border-t border-white/10">
              <Link 
                to="/photographers" 
                className="py-3 text-sm hover:text-white/80 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Wedding Photographers
              </Link>
              <Link 
                to="/videographers" 
                className="py-3 text-sm hover:text-white/80 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Wedding Videographers
              </Link>
              <Link 
                to="/match" 
                className="py-3 text-sm hover:text-white/80 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Find Your Match
              </Link>
              <Link 
                to="/contact" 
                className="py-3 text-sm hover:text-white/80 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};
