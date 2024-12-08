import { WebsiteInfo, WebsiteStats, Milestone, Review } from './website';

export interface MediaSite extends WebsiteInfo {
  id: string;
  name: string;
  logo: string;
  preview: string;
  description: string;
  features: string[];
  url: string;
  category: MediaCategory;
  ratings: SiteRatings;
  analysis: SiteAnalysis;
  screenshots: Array<{ url: string; caption: string }>;
  about: string;
  techStack: string[];
  stats: WebsiteStats;
  milestones: Milestone[];
  reviews: Review[];
  tags: string[];
}

export type MediaCategory = 'movies' | 'tv' | 'anime' | 'documentary' | 'all';

export interface SiteRatings {
  userInterface: number;
  functionality: number;
  performance: number;
  contentQuality: number;
  userExperience: number;
}

export interface SiteAnalysis {
  strengths: string[];
  improvements: string[];
  suggestions: Suggestion[];
  competitiveAnalysis: string;
}

export interface Suggestion {
  feature: string;
  implementation: string;
  value: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  priority: 'Low' | 'Medium' | 'High';
}