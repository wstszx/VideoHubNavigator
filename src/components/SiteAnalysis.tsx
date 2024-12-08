import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { SiteAnalysis as ISiteAnalysis } from "@/types";

interface SiteAnalysisProps {
  analysis: ISiteAnalysis;
}

export function SiteAnalysis({ analysis }: SiteAnalysisProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="strengths">
        <AccordionTrigger>Key Strengths</AccordionTrigger>
        <AccordionContent>
          <ul className="list-disc pl-4 space-y-1">
            {analysis.strengths.map((strength, index) => (
              <li key={index}>{strength}</li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="improvements">
        <AccordionTrigger>Areas for Improvement</AccordionTrigger>
        <AccordionContent>
          <ul className="list-disc pl-4 space-y-1">
            {analysis.improvements.map((improvement, index) => (
              <li key={index}>{improvement}</li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="suggestions">
        <AccordionTrigger>Feature Suggestions</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-4">
            {analysis.suggestions.map((suggestion, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">{suggestion.feature}</h4>
                  <div className="flex gap-2">
                    <Badge variant="outline">{suggestion.difficulty}</Badge>
                    <Badge 
                      variant="default" 
                      className={
                        suggestion.priority === 'High' 
                          ? 'bg-destructive' 
                          : suggestion.priority === 'Medium' 
                          ? 'bg-orange-500' 
                          : 'bg-muted'
                      }
                    >
                      {suggestion.priority}
                    </Badge>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{suggestion.implementation}</p>
                <p className="text-sm">Value: {suggestion.value}</p>
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="competitive">
        <AccordionTrigger>Competitive Analysis</AccordionTrigger>
        <AccordionContent>
          <p className="text-sm text-muted-foreground">{analysis.competitiveAnalysis}</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}