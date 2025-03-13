"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bookmark, Heart, MessageSquare, PenLine, Search } from "lucide-react"

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js 14",
    excerpt: "Learn how to build modern web applications with Next.js 14 and its new features.",
    coverImage: "/placeholder.svg?height=200&width=400",
    category: "Technology",
    author: {
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    stats: {
      likes: 124,
      comments: 32,
      bookmarks: 56,
    },
    createdAt: "2 days ago",
    readTime: "5 min read",
    tags: ["Next.js", "React", "Web Development"],
  },
  {
    id: 2,
    title: "The Future of Artificial Intelligence",
    excerpt: "Exploring the latest advancements in AI and what they mean for humanity.",
    coverImage: "/placeholder.svg?height=200&width=400",
    category: "AI",
    author: {
      name: "Michael Chen",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    stats: {
      likes: 245,
      comments: 87,
      bookmarks: 112,
    },
    createdAt: "1 week ago",
    readTime: "8 min read",
    tags: ["AI", "Machine Learning", "Technology"],
  },
  {
    id: 3,
    title: "Sustainable Living in Urban Environments",
    excerpt: "Practical tips for reducing your carbon footprint while living in a city.",
    coverImage: "/placeholder.svg?height=200&width=400",
    category: "Lifestyle",
    author: {
      name: "Emma Rodriguez",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    stats: {
      likes: 89,
      comments: 14,
      bookmarks: 32,
    },
    createdAt: "3 days ago",
    readTime: "6 min read",
    tags: ["Sustainability", "Urban Living", "Environment"],
  },
  {
    id: 4,
    title: "Financial Planning for Millennials",
    excerpt: "Essential financial advice for millennials looking to secure their future.",
    coverImage: "/placeholder.svg?height=200&width=400",
    category: "Finance",
    author: {
      name: "David Park",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    stats: {
      likes: 156,
      comments: 42,
      bookmarks: 78,
    },
    createdAt: "5 days ago",
    readTime: "7 min read",
    tags: ["Finance", "Millennials", "Money Management"],
  },
  {
    id: 5,
    title: "The Art of Mindful Productivity",
    excerpt: "How to stay productive while maintaining mental well-being in a busy world.",
    coverImage: "/placeholder.svg?height=200&width=400",
    category: "Productivity",
    author: {
      name: "Olivia Thompson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    stats: {
      likes: 210,
      comments: 35,
      bookmarks: 94,
    },
    createdAt: "1 day ago",
    readTime: "4 min read",
    tags: ["Productivity", "Mindfulness", "Mental Health"],
  },
  {
    id: 6,
    title: "Exploring the Hidden Gems of Southeast Asia",
    excerpt: "Discover lesser-known destinations in Southeast Asia for your next adventure.",
    coverImage: "/placeholder.svg?height=200&width=400",
    category: "Travel",
    author: {
      name: "James Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    stats: {
      likes: 178,
      comments: 29,
      bookmarks: 65,
    },
    createdAt: "2 weeks ago",
    readTime: "9 min read",
    tags: ["Travel", "Southeast Asia", "Adventure"],
  },
]

export default function BlogsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("recent")

  // Filter blogs based on search query and category
  const filteredBlogs = blogPosts.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesCategory = selectedCategory === "all" || blog.category.toLowerCase() === selectedCategory.toLowerCase()

    return matchesSearch && matchesCategory
  })

  // Sort blogs based on selected sort option
  const sortedBlogs = [...filteredBlogs].sort((a, b) => {
    if (sortBy === "recent") {
      // This is a simplified sort - in a real app, you'd compare actual dates
      return -1 // Just returning the original order for this example
    } else if (sortBy === "popular") {
      return b.stats.likes - a.stats.likes
    } else if (sortBy === "comments") {
      return b.stats.comments - a.stats.comments
    }
    return 0
  })

  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="flex flex-col items-start justify-between gap-4 mb-8 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Explore Blogs</h1>
          <p className="text-muted-foreground">Discover interesting articles and stories</p>
        </div>

        <Link href="/blogs/create">
          <Button className="gap-2">
            <PenLine className="w-4 h-4" />
            Write a Blog
          </Button>
        </Link>
      </div>

      <div className="grid gap-6 mb-8 md:grid-cols-4">
        <div className="relative md:col-span-3">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search blogs by title, content, or tags..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger>
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="technology">Technology</SelectItem>
              <SelectItem value="ai">AI</SelectItem>
              <SelectItem value="lifestyle">Lifestyle</SelectItem>
              <SelectItem value="finance">Finance</SelectItem>
              <SelectItem value="productivity">Productivity</SelectItem>
              <SelectItem value="travel">Travel</SelectItem>
            </SelectContent>
          </Select>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger>
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recent">Most Recent</SelectItem>
              <SelectItem value="popular">Most Popular</SelectItem>
              <SelectItem value="comments">Most Comments</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="all" className="mb-8">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="following">Following</TabsTrigger>
          <TabsTrigger value="featured">Featured</TabsTrigger>
          <TabsTrigger value="trending">Trending</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sortedBlogs.map((blog) => (
          <Link href={`/blogs/${blog.id}`} key={blog.id}>
            <Card className="overflow-hidden transition-all hover:shadow-md">
              <div className="relative aspect-video">
                <Image src={blog.coverImage || "/placeholder.svg"} alt={blog.title} fill className="object-cover" />
              </div>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline">{blog.category}</Badge>
                  <span className="text-xs text-muted-foreground">{blog.readTime}</span>
                </div>
                <h3 className="mb-2 text-xl font-bold">{blog.title}</h3>
                <p className="mb-4 text-muted-foreground line-clamp-2">{blog.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {blog.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex items-center justify-between p-4 border-t bg-muted/10">
                <div className="flex items-center gap-2">
                  <Avatar className="w-6 h-6">
                    <AvatarImage src={blog.author.avatar} />
                    <AvatarFallback>{blog.author.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm">{blog.author.name}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    <span className="text-xs">{blog.stats.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageSquare className="w-4 h-4" />
                    <span className="text-xs">{blog.stats.comments}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bookmark className="w-4 h-4" />
                    <span className="text-xs">{blog.stats.bookmarks}</span>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>

      {sortedBlogs.length === 0 && (
        <div className="p-12 text-center border rounded-lg">
          <h3 className="mb-2 text-xl font-medium">No blogs found</h3>
          <p className="mb-4 text-muted-foreground">Try adjusting your search or filter criteria</p>
          <Button
            onClick={() => {
              setSearchQuery("")
              setSelectedCategory("all")
            }}
          >
            Reset Filters
          </Button>
        </div>
      )}

      <div className="flex justify-center mt-8">
        <Button variant="outline">Load More</Button>
      </div>
    </div>
  )
}

