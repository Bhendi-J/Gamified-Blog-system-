"use client"

import { useState } from "react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Award, Trophy, Users } from "lucide-react"

// Sample leaderboard data
const users = [
  {
    id: 1,
    name: "Sarah Johnson",
    username: "sarahj",
    avatar: "/placeholder.svg?height=40&width=40",
    points: 12450,
    level: 24,
    nextLevelPoints: 15000,
    rank: 1,
    badges: ["Top Writer", "Consistent Contributor", "Trending Author"],
    following: false,
    stats: {
      posts: 87,
      followers: 1243,
      following: 356,
    },
  },
  {
    id: 2,
    name: "Michael Chen",
    username: "mikechen",
    avatar: "/placeholder.svg?height=40&width=40",
    points: 11200,
    level: 22,
    nextLevelPoints: 12000,
    rank: 2,
    badges: ["AI Expert", "Top Commenter"],
    following: true,
    stats: {
      posts: 64,
      followers: 982,
      following: 215,
    },
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    username: "emmar",
    avatar: "/placeholder.svg?height=40&width=40",
    points: 9800,
    level: 19,
    nextLevelPoints: 10000,
    rank: 3,
    badges: ["Rising Star", "Sustainability Champion"],
    following: false,
    stats: {
      posts: 42,
      followers: 756,
      following: 189,
    },
  },
  {
    id: 4,
    name: "David Park",
    username: "davidp",
    avatar: "/placeholder.svg?height=40&width=40",
    points: 8500,
    level: 17,
    nextLevelPoints: 9000,
    rank: 4,
    badges: ["Finance Guru"],
    following: false,
    stats: {
      posts: 38,
      followers: 612,
      following: 124,
    },
  },
  {
    id: 5,
    name: "Olivia Thompson",
    username: "oliviat",
    avatar: "/placeholder.svg?height=40&width=40",
    points: 7600,
    level: 15,
    nextLevelPoints: 8000,
    rank: 5,
    badges: ["Productivity Master", "Mental Health Advocate"],
    following: true,
    stats: {
      posts: 29,
      followers: 543,
      following: 201,
    },
  },
  {
    id: 6,
    name: "James Wilson",
    username: "jamesw",
    avatar: "/placeholder.svg?height=40&width=40",
    points: 6900,
    level: 14,
    nextLevelPoints: 7500,
    rank: 6,
    badges: ["Travel Expert"],
    following: false,
    stats: {
      posts: 25,
      followers: 487,
      following: 156,
    },
  },
  {
    id: 7,
    name: "Sophia Lee",
    username: "sophial",
    avatar: "/placeholder.svg?height=40&width=40",
    points: 6200,
    level: 13,
    nextLevelPoints: 7000,
    rank: 7,
    badges: ["Creative Writer"],
    following: false,
    stats: {
      posts: 22,
      followers: 412,
      following: 98,
    },
  },
  {
    id: 8,
    name: "Daniel Brown",
    username: "danielb",
    avatar: "/placeholder.svg?height=40&width=40",
    points: 5800,
    level: 12,
    nextLevelPoints: 6500,
    rank: 8,
    badges: ["Tech Reviewer"],
    following: true,
    stats: {
      posts: 19,
      followers: 378,
      following: 112,
    },
  },
  {
    id: 9,
    name: "Ava Martinez",
    username: "avam",
    avatar: "/placeholder.svg?height=40&width=40",
    points: 5100,
    level: 11,
    nextLevelPoints: 6000,
    rank: 9,
    badges: ["Health & Wellness"],
    following: false,
    stats: {
      posts: 17,
      followers: 321,
      following: 87,
    },
  },
  {
    id: 10,
    name: "Noah Taylor",
    username: "noaht",
    avatar: "/placeholder.svg?height=40&width=40",
    points: 4700,
    level: 10,
    nextLevelPoints: 5500,
    rank: 10,
    badges: ["Sports Analyst"],
    following: false,
    stats: {
      posts: 15,
      followers: 289,
      following: 76,
    },
  },
]

export default function LeaderboardPage() {
  const [leaderboardUsers, setLeaderboardUsers] = useState(users)
  const [timeframe, setTimeframe] = useState("all-time")

  const handleFollow = (userId) => {
    setLeaderboardUsers(
      leaderboardUsers.map((user) => {
        if (user.id === userId) {
          return { ...user, following: !user.following }
        }
        return user
      }),
    )
    // In a real app, you would send a request to your API to update the follow status
  }

  const getRankColor = (rank) => {
    switch (rank) {
      case 1:
        return "text-yellow-500"
      case 2:
        return "text-gray-400"
      case 3:
        return "text-amber-600"
      default:
        return "text-muted-foreground"
    }
  }

  const getRankIcon = (rank) => {
    if (rank <= 3) {
      return <Trophy className={`w-5 h-5 ${getRankColor(rank)}`} />
    }
    return <span className={`font-bold ${getRankColor(rank)}`}>{rank}</span>
  }

  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="flex flex-col items-center justify-center mb-12 text-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Leaderboard</h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          Discover our top contributors and most active community members
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Top Contributors</CardTitle>
              <Tabs value={timeframe} onValueChange={setTimeframe}>
                <TabsList>
                  <TabsTrigger value="weekly">Weekly</TabsTrigger>
                  <TabsTrigger value="monthly">Monthly</TabsTrigger>
                  <TabsTrigger value="all-time">All Time</TabsTrigger>
                </TabsList>
              </Tabs>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {leaderboardUsers.map((user) => (
                  <div
                    key={user.id}
                    className="flex items-center gap-4 p-4 transition-colors border rounded-lg hover:bg-muted/50"
                  >
                    <div className="flex items-center justify-center w-8 h-8">{getRankIcon(user.rank)}</div>

                    <Avatar className="w-12 h-12 border">
                      <AvatarImage src={user.avatar} />
                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>

                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <Link href={`/profile/${user.id}`} className="font-medium hover:underline">
                            {user.name}
                          </Link>
                          <p className="text-sm text-muted-foreground">@{user.username}</p>
                        </div>

                        <div className="flex items-center gap-2 mt-2 md:mt-0">
                          <div className="flex items-center gap-1 text-sm">
                            <Award className="w-4 h-4 text-primary" />
                            <span>Level {user.level}</span>
                          </div>
                          <div className="flex items-center gap-1 text-sm">
                            <Users className="w-4 h-4 text-muted-foreground" />
                            <span>{user.stats.followers}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mt-2">
                        <Progress value={(user.points / user.nextLevelPoints) * 100} className="h-2 flex-1" />
                        <span className="text-xs text-muted-foreground whitespace-nowrap">
                          {user.points}/{user.nextLevelPoints} XP
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-2">
                        {user.badges.map((badge) => (
                          <Badge key={badge} variant="outline" className="text-xs">
                            {badge}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button
                      variant={user.following ? "default" : "outline"}
                      size="sm"
                      onClick={() => handleFollow(user.id)}
                    >
                      {user.following ? "Following" : "Follow"}
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Your Ranking</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12 border">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                    <AvatarFallback>YO</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-medium">Your Profile</p>
                    <p className="text-sm text-muted-foreground">@yourname</p>

                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center gap-1 text-sm">
                        <Award className="w-4 h-4 text-primary" />
                        <span>Level 8</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <span className="font-medium text-muted-foreground">Rank:</span>
                        <span>42</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mt-2">
                      <Progress value={75} className="h-2 flex-1" />
                      <span className="text-xs text-muted-foreground whitespace-nowrap">3200/4000 XP</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 mt-4 text-center">
                  <div className="p-2 rounded-lg bg-muted/50">
                    <p className="text-lg font-medium">12</p>
                    <p className="text-xs text-muted-foreground">Posts</p>
                  </div>
                  <div className="p-2 rounded-lg bg-muted/50">
                    <p className="text-lg font-medium">156</p>
                    <p className="text-xs text-muted-foreground">Followers</p>
                  </div>
                  <div className="p-2 rounded-lg bg-muted/50">
                    <p className="text-lg font-medium">84</p>
                    <p className="text-xs text-muted-foreground">Following</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 text-center">
                <Link href="/profile">
                  <Button variant="outline" className="w-full">
                    View Your Profile
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How to Earn Points</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center justify-between">
                  <span>Publishing a blog post</span>
                  <Badge>+100 XP</Badge>
                </li>
                <li className="flex items-center justify-between">
                  <span>Receiving a like</span>
                  <Badge>+5 XP</Badge>
                </li>
                <li className="flex items-center justify-between">
                  <span>Receiving a comment</span>
                  <Badge>+10 XP</Badge>
                </li>
                <li className="flex items-center justify-between">
                  <span>Commenting on a post</span>
                  <Badge>+2 XP</Badge>
                </li>
                <li className="flex items-center justify-between">
                  <span>Daily login streak</span>
                  <Badge>+20 XP</Badge>
                </li>
                <li className="flex items-center justify-between">
                  <span>Featured on homepage</span>
                  <Badge>+200 XP</Badge>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Badges</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                <div className="p-3 text-center border rounded-lg">
                  <div className="flex items-center justify-center w-10 h-10 mx-auto mb-2 rounded-full bg-primary/10">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-sm font-medium">Top Writer</p>
                </div>
                <div className="p-3 text-center border rounded-lg">
                  <div className="flex items-center justify-center w-10 h-10 mx-auto mb-2 rounded-full bg-primary/10">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-sm font-medium">Rising Star</p>
                </div>
                <div className="p-3 text-center border rounded-lg">
                  <div className="flex items-center justify-center w-10 h-10 mx-auto mb-2 rounded-full bg-muted/50">
                    <Award className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <p className="text-sm font-medium text-muted-foreground">Trendsetter</p>
                </div>
                <div className="p-3 text-center border rounded-lg">
                  <div className="flex items-center justify-center w-10 h-10 mx-auto mb-2 rounded-full bg-muted/50">
                    <Award className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <p className="text-sm font-medium text-muted-foreground">Consistent</p>
                </div>
              </div>

              <div className="mt-4 text-center">
                <Link href="/badges">
                  <Button variant="outline" className="w-full">
                    View All Badges
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

