"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check} from "lucide-react"

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false)

  const plans = [
    {
      name: "Starter",
      priceMonthly: "$29",
      priceYearly: "$290",
      period: "/month",
      description: "Perfect for small businesses getting started",
      features: [
        "Up to 1,000 transactions/month",
        "Basic analytics dashboard",
        "Email support",
        "Standard API access",
        "Basic compliance tools",
        "99.9% uptime SLA",
      ],
      popular: false,
      cta: "Start Free Trial",
    },
    {
      name: "Professional",
      priceMonthly: "$99",
      priceYearly: "$990",
      period: "/month",
      description: "Ideal for growing businesses with advanced needs",
      features: [
        "Up to 10,000 transactions/month",
        "Advanced analytics & reporting",
        "Priority support",
        "Full API access",
        "Advanced compliance suite",
        "99.95% uptime SLA",
        "Custom integrations",
        "Multi-user access",
      ],
      popular: true,
      cta: "Start Free Trial",
    },
    {
      name: "Enterprise",
      priceMonthly: "Custom",
      priceYearly: "Custom",
      period: "",
      description: "Tailored solutions for large organizations",
      features: [
        "Unlimited transactions",
        "Custom analytics & dashboards",
        "Dedicated account manager",
        "White-label API",
        "Enterprise compliance",
        "99.99% uptime SLA",
        "Custom integrations",
      ],
      popular: false,
      cta: "Contact Sales",
    },
  ]

  return (
    <section className="dark bg-background px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">

          
          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-sm font-medium ${!isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                isYearly ? 'bg-primary' : 'bg-muted'
              }`}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                  isYearly ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
              Yearly
              <span className="ml-5 text-sm font-medium text-muted-foreground font-semibold">Save 17%</span>
            </span>
          </div>

                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Start with our free trial and scale as you grow.
          </p>
        </div>

        <div 
              className="mx-auto grid max-w-5xl gap-6 animate-in fade-in-50 duration-700 md:grid-cols-3 md:gap-8"
        >
          {plans.map((plan, index) => (
            <div
              key={index}
              className="animate-in fade-in-50 slide-in-from-bottom-6 duration-600"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card
                className={`relative transition-colors duration-300 ${plan.popular ? "border-primary/50 shadow-lg md:scale-105" : "border-border"}`}
              >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-3 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4 sm:pb-2">
                <CardTitle className="text-base sm:text-base  mb-2">{plan.name}</CardTitle>
                <div className="mb-3 sm:mb-4">
                  <span className="text-3xl sm:text-4xl font-bold text-foreground">
                    {isYearly ? plan.priceYearly : plan.priceMonthly}
                  </span>
                  <span className="text-sm text-muted-foreground ml-1">{plan.period}</span>
                </div>
                <CardDescription className="text-xs sm:text-base">{plan.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4 sm:space-y-6">
                <ul className="space-y-2 sm:space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 sm:gap-3">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full text-sm h-9 sm:h-10 ${
                    plan.popular ? "bg-primary hover:bg-primary/90" : "bg-secondary hover:bg-secondary/80"
                  }`}
                  variant={plan.popular ? "default" : "secondary"}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">All plans include a 14-day free trial. No credit card required.</p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              <span>24/7 support</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              <span>SOC 2 compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              <span>99.9% uptime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
