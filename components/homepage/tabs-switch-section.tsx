"use client"

import { useState } from "react"
import Image from "next/image"
import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type TabKey = "product" | "services" | "company" | "portfolio" | "blog"

interface StatCardProps {
  title: string
  value: string
  subtitle: string
}

const StatCard = ({ title, value, subtitle }: StatCardProps) => (
  <div className="text-center space-y-2">
    <p className="text-sm text-muted-foreground">{title}</p>
    <div className="text-4xl font-bold text-primary">{value}</div>
    <p className="text-sm text-muted-foreground">{subtitle}</p>
  </div>
)

const tabContent = {
  product: {
    title: "Innovative Solutions",
    description:
      "Discover our cutting-edge products designed to streamline your workflow and boost productivity. Our solutions are built with the latest technology and user-centric design principles.",
    features: [
      "Advanced analytics and reporting",
      "Real-time collaboration tools",
      "Seamless integrations",
      "24/7 customer support",
    ],
    image: "/placeholder.svg?height=400&width=600&text=Product",
  },
  services: {
    title: "Professional Services",
    description:
      "Our expert team provides comprehensive services to help you achieve your business goals. From consultation to implementation, we're with you every step of the way.",
    features: ["Strategic consulting", "Custom development", "Training and onboarding", "Ongoing maintenance"],
    image: "/placeholder.svg?height=400&width=600&text=Services",
  },
  company: {
    title: "About Our Company",
    description:
      "Learn about our mission, values, and the passionate team behind our success. We're committed to delivering excellence and building lasting partnerships.",
    features: ["10+ years of experience", "Award-winning team", "Global presence", "Sustainable practices"],
    image: "/placeholder.svg?height=400&width=600&text=Company",
  },
  portfolio: {
    title: "Our Portfolio",
    description:
      "Explore our diverse portfolio of successful projects and satisfied clients. See how we've helped businesses transform and grow.",
    features: ["500+ completed projects", "Industry-leading results", "Client testimonials", "Case studies available"],
    image: "/placeholder.svg?height=400&width=600&text=Portfolio",
  },
  blog: {
    title: "Latest Insights",
    description:
      "Stay updated with the latest industry trends, best practices, and insights from our expert team. Our blog covers everything you need to know.",
    features: ["Weekly updates", "Expert opinions", "Industry analysis", "How-to guides"],
    image: "/placeholder.svg?height=400&width=600&text=Blog",
  },
}

export default function TabsSwitchSection() {
  const [activeTab, setActiveTab] = useState<TabKey>("product")

  return (
    <section className="dark w-full bg-background pb-10 md:pb-10">
      <div className="mx-auto max-w-6xl px-6">

        {/* Hero Section */}
        <div className="py-10 text-center">
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae aut doloribus voluptatum distinctio! Eum
          </p>
        </div>

        {/* Navigation and Content Section */}
        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as TabKey)} className="mb-0">
          <div className="mx-auto mb-12 max-w-full overflow-x-auto">
          <TabsList className="mx-auto grid w-full min-w-[480px] max-w-[600px] grid-cols-5">
            <TabsTrigger value="product">Product</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="company">Company</TabsTrigger>
            <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
            <TabsTrigger value="blog">Blog</TabsTrigger>
          </TabsList>
          </div>
          {Object.entries(tabContent).map(([key, content]) => (
            <TabsContent key={key} value={key}>
              <Card className="mb-0 py-0">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 p-6 md:p-12">
                      <CardHeader className="p-0">
                        <CardTitle className="text-base sm:text-xl mb-4">{content.title}</CardTitle>
                      </CardHeader>
                      <p className="text-muted-foreground mb-6">{content.description}</p>
                      <ul className="space-y-3 mb-6">
                        {content.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-white/90">
                            <Check className="mr-2 h-5 w-5 shrink-0 text-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="space-y-4 sm:space-y-0">
                        <Button variant="secondary" className="w-full sm:w-auto mr-4">
                          Discover tool
                        </Button>
                        <a
                          href="#"
                          className="inline-flex items-center text-sm font-semibold text-foreground hover:text-muted-foreground"
                        >
                          Learn more
                          <ArrowRight className="ml-1 w-4 h-4" />
                        </a>
                      </div>
                    </div>
                    <div className="md:w-1/2 relative min-h-[300px] md:min-h-full">
                      {/* Overlay with white fade effect */}
                      <div className="pointer-events-none absolute inset-0 z-10 rounded-b-lg bg-gradient-to-t from-background/80 via-background/40 to-transparent md:rounded-bl-none md:rounded-r-lg"></div>

                      <Image
                        src={content.image || "/placeholder.svg"}
                        alt={`${key} illustration`}
                        fill
                        style={{ objectFit: "cover" }}
                        className="z-0 rounded-b-lg md:rounded-bl-none md:rounded-r-lg"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
