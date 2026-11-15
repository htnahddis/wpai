"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export interface InsightCardItem {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  linkText?: string;
}

export interface InsightsSectionProps {
  title?: string;
  subtitle?: string;
  items?: InsightCardItem[];
  bannerText?: string;
  bannerButtonText?: string;
  onBannerButtonClick?: () => void;
  onCardClick?: (item: InsightCardItem) => void;
  className?: string;
}

export const DEFAULT_INSIGHTS: InsightCardItem[] = [
  {
    id: "insight-1",
    title: "Driving Process Optimisation Ahead of SAP S/4HANA Migration",
    description:
      "A diversified global agribusiness partnered with Percipere to optimise pre-migration processes and prepare for an ECC to Cloud ERP transformation within 12 months.",
    imageSrc:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Agribusiness agricultural field optimisation",
    linkText: "Read case study",
  },
  {
    id: "insight-2",
    title: "Transforming Financial Reporting and Operational Efficiency with SAP",
    description:
      "A leading media company partnered with Percipere to modernise reporting systems, implementing a tailored hybrid cloud solution to streamline operations.",
    imageSrc:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Media and entertainment audio console operational efficiency",
    linkText: "Read case study",
  },
  {
    id: "insight-3",
    title: "Streamlining Internal Processes with SAP S/4HANA Cloud Private Edition",
    description:
      "Over 450 veterinary practices partnered with Percipere to modernise finance operations, reducing audit costs and streamlining clinic processes.",
    imageSrc:
      "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Veterinary practices modernising finance operations",
    linkText: "Read case study",
  },
];

export default function InsightsThoughtLeadershipSection({
  title = "Insights & Thought Leadership",
  subtitle = "How enterprise leaders execute complex ERP transformations with Percipere.",
  items = DEFAULT_INSIGHTS,
  bannerText = "Let us guide you on your digital transformation journey",
  bannerButtonText = "Contact Us",
  onBannerButtonClick,
  onCardClick,
  className = "",
}: InsightsSectionProps) {
  return (
    <section className={`py-16 sm:py-20 bg-white border-b border-[#F0F0F4] ${className}`}>
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Section Heading (Centered) */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <h2 className="font-sans text-2xl sm:text-3xl lg:text-[38px] font-normal text-[#191923] tracking-tight leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xs sm:text-sm text-[#777783] mt-2 font-normal leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {items.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl border border-[#E9E9EF] overflow-hidden flex flex-col justify-between hover:border-[#191923]/30 transition-all duration-300 shadow-xs hover:shadow-sm group"
            >
              <div>
                {/* Card Image */}
                <div className="w-full h-[180px] sm:h-[190px] overflow-hidden bg-[#F8F8FA] relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={card.imageSrc}
                    alt={card.imageAlt || card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out brightness-[0.97]"
                  />
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="font-sans text-base sm:text-[17px] font-medium text-[#191923] leading-snug group-hover:text-[#FF00B7] transition-colors mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#676879] leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>
              </div>

              {/* Bottom Action Link */}
              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={() => onCardClick ? onCardClick(card) : onBannerButtonClick?.()}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#191923] group-hover:text-[#FF00B7] transition-colors cursor-pointer"
                >
                  <span>{card.linkText || "Read case study"}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Minimalist Bottom Callout */}
        {bannerText && (
          <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 sm:p-6 rounded-2xl bg-[#F8F8FA] border border-[#E9E9EF] text-center sm:text-left shadow-xs">
            <p className="font-sans text-sm sm:text-base font-normal text-[#191923]">
              {bannerText}
            </p>

            <button
              type="button"
              onClick={onBannerButtonClick}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#191923] hover:bg-black text-white text-xs sm:text-sm font-medium rounded-full transition-all cursor-pointer shadow-xs active:scale-95 shrink-0"
            >
              <span>{bannerButtonText}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
