import React from "react";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Agent Studio : Build your Enterprise Agents with AI | Percipere",
  description:
    "AI agent builder that lets you create, deploy, and manage AI agents across every department — no code required. Built for SAP and modern enterprise teams.",
};

const MondayAgentStudioClonedView = dynamic(
  () => import("@/components/views/MondayAgentStudioClonedView"),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-screen w-full bg-white flex items-center justify-center">
        <div className="w-10 h-10 border-3 border-[#6161FF] border-t-transparent rounded-full animate-spin" />
      </div>
    ),
  }
);

export default function AgentStudioPage() {
  return (
    <div
      className="bg-white text-[#191923] selection:bg-[#F0EFFF] selection:text-[#1B1466]"
      suppressHydrationWarning
    >
      <MondayAgentStudioClonedView />
    </div>
  );
}
