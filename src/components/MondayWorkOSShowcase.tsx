"use client";

import React, { useState } from "react";
import { Check, Sparkles, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

interface WorkOSStage {
  id: string;
  name: string;
  badge: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  boardData: {
    groupTitle: string;
    items: {
      name: string;
      owner: string;
      status: { text: string; bg: string };
      timeline: string;
      aiIndicator?: string;
    }[];
  };
}

const WORK_OS_STAGES: WorkOSStage[] = [
  {
    id: "discovery",
    name: "01. Discovery & Blueprint",
    badge: "PERCIXPERT",
    title: "Workshop Audio to Audit-Ready Blueprints",
    description: "PerciXpert transcribes live discovery, verifies standard Clean Core scope items, and generates Solution Design Documents (SDD) in seconds.",
    linkText: "Explore PerciXpert",
    linkHref: "/percixpert",
    boardData: {
      groupTitle: "Scoping & Architecture Stream",
      items: [
        {
          name: "MM-104: Stock Transport Order",
          owner: "Sourabh K.",
          status: { text: "Standard", bg: "bg-emerald-50 text-emerald-700 border border-emerald-200" },
          timeline: "Day 01-03",
          aiIndicator: "Mapped to J58 standard",
        },
        {
          name: "FI-201: Multi-Currency Settlement",
          owner: "Kunal G.",
          status: { text: "Blueprinted", bg: "bg-blue-50 text-blue-700 border border-blue-200" },
          timeline: "Day 04-06",
          aiIndicator: "FSD generated in 4.2s",
        },
        {
          name: "SD-305: Customer Pricing & Rebates",
          owner: "Aditya P.",
          status: { text: "Side-by-Side BTP", bg: "bg-amber-50 text-amber-700 border border-amber-200" },
          timeline: "Day 07-09",
          aiIndicator: "Scope delta resolved",
        },
      ],
    },
  },
  {
    id: "build",
    name: "02. Agile Build & Migration",
    badge: "CLEAN CORE",
    title: "Zero Scope Rework Between Scoping and Sprints",
    description: "Scope items translate directly into living Jira backlogs and automated LTMC migration scripts with zero spreadsheet drift.",
    linkText: "Discover Clean Core",
    linkHref: "/percixpert",
    boardData: {
      groupTitle: "Sprint 04: Financials & Migration",
      items: [
        {
          name: "LTMC Migration: AP/AR & Fixed Assets",
          owner: "Data Migration",
          status: { text: "Validated", bg: "bg-emerald-50 text-emerald-700 border border-emerald-200" },
          timeline: "Sprint 04",
          aiIndicator: "0 Reconciliation errors",
        },
        {
          name: "Joule Copilot Extension for PO Approvals",
          owner: "Vinay P.",
          status: { text: "In Progress", bg: "bg-blue-50 text-blue-700 border border-blue-200" },
          timeline: "Sprint 04",
          aiIndicator: "SAP BTP certified flow",
        },
        {
          name: "Custom Exit Refactor to Side-by-Side BTP",
          owner: "Core Guard",
          status: { text: "Audited", bg: "bg-emerald-50 text-emerald-700 border border-emerald-200" },
          timeline: "Sprint 05",
          aiIndicator: "Zero core modifications",
        },
      ],
    },
  },
  {
    id: "ams",
    name: "03. Autonomous AMS & Run",
    badge: "PERCISERVE",
    title: "Diagnostic Support Without Firefighting",
    description: "PerciDesk deflects routine L1 inquiries instantaneously, while handing complex bugs to engineers with attached root cause tables.",
    linkText: "Explore PerciServe",
    linkHref: "/perciserve-support-suite",
    boardData: {
      groupTitle: "Support Queue & Telemetry",
      items: [
        {
          name: "INC-8891: Periodic Settlement Stalled",
          owner: "PerciDesk L1",
          status: { text: "Auto-Resolved", bg: "bg-emerald-50 text-emerald-700 border border-emerald-200" },
          timeline: "0.8s",
          aiIndicator: "Posting period auto-cleared",
        },
        {
          name: "INC-8894: IDoc Port Error EMEA DC",
          owner: "PerciServe",
          status: { text: "Root Cause Logged", bg: "bg-purple-50 text-purple-700 border border-purple-200" },
          timeline: "1.4m",
          aiIndicator: "EDI port profile updated",
        },
        {
          name: "PRB-2041: Table Lock Contention",
          owner: "AMS Ops",
          status: { text: "Patch Ready", bg: "bg-blue-50 text-blue-700 border border-blue-200" },
          timeline: "Today",
          aiIndicator: "Index optimization attached",
        },
      ],
    },
  },
  {
    id: "planning",
    name: "04. Continuous xP&A",
    badge: "SAC PLANNING",
    title: "Unify Finance and Supply Chain in One Plan",
    description: "Replaces annual static spreadsheets with live 52-week rolling forecasts and automated consolidation on SAP Analytics Cloud.",
    linkText: "Explore xP&A",
    linkHref: "/what-we-do/intelligence-enterprise-offerings/xpa-epm",
    boardData: {
      groupTitle: "52-Week Rolling Financial Model",
      items: [
        {
          name: "Consolidated Group Financials (80+ Entities)",
          owner: "Michele P.",
          status: { text: "Synchronized", bg: "bg-emerald-50 text-emerald-700 border border-emerald-200" },
          timeline: "Live SAC",
          aiIndicator: "Auto currency translation",
        },
        {
          name: "Working Capital & Inventory (PerciScan)",
          owner: "Supply Chain",
          status: { text: "Optimised", bg: "bg-blue-50 text-blue-700 border border-blue-200" },
          timeline: "Weekly",
          aiIndicator: "99.9% Inventory accuracy",
        },
        {
          name: "Direct Margin & ESG Targets",
          owner: "Board Model",
          status: { text: "Approved", bg: "bg-emerald-50 text-emerald-700 border border-emerald-200" },
          timeline: "Quarterly",
          aiIndicator: "Audit-ready ESG disclosure",
        },
      ],
    },
  },
];

export default function MondayWorkOSShowcase() {
  const [activeStageId, setActiveStageId] = useState<string>("discovery");
  const activeStage = WORK_OS_STAGES.find((s) => s.id === activeStageId) || WORK_OS_STAGES[0];

  return (
    <section className="w-full bg-white py-16 sm:py-20 border-t border-zinc-200">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 block mb-2 font-medium">
            Lifecycle Work OS
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif text-zinc-900 tracking-tight leading-tight">
            How work flows across the SAP implementation
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-zinc-600">
            Real-time synchronization between scoping, delivery sprints, and managed AMS support.
          </p>
        </div>

        {/* Clean Material Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {WORK_OS_STAGES.map((stage) => {
            const isActive = stage.id === activeStageId;
            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => setActiveStageId(stage.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? "bg-zinc-900 text-white shadow-xs"
                    : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200/80 hover:text-zinc-900"
                }`}
              >
                {stage.name}
              </button>
            );
          })}
        </div>

        {/* Material Board Card */}
        <div className="bg-[#FAFBFD] rounded-2xl border border-zinc-200 overflow-hidden shadow-xs">
          <div className="px-5 py-3.5 bg-white border-b border-zinc-200 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              <span className="text-xs font-semibold text-zinc-900 font-mono">
                {activeStage.boardData.groupTitle}
              </span>
            </div>
            <Link
              href={activeStage.linkHref}
              className="text-xs font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1"
            >
              <span>{activeStage.linkText}</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Clean Data Rows */}
          <div className="divide-y divide-zinc-200/70 text-xs">
            {activeStage.boardData.items.map((item, idx) => (
              <div key={idx} className="p-3.5 sm:p-4 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-zinc-50/80 transition-colors">
                <div className="flex items-start gap-2.5 min-w-0">
                  <span className="w-1 self-stretch rounded-full bg-blue-600 shrink-0 mt-0.5"></span>
                  <div>
                    <div className="font-medium text-zinc-900 text-xs sm:text-sm">{item.name}</div>
                    {item.aiIndicator && (
                      <div className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-700 mt-0.5">
                        <Sparkles className="w-2.5 h-2.5 text-emerald-500" />
                        <span>{item.aiIndicator}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-4 shrink-0 pl-3.5 sm:pl-0">
                  <span className="text-[11px] font-mono text-zinc-500">{item.owner}</span>
                  <span className={`px-2.5 py-0.5 rounded text-[10px] font-medium ${item.status.bg}`}>
                    {item.status.text}
                  </span>
                  <div className="text-[10px] font-mono text-zinc-400 flex items-center gap-1 w-20 justify-end">
                    <Clock className="w-3 h-3" />
                    <span>{item.timeline}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Card Summary Footer */}
          <div className="p-4 sm:p-5 bg-zinc-50/70 border-t border-zinc-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="text-xs font-semibold text-zinc-900">{activeStage.title}</div>
              <div className="text-[11px] text-zinc-500 mt-0.5 leading-relaxed">{activeStage.description}</div>
            </div>
            <Link
              href={activeStage.linkHref}
              className="button-primary text-xs px-4 py-2 shrink-0 self-start sm:self-auto"
            >
              <span>{activeStage.linkText}</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
