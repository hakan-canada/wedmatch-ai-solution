
import { ArrowRight, Shield, Sparkles, Camera } from "lucide-react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

export const FinalCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="section-padding bg-gradient-to-b from-white to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Your Wedding, Your Vision—With AI-Matched Professionals You Can Trust
          </h2>

          <div className="flex flex-col md:flex-row justify-center gap-6 mb-8">
            <div className="flex items-center justify-center gap-2 text-sm font-medium text-gray-600">
              <Camera size={16} className="text-primary" />
              AI-Powered Matching
            </div>
            <div className="flex items-center justify-center gap-2 text-sm font-medium text-gray-600">
              <Shield size={16} className="text-primary" />
              Secure Payments
            </div>
            <div className="flex items-center justify-center gap-2 text-sm font-medium text-gray-600">
              <Sparkles size={16} className="text-primary" />
              Backup Guarantee
            </div>
          </div>

          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white"
            onClick={() => navigate('/match')}
          >
            Find Your Perfect Match Now
            <ArrowRight className="ml-2" size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};
