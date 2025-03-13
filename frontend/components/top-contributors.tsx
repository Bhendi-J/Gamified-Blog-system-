"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { gsap } from "gsap"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award } from "lucide-react"

// Sample top contributors data
const topContributors = [
  {
    id: 1,
    name: "Sarah Johnson",
    username: "sarahj",
    avatar: "/placeholder.svg?height=40&width=40",
    level: 24,
    posts: 87,
    following: false,
  },
  {
    id: 2,
    name: "Michael Chen",
    username: "mikechen",
    avatar: "/placeholder.svg?height=40&width=40",
    level: 22,
    posts: 64,
    following: true,
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    username: "emmar",
    avatar: "/placeholder.svg?height=40&width=40",
    level: 19,
    posts: 42,
    following: false,
  },
  {
    id: 4,
    name: "David Park",
    username: "davidp",
    avatar: "/placeholder.svg?height=40&width=40",
    level: 17,
    posts: 38,
    following: false,
  },
]

export function TopContributors() {
  const [contributors, setContributors] = useState(topContributors)
  const contributorsRef = useRef([])

  useEffect(() => {
    contributorsRef.current.forEach((contributor, index) => {
      gsap.from(contributor, {
        x: 30,
        opacity: 0,
        duration: 0.5,
        delay: 0.1 * index,
        ease: "power2.out",
      })
    })
  }, [])

  const handleFollow = (id) => {
    setContributors(
      contributors.map((contributor) => {
        if (contributor.id === id) {
          return { ...contributor, following: !contributor.following }
        }
        return contributor
      }),
    )
  }

  return (
    <Card>
      <CardContent className="p-4">
        <div className="space-y-4">
          {contributors.map((contributor, index) => (
            <div
              key={contributor.id}
              ref={(el) => (contributorsRef.current[index] = el)}
              className="flex items-center justify-between"
            >
              <Link href={`/profile/${contributor.username}`} className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={contributor.avatar} />
                  <AvatarFallback>{contributor.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{contributor.name}</p>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Award className="w-3 h-3 text-primary" />
                    <span>Level {contributor.level}</span>
                    <span>•</span>
                    <span>{contributor.posts} posts</span>
                  </div>
                </div>
              </Link>
              <Button
                variant={contributor.following ? "default" : "outline"}
                size="sm"
                onClick={() => handleFollow(contributor.id)}
              >
                {contributor.following ? "Following" : "Follow"}
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

