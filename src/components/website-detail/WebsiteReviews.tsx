import { Review } from "@/types/website";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { StarIcon } from "lucide-react";

interface WebsiteReviewsProps {
  reviews: Review[];
}

export function WebsiteReviews({ reviews }: WebsiteReviewsProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {reviews.map((review, index) => (
        <Card key={index} className="material-card">
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={review.userAvatar} />
                  <AvatarFallback>{review.userName.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">{review.userName}</div>
                  <div className="text-sm text-muted-foreground">{review.date}</div>
                </div>
              </div>
              
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon
                    key={i}
                    className={cn(
                      "h-4 w-4",
                      i < review.rating
                        ? "fill-primary text-primary"
                        : "fill-muted text-muted"
                    )}
                  />
                ))}
              </div>
              
              <p className="text-muted-foreground">{review.comment}</p>
              
              {review.response && (
                <div className="pl-4 border-l-2 border-muted mt-4">
                  <div className="font-semibold">Response from team:</div>
                  <p className="text-sm text-muted-foreground">{review.response}</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}