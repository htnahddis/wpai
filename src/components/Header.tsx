"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import ConsultationModal from "./ConsultationModal";

export default function Header() {
  const pathname = usePathname();
  const currentPath = pathname || "";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const navLinks = [
    { name: "PerciXpert", href: "/percixpert" },
    { name: "PerciServe", href: "/perciserve-support-suite" },
    { name: "PerciHub", href: "/percihub-business-suite" },
    { name: "xP&A Planning", href: "/what-we-do/intelligence-enterprise-offerings/xpa-epm" },
    { name: "SAP Business AI", href: "/sap-business-ai" },
    { name: "AI Acceleration", href: "/what-we-do/intelligence-enterprise-offerings/ai-acceleration" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#EAEAEA] transition-all">
        <div className="max-w-[1240px] mx-auto px-6 h-16 flex items-center justify-between">
          {/* Auctor minimal brand wordmark */}
          <Link href="/" className="flex items-baseline gap-1 group">
            <span className="font-serif text-2xl font-bold tracking-tight text-[#191923] group-hover:opacity-80 transition-opacity">
              percipere
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#E85D04]"></span>
          </Link>

          {/* Minimal, uncluttered navigation */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {navLinks.map((link) => {
              const isActive =
                currentPath === link.href ||
                (link.href.includes("xpa-epm") && currentPath.includes("xpa-epm")) ||
                (link.href.includes("ai-acceleration") && currentPath.includes("ai-acceleration"));

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-full text-[13px] font-medium tracking-tight transition-all ${
                    isActive
                      ? "bg-[#F4F4F6] text-[#191923] font-semibold"
                      : "text-[#64676D] hover:text-[#191923] hover:bg-[#FAFAFA]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Single primary CTA - Auctor style */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={() => setModalOpen(true)}
              className="px-5 py-2 bg-[#191923] text-white text-[13px] font-medium rounded-full hover:bg-black transition-all shadow-sm active:scale-95"
            >
              Book a Consultation
            </button>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#191923] rounded-lg hover:bg-[#F8F8F8]"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-[#EAEAEA] px-6 py-5 space-y-2 animate-in fade-in duration-150">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-sm font-medium text-[#191923] hover:text-[#0D5CE5]"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3 border-t border-[#EAEAEA]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setModalOpen(true);
                }}
                className="w-full py-2.5 bg-[#191923] text-white text-xs font-semibold rounded-full text-center"
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
