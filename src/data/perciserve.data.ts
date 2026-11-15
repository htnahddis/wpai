export interface SupportStage {
  code: string;
  title: string;
  color: string;
  desc: string;
  benefit: string;
}

export const SUPPORT_STAGES: SupportStage[] = [
  {
    code: "STAGE 01",
    title: "Instant Self-Service",
    color: "#00B7FF",
    desc: "Employees ask questions in plain English. The assistant searches your SOPs and past tickets to give immediate answers.",
    benefit: "Resolves routine questions in seconds",
  },
  {
    code: "STAGE 02",
    title: "Technical Diagnosis",
    color: "#FF00B7",
    desc: "Complex issues escalate with complete diagnostic logs. Consultants see exactly where the error occurred and apply the fix.",
    benefit: "No blank tickets or lost context",
  },
  {
    code: "STAGE 03",
    title: "Continuous Learning",
    color: "#1B1466",
    desc: "Every resolved ticket updates the enterprise knowledge base. The next user asking the same question gets an instant resolution.",
    benefit: "Solves root causes permanently",
  },
];

export const LEARNING_LOOP_STEPS = [
  { step: "01. NEW ISSUE", text: "Novel query raised by business user", color: "#1B1466" },
  { step: "02. DIAGNOSIS", text: "Root cause found & consultant applies fix", color: "#00B7FF" },
  { step: "03. INGESTION", text: "Resolution saved to knowledge base", color: "#FF00B7" },
  { step: "04. RESOLUTION", text: "Identical queries resolved in seconds", color: "#00B7FF" },
];
