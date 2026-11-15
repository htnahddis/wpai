"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  title?: string;
  eyebrow?: string;
  description?: string;
}

export default function FaqAccordion({
  items,
  title = "Frequently Asked Questions",
  description = "Concise answers to common enterprise and technical implementation questions.",
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-10">
        <h3 className="font-sans text-2xl sm:text-3xl text-[#191923] font-normal tracking-tight">
          {title}
        </h3>
        {description && (
          <p className="text-sm sm:text-base text-[#64676D] mt-2 max-w-xl mx-auto">
            {description}
          </p>
        )}
      </div>

      <div className="divide-y divide-[#E8E8E8] border-y border-[#E8E8E8] bg-white rounded-xl">
        {items.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className="transition-colors">
              <button
                onClick={() => toggle(idx)}
                className="w-full py-5 px-4 text-left flex items-center justify-between gap-4 group focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className="text-base font-medium text-[#292A2E] group-hover:text-[#0D5CE5] transition-colors">
                  {item.question}
                </span>
                <span className={`w-7 h-7 rounded-full bg-[#F8F8F8] border border-[#E8E8E8] flex items-center justify-center shrink-0 text-[#64676D] group-hover:text-[#0D5CE5] group-hover:border-blue-200 transition-all ${isOpen ? "rotate-180 bg-blue-50 text-[#0D5CE5]" : ""}`}>
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>
              {isOpen && (
                <div className="px-4 pb-5 text-sm text-[#64676D] leading-relaxed animate-in fade-in duration-200">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
