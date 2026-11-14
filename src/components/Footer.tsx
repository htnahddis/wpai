"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Shield, Award, CheckCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#F8F8F8] border-t border-[#E8E8E8] text-[#292A2E] pt-16 pb-12">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Trust & Credibility Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12 border-b border-[#E8E8E8]">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-white border border-[#E8E8E8] flex items-center justify-center text-[#0D5CE5] shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#292A2E]">SAP Gold Partner</h4>
              <p className="text-xs text-[#64676D] mt-0.5">
                Certified delivery across S/4HANA Public & Private Cloud, BTP, Joule, and SAC.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-white border border-[#E8E8E8] flex items-center justify-center text-[#0D5CE5] shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#292A2E]">ISO 27000:2022 Governance</h4>
              <p className="text-xs text-[#64676D] mt-0.5">
                Enterprise data sovereignty with private deployment and automated masking.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-white border border-[#E8E8E8] flex items-center justify-center text-[#0D5CE5] shrink-0">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#292A2E]">100% Delivery Track Record</h4>
              <p className="text-xs text-[#64676D] mt-0.5">
                Over 70+ successful enterprise implementations across 30+ countries.
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 py-12 border-b border-[#E8E8E8]">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-baseline gap-1">
              <span className="font-serif text-2xl font-bold tracking-tight text-[#292A2E]">
                percipere
              </span>
              <span className="w-2 h-2 rounded-full bg-[#E85D04]"></span>
            </Link>
            <p className="text-sm text-[#64676D] mt-3 max-w-sm leading-relaxed">
              Enterprise SAP systems transformed from passive transaction recorders into active, intelligent decision engines. De-risking delivery, support, and business planning.
            </p>
            <div className="mt-5 text-xs text-[#64676D] space-y-1">
              <p><strong className="text-[#292A2E]">Global Hubs:</strong> London • Mumbai • Singapore • Dubai</p>
              <p><strong className="text-[#292A2E]">Ecosystem:</strong> FUTUROOT Process Intelligence • PerciVerse</p>
            </div>
          </div>

          {/* Solutions & Suites */}
          <div>
            <h5 className="text-xs font-semibold uppercase tracking-wider text-[#292A2E] mb-4">
              AI Suites
            </h5>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/percixpert" className="text-[#64676D] hover:text-[#0D5CE5] transition-colors flex items-center gap-1">
                  PerciXpert SAP Delivery
                </Link>
              </li>
              <li>
                <Link href="/perciserve-support-suite" className="text-[#64676D] hover:text-[#0D5CE5] transition-colors flex items-center gap-1">
                  PerciServe Support Suite
                </Link>
              </li>
              <li>
                <Link href="/percihub-business-suite" className="text-[#64676D] hover:text-[#0D5CE5] transition-colors flex items-center gap-1">
                  PerciHub Business Suite
                </Link>
              </li>
              <li>
                <Link href="/what-we-do/intelligence-enterprise-offerings/xpa-epm" className="text-[#64676D] hover:text-[#0D5CE5] transition-colors flex items-center gap-1">
                  xP&A & EPM Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Enterprise AI */}
          <div>
            <h5 className="text-xs font-semibold uppercase tracking-wider text-[#292A2E] mb-4">
              Intelligence
            </h5>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/sap-business-ai" className="text-[#64676D] hover:text-[#0D5CE5] transition-colors flex items-center gap-1">
                  SAP Business AI & Joule
                </Link>
              </li>
              <li>
                <Link href="/what-we-do/intelligence-enterprise-offerings/ai-acceleration" className="text-[#64676D] hover:text-[#0D5CE5] transition-colors flex items-center gap-1">
                  AI Acceleration Services
                </Link>
              </li>
              <li>
                <span className="text-[#64676D]">PerciPlan Demand Planning</span>
              </li>
              <li>
                <span className="text-[#64676D]">FUTUROOT Process Mining</span>
              </li>
            </ul>
          </div>

          {/* Trust & Engagement */}
          <div>
            <h5 className="text-xs font-semibold uppercase tracking-wider text-[#292A2E] mb-4">
              Engagement
            </h5>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#consultation" className="text-[#0D5CE5] font-medium hover:underline flex items-center gap-1">
                  Book a Consultation <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <span className="text-[#64676D]">Global System Integrators</span>
              </li>
              <li>
                <span className="text-[#64676D]">Mid-Market SAP Partners</span>
              </li>
              <li>
                <span className="text-[#64676D]">Enterprise Support Hotline</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8A8D93] gap-4">
          <p>© {new Date().getFullYear()} Percipere Technologies. All rights reserved. Light mode enterprise edition.</p>
          <div className="flex items-center gap-6">
            <span>ISO 27000:2022</span>
            <span>GDPR Compliant</span>
            <span>Data Sovereignty Guaranteed</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
