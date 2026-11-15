"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  ShieldAlert,
  Terminal,
  TrendingUp,
  Cpu,
  Search,
  Layers,
  Globe,
  Calendar,
  Sparkles,
  Workflow,
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronRight,
} from "lucide-react";
import { AGENT_STUDIO_CATALOG, AgentItem } from "@/data/agentStudio.data";

interface AgentStudioCoverflowProps {
  onOpenModal?: () => void;
  onSelectAgent?: (agent: AgentItem) => void;
}

export default function AgentStudioCoverflow({
  onOpenModal,
  onSelectAgent,
}: AgentStudioCoverflowProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const totalSlides = AGENT_STUDIO_CATALOG.length;
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(nextSlide, 4500);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, nextSlide]);

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
        return <Search className="w-5 h-5 text-[#A25DDF]" />;
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

  return (
    <section className="py-14 sm:py-20 bg-[#FAF9FF] border-b border-[#E9E9EF] overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E0DFF5] text-[#1B1466] text-[11px] font-mono font-semibold uppercase tracking-wider mb-3">
            SPECIALIZED WORKFORCE FLEET
          </div>
          <h2 className="font-sans text-2xl sm:text-3xl lg:text-[38px] font-normal tracking-tight text-[#191923] leading-tight">
            Autonomous specialists built for enterprise scale
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-[#777783] max-w-xl mx-auto leading-relaxed">
            Click any agent to inspect its Clean Core guardrails, connected SAP sources, and
            trigger-to-action protocols.
          </p>
        </div>

        {/* 3D Coverflow Container */}
        <div
          className="relative w-full py-6 flex items-center justify-center min-h-[460px] sm:min-h-[500px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Controls: Circular Buttons matching Percipere styling */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous agent slide"
            className="absolute left-2 sm:left-4 z-30 w-10 h-10 rounded-full bg-white shadow-md border border-[#E2E1F0] text-[#191923] hover:text-[#6161FF] hover:border-[#6161FF] flex items-center justify-center transition-all cursor-pointer active:scale-95"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next agent slide"
            className="absolute right-2 sm:right-4 z-30 w-10 h-10 rounded-full bg-white shadow-md border border-[#E2E1F0] text-[#191923] hover:text-[#6161FF] hover:border-[#6161FF] flex items-center justify-center transition-all cursor-pointer active:scale-95"
          >
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Cards Deck */}
          <div className="relative w-full max-w-[1040px] h-[440px] flex items-center justify-center perspective-[1200px]">
            {AGENT_STUDIO_CATALOG.map((agent, index) => {
              // Calculate offset relative to active index with wrapping
              let offset = index - activeIndex;
              if (offset > totalSlides / 2) offset -= totalSlides;
              if (offset < -totalSlides / 2) offset += totalSlides;

              const isCenter = offset === 0;
              const isVisible = Math.abs(offset) <= 2;

              if (!isVisible) return null;

              // 3D positioning calculation
              const translateX = offset * 240; // pixel spacing between cards
              const translateZ = -Math.abs(offset) * 120; // depth
              const rotateY = -offset * 18; // 3D rotation
              const scale = isCenter ? 1.02 : 0.88;
              const opacity = isCenter ? 1 : Math.abs(offset) === 1 ? 0.82 : 0.45;
              const zIndex = 20 - Math.abs(offset) * 5;

              return (
                <div
                  key={agent.id}
                  onClick={() => {
                    if (!isCenter) setActiveIndex(index);
                    else if (onSelectAgent) onSelectAgent(agent);
                  }}
                  style={{
                    transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                    zIndex,
                    opacity,
                  }}
                  className={`absolute top-0 w-[300px] sm:w-[340px] h-[430px] rounded-2xl bg-white border p-5 sm:p-6 flex flex-col justify-between shadow-xl cursor-pointer select-none ${
                    isCenter
                      ? "border-[#6161FF] shadow-2xl"
                      : "border-[#E9E9EF] shadow-md"
                  }`}
                >
                  <div>
                    {/* Card Header: Tech Code Badge + Category */}
                    <div className="flex items-center justify-between mb-3.5">
                      <div className="flex items-center gap-2">
                        <div className="w-9 h-9 rounded-xl bg-[#F4F3FB] border border-[#E2E1F0] flex items-center justify-center">
                          {getAgentIcon(agent.iconType)}
                        </div>
                        <div>
                          <span className="font-mono text-[10px] font-bold text-[#6161FF] block leading-tight">
                            {agent.codeBadge}
                          </span>
                          <span className="text-[11px] text-[#777783] font-medium leading-tight">
                            {agent.categoryLabel}
                          </span>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-[#FAF9FF] text-[#1B1466] border border-[#E0DFF5]">
                        {agent.badge}
                      </span>
                    </div>

                    {/* Agent Title & Tagline */}
                    <h3 className="font-sans text-base sm:text-lg font-semibold text-[#191923] mb-1.5 leading-snug">
                      {agent.name}
                    </h3>
                    <p className="text-xs text-[#555567] mb-3.5 leading-relaxed font-normal line-clamp-2">
                      {agent.tagline}
                    </p>


                    {/* Checkmarked Capabilities */}
                    <div className="space-y-1.5 py-2 border-t border-[#F0F0F4]">
                      {agent.capabilities.slice(0, 3).map((cap, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-[11px] text-[#191923]">
                          <Check className="w-3.5 h-3.5 text-[#00CA72] shrink-0 mt-0.5 stroke-[2.5]" />
                          <span className="leading-tight truncate">{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom: Action Button */}
                  <div className="pt-3 border-t border-[#F0F0F4] flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#777783]">
                      Clean Core Ready
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onOpenModal) onOpenModal();
                      }}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#6161FF] cursor-pointer"
                    >
                      <span>Configure</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="mt-4 flex items-center justify-center gap-1.5">
          {AGENT_STUDIO_CATALOG.map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              onClick={() => setActiveIndex(dotIdx)}
              aria-label={`Go to slide ${dotIdx + 1}`}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                activeIndex === dotIdx
                  ? "w-6 bg-[#6161FF]"
                  : "w-1.5 bg-[#D5D4E6] hover:bg-[#8C8CA1]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
