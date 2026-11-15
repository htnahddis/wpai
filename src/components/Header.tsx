"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import ConsultationModal from "./ConsultationModal";

export default function Header() {
  const pathname = usePathname();
  const currentPath = pathname || "";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // The 6 verified Percipere pages
  const navPages = [
    {
      name: "PerciXpert",
      href: "/percixpert",
      tagline: "AI implementation engine for SAP S/4HANA",
    },
    {
      name: "PerciServe",
      href: "/perciserve-support-suite",
      tagline: "Enterprise support suite & root-cause analysis",
    },
    {
      name: "PerciHub",
      href: "/percihub-business-suite",
      tagline: "Autonomous business agents for SAP processes",
    },
    {
      name: "xP&A / EPM",
      href: "/what-we-do/intelligence-enterprise-offerings/xpa-epm",
      tagline: "Extended Planning on SAP Analytics Cloud",
    },
    {
      name: "SAP Business AI",
      href: "/sap-business-ai",
      tagline: "SAP Joule integration and custom enterprise agents",
    },
    {
      name: "AI Acceleration",
      href: "/what-we-do/intelligence-enterprise-offerings/ai-acceleration",
      tagline: "Enterprise AI roadmap and PerciSuite tooling",
    },
  ];

  return (
    <>
      <div className="cn-nav-fixed-root sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E9E9EF] transition-all">
        <nav className="cn-nav max-w-[1240px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="cn-nav-inner w-full flex items-center justify-between gap-4">
            {/* Brand Wordmark with Percipere Magenta Signal Dot */}
            <Link href="/" className="cn-logo flex items-baseline gap-1 group shrink-0">
              <span className="font-sans text-2xl font-bold tracking-tight text-[#191923] group-hover:text-[#1B1466] transition-colors">
                percipere
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF00B7]"></span>
            </Link>

            {/* Desktop Navigation Links  Strictly the 6 Percipere Pages */}
            <div className="cn-links hidden xl:flex items-center gap-6">
              {navPages.map((page) => {
                const isActive =
                  currentPath === page.href ||
                  (page.href.includes("xpa-epm") && currentPath.includes("xpa-epm")) ||
                  (page.href.includes("ai-acceleration") && currentPath.includes("ai-acceleration"));

                return (
                  <Link
                    key={page.name}
                    href={page.href}
                    className={`cn-link text-[13px] font-medium tracking-tight transition-colors py-1.5 whitespace-nowrap ${isActive
                        ? "text-[#1B1466] font-medium border-b-2 border-[#FF00B7]"
                        : "text-[#777783] hover:text-[#191923]"
                      }`}
                  >
                    {page.name}
                  </Link>
                );
              })}
            </div>

            {/* Tablet Navigation Links for intermediate viewports */}
            <div className="hidden lg:flex xl:hidden items-center gap-4">
              <div className="flex items-center gap-4">
                <Link
                  href="/percixpert"
                  className="text-[13px] font-medium text-[#777783] hover:text-[#191923]"
                >
                  PerciXpert
                </Link>
                <Link
                  href="/perciserve-support-suite"
                  className="text-[13px] font-medium text-[#777783] hover:text-[#191923]"
                >
                  PerciServe
                </Link>
                <Link
                  href="/percihub-business-suite"
                  className="text-[13px] font-medium text-[#777783] hover:text-[#191923]"
                >
                  PerciHub
                </Link>
                <Link
                  href="/what-we-do/intelligence-enterprise-offerings/xpa-epm"
                  className="text-[13px] font-medium text-[#777783] hover:text-[#191923]"
                >
                  xP&amp;A
                </Link>
                <Link
                  href="/sap-business-ai"
                  className="text-[13px] font-medium text-[#777783] hover:text-[#191923]"
                >
                  SAP AI
                </Link>
                <Link
                  href="/what-we-do/intelligence-enterprise-offerings/ai-acceleration"
                  className="text-[13px] font-medium text-[#777783] hover:text-[#191923]"
                >
                  Advisory
                </Link>
              </div>
            </div>

            {/* CTA Wrap */}
            <div className="cn-cta-wrap flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="cn-cta button-primary text-[13px] py-2 px-5 hidden sm:inline-flex bg-[#1B1466] text-white hover:bg-[#140F4D] rounded-full font-medium"
              >
                Book a Demo
              </button>

              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="cn-mobile-demo sm:hidden button-primary text-[12px] py-1.5 px-3.5 bg-[#1B1466] text-white rounded-full font-medium"
              >
                Demo
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="cn-burger lg:hidden p-2 text-[#191923] hover:bg-[#F8F8FA] rounded-lg transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer featuring the 6 pages */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-white/98 backdrop-blur-lg flex flex-col p-6 overflow-y-auto border-t border-[#E9E9EF] lg:hidden animate-in fade-in duration-150">
          <div className="space-y-4 mb-8">
            <span className="text-xs font-mono font-medium text-[#777783]">
              Enterprise Offerings
            </span>
            <div className="space-y-2">
              {navPages.map((page) => (
                <Link
                  key={page.name}
                  href={page.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block p-3.5 rounded-xl border border-[#E9E9EF] bg-[#F8F8FA] hover:border-[#1B1466] transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[14px] font-medium text-[#191923]">
                      {page.name}
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#777783]" />
                  </div>
                  <div className="text-[12px] text-[#777783] mt-1 font-normal">
                    {page.tagline}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-auto pt-6 border-t border-[#E9E9EF]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setModalOpen(true);
              }}
              className="w-full button-primary py-3 bg-[#1B1466] hover:bg-[#140F4D] text-white rounded-full font-medium"
            >
              Book a Demo
            </button>
          </div>
        </div>
      )}

      {/* Booking Consultation Modal */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultTopic="PerciXpert AI Implementation"
      />
    </>
  );
}
