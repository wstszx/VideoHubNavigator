import { MediaSite } from '@/types';
import { websiteData } from './website-detail';

export const mediaSites: MediaSite[] = [
  {
    ...websiteData,
    category: 'movies',
    ratings: {
      userInterface: 4,
      functionality: 5,
      performance: 4,
      contentQuality: 5,
      userExperience: 4
    },
    analysis: {
      strengths: [
        'Extensive movie library spanning multiple genres',
        'High-quality streaming with 4K HDR support',
        'Intuitive recommendation system',
        'Robust offline viewing capabilities'
      ],
      improvements: [
        'Mobile app performance could be optimized',
        'Limited regional availability',
        'Search filters could be more granular'
      ],
      suggestions: [
        {
          feature: 'Social Watching Features',
          implementation: 'Implement virtual watch parties with chat and reaction features',
          value: 'Increases user engagement and platform stickiness',
          difficulty: 'Medium',
          priority: 'High'
        },
        {
          feature: 'Advanced Content Discovery',
          implementation: 'AI-powered recommendation engine with mood-based suggestions',
          value: 'Improves content discovery and user satisfaction',
          difficulty: 'Hard',
          priority: 'Medium'
        }
      ],
      competitiveAnalysis: 'Leading in terms of content quality and streaming technology, but faces strong competition in original content production and pricing strategy.'
    },
    features: ['4K HDR Support', 'Offline Downloads', 'Curated Collections']
  },
  // ... other sites remain the same
];