"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowUpRight, Sparkles, Layers, ShieldCheck, Wrench } from "lucide-react";
import ConsultationModal from "./ConsultationModal";

export default function Header() {
  const pathname = usePathname();
  const currentPath = pathname || "";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const productLinks = [
    {
      name: "PerciXpert",
      tagline: "AI-Enabled SAP Implementation Engine",
      href: "/percixpert",
      badge: "Flagship",
    },
    {
      name: "PerciServe",
      tagline: "Intelligent SAP Support & Root Cause Resolution",
      href: "/perciserve-support-suite",
      badge: "Support Suite",
    },
    {
      name: "PerciHub",
      tagline: "Context-Aware Business AI Agents for SAP",
      href: "/percihub-business-suite",
      badge: "Agent Library",
    },
    {
      name: "xP&A & EPM",
      tagline: "Enterprise Planning, SAC & Financial Consolidation",
      href: "/what-we-do/intelligence-enterprise-offerings/xpa-epm",
      badge: "Analytics Cloud",
    },
    {
      name: "SAP Business AI",
      tagline: "SAP Joule Copilot & Enterprise Intelligence",
      href: "/sap-business-ai",
      badge: "Joule Integration",
    },
    {
      name: "AI Acceleration",
      tagline: "AI Consulting Services & PerciSuite Applications",
      href: "/what-we-do/intelligence-enterprise-offerings/ai-acceleration",
      badge: "Ready-to-Deploy",
    },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E8E8E8] transition-all">
        {/* Subtle Top Utility Bar - Atlassian/Auctor enterprise trust */}
        <div className="hidden md:block bg-[#F8F8F8] border-b border-[#EFEFEF] py-1.5 px-6">
          <div className="max-w-[1280px] mx-auto flex items-center justify-between text-[11px] text-[#64676D]">
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center gap-1.5 font-medium text-[#292A2E]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
                SAP Gold Partner
              </span>
              <span className="text-[#D2D4D7]">|</span>
              <span>Proprietary IP: FUTUROOT & PerciVerse</span>
              <span className="text-[#D2D4D7]">|</span>
              <span>ISO 27000:2022 Certified AI Governance</span>
            </div>
            <div className="flex items-center gap-4">
              <span>London • Mumbai • Singapore • Dubai</span>
              <button
                onClick={() => setModalOpen(true)}
                className="text-[#0D5CE5] font-medium hover:underline flex items-center gap-0.5"
              >
                Direct Advisory Request
                <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Single-Row Navigation Bar */}
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-18 py-3 flex items-center justify-between">
          {/* Percipere Wordmark */}
          <div className="flex items-center gap-8">
            <Link href="/" className="group flex items-baseline gap-1">
              <span className="font-serif text-2xl font-bold tracking-tight text-[#292A2E] group-hover:text-[#101214] transition-colors">
                percipere
              </span>
              <span className="w-2 h-2 rounded-full bg-[#E85D04] inline-block animate-pulse"></span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1">
              {/* Product Suite Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setProductsDropdownOpen(true)}
                onMouseLeave={() => setProductsDropdownOpen(false)}
              >
                <button
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-[#292A2E] hover:text-[#0D5CE5] rounded-md transition-colors"
                  aria-expanded={productsDropdownOpen}
                >
                  <span>Solutions & Suites</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${productsDropdownOpen ? "rotate-180 text-[#0D5CE5]" : "text-[#64676D]"}`} />
                </button>

                {/* Minimal clean dropdown */}
                {productsDropdownOpen && (
                  <div className="absolute top-full left-0 w-[420px] bg-white rounded-xl shadow-elevated border border-[#E8E8E8] p-2 mt-1 animate-in fade-in slide-in-from-top-1 duration-150">
                    <div className="px-3 py-2 border-b border-[#F0F0F0] mb-1">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-[#8A8D93]">
                        Enterprise Offerings
                      </p>
                    </div>
                    <div className="grid grid-cols-1 gap-1">
                      {productLinks.map((item) => {
                        const isActive = currentPath === item.href;
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={`p-2.5 rounded-lg flex items-start justify-between group transition-colors ${
                              isActive ? "bg-[#F0F5FF]" : "hover:bg-[#F8F8F8]"
                            }`}
                            onClick={() => setProductsDropdownOpen(false)}
                          >
                            <div>
                              <div className="flex items-center gap-2">
                                <span className={`text-sm font-medium ${isActive ? "text-[#0D5CE5]" : "text-[#292A2E] group-hover:text-[#0D5CE5]"}`}>
                                  {item.name}
                                </span>
                                <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#F4F5F6] text-[#64676D] font-normal">
                                  {item.badge}
                                </span>
                              </div>
                              <p className="text-xs text-[#64676D] mt-0.5 line-clamp-1">
                                {item.tagline}
                              </p>
                            </div>
                            <ArrowUpRight className="w-3.5 h-3.5 text-[#8A8D93] group-hover:text-[#0D5CE5] transition-colors mt-1 shrink-0" />
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Direct links for quick scannability */}
              <Link
                href="/percixpert"
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  currentPath === "/percixpert" ? "text-[#0D5CE5] bg-blue-50/50" : "text-[#292A2E] hover:text-[#0D5CE5]"
                }`}
              >
                PerciXpert
              </Link>

              <Link
                href="/perciserve-support-suite"
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  currentPath === "/perciserve-support-suite" ? "text-[#0D5CE5] bg-blue-50/50" : "text-[#292A2E] hover:text-[#0D5CE5]"
                }`}
              >
                PerciServe
              </Link>

              <Link
                href="/percihub-business-suite"
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  currentPath === "/percihub-business-suite" ? "text-[#0D5CE5] bg-blue-50/50" : "text-[#292A2E] hover:text-[#0D5CE5]"
                }`}
              >
                PerciHub
              </Link>

              <Link
                href="/what-we-do/intelligence-enterprise-offerings/xpa-epm"
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  currentPath.includes("xpa-epm") ? "text-[#0D5CE5] bg-blue-50/50" : "text-[#292A2E] hover:text-[#0D5CE5]"
                }`}
              >
                xP&A & EPM
              </Link>

              <Link
                href="/sap-business-ai"
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  currentPath === "/sap-business-ai" ? "text-[#0D5CE5] bg-blue-50/50" : "text-[#292A2E] hover:text-[#0D5CE5]"
                }`}
              >
                SAP Business AI
              </Link>

              <Link
                href="/what-we-do/intelligence-enterprise-offerings/ai-acceleration"
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  currentPath.includes("ai-acceleration") ? "text-[#0D5CE5] bg-blue-50/50" : "text-[#292A2E] hover:text-[#0D5CE5]"
                }`}
              >
                AI Acceleration
              </Link>
            </nav>
          </div>

          {/* Right Header Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => setModalOpen(true)}
              className="text-xs font-semibold text-[#292A2E] hover:text-[#0D5CE5] px-3 py-2 transition-colors"
            >
              Talk to an Expert
            </button>
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center justify-center px-4 py-2 bg-[#292A2E] text-white text-xs font-semibold tracking-wide rounded-lg hover:bg-[#101214] transition-all shadow-subtle active:scale-[0.98]"
            >
              Book a Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setModalOpen(true)}
              className="px-3 py-1.5 bg-[#292A2E] text-white text-xs font-semibold rounded-lg"
            >
              Consult
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#292A2E] rounded-md hover:bg-surface"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#E8E8E8] bg-white px-4 py-4 space-y-2 animate-in fade-in duration-150">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#8A8D93] px-2 mb-1">
              Six Enterprise Modernised Pages
            </div>
            {productLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-lg hover:bg-surface text-sm font-medium text-[#292A2E]"
              >
                <span>{item.name}</span>
                <span className="text-xs text-[#64676D]">{item.badge}</span>
              </Link>
            ))}
            <div className="pt-3 border-t border-[#E8E8E8]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setModalOpen(true);
                }}
                className="w-full py-2.5 bg-[#0D5CE5] text-white text-sm font-semibold rounded-lg text-center"
              >
                Book a Consultation
              </button>
            </div>
          </div>
        )}
      </header>

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
