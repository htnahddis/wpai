"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ConsultationModal from "./ConsultationModal";

export default function Footer() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <footer className="w-full bg-white text-[#1B1466] pt-14 sm:pt-20 pb-10 border-t border-[#ECEAF8] overflow-hidden">
        {/* Top CTA Banner in Soft Purple Tinted Card */}
        <div className="max-w-[1240px] mx-auto px-4 mb-14 sm:mb-18">
          <div className="rounded-[28px] sm:rounded-[36px] p-8 sm:p-14 text-center shadow-xs">
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#1B1466] tracking-tight leading-tight mb-4">
              Run every ERP implementation on one platform
            </h2>
            <p className="text-sm sm:text-base text-[#55527D] max-w-xl mx-auto leading-relaxed mb-8 font-normal">
              Discover how Percipere transforms your enterprise Cloud ERP migration, planning, and operations into a predictable, automated system of action.
            </p>
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#1B1466] hover:bg-[#140F4D] text-white text-sm sm:text-base font-medium rounded-full transition-all shadow-md hover:scale-[1.02] cursor-pointer"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Footer Navigation and Links */}
        <div className="max-w-[1240px] mx-auto px-6 border-t border-[#ECEAF8] pt-10 pb-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-0">
            {/* Copyright */}
            <div className="text-xs text-[#7B789C] font-mono order-1 lg:order-1">
              &copy; {new Date().getFullYear()} Percipere AI. All rights reserved.
            </div>

            {/* Core Product Links - Two Rows */}
            <div className="flex flex-col items-center gap-2 text-xs sm:text-sm font-medium order-2 lg:order-2">
              {/* First Row - Core Products */}
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1">
                <Link className="text-[#55527D] hover:text-[#1B1466] transition-colors" href="/percixpert">
                  PerciXpert
                </Link>
                <Link className="text-[#55527D] hover:text-[#1B1466] transition-colors" href="/perciserve-support-suite">
                  PerciServe
                </Link>
                <Link className="text-[#55527D] hover:text-[#1B1466] transition-colors" href="/agent-studio">
                  Agentic Studio
                </Link>
                <Link className="text-[#55527D] hover:text-[#1B1466] transition-colors" href="/futuroot">
                  Futuroot
                </Link>
                <Link className="text-[#55527D] hover:text-[#1B1466] transition-colors" href="/percibot">
                  Percibot
                </Link>
              </div>
              {/* Second Row - 3 Links */}
              <div className="flex items-center gap-x-6">
                <Link className="text-[#55527D] hover:text-[#1B1466] transition-colors" href="/what-we-do/intelligence-enterprise-offerings/xpa-epm">
                  xP&amp;A / EPM
                </Link>
                <Link className="text-[#55527D] hover:text-[#1B1466] transition-colors" href="/sap-business-ai">
                  SAP Business AI
                </Link>
                <Link className="text-[#55527D] hover:text-[#1B1466] transition-colors" href="/what-we-do/intelligence-enterprise-offerings/ai-acceleration">
                  AI Acceleration
                </Link>
              </div>
            </div>

            {/* Utility / Social Links */}
            <div className="flex items-center gap-5 text-xs sm:text-sm order-3 lg:order-3">
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="text-[#7B789C] hover:text-[#1B1466] bg-transparent border-none p-0 cursor-pointer transition-colors"
              >
                Contact
              </button>
              <a
                href="https://www.linkedin.com/company/percipere"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7B789C] hover:text-[#1B1466] transition-colors"
              >
                LinkedIn
              </a>
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="text-[#7B789C] hover:text-[#1B1466] bg-transparent border-none p-0 cursor-pointer transition-colors"
              >
                Login
              </button>
              <a
                href="https://x.com/percipere"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7B789C] hover:text-[#1B1466] transition-colors"
              >
                X
              </a>
            </div>
          </div>
        </div>

        {/* Monolithic Brand Wordmark in Percipere Purple */}
        <div className="w-full mt-6 pt-4 flex justify-center items-center overflow-hidden">
          <svg
            viewBox="0 0 1400 240"
            className="w-full max-h-[160px] select-none text-[#1B1466]"
            fill="currentColor"
            aria-label="Percipere"
          >
            <text
              x="50%"
              y="62%"
              dominantBaseline="middle"
              textAnchor="middle"
              fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
              fontWeight="bold"
              fontSize="220"
              letterSpacing="-0.04em"
              fill="#1B1466"
            >
              percipere
            </text>
            <circle cx="1275" cy="115" r="14" fill="#FF00B7" />
          </svg>
        </div>
      </footer>

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultTopic="Enterprise Implementation System"
      />
    </>
  );
}
