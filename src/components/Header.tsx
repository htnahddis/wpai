"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X, ChevronDown } from "lucide-react";
import ConsultationModal from "./ConsultationModal";

export default function Header() {
  const pathname = usePathname();
  const currentPath = pathname || "";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [whatWeDoDropdownOpen, setWhatWeDoDropdownOpen] = useState(false);

  // Products
  const products = [
    {
      name: "Agent Studio",
      href: "/agent-studio",
      tagline: "No-code autonomous AI agent builder",
    },
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
  ];

  // What we do
  const whatWeDo = [
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
      tagline: "Enterprise AI roadmap and PerciServe tooling",
    },
  ];

  return (
    <>
      <div
        className="cn-nav-fixed-root sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E9E9EF] transition-all font-sans"
        style={{ position: "sticky", top: 0, zIndex: 50, letterSpacing: "normal" }}
      >
        <nav className="cn-nav max-w-[1240px] mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo - Left */}
          <Link href="/" className="cn-logo flex items-baseline gap-1 group shrink-0">
            <span className="font-sans text-2xl font-bold tracking-tight text-[#191923] group-hover:text-[#1B1466] transition-colors">
              percipere
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF00B7]"></span>
          </Link>

          {/* Center Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsDropdownOpen(true)}
              onMouseLeave={() => setProductsDropdownOpen(false)}
            >
              <button
                type="button"
                className="text-[13px] font-medium text-[#777783] hover:text-[#191923] transition-colors py-1.5 flex items-center gap-1 cursor-pointer"
              >
                Products
              </button>

              {/* Dropdown Menu */}
              {productsDropdownOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-72 bg-white rounded-2xl shadow-2xl border border-[#E9E9EF] p-4 z-50"
                  style={{ top: "100%", left: "50%", right: "auto", bottom: "auto", transform: "translateX(-50%)" }}
                >
                  <div className="space-y-1">
                    {products.map((product) => (
                      <Link
                        key={product.name}
                        href={product.href}
                        className="block p-3 rounded-xl hover:bg-[#F8F8FA] transition-all group"
                      >
                        <div className="flex items-center justify-between">
                          <div className="text-[14px] font-semibold text-[#191923] group-hover:text-[#1B1466] transition-colors">
                            {product.name}
                          </div>
                          <ArrowRight className="w-4 h-4 text-[#777783] opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="text-[12px] text-[#676879] mt-1 leading-snug">
                          {product.tagline}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* What We Do Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setWhatWeDoDropdownOpen(true)}
              onMouseLeave={() => setWhatWeDoDropdownOpen(false)}
            >
              <button
                type="button"
                className="text-[13px] font-medium text-[#777783] hover:text-[#191923] transition-colors py-1.5 flex items-center gap-1 cursor-pointer"
              >
                What We Do
              </button>

              {/* Dropdown Menu */}
              {whatWeDoDropdownOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-72 bg-white rounded-2xl shadow-2xl border border-[#E9E9EF] p-4 z-50"
                  style={{ top: "100%", left: "50%", right: "auto", bottom: "auto", transform: "translateX(-50%)" }}
                >
                  <div className="space-y-1">
                    {whatWeDo.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block p-3 rounded-xl hover:bg-[#F8F8FA] transition-all group"
                      >
                        <div className="flex items-center justify-between">
                          <div className="text-[14px] font-semibold text-[#191923] group-hover:text-[#1B1466] transition-colors">
                            {item.name}
                          </div>
                          <ArrowRight className="w-4 h-4 text-[#777783] opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="text-[12px] text-[#676879] mt-1 leading-snug">
                          {item.tagline}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right - Book Demo Button */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="cn-cta text-[13px] py-2 px-5 hidden sm:inline-flex bg-[#1B1466] text-white hover:bg-[#140F4D] rounded-full font-medium transition-colors cursor-pointer"
            >
              Book a Demo
            </button>

            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="cn-mobile-demo sm:hidden text-[12px] py-1.5 px-3.5 bg-[#1B1466] text-white rounded-full font-medium transition-colors cursor-pointer"
            >
              Demo
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="cn-burger lg:hidden p-2 text-[#191923] hover:bg-[#F8F8FA] rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-white/98 backdrop-blur-lg flex flex-col p-6 overflow-y-auto border-t border-[#E9E9EF] lg:hidden animate-in fade-in duration-150">
          <div className="space-y-4 mb-8">
            {/* Products Section */}
            <div>
              <span className="text-xs font-mono font-medium text-[#777783] block mb-2">
                Products
              </span>
              <div className="space-y-2">
                {products.map((product) => (
                  <Link
                    key={product.name}
                    href={product.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block p-3.5 rounded-xl border border-[#E9E9EF] bg-[#F8F8FA] hover:border-[#1B1466] transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[14px] font-medium text-[#191923]">
                        {product.name}
                      </span>
                      <ArrowRight className="w-4 h-4 text-[#777783]" />
                    </div>
                    <div className="text-[12px] text-[#777783] mt-1 font-normal">
                      {product.tagline}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* What We Do Section */}
            <div>
              <span className="text-xs font-mono font-medium text-[#777783] block mb-2">
                What We Do
              </span>
              <div className="space-y-2">
                {whatWeDo.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block p-3.5 rounded-xl border border-[#E9E9EF] bg-[#F8F8FA] hover:border-[#1B1466] transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[14px] font-medium text-[#191923]">
                        {item.name}
                      </span>
                      <ArrowRight className="w-4 h-4 text-[#777783]" />
                    </div>
                    <div className="text-[12px] text-[#777783] mt-1 font-normal">
                      {item.tagline}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-auto pt-6 border-t border-[#E9E9EF]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setModalOpen(true);
              }}
              className="w-full py-3 bg-[#1B1466] hover:bg-[#140F4D] text-white rounded-full font-medium transition-colors text-center cursor-pointer"
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
