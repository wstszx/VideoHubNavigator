import { MediaSite } from '@/types';

export const animeverse: MediaSite = {
  id: "animeverse",
  name: "AnimeVerse",
  logo: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=128&h=128&fit=crop",
  preview: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?w=1200&h=800&fit=crop",
  description: "The ultimate destination for anime fans, featuring simulcasts, exclusive content, and a vibrant community",
  features: ["Simulcast Streaming", "Manga Library", "Community Forums"],
  url: "https://example.com/animeverse",
  category: "anime",
  ratings: {
    userInterface: 5,
    functionality: 4,
    performance: 5,
    contentQuality: 5,
    userExperience: 5
  },
  analysis: {
    strengths: [
      "Extensive anime library with simulcast releases",
      "Active community features and forums",
      "High-quality video streaming",
      "Integrated manga reading platform"
    ],
    improvements: [
      "Mobile app needs offline viewing support",
      "Limited dubbing options for some titles",
      "Community moderation tools could be enhanced"
    ],
    suggestions: [
      {
        feature: "AI-Powered Translation",
        implementation: "Real-time subtitle generation and translation for all content",
        value: "Expands accessibility to international audiences",
        difficulty: "Hard",
        priority: "High"
      },
      {
        feature: "Interactive Episode Guides",
        implementation: "Community-driven episode guides with spoiler protection",
        value: "Enhances viewing experience and community engagement",
        difficulty: "Medium",
        priority: "Medium"
      }
    ],
    competitiveAnalysis: "Market leader in anime streaming with unique community features, though facing increasing competition from general streaming platforms entering the anime market."
  },
  screenshots: [
    {
      url: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?w=1200&h=800&fit=crop",
      caption: "Discover page showcasing latest releases and popular series"
    },
    {
      url: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1200&h=800&fit=crop",
      caption: "Community forum with active discussions"
    },
    {
      url: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=1200&h=800&fit=crop",
      caption: "Integrated manga reader with customizable interface"
    }
  ],
  about: "AnimeVerse is the premier destination for anime enthusiasts worldwide. We offer the latest simulcasts from Japan, a vast library of classic series, and an integrated manga reading platform. Our vibrant community features enable fans to connect, discuss, and share their passion for anime.",
  techStack: [
    "Vue.js for the frontend",
    "Ruby on Rails backend",
    "MongoDB for flexible content storage",
    "Redis for real-time features",
    "CloudFlare for global content delivery",
    "WebSocket for real-time chat",
    "Elasticsearch for advanced search"
  ],
  tags: ["Anime", "Manga", "Streaming", "Community"],
  launchDate: "March 2023",
  totalUsers: 2000000,
  stats: {
    dailyActiveUsers: 400000,
    dailyActiveUsersGrowth: 20,
    dailyActiveUsersHistory: Array.from({ length: 30 }, (_, i) => ({
      date: `2023-${String(i + 1).padStart(2, '0')}-01`,
      value: Math.floor(350000 + Math.random() * 100000)
    })),
    totalUsers: 2000000,
    totalUsersGrowth: 12,
    totalUsersHistory: Array.from({ length: 30 }, (_, i) => ({
      date: `2023-${String(i + 1).padStart(2, '0')}-01`,
      value: Math.floor(1500000 + (i * 60000) + Math.random() * 30000)
    })),
    engagementRate: 75,
    engagementRateGrowth: 8,
    engagementRateHistory: Array.from({ length: 30 }, (_, i) => ({
      date: `2023-${String(i + 1).padStart(2, '0')}-01`,
      value: Math.floor(70 + Math.random() * 10)
    })),
    userSatisfaction: 95,
    userSatisfactionGrowth: 4,
    userSatisfactionHistory: Array.from({ length: 30 }, (_, i) => ({
      date: `2023-${String(i + 1).padStart(2, '0')}-01`,
      value: Math.floor(90 + Math.random() * 8)
    }))
  },
  milestones: [
    {
      date: "March 2023",
      type: "Launch",
      title: "Platform Launch",
      description: "Launched with 500+ anime series and manga titles"
    },
    {
      date: "May 2023",
      type: "Feature",
      title: "Manga Reader Integration",
      description: "Added integrated manga reading platform with 1000+ titles"
    },
    {
      date: "July 2023",
      type: "Achievement",
      title: "1.5 Million Users",
      description: "Reached 1.5 million active users globally"
    },
    {
      date: "September 2023",
      type: "Update",
      title: "Community Features",
      description: "Launched enhanced community features including forums and user profiles"
    }
  ],
  reviews: [
    {
      userName: "Yuki Tanaka",
      userAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&fit=crop",
      date: "October 20, 2023",
      rating: 5,
      comment: "The simulcast releases are so fast, and the manga reader is amazing! Best anime platform ever!",
      response: "Thank you, Yuki! We're committed to bringing you the latest content as quickly as possible."
    },
    {
      userName: "Alex Wong",
      userAvatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=96&h=96&fit=crop",
      date: "October 18, 2023",
      rating: 4,
      comment: "Great selection of anime and manga. The community features make discovering new series easy."
    },
    {
      userName: "Lisa Chen",
      userAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop",
      date: "October 15, 2023",
      rating: 5,
      comment: "The streaming quality is perfect, and I love the community discussions after each episode!"
    }
  ]
};