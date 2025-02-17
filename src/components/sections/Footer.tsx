
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-accent text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">About Us</h3>
            <p className="text-sm text-white/80">
              AI-powered platform connecting couples with their perfect wedding photographers and videographers.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Find Vendors</h3>
            <ul className="space-y-2">
              <li><Link to="/photographers" className="text-sm text-white/80 hover:text-white">Wedding Photographers</Link></li>
              <li><Link to="/videographers" className="text-sm text-white/80 hover:text-white">Wedding Videographers</Link></li>
              <li><Link to="/match" className="text-sm text-white/80 hover:text-white">Find Your Match</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-sm text-white/80 hover:text-white">Contact Us</Link></li>
              <li><Link to="/faq" className="text-sm text-white/80 hover:text-white">FAQ</Link></li>
              <li><Link to="/terms" className="text-sm text-white/80 hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <p className="text-sm text-white/80">
              Email: hello@wedmatch.ai<br />
              Phone: (555) 123-4567
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm text-white/60">
          © {new Date().getFullYear()} WedMatch.ai. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
