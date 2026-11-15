"use client";

import React from "react";
import { FileText } from "lucide-react";

export default function AuctorDocumentMock() {
  return (
    <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-[#ECECE9] p-6 flex flex-col justify-end shadow-inner group">
      {/* Document Sheet */}
      <div className="relative w-full h-[90%] bg-white rounded-t-xl p-5 shadow-lg border border-[#DFDFDC] flex flex-col justify-between group-hover:-translate-y-1 transition-transform duration-500">
        <div className="space-y-3">
          {/* Header */}
          <div className="text-center font-bold text-sm sm:text-base text-[#191923] tracking-tight">
            Scope Agreement
          </div>

          {/* Skeleton lines */}
          <div className="space-y-2 pt-1">
            <div className="h-1.5 w-full bg-[#EAEAEA] rounded-full" />
            <div className="h-1.5 w-4/5 bg-[#EAEAEA] rounded-full" />
            
            {/* Highlighted Lines (Yellow Marker Effect) */}
            <div className="relative py-0.5">
              <div className="h-2 w-full bg-[#FED855] rounded-xs shadow-2xs group-hover:bg-[#FDCB2F] transition-colors" />
              <div className="h-2 w-4/5 bg-[#FED855] rounded-xs shadow-2xs mt-1 group-hover:bg-[#FDCB2F] transition-colors" />
            </div>

            <div className="h-1.5 w-11/12 bg-[#EAEAEA] rounded-full" />
            <div className="h-1.5 w-3/4 bg-[#EAEAEA] rounded-full" />
          </div>
        </div>

        {/* Floating Mouse Cursor */}
        <div className="absolute top-[48%] right-[28%] z-20 pointer-events-none transform group-hover:translate-x-1 group-hover:translate-y-1 transition-transform">
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-black drop-shadow-md" fill="currentColor">
            <path d="M4 2l16 8-8 3-3 8-5-19z" />
          </svg>
        </div>

        {/* Floating Timeline Tag: "Discovery Call 42:21 - 54:32" */}
        <div className="relative -ml-2 -mb-1 inline-flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-lg shadow-md border border-[#E9E9EF] text-[10px] font-mono text-[#191923] w-max z-10 group-hover:shadow-lg transition-shadow">
          <span className="w-2 h-2 rounded-xs bg-[#10B981] flex items-center justify-center">
            <span className="w-1 h-1 rounded-xs bg-white" />
          </span>
          <span className="font-semibold text-zinc-900">Discovery Call</span>
          <span className="text-zinc-500">42:21 - 54:32</span>
        </div>
      </div>
    </div>
  );
}
