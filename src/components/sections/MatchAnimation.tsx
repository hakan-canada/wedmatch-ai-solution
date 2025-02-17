
import { useEffect, useState } from 'react';
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

export const MatchAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showAnimation = () => {
      setIsVisible(true);
      
      const timeout = setTimeout(() => {
        setIsVisible(false);
      }, 6000);

      return timeout;
    };

    const initialTimeout = setTimeout(() => {
      const timeout = showAnimation();
      
      const interval = setInterval(() => {
        clearTimeout(timeout);
        showAnimation();
      }, 8000);

      return () => clearInterval(interval);
    }, 1000);

    return () => clearTimeout(initialTimeout);
  }, []);

  return (
    <div className="relative h-72 md:h-96 w-full max-w-xl mx-auto overflow-visible rounded-xl flex justify-center items-center">
      <div className="relative w-64 md:w-80 h-72 md:h-96">
        {/* Photographer Card */}
        <div className="absolute left-0 md:left-2 w-56 md:w-72 h-72 md:h-96 rounded-3xl shadow-xl bg-white border-4 border-white overflow-hidden transform -translate-x-[35%] rotate-12 z-10">
          <div className="relative h-full">
            <img
              src="https://ianylbuallxrimlgqzbk.supabase.co/storage/v1/object/public/Images//homepage-photographer.jpg"
              alt="Wedding Photographer"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent">
              <div className="absolute bottom-0 p-4 text-white">
                <h3 className="text-base md:text-xl font-semibold">Professional</h3>
                <p className="text-sm md:text-base opacity-90">Wedding Photographer</p>
              </div>
            </div>
          </div>
        </div>

        {/* Couple Card */}
        <div className="absolute right-0 md:right-2 w-56 md:w-72 h-72 md:h-96 rounded-3xl shadow-xl bg-white border-4 border-white overflow-hidden transform translate-x-[35%] -rotate-12 z-10">
          <div className="relative h-full">
            <img
              src="https://ianylbuallxrimlgqzbk.supabase.co/storage/v1/object/public/Images//homepage-couple.jpg"
              alt="Wedding Couple"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent">
              <div className="absolute bottom-0 p-4 text-white">
                <h3 className="text-base md:text-xl font-semibold">Perfect Day</h3>
                <p className="text-sm md:text-base opacity-90">Looking for a Photographer</p>
              </div>
            </div>
          </div>
        </div>

        {/* Match Notification */}
        <div
          className={cn(
            "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
            "bg-gray-900/80 backdrop-blur-lg rounded-2xl px-4 py-2",
            "flex items-center gap-2 z-20 whitespace-nowrap",
            "transition-all duration-500",
            isVisible
              ? "scale-100 translate-y-0 opacity-100"
              : "scale-95 translate-y-8 opacity-0"
          )}
          style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.2)' }}
        >
          <Heart className="w-5 h-5" fill="#ec4899" stroke="#ec4899" />
          <div>
            <div className="text-sm font-semibold text-pink-500">
              Perfect Match!
            </div>
            <div className="text-xs text-white opacity-95">
              Your vision, their artistry
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
