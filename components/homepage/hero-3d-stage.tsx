"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { DashboardMockup } from "./dashboard-mockup"
import { Navbar } from "./navbar"
import { LogoCloud } from "./logo-cloud"
import { FeatureCardsSection } from "./feature-cards-section"
import { AISection } from "./ai-section"
import { ProductDirectionSection } from "./product-direction-section"
import { WorkflowsSection } from "./workflows-section"
import { CTASection } from "./cta-section"
import { Footer } from "./footer"
import { SecurityStrip } from "./security-strip"
import BannerCtaSection from "./banner-cta-section"
import TrialCTASection from "./trial-cta-section"
import IntegrationSection from "./integration-section"
import PricingSection from "./pricing-section"
import TabsSwitchSection from "./tabs-switch-section"
import { Testimony } from "./testimony-section"
import { StepsSection } from "./steps-section"
import { ProcessSectionNew } from "./process-section-new"
import { RankingSection } from "./ranking-section"
import { OpenSourceSection } from "./open-source-section"
import { HeaderHeroSection } from "./header-hero-section"
import { FeaturesSection } from "./features-section"
import { ProjectSection } from "./project-section"
import { KeywordResearchCta } from "./keyword-research-cta"
import { CustomerStoriesSection } from "./customer-stories-section"
import { StudioMetrics } from "./studio-metrics"

export function Hero3DStage() {
  const [yOffset, setYOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const offset = Math.min(scrollY / 300, 1) * -20
      setYOffset(offset)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const baseTransform = {
    translateX: 2,
    scale: 1.2,
    rotateX: 47,
    rotateY: 31,
    rotateZ: 324,
  }

  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-background">
        <Navbar />
        <HeaderHeroSection />
        <StudioMetrics />

        {/* Subtle glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -30%)",
            width: "1200px",
            height: "800px",
            background: "radial-gradient(ellipse at center, rgba(99, 102, 241, 0.08) 0%, transparent 70%)",
          }}
        />

        {/* Main content */}
        <div className="relative z-10 flex flex-col pt-0 md:pt-16">
          {/* 3D Stage - full bleed */}


          <FeaturesSection />
          <IntegrationSection />
          <KeywordResearchCta />
          <ProjectSection />
          <ProductDirectionSection />
          <LogoCloud />
          <TabsSwitchSection />
          <Testimony />
          <CustomerStoriesSection />
          <PricingSection />
          <BannerCtaSection />
          <OpenSourceSection />
          <CTASection />
          <SecurityStrip />
          <Footer />
        </div>
      </section>
    </>
  )
}
