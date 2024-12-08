import { Button } from "@/components/ui/button";
import { MediaCategory } from "@/types";

interface CategoryFilterProps {
  selectedCategory: MediaCategory;
  onCategoryChange: (category: MediaCategory) => void;
}

export function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  const categories: { value: MediaCategory; label: string }[] = [
    { value: "all", label: "All" },
    { value: "movies", label: "Movies" },
    { value: "tv", label: "TV Shows" },
    { value: "anime", label: "Anime" },
    { value: "documentary", label: "Documentary" },
  ];

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {categories.map((category) => (
        <Button
          key={category.value}
          variant={selectedCategory === category.value ? "default" : "outline"}
          onClick={() => onCategoryChange(category.value)}
          className="material-button px-6 animate-ripple"
        >
          {category.label}
        </Button>
      ))}
    </div>
  );
}