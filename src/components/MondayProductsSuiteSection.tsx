"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Workflow,
  Cpu,
  Bot,
  TrendingUp,
  Sparkles,
  Layers,
  ArrowRight,
  Check,
  Zap,
} from "lucide-react";

interface ProductSuiteItem {
  id: string;
  name: string;
  category: string;
  headline: string;
  description: string;
  iconBg: string;
  icon: React.ReactNode;
  href: string;
  highlights: string[];
  mockBoard: {
    title: string;
    rows: {
      task: string;
      lead: string;
      status: { label: string; bg: string; color: string };
      sla: string;
    }[];
  };
}

const SUITES: ProductSuiteItem[] = [
  {
    id: "percixpert",
    name: "PerciXpert",
    category: "AI IMPLEMENTATION",
    headline: "Automate SAP S/4HANA Blueprints",
    description: "Turns workshop discussions into audit-ready Solution Design Documents (SDD), verified Clean Core scope items, and Jira backlog tasks in seconds.",
    iconBg: "bg-blue-50 text-blue-600 border border-blue-100",
    icon: <Workflow className="w-5 h-5" />,
    href: "/percixpert",
    highlights: [
      "4.2s Automated Functional Specs (FSD/SDD)",
      "Instant Clean Core Fit-to-Standard validation",
      "Automated LTMC data migration mapping",
    ],
    mockBoard: {
      title: "Active Blueprint: MM & Finance",
      rows: [
        {
          task: "MM-104: Stock Transport Order",
          lead: "Sourabh K.",
          status: { label: "Standard", bg: "bg-emerald-50 text-emerald-700 border border-emerald-200", color: "" },
          sla: "4.2s",
        },
        {
          task: "FI-201: Intercompany Settlement",
          lead: "Kunal G.",
          status: { label: "Ready", bg: "bg-blue-50 text-blue-700 border border-blue-200", color: "" },
          sla: "5.8s",
        },
        {
          task: "SD-305: Dynamic Pricing Rules",
          lead: "Aditya P.",
          status: { label: "Side-by-Side BTP", bg: "bg-amber-50 text-amber-700 border border-amber-200", color: "" },
          sla: "3.9s",
        },
      ],
    },
  },
  {
    id: "perciserve",
    name: "PerciServe",
    category: "SUPPORT & AMS",
    headline: "Diagnostic Enterprise Support",
    description: "Combines PerciDesk for instant L1 inquiry resolution with automated L2/L3 diagnostic telemetry that attaches affected SAP tables and fix recommendations.",
    iconBg: "bg-emerald-50 text-emerald-600 border border-emerald-100",
    icon: <Cpu className="w-5 h-5" />,
    href: "/perciserve-support-suite",
    highlights: [
      "PerciDesk instant L1 resolution for routine queries",
      "Root-cause diagnostic engine with error logs",
      "FUTUROOT process mining layer for adoption",
    ],
    mockBoard: {
      title: "Global SAP Support Queue",
      rows: [
        {
          task: "INC-8891: Settlement Run Stalled",
          lead: "PerciDesk L1",
          status: { label: "Resolved", bg: "bg-emerald-50 text-emerald-700 border border-emerald-200", color: "" },
          sla: "0.8s",
        },
        {
          task: "INC-8894: IDoc Port Failure",
          lead: "PerciServe",
          status: { label: "Root Cause Found", bg: "bg-purple-50 text-purple-700 border border-purple-200", color: "" },
          sla: "1.4m",
        },
        {
          task: "PRB-2041: Table Lock Contention",
          lead: "AMS Ops",
          status: { label: "Patch Ready", bg: "bg-blue-50 text-blue-700 border border-blue-200", color: "" },
          sla: "Today",
        },
      ],
    },
  },
  {
    id: "percihub",
    name: "PerciHub",
    category: "BUSINESS AGENTS",
    headline: "Autonomous ERP Agents",
    description: "Context-aware AI agents executing Purchase Orders, quality inspections, and bank reconciliations directly inside standard SAP processes with zero manual touch.",
    iconBg: "bg-purple-50 text-purple-600 border border-purple-100",
    icon: <Bot className="w-5 h-5" />,
    href: "/percihub-business-suite",
    highlights: [
      "98.4% Touchless 3-way PO invoice matching",
      "Automated quality inspection clearance",
      "Autonomous bank statement reconciliations",
    ],
    mockBoard: {
      title: "Autonomous Agent Fleet",
      rows: [
        {
          task: "AP-3Way Match: Supplier Invoices",
          lead: "Finance Agent",
          status: { label: "Cleared 98%", bg: "bg-emerald-50 text-emerald-700 border border-emerald-200", color: "" },
          sla: "Instant",
        },
        {
          task: "PO Auto-Release for Approved PRs",
          lead: "P2P Agent",
          status: { label: "Autonomous", bg: "bg-blue-50 text-blue-700 border border-blue-200", color: "" },
          sla: "Live",
        },
        {
          task: "Bank Statement Forex Allocations",
          lead: "Treasury Bot",
          status: { label: "Zero Delta", bg: "bg-emerald-50 text-emerald-700 border border-emerald-200", color: "" },
          sla: "Daily",
        },
      ],
    },
  },
  {
    id: "xpa-epm",
    name: "xP&A / EPM",
    category: "EXTENDED PLANNING",
    headline: "52-Week Continuous Forecasts",
    description: "Connects Finance, Sales, HR, and Supply Chain in one plan on SAP Analytics Cloud with continuous 52-week rolling forecasts and automated consolidation.",
    iconBg: "bg-orange-50 text-orange-600 border border-orange-100",
    icon: <TrendingUp className="w-5 h-5" />,
    href: "/what-we-do/intelligence-enterprise-offerings/xpa-epm",
    highlights: [
      "Continuous 52-week rolling financial model",
      "Automated multi-currency group consolidation",
      "Direct integration with SAP S/4HANA supply chain",
    ],
    mockBoard: {
      title: "52-Week Rolling Forecast (SAC)",
      rows: [
        {
          task: "Consolidated Group P&L (80+ Entities)",
          lead: "Michele P.",
          status: { label: "Synchronized", bg: "bg-emerald-50 text-emerald-700 border border-emerald-200", color: "" },
          sla: "Live",
        },
        {
          task: "Working Capital & Inventory (PerciScan)",
          lead: "Supply Chain",
          status: { label: "Optimised", bg: "bg-blue-50 text-blue-700 border border-blue-200", color: "" },
          sla: "Weekly",
        },
        {
          task: "Commercial FTE & Headcount Ramp",
          lead: "Finance & HR",
          status: { label: "Approved", bg: "bg-emerald-50 text-emerald-700 border border-emerald-200", color: "" },
          sla: "Quarterly",
        },
      ],
    },
  },
  {
    id: "sap-business-ai",
    name: "SAP Business AI",
    category: "EMBEDDED AI",
    headline: "Intelligence in SAP Workflows",
    description: "Bring intelligence directly into finance, procurement, and operations using SAP Joule, SAP BTP AI Foundation, and custom LangGraph agents safely.",
    iconBg: "bg-pink-50 text-pink-600 border border-pink-100",
    icon: <Sparkles className="w-5 h-5" />,
    href: "/sap-business-ai",
    highlights: [
      "SAP Joule Copilot extensions on SAP BTP",
      "Enterprise LangGraph agents for multi-system ERP",
      "Strict Clean Core compliance and data isolation",
    ],
    mockBoard: {
      title: "Joule & Agent Registry",
      rows: [
        {
          task: "Joule Natural Language Order Inquiries",
          lead: "Commercial Ops",
          status: { label: "Active Joule", bg: "bg-emerald-50 text-emerald-700 border border-emerald-200", color: "" },
          sla: "< 1s",
        },
        {
          task: "Contract OCR to Sales Order Creation",
          lead: "Order-to-Cash",
          status: { label: "BTP Stream", bg: "bg-blue-50 text-blue-700 border border-blue-200", color: "" },
          sla: "1.2s",
        },
        {
          task: "Vendor Risk Intelligence Screening",
          lead: "Procurement",
          status: { label: "Automated", bg: "bg-purple-50 text-purple-700 border border-purple-200", color: "" },
          sla: "Instant",
        },
      ],
    },
  },
  {
    id: "ai-acceleration",
    name: "AI Acceleration",
    category: "STRATEGIC ADVISORY",
    headline: "30-Day Value Blueprint",
    description: "Strategic roadmapping and proprietary PerciSuite tools (PerciScan, PerciBot, PerciEstimate) to evaluate data readiness and deploy high-ROI AI safely.",
    iconBg: "bg-zinc-100 text-zinc-800 border border-zinc-200",
    icon: <Layers className="w-5 h-5" />,
    href: "/what-we-do/intelligence-enterprise-offerings/ai-acceleration",
    highlights: [
      "30-Day Value Blueprint with prioritized use cases",
      "Enterprise data readiness and governance audit",
      "Pre-built PerciSuite warehouse and estimation tools",
    ],
    mockBoard: {
      title: "AI Acceleration Roadmap",
      rows: [
        {
          task: "30-Day High-ROI Value Prioritization",
          lead: "Advisory Team",
          status: { label: "Complete", bg: "bg-emerald-50 text-emerald-700 border border-emerald-200", color: "" },
          sla: "Day 30",
        },
        {
          task: "SAP Data Foundation Audit",
          lead: "Architecture",
          status: { label: "Verified", bg: "bg-blue-50 text-blue-700 border border-blue-200", color: "" },
          sla: "Week 02",
        },
        {
          task: "PerciScan Warehouse Deployment (OS Doors)",
          lead: "Delivery Team",
          status: { label: "4-Week Roll", bg: "bg-amber-50 text-amber-700 border border-amber-200", color: "" },
          sla: "Week 04",
        },
      ],
    },
  },
];

export default function MondayProductsSuiteSection() {
  const [activeSuiteId, setActiveSuiteId] = useState<string>("percixpert");
  const current = SUITES.find((s) => s.id === activeSuiteId) || SUITES[0];

  return (
    <section id="offerings" className="w-full bg-[#FAFBFD] py-16 sm:py-20 border-t border-zinc-200">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 block mb-2 font-medium">
            The 6 Enterprise Offerings
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif text-zinc-900 tracking-tight leading-tight">
            End-to-end suites for the full SAP lifecycle
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-zinc-600">
            Select a suite to view real-time delivery blueprints, autonomous agents, and support metrics.
          </p>
        </div>

        {/* Minimal Material Tab Selector */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-8">
          {SUITES.map((suite) => {
            const isSelected = suite.id === activeSuiteId;
            return (
              <button
                key={suite.id}
                type="button"
                onClick={() => setActiveSuiteId(suite.id)}
                className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-all ${
                  isSelected
                    ? "bg-white border-zinc-900 shadow-sm ring-1 ring-zinc-900/10"
                    : "bg-white/70 border-zinc-200/80 hover:bg-white hover:border-zinc-300"
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-1.5 ${suite.iconBg}`}>
                  {suite.icon}
                </div>
                <div className={`text-xs font-semibold ${isSelected ? "text-zinc-900" : "text-zinc-600"}`}>
                  {suite.name}
                </div>
                <div className="text-[10px] text-zinc-400 font-mono line-clamp-1">
                  {suite.category}
                </div>
              </button>
            );
          })}
        </div>

        {/* Material UI-Styled Card Surface */}
        <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Compact Description */}
            <div className="lg:col-span-5 space-y-4">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium tracking-wide bg-zinc-100 text-zinc-700 border border-zinc-200">
                {current.category}
              </span>

              <h3 className="text-xl sm:text-2xl font-serif text-zinc-900 font-normal leading-snug">
                {current.headline}
              </h3>

              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                {current.description}
              </p>

              {/* Concise Capabilities */}
              <div className="space-y-2 pt-3 border-t border-zinc-100">
                {current.highlights.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3" />
                    </span>
                    <span className="text-xs text-zinc-800 font-medium">{feat}</span>
                  </div>
                ))}
              </div>

              {/* Direct Link */}
              <div className="pt-2">
                <Link
                  href={current.href}
                  className="button-primary text-xs px-5 py-2.5 inline-flex items-center gap-1.5"
                >
                  <span>Explore {current.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Column: Clean Material Board Data */}
            <div className="lg:col-span-7 bg-zinc-50/70 rounded-xl border border-zinc-200/90 overflow-hidden">
              <div className="px-4 py-2.5 bg-white border-b border-zinc-200 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span className="font-mono text-zinc-800 font-medium text-[11px]">
                    {current.mockBoard.title}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-zinc-400">Live SAP Sync</span>
              </div>

              <div className="divide-y divide-zinc-200/60 text-xs">
                {current.mockBoard.rows.map((row, idx) => (
                  <div key={idx} className="p-3 bg-white flex items-center justify-between gap-3 hover:bg-zinc-50/80 transition-colors">
                    <div className="min-w-0 flex-1">
                      <div className="font-medium text-zinc-900 truncate text-xs">{row.task}</div>
                      <div className="text-[10px] font-mono text-zinc-400 mt-0.5">{row.lead}</div>
                    </div>
                    <div className="shrink-0 flex items-center gap-3">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-medium ${row.status.bg}`}>
                        {row.status.label}
                      </span>
                      <span className="text-[10px] font-mono text-zinc-500 w-12 text-right">
                        {row.sla}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="px-4 py-2 bg-zinc-50 border-t border-zinc-200 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                <span>SAP S/4HANA Cloud</span>
                <span className="text-emerald-700 font-medium flex items-center gap-1">
                  <Zap className="w-2.5 h-2.5" />
                  <span>Autonomous Execution Active</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
