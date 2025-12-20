import { useState } from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

interface StarRatingProps {
  onRatingSelect: (rating: number) => void;
}

const StarRating = ({ onRatingSelect }: StarRatingProps) => {
  const [hoveredStar, setHoveredStar] = useState(0);
  const [selectedStar, setSelectedStar] = useState(0);
  const [animatingStar, setAnimatingStar] = useState(0);
  const { t } = useLanguage();

  const handleStarClick = (star: number) => {
    setSelectedStar(star);
    setAnimatingStar(star);
    
    setTimeout(() => setAnimatingStar(0), 300);
    setTimeout(() => onRatingSelect(star), 500);
  };

  const getStarLabel = (star: number) => {
    const labels = ["", t("veryBad"), t("bad"), t("acceptable"), t("good"), t("excellent")];
    return labels[star];
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex gap-2 md:gap-4" dir="ltr">
        {[1, 2, 3, 4, 5].map((star) => {
          const isFilled = star <= (hoveredStar || selectedStar);
          const isAnimating = star === animatingStar;
          
          return (
            <button
              key={star}
              className={cn(
                "transition-all duration-200 p-2 rounded-full",
                "hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary/50",
                isAnimating && "animate-star-pop"
              )}
              onMouseEnter={() => setHoveredStar(star)}
              onMouseLeave={() => setHoveredStar(0)}
              onClick={() => handleStarClick(star)}
              aria-label={`${star} ${t("stars")}`}
            >
              <Star
                size={48}
                className={cn(
                  "transition-all duration-200",
                  isFilled 
                    ? "fill-star-filled text-star-filled star-glow" 
                    : "fill-transparent text-star-empty",
                  hoveredStar >= star && !selectedStar && "text-star-hover"
                )}
              />
            </button>
          );
        })}
      </div>
      
      <div className="h-8 flex items-center">
        {(hoveredStar > 0 || selectedStar > 0) && (
          <p className="text-lg font-medium text-foreground animate-fade-in-up">
            {getStarLabel(hoveredStar || selectedStar)}
          </p>
        )}
      </div>
    </div>
  );
};

export default StarRating;
