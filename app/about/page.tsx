import { getPageMetadata } from "@/lib/seo"
export const metadata = getPageMetadata("/about")
import { Globe2, Heart, Lightbulb, LockKeyhole, Users, Zap } from "lucide-react"
import { Navbar } from "@/components/homepage/navbar"
import { Footer } from "@/components/homepage/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-6 py-40">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">About Supabase</p>
        <h1 className="mt-5 max-w-4xl text-5xl tracking-tight sm:text-7xl">
          The open source backend for the next generation of products
        </h1>
        <p className="mt-7 max-w-2xl text-xl leading-8 text-muted-foreground">
          We are building the tools that let developers create, launch, and scale products without giving up ownership of their data.
        </p>
      </section>

      {/* What we believe Section */}
      <section className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-4xl">What we believe</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              [Heart, "Developers first", "Great tools respect the people who use them and remove unnecessary complexity."],
              [LockKeyhole, "Ownership matters", "Your data should remain portable, inspectable, and under your control."],
              [Users, "Community wins", "The best products are shaped by the people who build with them."],
              [Zap, "Move with urgency", "Small teams can make a large impact when their tools are well designed."],
              [Globe2, "Build for everyone", "Infrastructure should make ambitious ideas more accessible."],
              [Lightbulb, "Stay curious", "We keep learning, testing, and improving in public."]
            ].map(([Icon, title, text]: any) => (
              <div key={title}>
                <Icon className="size-6 text-primary" />
                <h3 className="mt-5 text-xl">{title}</h3>
                <p className="mt-3 leading-7 text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Radix / Features & Stats Section with Wave Background Flowing Behind Content */}
      <div className="relative overflow-hidden border-b">
        {/* Top Text Content Area */}
        <section className="relative py-16 md:py-24 z-10">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-7">
              <p className="font-mono text-xs uppercase tracking-widest text-primary mb-1">Why Radix Primitives</p>
              <h2 className="text-4xl">Spend less time on<br />undifferentiated work</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 sm:gap-5 mt-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">Save time. Ship faster.</h3>
                <p className="text-muted-foreground text-base sm:mr-5 md:mr-7 lg:mr-9 leading-7">
                  It takes <em className="italic text-foreground">a lot</em> of time to develop and maintain a robust set of UI components, and it&apos;s mostly undifferentiated work. Building on top of Radix components will save you time and money, so you can ship a better product faster.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Focus on your product</h3>
                <p className="text-muted-foreground text-base sm:mr-5 md:mr-7 lg:mr-9 leading-7">
                  It’s no secret that robust UI components are tricky to build. Nailing accessibility details and complex logic sucks time away from product feature development. With Radix, you can focus on your unique engineering challenges instead.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section with the SVG Wave and Gradient Fill Positioned Behind the Numbers */}
        <section className="relative pt-8 pb-36 z-10">
          {/* Background Wavelength SVG with Shade/Gradient Above the Wave and Behind the Numbers */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end z-[-1] overflow-hidden">
            <div className="w-full relative h-[320px]">
              <svg preserveAspectRatio="none" viewBox="0 0 960 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d="M178.507 305.111C131.659 323.63 100.966 315.481 66.2333 315.481C31.501 315.481 31 320 0 320H960V10H863.5C841.291 10 824.689 80.111 811.765 79.185C798.842 78.2591 793.995 63.658 785.918 64.3702C772.187 65.581 760.878 119.778 738.262 138.444C729.132 145.98 720.154 136.093 712.415 144C697.068 159.741 700.299 184.741 691.414 192.148C682.529 199.555 677.683 191.222 665.567 195.852C653.451 200.481 652.643 206.037 642.143 211.592C631.642 217.148 630.027 215.296 616.295 225.481C602.564 235.667 600.141 247.704 588.025 247.704C575.909 247.704 573.486 225.481 560.562 225.481C547.639 225.481 537.946 269.926 487.867 269.926C475.751 269.926 475.751 254.905 465.25 249.555C457.981 245.852 452.327 246.778 441.018 246.778C429.71 246.778 426.479 271.778 413.556 271.778C400.632 271.778 398.209 256.037 389.324 256.037C382.055 256.037 380.439 267.148 364.285 277.333C356.662 282.139 337.63 277.333 319.86 277.333C302.09 277.333 305.32 300.481 291.589 300.481C277.858 300.481 272.204 287.518 261.703 287.518C243.933 287.518 231.817 304.988 218.086 306.037C193.854 307.889 193.51 299.181 178.507 305.111Z" fill="url(#gradient-fill-chart)"></path>
                <path d="M0 319.5C31 319.5 44.5923 315.481 66.2333 315.481C100.966 315.481 131.659 323.63 178.507 305.111C193.51 299.181 193.854 307.889 218.086 306.037C231.817 304.988 243.933 287.518 261.703 287.518C272.204 287.518 277.858 300.481 291.589 300.481C305.32 300.481 302.09 277.333 319.86 277.333C337.63 277.333 356.662 282.139 364.285 277.333C380.439 267.148 382.055 256.037 389.324 256.037C398.209 256.037 400.632 271.778 413.556 271.778C426.48 271.778 429.71 246.778 441.018 246.778C452.327 246.778 457.981 245.852 465.25 249.555C475.751 254.905 475.751 269.926 487.867 269.926C537.946 269.926 547.639 225.481 560.562 225.481C573.486 225.481 575.909 247.704 588.025 247.704C600.141 247.704 602.564 235.667 616.295 225.481C630.027 215.296 631.642 217.148 642.143 211.592C652.643 206.037 653.451 200.481 665.567 195.852C677.683 191.222 682.529 199.555 691.414 192.148C700.299 184.741 697.068 159.741 712.415 144C720.154 136.093 729.132 145.98 738.262 138.444C760.878 119.778 772.187 65.581 785.918 64.3702C793.995 63.658 798.842 78.2591 811.765 79.185C824.689 80.111 841.291 10 863.5 10" stroke="url(#gradient-line)" vectorEffect="non-scaling-stroke" strokeWidth="1.5"></path>
                <line x1="862" y1="10" x2="862.01" y2="10" vectorEffect="non-scaling-stroke" stroke="hsl(var(--primary))" strokeLinecap="round" strokeWidth="8"></line>
                <defs>
                  <linearGradient id="gradient-fill-chart" x1="960" y1="10" x2="960" y2="319" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="hsl(var(--primary))" stopOpacity="0"></stop>
                    <stop offset="0.7" stopColor="hsl(var(--primary))" stopOpacity="0.22"></stop>
                  </linearGradient>
                  <linearGradient id="gradient-line" x1="73" y1="320" x2="900" y2="359.5" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="hsl(var(--primary))" stopOpacity="0.3"></stop>
                    <stop offset="1" stopColor="hsl(var(--primary))"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          <div className="mx-auto max-w-6xl px-6 relative z-10">
            <div className="flex flex-col sm:flex-row items-stretch justify-start gap-8 sm:gap-12 whitespace-nowrap">
              <div>
                <span className="flex items-center text-5xl sm:text-6xl font-serif font-normal tracking-tight leading-none">
                  130M<span className="text-[70%] ml-1 -mt-2 text-primary">+</span>
                </span>
                <div className="text-muted-foreground text-sm mt-1">Monthly downloads</div>
              </div>
              <div className="hidden sm:block bg-border w-[1px]" />
              <div>
                <span className="flex items-center text-5xl sm:text-6xl font-serif font-normal tracking-tight leading-none">
                  5500<span className="text-[70%] ml-1 -mt-2 text-primary">+</span>
                </span>
                <div className="text-muted-foreground text-sm mt-1">Discord members</div>
              </div>
              <div className="hidden sm:block bg-border w-[1px]" />
              <div>
                <span className="flex items-center text-5xl sm:text-6xl font-serif font-normal tracking-tight leading-none">
                  13K<span className="text-[70%] ml-1 -mt-2 text-primary">+</span>
                </span>
                <div className="text-muted-foreground text-sm mt-1">GitHub stars</div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Our Mission Section */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-primary">Our mission</p>
            <h2 className="mt-4 text-4xl">Make development feel possible</h2>
          </div>
          <div className="space-y-5 leading-8 text-muted-foreground">
            <p>Supabase brings together Postgres, authentication, storage, realtime, and edge functions in a platform that feels coherent from the first line of code.</p>
            <p>We are a distributed team working in the open, supported by a global community of developers and partners.</p>
            <p>Our work is measured by what builders can accomplish with less friction and more confidence.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}