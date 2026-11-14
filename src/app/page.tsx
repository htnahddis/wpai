"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import ConsultationModal from "@/components/ConsultationModal";
import RevealScroll from "@/components/auctor/RevealScroll";
import Typewriter from "@/components/auctor/Typewriter";
import TestimonialCarousel, { TestimonialItem } from "@/components/auctor/TestimonialCarousel";
import { StatCounter } from "@/components/auctor/StatScramble";
import LazyVideo from "@/components/auctor/LazyVideo";
import MondayBrandTicker from "@/components/MondayBrandTicker";
import CleanDeliveryPillars from "@/components/CleanDeliveryPillars";
import MondayProductsSuiteSection from "@/components/MondayProductsSuiteSection";
import MondayWorkOSShowcase from "@/components/MondayWorkOSShowcase";
import MondayAutomationRecipes from "@/components/MondayAutomationRecipes";
import MondayEveryStageRunning from "@/components/MondayEveryStageRunning";
import MondayLeadershipAndTrust from "@/components/MondayLeadershipAndTrust";
import MondayNymeriaIntegrations from "@/components/MondayNymeriaIntegrations";

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);

  // Real Percipere Enterprise Testimonials & Authentic Case Studies
  const testimonials: TestimonialItem[] = [
    {
      key: "os-doors",
      quote:
        "“Percipere showed us they were the team that we could trust. Not only are they professional and experienced with ERP implementations, they demonstrated the confidence that we needed to see as we start our digital transformation. They understand our challenges and are implementing solutions that will make us more efficient and give us a strong foundation for continued growth.”",
      author: "Matt Woolhouse",
      role: "Finance Director",
      company: "OS Doors (PE-backed Manufacturer)",
    },
    {
      key: "rpc-energy",
      quote:
        "“When you are managing 80+ legal entities across Europe under an aggressive timeline, there is zero buffer for error. Percipere stepped in to stabilize the architecture and deliver our SAP Cloud ERP transformation on time.”",
      author: "Michele Pietsch",
      role: "Chief Financial Officer",
      company: "Renewable Power Capital (CPPIB)",
    },
    {
      key: "travelopia",
      quote:
        "“Unifying finance across 20+ countries required absolute standardisation and automation. Percipere’s delivery enabled a single chart of accounts, automated over 100,000 invoices annually, and reduced maverick spend by 80%.”",
      author: "Group Finance & Systems Leadership",
      role: "Global ERP Transformation",
      company: "Travelopia (KKR Portfolio)",
    },
    {
      key: "advanz-pharma",
      quote:
        "“Connecting our complex sales workflows into SAP Cloud ERP eliminated operational friction across 90+ countries, returning nearly 200 hours per quarter directly back to our commercial teams.”",
      author: "Commercial Operations Director",
      role: "Global IT & Systems Integration",
      company: "Advanz Pharma",
    },
  ];

  // Verbatim Percipere Strategic Pillars & Deliverable Phrases from percipere.co
  const typewriterPhrases = [
    "Modernising ERP",
    "Automating What Matters",
    "Turning Data Into Decisions",
    "SAP S/4HANA Cloud Transformations",
    "Extended Planning & Analytics (xP&A)",
    "Clean Core Implementation",
    "AI-Powered Managed Services (AMS)",
    "Business Process Optimisation",
  ];

  // Dark Ecosystem Marquee Credentials
  const investorLogos = [
    "SAP Gold Partner",
    "SAP S/4HANA Cloud",
    "FUTUROOT Process Mining",
    "SAP Clean Core Verified",
    "ISO 27001 Certified",
    "SOC 2 Type II Audited",
    "Microsoft Cloud Partner",
    "AWS Enterprise Tier",
  ];

  return (
    <div className="bg-white text-[#171717] w-full selection:bg-[#FFF5F0] selection:text-[#FF4400]">
      {/* =========================================================================
          1. HERO SECTION — Auctor Display Typography & Proportions
          ========================================================================= */}
      <section className="max-width">
        <div data-nav-cta-sentinel="" className="cta-container pt-12 sm:pt-16 pb-8 sm:pb-12">
          <div className="text-container-large-center">
            {/* Headline */}
            <h1 className="heading-1 center">
              Modernising ERP.<br />
              Automating What Matters.
            </h1>

            {/* Subtext and Action Buttons */}
            <div className="text-button-center">
              <div className="paragraph-1 center">
                SAP Gold Partner delivering Cloud ERP implementation, intelligent automation, and managed services for growing and complex enterprises across the UK, UAE, Saudi Arabia, and India.
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="button-primary center w-button text-base px-8 py-3.5 shadow-sm"
                >
                  <span>Book a Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="#offerings"
                  className="inline-flex items-center gap-2 text-sm font-medium py-3 px-6 rounded-full border border-[#E5E5E5] text-[#171717] hover:bg-[#F8F8FA] transition-colors"
                >
                  <span>Explore the 6 Suites</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            2. FULLBLEED ASSET — Homepage Product Video in Auctor Terminal Frame
            ========================================================================= */}
        <div className="fullbleed-asset my-4">
          <div className="mux-media-slot desktop max-h-[85vh] flex flex-col">
            <div className="bg-[#0E0F13] text-white rounded-2xl overflow-hidden border border-[#23242B] shadow-2xl flex flex-col h-full">
              {/* Workspace Header Toolbar */}
              <div className="px-5 py-3 bg-[#15161C] border-b border-[#23242B] flex items-center justify-between text-xs font-mono shrink-0">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80"></span>
                  </div>
                  <div className="h-4 w-[1px] bg-[#2A2B35]"></div>
                  <span className="text-[#8E8E93]">Platform:</span>
                  <span className="font-semibold text-white">Percipere Product Suite &amp; Delivery Engine</span>
                </div>

                <div className="flex items-center gap-2 text-[11px]">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
                  <span className="text-[#10B981] font-medium">Live Demo</span>
                </div>
              </div>

              {/* Homepage Product Video Player — Perfectly fitted container */}
              <div className="relative w-full aspect-video max-h-[75vh] bg-[#090A0E] overflow-hidden flex items-center justify-center">
                <LazyVideo
                  src="/homepage_video.mp4"
                  className="w-full h-full object-contain"
                  controls
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. SOCIAL PROOF LOGO BAR — Crisp Auctor Monochromatic Client Strip
          ========================================================================= */}
      <MondayBrandTicker />

      {/* =========================================================================
          4. MANIFESTO / SCROLL REVEAL SECTION — Auctor Quadratic Reveal Formula
          ========================================================================= */}
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


      {/* Booking Consultation Modal */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultTopic="PerciXpert AI Implementation"
      />
    </div>
  );
}
