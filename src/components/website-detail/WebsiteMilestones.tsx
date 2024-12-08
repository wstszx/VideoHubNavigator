import { Badge } from "@/components/ui/badge";
import { Milestone } from "@/types/website";
import { cn } from "@/lib/utils";

interface WebsiteMilestonesProps {
  milestones: Milestone[];
}

export function WebsiteMilestones({ milestones }: WebsiteMilestonesProps) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
      <div className="space-y-8">
        {milestones.map((milestone, index) => (
          <div key={index} className="relative pl-10">
            <div className={cn(
              "absolute left-0 w-8 h-8 rounded-full flex items-center justify-center",
              "bg-background border-2 border-primary"
            )}>
              <div className="w-2 h-2 rounded-full bg-primary" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <time className="text-sm text-muted-foreground">
                  {milestone.date}
                </time>
                <Badge variant="secondary" className="rounded-full">
                  {milestone.type}
                </Badge>
              </div>
              <h3 className="text-lg font-semibold">{milestone.title}</h3>
              <p className="text-muted-foreground">{milestone.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}