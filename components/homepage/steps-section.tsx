import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const steps = [
  {
    number: "1",
    title: "Sign Up & Account Creation",
    description:
      "Begin your journey by creating an account with Quad! Click on the 'Sign Up' button and fill in your details to access your personalised dashboard.",
  },
  {
    number: "2",
    title: "Comprehensive Keyword Research",
    description:
      "Our software begins by conducting thorough keyword research tailored to your industry and target audience. We identify high-value keywords with optimal search volume.",
  },
  {
    number: "3",
    title: "On-Page Optimisation Guidance",
    description:
      "Our software provides detailed on-page optimization recommendation to enhance your website's visibility and relevance to search engines.",
  },
]

export function StepsSection() {
  return (
    <section className="w-full bg-[#09090B] pb-20 pt-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col justify-center space-y-6">
            <Badge className="w-fit rounded-full bg-primary/10 px-3 py-2 text-primary" variant="secondary">
              Process Overview
            </Badge>
            <h2 className="text-base  sm:text-xl md:text-2xl">Success Mastering</h2>
            <p className="max-w-[600px] text-zinc-400 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
              Welcome to the ultimate solution for managing your SEO strategies effectively. Our SEO Management Software
              empowers businesses to streamline their SEO efforts, optimize website
            </p>
            <div className="pt-2">
              <Button size="default" className="px-4">
                Contact Us
              </Button>
            </div>
          </div>
          <div className="relative space-y-6 before:absolute before:left-[14px] before:top-0 before:h-full before:w-[2px] before:bg-zinc-800">
            {steps.map((step) => (
              <div key={step.number} className="group relative pl-12">
                <div className="absolute left-0 top-0 flex h-7 w-7 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground transition-transform group-hover:scale-110">
                  {step.number}
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg">{step.title}</h3>
                  <p className="text-zinc-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
