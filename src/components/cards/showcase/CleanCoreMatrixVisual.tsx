"use client";

import React from "react";

export default function CleanCoreMatrixVisual() {
  const rows = [
    { label: "SD Pricing", dots: ["#00B7FF", "#00B7FF", "#1B1466", "#00B7FF"] },
    { label: "MM Master", dots: ["#FF00B7", "#00B7FF", "#00B7FF", "#1B1466"] },
    { label: "FI Ledger", dots: ["#00B7FF", "#1B1466", "#00B7FF", "#00B7FF"] },
    { label: "PP Orders", dots: ["#00B7FF", "#FF00B7", "#00B7FF", "#1B1466"] },
  ];

  return (
    <div className="relative w-full h-56 sm:h-64 flex items-center justify-center select-none">
      {/* Soft Blue/Cyan Circular Glow Backdrop */}
      <div className="w-44 sm:w-48 h-44 sm:h-48 rounded-full bg-gradient-to-tr from-[#00B7FF]/15 to-[#FF00B7]/5 absolute -z-0" />

      {/* Clean Workload / Alignment Matrix Card */}
      <div className="relative z-10 w-[240px] sm:w-[260px] bg-white rounded-xl p-3.5 shadow-xl border border-[#E9E9EF]">
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#F0F0F5]">
          <span className="font-medium text-[#191923] text-[11px]">Clean Core Matrix</span>
          <span className="text-[9px] text-[#00B7FF] font-medium">99.4% Ready</span>
        </div>

        {/* Matrix Column Headers */}
        <div className="grid grid-cols-5 text-[9px] text-[#777783] pb-1.5 font-mono">
          <span className="col-span-1">Module</span>
          <span className="text-center">Disc</span>
          <span className="text-center">Fit</span>
          <span className="text-center">Ext</span>
          <span className="text-center">Live</span>
        </div>

        {/* Matrix Rows with Dots */}
        <div className="space-y-2">
          {rows.map((row) => (
            <div key={row.label} className="grid grid-cols-5 items-center text-[10px]">
              <span className="col-span-1 text-[#191923] font-medium truncate text-[9px]">
                {row.label}
              </span>
              {row.dots.map((dotColor, idx) => (
                <div key={idx} className="flex justify-center">
                  <span
                    className="w-2.5 h-2.5 rounded-full transition-transform hover:scale-125"
                    style={{ backgroundColor: dotColor }}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
