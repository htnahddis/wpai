"use client";

import React from "react";
import { Database, Layers, CheckSquare, MessageSquare, FileText, BarChart3, Cloud } from "lucide-react";

export default function IntegrationsHexVisual() {
  const HexBadge = ({
    icon,
    label,
    className = "",
    isCenter = false,
  }: {
    icon: React.ReactNode;
    label: string;
    className?: string;
    isCenter?: boolean;
  }) => (
    <div
      className={`flex flex-col items-center justify-center transition-transform hover:scale-110 cursor-pointer shadow-md border ${
        isCenter
          ? "w-14 h-14 bg-[#1B1466] border-[#1B1466] text-white z-20"
          : "w-11 h-11 bg-white border-[#E9E9EF] text-[#191923] hover:border-[#00B7FF] z-10"
      } rounded-2xl ${className}`}
      title={label}
    >
      {icon}
    </div>
  );

  return (
    <div className="relative w-full h-56 sm:h-64 flex items-center justify-center select-none">
      {/* Soft Blue/Cyan Circular Glow Backdrop */}
      <div className="w-44 sm:w-48 h-44 sm:h-48 rounded-full bg-gradient-to-tr from-[#00B7FF]/15 to-[#1B1466]/5 absolute -z-0" />

      {/* Hexagonal / Radial Cluster of Integration Badges (Matching Monday Reference) */}
      <div className="relative w-44 h-44 flex items-center justify-center">
        {/* Center: Core ERP */}
        <HexBadge
          icon={<Database className="w-6 h-6 text-[#00B7FF]" />}
          label="Core Cloud ERP"
          isCenter={true}
        />

        {/* Top */}
        <HexBadge
          icon={<Layers className="w-4 h-4 text-[#FF00B7]" />}
          label="BTP Extension Suite"
          className="absolute -top-1"
        />

        {/* Top Right */}
        <HexBadge
          icon={<CheckSquare className="w-4 h-4 text-[#00B7FF]" />}
          label="Jira / Azure DevOps"
          className="absolute top-6 right-1"
        />

        {/* Bottom Right */}
        <HexBadge
          icon={<MessageSquare className="w-4 h-4 text-[#1B1466]" />}
          label="Microsoft Teams"
          className="absolute bottom-6 right-1"
        />

        {/* Bottom */}
        <HexBadge
          icon={<FileText className="w-4 h-4 text-[#FF00B7]" />}
          label="Confluence Specs"
          className="absolute -bottom-1"
        />

        {/* Bottom Left */}
        <HexBadge
          icon={<Cloud className="w-4 h-4 text-[#00B7FF]" />}
          label="ServiceNow"
          className="absolute bottom-6 left-1"
        />

        {/* Top Left */}
        <HexBadge
          icon={<BarChart3 className="w-4 h-4 text-[#1B1466]" />}
          label="Analytics Cloud"
          className="absolute top-6 left-1"
        />
      </div>
    </div>
  );
}
