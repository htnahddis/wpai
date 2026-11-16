"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function MondayNymeriaIntegrations({ onOpenModal }: { onOpenModal?: () => void }) {
  // Exactly 13 items + 1 span-3 cell = 16 total grid slots across 4 rows (4 x 4 = 16)
  // Perfectly flush grid with ZERO holes, gaps, or broken borders, and no truncated labels!
  const integrations = [
    // Row 1 (4 items)
    {
      name: "SAP S/4HANA",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
          <rect width="24" height="24" rx="4" fill="#0A2540" />
          <path d="M5 8h14M5 12h10M5 16h6" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: "SAP BTP",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
          <rect width="24" height="24" rx="4" fill="#0070F2" />
          <circle cx="12" cy="12" r="5" stroke="#FFFFFF" strokeWidth="2" />
          <circle cx="12" cy="12" r="2" fill="#FFFFFF" />
        </svg>
      ),
    },
    {
      name: "Analytics Cloud",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
          <rect width="24" height="24" rx="4" fill="#0052CC" />
          <path d="M7 16l3-4 3 2 4-6" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      name: "SAP Joule",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
          <rect width="24" height="24" rx="4" fill="#FF4400" />
          <path d="M12 5l1.5 4.5L18 11l-4.5 1.5L12 17l-1.5-4.5L6 11l4.5-1.5L12 5z" fill="#FFFFFF" />
        </svg>
      ),
    },

    // Row 2 (4 items)
    {
      name: "Microsoft Teams",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
          <rect width="24" height="24" rx="4" fill="#464EB8" />
          <path d="M7 9h6v7H7z" fill="#FFFFFF" />
          <circle cx="10" cy="7" r="1.5" fill="#FFFFFF" />
        </svg>
      ),
    },
    {
      name: "Jira Software",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
          <rect width="24" height="24" rx="4" fill="#0052CC" />
          <path d="M12 5l5 5-5 5-5-5 5-5z" fill="#FFFFFF" />
        </svg>
      ),
    },
    {
      name: "ServiceNow",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
          <rect width="24" height="24" rx="4" fill="#293E40" />
          <circle cx="12" cy="12" r="5" stroke="#81B5A1" strokeWidth="2" />
        </svg>
      ),
    },
    {
      name: "Salesforce",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
          <rect width="24" height="24" rx="4" fill="#00A1E0" />
          <path d="M8 14c-1-1-1-3 0-4 1-1 3-1 4 0 1-2 4-2 5 0 1 0 2 1 2 2 0 2-1 3-3 3H8z" fill="#FFFFFF" />
        </svg>
      ),
    },

    // Row 3 (4 items)
    {
      name: "FUTUROOT",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
          <rect width="24" height="24" rx="4" fill="#10B981" />
          <path d="M6 16l4-8 4 6 4-10" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: "Microsoft 365",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
          <rect width="24" height="24" rx="4" fill="#D83B01" />
          <rect x="6" y="6" width="5" height="5" fill="#FFFFFF" />
          <rect x="13" y="6" width="5" height="5" fill="#FFFFFF" />
          <rect x="6" y="13" width="5" height="5" fill="#FFFFFF" />
          <rect x="13" y="13" width="5" height="5" fill="#FFFFFF" />
        </svg>
      ),
    },
    {
      name: "Confluence",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
          <rect width="24" height="24" rx="4" fill="#172B4D" />
          <path d="M7 16c2-4 6-4 10 0-2 4-6 4-10 0z" fill="#0052CC" />
        </svg>
      ),
    },
    {
      name: "Workday ERP",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
          <rect width="24" height="24" rx="4" fill="#005CB9" />
          <circle cx="12" cy="12" r="4" stroke="#FFFFFF" strokeWidth="2" />
        </svg>
      ),
    },

    // Row 4 (1 item + span3 cell = 4 columns)
    {
      name: "Google Cloud",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
          <rect width="24" height="24" rx="4" fill="#4285F4" />
          <path d="M8 12h8M12 8v8" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full bg-white py-16 sm:py-24">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Narrative with Percipere Styling */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-5">
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-[42px] leading-[1.12] tracking-tight text-[#191923] font-normal">
              Right at home with the tools your team <span className="text-[#FF00B7]">already uses</span>
            </h2>
            <p className="text-base text-[#777783] leading-relaxed">
              Percipere connects directly to your existing SAP landscape and enterprise stack so conversations, decisions, scopes, and deliverables stay continuously in sync.
            </p>
            {onOpenModal && (
              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenModal}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#1B1466] hover:bg-[#140F4D] text-white text-sm font-medium rounded-full transition-colors shadow-sm group"
                >
                  <span>Explore Enterprise Integrations</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Monday.com Exact Nymeria Integrations Grid */}
          <div className="lg:col-span-7">
            <div className="nymeria-integrations-grid shadow-card border border-[#E9E9EF]">
              {integrations.map((tool, idx) => (
                <div key={idx} className="int-cell bg-[#F6F6F3] hover:bg-white transition-colors cursor-default">
                  {tool.icon}
                  <span className="whitespace-nowrap font-medium text-xs sm:text-[13px] text-[#191923]">
                    {tool.name}
                  </span>
                </div>
              ))}
              {/* Monday.com Span-3 Highlight Cell  Perfectly completes Row 4 */}
              <div className="int-cell span3 bg-[#EFEFEA] hover:bg-[#EAEAE5] transition-colors cursor-default">
                <span className="more-count">200+</span>
                <span className="more-text">enterprise connectors, native SAP BTP APIs, and workflow hooks</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
