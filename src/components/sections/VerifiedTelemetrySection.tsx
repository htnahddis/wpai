"use client";

import React from "react";
import { HOMEPAGE_STATS } from "@/data/homepage.data";
import { StatCounter } from "@/components/auctor/StatScramble";

export default function VerifiedTelemetrySection() {
  return (
    <section className="max-width py-16 sm:py-24 border-b border-[#E9E9EF]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {HOMEPAGE_STATS.map((stat, i) => (
          <div key={i} className="flex flex-col">
            <StatCounter
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              sublabel={stat.sublabel}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
