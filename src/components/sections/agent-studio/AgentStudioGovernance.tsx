"use client";

import React from "react";
import { ShieldCheck, UserCheck, FileText, Lock, CheckCircle2 } from "lucide-react";

interface AgentStudioGovernanceProps {
  onOpenModal?: () => void;
}

export default function AgentStudioGovernance({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onOpenModal,
}: AgentStudioGovernanceProps) {
  const governancePillars = [
    {
      icon: <UserCheck className="w-5 h-5 text-[#6161FF]" />,
      title: "Human-in-the-Loop Approval Queues",
      description:
        "Agents can draft emails, reallocate sprint tasks, or prepare ledger changes, but require human approval before committing external actions.",
      tag: "Deterministic Safety",
    },
    {
      icon: <Lock className="w-5 h-5 text-[#00CA72]" />,
      title: "Granular Permission Inheritance",
      description:
        "Agents strictly inherit the board and column permissions of their assigned workspace creator. An agent cannot access data a human user is restricted from seeing.",
      tag: "Zero Privilege Creep",
    },
    {
      icon: <FileText className="w-5 h-5 text-[#FF5AC4]" />,
      title: "Immutable Execution Audit Logs",
      description:
        "Every single trigger, retrieved context document, reasoning step, and system call is permanently recorded with full timestamping for compliance audits.",
      tag: "100% Traceability",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#FF9900]" />,
      title: "Zero Model Training Guarantee",
      description:
        "Enterprise data, SAP structures, and customer interactions are processed in isolated private enclaves and never used to train public foundational AI models.",
      tag: "SOC2 & GDPR Ready",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FAFAFC] border-b border-[#E9E9EF]">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0EFFF] text-[#6161FF] text-[11px] font-mono font-semibold uppercase tracking-wider mb-2.5">
            ENTERPRISE GOVERNANCE &amp; TRUST
          </div>
          <h2 className="font-sans text-2xl sm:text-3xl lg:text-[40px] font-normal tracking-tight text-[#191923] leading-tight">
            Autonomous execution with complete human oversight
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-[#777783] max-w-xl mx-auto leading-relaxed">
            Scale your digital workforce without sacrificing compliance. Agent Studio equips enterprise
            leaders with granular controls, approval queues, and complete audit trails.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {governancePillars.map((pillar, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E9E9EF] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-xl bg-[#F8F8FA] border border-[#E9E9EF] flex items-center justify-center">
                    {pillar.icon}
                  </div>
                  <span className="text-[10px] font-mono font-medium text-[#1B1466] bg-[#F0EFFF] px-2.5 py-0.5 rounded-full">
                    {pillar.tag}
                  </span>
                </div>
                <h3 className="font-sans text-lg font-semibold text-[#191923] mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[#555567] leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-[#F0F0F4] flex items-center gap-2 text-xs text-[#00CA72] font-medium">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Enterprise Certified &amp; Production Verified</span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges Strip */}
        <div className="mt-10 py-5 px-6 rounded-2xl bg-white border border-[#E9E9EF] flex flex-wrap items-center justify-around gap-4 text-center text-xs text-[#777783] font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>SOC 2 Type II Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>ISO/IEC 27001 Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>GDPR &amp; CCPA Ready</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Zero Third-Party Training</span>
          </div>
        </div>
      </div>
    </section>
  );
}
