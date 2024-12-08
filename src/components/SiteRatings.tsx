import { RatingStars } from "@/components/RatingStars";
import { SiteRatings as ISiteRatings } from "@/types";

interface SiteRatingsProps {
  ratings: ISiteRatings;
}

export function SiteRatings({ ratings }: SiteRatingsProps) {
  const ratingCategories = [
    { key: 'userInterface', label: 'User Interface' },
    { key: 'functionality', label: 'Functionality' },
    { key: 'performance', label: 'Performance' },
    { key: 'contentQuality', label: 'Content Quality' },
    { key: 'userExperience', label: 'User Experience' },
  ] as const;

  return (
    <div className="space-y-2">
      {ratingCategories.map(({ key, label }) => (
        <div key={key} className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">{label}</span>
          <RatingStars rating={ratings[key]} />
        </div>
      ))}
    </div>
  );
}