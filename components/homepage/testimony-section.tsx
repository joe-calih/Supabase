import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

export function Testimony() {

    
  return (
       <section id="testimonials" className="w-full bg-background py-2 text-foreground">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-6 lg:grid-cols-3">
              <Card>
                <CardContent className="pt-4">
                  <p className="mb-4 text-muted-foreground">&quot;SEO Master transformed our online presence. Our organic traffic has increased by 200% in just 3 months!&quot;</p>
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src="/authors/08.jpg?height=40&width=40" alt="John Doe" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                      <p className="font-semibold text-card-foreground">John Doe — TechStart</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-4">
                  <p className="mb-4 text-muted-foreground">&quot;The insights provided by SEO Master helped us refine our content strategy and boost our rankings significantly.&quot;</p>
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src="/authors/07.webp?height=40&width=40" alt="Jane Smith" />
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <p className="font-semibold text-card-foreground">Jane Smith — GrowFast</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-4">
                  <p className="mb-4 text-muted-foreground">&quot;We&apos;ve seen a 150% increase in lead generation since implementing SEO Master&apos;s recommendations.&quot;</p>
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src="/authors/06.png?height=40&width=40" alt="Mike Johnson" />
                      <AvatarFallback>MJ</AvatarFallback>
                    </Avatar>
                    <p className="font-semibold text-card-foreground">Mike Johnson — Glassdoor</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        
  )
}
