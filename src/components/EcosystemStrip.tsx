"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Cpu, Layers, GitBranch, Database, Activity } from "lucide-react";

export default function EcosystemStrip({ current }: { current?: string }) {
  const pillars = [
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
    {
      name: "FUTUROOT",
      role: "Process Intelligence",
      desc: "Bottleneck mining & alerts",
      href: "/perciserve-support-suite#workflow",
      icon: Layers,
    },
  ];

  return (
          <section className="py-14 bg-[#F8F8FA] border-y border-[#EAEAEA]">
            <div className="max-w-[1240px] mx-auto px-6">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-8 pb-4 border-b border-[#EAEAEA]">
                <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#64676D]">
                      Ecosystem
                    </span>
                      <h3 className="font-serif text-2xl font-normal text-[#191923] mt-1">
                        Connected intelligence across the SAP lifecycle.
                      </h3>
                    </div>
                      <p className="text-xs text-[#64676D] mt-2 md:mt-0 max-w-sm">
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
                              className={`p-4 rounded-xl border transition-all text-left group ${isSelf
                                    ? "bg-white border-[#191923] shadow-sm"
                                    : "bg-white border-[#EAEAEA] hover:border-[#191923] hover:shadow-subtle"
                                }`}
                            >
                              <div className="flex items-center justify-between mb-2">
                                  <div className="w-7 h-7 rounded-lg bg-[#F8F8FA] border border-[#EAEAEA] flex items-center justify-center text-[#191923] group-hover:text-[#0D5CE5] transition-colors">
                                    <Icon className="w-3.5 h-3.5" />
                                  </div>
                                  {isSelf ? (
                    <span className="text-[9px] font-mono font-semibold text-[#191923] uppercase tracking-wider px-1.5 py-0.5 bg-[#F0F0F0] rounded">
                      Active
                    </span>
                  ) : (
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#8A8D93] group-hover:text-[#191923] transition-colors" />
                  )}
                </div>
                <h4 className="text-xs font-semibold text-[#191923] group-hover:text-[#0D5CE5] transition-colors">
                  {item.name}
                </h4>
                <p className="text-[10px] font-mono text-[#64676D] mt-0.5">
                  {item.role}
                </p>
                <p className="text-[11px] text-[#64676D] mt-1 leading-snug">
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
