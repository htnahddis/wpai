"use client";

import React, { useState } from "react";
import { AGENT_STUDIO_CATALOG, AgentItem } from "@/data/agentStudio.data";
import {
  Check,
  Search,
  ArrowRight,
  Zap,
  Sparkles,
  ShieldAlert,
  Terminal,
  TrendingUp,
  Cpu,
  Search as SearchIcon,
  Layers,
  Globe,
  Calendar,
  Workflow,
} from "lucide-react";

interface AgentStudioCatalogProps {
  onSelectAgent?: (agent: AgentItem) => void;
  onOpenModal?: () => void;
}

export default function AgentStudioCatalog({ onSelectAgent, onOpenModal }: AgentStudioCatalogProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAgent, setSelectedAgent] = useState<AgentItem | null>(null);

  const categories = [
    { id: "all", label: "All Agents" },
    { id: "pmo", label: "PMO & Delivery" },
    { id: "it", label: "IT & Architecture" },
    { id: "sales", label: "Sales & RevOps" },
    { id: "finance", label: "Finance & Legal" },
    { id: "marketing", label: "Marketing & Rollout" },
    { id: "custom", label: "Custom Workforce" },
  ];

  const filteredAgents = AGENT_STUDIO_CATALOG.filter((agent) => {
    const matchesCategory = activeCategory === "all" || agent.category === activeCategory;
    const matchesSearch =
      agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.codeBadge.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getAgentIcon = (type: string) => {
    switch (type) {
      case "shield":
        return <ShieldAlert className="w-5 h-5 text-[#6161FF]" />;
      case "terminal":
        return <Terminal className="w-5 h-5 text-[#00B7FF]" />;
      case "trending":
        return <TrendingUp className="w-5 h-5 text-[#00CA72]" />;
      case "cpu":
        return <Cpu className="w-5 h-5 text-[#FF00B7]" />;
      case "search":
        return <SearchIcon className="w-5 h-5 text-[#A25DDF]" />;
      case "layers":
        return <Layers className="w-5 h-5 text-[#FF9900]" />;
      case "globe":
        return <Globe className="w-5 h-5 text-[#0086C0]" />;
      case "calendar":
        return <Calendar className="w-5 h-5 text-[#00C875]" />;
      case "sparkles":
        return <Sparkles className="w-5 h-5 text-[#E2445C]" />;
      case "workflow":
      default:
        return <Workflow className="w-5 h-5 text-[#1B1466]" />;
    }
  };

  const handleAgentClick = (agent: AgentItem) => {
    setSelectedAgent(agent);
    if (onSelectAgent) onSelectAgent(agent);
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FAFAFC] border-b border-[#E9E9EF]">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0EFFF] text-[#6161FF] text-[11px] font-mono font-semibold uppercase tracking-wider mb-2.5">
            ENTERPRISE CATALOG
          </div>
          <h2 className="font-sans text-2xl sm:text-3xl lg:text-[40px] font-normal tracking-tight text-[#191923] leading-tight">
            Specialized agents built for enterprise workflows
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-[#777783] max-w-xl mx-auto leading-relaxed">
            Deploy pre-built specialists for SAP S/4HANA, procurement, and support out-of-the-box, or
            configure custom multi-step agents that adhere to your internal SOPs.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 mb-8">
          {/* Horizontal scrollable category pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`text-xs font-medium px-3.5 py-1.5 rounded-full whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-[#1B1466] text-white shadow-xs"
                    : "bg-white text-[#555567] hover:bg-[#F0EFF8] border border-[#E9E9EF]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64 shrink-0">
            <Search className="w-3.5 h-3.5 text-[#8C8CA1] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search enterprise agents..."
              className="w-full bg-white text-xs text-[#191923] placeholder-[#8C8CA1] rounded-full pl-9 pr-3.5 py-1.5 border border-[#E9E9EF] focus:outline-hidden focus:border-[#6161FF] focus:ring-2 focus:ring-[#6161FF]/10 transition-all"
            />
          </div>
        </div>

        {/* Agent Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredAgents.map((agent) => (
            <div
              key={agent.id}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-[#E9E9EF] flex flex-col justify-between"
            >
              <div>
                {/* Top Badge & Category */}
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-[#F4F3FB] border border-[#E2E1F0] flex items-center justify-center shrink-0">
                      {getAgentIcon(agent.iconType)}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold text-[#6161FF] block leading-tight">
                        {agent.codeBadge}
                      </span>
                      <h3 className="font-sans text-base font-semibold text-[#191923] leading-tight">
                        {agent.name}
                      </h3>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-[#FAF9FF] text-[#1B1466] border border-[#E0DFF5]">
                    {agent.badge}
                  </span>
                </div>

                {/* Tagline */}
                <p className="text-xs text-[#555567] mb-3.5 font-normal leading-relaxed">
                  {agent.tagline}
                </p>

                {/* Trigger -> Action Micro-diagram */}
                <div className="bg-[#FAF9FF] rounded-xl p-2.5 mb-3.5 border border-[#ECEBFA] text-[11px] space-y-1.5">
                  <div className="flex items-start gap-1.5">
                    <span className="text-[#6161FF] font-semibold shrink-0">Trigger:</span>
                    <span className="text-[#555567] leading-tight truncate">{agent.sampleTrigger}</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <span className="text-[#00CA72] font-semibold shrink-0">Action:</span>
                    <span className="text-[#555567] leading-tight truncate">{agent.sampleAction}</span>
                  </div>
                </div>

                {/* Capabilities List */}
                <div className="space-y-1.5 py-2.5 border-t border-[#F0F0F4]">
                  {agent.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[11px] text-[#191923]">
                      <Check className="w-3.5 h-3.5 text-[#00CA72] shrink-0 stroke-[2.5]" />
                      <span className="leading-snug truncate">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer: Action */}
              <div className="pt-3 mt-3 border-t border-[#F0F0F4] flex items-center justify-end">
                <button
                  type="button"
                  onClick={() => handleAgentClick(agent)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#6161FF] cursor-pointer"
                >
                  <span>Configure</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Agent Builder Promo Banner */}
        <div className="mt-10 bg-white rounded-2xl p-5 sm:p-7 border border-[#E2E1F0] shadow-xs flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#1B1466] text-white flex items-center justify-center shrink-0">
              <Zap className="w-5 h-5 text-[#FF00B7]" />
            </div>
            <div>
              <h3 className="font-sans text-base sm:text-lg font-semibold text-[#191923]">
                Need a tailored agent for your unique ERP architecture?
              </h3>
              <p className="text-xs text-[#777783] mt-0.5">
                Connect your SAP S/4HANA tables, legacy databases, or proprietary APIs in our visual
                Agent Studio canvas.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onOpenModal}
            className="shrink-0 button-primary text-xs py-2 px-5 bg-[#1B1466] hover:bg-[#140F4D] text-white rounded-full font-medium transition-all cursor-pointer flex items-center gap-1.5"
          >
            <span>Open Custom Builder</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Modal for detailed agent config view */}
      {selectedAgent && (
        <div className="fixed inset-0 z-50 bg-[#191923]/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-5 sm:p-7 shadow-2xl border border-[#E9E9EF] animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-3.5 border-b border-[#F0F0F4]">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#F4F3FB] border border-[#E2E1F0] flex items-center justify-center">
                  {getAgentIcon(selectedAgent.iconType)}
                </div>
                <div>
                  <h4 className="font-semibold text-[#191923] text-base leading-tight">
                    {selectedAgent.name}
                  </h4>
                  <span className="text-[11px] font-mono text-[#777783]">
                    {selectedAgent.codeBadge} • {selectedAgent.categoryLabel}
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedAgent(null)}
                className="text-xs text-[#777783] hover:text-[#191923] p-1.5 rounded-lg hover:bg-[#F8F8FA] cursor-pointer"
              >
                ✕ Close
              </button>
            </div>

            <div className="py-4 space-y-3.5 text-xs sm:text-sm">
              <p className="text-[#555567] leading-relaxed">{selectedAgent.description}</p>

              <div className="bg-[#FAF9FF] p-3 rounded-xl border border-[#E0DFF5] space-y-1.5 text-xs">
                <div>
                  <span className="font-semibold text-[#1B1466]">Trigger:</span>{" "}
                  <span className="text-[#555567]">{selectedAgent.sampleTrigger}</span>
                </div>
                <div>
                  <span className="font-semibold text-[#00CA72]">Autonomous Action:</span>{" "}
                  <span className="text-[#555567]">{selectedAgent.sampleAction}</span>
                </div>
              </div>

              <div>
                <span className="font-semibold text-[#191923] block mb-2 text-xs uppercase tracking-wider font-mono">
                  Configured Capabilities:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs">
                  {selectedAgent.capabilities.map((c, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[#191923]">
                      <Check className="w-3.5 h-3.5 text-[#00CA72] shrink-0 stroke-[2.5]" />
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-3.5 border-t border-[#F0F0F4] flex items-center justify-end gap-2.5">
              <button
                type="button"
                onClick={() => setSelectedAgent(null)}
                className="text-xs py-1.5 px-3.5 rounded-full text-[#777783] hover:bg-[#F8F8FA] cursor-pointer font-medium"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => {
                  setSelectedAgent(null);
                  if (onOpenModal) onOpenModal();
                }}
                className="text-xs py-2 px-5 rounded-full bg-[#1B1466] hover:bg-[#140F4D] text-white font-medium cursor-pointer"
              >
                Deploy to SAP Workspace
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
