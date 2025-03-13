"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { gsap } from "gsap"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp } from "lucide-react"

// Sample trending topics data
const trendingTopics = [
  {
    id: 1,
    title: "Artificial Intelligence",
    description: "Explore the latest advancements in AI and machine learning",
    image: "/placeholder.svg?height=100&width=100",
    posts: 128,
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    id: 2,
    title: "Sustainable Living",
    description: "Tips and ideas for a more environmentally friendly lifestyle",
    image: "/placeholder.svg?height=100&width=100",
    posts: 95,
    color: "bg-green-500/10 text-green-500",
  },
  {
    id: 3,
    title: "Mental Health",
    description: "Resources and discussions about mental wellbeing",
    image: "/placeholder.svg?height=100&width=100",
    posts: 87,
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    id: 4,
    title: "Remote Work",
    description: "Strategies for productivity and balance when working remotely",
    image: "/placeholder.svg?height=100&width=100",
    posts: 76,
    color: "bg-orange-500/10 text-orange-500",
  },
]

export function TrendingTopics() {
  const topicsRef = useRef([])

  useEffect(() => {
    topicsRef.current.forEach((topic, index) => {
      gsap.from(topic, {
        x: -30,
        opacity: 0,
        duration: 0.5,
        delay: 0.1 * index,
        ease: "power2.out",
      })
    })
  }, [])

  return (
    <div className="space-y-4">
      {trendingTopics.map((topic, index) => (
        <Link href={`/blogs?topic=${topic.title.toLowerCase().replace(/\s+/g, "-")}`} key={topic.id}>
          <Card ref={(el) => (topicsRef.current[index] = el)} className="transition-all hover:shadow-md">
            <CardContent className="p-4">
              <div className="flex gap-4">
                <div className="relative w-16 h-16 overflow-hidden rounded-lg shrink-0">
                  <Image src={topic.image || "/placeholder.svg"} alt={topic.title} fill className="object-cover" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">{topic.title}</h3>
                    <Badge variant="outline" className={topic.color}>
                      <TrendingUp className="w-3 h-3 mr-1" />
                      {topic.posts} posts
                    </Badge>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{topic.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}

