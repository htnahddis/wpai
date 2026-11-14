"use client";

import React from "react";
import { Check, X, ArrowRight } from "lucide-react";

export interface ComparisonRow {
  aspect: string;
  traditional: string;
  percipere: string;
  traditionalBad?: boolean;
  percipereHighlight?: boolean;
}

interface ComparisonTableProps {
  title?: string;
  traditionalHeader?: string;
  percipereHeader?: string;
  rows: ComparisonRow[];
}

export default function ComparisonTable({
  title,
  traditionalHeader = "Traditional Model",
  percipereHeader = "With Percipere",
  rows,
}: ComparisonTableProps) {
  return (
    <div className="w-full bg-white rounded-2xl border border-[#E8E8E8] shadow-card overflow-hidden">
      {title && (
        <div className="px-6 py-4 bg-[#F8F8F8] border-b border-[#E8E8E8]">
          <h4 className="font-serif text-lg text-[#292A2E] font-medium">{title}</h4>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm border-collapse">
          <thead>
            <tr className="border-b border-[#E8E8E8] bg-[#FAFAFA] text-xs font-semibold uppercase tracking-wider text-[#64676D]">
              <th className="py-4 px-6 w-1/3">Phase / Metric</th>
              <th className="py-4 px-6 w-1/3 text-[#8A8D93]">{traditionalHeader}</th>
              <th className="py-4 px-6 w-1/3 text-[#0D5CE5] bg-blue-50/40 border-l border-blue-100/60">
                {percipereHeader}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E8E8E8]">
            {rows.map((row, idx) => (
              <tr key={idx} className="hover:bg-[#FBFBFB] transition-colors">
                <td className="py-4 px-6 font-medium text-[#292A2E]">
                  {row.aspect}
                </td>
                <td className="py-4 px-6 text-[#64676D]">
                  <div className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5 shrink-0 text-xs">✕</span>
                    <span>{row.traditional}</span>
                  </div>
                </td>
                <td className="py-4 px-6 text-[#292A2E] bg-blue-50/20 border-l border-blue-100/60 font-medium">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#0D5CE5] mt-0.5 shrink-0" />
                    <span>{row.percipere}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
