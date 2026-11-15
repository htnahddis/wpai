"use client";

import React, { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

interface ValuePillar {
  id: string;
  category: string;
  title: string;
  summary: string;
  points: string[];
  metricNumber: string;
  metricLabel: string;
  linkText: string;
  linkHref: string;
}

const PILLARS: ValuePillar[] = [
  {
    id: "memory",
    category: "01 // INSTITUTIONAL MEMORY",
    title: "Compounding Intelligence on Every Implementation",
    summary: "Discovery decisions and verified SAP best practices train subsequent engagements, allowing consultants to initiate projects with 80% of standard blueprints already codified.",
    points: [
      "Dynamic repository of Clean Core SAP rules",
      "Immediate detection of custom deviations from standard S/4HANA",
      "Institutional context preserved across handover phases",
    ],
    metricNumber: "100%",
    metricLabel: "Traceability preserved from discovery to code",
    linkText: "Learn about PerciXpert",
    linkHref: "/percixpert",
  },
  {
    id: "governance",
    category: "02 // CLEAN CORE GOVERNANCE",
    title: "Proactive Scope & Architecture Guardrails",
    summary: "Automatically flags out-of-scope customer requests before they turn into dispute-heavy change orders, enforcing side-by-side BTP extensibility.",
    points: [
      "Real-time SOW baseline verification against active sprints",
      "Automated Clean Core audit before code deployment",
      "Proactive schedule and budget dependency impact alerts",
    ],
    metricNumber: "0.0%",
    metricLabel: "Unmonitored scope drift across sprints",
    linkText: "Explore Clean Core Delivery",
    linkHref: "/percixpert",
  },
  {
    id: "automation",
    category: "03 // INSTANT ARTIFACTS",
    title: "Deliverables in Seconds Instead of Weeks",
    summary: "Eliminates manual documentation. Workshop discussions generate audit-ready Solution Design Documents (SDD), LTMC data templates, and Jira epics in seconds.",
    points: [
      "Automated conversion of workshop audio into formal specs",
      "LTMC migration mapping validated against target tables",
      "Instant sync with engineering Jira backlogs",
    ],
    metricNumber: "4.2s",
    metricLabel: "Average functional spec generation time",
    linkText: "See Blueprint Automation",
    linkHref: "/percixpert",
  },
  {
    id: "ams",
    category: "04 // OPERATIONAL AMS",
    title: "Diagnostic Managed Services Handover",
    summary: "Ensures smooth post-go-live operations. PerciServe equips support engineers with complete project history, architecture blueprints, and automated ticket deflection.",
    points: [
      "PerciDesk instant L1 resolution for routine queries",
      "Root-cause diagnostic engine with error logs attached",
      "FUTUROOT process mining layer to monitor adoption",
    ],
    metricNumber: "80%",
    metricLabel: "Routine L1 support inquiries deflected",
    linkText: "Discover PerciServe",
    linkHref: "/perciserve-support-suite",
  },
];

export default function CleanDeliveryPillars() {
  const [selectedPillar, setSelectedPillar] = useState<string>("memory");
  const active = PILLARS.find((p) => p.id === selectedPillar) || PILLARS[0];

  return (
    <section className="w-full bg-white py-16 sm:py-24 border-t border-[#E9E9EF]">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Section Header: No eyebrows, Magenta keyword */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-5xl font-sans font-normal text-[#191923] tracking-tight leading-tight">
            The four pillars of <span className="text-[#FF00B7]">predictable</span> SAP delivery
          </h2>
          <p className="mt-3 text-base text-[#777783]">
            Structured governance and intelligence engineered to eliminate rework and preserve Clean Core standards.
          </p>
        </div>

        {/* 2-Column Clean Interactive Pillar Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Left Column: 4 Pillar Selectors */}
          <div className="lg:col-span-5 flex flex-col gap-2.5">
            {PILLARS.map((pillar) => {
              const isSelected = pillar.id === selectedPillar;
              return (
                <button
                  key={pillar.id}
                  type="button"
                  onClick={() => setSelectedPillar(pillar.id)}
                  className={`text-left p-4 sm:p-5 rounded-2xl border transition-all ${
                    isSelected
                      ? "bg-[#1B1466] text-white border-[#1B1466] shadow-card scale-[1.01]"
                      : "bg-[#F8F8FA] hover:bg-white text-[#191923] border-[#E9E9EF] hover:border-[#1B1466]/30 shadow-2xs"
                  }`}
                >
                  <div
                    className={`text-xs font-mono mb-1 ${
                      isSelected ? "text-[#00B7FF] font-medium" : "text-[#777783]"
                    }`}
                  >
                    {pillar.category}
                  </div>
                  <div
                    className={`font-sans text-base sm:text-lg font-medium leading-snug ${
                      isSelected ? "text-white" : "text-[#191923]"
                    }`}
                  >
                    {pillar.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep Architectural Focus Card */}
          <div className="lg:col-span-7 bg-[#F8F8FA] rounded-2xl border border-[#E9E9EF] p-6 sm:p-10 flex flex-col justify-between shadow-card">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono font-medium text-[#1B1466] bg-[#F0EFFF] px-2.5 py-1 rounded-full">
                  {active.category}
                </span>
                <h3 className="font-sans text-2xl sm:text-3xl font-medium text-[#191923] mt-3 tracking-tight">
                  {active.title}
                </h3>
                <p className="text-sm sm:text-base text-[#777783] mt-3 leading-relaxed font-normal">
                  {active.summary}
                </p>
              </div>

              {/* Verified Proof Points */}
              <div className="space-y-3 pt-2">
                {active.points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#191923]">
                    <div className="w-4 h-4 rounded-full bg-[#E6F8FF] flex items-center justify-center text-[#00B7FF] shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Metric & Link */}
            <div className="pt-6 border-t border-[#E9E9EF] mt-8 flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="font-sans text-2xl sm:text-3xl font-normal text-[#1B1466]">
                  {active.metricNumber}
                </div>
                <div className="text-[11px] font-mono text-[#777783] mt-0.5">
                  {active.metricLabel}
                </div>
              </div>

              <Link
                href={active.linkHref}
                className="inline-flex items-center gap-2 text-sm font-medium text-[#1B1466] hover:text-[#FF00B7] transition-colors group"
              >
                <span>{active.linkText}</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
