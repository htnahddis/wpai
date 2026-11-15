export interface TestimonialItem {
  key: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface AuctorFeature {
  id: string;
  title: string;
  highlightKeyword: string;
  description: string;
  visualType: "sphere" | "document" | "prompt" | "tunnel";
}

export const HOMEPAGE_TESTIMONIALS: TestimonialItem[] = [
  {
    key: "os-doors",
    quote:
      "“Percipere showed us they were the team that we could trust. Not only are they experienced with ERP implementations, they gave us a strong foundation for continued growth.”",
    author: "Matt Woolhouse",
    role: "Finance Director",
    company: "OS Doors (PE-backed Manufacturer)",
  },
  {
    key: "rpc-energy",
    quote:
      "“Managing 80+ legal entities across Europe under an aggressive timeline left zero buffer for error. Percipere stabilized the architecture and delivered on time.”",
    author: "Michele Pietsch",
    role: "Chief Financial Officer",
    company: "Renewable Power Capital (CPPIB)",
  },
  {
    key: "travelopia",
    quote:
      "“Unifying finance across 20+ countries enabled a single chart of accounts, automated over 100,000 invoices annually, and reduced maverick spend by 80%.”",
    author: "Group Finance Leadership",
    role: "Global ERP Transformation",
    company: "Travelopia (KKR Portfolio)",
  },
  {
    key: "advanz-pharma",
    quote:
      "“Connecting our complex sales workflows into SAP Cloud ERP eliminated operational friction across 90+ countries, returning hundreds of hours back to commercial teams.”",
    author: "Commercial Operations Director",
    role: "Global IT Integration",
    company: "Advanz Pharma",
  },
];

export const TYPEWRITER_PHRASES: string[] = [
  "Modernising ERP",
  "Automating What Matters",
  "Turning Data Into Decisions",
  "SAP S/4HANA Cloud Transformations",
  "Extended Planning & Analytics (xP&A)",
  "Clean Core Implementation",
  "AI-Powered Managed Services (AMS)",
  "Business Process Optimisation",
];

export const INVESTOR_LOGOS: string[] = [
  "SAP Gold Partner",
  "SAP S/4HANA Cloud",
  "FUTUROOT Process Mining",
  "SAP Clean Core Verified",
  "ISO 27001 Certified",
  "SOC 2 Type II Audited",
  "Microsoft Cloud Partner",
  "AWS Enterprise Tier",
];

// 4-Column Visual Feature Gallery matching the uploaded Auctor reference image
export const AUCTOR_FEATURES: AuctorFeature[] = [
  {
    id: "intelligence",
    title: "Compounding intelligence on every project",
    highlightKeyword: "intelligence",
    description:
      "Every decision, artifact, and outcome makes the next implementation more repeatable and successful than the last.",
    visualType: "sphere",
  },
  {
    id: "handoffs",
    title: "Better handoffs, less rework",
    highlightKeyword: "handoffs",
    description:
      "Capture the full context of what was sold, decided, and delivered, so teams can move faster without backtracking.",
    visualType: "document",
  },
  {
    id: "deliverables",
    title: "Deliverables in minutes, not days",
    highlightKeyword: "Deliverables",
    description:
      "Percipere turns your inputs into polished, review-ready deliverables in a fraction of the time.",
    visualType: "prompt",
  },
  {
    id: "lifecycle",
    title: "One shared hub across the lifecycle",
    highlightKeyword: "shared hub",
    description:
      "From pre-sales to delivery and beyond. The entire journey is connected in one unified system.",
    visualType: "tunnel",
  },
];

export const HOMEPAGE_STATS = [
  {
    value: 100,
    suffix: "+",
    label: "ENTERPRISE CLIENTS",
    sublabel: "Global enterprises trusting Percipere for cloud ERP",
  },
  {
    value: 50,
    suffix: "+",
    label: "COUNTRIES SERVED",
    sublabel: "Active cross-border transformations worldwide",
  },
  {
    value: 275,
    suffix: "+",
    label: "CONSULTANTS & ENGINEERS",
    sublabel: "Specialists across UK, UAE, KSA, US, and India",
  },
  {
    value: 2017,
    suffix: "",
    label: "FOUNDED",
    sublabel: "SAP Gold Partner with continuous innovation delivery",
  },
];
