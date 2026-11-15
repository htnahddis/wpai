export interface ComparisonRow {
  aspect: string;
  traditional: string;
  percipere: string;
}

export const XPA_COMPARISONS: ComparisonRow[] = [
  {
    aspect: "Planning Scope",
    traditional: "Isolated in separate departmental spreadsheets",
    percipere: "Unites Finance, Sales, HR, and Supply Chain in one plan",
  },
  {
    aspect: "Forecast Cycles",
    traditional: "Static annual budgets updated quarterly",
    percipere: "Continuous 52-week rolling forecasts with real-time data",
  },
  {
    aspect: "Decision Speed",
    traditional: "Weeks spent fixing spreadsheet discrepancies",
    percipere: "Instant what-if scenario models to test business choices",
  },
  {
    aspect: "Financial Close",
    traditional: "Manual intercompany eliminations and reconciliations",
    percipere: "Automated, fully auditable multi-entity close",
  },
];

export const XPA_PACKAGES = [
  {
    code: "PACKAGE 01",
    title: "Strategic Financial & Operational Planning",
    color: "#1B1466",
    desc: "Connects financial forecasts to real-time operations, allowing quick strategy adjustments when markets shift.",
  },
  {
    code: "PACKAGE 02",
    title: "Governed Business Analytics",
    color: "#00B7FF",
    desc: "Harmonizes SAP and third-party data into unified dashboards that management can trust completely.",
  },
  {
    code: "PACKAGE 03",
    title: "Accelerated Financial Close",
    color: "#FF00B7",
    desc: "Automates intercompany eliminations and currency adjustments for a faster, audit-compliant month-end close.",
  },
  {
    code: "PACKAGE 04",
    title: "Continuous Forecasting & Scenarios",
    color: "#1B1466",
    desc: "Simulate pricing changes, cost inflation, and demand fluctuations to make confident executive decisions.",
  },
];
