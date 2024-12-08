import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WebsiteStats as WebsiteStatsType } from "@/types/website";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

interface WebsiteStatsProps {
  stats: WebsiteStatsType;
}

export function WebsiteStats({ stats }: WebsiteStatsProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Daily Active Users</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.dailyActiveUsers.toLocaleString()}</div>
          <p className="text-xs text-muted-foreground">
            +{stats.dailyActiveUsersGrowth}% from last month
          </p>
          <div className="h-[80px] mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={stats.dailyActiveUsersHistory}>
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Users</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.totalUsers.toLocaleString()}</div>
          <p className="text-xs text-muted-foreground">
            +{stats.totalUsersGrowth}% from last month
          </p>
          <div className="h-[80px] mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={stats.totalUsersHistory}>
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Engagement Rate</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.engagementRate}%</div>
          <p className="text-xs text-muted-foreground">
            +{stats.engagementRateGrowth}% from last month
          </p>
          <div className="h-[80px] mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={stats.engagementRateHistory}>
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">User Satisfaction</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.userSatisfaction}%</div>
          <p className="text-xs text-muted-foreground">
            +{stats.userSatisfactionGrowth}% from last month
          </p>
          <div className="h-[80px] mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={stats.userSatisfactionHistory}>
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}