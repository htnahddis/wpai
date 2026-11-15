export interface AccelerateAgentCard {
  id: string;
  agentName: string;
  badge: string;
  iconType: "shield" | "cpu" | "bot";
  heading: string;
  description: string;
  features: string[];
  metric: string;
  linkText: string;
  linkHref: string;
}

export const ACCELERATE_AGENTS: AccelerateAgentCard[] = [
  {
    id: "scope-guard",
    agentName: "Risk Detection & Scope Guard",
    badge: "DELIVERY GOVERNANCE",
    iconType: "shield",
    heading: "Proactive Scope & Variance Detection",
    description:
      "Scans project discussions and SOW baselines to flag potential roadblocks and custom code deviations before they impact delivery schedules.",
    features: [
      "Continuous SOW baseline variance monitoring",
      "Automated Clean Core audit before sprint code merges",
      "Cross-project dependency & budget impact scoring",
    ],
    metric: "0.0% Unmonitored Scope Drift",
    linkText: "Explore Governance Guardrails",
    linkHref: "/percixpert",
  },
  {
    id: "blueprint-engine",
    agentName: "Blueprint Generation Engine",
    badge: "ARCHITECTURE AGENT",
    iconType: "cpu",
    heading: "Instant Audit-Ready Blueprints",
    description:
      "Transforms discovery transcripts into complete, audit-ready Solution Design Documents (SDD), LTMC schemas, and Jira stories in seconds.",
    features: [
      "4.2s average functional spec derivation",
      "Direct mapping to standard SAP S/4HANA best-practice scope items",
      "Automated LTMC migration templates with zero manual typing",
    ],
    metric: "4.2s Functional Blueprint Generation",
    linkText: "See Blueprint Automation",
    linkHref: "/percixpert",
  },
  {
    id: "ams-intelligence",
    agentName: "Diagnostic AMS & Touchless Support",
    badge: "SUPPORT SUITE",
    iconType: "bot",
    heading: "Root-Cause Intelligence for SAP Operations",
    description:
      "Resolves routine user questions in seconds and hands complex bugs to support engineers with root-cause traces, affected tables, and fix suggestions attached.",
    features: [
      "80% routine L1/L2 inquiry deflection rate",
      "Root-cause diagnostic logs with affected SAP tables identified",
      "FUTUROOT process mining layer for continuous user adoption tracking",
    ],
    metric: "80% Routine Ticket Deflection",
    linkText: "Discover PerciServe Support",
    linkHref: "/perciserve-support-suite",
  },
];
