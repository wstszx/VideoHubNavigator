import { useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface WebsiteScreenshotsProps {
  screenshots: Array<{
    url: string;
    caption: string;
  }>;
}

export function WebsiteScreenshots({ screenshots }: WebsiteScreenshotsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((current) => 
      current === screenshots.length - 1 ? 0 : current + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((current) => 
      current === 0 ? screenshots.length - 1 : current - 1
    );
  };

  return (
    <div className="relative group">
      <div className="aspect-video rounded-2xl overflow-hidden bg-muted">
        <div className="relative w-full h-full">
          {screenshots.map((screenshot, index) => (
            <div
              key={index}
              className={cn(
                "absolute inset-0 transition-opacity duration-300",
                index === activeIndex ? "opacity-100" : "opacity-0"
              )}
            >
              <img
                src={screenshot.url}
                alt={screenshot.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="text-white text-sm">{screenshot.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Button
        variant="secondary"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="secondary"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="secondary"
            size="icon"
            className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Maximize2 className="h-4 w-4" />
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-screen-lg">
          <img
            src={screenshots[activeIndex].url}
            alt={screenshots[activeIndex].caption}
            className="w-full h-auto rounded-lg"
          />
        </DialogContent>
      </Dialog>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1">
        {screenshots.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-all",
              index === activeIndex
                ? "bg-white w-4"
                : "bg-white/50 hover:bg-white/75"
            )}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}