export interface AgentItem {
  id: string;
  name: string;
  category: "all" | "pmo" | "sales" | "it" | "hr" | "finance" | "marketing" | "custom";
  categoryLabel: string;
  codeBadge: string;
  badge: string;
  tagline: string;
  description: string;
  iconType: "shield" | "trending" | "terminal" | "search" | "layers" | "globe" | "calendar" | "cpu" | "sparkles" | "workflow";
  accentColor: string;
  sampleTrigger: string;
  sampleAction: string;
  capabilities: string[];
  executionMetrics: string;
  targetHref: string;
}

export const AGENT_STUDIO_CATALOG: AgentItem[] = [
  {
    id: "risk-analyzer",
    name: "Scope & Risk Analyzer",
    category: "pmo",
    categoryLabel: "PMO & Delivery",
    codeBadge: "PMO-01",
    badge: "Core Delivery",
    tagline: "Detects schedule, dependency, and scope creep risks across SAP projects.",
    description:
      "Continuously monitors sprint velocity, Clean Core scope items, and cross-team dependencies in real time. Flags critical-path bottlenecks and proposes mitigation updates before milestone deadlines slip.",
    iconType: "shield",
    accentColor: "#6161FF",
    sampleTrigger: "Daily sprint burndown & Jira / SAP Activate backlog sync",
    sampleAction: "Alerts Delivery Lead, re-estimates delta, drafts mitigation update",
    capabilities: [
      "Cross-board dependency mapping",
      "Predictive milestone delay forecasting",
      "Resource allocation balancing",
      "Automated Clean Core scope verification",
    ],
    executionMetrics: "99.4% risk prediction accuracy",
    targetHref: "/percixpert",
  },
  {
    id: "clean-core-auditor",
    name: "Clean Core & Code Auditor",
    category: "it",
    categoryLabel: "IT & Architecture",
    codeBadge: "ARC-02",
    badge: "Architecture",
    tagline: "Verifies custom ABAP and extensions against SAP Clean Core guidelines.",
    description:
      "Scans legacy Z-tables, user exits, and custom code across ECC and S/4HANA. Automatically categorizes objects into standard fit, side-by-side BTP extensions, or deprecation targets.",
    iconType: "terminal",
    accentColor: "#00B7FF",
    sampleTrigger: "New code commit or transport request created in SAP BTP / Git",
    sampleAction: "Runs static Clean Core analysis & flags unreleased standard APIs in <2s",
    capabilities: [
      "Z-code to BTP side-by-side mapping",
      "Standard SAP API compatibility check",
      "Technical debt quantification",
      "Automated migration refactoring advice",
    ],
    executionMetrics: "0 Technical debt surprises",
    targetHref: "/percixpert",
  },
  {
    id: "lead-scorer",
    name: "Enterprise Lead Scorer",
    category: "sales",
    categoryLabel: "Sales & RevOps",
    codeBadge: "REV-03",
    badge: "RevOps",
    tagline: "Scores enterprise leads using ERP version, fit, and intent signals.",
    description:
      "Evaluates inbound enterprise demo requests against SAP ERP architecture profiles. Identifies ECC legacy version, revenue tier, and industry requirements to assign qualified accounts directly to practice leads.",
    iconType: "trending",
    accentColor: "#00CA72",
    sampleTrigger: "New enterprise transformation demo inquiry submitted",
    sampleAction: "Enriches company revenue/ERP version & routes to Strategic Lead in <2s",
    capabilities: [
      "Real-time firmographic & ERP profiling",
      "S/4HANA migration readiness scoring",
      "Territory & practice routing rules",
      "Automated architecture briefing generation",
    ],
    executionMetrics: "3.8x faster executive response",
    targetHref: "/percixpert",
  },
  {
    id: "ticket-assignment",
    name: "SAP Incident & Ticket Router",
    category: "it",
    categoryLabel: "IT & AMS Support",
    codeBadge: "AMS-04",
    badge: "Support Suite",
    tagline: "Detects incident intent, module urgency, and routes to certified leads.",
    description:
      "Parses incident descriptions across ServiceNow, Jira, and SAP Solution Manager. Extracts error codes, matches against historical resolution databases, and attaches verified runbooks automatically.",
    iconType: "cpu",
    accentColor: "#FF00B7",
    sampleTrigger: "Inbound P1-P4 incident created or system alert triggered",
    sampleAction: "Classifies module (FI/CO/SD/MM), attaches runbook, pages on-call engineer",
    capabilities: [
      "Natural language error stack analysis",
      "SAP module classification (SD, MM, FI, PP)",
      "SLA breach prevention alerting",
      "Historical ticket solution matching",
    ],
    executionMetrics: "84% reduction in first-response time",
    targetHref: "/perciserve-support-suite",
  },
  {
    id: "vendor-researcher",
    name: "Vendor & Security Auditor",
    category: "finance",
    categoryLabel: "Finance & Legal",
    codeBadge: "GRC-05",
    badge: "Compliance",
    tagline: "Audits vendor quotes, SOC2 reports, and compliance certifications.",
    description:
      "Performs automated diligence on prospective software and implementation vendors. Extracts SOC2 Type II compliance, GDPR readiness, pricing structures, and contract terms into audit-ready executive summaries.",
    iconType: "search",
    accentColor: "#A25DDF",
    sampleTrigger: "New vendor evaluation item added to procurement stream",
    sampleAction: "Compiles SOC2 report, checks certifications, generates 1-page dossier",
    capabilities: [
      "Security compliance verification",
      "Contract clause extraction",
      "Competitor pricing benchmarking",
      "Sanctions & risk screening",
    ],
    executionMetrics: "12 hours saved per vendor audit",
    targetHref: "/percihub-business-suite",
  },
  {
    id: "data-reconciler",
    name: "LTMC Migration Data Reconciler",
    category: "pmo",
    categoryLabel: "Data & Migration",
    codeBadge: "DAT-06",
    badge: "Automation",
    tagline: "Validates legacy ERP records and eliminates migration reconciliation drift.",
    description:
      "Pre-validates master data (customer, vendor, GL accounts) before ingestion into SAP Migration Cockpit. Identifies format deltas, duplicate records, and missing mandatory fields automatically.",
    iconType: "layers",
    accentColor: "#FF9900",
    sampleTrigger: "Data extraction completed from legacy ECC 6.0 / Oracle database",
    sampleAction: "Runs 120+ validation rules and outputs Clean Core mapping matrix in <30s",
    capabilities: [
      "Pre-migration data validation",
      "Duplicate record detection",
      "Missing mandatory field extraction",
      "Direct LTMC schema mapping",
    ],
    executionMetrics: "0 Reconciliation errors during cutover",
    targetHref: "/percixpert",
  },
  {
    id: "translator-agent",
    name: "Multi-Locale Enterprise Translator",
    category: "marketing",
    categoryLabel: "Marketing & Rollout",
    codeBadge: "TRN-07",
    badge: "Global Rollout",
    tagline: "Translates training manuals, SDDs, and documentation across 40+ languages.",
    description:
      "Translates technical blueprints, user training manuals, and change management briefs across 40+ languages. Preserves ERP domain terminology, SAP transaction codes, and brand guidelines with precision.",
    iconType: "globe",
    accentColor: "#0086C0",
    sampleTrigger: "New blueprint or user training manual published in English",
    sampleAction: "Translates into regional locales and generates localized PDF training decks",
    capabilities: [
      "SAP domain terminology preservation",
      "Multi-locale parallel translation",
      "Document format & diagram layout retention",
      "Regulatory disclaimer adaptation",
    ],
    executionMetrics: "40+ enterprise languages supported",
    targetHref: "/percihub-business-suite",
  },
  {
    id: "meeting-summarizer",
    name: "Executive Meeting & SDD Synthesizer",
    category: "pmo",
    categoryLabel: "Discovery & Arch",
    codeBadge: "SYN-08",
    badge: "Productivity",
    tagline: "Transcribes discovery workshops into structured blueprints and backlog tasks.",
    description:
      "Captures dialogue from customer scoping workshops. Transcribes audio, extracts functional requirements, flags non-standard customizations, and generates audit-ready Solution Design Documents.",
    iconType: "calendar",
    accentColor: "#00C875",
    sampleTrigger: "Scoping session or architecture workshop recording finished",
    sampleAction: "Generates Solution Design Document (SDD) & Jira epics in <60 seconds",
    capabilities: [
      "Workshop audio requirement extraction",
      "FIT-GAP matrix synthesis",
      "Automatic Jira epic & story generation",
      "Standard SAP scope item cross-referencing",
    ],
    executionMetrics: "100% requirement capture velocity",
    targetHref: "/percixpert",
  },
  {
    id: "sentiment-detector",
    name: "Stakeholder Sentiment Detector",
    category: "sales",
    categoryLabel: "RevOps & Retention",
    codeBadge: "RET-09",
    badge: "Stakeholder CS",
    tagline: "Monitors client communication threads to detect adoption friction early.",
    description:
      "Continuously analyzes stakeholder feedback and change management sentiment across enterprise communication channels. Detects implementation friction early to protect project timelines.",
    iconType: "sparkles",
    accentColor: "#E2445C",
    sampleTrigger: "Steering committee feedback or ticket notes indicate dissatisfaction",
    sampleAction: "Flags delivery lead with root-cause summary and recovery recommendations",
    capabilities: [
      "Real-time adoption sentiment tracking",
      "Scope change dispute early-warning",
      "Executive escalation dispatch",
      "Change management impact scoring",
    ],
    executionMetrics: "35% reduction in adoption churn",
    targetHref: "/perciserve-support-suite",
  },
  {
    id: "custom-agent-builder",
    name: "Custom Enterprise Agent Studio",
    category: "custom",
    categoryLabel: "Custom Workforce",
    codeBadge: "DEV-10",
    badge: "Unlimited",
    tagline: "Build unique autonomous agents tailored to your exact ERP business logic.",
    description:
      "Combine natural language instructions, connected SAP BTP APIs, proprietary document repositories, and conditional human guardrails to deploy specialists for any enterprise workflow.",
    iconType: "workflow",
    accentColor: "#1B1466",
    sampleTrigger: "Custom Webhook, SAP BTP event, scheduled cron, or database alert",
    sampleAction: "Multi-step reasoning across internal systems with human approval",
    capabilities: [
      "Prompt-based persona and logic design",
      "Full SAP OData, RFC, and REST connectors",
      "Human-in-the-loop approval checkpoints",
      "Multi-model support (Claude, GPT, Gemini)",
    ],
    executionMetrics: "Deployed in under 5 minutes",
    targetHref: "/sap-business-ai",
  },
];

export interface BuilderPreset {
  id: string;
  tabLabel: string;
  name: string;
  role: string;
  promptDescription: string;
  dataSources: string[];
  guardrails: string[];
  actions: string[];
  simulation: {
    triggerEvent: string;
    steps: { text: string; done: boolean }[];
    outputTitle: string;
    outputBody: string;
  };
}

export const BUILDER_PRESETS: BuilderPreset[] = [
  {
    id: "risk-triage",
    tabLabel: "Scope & Risk Specialist",
    name: "Enterprise Delivery Risk Specialist",
    role: "Senior PMO Delivery Specialist",
    promptDescription:
      "Scan all sprint boards daily. If a critical-path task slips by >48 hours or an interface dependency has no assigned owner, flag the milestone risk, recalculate project completion, and draft a Slack update for the Delivery Lead.",
    dataSources: ["SAP S/4HANA Prepare Board", "Jira Sprints", "Resource Capacity Matrix"],
    guardrails: [
      "Require human approval before rescheduling milestones > 5 days",
      "Only notify assigned leads between 8am-6pm recipient local time",
    ],
    actions: [
      "Update Risk Status column to 'Critical'",
      "Generate impact summary in task comments",
      "Send Slack ping with proposed mitigation",
    ],
    simulation: {
      triggerEvent: "Sprint task 'EDI 856 ASN Mapping' delayed by 3 days",
      steps: [
        { text: "Detected dependency block on Logistics Interface", done: true },
        { text: "Cross-referenced developer workload in SAP BTP", done: true },
        { text: "Identified spare capacity with Senior Architect Kunal G.", done: true },
        { text: "Prepared re-allocation recommendation for Delivery Lead", done: true },
      ],
      outputTitle: "Milestone Risk Mitigation Prepared",
      outputBody:
        "EDI 856 ASN mapping delay would impact Sprint 04 Go-Live by 72h. Recommended action: Reassign interface validation to Kunal G. to absorb backlog delta without budget overrun.",
    },
  },
  {
    id: "lead-qualifier",
    tabLabel: "Enterprise Lead Scorer",
    name: "Strategic Inbound Lead Qualifier",
    role: "Enterprise Solution Analyst",
    promptDescription:
      "When a new contact submits an ERP transformation demo request, look up their company profile. If employee count > 500 and tech stack includes SAP ECC or S/4HANA on-premise, score lead 95/100 and route to the Strategic Enterprise Practice Lead.",
    dataSources: ["Inbound Website Form", "CRM Enterprise Accounts", "Architecture Profile Database"],
    guardrails: [
      "Verify email deliverability before assigning",
      "Never email prospect directly without Practice Lead manual review",
    ],
    actions: [
      "Calculate Fit Score (0-100)",
      "Enrich record with revenue, headquarters, and ERP version",
      "Assign lead to designated territory Practice Lead",
    ],
    simulation: {
      triggerEvent: "Form submission: VP Supply Chain at Global Manufacturing Corp",
      steps: [
        { text: "Company matched to $2.4B Global Enterprise", done: true },
        { text: "Detected current ERP: SAP ECC 6.0 EHP8 on-premise", done: true },
        { text: "Assigned Fit Score: 98/100 (Tier 1 Strategic Opportunity)", done: true },
        { text: "Briefing document attached to account record for Practice Lead", done: true },
      ],
      outputTitle: "Tier 1 Enterprise Lead Qualified",
      outputBody:
        "High-priority SAP S/4HANA migration opportunity ($2.4B rev, 6,200 employees). Routing to Strategic Accounts lead with pre-built Clean Core readiness briefing.",
    },
  },
  {
    id: "it-incident",
    tabLabel: "SAP Incident Router",
    name: "Autonomous SAP Incident Responder",
    role: "Level-2 SAP Operations Lead",
    promptDescription:
      "Analyze inbound incident logs from ServiceNow and Slack #alerts. Classify outage scope, check if it matches a known SAP BTP or database issue, attach troubleshooting runbook, and page the primary on-call engineer.",
    dataSources: ["ServiceNow Incident Stream", "SAP Alert Manager", "Internal Runbook Wiki"],
    guardrails: [
      "Do not execute system reboots without manager approval",
      "Log full trace to central compliance audit board",
    ],
    actions: [
      "Categorize incident priority (P1 through P4)",
      "Attach relevant runbook URL to ticket",
      "Initiate incident bridge if customer-facing",
    ],
    simulation: {
      triggerEvent: "Alert: OData connection timeout on SAP S/4HANA Gateway",
      steps: [
        { text: "Analyzed error signature: 504 Gateway Timeout on RFC 104", done: true },
        { text: "Correlated with scheduled certificate renewal event", done: true },
        { text: "Attached Runbook 'KB-402: SSL Certificate Refresh for BTP'", done: true },
        { text: "Dispatched alert to Infrastructure On-Call via PagerDuty", done: true },
      ],
      outputTitle: "Incident P2 Triaged & Runbook Dispatched",
      outputBody:
        "Identified transient SSL handshake error on RFC 104. Attached resolution protocol KB-402 and alerted on-call engineer within 1.2s of incident occurrence.",
    },
  },
];

export const AGENT_STUDIO_FAQS = [
  {
    question: "Do I need to know how to code to create an AI agent in Agent Studio?",
    answer:
      "No coding is required. You can build, configure, and launch custom enterprise agents entirely using plain English. Simply describe what you want the agent to accomplish, select which SAP tables, Jira boards, or databases it should interact with, and set your desired safety guardrails. Advanced developers can also hook into REST APIs, SAP OData, and custom Webhooks whenever needed.",
  },
  {
    question: "What is the difference between static automations and AI Agents?",
    answer:
      "Standard automations follow rigid 'if this, then that' recipes that break when edge cases arise. In contrast, Percipere AI Agents possess contextual reasoning. They can interpret messy natural language, extract unstructured data from scoping transcripts and vendor PDFs, synthesize multi-step decisions, and ask for human guidance only when confidence is low.",
  },
  {
    question: "Can Agent Studio agents connect to external tools like SAP, Jira, and Slack?",
    answer:
      "Yes. Agents are deeply integrated into your entire operational stack. They can read and write data across SAP S/4HANA, Jira, ServiceNow, Salesforce, Slack, Microsoft Teams, and any custom enterprise API via secure OAuth and MCP (Model Context Protocol).",
  },
  {
    question: "Which underlying AI models power Agent Studio?",
    answer:
      "Agent Studio operates on an enterprise-grade multi-model foundation. You can select from state-of-the-art models including Anthropic Claude 3.5 Sonnet, OpenAI GPT-4o, Google Gemini 1.5 Pro, and specialized open-source models deployed inside dedicated private tenant enclaves.",
  },
  {
    question: "How do human-in-the-loop approvals and permissions work?",
    answer:
      "You have absolute governance over agent actions. Critical actions—such as sending client-facing emails, updating financial ledgers, or changing project milestone deadlines—can be gated behind human approval queues. Furthermore, agents inherit strict role-based access control (RBAC), meaning an agent can never see or modify data that its owner is not authorized to access.",
  },
  {
    question: "Is customer data used to train public AI models?",
    answer:
      "Never. All data processed by Agent Studio is encrypted in transit and at rest, processed within isolated enterprise tenants, and governed by strict zero-retention agreements. Your private business logic, SAP structures, and customer records are never used to train public foundation models.",
  },
];
