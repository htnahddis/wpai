"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import PerciXpertHeroSection from "@/components/sections/PerciXpertHeroSection";
import PerciXpertProblemsSection from "@/components/sections/PerciXpertProblemsSection";
import PerciXpertStagesSection from "@/components/sections/PerciXpertStagesSection";
import PerciXpertDeploymentSection from "@/components/sections/PerciXpertDeploymentSection";
import PerciXpertImpactSection from "@/components/sections/PerciXpertImpactSection";
import MondayFaqSection, { FaqItem } from "@/components/sections/MondayFaqSection";
import PerciXpertPartnerAdvantageSection from "@/components/sections/PerciXpertPartnerAdvantageSection";
import InsightsThoughtLeadershipSection from "@/components/sections/InsightsThoughtLeadershipSection";
import EcosystemStrip from "@/components/EcosystemStrip";
import ConsultationModal from "@/components/ConsultationModal";

const PERCIXPERT_FAQS: FaqItem[] = [
  {
    question: "How does AI reduce SAP implementation risks?",
    answer:
      "PerciXpert uses AI to automate the discovery and documentation phases, removing human error from requirement gathering and legacy system mapping. This ensures the project foundation is based on facts rather than assumptions.",
  },
  {
    question: "Can PerciXpert help with SAP project recovery?",
    answer:
      "Yes. If an implementation is experiencing scope drift or rework, PerciXpert’s AI audits can identify the gaps between requirements and current configurations to stabilize the delivery roadmap.",
  },
  {
    question: "Which SAP deployments does PerciXpert Support?",
    answer:
      "PerciXpert is currently built specifically for SAP S/4HANA Public Cloud implementations  including greenfield migrations from legacy ERP. The System Audit Module also supports AMS transitions and in-flight recovery on Public Cloud environments.",
  },
  {
    question: "What makes PerciXpert different from standard SAP tooling?",
    answer:
      "SAP does not provide tooling that automates the Prepare and Explore phases of the SAP Activate methodology. PerciXpert fills this gap  structuring requirements, capturing the AS-IS baseline, running FIT-GAP analysis against the full scope item library, and generating the Solution Design Document automatically. It is Percipere’s proprietary IP, built from 50+ implementations across 50+ countries.",
  },
];

export default function PerciXpertPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="bg-white text-[#191923] selection:bg-[#F0EFFF] selection:text-[#1B1466]">
      {/* 1. MONDAY.COM STYLE HERO WITH AUTOPLAYING VIDEO */}
      <PerciXpertHeroSection onOpenModal={() => setModalOpen(true)} />

      {/* 2. MONDAY.COM STYLE 3-CARD PROBLEMS / WORKFLOW SECTION */}
      <PerciXpertProblemsSection onOpenModal={() => setModalOpen(true)} />

      {/* 3. MONDAY.COM STYLE "CONSIDER YOURSELF LIMITLESS" 7-STAGE SCROLL STACK */}
      <PerciXpertStagesSection onOpenModal={() => setModalOpen(true)} />

      {/* 4. MONDAY.COM STYLE "ENTERPRISE-GRADE SECURITY & CONTROL" 2-CARD SECTION */}
      <PerciXpertDeploymentSection onOpenModal={() => setModalOpen(true)} />

      {/* 5. MONDAY.COM STYLE "OUR CUSTOMERS ACHIEVE MORE" IMPACT CAROUSEL */}
      <PerciXpertImpactSection onOpenModal={() => setModalOpen(true)} />

      {/* 6. COMPACT COMPARISON MATRIX SECTION */}  
      <PerciXpertPartnerAdvantageSection onOpenModal={() => setModalOpen(true)} />
        {/* 8. INSIGHTS & THOUGHT LEADERSHIP SECTION */}
        <InsightsThoughtLeadershipSection onBannerButtonClick={() => setModalOpen(true)} />

      {/* 7. MONDAY.COM STYLE REUSABLE FAQ SECTION */}
      <MondayFaqSection   
        items={PERCIXPERT_FAQS}
        title="Frequently asked questions"
        subtitle="Answers to common architecture and delivery questions."
        onSupportClick={() => setModalOpen(true)}
      />


      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} defaultTopic="PerciXpert ERP Delivery" />
    </div>
  );
}
