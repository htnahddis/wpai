export interface PerciXpertStage {
  num: string;
  name: string;
  desc: string;
}

export interface ComparisonRow {
  aspect: string;
  traditional: string;
  percipere: string;
}

export const PERCIXPERT_STAGES: PerciXpertStage[] = [
  { num: "01", name: "Requirements", desc: "Turns workshop discussions into tracked, verifiable scope items." },
  { num: "02", name: "Discovery", desc: "Surfaces undocumented legacy habits and spreadsheets early." },
  { num: "03", name: "Standard Match", desc: "Matches needs against standard SAP features to avoid custom code." },
  { num: "04", name: "Data Migration", desc: "Converts legacy ERP data into SAP-ready files with zero manual typing." },
  { num: "05", name: "Integrations", desc: "Pre-tests connections before any developer writes code." },
  { num: "06", name: "Auto Blueprint", desc: "Generates an auditable system blueprint directly from live facts." },
  { num: "07", name: "Support Handover", desc: "Hands over complete system knowledge in days instead of months." },
];

export const PERCIXPERT_COMPARISONS: ComparisonRow[] = [
  {
    aspect: "Scoping & Discovery",
    traditional: "6–10 weeks of manual notes and guesswork",
    percipere: "3–5 weeks with automated system blueprints",
  },
  {
    aspect: "Scope Creep",
    traditional: "Budget overruns from misunderstood requirements",
    percipere: "Prevented by matching scope to standard SAP upfront",
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
    desc: "Manually mapping legacy spreadsheet fields into SAP causes failed loads and go-live delays.",
  },
  {
    code: "RISK 03",
    title: "Lost Knowledge",
    color: "#1B1466",
    desc: "When external implementation consultants leave, your support team inherits undocumented systems.",
  },
];
