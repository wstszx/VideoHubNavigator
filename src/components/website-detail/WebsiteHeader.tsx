import { Badge } from "@/components/ui/badge";
import { CalendarDays, Users, Globe } from "lucide-react";
import { WebsiteInfo } from "@/types/website";

interface WebsiteHeaderProps {
  website: WebsiteInfo;
}

export function WebsiteHeader({ website }: WebsiteHeaderProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-start gap-6">
        <div className="w-24 h-24 rounded-2xl overflow-hidden animate-float">
          <img
            src={website.logo}
            alt={`${website.name} logo`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-2 flex-1">
          <h1 className="text-3xl font-bold tracking-tight">{website.name}</h1>
          <p className="text-lg text-muted-foreground">{website.description}</p>
          <div className="flex flex-wrap gap-2 pt-2">
            {website.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="rounded-full">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center gap-2 text-muted-foreground">
          <CalendarDays className="h-4 w-4" />
          <span>Launched {website.launchDate}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Users className="h-4 w-4" />
          <span>{website.totalUsers.toLocaleString()} Users</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Globe className="h-4 w-4" />
          <a href={website.url} target="_blank" rel="noopener noreferrer" 
             className="hover:text-primary transition-colors">
            Visit Website
          </a>
        </div>
      </div>
    </div>
  );
}