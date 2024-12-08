import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WebsiteHeader } from "@/components/website-detail/WebsiteHeader";
import { WebsiteScreenshots } from "@/components/website-detail/WebsiteScreenshots";
import { WebsiteStats } from "@/components/website-detail/WebsiteStats";
import { WebsiteMilestones } from "@/components/website-detail/WebsiteMilestones";
import { WebsiteReviews } from "@/components/website-detail/WebsiteReviews";
import { mediaSites } from "@/data/sites";

interface WebsiteDetailProps {
  siteId: string;
  onBack: () => void;
}

export function WebsiteDetail({ siteId, onBack }: WebsiteDetailProps) {
  const site = mediaSites.find(s => s.id === siteId);

  if (!site) {
    return (
      <div className="container py-8 text-center">
        <p>Website not found.</p>
        <Button onClick={onBack} className="mt-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to List
        </Button>
      </div>
    );
  }

  return (
    <div className="container py-8 space-y-8">
      <Button
        variant="ghost"
        className="mb-4 -ml-4 text-muted-foreground hover:text-foreground"
        onClick={onBack}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to List
      </Button>

      <WebsiteHeader website={site} />
      
      <WebsiteScreenshots screenshots={site.screenshots} />
      
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 lg:w-auto">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="stats">Statistics</TabsTrigger>
          <TabsTrigger value="milestones">Milestones</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">About</h2>
              <p className="text-muted-foreground">{site.about}</p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">Technology Stack</h2>
              <ul className="list-disc pl-4 text-muted-foreground space-y-2">
                {site.techStack.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="stats">
          <WebsiteStats stats={site.stats} />
        </TabsContent>
        
        <TabsContent value="milestones">
          <WebsiteMilestones milestones={site.milestones} />
        </TabsContent>
        
        <TabsContent value="reviews">
          <WebsiteReviews reviews={site.reviews} />
        </TabsContent>
      </Tabs>
    </div>
  );
}