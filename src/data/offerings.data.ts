export interface ProductSuiteHighlight {
  task: string;
  lead: string;
  status: { label: string; bg: string; color: string };
  sla: string;
}

export interface ProductSuiteItem {
  id: string;
  name: string;
  category: string;
  headline: string;
  description: string;
  iconBg: string;
  iconType: "workflow" | "cpu" | "bot" | "trending" | "sparkles" | "layers";
  href: string;
  highlights: string[];
  mockBoard: {
    title: string;
    rows: ProductSuiteHighlight[];
  };
}

export const ENTERPRISE_SUITES: ProductSuiteItem[] = [
  {
    id: "percixpert",
    name: "PerciXpert",
    category: "AI IMPLEMENTATION",
    headline: "Automate SAP S/4HANA Blueprints",
    description: "Turns workshop discussions into audit-ready Solution Design Documents (SDD), verified Clean Core scope items, and backlog tasks in seconds.",
    iconBg: "bg-blue-50 text-blue-600 border border-blue-100",
    iconType: "workflow",
    href: "/percixpert",
    highlights: [
      "4.2s Automated Functional Specs (FSD/SDD)",
      "Instant Clean Core Fit-to-Standard validation",
      "Automated LTMC data migration mapping",
    ],
    mockBoard: {
      title: "Active Blueprint: MM & Finance",
      rows: [
        {
          task: "MM-104: Stock Transport Order",
          lead: "Sourabh K.",
          status: { label: "Standard", bg: "bg-emerald-50 text-emerald-700 border border-emerald-200", color: "" },
          sla: "4.2s",
        },
        {
          task: "FI-201: Intercompany Settlement",
          lead: "Kunal G.",
          status: { label: "Ready", bg: "bg-blue-50 text-blue-700 border border-blue-200", color: "" },
          sla: "5.8s",
        },
        {
          task: "SD-305: Dynamic Pricing Rules",
          lead: "Aditya P.",
          status: { label: "Side-by-Side BTP", bg: "bg-amber-50 text-amber-700 border border-amber-200", color: "" },
          sla: "3.9s",
        },
      ],
    },
  },
  {
    id: "perciserve",
    name: "PerciServe",
    category: "SUPPORT & AMS",
    headline: "Diagnostic Enterprise Support",
    description: "Combines PerciDesk for instant L1 inquiry resolution with automated L2/L3 diagnostic telemetry that attaches affected SAP tables and root causes.",
    iconBg: "bg-emerald-50 text-emerald-600 border border-emerald-100",
    iconType: "cpu",
    href: "/perciserve-support-suite",
    highlights: [
      "PerciDesk instant L1 resolution for routine queries",
      "Root-cause diagnostic engine with error logs",
      "FUTUROOT process mining layer for adoption",
    ],
    mockBoard: {
      title: "Global SAP Support Queue",
      rows: [
        {
          task: "INC-8891: Settlement Run Stalled",
          lead: "PerciDesk L1",
          status: { label: "Resolved", bg: "bg-emerald-50 text-emerald-700 border border-emerald-200", color: "" },
          sla: "0.8s",
        },
        {
          task: "INC-8894: IDoc Port Failure",
          lead: "PerciServe",
          status: { label: "Root Cause Found", bg: "bg-purple-50 text-purple-700 border border-purple-200", color: "" },
          sla: "1.4m",
        },
        {
          task: "PRB-2041: Table Lock Contention",
          lead: "AMS Ops",
          status: { label: "Patch Ready", bg: "bg-blue-50 text-blue-700 border border-blue-200", color: "" },
          sla: "Today",
        },
      ],
    },
  },
  {
    id: "percihub",
    name: "PerciHub",
    category: "BUSINESS AGENTS",
    headline: "Autonomous ERP Agents",
    description: "Context-aware AI agents executing Purchase Orders, quality inspections, and bank reconciliations directly inside standard SAP processes.",
    iconBg: "bg-purple-50 text-purple-600 border border-purple-100",
    iconType: "bot",
    href: "/percihub-business-suite",
    highlights: [
      "Autonomous 3-Way PO Matching with contract checks",
      "Autonomous SAP Bank Reconciliations with variance clearing",
      "Dynamic Quality Inspection batch clearance",
    ],
    mockBoard: {
      title: "Active Business Agent Fleet",
      rows: [
        {
          task: "PR-to-PO Match & Auto-Release (Vendor €84k)",
          lead: "Agent 01",
          status: { label: "Auto-Cleared", bg: "bg-emerald-50 text-emerald-700 border border-emerald-200", color: "" },
          sla: "Instant",
        },
        {
          task: "Bank Statement Reconciliation Run #902",
          lead: "Agent 02",
          status: { label: "99.4% Match", bg: "bg-blue-50 text-blue-700 border border-blue-200", color: "" },
          sla: "0.4s",
        },
        {
          task: "Batch Quality Decision (UD) Postings",
          lead: "Agent 03",
          status: { label: "Certified", bg: "bg-emerald-50 text-emerald-700 border border-emerald-200", color: "" },
          sla: "1.1s",
        },
      ],
    },
  },
  {
    id: "xpa-epm",
    name: "xP&A / EPM",
    category: "EXTENDED PLANNING",
    headline: "Unified Enterprise Forecasting",
    description: "Harmonize financial, sales, HR, and supply chain forecasts into one continuous rolling model on SAP Analytics Cloud.",
    iconBg: "bg-amber-50 text-amber-600 border border-amber-100",
    iconType: "trending",
    href: "/what-we-do/intelligence-enterprise-offerings/xpa-epm",
    highlights: [
      "52-Week Continuous Rolling Forecasts",
      "Automated multi-entity financial consolidation",
      "Instant executive what-if scenario simulations",
    ],
    mockBoard: {
      title: "52-Week Rolling Financial Model",
      rows: [
        {
          task: "Global Revenue & P&L Consolidation",
          lead: "Corporate Finance",
          status: { label: "Live CDS", bg: "bg-emerald-50 text-emerald-700 border border-emerald-200", color: "" },
          sla: "Real-time",
        },
        {
          task: "Working Capital & Inventory (PerciScan)",
          lead: "Supply Chain",
          status: { label: "Optimised", bg: "bg-blue-50 text-blue-700 border border-blue-200", color: "" },
          sla: "Weekly",
        },
        {
          task: "Commercial FTE & Headcount Ramp",
          lead: "Finance & HR",
          status: { label: "Approved", bg: "bg-emerald-50 text-emerald-700 border border-emerald-200", color: "" },
          sla: "Quarterly",
        },
      ],
    },
  },
  {
    id: "sap-business-ai",
    name: "SAP Business AI",
    category: "EMBEDDED AI",
    headline: "Intelligence in SAP Workflows",
    description: "Bring intelligence directly into finance, procurement, and operations using SAP Joule, SAP BTP AI Foundation, and custom LangGraph agents safely.",
    iconBg: "bg-pink-50 text-pink-600 border border-pink-100",
    iconType: "sparkles",
    href: "/sap-business-ai",
    highlights: [
      "SAP Joule Copilot extensions on SAP BTP",
      "Enterprise LangGraph agents for multi-system ERP",
      "Strict Clean Core compliance and data isolation",
    ],
    mockBoard: {
      title: "Joule & Agent Registry",
      rows: [
        {
          task: "Joule Natural Language Order Inquiries",
          lead: "Commercial Ops",
          status: { label: "Active Joule", bg: "bg-emerald-50 text-emerald-700 border border-emerald-200", color: "" },
          sla: "< 1s",
        },
        {
          task: "Contract OCR to Sales Order Creation",
          lead: "Order-to-Cash",
          status: { label: "BTP Stream", bg: "bg-blue-50 text-blue-700 border border-blue-200", color: "" },
          sla: "1.2s",
        },
        {
          task: "Disruption Lead-Time Prediction (SCM)",
          lead: "Plant Logistics",
          status: { label: "Predictive", bg: "bg-purple-50 text-purple-700 border border-purple-200", color: "" },
          sla: "Hourly",
        },
      ],
    },
  },
  {
    id: "ai-acceleration",
    name: "AI Acceleration",
    category: "STRATEGIC ROADMAP",
    headline: "Turn Enterprise Data Into Value",
    description: "Strategic roadmapping and rapid implementation of high-ROI predictive AI use cases grounded in your SAP system architecture.",
    iconBg: "bg-zinc-100 text-zinc-800 border border-zinc-200",
    iconType: "layers",
    href: "/what-we-do/intelligence-enterprise-offerings/ai-acceleration",
    highlights: [
      "30-Day Value Blueprint with prioritized use cases",
      "Enterprise data readiness and governance audit",
      "Pre-built PerciServe warehouse and estimation tools",
    ],
    mockBoard: {
      title: "AI Acceleration Roadmap",
      rows: [
        {
          task: "30-Day High-ROI Value Prioritization",
          lead: "Advisory Team",
          status: { label: "Complete", bg: "bg-emerald-50 text-emerald-700 border border-emerald-200", color: "" },
          sla: "Day 30",
        },
        {
          task: "SAP Data Foundation Audit",
          lead: "Architecture",
          status: { label: "Verified", bg: "bg-blue-50 text-blue-700 border border-blue-200", color: "" },
          sla: "Week 02",
        },
        {
          task: "PerciScan Warehouse Deployment (OS Doors)",
          lead: "Delivery Team",
          status: { label: "4-Week Roll", bg: "bg-amber-50 text-amber-700 border border-amber-200", color: "" },
          sla: "Week 04",
        },
      ],
    },
  },
];
