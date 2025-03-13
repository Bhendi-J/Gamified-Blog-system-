"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { gsap } from "gsap"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const buttonsRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()

    tl.from(titleRef.current, {
      y: -50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    })
      .from(
        subtitleRef.current,
        {
          y: 20,
          opacity: 0,
          duration: 0.5,
          ease: "power3.out",
        },
        "-=0.3",
      )
      .from(
        buttonsRef.current,
        {
          scale: 0.9,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.2",
      )

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <div
      ref={heroRef}
      className="relative px-4 py-24 overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5 md:py-32"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-40 h-40 bg-primary rounded-full -top-10 -left-10"></div>
        <div className="absolute w-60 h-60 bg-secondary rounded-full -bottom-20 -right-20"></div>
        <div className="absolute w-20 h-20 bg-accent rounded-full top-1/3 right-1/4"></div>
      </div>

      <div className="container relative z-10 mx-auto">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="text-center md:text-left">
            <h1 ref={titleRef} className="mb-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Discover a Universe of <span className="text-primary">Ideas</span>
            </h1>
            <p ref={subtitleRef} className="max-w-md mx-auto mb-8 text-xl md:mx-0 text-muted-foreground">
              Connect with writers, share your thoughts, and explore content that matters to you.
            </p>
            <div ref={buttonsRef} className="flex flex-wrap justify-center gap-4 md:justify-start">
              <Link href="/join-the-fun">
                <Button size="lg" className="gap-2 text-lg">
                  Join the Fun
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/blogs">
                <Button size="lg" variant="outline" className="gap-2 text-lg">
                  Explore Blogs
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute -z-10 rounded-full w-72 h-72 bg-primary/10 blur-3xl"></div>
            <Image
              src="/placeholder.svg?height=500&width=500"
              alt="Blogverse"
              width={500}
              height={500}
              className="rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

