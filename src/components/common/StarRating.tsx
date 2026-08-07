import { Star, StarHalf } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  className?: string;
  size?: number;
}

export function StarRating({ rating, className, size = 16 }: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.25;

  return (
    <span
      className={cn("text-gold inline-flex items-center gap-0.5", className)}
      role="img"
      aria-label={`Calificación ${rating} de 5 estrellas`}
    >
      {Array.from({ length: 5 }).map((_, index) => {
        if (index < fullStars) {
          return (
            <Star
              key={index}
              size={size}
              className="fill-gold"
              strokeWidth={0}
              aria-hidden="true"
            />
          );
        }
        if (index === fullStars && hasHalf) {
          return (
            <span key={index} className="relative inline-flex" aria-hidden="true">
              <Star size={size} className="text-gold/25" strokeWidth={0} />
              <StarHalf size={size} className="fill-gold absolute inset-0" strokeWidth={0} />
            </span>
          );
        }
        return (
          <Star
            key={index}
            size={size}
            className="text-gold/25"
            strokeWidth={0}
            aria-hidden="true"
          />
        );
      })}
    </span>
  );
}
