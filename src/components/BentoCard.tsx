"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

interface BentoCardProps {
  title: string;
  category?: string;
  description: string;
  highlight?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function BentoCard({
  title,
  category,
  description,
  highlight,
  className = "",
  children,
}: BentoCardProps) {
  return (
    <div
      className={`bg-white rounded-2xl border border-[#E8E8E8] p-6 hover:border-blue-200 hover:shadow-card transition-all flex flex-col justify-between ${className}`}
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          {category && (
            <span className="text-xs font-medium text-[#1B1466] bg-[#F0EFFF] px-2.5 py-0.5 rounded-full border border-[#1B1466]/15 font-mono">
              {category}
            </span>
          )}
          {highlight && (
            <span className="text-[11px] font-mono text-[#10B981] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100/50">
              {highlight}
            </span>
          )}
        </div>
        <h4 className="font-serif text-xl font-normal text-[#292A2E] tracking-tight mb-2">
          {title}
        </h4>
        <p className="text-sm text-[#64676D] leading-relaxed mb-4">
          {description}
        </p>
      </div>

      {children && <div className="mt-2">{children}</div>}
    </div>
  );
}
