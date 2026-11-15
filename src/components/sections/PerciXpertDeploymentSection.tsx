"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface PerciXpertDeploymentSectionProps {
  onOpenModal?: () => void;
}

interface LifecycleCard {
  id: string;
  title: string;
  category: string;
  description: string;
  iconColor: string;
  icon: React.ReactNode;
}

const LIFECYCLE_CARDS: LifecycleCard[] = [
  {
    id: "greenfield",
    title: "SAP S/4HANA Greenfield",
    category: "Public Cloud",
    description:
      "End-to-end guidance from scoping and fit-gap analysis through solution design and testing.",
    iconColor: "#00A3FF",
    icon: (
      <svg
        className="w-5 h-5 sm:w-6 sm:h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
        <path d="M5 3v4" />
        <path d="M3 5h4" />
      </svg>
    ),
  },
  {
    id: "system-audit",
    title: "System Audit & Scan",
    category: "AMS Transitions",
    description:
      "Automated extraction of configurations, custom code, and Z-tables directly from live tenants.",
    iconColor: "#784DF0",
    icon: (
      <svg
        className="w-5 h-5 sm:w-6 sm:h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    id: "requirements",
    title: "Requirements Analysis",
    category: "Fit-to-Standard",
    description:
      "Turns workshop audio and notes into structured requirements aligned to Clean Core scope.",
    iconColor: "#00C875",
    icon: (
      <svg
        className="w-5 h-5 sm:w-6 sm:h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    id: "blueprint",
    title: "Blueprint Design",
    category: "Solution Specs (SDD)",
    description:
      "Generates audit-ready Solution Design Documents and BTP side-by-side integration specs.",
    iconColor: "#0086C0",
    icon: (
      <svg
        className="w-5 h-5 sm:w-6 sm:h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    id: "configuration",
    title: "Clean Core Configuration",
    category: "Guided Build",
    description:
      "Step-by-step setup with real-time ABAP validation to eliminate technical debt upfront.",
    iconColor: "#D97706",
    icon: (
      <svg
        className="w-5 h-5 sm:w-6 sm:h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    id: "testing",
    title: "Testing & Validation",
    category: "Quality Assurance",
    description:
      "Automated test case generation, regression validation, and cutover milestone tracking.",
    iconColor: "#0D9488",
    icon: (
      <svg
        className="w-5 h-5 sm:w-6 sm:h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    id: "go-live",
    title: "Go-Live Planning",
    category: "Deployment & Hypercare",
    description:
      "Cutover execution, telemetry-backed issue triage, and continuous live operational monitoring.",
    iconColor: "#E53E3E",
    icon: (
      <svg
        className="w-5 h-5 sm:w-6 sm:h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
  },
];

export default function PerciXpertDeploymentSection({
  onOpenModal,
}: PerciXpertDeploymentSectionProps) {
  const renderCard = (card: LifecycleCard) => (
    <div
      key={card.id}
      onClick={onOpenModal}
      className="bg-white rounded-2xl p-6 sm:p-7 border border-[#EBECEF] shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.07)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between items-center text-center group cursor-pointer"
    >
      <div className="flex flex-col items-center w-full">
        {/* Top Accent Icon - Centered */}
        <div className="mb-4 flex items-center justify-center" style={{ color: card.iconColor }}>
          {card.icon}
        </div>

        {/* Card Title - Centered */}
        <h3 className="font-sans text-base sm:text-lg font-semibold text-[#191923] tracking-tight leading-snug mb-1.5 text-center">
          {card.title}
        </h3>

        {/* Magenta Category Sub-Badge - Centered */}
        <p className="text-xs font-semibold text-[#FF00B7] mb-3 font-sans text-center">
          {card.category}
        </p>

        {/* Concise Description - Centered */}
        <p className="text-xs sm:text-[13px] text-[#64748B] leading-relaxed text-center max-w-[230px] mx-auto">
          {card.description}
        </p>
      </div>

      {/* Subtle Bottom Link - Centered */}
      <div className="mt-5 pt-3.5 border-t border-[#F1F3F7] w-full flex items-center justify-center gap-1.5 text-xs font-medium text-[#191923] group-hover:text-[#FF00B7] transition-colors">
        <span>Explore module</span>
        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  );

  return (
    <section className="py-16 sm:py-20 bg-[#FAFAFC] border-b border-[#E9E9EF]">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#191923] tracking-tight leading-tight mb-2.5">
            Built for every stage of the ERP lifecycle
          </h2>
          <p className="text-sm sm:text-base text-[#676879] max-w-xl mx-auto font-normal">
            Seven specialized modules covering the complete ERP journey from planning to deployment.
          </p>
        </div>

        {/* Row 1: First 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {LIFECYCLE_CARDS.slice(0, 4).map(renderCard)}
        </div>

        {/* Row 2: Remaining 3 Cards Centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[940px] mx-auto mt-5">
          {LIFECYCLE_CARDS.slice(4).map(renderCard)}
        </div>
      </div>
    </section>
  );
}
