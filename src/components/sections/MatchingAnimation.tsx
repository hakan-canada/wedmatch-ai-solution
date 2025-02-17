
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export const MatchingAnimation = () => {
  const [currentText, setCurrentText] = useState(0);
  const subtitles = [
    "Your vision, their artistry",
    "Your photographer found",
    "Your love story, their lens"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((current) => (current + 1) % subtitles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-56 md:h-72 w-full max-w-lg mx-auto p-4 md:p-8 overflow-hidden rounded-xl">
      {/* Photographer Card */}
      <div
        className={cn(
          "absolute w-48 md:w-56 h-56 md:h-72 rounded-2xl shadow-xl bg-white",
          "transform -translate-x-8 md:-translate-x-16 rotate-12"
        )}
      >
        <div className="relative h-full">
          <img
            src="https://ianylbuallxrimlgqzbk.supabase.co/storage/v1/object/public/Images//homepage-photographer.jpg"
            alt="Wedding Photographer"
            className="h-full w-full object-cover object-center rounded-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-2xl">
            <div className="absolute bottom-0 p-3 md:p-4 text-white">
              <h3 className="text-base md:text-lg font-semibold">Professional</h3>
              <p className="text-xs md:text-sm opacity-80">Wedding Photographer</p>
            </div>
          </div>
        </div>
      </div>

      {/* Couple Card */}
      <div
        className={cn(
          "absolute w-48 md:w-56 h-56 md:h-72 rounded-2xl shadow-xl bg-white",
          "transform translate-x-8 md:translate-x-16 -rotate-12"
        )}
      >
        <div className="relative h-full">
          <img
            src="https://ianylbuallxrimlgqzbk.supabase.co/storage/v1/object/public/Images//homepage-couple.jpg"
            alt="Wedding Couple"
            className="h-full w-full object-cover object-center rounded-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-2xl">
            <div className="absolute bottom-0 p-3 md:p-4 text-white w-full">
              <h3 className="text-base md:text-lg font-semibold">Happy Couple</h3>
              <p className="text-xs md:text-sm opacity-80">Finding Their Match</p>
            </div>
          </div>
        </div>
      </div>

      {/* Match Notification */}
      <div
        className={cn(
          "absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2",
          "bg-white/10 backdrop-blur-md border border-white/20 rounded-xl",
          "px-3 py-2 md:px-4 md:py-3"
        )}
      >
        <div className="flex items-center gap-2">
          <Heart className="w-5 h-5 text-pink-500" fill="currentColor" />
          <div>
            <div className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent font-semibold text-xs md:text-sm">
              Perfect Match!
            </div>
            <div className="text-white text-xs md:text-sm h-5 relative overflow-hidden">
              {subtitles.map((text, index) => (
                <div
                  key={index}
                  className={cn(
                    "absolute w-full transition-all duration-500",
                    index === currentText 
                      ? "top-0 opacity-100" 
                      : "top-6 opacity-0"
                  )}
                >
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
