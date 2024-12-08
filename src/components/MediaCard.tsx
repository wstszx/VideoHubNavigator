import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, ChevronRight } from "lucide-react";
import { MediaSite } from "@/types";
import { SiteRatings } from "@/components/SiteRatings";

interface MediaCardProps {
  site: MediaSite;
  onClick: () => void;
}

export function MediaCard({ site, onClick }: MediaCardProps) {
  return (
    <Card className="material-card animate-breathe group">
      <CardHeader className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-xl overflow-hidden animate-float">
            <img
              src={site.logo}
              alt={site.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold tracking-tight">{site.name}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{site.description}</p>
          </div>
        </div>
        
        <div className="relative w-full h-48 rounded-xl overflow-hidden group">
          <img
            src={site.preview}
            alt={`${site.name} preview`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="flex flex-wrap gap-2">
          {site.features.map((feature, index) => (
            <Badge 
              key={index} 
              variant="secondary"
              className="rounded-full px-3 py-1 transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
            >
              {feature}
            </Badge>
          ))}
        </div>

        <div className="flex gap-2">
          <Button
            className="material-button flex-1"
            onClick={onClick}
          >
            View Details
            <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
          
          <Button
            variant="outline"
            className="material-button"
            asChild
          >
            <a 
              href={site.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="animate-ripple"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}