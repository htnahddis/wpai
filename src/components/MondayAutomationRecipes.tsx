"use client";

import React from "react";
import { Zap, Check, ArrowRight } from "lucide-react";
import Link from "next/link";

interface Recipe {
  id: string;
  triggerCategory: string;
  trigger: string;
  action: string;
  metric: string;
  system: string;
}

const AUTOMATION_RECIPES: Recipe[] = [
  {
    id: "r1",
    triggerCategory: "Discovery to Spec",
    trigger: "When workshop audio is recorded in PerciXpert",
    action: "synthesize SDD functional specs and verify Clean Core compliance in 4.2 seconds.",
    metric: "90% Faster Specs",
    system: "PerciXpert &rarr; Jira & Word SDD",
  },
  {
    id: "r2",
    triggerCategory: "Support & Deflection",
    trigger: "When an end-user submits a routine L1 SAP query",
    action: "PerciDesk resolves it instantly from company SOPs and passes context if escalated.",
    metric: "80% L1 Deflection",
    system: "PerciDesk &rarr; ServiceNow / AMS",
  },
  {
    id: "r3",
    triggerCategory: "Accounts Payable",
    trigger: "When supplier invoice lines match PO and Goods Receipt",
    action: "automatically post settlement journals into SAP S/4HANA with zero manual touch.",
    metric: "98.4% Touchless Match",
    system: "PerciHub &rarr; S/4HANA Finance",
  },
  {
    id: "r4",
    triggerCategory: "Planning & Rolling Forecast",
    trigger: "When period-end actual balances close across 80+ entities",
    action: "update continuous 52-week rolling plans in SAC with automated FX translations.",
    metric: "Zero Manual Rework",
    system: "xP&A &rarr; Analytics Cloud",
  },
];

export default function MondayAutomationRecipes() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 border-t border-[#E9E9EF]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header: No eyebrows, Magenta keyword */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl font-sans font-normal text-[#191923] tracking-tight leading-tight">
            Enterprise <span className="text-[#FF00B7]">automation</span> recipes
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-[#777783]">
            Natural-language trigger and action pairings that automate routine ERP execution.
          </p>
        </div>

        {/* 4 Clean Material Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {AUTOMATION_RECIPES.map((recipe) => (
            <div
              key={recipe.id}
              className="p-5 sm:p-6 rounded-xl border border-[#E9E9EF] bg-[#F8F8FA] shadow-card hover:border-[#1B1466]/40 hover:shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-[#777783] mb-3">
                  <span>{recipe.triggerCategory}</span>
                  <span className="text-[#0088CC] bg-[#E6F8FF] px-2 py-0.5 rounded border border-[#00B7FF]/30 font-medium">
                    {recipe.metric}
                  </span>
                </div>

                <div className="text-sm sm:text-base text-[#191923] leading-relaxed">
                  <span className="font-medium text-[#1B1466]">When </span>
                  <span className="text-[#191923]">{recipe.trigger}, </span>
                  <span className="font-medium text-[#00B7FF]">then </span>
                  <span className="text-[#777783]">{recipe.action}</span>
                </div>
              </div>

              <div className="mt-4 pt-3.5 border-t border-[#E9E9EF] flex items-center justify-between text-[11px] font-mono text-[#777783]">
                <span dangerouslySetInnerHTML={{ __html: recipe.system }} />
                <span className="text-[#1B1466] font-medium flex items-center gap-1">
                  <span>Active Recipe</span>
                  <Check className="w-3 h-3 text-[#FF00B7]" />
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/percixpert"
            className="button-primary text-xs px-5 py-2.5 inline-flex items-center gap-1.5 bg-[#1B1466] hover:bg-[#140F4D] text-white rounded-full font-medium"
          >
            <span>Explore All Automation Recipes</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
