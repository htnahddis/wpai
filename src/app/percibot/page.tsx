import React from "react";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Percibot : Enterprise Dashboards, Live Insights & Reporting | Percipere",
  description:
    "Turn SAP work data into real-time clarity. Continuous telemetry, automated reporting, and intelligent operational insights for enterprise SAP landscapes.",
};

const PercibotClonedView = dynamic(
  () => import("@/components/views/PerciSuiteClonedView"),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-screen w-full bg-white flex items-center justify-center">
        <div className="w-10 h-10 border-3 border-[#9475D8] border-t-transparent rounded-full animate-spin" />
      </div>
    ),
  }
);

export default function PercibotPage() {
  return (
    <div
      className="bg-white text-[#191923] selection:bg-[#F0EFFF] selection:text-[#1B1466]"
      suppressHydrationWarning
    >
      <PercibotClonedView />
    </div>
  );
}
