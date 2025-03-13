"use client"

import { useState } from "react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Bell, Check, Heart, MessageSquare, MoreHorizontal, Star, Trash2, User, Users } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Sample notifications data
const notifications = [
  {
    id: 1,
    type: "like",
    read: false,
    user: {
      name: "Sarah Johnson",
      username: "sarahj",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content: "liked your post",
    target: "Getting Started with Next.js 14",
    time: "2 hours ago",
  },
  {
    id: 2,
    type: "comment",
    read: false,
    user: {
      name: "Michael Chen",
      username: "mikechen",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content: "commented on your post",
    target: "The Power of Atomic Habits",
    comment: "Great insights! I've been applying these principles for a few months and they really work.",
    time: "5 hours ago",
  },
  {
    id: 3,
    type: "follow",
    read: true,
    user: {
      name: "Emma Rodriguez",
      username: "emmar",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content: "started following you",
    time: "1 day ago",
  },
  {
    id: 4,
    type: "mention",
    read: true,
    user: {
      name: "David Park",
      username: "davidp",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content: "mentioned you in a comment",
    target: "Understanding React Server Components",
    comment: "I agree with @alexmorgan's point about the performance benefits of server components.",
    time: "2 days ago",
  },
  {
    id: 5,
    type: "feature",
    read: true,
    content: "Your post was featured on the homepage",
    target: "Getting Started with Next.js 14",
    time: "3 days ago",
  },
]

export default function NotificationsPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [userNotifications, setUserNotifications] = useState(notifications)

  const filteredNotifications = userNotifications.filter((notification) => {
    if (activeTab === "all") return true
    if (activeTab === "unread") return !notification.read
    if (activeTab === "mentions") return notification.type === "mention"
    return true
  })

  const markAsRead = (id) => {
    setUserNotifications(
      userNotifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification,
      ),
    )
  }

  const markAllAsRead = () => {
    setUserNotifications(userNotifications.map((notification) => ({ ...notification, read: true })))
  }

  const deleteNotification = (id) => {
    setUserNotifications(userNotifications.filter((notification) => notification.id !== id))
  }

  const getNotificationIcon = (type) => {
    switch (type) {
      case "like":
        return <Heart className="w-4 h-4 text-red-500" />
      case "comment":
        return <MessageSquare className="w-4 h-4 text-blue-500" />
      case "follow":
        return <User className="w-4 h-4 text-green-500" />
      case "mention":
        return <Users className="w-4 h-4 text-purple-500" />
      case "feature":
        return <Star className="w-4 h-4 text-yellow-500" />
      default:
        return <Bell className="w-4 h-4" />
    }
  }

  const unreadCount = userNotifications.filter((notification) => !notification.read).length

  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="flex flex-col items-start justify-between gap-4 mb-8 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Notifications</h1>
          <p className="text-muted-foreground">Stay updated with activity related to your account</p>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={markAllAsRead}>
            Mark All as Read
          </Button>
          <Link href="/settings/notifications">
            <Button variant="outline" size="sm">
              Notification Settings
            </Button>
          </Link>
        </div>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Recent Notifications</CardTitle>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value="all" className="flex items-center gap-2">
                All
                {unreadCount > 0 && (
                  <Badge variant="secondary" className="ml-1">
                    {unreadCount}
                  </Badge>
                )}
              </TabsTrigger>
              <TabsTrigger value="unread">Unread</TabsTrigger>
              <TabsTrigger value="mentions">Mentions</TabsTrigger>
            </TabsList>
          </Tabs>
        </CardHeader>
        <CardContent>
          {filteredNotifications.length > 0 ? (
            <div className="space-y-4">
              {filteredNotifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 transition-colors border rounded-lg ${!notification.read ? "bg-muted/50" : ""}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted">
                      {getNotificationIcon(notification.type)}
                    </div>

                    {notification.type !== "feature" && (
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={notification.user.avatar} />
                        <AvatarFallback>{notification.user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                    )}

                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          {notification.type !== "feature" ? (
                            <p>
                              <Link
                                href={`/profile/${notification.user.username}`}
                                className="font-medium hover:underline"
                              >
                                {notification.user.name}
                              </Link>{" "}
                              {notification.content}{" "}
                              {notification.target && (
                                <Link
                                  href={`/blogs/${notification.target.toLowerCase().replace(/\s+/g, "-")}`}
                                  className="font-medium text-primary hover:underline"
                                >
                                  {notification.target}
                                </Link>
                              )}
                            </p>
                          ) : (
                            <p>
                              {notification.content}{" "}
                              <Link
                                href={`/blogs/${notification.target.toLowerCase().replace(/\s+/g, "-")}`}
                                className="font-medium text-primary hover:underline"
                              >
                                {notification.target}
                              </Link>
                            </p>
                          )}

                          {notification.comment && (
                            <div className="p-3 mt-2 text-sm border rounded-lg bg-muted/30">{notification.comment}</div>
                          )}

                          <p className="mt-1 text-sm text-muted-foreground">{notification.time}</p>
                        </div>

                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            {!notification.read && (
                              <DropdownMenuItem onClick={() => markAsRead(notification.id)}>
                                <Check className="w-4 h-4 mr-2" />
                                Mark as read
                              </DropdownMenuItem>
                            )}
                            <DropdownMenuItem onClick={() => deleteNotification(notification.id)}>
                              <Trash2 className="w-4 h-4 mr-2" />
                              Delete
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              <Bell className="w-4 h-4 mr-2" />
                              Notification settings
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12">
              <Bell className="w-12 h-12 mb-4 text-muted-foreground" />
              <h3 className="mb-2 text-xl font-medium">No notifications</h3>
              <p className="mb-4 text-muted-foreground">
                {activeTab === "all"
                  ? "You don't have any notifications yet."
                  : activeTab === "unread"
                    ? "You don't have any unread notifications."
                    : "You don't have any mentions."}
              </p>
              {activeTab !== "all" && (
                <Button variant="outline" onClick={() => setActiveTab("all")}>
                  View All Notifications
                </Button>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

