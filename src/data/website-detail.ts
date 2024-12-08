import { WebsiteInfo, WebsiteStats, Milestone, Review } from "@/types/website";

export const websiteData = {
  id: "1",
  name: "CineStream",
  logo: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=128&h=128&fit=crop",
  description: "Premium movie streaming platform with extensive collection of classic and contemporary films",
  tags: ["Streaming", "Entertainment", "Movies", "TV Shows"],
  launchDate: "January 2023",
  totalUsers: 1500000,
  url: "https://example.com/cinestream",
  
  screenshots: [
    {
      url: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=1200&h=800&fit=crop",
      caption: "Homepage featuring curated content and personalized recommendations"
    },
    {
      url: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=1200&h=800&fit=crop",
      caption: "Movie detail page with cast information and related content"
    },
    {
      url: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1200&h=800&fit=crop",
      caption: "Watch party feature for social viewing experience"
    }
  ],
  
  about: "CineStream revolutionizes the way people experience movies and TV shows online. Our platform combines cutting-edge streaming technology with thoughtfully curated content to deliver an unmatched viewing experience. We focus on both mainstream hits and critically acclaimed independent films, ensuring there's something for every type of viewer.",
  
  techStack: [
    "React with Next.js for the frontend",
    "Node.js and Express for the backend",
    "PostgreSQL for the main database",
    "Redis for caching and real-time features",
    "AWS CloudFront for content delivery",
    "WebRTC for watch party features",
    "ElasticSearch for advanced content search"
  ],
  
  stats: {
    dailyActiveUsers: 250000,
    dailyActiveUsersGrowth: 15,
    dailyActiveUsersHistory: Array.from({ length: 30 }, (_, i) => ({
      date: `2023-${String(i + 1).padStart(2, '0')}-01`,
      value: Math.floor(200000 + Math.random() * 100000)
    })),
    
    totalUsers: 1500000,
    totalUsersGrowth: 8,
    totalUsersHistory: Array.from({ length: 30 }, (_, i) => ({
      date: `2023-${String(i + 1).padStart(2, '0')}-01`,
      value: Math.floor(1000000 + (i * 50000) + Math.random() * 25000)
    })),
    
    engagementRate: 65,
    engagementRateGrowth: 5,
    engagementRateHistory: Array.from({ length: 30 }, (_, i) => ({
      date: `2023-${String(i + 1).padStart(2, '0')}-01`,
      value: Math.floor(60 + Math.random() * 10)
    })),
    
    userSatisfaction: 92,
    userSatisfactionGrowth: 3,
    userSatisfactionHistory: Array.from({ length: 30 }, (_, i) => ({
      date: `2023-${String(i + 1).padStart(2, '0')}-01`,
      value: Math.floor(88 + Math.random() * 8)
    }))
  },
  
  milestones: [
    {
      date: "January 2023",
      type: "Launch",
      title: "Platform Launch",
      description: "Successfully launched CineStream with an initial library of 1000+ titles"
    },
    {
      date: "March 2023",
      type: "Feature",
      title: "Watch Party Release",
      description: "Introduced social viewing feature allowing users to watch together remotely"
    },
    {
      date: "June 2023",
      type: "Achievement",
      title: "1 Million Users",
      description: "Reached one million registered users milestone"
    },
    {
      date: "September 2023",
      type: "Update",
      title: "Mobile Apps Launch",
      description: "Released native mobile applications for iOS and Android platforms"
    }
  ],
  
  reviews: [
    {
      userName: "Sarah Johnson",
      userAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop",
      date: "October 15, 2023",
      rating: 5,
      comment: "The watch party feature is amazing! I love being able to watch movies with friends even when we're apart.",
      response: "Thank you for the kind words, Sarah! We're glad you're enjoying the watch party feature."
    },
    {
      userName: "Michael Chen",
      userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop",
      date: "October 12, 2023",
      rating: 4,
      comment: "Great selection of independent films. The recommendation system is spot-on!"
    },
    {
      userName: "Emma Davis",
      userAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&fit=crop",
      date: "October 10, 2023",
      rating: 5,
      comment: "The streaming quality is excellent, and I love the curated collections. Perfect for movie nights!"
    }
  ]
} as const;