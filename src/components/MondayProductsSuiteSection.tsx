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
} from "lucide-react";
import { ENTERPRISE_SUITES } from "@/data/offerings.data";

export default function MondayProductsSuiteSection() {
  const [activeSuiteId, setActiveSuiteId] = useState<string>("percixpert");
  const current = ENTERPRISE_SUITES.find((s) => s.id === activeSuiteId) || ENTERPRISE_SUITES[0];

  const getIcon = (type: string) => {
    switch (type) {
      case "workflow":
        return <Workflow className="w-5 h-5 text-[#1B1466]" />;
      case "cpu":
        return <Cpu className="w-5 h-5 text-[#00B7FF]" />;
      case "bot":
        return <Bot className="w-5 h-5 text-[#FF00B7]" />;
      case "trending":
        return <TrendingUp className="w-5 h-5 text-amber-500" />;
      case "sparkles":
        return <Sparkles className="w-5 h-5 text-[#FF00B7]" />;
      case "layers":
        return <Layers className="w-5 h-5 text-[#1B1466]" />;
      default:
        return <Workflow className="w-5 h-5 text-[#1B1466]" />;
    }
  };

  return (
    <section id="offerings" className="w-full bg-[#F8F8FA] py-16 sm:py-24 border-t border-[#E9E9EF]">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Section Header: No eyebrows, Magenta keyword */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-5xl font-sans font-normal text-[#191923] tracking-tight leading-tight">
            End-to-end suites for the <span className="text-[#FF00B7]">full SAP lifecycle</span>
          </h2>
          <p className="mt-3 text-base text-[#777783] max-w-xl mx-auto">
            Select a suite to view real-time delivery blueprints, autonomous agents, and support metrics.
          </p>
        </div>

        {/* Minimal Tab Selector */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-8">
          {ENTERPRISE_SUITES.map((suite) => {
            const isSelected = suite.id === activeSuiteId;
            return (
              <button
                key={suite.id}
                type="button"
                onClick={() => setActiveSuiteId(suite.id)}
                className={`flex flex-col items-center justify-center p-3.5 rounded-2xl border text-center transition-all ${
                  isSelected
                    ? "bg-white border-[#1B1466] shadow-card ring-1 ring-[#1B1466]/15 scale-[1.02]"
                    : "bg-white/70 border-[#E9E9EF] hover:bg-white hover:border-[#1B1466]/30"
                }`}
              >
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-2 ${suite.iconBg}`}>
                  {getIcon(suite.iconType)}
                </div>
                <div className={`text-xs ${isSelected ? "font-semibold text-[#1B1466]" : "font-normal text-[#191923]"}`}>
                  {suite.name}
                </div>
                <div className="text-[10px] text-[#777783] font-mono line-clamp-1 mt-0.5">
                  {suite.category}
                </div>
              </button>
            );
          })}
        </div>

        {/* Suite Showcase Card */}
        <div className="bg-white rounded-2xl border border-[#E9E9EF] shadow-card p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-4">
              <h3 className="font-sans text-2xl sm:text-3xl font-medium text-[#191923] tracking-tight">
                {current.headline}
              </h3>
              <p className="text-sm sm:text-base text-[#777783] leading-relaxed font-normal">
                {current.description}
              </p>

              <div className="space-y-2.5 pt-2">
                {current.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-[#191923]">
                    <div className="w-4 h-4 rounded-full bg-[#E6F8FF] flex items-center justify-center text-[#00B7FF] shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  href={current.href}
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#1B1466] hover:text-[#FF00B7] transition-colors group"
                >
                  <span>Explore {current.name}</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Interactive Board Simulation */}
            <div className="lg:col-span-7 bg-[#F8F8FA] rounded-xl border border-[#E9E9EF] p-4 sm:p-5 shadow-2xs">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E9E9EF] text-xs font-mono">
                <span className="font-semibold text-[#191923]">{current.mockBoard.title}</span>
                <span className="text-[#0088CC] bg-[#E6F8FF] px-2 py-0.5 rounded text-[10px] font-medium border border-[#00B7FF]/30">
                  Live Stream
                </span>
              </div>

              <div className="space-y-2 text-xs">
                {current.mockBoard.rows.map((row, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-3 sm:p-3.5 rounded-lg border border-[#E9E9EF] flex items-center justify-between gap-3 shadow-2xs"
                  >
                    <div className="min-w-0">
                      <div className="font-medium text-[#191923] truncate">{row.task}</div>
                      <div className="text-[10px] text-[#777783] font-mono mt-0.5">{row.lead}</div>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-medium ${row.status.bg}`}>
                        {row.status.label}
                      </span>
                      <span className="text-[10px] font-mono text-[#777783] w-12 text-right">
                        {row.sla}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
