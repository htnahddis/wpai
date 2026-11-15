export const PERCIHUB_AGENTS = [
  {
    name: "PR to PO Agent",
    department: "Procurement",
    desc: "Validates supplier contracts and auto-generates SAP Purchase Orders.",
    output: "Zero manual PO data entry",
  },
  {
    name: "Quality Inspection Agent",
    department: "Manufacturing",
    desc: "Compares lab measurements against specifications to post accept or reject decisions.",
    output: "Instant batch clearance",
  },
  {
    name: "Bank Reconciliation Agent",
    department: "Finance",
    desc: "Matches daily bank statements against invoices and posts variances automatically.",
    output: "95%+ touchless clearing",
  },
];

export const PERCIHUB_LAYERS = [
  {
    code: "LAYER 01",
    title: "Live SAP Data",
    color: "#1B1466",
    desc: "Connects directly to your enterprise system, respecting existing user roles, authorizations, and validation rules.",
  },
  {
    code: "LAYER 02",
    title: "Execution Agents",
    color: "#00B7FF",
    desc: "Task-specific agents follow strict criteria to evaluate documents, match records, and post transactions.",
  },
  {
    code: "LAYER 03",
    title: "Business Rules",
    color: "#FF00B7",
    desc: "Enriched with your company's governance policies so every automated action strictly adheres to compliance.",
  },
];

export const PERCIHUB_INDUSTRIES = [
  {
    title: "Manufacturing",
    desc: "Batch traceability, lab measurement checks, and automated quality clearance in SAP.",
  },
  {
    title: "Engineering & EPC",
    desc: "Subcontractor duplicate invoice detection and milestone cash-flow forecasting.",
  },
  {
    title: "Supply Chain",
    desc: "Demand forecasting, shelf-life monitoring for perishable goods, and order grouping.",
  },
];
