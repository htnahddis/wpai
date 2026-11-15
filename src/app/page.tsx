"use client";

import React, { useState } from "react";
import ConsultationModal from "@/components/ConsultationModal";
import RevealScroll from "@/components/auctor/RevealScroll";
import Typewriter from "@/components/auctor/Typewriter";
import TestimonialCarousel from "@/components/auctor/TestimonialCarousel";
import MondayBrandTicker from "@/components/MondayBrandTicker";
import CleanDeliveryPillars from "@/components/CleanDeliveryPillars";
import MondayProductsSuiteSection from "@/components/MondayProductsSuiteSection";
import MondayWorkOSShowcase from "@/components/MondayWorkOSShowcase";
import MondayAutomationRecipes from "@/components/MondayAutomationRecipes";
import MondayEveryStageRunning from "@/components/MondayEveryStageRunning";
import MondayWhyChooseGrid from "@/components/MondayWhyChooseGrid";
import MondayAccelerateCards from "@/components/MondayAccelerateCards";
import MondayNymeriaIntegrations from "@/components/MondayNymeriaIntegrations";

// Modular Sections
import HomepageHeroSection from "@/components/sections/HomepageHeroSection";
import HomepageVideoSection from "@/components/sections/HomepageVideoSection";
import AuctorVisualGallerySection from "@/components/sections/AuctorVisualGallerySection";
import VerifiedTelemetrySection from "@/components/sections/VerifiedTelemetrySection";
import HomepageDarkTickerSection from "@/components/sections/HomepageDarkTickerSection";

// Data
import {
  HOMEPAGE_TESTIMONIALS,
  TYPEWRITER_PHRASES,
} from "@/data/homepage.data";

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="bg-white text-[#191923] w-full selection:bg-[#F0EFFF] selection:text-[#1B1466]">
      {/* 1. HERO SECTION */}
      <HomepageHeroSection onOpenModal={() => setModalOpen(true)} />

      {/* 2. FULLBLEED SHOWCASE VIDEO */}
      <HomepageVideoSection />

      {/* 3. SOCIAL PROOF LOGO BAR */}
      <MondayBrandTicker />

      {/* 4. AUCTOR-STYLE 4-COLUMN VISUAL FEATURE GALLERY */}
      <AuctorVisualGallerySection onOpenModal={() => setModalOpen(true)} />

      {/* 5. MANIFESTO / SCROLL REVEAL */}
      <section className="manifesto-container">
        <div className="center-text narrow">
          <RevealScroll
            staticLead="Enterprise transformation should deliver lasting value."
            paragraphs={[
              "Legacy ERP modernization and complex digital roadmaps shouldn't drown in endless rework, fragmented spreadsheets, or misaligned scope.",
              "As an SAP Gold Partner, Percipere modernises core ERP, automates high-impact workflows, and transforms multi-source enterprise data into confident executive decisions.",
            ]}
            lastLine="Transformation. Done Right. For Good."
            mark={
              <svg className="pulse-mark mr-3" viewBox="0 0 1000 1000" aria-hidden="true">
                <circle className="ring-4" cx="500" cy="500" r="498"></circle>
                <circle className="ring-3" cx="500" cy="500" r="334"></circle>
                <circle className="ring-2" cx="500" cy="500" r="183"></circle>
                <circle className="ring-1" cx="500" cy="500" r="75"></circle>
              </svg>
            }
          />
        </div>
      </section>

      {/* 6. THE 6 ENTERPRISE SUITES */}
      <MondayProductsSuiteSection />

      {/* 7. MONDAY.COM WORK OS BOARD SHOWCASE */}
      <MondayWorkOSShowcase />

      {/* 8. THE FOUR FOUNDATIONAL PILLARS */}
      <CleanDeliveryPillars />

      {/* 9. VERIFIED ENTERPRISE METRICS */}
      <VerifiedTelemetrySection />

      {/* 10. TESTIMONIAL CAROUSEL */}
      <section className="grey">
        <div className="max-width">
          <TestimonialCarousel items={HOMEPAGE_TESTIMONIALS} />
        </div>
      </section>

      {/* 11. EVERY STAGE OF PROJECT DELIVERY */}
      <MondayEveryStageRunning onOpenModal={() => setModalOpen(true)} />

      {/* 12. WHY ENTERPRISE LEADERS CHOOSE PERCIPERE BENTO */}
      <MondayWhyChooseGrid />

      {/* 13. AUTOMATE WHAT MATTERS RECIPES */}
      <MondayAutomationRecipes />

      {/* 14. TYPEWRITER DELIVERABLES */}
      <section className="max-wdith_embed type">
        <Typewriter
          prefix="Purpose-built for "
          phrases={TYPEWRITER_PHRASES}
          dot={
            <svg className="pulse-mark w-7 h-7" viewBox="0 0 1000 1000" aria-hidden="true">
              <circle className="ring-4" cx="500" cy="500" r="498"></circle>
              <circle className="ring-3" cx="500" cy="500" r="334"></circle>
              <circle className="ring-2" cx="500" cy="500" r="183"></circle>
              <circle className="ring-1" cx="500" cy="500" r="75"></circle>
            </svg>
          }
        />
      </section>

      {/* 15. ACCELERATE CARDS WITH PURPOSE-BUILT AI AGENTS */}
      <MondayAccelerateCards onOpenModal={() => setModalOpen(true)} />

      {/* 16. NYMERIA INTEGRATIONS GRID */}
      <MondayNymeriaIntegrations onOpenModal={() => setModalOpen(true)} />

      {/* 17. DARK INVESTOR & PARTNER NETWORK TICKER */}
      <HomepageDarkTickerSection />

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultTopic="PerciXpert AI Implementation"
      />
    </div>
  );
}
