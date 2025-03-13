import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  BookOpen,
  Code,
  Heart,
  Lightbulb,
  MessageSquare,
  PenLine,
  Share2,
  Users,
  Award,
  TrendingUp,
  Star,
} from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="flex flex-col items-center justify-center mb-12 text-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">About Blogverse</h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          Our mission is to create a space where ideas flourish and connections thrive
        </p>
      </div>

      <div className="grid gap-12">
        <section className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h2 className="mb-4 text-2xl font-bold">Our Story</h2>
            <p className="mb-4 text-muted-foreground">
              Blogverse was founded in 2023 with a simple yet powerful vision: to create a platform where writers,
              thinkers, and creators could share their ideas with the world.
            </p>
            <p className="mb-4 text-muted-foreground">
              What started as a small community of passionate bloggers has grown into a vibrant ecosystem of diverse
              voices and perspectives. We believe that everyone has a story worth telling and knowledge worth sharing.
            </p>
            <p className="text-muted-foreground">
              Today, Blogverse is home to thousands of writers from around the globe, covering topics ranging from
              technology and science to art, culture, and personal development.
            </p>
          </div>
          <div className="relative h-64 md:h-full">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Blogverse community"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </section>

        <section>
          <h2 className="mb-8 text-2xl font-bold text-center">Our Values</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10">
                  <PenLine className="w-6 h-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-medium">Freedom of Expression</h3>
                <p className="text-muted-foreground">
                  We believe in the power of diverse voices and perspectives. Our platform is designed to empower
                  writers to express themselves freely and authentically.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-medium">Community</h3>
                <p className="text-muted-foreground">
                  At the heart of Blogverse is a thriving community of writers and readers who support, inspire, and
                  challenge each other to grow.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-medium">Innovation</h3>
                <p className="text-muted-foreground">
                  We're constantly evolving and improving our platform to provide the best possible experience for our
                  users and to stay at the forefront of digital publishing.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="mb-8 text-2xl font-bold text-center">What Makes Us Different</h2>
          <Tabs defaultValue="community" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="community">Community</TabsTrigger>
              <TabsTrigger value="tools">Tools</TabsTrigger>
              <TabsTrigger value="rewards">Rewards</TabsTrigger>
              <TabsTrigger value="support">Support</TabsTrigger>
            </TabsList>
            <TabsContent value="community" className="p-6 mt-6 border rounded-lg">
              <div className="grid gap-6 md:grid-cols-2 items-center">
                <div>
                  <h3 className="mb-4 text-xl font-medium">A Thriving Community</h3>
                  <p className="mb-4 text-muted-foreground">
                    Blogverse isn't just a platform—it's a community. Connect with like-minded individuals, receive
                    feedback on your work, and build meaningful relationships with readers and fellow writers.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <MessageSquare className="w-5 h-5 text-primary" />
                      <span>Engage in thoughtful discussions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Share2 className="w-5 h-5 text-primary" />
                      <span>Share ideas and get inspired</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Heart className="w-5 h-5 text-primary" />
                      <span>Build a loyal following</span>
                    </li>
                  </ul>
                </div>
                <div className="relative h-64">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Blogverse community"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="tools" className="p-6 mt-6 border rounded-lg">
              <div className="grid gap-6 md:grid-cols-2 items-center">
                <div className="relative h-64">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Blogverse tools"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="mb-4 text-xl font-medium">Powerful Writing Tools</h3>
                  <p className="mb-4 text-muted-foreground">
                    Our platform provides everything you need to create, publish, and share your content with the world.
                    From our intuitive editor to advanced analytics, we've got you covered.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <PenLine className="w-5 h-5 text-primary" />
                      <span>Rich text editor with markdown support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Code className="w-5 h-5 text-primary" />
                      <span>Code syntax highlighting</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-primary" />
                      <span>SEO optimization tools</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="rewards" className="p-6 mt-6 border rounded-lg">
              <div className="grid gap-6 md:grid-cols-2 items-center">
                <div>
                  <h3 className="mb-4 text-xl font-medium">Recognition and Rewards</h3>
                  <p className="mb-4 text-muted-foreground">
                    We believe in recognizing and rewarding quality content. Our gamified system encourages engagement
                    and provides tangible benefits for your contributions.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-primary" />
                      <span>Earn badges and achievements</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-primary" />
                      <span>Climb the leaderboard</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-primary" />
                      <span>Get featured on the homepage</span>
                    </li>
                  </ul>
                </div>
                <div className="relative h-64">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Blogverse rewards"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="support" className="p-6 mt-6 border rounded-lg">
              <div className="grid gap-6 md:grid-cols-2 items-center">
                <div className="relative h-64">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Blogverse support"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="mb-4 text-xl font-medium">Dedicated Support</h3>
                  <p className="mb-4 text-muted-foreground">
                    Our team is committed to providing exceptional support to help you make the most of your Blogverse
                    experience.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <MessageSquare className="w-5 h-5 text-primary" />
                      <span>24/7 customer support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-primary" />
                      <span>Comprehensive documentation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      <span>Active community forums</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        <section>
          <h2 className="mb-8 text-2xl font-bold text-center">Meet Our Team</h2>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { name: "Alex Johnson", role: "Founder & CEO", avatar: "/placeholder.svg?height=100&width=100" },
              { name: "Maria Rodriguez", role: "CTO", avatar: "/placeholder.svg?height=100&width=100" },
              { name: "David Chen", role: "Head of Design", avatar: "/placeholder.svg?height=100&width=100" },
              { name: "Sarah Kim", role: "Community Manager", avatar: "/placeholder.svg?height=100&width=100" },
            ].map((member) => (
              <div key={member.name} className="flex flex-col items-center text-center">
                <Avatar className="w-24 h-24 mb-4">
                  <AvatarImage src={member.avatar} />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-medium">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="p-8 text-center bg-muted rounded-lg">
          <h2 className="mb-4 text-2xl font-bold">Join Our Community</h2>
          <p className="max-w-2xl mx-auto mb-6 text-muted-foreground">
            Ready to start your journey with Blogverse? Join thousands of writers and readers who are already part of
            our community.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/join-the-fun">
              <Button size="lg">Join the Fun</Button>
            </Link>
            <Link href="/blogs">
              <Button variant="outline" size="lg">
                Explore Blogs
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

