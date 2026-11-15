export interface PerciXpertStage {
  num: string;
  name: string;
  headline: string;
  desc: string;
  bgColor: string;
  badgeBg: string;
  visualType: "requirements" | "discovery" | "standard_fit" | "data_migration" | "integrations" | "blueprint" | "handover";
}

export const PERCIXPERT_STAGES: PerciXpertStage[] = [
  {
    num: "01",
    name: "Requirements Capture",
    headline: "Turn raw discussions into verified scope items.",
    desc: "Ingests workshop audio and transcripts into verified scope packages with zero missed requirements.",
    bgColor: "#F8EFEA", // Soft Almond Rose Pastel
    badgeBg: "#EFE3DC",
    visualType: "requirements",
  },
  {
    num: "02",
    name: "Discovery & Shadow IT",
    headline: "Surface hidden spreadsheets and custom logic early.",
    desc: "Scans legacy environments to surface offline spreadsheets and custom logic before blueprinting.",
    bgColor: "#EAF2FD", // Soft Powder Blue Pastel
    badgeBg: "#D9E8FA",
    visualType: "discovery",
  },
  {
    num: "03",
    name: "Standard ERP Fit",
    headline: "Prevent technical debt with Clean Core matching.",
    desc: "Evaluates every requirement against standard Cloud ERP best practices before writing code.",
    bgColor: "#F1EBFA", // Wisteria Lilac Pastel
    badgeBg: "#E4D9F5",
    visualType: "standard_fit",
  },
  {
    num: "04",
    name: "Automated Data Migration",
    headline: "Clean and convert legacy files with zero manual typing.",
    desc: "Automated schema mapping and validation engines convert legacy data into ERP-ready load files.",
    bgColor: "#E7F4EB", // Fresh Eucalyptus Sage Pastel
    badgeBg: "#D4EAD9",
    visualType: "data_migration",
  },
  {
    num: "05",
    name: "Integrations & APIs",
    headline: "Pre-test enterprise connectors before writing code.",
    desc: "Connects third-party apps with pre-tested contract mocks and automated interface tests.",
    bgColor: "#E5F2F7", // Crisp Glacier Aqua Pastel
    badgeBg: "#CEE7F0",
    visualType: "integrations",
  },
  {
    num: "06",
    name: "Auto Digital Blueprint",
    headline: "Generate audit-ready blueprints directly from live facts.",
    desc: "Replaces 400-page static Word docs with a living, audit-ready digital architecture blueprint.",
    bgColor: "#FBF4E6", // Warm Vanilla Champagne Pastel
    badgeBg: "#F3E8CE",
    visualType: "blueprint",
  },
  {
    num: "07",
    name: "Zero-Friction Handover",
    headline: "Hand over complete system knowledge in days, not months.",
    desc: "Searchable digital repository with test evidence and rationale for instant day-one support.",
    bgColor: "#F7EBF4", // Soft Pink Quartz Orchid Pastel
    badgeBg: "#EEDCE9",
    visualType: "handover",
  },
];

export interface ComparisonRow {
  aspect: string;
  traditional: string;
  percipere: string;
}

export const PERCIXPERT_COMPARISONS: ComparisonRow[] = [
  {
    aspect: "Scoping & Discovery",
    traditional: "6–10 weeks of manual notes and guesswork",
    percipere: "3–5 weeks with automated system blueprints",
  },
  {
    aspect: "Scope Creep",
    traditional: "Budget overruns from misunderstood requirements",
    percipere: "Prevented by matching scope to standard ERP upfront",
  },
  {
    aspect: "System Documentation",
    traditional: "Scattered notes that quickly become outdated",
    percipere: "Auto-generated, audit-ready design document",
  },
  {
    aspect: "Support Handover",
    traditional: "8–12 weeks of shadowing with lost context",
    percipere: "Seamless handover in days with full digital history",
  },
];

export const PERCIXPERT_RISKS = [
  {
    code: "RISK 01",
    title: "Missed Scope",
    color: "#00B7FF",
    desc: "Verbal requirements fail to reach developers, leading to expensive rework during testing.",
  },
  {
    code: "RISK 02",
    title: "Data Mismatches",
    color: "#FF00B7",
    desc: "Manually mapping legacy spreadsheet fields into the new ERP causes failed loads and go-live delays.",
  },
  {
    code: "RISK 03",
    title: "Lost Knowledge",
    color: "#1B1466",
    desc: "When external implementation consultants leave, your support team inherits undocumented systems.",
  },
];

export interface FeatureShowcaseItem {
  id: string;
  title: string;
  desc: string;
}

export const PERCIXPERT_SHOWCASE_ITEMS: FeatureShowcaseItem[] = [
  {
    id: "views",
    title: "Scope Traceability",
    desc: "Automated blueprints and scope matrices that eliminate implementation drift.",
  },
  {
    id: "workload",
    title: "Clean Core Fit",
    desc: "Instant validation of legacy data and Clean Core readiness before build.",
  },
  {
    id: "integrations",
    title: "Integrations",
    desc: "Unified digital twin connecting legacy systems and enterprise apps.",
  },
];
