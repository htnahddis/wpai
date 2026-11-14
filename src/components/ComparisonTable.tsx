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
      <div className="w-full bg-white rounded-2xl border border-[#EAEAEA] shadow-subtle overflow-hidden">
        {title && (
            <div className="px-6 py-4 bg-[#F8F8FA] border-b border-[#EAEAEA]">
              <h4 className="font-serif text-lg text-[#191923] font-normal">{title}</h4>
            </div>
      )}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                      <tr className="border-b border-[#EAEAEA] bg-[#FAFAFA] text-xs font-mono uppercase text-[#64676D]">
                        <th className="py-3.5 px-6 w-1/3">Phase / Metric</th>
                        <th className="py-3.5 px-6 w-1/3 text-[#8A8D93]">{traditionalHeader}</th>
                        <th className="py-3.5 px-6 w-1/3 text-[#191923] font-semibold bg-[#F8F8FA] border-l border-[#EAEAEA]">
                          {percipereHeader}
                        </th>
                      </tr>
                    </thead>
                      <tbody className="divide-y divide-[#EAEAEA]">
                        {rows.map((row, idx) => (
                              <tr key={idx} className="hover:bg-[#FDFDFD] transition-colors">
                                <td className="py-4 px-6 font-medium text-[#191923]">
                                  {row.aspect}
                                </td>
                                  <td className="py-4 px-6 text-[#64676D] text-xs leading-relaxed">
                                    {row.traditional}
                                  </td>
                                    <td className="py-4 px-6 text-[#191923] bg-[#F8F8FA]/60 border-l border-[#EAEAEA] text-xs font-medium leading-relaxed">
                                      <div className="flex items-start gap-2">
                                        <Check className="w-3.5 h-3.5 text-[#10B981] mt-0.5 shrink-0" />
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
