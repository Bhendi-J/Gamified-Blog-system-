import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/hero-section"
import { FeaturedBlogs } from "@/components/featured-blogs"
import { TrendingTopics } from "@/components/trending-topics"
import { TopContributors } from "@/components/top-contributors"

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />

      <section className="py-16 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Discover Amazing Content</h2>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Explore a universe of ideas, stories, and knowledge shared by our community of writers.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 transition-all bg-background rounded-xl shadow-md hover:shadow-lg">
              <div className="mb-4 text-4xl">✍️</div>
              <h3 className="mb-2 text-xl font-bold">Share Your Ideas</h3>
              <p className="mb-4 text-muted-foreground">
                Write and publish your thoughts, stories, and expertise with our easy-to-use editor.
              </p>
              <Link href="/blogs/create">
                <Button variant="outline">Start Writing</Button>
              </Link>
            </div>

            <div className="p-6 transition-all bg-background rounded-xl shadow-md hover:shadow-lg">
              <div className="mb-4 text-4xl">🏆</div>
              <h3 className="mb-2 text-xl font-bold">Earn Recognition</h3>
              <p className="mb-4 text-muted-foreground">
                Get rewarded for your contributions and climb the leaderboard as you engage with the community.
              </p>
              <Link href="/leaderboard">
                <Button variant="outline">View Leaderboard</Button>
              </Link>
            </div>

            <div className="p-6 transition-all bg-background rounded-xl shadow-md hover:shadow-lg">
              <div className="mb-4 text-4xl">🌐</div>
              <h3 className="mb-2 text-xl font-bold">Connect with Others</h3>
              <p className="mb-4 text-muted-foreground">
                Follow your favorite writers, engage in discussions, and build meaningful connections.
              </p>
              <Link href="/join-the-fun">
                <Button variant="outline">Join the Fun</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold tracking-tight">Featured Blogs</h2>
            <Link href="/blogs">
              <Button variant="ghost">View All</Button>
            </Link>
          </div>

          <FeaturedBlogs />
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold tracking-tight">Trending Topics</h2>
                <Link href="/blogs">
                  <Button variant="ghost">Explore More</Button>
                </Link>
              </div>

              <TrendingTopics />
            </div>

            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold tracking-tight">Top Contributors</h2>
                <Link href="/leaderboard">
                  <Button variant="ghost">See All</Button>
                </Link>
              </div>

              <TopContributors />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 text-center bg-primary text-primary-foreground">
        <div className="container px-4 mx-auto">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Ready to Start Your Journey?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Join our community of writers, readers, and thinkers. Share your ideas and discover new perspectives.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/join-the-fun">
              <Button size="lg" variant="secondary">
                Join the Fun
              </Button>
            </Link>
            <Link href="/blogs">
              <Button size="lg" variant="outline" className="bg-primary/20 text-primary-foreground hover:bg-primary/30">
                Explore Blogs
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

