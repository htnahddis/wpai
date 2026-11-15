"use client";

import React from "react";

export default function ScopeTraceabilityVisual() {
  return (
    <div className="relative w-full h-56 sm:h-64 flex items-center justify-center select-none">
      {/* Soft Blue/Cyan Circular Glow Backdrop */}
      <div className="w-44 sm:w-48 h-44 sm:h-48 rounded-full bg-gradient-to-tr from-[#00B7FF]/15 to-[#1B1466]/5 absolute -z-0" />

      {/* Back Layered Window: Sprint Timeline */}
      <div className="absolute top-2 right-4 sm:right-6 w-[200px] sm:w-[220px] bg-[#151620] text-white rounded-xl p-3 shadow-lg border border-[#2B2C3B] text-[10px] z-10 opacity-95 transform rotate-2">
        <div className="flex items-center justify-between pb-2 border-b border-white/10 text-white/70">
          <span className="font-mono text-[9px]">S/4HANA Prepare Phase</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#00B7FF] animate-pulse" />
        </div>
        <div className="space-y-1.5 pt-2">
          <div className="flex items-center justify-between">
            <span className="text-white/80">Scope Discovery</span>
            <span className="w-16 h-2 bg-[#00B7FF] rounded-full" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-white/80">Standard Fit</span>
            <span className="w-20 h-2 bg-[#FF00B7] rounded-full" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-white/80">Clean Core CDS</span>
            <span className="w-12 h-2 bg-[#1B1466] border border-[#00B7FF] rounded-full" />
          </div>
        </div>
      </div>

      {/* Front Layered Window: Scope Pipeline Table (Matching Monday Reference) */}
      <div className="absolute bottom-2 left-3 sm:left-6 w-[220px] sm:w-[240px] bg-white rounded-xl p-3 shadow-xl border border-[#E9E9EF] text-[10px] z-20">
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#F0F0F5]">
          <span className="font-medium text-[#191923] text-[11px]">Scope Pipeline</span>
          <span className="text-[9px] text-[#777783] font-mono">100% Tracked</span>
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center justify-between p-1 rounded hover:bg-[#F8F8FA]">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#00B7FF]" />
              <span className="text-[#191923] font-medium text-[10px]">Stock Transport</span>
            </div>
            <span className="px-2 py-0.5 rounded text-[9px] font-medium bg-[#00B7FF]/10 text-[#00B7FF]">
              Standard
            </span>
          </div>

          <div className="flex items-center justify-between p-1 rounded hover:bg-[#F8F8FA]">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#1B1466]" />
              <span className="text-[#191923] font-medium text-[10px]">EDI 856 ASN</span>
            </div>
            <span className="px-2 py-0.5 rounded text-[9px] font-medium bg-[#1B1466]/10 text-[#1B1466]">
              Verified
            </span>
          </div>

          <div className="flex items-center justify-between p-1 rounded hover:bg-[#F8F8FA]">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#FF00B7]" />
              <span className="text-[#191923] font-medium text-[10px]">Legacy Z-Table</span>
            </div>
            <span className="px-2 py-0.5 rounded text-[9px] font-medium bg-[#FF00B7]/10 text-[#FF00B7]">
              Clean Core
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
