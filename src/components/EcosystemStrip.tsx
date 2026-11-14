"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Cpu, Layers, GitBranch, Database, ShieldCheck, Activity } from "lucide-react";

export default function EcosystemStrip({ current }: { current?: string }) {
  const pillars = [
    {
      name: "PerciXpert",
      role: "Implementation & Audit",
      desc: "Requirements to SDD & AMS handover",
      href: "/percixpert",
      icon: Cpu,
    },
    {
      name: "PerciServe",
      role: "Intelligent Support",
      desc: "Instant L1 answer to L2/L3 root-cause",
      href: "/perciserve-support-suite",
      icon: Activity,
    },
    {
      name: "PerciHub",
      role: "Context AI Agents",
      desc: "Autonomous workflows directly in SAP",
      href: "/percihub-business-suite",
      icon: GitBranch,
    },
    {
      name: "xP&A / PerciPlan",
      role: "Enterprise Planning",
      desc: "Cross-functional planning on SAC",
      href: "/what-we-do/intelligence-enterprise-offerings/xpa-epm",
      icon: Database,
    },
    {
      name: "FUTUROOT",
      role: "Process Intelligence",
      desc: "P2P/O2C mining & continuous monitoring",
      href: "/perciserve-support-suite#workflow",
      icon: Layers,
    },
  ];

  return (
    <section className="py-14 bg-[#F8F8F8] border-y border-[#E8E8E8]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#E8E8E8]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0D5CE5]">
              The PerciVerse Ecosystem
            </span>
            <h3 className="font-serif text-2xl font-normal text-[#292A2E] mt-1">
              Connected Enterprise Intelligence for SAP
            </h3>
          </div>
          <p className="text-xs text-[#64676D] mt-2 md:mt-0 max-w-md">
            Each offering operates independently or combines across the complete SAP lifecycle — enriched by FUTUROOT process intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
          {pillars.map((item) => {
            const isSelf = current === item.name;
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`p-4 rounded-xl border transition-all text-left group ${
                  isSelf
                    ? "bg-white border-[#0D5CE5] shadow-card ring-1 ring-blue-100"
                    : "bg-white border-[#E8E8E8] hover:border-blue-300 hover:shadow-card"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="w-8 h-8 rounded-lg bg-[#F8F8F8] border border-[#E8E8E8] flex items-center justify-center text-[#292A2E] group-hover:text-[#0D5CE5] transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  {isSelf ? (
                    <span className="text-[10px] font-semibold text-[#0D5CE5] uppercase tracking-wider px-2 py-0.5 bg-blue-50 rounded-full">
                      Current
                    </span>
                  ) : (
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#8A8D93] group-hover:text-[#0D5CE5] transition-colors" />
                  )}
                </div>
                <h4 className="text-sm font-semibold text-[#292A2E] group-hover:text-[#0D5CE5] transition-colors">
                  {item.name}
                </h4>
                <p className="text-[11px] font-medium text-[#0D5CE5] mt-0.5">
                  {item.role}
                </p>
                <p className="text-xs text-[#64676D] mt-1 leading-snug">
                  {item.desc}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
