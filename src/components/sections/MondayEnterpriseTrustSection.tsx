"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface MondayEnterpriseTrustSectionProps {
  onOpenModal?: () => void;
}

export default function MondayEnterpriseTrustSection({ onOpenModal }: MondayEnterpriseTrustSectionProps) {
  const baseAssetPath = "/The%20AI%20Workspace%20for%20People%20%26%20Agents%20_%20monday.com_files/";

  const trustBadges = [
    {
      name: "GDPR",
      src: `${baseAssetPath}6909c812b47e2c6520f86855_gdpr-logo.png`,
      alt: "GDPR Compliant",
    },
    {
      name: "AICPA SOC 2",
      src: `${baseAssetPath}6909c8121da431cca6be60fb_aicpa-soc2-logo.png`,
      alt: "AICPA SOC 2 Type II Certified",
    },
    {
      name: "ISO 27001",
      src: `${baseAssetPath}68f62a0bd0c61c457518cca2_iso.png`,
      alt: "ISO 27001 Information Security",
    },
    {
      name: "HIPAA",
      src: `${baseAssetPath}6909c78c0f507978af960894_hipa-logo.png`,
      alt: "HIPAA Compliant",
    },
  ];

  return (
    <section className="w-full bg-white text-[#191923] py-20 sm:py-28 border-b border-[#F1F5F9]">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        {/* Section Heading matching Monday design */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <p className="text-sm sm:text-base font-normal text-[#191923] mb-3">
            Enterprise-ready AI work platform
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[54px] font-medium tracking-tight text-[#191923] leading-[1.15]">
            Trusted by enterprises.<br className="hidden sm:inline" /> Recognized by industry leaders.
          </h2>
        </div>

        {/* 3-Card Trust Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Card 1: Enterprise-grade security (Wide card, 6 cols) */}
          <div className="lg:col-span-6 bg-white border border-[#CACBCD] rounded-[24px] p-8 sm:p-12 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:border-[#191923]/40">
            <div>
              <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#191923] mb-4">
                Enterprise-grade security
              </h3>
              <p className="text-base text-[#64748B] leading-relaxed mb-6">
                Enterprise-grade AI infrastructure with built-in protection and security, data privacy, governance, permissions, and compliance.
              </p>
              <button
                type="button"
                onClick={onOpenModal}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#191923] hover:text-[#1B1466] group transition-colors"
              >
                <span className="underline underline-offset-4">Explore our Trust Center</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Compliance Badges Row */}
            <div className="pt-10 sm:pt-14 mt-auto">
              <div className="grid grid-cols-4 gap-4 items-center justify-between">
                {trustBadges.map((badge) => (
                  <div key={badge.name} className="flex items-center justify-center">
                    <img
                      src={badge.src}
                      alt={badge.alt}
                      loading="lazy"
                      className="h-10 sm:h-12 w-auto max-w-full object-contain filter grayscale hover:grayscale-0 transition-all opacity-90 hover:opacity-100"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Gartner Recognition (3 cols) */}
          <div className="lg:col-span-3 bg-white border border-[#CACBCD] rounded-[24px] p-8 sm:p-10 flex flex-col justify-between items-center text-center transition-all duration-300 hover:shadow-lg hover:border-[#191923]/40">
            <div className="flex flex-col items-center">
              <p className="text-sm sm:text-[15px] text-[#191923] leading-snug">
                Only work management platform to be recognized as a Leader in
              </p>
              <div className="text-5xl sm:text-6xl font-medium text-[#191923] my-4 tracking-tight">
                3
              </div>
              <p className="text-sm text-[#191923] leading-snug">
                <strong>Gartner® Magic Quadrant™</strong> reports.
              </p>
              <button
                type="button"
                onClick={onOpenModal}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#191923] hover:text-[#1B1466] group transition-colors"
              >
                <span className="underline underline-offset-4">Learn more</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Bottom Gartner Logo */}
            <div className="mt-8 pt-6 w-full flex items-center justify-center border-t border-transparent">
              <img
                src={`${baseAssetPath}6909c6b92cbac229556cbcd3_gartner-logo-black.svg`}
                alt="Gartner Logo"
                loading="lazy"
                className="h-7 w-auto object-contain"
              />
            </div>
          </div>

          {/* Card 3: Forrester Total Economic Impact (3 cols) */}
          <div className="lg:col-span-3 bg-white border border-[#CACBCD] rounded-[24px] p-8 sm:p-10 flex flex-col justify-between items-center text-center transition-all duration-300 hover:shadow-lg hover:border-[#191923]/40">
            <div className="flex flex-col items-center">
              <p className="text-sm sm:text-[15px] text-[#191923] leading-snug">
                Motorola achieved
              </p>
              <div className="text-5xl sm:text-6xl font-medium text-[#191923] my-4 tracking-tight">
                346%
              </div>
              <p className="text-sm text-[#191923] leading-snug">
                <strong>ROI</strong> according to <strong>Forrester’s Total Economic Impact™</strong> research.
              </p>
              <button
                type="button"
                onClick={onOpenModal}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#191923] hover:text-[#1B1466] group transition-colors"
              >
                <span className="underline underline-offset-4">Learn more</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Bottom Forrester Logo */}
            <div className="mt-8 pt-6 w-full flex items-center justify-center border-t border-transparent">
              <img
                src={`${baseAssetPath}6909c71959bd3f91bc37f3f6_forrester-logo.svg`}
                alt="Forrester Logo"
                loading="lazy"
                className="h-7 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
