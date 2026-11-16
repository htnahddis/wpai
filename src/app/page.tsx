"use client";

import React, { useState } from "react";
import ConsultationModal from "@/components/ConsultationModal";
import Typewriter from "@/components/auctor/Typewriter";
import TestimonialCarousel from "@/components/auctor/TestimonialCarousel";
import MondayBrandTicker from "@/components/MondayBrandTicker";
import MondayWhyChooseGrid from "@/components/MondayWhyChooseGrid";
import MondayNymeriaIntegrations from "@/components/MondayNymeriaIntegrations";

import dynamic from "next/dynamic";

// Modular Sections
import HomepageHeroSection from "@/components/sections/HomepageHeroSection";
const MondayWorkInContextSection = dynamic(
  () => import("@/components/sections/MondayWorkInContextSection"),
  { ssr: false }
);
const PerciVerseProductsScrollSection = dynamic(
  () => import("@/components/sections/PerciVerseProductsScrollSection"),
  { ssr: false }
);
import PerciXpertStagesSection from "@/components/sections/PerciXpertStagesSection";
import AuctorVisualGallerySection from "@/components/sections/AuctorVisualGallerySection";
import VerifiedTelemetrySection from "@/components/sections/VerifiedTelemetrySection";
import MondayEnterpriseTrustSection from "@/components/sections/MondayEnterpriseTrustSection";

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

      {/* 2. WORK IN CONTEXT SECTION */}
      <MondayWorkInContextSection onOpenModal={() => setModalOpen(true)} />

      {/* 3. PERCIXPERT SCROLLING STACK */}
      <PerciXpertStagesSection onOpenModal={() => setModalOpen(true)} />

      {/* 4. MANIFESTO QUOTE */}
      <section className="py-16 sm:py-24 bg-white ">
        <div className="max-w-[1240px] mx-auto px-6">
          <blockquote className="max-w-3xl mx-auto text-center">
            <p className="font-sans text-2xl sm:text-3xl lg:text-[40px] font-normal text-[#191923] leading-relaxed">
              &ldquo;We have structured our entire methodology around AI whether we talk about implementation, support, or the products we build. Not AI as a talking point. AI used wisely, because that is what actually delivers results.&rdquo;
            </p>
          </blockquote>
        </div>
      </section>

      {/* 5. PERCIVERSE PRODUCTS SOLAR SYSTEM SCROLL SECTION */}
      <PerciVerseProductsScrollSection onOpenModal={() => setModalOpen(true)} />

      {/* 5. NYMERIA INTEGRATIONS GRID */}
      <MondayNymeriaIntegrations onOpenModal={() => setModalOpen(true)} />

      {/* 6. THE IMPACT OF PERCIPERE ON SAP BUSINESS AI */}
      <MondayWhyChooseGrid />
      

      {/* 10. VERIFIED ENTERPRISE METRICS */}
      <VerifiedTelemetrySection />

      {/* 7. ENTERPRISE-READY AI WORK PLATFORM (TRUST SECTION) */}
      <MondayEnterpriseTrustSection onOpenModal={() => setModalOpen(true)} />


      {/* 8. SOCIAL PROOF LOGO BAR */}
      <MondayBrandTicker />
      {/* 11. TESTIMONIAL CAROUSEL */}
      <section className="grey">
        <div className="max-width">
          <TestimonialCarousel items={HOMEPAGE_TESTIMONIALS} />
        </div>
      </section>

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultTopic="PerciXpert AI Implementation"
      />
    </div>
  );
}
