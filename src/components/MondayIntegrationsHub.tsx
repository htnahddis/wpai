"use client";

import React, { useState } from "react";
import { Link2, ArrowRight } from "lucide-react";

interface IntegrationGroup {
  id: string;
  name: string;
  apps: {
    name: string;
    description: string;
    syncType: string;
    badgeBg: string;
  }[];
}

const INTEGRATION_GROUPS: IntegrationGroup[] = [
  {
    id: "sap-core",
    name: "SAP Ecosystem",
    apps: [
      {
        name: "SAP S/4HANA Cloud",
        description: "Direct bidirectional sync with standard business objects, clean-core APIs, and event logs.",
        syncType: "Native OData & BAPI",
        badgeBg: "bg-blue-50 text-blue-700 border-blue-200",
      },
      {
        name: "SAP BTP AI Foundation",
        description: "Deploy side-by-side LangGraph agents and Joule copilot extensions safely.",
        syncType: "Side-by-Side Extensibility",
        badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
      },
      {
        name: "SAP Analytics Cloud (SAC)",
        description: "Automate continuous 52-week rolling financial and supply chain planning models.",
        syncType: "Live SAC Connector",
        badgeBg: "bg-orange-50 text-orange-700 border-orange-200",
      },
    ],
  },
  {
    id: "productivity",
    name: "Delivery & ITSM",
    apps: [
      {
        name: "Jira Software",
        description: "Translate Solution Design Documents (SDD) into epics, stories, and sprint tasks.",
        syncType: "Two-way Backlog Sync",
        badgeBg: "bg-blue-50 text-blue-700 border-blue-200",
      },
      {
        name: "Microsoft 365 & Teams",
        description: "Discovery transcription, constraint detection, and automated ticket approvals.",
        syncType: "Graph Webhook",
        badgeBg: "bg-indigo-50 text-indigo-700 border-indigo-200",
      },
      {
        name: "ServiceNow ITSM",
        description: "Auto-escalate complex tickets from PerciDesk with root-cause diagnostic tables.",
        syncType: "REST Integration",
        badgeBg: "bg-teal-50 text-teal-700 border-teal-200",
      },
    ],
  },
  {
    id: "data-process",
    name: "Intelligence & CRM",
    apps: [
      {
        name: "FUTUROOT Process Mining",
        description: "Process intelligence platform mapping transaction variants and post-go-live adoption.",
        syncType: "Event Log Ingestion",
        badgeBg: "bg-purple-50 text-purple-700 border-purple-200",
      },
      {
        name: "Salesforce CRM",
        description: "Connect customer sales agreements, pipeline quotes, and CPQ directly to S/4HANA.",
        syncType: "Bi-directional Sync",
        badgeBg: "bg-sky-50 text-sky-700 border-sky-200",
      },
      {
        name: "UiPath Automation",
        description: "Augment autonomous agents with certified RPA task execution across legacy apps.",
        syncType: "Orchestrator API",
        badgeBg: "bg-orange-50 text-orange-700 border-orange-200",
      },
    ],
  },
];

export default function MondayIntegrationsHub() {
  const [activeGroup, setActiveGroup] = useState<string>("sap-core");
  const current = INTEGRATION_GROUPS.find((g) => g.id === activeGroup) || INTEGRATION_GROUPS[0];

  return (
    <section className="w-full bg-[#FAFBFD] py-16 sm:py-20 border-t border-zinc-200">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl font-sans text-[#191923] tracking-tight leading-tight font-normal">
            Integrated with your enterprise tech stack
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-zinc-600">
            Bi-directional synchronization across core ERP, agile delivery backlogs, and ITSM support systems.
          </p>
        </div>

        {/* Minimal Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {INTEGRATION_GROUPS.map((group) => {
            const isActive = group.id === activeGroup;
            return (
              <button
                key={group.id}
                type="button"
                onClick={() => setActiveGroup(group.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? "bg-zinc-900 text-white shadow-xs"
                    : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200/80 hover:text-zinc-900"
                }`}
              >
                {group.name}
              </button>
            );
          })}
        </div>

        {/* 3 Clean Material Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {current.apps.map((app, i) => (
            <div
              key={i}
              className="p-5 sm:p-6 rounded-xl border border-zinc-200 bg-white hover:border-zinc-400 hover:shadow-xs transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-medium border ${app.badgeBg}`}>
                    {app.syncType}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                </div>

                <div className="text-base font-serif font-bold text-zinc-900 mb-1.5">
                  {app.name}
                </div>

                <p className="text-xs text-zinc-600 leading-relaxed">
                  {app.description}
                </p>
              </div>

              <div className="pt-3.5 mt-5 border-t border-zinc-100 flex items-center justify-between text-[10px] font-mono text-zinc-400">
                <span>Certified Protocol</span>
                <span className="text-emerald-700 font-medium">Ready</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
