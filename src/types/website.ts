export interface WebsiteInfo {
  id: string;
  name: string;
  logo: string;
  description: string;
  tags: string[];
  launchDate: string;
  totalUsers: number;
  url: string;
}

export interface WebsiteStats {
  dailyActiveUsers: number;
  dailyActiveUsersGrowth: number;
  dailyActiveUsersHistory: Array<{ date: string; value: number }>;
  
  totalUsers: number;
  totalUsersGrowth: number;
  totalUsersHistory: Array<{ date: string; value: number }>;
  
  engagementRate: number;
  engagementRateGrowth: number;
  engagementRateHistory: Array<{ date: string; value: number }>;
  
  userSatisfaction: number;
  userSatisfactionGrowth: number;
  userSatisfactionHistory: Array<{ date: string; value: number }>;
}

export interface Milestone {
  date: string;
  type: 'Launch' | 'Feature' | 'Achievement' | 'Update';
  title: string;
  description: string;
}

export interface Review {
  userName: string;
  userAvatar: string;
  date: string;
  rating: number;
  comment: string;
  response?: string;
}