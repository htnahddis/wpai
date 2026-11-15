"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Cpu, Layers, GitBranch, Database, Activity, Sparkles } from "lucide-react";

export default function EcosystemStrip({ current }: { current?: string }) {
  const pillars = [
    {
      name: "SAP Business AI",
      role: "Joule & Autonomous Fleet",
      desc: "Clean Core AI execution",
      href: "/sap-business-ai",
      icon: Sparkles,
    },
    {
      name: "PerciXpert",
      role: "Delivery Engine",
      desc: "Scoping to auto-blueprints",
      href: "/percixpert",
      icon: Cpu,
    },
    {
      name: "PerciServe",
      role: "Support Suite",
      desc: "Instant answers & root cause",
      href: "/perciserve-support-suite",
      icon: Activity,
    },
    {
      name: "PerciHub",
      role: "Business Agents",
      desc: "Automated routine SAP tasks",
      href: "/percihub-business-suite",
      icon: GitBranch,
    },
    {
      name: "xP&A",
      role: "Enterprise Planning",
      desc: "Connected live forecasting",
      href: "/what-we-do/intelligence-enterprise-offerings/xpa-epm",
      icon: Database,
    },
  ];

  return (
    <section className="py-14 bg-[#F8F8FA] border-y border-[#E9E9EF]">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-8 pb-4 border-b border-[#E9E9EF]">
          <div>
            <h3 className="font-sans text-2xl font-normal text-[#191923]">
              Connected intelligence across the SAP lifecycle.
            </h3>
          </div>
          <p className="text-xs text-[#777783] mt-2 md:mt-0 max-w-sm">
            Modular software designed to work directly alongside your existing SAP setup.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {pillars.map((item) => {
            const isSelf = current === item.name;
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`p-4 rounded-xl border transition-all text-left group ${
                  isSelf
                    ? "bg-white border-[#1B1466] shadow-card ring-1 ring-[#1B1466]/15"
                    : "bg-white border-[#E9E9EF] hover:border-[#1B1466] hover:shadow-card"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="w-7 h-7 rounded-lg bg-[#F8F8FA] border border-[#E9E9EF] flex items-center justify-center text-[#1B1466] group-hover:text-[#00B7FF] transition-colors">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  {isSelf ? (
                    <span className="text-[10px] font-mono font-medium text-[#1B1466] px-2 py-0.5 bg-[#F0EFFF] rounded-full border border-[#1B1466]/20">
                      Active
                    </span>
                  ) : (
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#777783] group-hover:text-[#1B1466] transition-colors" />
                  )}
                </div>
                <h4 className="font-sans text-xs font-medium text-[#191923] group-hover:text-[#1B1466] transition-colors">
                  {item.name}
                </h4>
                <p className="text-[10px] font-mono text-[#777783] mt-0.5 font-medium">
                  {item.role}
                </p>
                <p className="text-[11px] text-[#777783] mt-1 leading-snug">
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
