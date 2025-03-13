"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { gsap } from "gsap"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Heart, MessageSquare, Eye } from "lucide-react"

// Sample data - in a real app, this would come from your API
const featuredBlogs = [
  {
    id: 1,
    title: "The Future of Web Development with Next.js",
    excerpt: "Explore how Next.js is revolutionizing the way we build modern web applications...",
    coverImage: "/placeholder.svg?height=200&width=400",
    category: "Technology",
    author: {
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    stats: {
      likes: 142,
      comments: 38,
      views: 1204,
    },
    createdAt: "2 days ago",
  },
  {
    id: 2,
    title: "Mastering Productivity: A Guide for Busy Professionals",
    excerpt: "Learn effective strategies to maximize your productivity and achieve work-life balance...",
    coverImage: "/placeholder.svg?height=200&width=400",
    category: "Productivity",
    author: {
      name: "Michael Chen",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    stats: {
      likes: 98,
      comments: 24,
      views: 876,
    },
    createdAt: "4 days ago",
  },
  {
    id: 3,
    title: "The Art of Mindful Living in a Digital Age",
    excerpt: "Discover how to stay present and mindful in an increasingly connected world...",
    coverImage: "/placeholder.svg?height=200&width=400",
    category: "Wellness",
    author: {
      name: "Emma Rodriguez",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    stats: {
      likes: 215,
      comments: 42,
      views: 1876,
    },
    createdAt: "1 week ago",
  },
]

export function FeaturedBlogs() {
  const cardsRef = useRef([])

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.from(card, {
        y: 50,
        opacity: 0,
        duration: 0.6,
        delay: 0.2 * index,
        ease: "power3.out",
      })
    })
  }, [])

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {featuredBlogs.map((blog, index) => (
        <Link href={`/blogs/${blog.id}`} key={blog.id}>
          <Card
            ref={(el) => (cardsRef.current[index] = el)}
            className="overflow-hidden transition-all duration-300 hover:shadow-md hover:scale-[1.01]"
          >
            <div className="relative aspect-video">
              <Image src={blog.coverImage || "/placeholder.svg"} alt={blog.title} fill className="object-cover" />
            </div>
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <Badge variant="outline">{blog.category}</Badge>
                <span className="text-xs text-muted-foreground">{blog.createdAt}</span>
              </div>
              <h3 className="mb-2 text-xl font-bold">{blog.title}</h3>
              <p className="mb-4 text-muted-foreground line-clamp-2">{blog.excerpt}</p>
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
                  <Eye className="w-4 h-4" />
                  <span className="text-xs">{blog.stats.views}</span>
                </div>
              </div>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  )
}

