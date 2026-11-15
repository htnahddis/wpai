"use client";

import React from "react";
import { Check, ShieldAlert, Cpu, Bot, ArrowRight } from "lucide-react";
import Link from "next/link";
import { ACCELERATE_AGENTS } from "@/data/accelerate.data";

export default function MondayAccelerateCards({ onOpenModal }: { onOpenModal: () => void }) {
  const getIcon = (type: string) => {
    switch (type) {
      case "shield":
        return <ShieldAlert className="w-5 h-5 text-[#FF00B7]" />;
      case "cpu":
        return <Cpu className="w-5 h-5 text-[#00B7FF]" />;
      case "bot":
        return <Bot className="w-5 h-5 text-[#1B1466]" />;
      default:
        return <Cpu className="w-5 h-5 text-[#1B1466]" />;
    }
  };

  return (
    <section className="w-full bg-[#F8F8FA] py-16 sm:py-24 border-t border-[#E9E9EF]">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Section Header: No eyebrows, Magenta keyword */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-[42px] leading-tight text-[#191923] font-normal tracking-tight">
            Accelerate enterprise delivery with <span className="text-[#FF00B7]">purpose-built AI agents</span>
          </h2>
          <p className="mt-3 text-base text-[#777783] max-w-2xl mx-auto leading-relaxed">
            Supercharge every phase of your SAP lifecycle with specialized agents that automate documentation, enforce Clean Core standards, and eliminate surprises.
          </p>
        </div>

        {/* Clean Agent Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {ACCELERATE_AGENTS.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl p-7 sm:p-8 border border-[#E9E9EF] hover:border-[#1B1466] hover:shadow-card transition-all duration-300 flex flex-col justify-between group shadow-card"
            >
              <div>
                {/* Header with Icon and Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#F8F8FA] border border-[#E9E9EF] flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(card.iconType)}
                  </div>
                  <span className="text-[11px] font-mono font-medium text-[#1B1466] bg-[#F0EFFF] px-2.5 py-1 rounded-full">
                    {card.badge}
                  </span>
                </div>

                <h3 className="font-sans text-xl font-medium text-[#191923] mb-2.5 leading-snug">
                  {card.heading}
                </h3>
                <p className="text-xs sm:text-sm text-[#777783] leading-relaxed mb-6 font-normal">
                  {card.description}
                </p>

                {/* Bullets with Cyan Checks */}
                <div className="space-y-2.5 py-4 border-t border-[#E9E9EF]">
                  {card.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#191923]">
                      <Check className="w-3.5 h-3.5 text-[#00B7FF] mt-0.5 shrink-0 stroke-[2.5]" />
                      <span className="leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Metric and Action */}
              <div className="pt-4 border-t border-[#E9E9EF] mt-4 flex items-center justify-between">
                <span className="text-xs font-mono font-medium text-[#1B1466]">
                  {card.metric}
                </span>
                <Link
                  href={card.linkHref}
                  className="text-xs font-medium text-[#1B1466] hover:text-[#FF00B7] transition-colors flex items-center gap-1 group/btn"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
