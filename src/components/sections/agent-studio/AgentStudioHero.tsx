"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  ShieldAlert,
  Terminal,
  TrendingUp,
  Cpu,
  Search,
  Layers,
  FileText,
  Bot,
  Zap,
} from "lucide-react";

interface AgentStudioHeroProps {
  onOpenModal?: () => void;
  onSelectPrompt?: (prompt: string) => void;
}

export default function AgentStudioHero({ onOpenModal, onSelectPrompt }: AgentStudioHeroProps) {
  const [promptText, setPromptText] = useState("");
  const [isSimulating, setIsSimulating] = useState(false);

  const samplePrompts = [
    "Audit SAP ECC customization for Clean Core compatibility and BTP fit",
    "Score inbound enterprise leads using ERP version and migration readiness signals",
    "Triage P1-P4 incidents across ServiceNow, classify module, and attach runbook",
    "Scan sprint burndown daily and flag milestone delivery risks on critical path",
  ];

  const handlePromptClick = (text: string) => {
    setPromptText(text);
    if (onSelectPrompt) onSelectPrompt(text);
  };

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promptText.trim()) {
      setPromptText(samplePrompts[0]);
    }
    setIsSimulating(true);
    setTimeout(() => setIsSimulating(false), 1600);
  };

  // Strictly Percipere system glyphs — ZERO human figures, ZERO cartoon characters
  const systemAgentFleet = [
    {
      code: "PMO",
      name: "Scope & Risk",
      icon: <ShieldAlert className="w-5 h-5 text-[#6161FF]" />,
      bg: "bg-[#F0EFFF]",
      border: "border-[#D5D4E6]",
      tag: "Delivery Risk",
    },
    {
      code: "ARC",
      name: "Clean Core",
      icon: <Terminal className="w-5 h-5 text-[#00B7FF]" />,
      bg: "bg-[#E6F8FF]",
      border: "border-[#B8EDFF]",
      tag: "Code Audit",
    },
    {
      code: "REV",
      name: "Lead Scorer",
      icon: <TrendingUp className="w-5 h-5 text-[#00CA72]" />,
      bg: "bg-[#E7F9F0]",
      border: "border-[#B5F1D3]",
      tag: "RevOps",
    },
    {
      code: "AMS",
      name: "Incident Router",
      icon: <Cpu className="w-5 h-5 text-[#FF00B7]" />,
      bg: "bg-[#FFF0FA]",
      border: "border-[#FFCCE8]",
      tag: "AMS Support",
    },
    {
      code: "GRC",
      name: "Security Auditor",
      icon: <Search className="w-5 h-5 text-[#A25DDF]" />,
      bg: "bg-[#F7F0FC]",
      border: "border-[#E8D2FA]",
      tag: "Compliance",
    },
    {
      code: "DAT",
      name: "Data Reconciler",
      icon: <Layers className="w-5 h-5 text-[#FF9900]" />,
      bg: "bg-[#FFF6E9]",
      border: "border-[#FFE5BA]",
      tag: "Migration",
    },
    {
      code: "SYN",
      name: "SDD Synthesizer",
      icon: <FileText className="w-5 h-5 text-[#00C875]" />,
      bg: "bg-[#EBFBF3]",
      border: "border-[#C6F5DE]",
      tag: "Discovery",
    },
  ];

  return (
    <section className="relative w-full pt-10 pb-16 sm:pt-14 sm:pb-24 bg-white border-b border-[#E9E9EF]">

      <div className="max-w-[1240px] mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0EFFF] text-[#6161FF] text-[11px] font-mono font-semibold uppercase tracking-wider mb-5">
            AGENT STUDIO
          </div>

          {/* Headline */}
          <h1 className="font-sans text-3xl sm:text-4xl lg:text-[50px] leading-[1.12] font-normal tracking-tight text-[#191923] max-w-3xl mx-auto">
            Expand your enterprise capabilities with autonomous AI agents
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-sm sm:text-base text-[#555567] max-w-2xl mx-auto leading-relaxed font-normal">
            Build, configure, and orchestrate specialized agents across your enterprise lifecycle —
            integrated directly with SAP S/4HANA, Jira, and enterprise workflows. No code required.
          </p>

          {/* System Agent Fleet */}
          <div className="mt-7 flex items-center justify-center -space-x-2 sm:-space-x-3">
            {systemAgentFleet.map((agent, i) => (
              <div
                key={agent.code}
                className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full ${agent.bg} border ${agent.border} shadow-sm flex items-center justify-center`}
                style={{ zIndex: 10 - i }}
              >
                {agent.icon}
              </div>
            ))}
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#1B1466] text-white flex items-center justify-center text-[11px] font-mono font-bold shadow-sm border-2 border-white">
              +10
            </div>
          </div>

          {/* Natural Language Agent Prompt Bar */}
          <div className="mt-8 w-full max-w-2xl">
            <form
              onSubmit={handleGenerate}
              className="relative flex items-center bg-white rounded-2xl border border-[#D5D4E6] p-2 shadow-lg shadow-[#1B1466]/5 focus-within:border-[#6161FF] focus-within:ring-4 focus-within:ring-[#6161FF]/10 transition-all"
            >
              <div className="pl-3 pr-2 text-[#6161FF] shrink-0">
                <Bot className="w-5 h-5 text-[#6161FF]" />
              </div>
              <input
                type="text"
                value={promptText}
                onChange={(e) => setPromptText(e.target.value)}
                placeholder="Describe what you want your agent to do in plain English..."
                className="w-full bg-transparent text-xs sm:text-sm text-[#191923] placeholder-[#8C8CA1] focus:outline-hidden py-1.5"
              />
              <button
                type="submit"
                className="shrink-0 inline-flex items-center gap-1.5 bg-[#1B1466] hover:bg-[#140F4D] text-white text-xs font-medium px-4 sm:px-5 py-2.5 rounded-xl transition-all shadow-sm cursor-pointer active:scale-98"
              >
                <span>{isSimulating ? "Deploying..." : "Build Agent"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>

            {/* Prompt Suggestion Pills */}
            <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-xs">
              <span className="text-[#777783] text-[11px] font-medium hidden sm:inline">Try:</span>
              {samplePrompts.slice(0, 3).map((prompt, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handlePromptClick(prompt)}
                  className="bg-[#F4F3FB] hover:bg-[#ECEBFA] text-[#555577] hover:text-[#1B1466] px-3 py-1 rounded-full transition-colors text-[11px] truncate max-w-[260px] sm:max-w-none text-left cursor-pointer"
                >
                  &ldquo;{prompt}&rdquo;
                </button>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-7 flex flex-col sm:flex-row items-center gap-3">
            <button
              type="button"
              onClick={onOpenModal}
              className="button-primary w-full sm:w-auto text-xs sm:text-sm py-2.5 px-7 bg-[#1B1466] hover:bg-[#140F4D] text-white rounded-full font-medium shadow-md shadow-[#1B1466]/15 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Start Free with Agent Studio</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={onOpenModal}
              className="w-full sm:w-auto text-xs sm:text-sm py-2.5 px-6 rounded-full border border-[#D5D4E6] text-[#191923] hover:bg-[#F8F8FA] font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Zap className="w-3.5 h-3.5 text-[#6161FF]" />
              <span>Schedule Architecture Review</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
