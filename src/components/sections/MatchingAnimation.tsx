
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const MatchingAnimation = () => {
  const [sliding, setSliding] = useState(false);
  const [showMatch, setShowMatch] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const animate = () => {
      // Reset all states
      setSliding(false);
      setShowMatch(false);
      setFadeOut(false);
      setShowText(false);

      // Start animation sequence
      setTimeout(() => setSliding(true), 100); // Cards slide in
      setTimeout(() => {
        setShowMatch(true);
        setTimeout(() => setShowText(true), 200);
      }, 1000); // Show match notification
      setTimeout(() => setFadeOut(true), 3500); // Start fade out
      setTimeout(() => animate(), 5500); // Restart animation
    };

    animate();
    return () => {
      // Cleanup timeouts if component unmounts
    };
  }, []);

  return (
    <div className="relative h-72 md:h-96 w-full max-w-xl mx-auto p-4 md:p-8 overflow-hidden rounded-xl">
      {/* Photographer Card */}
      <div
        className={cn(
          "absolute w-56 md:w-72 h-72 md:h-96 rounded-2xl shadow-xl bg-white",
          "transform translate-x-32 transition-all duration-700",
          sliding && "-translate-x-8 md:-translate-x-16 rotate-12",
          fadeOut && "opacity-0"
        )}
      >
        <div className="relative h-full">
          <img
            src="https://ianylbuallxrimlgqzbk.supabase.co/storage/v1/object/public/Images//homepage-photographer.jpg"
            alt="Wedding Photographer"
            className="h-full w-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-2xl">
            <div className="absolute bottom-0 p-3 md:p-4 text-white">
              <h3 className="text-base md:text-xl font-semibold">Professional</h3>
              <p className="text-xs md:text-sm opacity-80">Wedding Photographer</p>
            </div>
          </div>
        </div>
      </div>

      {/* Couple Card */}
      <div
        className={cn(
          "absolute w-56 md:w-72 h-72 md:h-96 rounded-2xl shadow-xl bg-white",
          "transform -translate-x-32 transition-all duration-700",
          sliding && "translate-x-8 md:translate-x-16 -rotate-12",
          fadeOut && "opacity-0"
        )}
      >
        <div className="relative h-full">
          <img
            src="https://ianylbuallxrimlgqzbk.supabase.co/storage/v1/object/public/Images//homepage-couple.jpg"
            alt="Wedding Couple"
            className="h-full w-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-2xl">
            <div className="absolute bottom-0 p-3 md:p-4 text-white">
              <h3 className="text-base md:text-xl font-semibold">Happy Couple</h3>
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
          "px-3 py-2 md:px-4 md:py-3",
          "transform scale-95 translate-y-2 opacity-0 transition-all duration-500",
          showMatch && "scale-100 translate-y-0 opacity-100",
          fadeOut && "opacity-0"
        )}
      >
        <div className="flex items-center gap-2">
          <Heart className="w-5 h-5 text-pink-500" fill="currentColor" />
          <div>
            <div className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent font-semibold text-xs md:text-sm">
              Perfect Match!
            </div>
            <div className={cn(
              "text-white text-xs md:text-sm opacity-0 transition-opacity duration-300",
              showText && "opacity-100"
            )}>
              Your vision, their artistry
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
