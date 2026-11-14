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
    summary: "Eliminates manual documentation. Workshop discussions generate audit-ready Solution Design Documents (SDD), LTMC data templates, and Jira epics in 4.2 seconds.",
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
    summary: "Ensures smooth post-go-live operations. PerciServe equips support engineers with complete project history, architecture blueprints, and automated L1 ticket deflection.",
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
    <section className="w-full bg-white py-16 sm:py-20 border-t border-zinc-200">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 block mb-2 font-medium">
            Core Foundations
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif text-zinc-900 tracking-tight leading-tight">
            The four pillars of predictable SAP delivery
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-zinc-600">
            Structured governance and intelligence engineered to eliminate rework and preserve Clean Core standards.
          </p>
        </div>

        {/* 2-Column Clean Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left: 4 Selector Items */}
          <div className="lg:col-span-5 space-y-2.5">
            {PILLARS.map((p) => {
              const isCurrent = p.id === selectedPillar;
              return (
                <div
                  key={p.id}
                  onClick={() => setSelectedPillar(p.id)}
                  className={`p-4 rounded-xl cursor-pointer transition-all border text-left ${
                    isCurrent
                      ? "bg-zinc-50 border-zinc-900 shadow-xs ring-1 ring-zinc-900/10"
                      : "bg-white border-zinc-200 hover:border-zinc-300"
                  }`}
                >
                  <div className="text-[10px] font-mono text-zinc-400 mb-1">
                    {p.category}
                  </div>
                  <div className={`text-xs sm:text-sm font-semibold leading-snug ${isCurrent ? "text-zinc-900" : "text-zinc-600"}`}>
                    {p.title}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Detailed Stage Card */}
          <div className="lg:col-span-7 bg-[#FAFBFD] rounded-2xl border border-zinc-200 p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-mono font-medium mb-3 bg-white border border-zinc-200 text-zinc-700">
                {active.category}
              </span>

              <h3 className="text-xl sm:text-2xl font-serif text-zinc-900 font-normal leading-snug mb-3">
                {active.title}
              </h3>

              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-6">
                {active.summary}
              </p>

              <div className="space-y-2.5 pt-4 border-t border-zinc-200/80">
                {active.points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </span>
                    <span className="text-xs text-zinc-800 font-medium">{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-zinc-200/80 flex items-center justify-between gap-4">
              <div>
                <div className="text-2xl sm:text-3xl font-serif text-zinc-900 font-bold">
                  {active.metricNumber}
                </div>
                <div className="text-[10px] text-zinc-400 font-mono">
                  {active.metricLabel}
                </div>
              </div>

              <Link
                href={active.linkHref}
                className="button-primary text-xs px-4 py-2 inline-flex items-center gap-1.5"
              >
                <span>{active.linkText}</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
