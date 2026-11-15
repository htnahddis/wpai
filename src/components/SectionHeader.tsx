"use client";

import React from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  title,
  description,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div className={`mb-12 ${isCenter ? "text-center max-w-2xl mx-auto" : "max-w-xl"} ${className}`}>
      <h2 className="font-sans text-3xl sm:text-4xl font-normal leading-tight text-[#191923] tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-sm sm:text-base text-[#777783] font-normal leading-relaxed text-balance">
          {description}
        </p>
      )}
    </div>
  );
}
