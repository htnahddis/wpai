"use client";

import React from "react";
import { Check, ShieldAlert, Cpu, Bot, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function MondayAccelerateCards({ onOpenModal }: { onOpenModal: () => void }) {
  const agentCards = [
    {
      agentName: "Risk Detection & Scope Guard",
      badge: "DELIVERY GOVERNANCE",
      icon: <ShieldAlert className="w-5 h-5 text-[#FF4400]" />,
      heading: "Proactive Scope & Variance Detection",
      description:
        "Scans project discussions, status updates, and SOW baselines to flag potential roadblocks and custom code deviations before they impact delivery schedules.",
      features: [
        "Continuous SOW baseline variance monitoring",
        "Automated Clean Core audit before sprint code merges",
        "Cross-project dependency & budget impact scoring",
      ],
      metric: "0.0% Unmonitored Scope Drift",
      linkText: "Explore Governance Guardrails",
      linkHref: "/percixpert",
    },
    {
      agentName: "Blueprint Generation Engine",
      badge: "ARCHITECTURE AGENT",
      icon: <Cpu className="w-5 h-5 text-[#0070F2]" />,
      heading: "Instant Audit-Ready Blueprints",
      description:
        "Transforms discovery transcripts and business requirements into complete, audit-ready Solution Design Documents (SDD), LTMC schemas, and Jira stories in seconds.",
      features: [
        "4.2s average functional spec derivation",
        "Direct mapping to standard SAP S/4HANA best-practice scope items",
        "Automated LTMC migration templates with zero manual typing",
      ],
      metric: "4.2s Functional Blueprint Generation",
      linkText: "See Blueprint Automation",
      linkHref: "/percixpert",
    },
    {
      agentName: "Diagnostic AMS & Touchless Support",
      badge: "SUPPORT SUITE",
      icon: <Bot className="w-5 h-5 text-[#10B981]" />,
      heading: "Root-Cause Intelligence for SAP Operations",
      description:
        "Resolves routine user questions in seconds and hands complex bugs to support engineers with root-cause traces, affected tables, and fix suggestions attached.",
      features: [
        "80% routine L1/L2 inquiry deflection rate",
        "Root-cause diagnostic logs with affected SAP tables identified",
        "FUTUROOT process mining layer for continuous user adoption tracking",
      ],
      metric: "80% Routine Ticket Deflection",
      linkText: "Discover PerciServe Support",
      linkHref: "/perciserve-support-suite",
    },
  ];

  return (
    <section className="w-full bg-white py-16 sm:py-24 border-t border-[#EBEBED]">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Monday.com PMO Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#737373] font-medium block mb-2">
            AI FOR SAP PROJECT &amp; AMS DELIVERY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] leading-tight text-[#171717] tracking-tight">
            Accelerate enterprise delivery with purpose-built AI agents
          </h2>
          <p className="mt-3 text-base text-[#676879] max-w-2xl mx-auto leading-relaxed">
            Supercharge every phase of your SAP lifecycle with specialized agents that automate documentation, enforce Clean Core standards, and eliminate delivery surprises.
          </p>
        </div>

        {/* Monday.com Clean Horizontal Agent Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {agentCards.map((card, i) => (
            <div
              key={i}
              className="bg-[#FAFAFC] rounded-2xl p-7 border border-[#EBEBED] hover:border-[#171717] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Card Top Row: Icon + Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-2.5 rounded-xl bg-white border border-[#E5E5E8] shadow-2xs group-hover:border-[#171717]/20 transition-colors">
                    {card.icon}
                  </div>
                  <span className="text-[10px] font-mono tracking-wider text-[#737373] bg-[#EFEFEA] px-2.5 py-1 rounded-full uppercase font-medium">
                    {card.badge}
                  </span>
                </div>

                <div className="text-xs font-mono text-[#0070F2] font-semibold mb-1">
                  {card.agentName}
                </div>
                <h3 className="font-serif text-xl font-medium text-[#171717] tracking-tight mb-3 group-hover:text-[#FF4400] transition-colors">
                  {card.heading}
                </h3>
                <p className="text-[13px] text-[#555559] leading-relaxed mb-6">
                  {card.description}
                </p>

                {/* Feature Checklist with Checkmarks */}
                <div className="space-y-2.5 pt-4 border-t border-[#E5E5E8]/80 mb-6">
                  {card.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-[12px] text-[#333333]">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Metric + Link */}
              <div className="pt-4 border-t border-[#E5E5E8] flex items-center justify-between">
                <span className="text-[11px] font-mono font-medium text-emerald-700">
                  {card.metric}
                </span>
                <Link
                  href={card.linkHref}
                  className="inline-flex items-center gap-1 text-[12px] font-medium text-[#171717] hover:text-[#FF4400] transition-colors"
                >
                  <span>{card.linkText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Security & Governance Badges (Monday.com PMO Guardrails Pattern) */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 bg-[#F6F6F3] rounded-2xl border border-[#ECECEC] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="text-sm font-semibold text-[#171717]">
              Enterprise-Grade Governance &amp; Data Sovereignty
            </div>
            <div className="text-xs text-[#676879] mt-0.5">
              Engineered exclusively for private enterprise VPCs. Customer code and business data never train public foundation models.
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 shrink-0">
            <span className="px-3 py-1.5 rounded-full bg-white border border-[#DCDCD8] text-[11px] font-mono text-[#333333] shadow-2xs">
              ISO 27001:2022 Certified
            </span>
            <span className="px-3 py-1.5 rounded-full bg-white border border-[#DCDCD8] text-[11px] font-mono text-[#333333] shadow-2xs">
              SOC 2 Type II Audited
            </span>
            <span className="px-3 py-1.5 rounded-full bg-white border border-[#DCDCD8] text-[11px] font-mono text-[#333333] shadow-2xs">
              SAP Clean Core Verified
            </span>
            <span className="px-3 py-1.5 rounded-full bg-white border border-[#DCDCD8] text-[11px] font-mono text-[#333333] shadow-2xs">
              GDPR &amp; UK Data Protection
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

