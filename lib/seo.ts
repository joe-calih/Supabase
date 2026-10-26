import type { Metadata } from "next"

const pageIntent: Record<string, { title: string; description: string; keywords: string[] }> = {
  "/": { title: "Build better products, together", description: "Sprint gives product teams a focused system for planning, building, and scaling modern software products.", keywords: ["software product development", "product planning platform", "modern software teams", "developer platform"] },
  "/about": { title: "About Sprint", description: "Learn how Sprint helps teams build modern software with clear product thinking, reliable engineering, and open collaboration.", keywords: ["about Sprint", "software product studio", "developer tools company"] },
  "/agents": { title: "AI Agents Platform", description: "Build reliable AI agents with durable memory, safe tools, observability, and production-ready infrastructure.", keywords: ["AI agents platform", "agent infrastructure", "AI workflows", "agent memory"] },
  "/auth": { title: "Authentication for modern apps", description: "Add secure authentication, user management, and authorization flows to your application with Sprint.", keywords: ["authentication platform", "user management", "app authorization", "secure login"] },
  "/database": { title: "Postgres database for developers", description: "Build on a portable Postgres database with the performance, security, and flexibility modern applications need.", keywords: ["Postgres database", "managed database", "developer database", "SQL backend"] },
  "/storage": { title: "File storage for applications", description: "Store, transform, and deliver user files with secure, scalable storage built for modern application workflows.", keywords: ["file storage", "object storage", "image uploads", "application storage"] },
  "/realtime": { title: "Realtime data for applications", description: "Synchronize application data instantly with realtime updates designed for collaborative and interactive products.", keywords: ["realtime database", "live data sync", "collaborative apps", "websocket backend"] },
  "/compute": { title: "Compute for application workloads", description: "Run services, workers, and demanding application workloads on flexible compute built for developer control.", keywords: ["cloud compute", "application runtime", "background workers", "developer infrastructure"] },
  "/edge-functions": { title: "Edge Functions for fast APIs", description: "Deploy globally distributed server-side functions for fast APIs, webhooks, automation, and secure integrations.", keywords: ["edge functions", "serverless functions", "global APIs", "webhooks"] },
  "/docs": { title: "Documentation and developer guides", description: "Explore Sprint documentation, quickstarts, API references, architecture guides, and production best practices.", keywords: ["developer documentation", "API reference", "backend guides", "software tutorials"] },
  "/learn": { title: "Learn software engineering and DevOps", description: "Build practical skills with structured software engineering, DevOps, AI, and backend courses from beginner to advanced.", keywords: ["learn software engineering", "DevOps courses", "developer education", "programming certificates"] },
  "/tools": { title: "Developer tools for better workflows", description: "Discover practical tools for research, development, operations, security, and AI-assisted software delivery.", keywords: ["developer tools", "software engineering tools", "AI developer tools", "DevOps tools"] },
  "/contact": { title: "Contact Sprint", description: "Contact the Sprint team for product questions, technical support, partnerships, enterprise guidance, and community help.", keywords: ["contact Sprint", "software support", "enterprise software contact", "developer platform support"] },
  "/pricing": { title: "Pricing for every stage", description: "Compare Sprint plans and choose the right platform for prototypes, growing products, and production teams.", keywords: ["software platform pricing", "developer platform plans", "SaaS pricing"] },
}

function titleFromPath(pathname: string) {
  return pathname.split("/").filter(Boolean).map((part) => part.replace(/-/g, " ")).map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" / ") || "Home"
}

export function getPageMetadata(pathname: string): Metadata {
  const intent = pageIntent[pathname] ?? {
    title: `${titleFromPath(pathname)} resources`,
    description: `Explore ${titleFromPath(pathname).toLowerCase()} resources, guides, and tools for building modern software products with Sprint.`,
    keywords: [titleFromPath(pathname).toLowerCase(), "software development", "developer platform", "Sprint"],
  }
  return {
    title: intent.title,
    description: intent.description,
    keywords: intent.keywords,
    alternates: { canonical: pathname },
    openGraph: { type: "website", title: intent.title, description: intent.description, url: pathname },
    twitter: { card: "summary_large_image", title: intent.title, description: intent.description },
  }
}
