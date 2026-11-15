export interface JouleScenario {
  id: string;
  name: string;
  domain: string;
  userPrompt: string;
  jouleResponse: string;
  affectedObjects: string[];
  metrics: string;
  statusBadge: { text: string; bg: string };
}

export const JOULE_SCENARIOS: JouleScenario[] = [
  {
    id: "finance",
    name: "Finance & Treasury",
    domain: "S/4HANA Finance",
    userPrompt: "Joule, analyze Q3 European cost variance and highlight unposted supplier accruals.",
    jouleResponse:
      "Cost variance is +3.2% above baseline in Düsseldorf DC, driven by spot-rate shifts on raw aluminum. 14 vendor invoices (€164,200) are pending approval; automated journal accruals have been prepared for posting run #FI-902.",
    affectedObjects: ["Table BSEG / ACDOCA", "Cost Center 4010-EMEA", "Scope Item J58"],
    metrics: "0.8s Latency • Auto-Accrued",
    statusBadge: { text: "Standard Clean Core", bg: "bg-emerald-50 text-emerald-700 border border-emerald-200" },
  },
  {
    id: "supply-chain",
    name: "Supply Chain & Sourcing",
    domain: "S/4HANA SCM & MM",
    userPrompt: "Joule, detect potential stockout risks across UK distribution hubs for next week's promotions.",
    jouleResponse:
      "Critical stockout risk flagged for SKU #PR-4402 (OS Doors line) at Birmingham DC due to a 3-day port delay. Recommending auto-reallocation of 420 units from Manchester hub with automatic Stock Transport Order (STO) generation.",
    affectedObjects: ["Table MARC / MARD", "Plant 1010-UK", "Scope Item 18J"],
    metrics: "Instant Reallocation Plan",
    statusBadge: { text: "Autonomous Reorder", bg: "bg-blue-50 text-blue-700 border border-blue-200" },
  },
  {
    id: "commercial",
    name: "Commercial & Sales",
    domain: "Order-to-Cash (O2C)",
    userPrompt: "Joule, extract pricing conditions from incoming customer agreement PDF and validate rebate tiers.",
    jouleResponse:
      "Agreement OCR processed via SAP BTP Document Information Extraction. Identified tiered rebate structure: 4.5% above €500k annual volume. Validated against standard VK11 condition records without custom pricing exits.",
    affectedObjects: ["Table KONV / VBAK", "Pricing Procedure ZPR001", "Scope Item BD9"],
    metrics: "100% Side-by-Side BTP",
    statusBadge: { text: "BTP Microservice", bg: "bg-purple-50 text-purple-700 border border-purple-200" },
  },
  {
    id: "support-ams",
    name: "AMS Diagnostics",
    domain: "Technical Operations",
    userPrompt: "Joule, diagnose ST22 runtime dump #DBIF_RSQL_SQL_ERROR on batch settlement job.",
    jouleResponse:
      "Root cause identified: Table lock contention on BSEG during simultaneous payment run and depreciation calculation. Fix suggested: Reschedule payment run #PR-801 to off-peak slot (23:00 UTC) with parallel background work processes.",
    affectedObjects: ["Dump DBIF_RSQL_SQL_ERROR", "Job /PERCI/PAY_RUN", "Affected Table BSEG"],
    metrics: "Root Cause Logged (0.4s)",
    statusBadge: { text: "Diagnostic Resolved", bg: "bg-amber-50 text-amber-700 border border-amber-200" },
  },
];

export const ENTERPRISE_HURDLES = [
  {
    title: "Context Isolation & Data Silos",
    subtitle: "The Generic AI Blocker",
    problem:
      "Generic LLMs have zero understanding of real-time transactional context, master data dependencies, and proprietary SAP tables like ACDOCA and MARC.",
    solution:
      "Percipere grounds SAP Business AI natively in SAP BTP Vector Foundation and live Core Data Services (CDS) views, keeping intelligence real-time and context-aware.",
    badge: "GROUNDED IN SAP CDS",
  },
  {
    title: "Custom Code & Extensibility Drift",
    subtitle: "The Clean Core Blocker",
    problem:
      "Modifying core ERP tables for custom AI logic prevents smooth cloud upgrades, creates technical debt, and violates SAP Clean Core certification.",
    solution:
      "All Percipere AI agents and extensions run strictly side-by-side on SAP BTP, utilizing public released APIs and standard event streams.",
    badge: "100% SIDE-BY-SIDE BTP",
  },
  {
    title: "Data Sovereignty & Enterprise Privacy",
    subtitle: "The Governance Blocker",
    problem:
      "Public foundation models risk enterprise confidentiality, trade secrets, and non-compliance with GDPR, SOC 2, and data protection mandates.",
    solution:
      "Complete customer tenant isolation. Models run within your private VPC perimeter under ISO 27001:2022 standards. Zero customer data trains foundation models.",
    badge: "PRIVATE PERIMETER",
  },
];

export const AGENT_WORKFLOWS = [
  {
    domain: "Finance & Control",
    role: "Autonomous Cash & Accruals Agent",
    task: "Continuous bank statement reconciliation and automated FX hedging adjustments.",
    status: "Autonomous 99.4%",
    sla: "< 1s SLA",
    statusBg: "bg-emerald-50 text-emerald-700 border border-emerald-200",
  },
  {
    domain: "Procurement (P2P)",
    role: "3-Way Invoice Matching Agent",
    task: "Autonomous matching of complex multi-line supplier invoices against Purchase Orders and Goods Receipts.",
    status: "Touchless 98.2%",
    sla: "Instant Clearance",
    statusBg: "bg-blue-50 text-blue-700 border border-blue-200",
  },
  {
    domain: "Supply Chain",
    role: "Disruption & Inventory Predictive Agent",
    task: "Predicts vendor lead-time deviations and automatically recalculates safety stocks in SAP S/4HANA.",
    status: "Active SCM Monitor",
    sla: "Real-time Alerts",
    statusBg: "bg-purple-50 text-purple-700 border border-purple-200",
  },
  {
    domain: "Manufacturing",
    role: "Quality Inspection & Batch Release",
    task: "Sensor IoT telemetry analysis for automatic usage decision (UD) and non-conformance logging.",
    status: "Quality Certified",
    sla: "Continuous Sync",
    statusBg: "bg-emerald-50 text-emerald-700 border border-emerald-200",
  },
  {
    domain: "Commercial (O2C)",
    role: "Contract OCR & Dynamic Pricing Agent",
    task: "Extracts terms from customer agreements and updates standard condition records automatically.",
    status: "BTP Stream",
    sla: "1.2s Turnaround",
    statusBg: "bg-amber-50 text-amber-700 border border-amber-200",
  },
  {
    domain: "Application AMS",
    role: "Root-Cause Diagnostic Telemetry Agent",
    task: "Instantly correlates SAP ST22 runtime dumps with table lock traces and recommends engineering fixes.",
    status: "80% Deflection",
    sla: "Instant Triage",
    statusBg: "bg-blue-50 text-blue-700 border border-blue-200",
  },
];

export const TELEMETRY_METRICS = [
  {
    value: "0.8s",
    label: "Average Query Latency",
    sublabel: "Live semantic synthesis across CDS views",
    color: "#1B1466",
  },
  {
    value: "98.4%",
    label: "Touchless Accuracy",
    sublabel: "Validated against S/4HANA condition records",
    color: "#00B7FF",
  },
  {
    value: "100%",
    label: "Clean Core Compliance",
    sublabel: "Zero custom ERP modifications via BTP",
    color: "#FF00B7",
  },
  {
    value: "< 14d",
    label: "Pilot Deployment Time",
    sublabel: "From initial scoping to active copilot",
    color: "#1B1466",
  },
];
