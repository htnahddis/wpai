"use client";

import React from "react";
import { Check } from "lucide-react";

export interface ComparisonRow {
  aspect: string;
  traditional: string;
  percipere: string;
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
    <div className="w-full bg-white rounded-2xl border border-[#E9E9EF] shadow-card overflow-hidden">
      {title && (
        <div className="px-6 py-4 bg-[#F8F8FA] border-b border-[#E9E9EF]">
          <h4 className="font-sans text-lg text-[#191923] font-medium">{title}</h4>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm border-collapse font-sans">
          <thead>
            <tr className="border-b border-[#E9E9EF] bg-[#F8F8FA] text-xs font-mono text-[#777783]">
              <th className="py-3.5 px-6 w-1/3 font-medium">Phase / Metric</th>
              <th className="py-3.5 px-6 w-1/3 text-[#777783] font-normal">{traditionalHeader}</th>
              <th className="py-3.5 px-6 w-1/3 text-[#1B1466] font-semibold bg-[#F0EFFF] border-l border-[#E9E9EF]">
                {percipereHeader}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E9E9EF]">
            {rows.map((row, idx) => (
              <tr key={idx} className="hover:bg-[#F8F8FA] transition-colors">
                <td className="py-4 px-6 font-medium text-[#191923]">
                  {row.aspect}
                </td>
                <td className="py-4 px-6 text-[#777783] text-xs leading-relaxed">
                  {row.traditional}
                </td>
                <td className="py-4 px-6 text-[#191923] bg-[#F0EFFF]/40 border-l border-[#E9E9EF] text-xs font-medium leading-relaxed">
                  <div className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00B7FF] mt-0.5 shrink-0 stroke-[2.5]" />
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
