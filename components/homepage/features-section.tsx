"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface Story {
  id: string
  name: string
  logo: string
  logoStyle?: React.CSSProperties
  bgColor: string
  bgGradient?: string
  headline: string
  quote: string
  person: string
  avatar: string
  href: string
}

const stories: Story[] = [
  {
    id: "lovable",
    name: "Lovable",
    logo: "/svg/lovable-homepage-icon.svg",
    bgGradient:
      "linear-gradient(rgb(253, 73, 168) 0%, rgb(253, 41, 128) 10%, rgb(252, 26, 88) 20%, rgb(250, 31, 65) 30%, rgb(250, 39, 51) 40%, rgb(251, 61, 38) 50%, rgb(252, 84, 31) 60%, rgb(254, 106, 30) 70%, rgb(254, 119, 29) 80%, rgb(255, 134, 27) 90%, rgb(255, 143, 27) 100%)",
    bgColor: "rgb(253, 73, 168)",
    headline: "Powering millions of AI-generated apps with a complete Supabase backend.",
    quote:
      "Lovable is about unlocking creativity for anyone. Only 1% of the population knows how to code. Lovable has unlocked that ability for the other 99%.",
    person: "Bryan Byrne, Product Manager, Lovable",
    avatar: "/authors/01.png",
    href: "/customers/lovable",
  },
  {
    id: "exprealty",
    name: "eXp Realty",
    logo: "/svg/exprealty-homepage-icon.svg",
    logoStyle: { transform: "scale(1.35)" },
    bgColor: "rgb(12, 15, 36)",
    headline: "Empowering 2,000+ employees to build production software with AI.",
    quote:
      "The thing that makes everything possible, all of our rapid development now and AI-generated or assisted development, is Supabase. That's the giant whose shoulders we can stand on.",
    person: "Seth Siegler, Chief Innovation Officer, eXp Realty",
    avatar: "/authors/02.png",
    href: "/customers/exprealty",
  },
  {
    id: "phoenix-energy",
    name: "Phoenix Energy",
    logo: "/svg/phoenix-energy-homepage-icon.svg",
    bgColor: "rgb(0, 37, 51)",
    headline: "Migrated critical infrastructure from MongoDB with zero downtime.",
    quote:
      "We needed a system that could handle serious performance and security requirements — without slowing down our developers. Supabase has given us both.",
    person: "Kris Woods, CTO, Phoenix Energy",
    avatar: "/authors/03.png",
    href: "/customers/phoenix-energy",
  },
  {
    id: "chatbase",
    name: "Chatbase",
    logo: "/svg/chatbase-homepage-icon.svg",
    bgColor: "rgb(0, 0, 0)",
    headline: "Scaled from zero to $10M ARR on a single Postgres-backed platform.",
    quote:
      "Instead of splitting things out as we go, we try to consolidate things more as we do. The technology itself works better when you have things that are closely tied together. That's why we're on Supabase.",
    person: "Yasser Elsaid, Founder and CEO, Chatbase",
    avatar: "/authors/04.png",
    href: "/customers/chatbase",
  },
  {
    id: "rally",
    name: "Rally",
    logo: "/svg/rally-icon.svg",
    bgColor: "rgb(30, 45, 196)",
    bgGradient: "linear-gradient(to left bottom, rgb(70, 78, 204) 0%, rgb(30, 45, 196) 100%)",
    headline: "From first line of code to fully licensed fintech in three months.",
    quote:
      "We could not have built this company without Supabase. If I had to go and build all these components myself, we wouldn't even have launched.",
    person: "Thiago Peres, Founder & CTO, Rally",
    avatar: "/authors/05.png",
    href: "/customers/rally",
  },
]

export function CustomerStoriesSection() {
  const [activeId, setActiveId] = React.useState<string>("lovable")

  return (
    <section id="customer-stories" className="w-full bg-background py-16 sm:py-20 md:py-24 text-foreground">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header Section */}
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-xl text-3xl font-normal tracking-tight text-muted-foreground md:text-4xl">
            How industry leaders <br />
            <span className="text-foreground">are building with Supabase</span>
          </h2>
          <Link
            href="/customers"
            className="text-sm text-muted-foreground underline hover:text-foreground"
          >
            More customer stories
          </Link>
        </div>

        {/* Mobile View */}
        <div className="flex flex-col gap-2 lg:hidden">
          {stories.map((story) => {
            const isActive = activeId === story.id
            return (
              <div
                key={story.id}
                role="button"
                tabIndex={0}
                onClick={() => setActiveId(story.id)}
                onKeyDown={(e) => e.key === "Enter" && setActiveId(story.id)}
                className="cursor-pointer overflow-hidden rounded-lg p-5 transition-all duration-300"
                style={{
                  background: story.bgGradient || story.bgColor,
                  boxShadow: "rgba(255, 255, 255, 0.12) 0px 0px 0px 1px inset",
                }}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={story.logo}
                    alt={story.name}
                    className="h-6 w-6 shrink-0 object-contain invert brightness-0"
                    style={story.logoStyle}
                  />
                  {!isActive && (
                    <span className="text-sm font-medium text-white">{story.name}</span>
                  )}
                </div>

                {isActive && (
                  <div className="mt-4 flex flex-col gap-4">
                    <div>
                      <p className="text-sm font-medium text-white">{story.name}</p>
                      <p className="mt-0.5 text-xs text-white/60">{story.headline}</p>
                    </div>

                    <p className="text-xl font-normal leading-snug text-pretty text-white">
                      {story.quote}
                    </p>

                    <div className="flex items-center gap-2">
                      <img
                        src={story.avatar}
                        alt={story.person}
                        className="h-6 w-6 shrink-0 rounded-full object-cover ring-1 ring-white/30"
                      />
                      <p className="text-xs text-white/65">{story.person}</p>
                    </div>

                    <Link
                      href={story.href}
                      className="text-xs text-white/70 underline hover:text-white"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Read the story →
                    </Link>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Desktop View */}
        <div className="hidden lg:flex min-h-120 gap-2">
          {stories.map((story) => {
            const isActive = activeId === story.id
            return (
              <div
                key={story.id}
                role="button"
                tabIndex={0}
                onClick={() => setActiveId(story.id)}
                onKeyDown={(e) => e.key === "Enter" && setActiveId(story.id)}
                className={cn(
                  "group relative flex cursor-pointer flex-col items-start gap-8 overflow-hidden rounded-lg transition-all duration-500 ease-in-out",
                  isActive ? "flex-1 p-8" : "w-19 shrink-0 px-5 py-8"
                )}
                style={{
                  background: story.bgGradient || story.bgColor,
                  boxShadow: "rgba(255, 255, 255, 0.12) 0px 0px 0px 1px inset",
                }}
              >
                {/* Brand Logo */}
                <div className="flex h-8 w-8 items-center justify-center">
                  <img
                    src={story.logo}
                    alt={story.name}
                    className="h-8 w-8 shrink-0 object-contain invert brightness-0"
                    style={story.logoStyle}
                  />
                </div>

                {/* Expanded Card Content */}
                <div
                  className={cn(
                    "flex flex-1 flex-col gap-1.5 w-140 transition-all duration-300",
                    isActive
                      ? "opacity-100 blur-0"
                      : "pointer-events-none opacity-0 blur-sm"
                  )}
                  aria-hidden={!isActive}
                >
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-medium text-white">{story.name}</p>
                    <p className="text-xs leading-relaxed text-pretty text-white/60">
                      {story.headline}
                    </p>
                  </div>

                  <div className="mt-auto flex flex-col gap-4">
                    <p className="text-2xl font-normal leading-snug text-balance text-white">
                      {story.quote}
                    </p>

                    <div className="flex items-center gap-2.5">
                      <img
                        src={story.avatar}
                        alt={story.person}
                        className="h-7 w-7 shrink-0 rounded-full object-cover ring-1 ring-white/30"
                      />
                      <p className="text-xs text-white/65">{story.person}</p>
                    </div>

                    <Link
                      href={story.href}
                      className="text-xs text-white/70 underline hover:text-white"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Read the story →
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}