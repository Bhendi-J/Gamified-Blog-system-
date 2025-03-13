"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useParams } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Bookmark, ChevronLeft, Heart, MessageSquare, MoreHorizontal, Share2, ThumbsDown, ThumbsUp } from "lucide-react"

// Sample blog post data - in a real app, this would be fetched from an API
const blogPost = {
  id: 1,
  title: "Getting Started with Next.js 14",
  excerpt: "Learn how to build modern web applications with Next.js 14 and its new features.",
  content: `
    <p>Next.js has evolved significantly since its inception, and version 14 brings a host of new features and improvements that make building modern web applications even more efficient and enjoyable.</p>
    
    <h2>What's New in Next.js 14</h2>
    
    <p>Next.js 14 introduces several key improvements:</p>
    
    <ul>
      <li><strong>Improved Server Components</strong>: Enhanced performance and developer experience for React Server Components.</li>
      <li><strong>Partial Prerendering</strong>: A new rendering strategy that combines static and dynamic content.</li>
      <li><strong>Turbopack Improvements</strong>: Faster development server and build times.</li>
      <li><strong>Server Actions</strong>: Simplified data mutations without API endpoints.</li>
    </ul>
    
    <h2>Getting Started</h2>
    
    <p>To create a new Next.js 14 project, you can use the following command:</p>
    
    <pre><code>npx create-next-app@latest my-next-app</code></pre>
    
    <p>This will set up a new Next.js project with the latest features and configurations. During the setup, you'll be asked a few questions about your preferences, such as whether you want to use TypeScript, ESLint, and Tailwind CSS.</p>
    
    <h2>Key Concepts</h2>
    
    <p>Before diving into development, it's important to understand some key concepts in Next.js 14:</p>
    
    <h3>App Router</h3>
    
    <p>The App Router is a new routing system introduced in Next.js 13 and further improved in version 14. It uses a file-system based router built on top of Server Components.</p>
    
    <h3>Server Components</h3>
    
    <p>React Server Components allow you to render components on the server, reducing the JavaScript sent to the client and improving performance.</p>
    
    <h3>Data Fetching</h3>
    
    <p>Next.js 14 simplifies data fetching with Server Components. You can fetch data directly in your components without using getStaticProps or getServerSideProps.</p>
    
    <h2>Conclusion</h2>
    
    <p>Next.js 14 represents a significant step forward in the evolution of the framework. With its focus on performance, developer experience, and modern React features, it's an excellent choice for building web applications in 2023 and beyond.</p>
    
    <p>In future articles, we'll explore more advanced topics and best practices for building with Next.js 14.</p>
  `,
  coverImage: "/placeholder.svg?height=400&width=800",
  category: "Technology",
  author: {
    id: 101,
    name: "Sarah Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    bio: "Full-stack developer and technical writer. Passionate about React, Next.js, and web performance.",
    following: false,
  },
  stats: {
    likes: 124,
    comments: 32,
    bookmarks: 56,
  },
  createdAt: "November 15, 2023",
  updatedAt: "November 17, 2023",
  readTime: "5 min read",
  tags: ["Next.js", "React", "Web Development"],
  isLiked: false,
  isBookmarked: false,
}

// Sample comments data
const sampleComments = [
  {
    id: 1,
    author: {
      id: 201,
      name: "Alex Chen",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content:
      "Great article! I've been using Next.js for a while, but I didn't know about some of these new features in version 14.",
    createdAt: "2 days ago",
    likes: 8,
    isLiked: false,
  },
  {
    id: 2,
    author: {
      id: 202,
      name: "Maria Garcia",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content:
      "Thanks for the clear explanation. I'm excited to try out Server Actions - they seem like they'll simplify my workflow a lot.",
    createdAt: "1 day ago",
    likes: 5,
    isLiked: false,
  },
  {
    id: 3,
    author: {
      id: 203,
      name: "James Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content:
      "I'm still having some issues with Turbopack in my project. Have you encountered any compatibility problems with certain packages?",
    createdAt: "12 hours ago",
    likes: 2,
    isLiked: false,
  },
]

export default function BlogPostPage() {
  const params = useParams()
  const [comments, setComments] = useState(sampleComments)
  const [newComment, setNewComment] = useState("")
  const [isLiked, setIsLiked] = useState(blogPost.isLiked)
  const [isBookmarked, setIsBookmarked] = useState(blogPost.isBookmarked)
  const [likeCount, setLikeCount] = useState(blogPost.stats.likes)
  const [bookmarkCount, setBookmarkCount] = useState(blogPost.stats.bookmarks)
  const [isFollowing, setIsFollowing] = useState(blogPost.author.following)

  // In a real app, you would fetch the blog post data based on params.id

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1)
    // In a real app, you would send a request to your API to update the like status
  }

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked)
    setBookmarkCount(isBookmarked ? bookmarkCount - 1 : bookmarkCount + 1)
    // In a real app, you would send a request to your API to update the bookmark status
  }

  const handleFollow = () => {
    setIsFollowing(!isFollowing)
    // In a real app, you would send a request to your API to update the follow status
  }

  const handleCommentLike = (commentId) => {
    setComments(
      comments.map((comment) => {
        if (comment.id === commentId) {
          const newIsLiked = !comment.isLiked
          return {
            ...comment,
            isLiked: newIsLiked,
            likes: newIsLiked ? comment.likes + 1 : comment.likes - 1,
          }
        }
        return comment
      }),
    )
    // In a real app, you would send a request to your API to update the comment like status
  }

  const handleCommentSubmit = (e) => {
    e.preventDefault()
    if (!newComment.trim()) return

    // In a real app, you would send the comment to your API and get the response
    const newCommentObj = {
      id: comments.length + 1,
      author: {
        id: 999, // Current user ID would come from auth context
        name: "You", // Current user name would come from auth context
        avatar: "/placeholder.svg?height=40&width=40", // Current user avatar would come from auth context
      },
      content: newComment,
      createdAt: "Just now",
      likes: 0,
      isLiked: false,
    }

    setComments([newCommentObj, ...comments])
    setNewComment("")
  }

  return (
    <div className="container px-4 py-8 mx-auto">
      <Link href="/blogs">
        <Button variant="ghost" className="mb-6 gap-2">
          <ChevronLeft className="w-4 h-4" />
          Back to Blogs
        </Button>
      </Link>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <div className="mb-4">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge variant="outline">{blogPost.category}</Badge>
              <span className="text-sm text-muted-foreground">{blogPost.createdAt}</span>
              <span className="text-sm text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">{blogPost.readTime}</span>
            </div>

            <h1 className="mb-6 text-3xl font-bold md:text-4xl">{blogPost.title}</h1>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={blogPost.author.avatar} />
                  <AvatarFallback>{blogPost.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <Link href={`/profile/${blogPost.author.id}`} className="font-medium hover:underline">
                    {blogPost.author.name}
                  </Link>
                  <p className="text-xs text-muted-foreground">Updated {blogPost.updatedAt}</p>
                </div>
              </div>

              <Button variant={isFollowing ? "default" : "outline"} size="sm" onClick={handleFollow}>
                {isFollowing ? "Following" : "Follow"}
              </Button>
            </div>
          </div>

          <div className="relative w-full h-64 mb-8 overflow-hidden rounded-lg md:h-80 lg:h-96">
            <Image src={blogPost.coverImage || "/placeholder.svg"} alt={blogPost.title} fill className="object-cover" />
          </div>

          <div
            className="prose prose-lg dark:prose-invert max-w-none mb-8"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />

          <div className="flex flex-wrap gap-2 mb-8">
            {blogPost.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                #{tag}
              </Badge>
            ))}
          </div>

          <div className="flex items-center justify-between p-4 mb-8 border rounded-lg">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="gap-2" onClick={handleLike}>
                <Heart className={`w-5 h-5 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
                <span>{likeCount}</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="gap-2"
                onClick={() => document.getElementById("comments").scrollIntoView({ behavior: "smooth" })}
              >
                <MessageSquare className="w-5 h-5" />
                <span>{comments.length}</span>
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="gap-2" onClick={handleBookmark}>
                <Bookmark className={`w-5 h-5 ${isBookmarked ? "fill-primary text-primary" : ""}`} />
                <span>{bookmarkCount}</span>
              </Button>
              <Button variant="ghost" size="sm" className="gap-2">
                <Share2 className="w-5 h-5" />
                <span>Share</span>
              </Button>
            </div>
          </div>

          <div id="comments" className="mb-8">
            <h2 className="mb-6 text-2xl font-bold">Comments ({comments.length})</h2>

            <form onSubmit={handleCommentSubmit} className="mb-8">
              <Textarea
                placeholder="Add a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="mb-2 min-h-[100px]"
              />
              <Button type="submit" disabled={!newComment.trim()}>
                Post Comment
              </Button>
            </form>

            <div className="space-y-6">
              {comments.map((comment) => (
                <div key={comment.id} className="p-4 border rounded-lg">
                  <div className="flex gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={comment.author.avatar} />
                      <AvatarFallback>{comment.author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <Link href={`/profile/${comment.author.id}`} className="font-medium hover:underline">
                          {comment.author.name}
                        </Link>
                        <span className="text-sm text-muted-foreground">{comment.createdAt}</span>
                      </div>
                      <p className="my-2">{comment.content}</p>
                      <div className="flex items-center gap-4">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="gap-1 text-sm"
                          onClick={() => handleCommentLike(comment.id)}
                        >
                          <ThumbsUp className={`w-4 h-4 ${comment.isLiked ? "fill-primary text-primary" : ""}`} />
                          {comment.likes}
                        </Button>
                        <Button variant="ghost" size="sm" className="gap-1 text-sm">
                          <ThumbsDown className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="gap-1 text-sm">
                          Reply
                        </Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm" className="gap-1 text-sm">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Report</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-4 text-xl font-bold">About the Author</h3>
              <div className="flex items-center gap-3 mb-3">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={blogPost.author.avatar} />
                  <AvatarFallback>{blogPost.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <Link href={`/profile/${blogPost.author.id}`} className="font-bold text-lg hover:underline">
                    {blogPost.author.name}
                  </Link>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">{blogPost.author.bio}</p>
              <Button className="w-full" variant={isFollowing ? "default" : "outline"} onClick={handleFollow}>
                {isFollowing ? "Following" : "Follow Author"}
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="mb-4 text-xl font-bold">Related Posts</h3>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <Link href={`/blogs/${item}`} key={item} className="block group">
                    <div className="flex gap-3">
                      <div className="relative w-20 h-20 overflow-hidden rounded-lg shrink-0">
                        <Image
                          src={`/placeholder.svg?height=80&width=80`}
                          alt="Related post"
                          fill
                          className="object-cover transition-transform group-hover:scale-110"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium group-hover:text-primary transition-colors">
                          {item === 1
                            ? "Understanding React Server Components"
                            : item === 2
                              ? "Building a Blog with Next.js and Tailwind"
                              : "Optimizing Performance in Next.js Applications"}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {item === 1 ? "November 10, 2023" : item === 2 ? "November 5, 2023" : "October 28, 2023"}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="mb-4 text-xl font-bold">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "React",
                  "JavaScript",
                  "Web Development",
                  "TypeScript",
                  "Frontend",
                  "UI/UX",
                  "Performance",
                ].map((tag) => (
                  <Link href={`/blogs?tag=${tag}`} key={tag}>
                    <Badge variant="outline" className="hover:bg-muted">
                      #{tag}
                    </Badge>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

