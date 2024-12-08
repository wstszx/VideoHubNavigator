import { MediaSite } from '@/types';

export const docuworld: MediaSite = {
  id: "docuworld",
  name: "DocuWorld",
  logo: "https://images.unsplash.com/photo-1578496781985-452d4a934d50?w=128&h=128&fit=crop",
  preview: "https://images.unsplash.com/photo-1578496781379-7dcfb995293d?w=1200&h=800&fit=crop",
  description: "Premium documentary streaming platform featuring award-winning films and series across nature, science, history, and culture",
  features: ["8K Nature Content", "Interactive Maps", "Educational Resources"],
  url: "https://example.com/docuworld",
  category: "documentary",
  ratings: {
    userInterface: 5,
    functionality: 4,
    performance: 5,
    contentQuality: 5,
    userExperience: 4
  },
  analysis: {
    strengths: [
      "High-quality documentary content",
      "Educational resources and study guides",
      "Interactive features and maps",
      "Expert commentary tracks"
    ],
    improvements: [
      "Limited offline viewing options",
      "Could expand interactive features",
      "More language support needed"
    ],
    suggestions: [
      {
        feature: "Virtual Reality Tours",
        implementation: "360-degree VR experiences for nature and historical documentaries",
        value: "Creates immersive educational experiences",
        difficulty: "Hard",
        priority: "High"
      },
      {
        feature: "Learning Pathways",
        implementation: "Curated documentary series with educational objectives",
        value: "Enhances educational value and user engagement",
        difficulty: "Medium",
        priority: "Medium"
      }
    ],
    competitiveAnalysis: "Leading platform for educational documentaries with unique interactive features, competing well against general streaming services in the documentary category."
  },
  screenshots: [
    {
      url: "https://images.unsplash.com/photo-1578496781379-7dcfb995293d?w=1200&h=800&fit=crop",
      caption: "Homepage showcasing featured documentaries"
    },
    {
      url: "https://images.unsplash.com/photo-1578496780177-c83ee4db2bcd?w=1200&h=800&fit=crop",
      caption: "Interactive map feature for location-based content"
    },
    {
      url: "https://images.unsplash.com/photo-1578496781291-b73ca5ae2936?w=1200&h=800&fit=crop",
      caption: "Educational resources and study guides"
    }
  ],
  about: "DocuWorld is dedicated to bringing the highest quality documentary content to audiences worldwide. Our platform features award-winning films and series across nature, science, history, and culture, complemented by interactive features and educational resources.",
  techStack: [
    "Angular for the frontend",
    "Python Django backend",
    "PostgreSQL for structured data",
    "Redis for caching",
    "AWS for cloud infrastructure",
    "Three.js for interactive 3D content",
    "Elasticsearch for content discovery"
  ],
  tags: ["Documentary", "Educational", "Nature", "Science", "History"],
  launchDate: "April 2023",
  totalUsers: 800000,
  stats: {
    dailyActiveUsers: 150000,
    dailyActiveUsersGrowth: 10,
    dailyActiveUsersHistory: Array.from({ length: 30 }, (_, i) => ({
      date: `2023-${String(i + 1).padStart(2, '0')}-01`,
      value: Math.floor(130000 + Math.random() * 40000)
    })),
    totalUsers: 800000,
    totalUsersGrowth: 15,
    totalUsersHistory: Array.from({ length: 30 }, (_, i) => ({
      date: `2023-${String(i + 1).padStart(2, '0')}-01`,
      value: Math.floor(600000 + (i * 20000) + Math.random() * 10000)
    })),
    engagementRate: 70,
    engagementRateGrowth: 6,
    engagementRateHistory: Array.from({ length: 30 }, (_, i) => ({
      date: `2023-${String(i + 1).padStart(2, '0')}-01`,
      value: Math.floor(65 + Math.random() * 10)
    })),
    userSatisfaction: 90,
    userSatisfactionGrowth: 5,
    userSatisfactionHistory: Array.from({ length: 30 }, (_, i) => ({
      date: `2023-${String(i + 1).padStart(2, '0')}-01`,
      value: Math.floor(85 + Math.random() * 8)
    }))
  },
  milestones: [
    {
      date: "April 2023",
      type: "Launch",
      title: "Platform Launch",
      description: "Launched with 300+ premium documentaries"
    },
    {
      date: "June 2023",
      type: "Feature",
      title: "Interactive Maps",
      description: "Released interactive map feature for location-based content discovery"
    },
    {
      date: "August 2023",
      type: "Achievement",
      title: "Educational Partnership",
      description: "Partnered with leading educational institutions"
    },
    {
      date: "October 2023",
      type: "Update",
      title: "8K Nature Series",
      description: "Introduced exclusive 8K nature documentary series"
    }
  ],
  reviews: [
    {
      userName: "David Wilson",
      userAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&fit=crop",
      date: "October 25, 2023",
      rating: 5,
      comment: "The 8K nature documentaries are breathtaking! The interactive maps add so much context.",
      response: "Thanks David! We're glad you're enjoying our high-quality content and interactive features."
    },
    {
      userName: "Maria Garcia",
      userAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop",
      date: "October 22, 2023",
      rating: 4,
      comment: "Excellent educational resources. My students love using the platform for research."
    },
    {
      userName: "James Thompson",
      userAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&fit=crop",
      date: "October 20, 2023",
      rating: 5,
      comment: "The expert commentary tracks add incredible value to the viewing experience!"
    }
  ]
};