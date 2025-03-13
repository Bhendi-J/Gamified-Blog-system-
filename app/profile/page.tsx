"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import {
  Award,
  BookOpen,
  Calendar,
  Edit,
  Heart,
  LinkIcon,
  MapPin,
  MessageSquare,
  Settings,
  Share2,
  User,
  Users,
} from "lucide-react"

// Sample user profile data
const userProfile = {
  id: 999,
  name: "Alex Morgan",
  username: "alexmorgan",
  avatar: "/placeholder.svg?height=200&width=200",
  coverImage: "/placeholder.svg?height=400&width=1200",
  bio: "Writer, developer, and coffee enthusiast. Sharing thoughts on technology, productivity, and personal growth.",
  location: "San Francisco, CA",
  website: "https://alexmorgan.com",
  joinedDate: "January 2023",
  stats: {
    posts: 24,
    followers: 1256,
    following: 342,
  },
  points: 3200,
  level: 8,
  nextLevelPoints: 4000,
  badges: [
    { name: "Top Writer", category: "Technology" },
    { name: "Rising Star", category: "General" },
  ],
  socialLinks: {
    twitter: "https://twitter.com/alexmorgan",
    github: "https://github.com/alexmorgan",
    linkedin: "https://linkedin.com/in/alexmorgan",
  },
}

// Sample blog posts data
const userPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js 14",
    excerpt: "Learn how to build modern web applications with Next.js 14 and its new features.",
    coverImage: "/placeholder.svg?height=200&width=400",
    category: "Technology",
    createdAt: "2 weeks ago",
    readTime: "5 min read",
    stats: {
      likes: 124,
      comments: 32,
      shares: 18,
    },
  },
  {
    id: 2,
    title: "The Power of Atomic Habits",
    excerpt: "How small changes can lead to remarkable results in your personal and professional life.",
    coverImage: "/placeholder.svg?height=200&width=400",
    category: "Productivity",
    createdAt: "1 month ago",
    readTime: "7 min read",
    stats: {
      likes: 98,
      comments: 24,
      shares: 12,
    },
  },
  {
    id: 3,
    title: "Understanding React Server Components",
    excerpt: "A deep dive into React Server Components and how they change the way we build React applications.",
    coverImage: "/placeholder.svg?height=200&width=400",
    category: "Technology",
    createdAt: "2 months ago",
    readTime: "8 min read",
    stats: {
      likes: 156,
      comments: 42,
      shares: 28,
    },
  },
]

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("posts")

  return (
    <div>
      <div className="relative h-48 md:h-64 lg:h-80">
        <Image src={userProfile.coverImage || "/placeholder.svg"} alt="Cover" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
      </div>

      <div className="container px-4 mx-auto -mt-20">
        <div className="flex flex-col items-center md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col items-center md:flex-row md:items-end gap-4">
            <Avatar className="w-32 h-32 border-4 border-background">
              <AvatarImage src={userProfile.avatar} />
              <AvatarFallback>{userProfile.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="text-center md:text-left">
              <h1 className="text-2xl font-bold md:text-3xl">{userProfile.name}</h1>
              <p className="text-muted-foreground">@{userProfile.username}</p>
            </div>
          </div>

          <div className="flex gap-2 mt-4 md:mt-0">
            <Link href="/settings">
              <Button variant="outline" size="sm" className="gap-2">
                <Settings className="w-4 h-4" />
                <span className="hidden md:inline">Settings</span>
              </Button>
            </Link>
            <Button variant="outline" size="sm" className="gap-2">
              <Share2 className="w-4 h-4" />
              <span className="hidden md:inline">Share</span>
            </Button>
            <Button size="sm" className="gap-2">
              <Edit className="w-4 h-4" />
              <span className="hidden md:inline">Edit Profile</span>
            </Button>
          </div>
        </div>

        <div className="grid gap-6 mt-8 md:grid-cols-3">
          <div className="md:col-span-1 space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h2 className="text-xl font-bold">About</h2>
                    <p className="mt-2 text-muted-foreground">{userProfile.bio}</p>
                  </div>

                  <div className="space-y-2">
                    {userProfile.location && (
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        <span>{userProfile.location}</span>
                      </div>
                    )}
                    {userProfile.website && (
                      <div className="flex items-center gap-2">
                        <LinkIcon className="w-4 h-4 text-muted-foreground" />
                        <a
                          href={userProfile.website}
                          className="text-primary hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {userProfile.website.replace(/^https?:\/\//, "")}
                        </a>
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span>Joined {userProfile.joinedDate}</span>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-medium">Level Progress</h3>
                    <div className="flex items-center gap-2 mt-2">
                      <Award className="w-5 h-5 text-primary" />
                      <span className="font-medium">Level {userProfile.level}</span>
                    </div>

                    <div className="flex items-center gap-2 mt-2">
                      <Progress value={(userProfile.points / userProfile.nextLevelPoints) * 100} className="h-2" />
                      <span className="text-xs text-muted-foreground">
                        {userProfile.points}/{userProfile.nextLevelPoints} XP
                      </span>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-medium">Badges</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {userProfile.badges.map((badge) => (
                        <Badge key={badge.name} variant="outline" className="flex items-center gap-1">
                          <Award className="w-3 h-3" />
                          {badge.name} ({badge.category})
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold">{userProfile.stats.posts}</p>
                    <p className="text-sm text-muted-foreground">Posts</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{userProfile.stats.followers}</p>
                    <p className="text-sm text-muted-foreground">Followers</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{userProfile.stats.following}</p>
                    <p className="text-sm text-muted-foreground">Following</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-2">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="posts" className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span>Posts</span>
                </TabsTrigger>
                <TabsTrigger value="likes" className="flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  <span>Likes</span>
                </TabsTrigger>
                <TabsTrigger value="comments" className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  <span>Comments</span>
                </TabsTrigger>
                <TabsTrigger value="followers" className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>Network</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="posts" className="mt-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold">Published Posts</h2>
                  <Link href="/blogs/create">
                    <Button size="sm">New Post</Button>
                  </Link>
                </div>

                <div className="space-y-6">
                  {userPosts.map((post) => (
                    <Link href={`/blogs/${post.id}`} key={post.id}>
                      <Card className="overflow-hidden transition-all hover:shadow-md">
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="relative h-48 md:h-full">
                            <Image
                              src={post.coverImage || "/placeholder.svg"}
                              alt={post.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="p-4 md:col-span-2">
                            <div className="flex items-center justify-between mb-2">
                              <Badge variant="outline">{post.category}</Badge>
                              <span className="text-xs text-muted-foreground">{post.readTime}</span>
                            </div>
                            <h3 className="mb-2 text-xl font-bold">{post.title}</h3>
                            <p className="mb-4 text-muted-foreground">{post.excerpt}</p>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-muted-foreground">{post.createdAt}</span>
                              <div className="flex items-center gap-4 text-muted-foreground">
                                <div className="flex items-center gap-1">
                                  <Heart className="w-4 h-4" />
                                  <span className="text-xs">{post.stats.likes}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <MessageSquare className="w-4 h-4" />
                                  <span className="text-xs">{post.stats.comments}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Share2 className="w-4 h-4" />
                                  <span className="text-xs">{post.stats.shares}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </Link>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="likes" className="mt-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold">Liked Posts</h2>
                </div>

                <Card className="p-6 text-center">
                  <div className="flex flex-col items-center justify-center py-12">
                    <Heart className="w-12 h-12 mb-4 text-muted-foreground" />
                    <h3 className="mb-2 text-xl font-medium">No liked posts yet</h3>
                    <p className="mb-4 text-muted-foreground">When you like a post, it will appear here.</p>
                    <Link href="/blogs">
                      <Button>Explore Blogs</Button>
                    </Link>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="comments" className="mt-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold">Recent Comments</h2>
                </div>

                <Card className="p-6 text-center">
                  <div className="flex flex-col items-center justify-center py-12">
                    <MessageSquare className="w-12 h-12 mb-4 text-muted-foreground" />
                    <h3 className="mb-2 text-xl font-medium">No comments yet</h3>
                    <p className="mb-4 text-muted-foreground">When you comment on a post, it will appear here.</p>
                    <Link href="/blogs">
                      <Button>Explore Blogs</Button>
                    </Link>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="followers" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Users className="w-5 h-5" />
                        Followers ({userProfile.stats.followers})
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <Avatar>
                                <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${i}`} />
                                <AvatarFallback>{i === 1 ? "JD" : i === 2 ? "SM" : "AR"}</AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="font-medium">
                                  {i === 1 ? "John Doe" : i === 2 ? "Sarah Miller" : "Alex Rodriguez"}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  @{i === 1 ? "johndoe" : i === 2 ? "sarahm" : "alexr"}
                                </p>
                              </div>
                            </div>
                            <Button variant="outline" size="sm">
                              Follow
                            </Button>
                          </div>
                        ))}

                        <div className="text-center">
                          <Button variant="link">View All Followers</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <User className="w-5 h-5" />
                        Following ({userProfile.stats.following})
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <Avatar>
                                <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${i}`} />
                                <AvatarFallback>{i === 1 ? "ET" : i === 2 ? "MC" : "DP"}</AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="font-medium">
                                  {i === 1 ? "Emma Thompson" : i === 2 ? "Michael Chen" : "David Park"}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  @{i === 1 ? "emmat" : i === 2 ? "mikechen" : "davidp"}
                                </p>
                              </div>
                            </div>
                            <Button variant="outline" size="sm">
                              Unfollow
                            </Button>
                          </div>
                        ))}

                        <div className="text-center">
                          <Button variant="link">View All Following</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

