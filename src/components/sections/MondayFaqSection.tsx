"use client";

import React, { useState } from "react";
import { Plus, ArrowRight } from "lucide-react";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface MondayFaqSectionProps {
  items: FaqItem[];
  title?: string;
  subtitle?: string;
  layout?: "two-column" | "centered";
  supportCard?: boolean;
  supportTitle?: string;
  supportDescription?: string;
  supportButtonText?: string;
  onSupportClick?: () => void;
  className?: string;
}

export default function MondayFaqSection({
  items,
  title = "Frequently asked questions",
  subtitle = "Key answers to common technical, architecture, and methodology questions.",
  layout = "two-column",
  supportCard = true,
  supportTitle = "Need a custom implementation review?",
  supportButtonText = "Speak with our ERP architects",
  onSupportClick,
  className = "",
}: MondayFaqSectionProps) {
  // Allow opening multiple or single item (first item open by default)
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const isTwoColumn = layout === "two-column";

  return (
    <section className={`py-20 sm:py-24 bg-white border-b border-[#F0F0F4] ${className}`}>
      <div className="max-w-[1240px] mx-auto px-6">
        {isTwoColumn ? (
          /* Two-Column Minimalist Layout */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left Column: Heading & Minimalist Link */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <h2 className="font-sans text-3xl sm:text-[40px] font-normal text-[#191923] tracking-tight leading-tight">
                {title}
              </h2>

              {subtitle && (
                <p className="text-sm sm:text-base text-[#777783] mt-3 font-normal leading-relaxed max-w-sm">
                  {subtitle}
                </p>
              )}

              {supportCard && onSupportClick && (
                <div className="pt-8">
                  <p className="text-xs text-[#9999A5] font-normal mb-1.5 uppercase tracking-wider">
                    {supportTitle}
                  </p>
                  <button
                    type="button"
                    onClick={onSupportClick}
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#191923] hover:text-[#FF00B7] transition-colors group cursor-pointer"
                  >
                    <span>{supportButtonText}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              )}
            </div>

            {/* Right Column: Clean Accordion Items */}
            <div className="lg:col-span-7 divide-y divide-[#EFEFF4] border-t border-b border-[#EFEFF4]">
              {items.map((item, index) => {
                const isOpen = openIndices.includes(index);

                return (
                  <div key={index} className="transition-colors">
                    <button
                      type="button"
                      onClick={() => toggleItem(index)}
                      className="w-full py-5 sm:py-6 text-left flex items-start justify-between gap-6 group cursor-pointer focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <span className="font-sans text-base sm:text-lg font-normal text-[#191923] group-hover:text-[#FF00B7] transition-colors duration-200 leading-snug">
                        {item.question}
                      </span>
                      <span
                        className={`w-7 h-7 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                          isOpen
                            ? "rotate-45 bg-[#191923] border-[#191923] text-white"
                            : "bg-transparent border-[#D5D7E1] text-[#191923] group-hover:border-[#191923]"
                        }`}
                        aria-hidden="true"
                      >
                        <Plus className="w-3.5 h-3.5 transition-transform duration-300" />
                      </span>
                    </button>

                    {/* Smooth Collapsible Answer Container */}
                    <div
                      className={`grid transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-sm sm:text-[15px] text-[#676879] leading-relaxed pb-6 pt-0 font-normal">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          /* Centered Minimalist Layout */
          <div className="max-w-[840px] mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="font-sans text-3xl sm:text-[40px] font-normal text-[#191923] tracking-tight leading-tight">
                {title}
              </h2>
              {subtitle && (
                <p className="text-sm sm:text-base text-[#777783] mt-2.5 font-normal max-w-lg mx-auto leading-relaxed">
                  {subtitle}
                </p>
              )}
            </div>

            <div className="divide-y divide-[#EFEFF4] border-t border-b border-[#EFEFF4]">
              {items.map((item, index) => {
                const isOpen = openIndices.includes(index);

                return (
                  <div key={index} className="transition-colors">
                    <button
                      type="button"
                      onClick={() => toggleItem(index)}
                      className="w-full py-5 sm:py-6 text-left flex items-start justify-between gap-6 group cursor-pointer focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <span className="font-sans text-base sm:text-lg font-normal text-[#191923] group-hover:text-[#FF00B7] transition-colors duration-200 leading-snug">
                        {item.question}
                      </span>
                      <span
                        className={`w-7 h-7 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                          isOpen
                            ? "rotate-45 bg-[#191923] border-[#191923] text-white"
                            : "bg-transparent border-[#D5D7E1] text-[#191923] group-hover:border-[#191923]"
                        }`}
                        aria-hidden="true"
                      >
                        <Plus className="w-3.5 h-3.5 transition-transform duration-300" />
                      </span>
                    </button>

                    <div
                      className={`grid transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-sm sm:text-[15px] text-[#676879] leading-relaxed pb-6 pt-0 font-normal">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {supportCard && onSupportClick && (
              <div className="mt-10 text-center">
                <button
                  type="button"
                  onClick={onSupportClick}
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#191923] hover:text-[#FF00B7] transition-colors group cursor-pointer"
                >
                  <span>{supportButtonText}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
