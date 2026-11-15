const fs = require('fs');

let tsx = fs.readFileSync('src/components/views/MondayAgentStudioClonedView.tsx', 'utf8');

const match = tsx.match(/const PERCIPERE_AGENT_STUDIO_HTML = "([\s\S]*?)";\s*export default function/);
if (!match) {
  console.error('Could not find PERCIPERE_AGENT_STUDIO_HTML');
  process.exit(1);
}

let html = JSON.parse('"' + match[1] + '"');

// 1. DATA FOR 10 HERO AGENTS
const heroAgents = [
  {
    title: "Enterprise Lead Scorer",
    hoverH4: "Enterprise Lead Scorer",
    bullets: [
      "Scores inbound enterprise ERP inquiries using Clean Core fit, ECC version, and transformation intent",
      "Routes high-value migration opportunities to dedicated practice leads and drafts scope briefs"
    ],
    labels: ["RevOps", "Enterprise", "Sales"]
  },
  {
    title: "Clean Core Code Auditor",
    hoverH4: "Clean Core Code Auditor",
    bullets: [
      "Scans legacy ABAP code, custom tables, and user exits against modern SAP Clean Core guidelines",
      "Automatically categorizes code into standard BTP side-by-side extensions or deprecation candidates"
    ],
    labels: ["Clean Core", "Architecture", "IT"]
  },
  {
    title: "Scope & Risk Analyzer",
    hoverH4: "Scope & Risk Analyzer",
    bullets: [
      "Monitors sprint velocity, transport dependencies, and scope drift across enterprise transformations",
      "Predicts milestone delays and recommends mitigations before critical-path deadlines slip"
    ],
    labels: ["PMO", "Delivery", "Governance"]
  },
  {
    title: "Custom Enterprise Agents",
    hoverH4: "Custom Enterprise Agents",
    bullets: [
      "Build autonomous agents tailored to your proprietary ERP workflows, schemas, and governance rules",
      "Seamlessly integrate SAP BTP APIs, enterprise documents, and human-in-the-loop approvals"
    ],
    labels: ["Custom", "No-Code", "Enterprise"]
  },
  {
    title: "LTMC Data Reconciler",
    hoverH4: "LTMC Data Reconciler",
    bullets: [
      "Pre-validates master data (customer, vendor, GL) and automates SAP Migration Cockpit reconciliation",
      "Eliminates legacy-to-S/4HANA reconciliation drift and flags schema mismatches before cutover"
    ],
    labels: ["Data", "Migration", "S/4HANA"]
  },
  {
    title: "Vendor & Security Auditor",
    hoverH4: "Vendor & Security Auditor",
    bullets: [
      "Performs automated due diligence on software vendors, SOC2 Type II certifications, and compliance logs",
      "Audits SLA terms and pricing tiers against enterprise ERP benchmark contracts"
    ],
    labels: ["Finance", "Security", "Procurement"]
  },
  {
    title: "Multi-Locale Translator",
    hoverH4: "Multi-Locale Translator",
    bullets: [
      "Translates SDDs, blueprints, and training manuals into 40+ enterprise languages with 100% ERP term fidelity",
      "Preserves transaction codes, Clean Core glossaries, and localization nuances for global rollouts"
    ],
    labels: ["Global Rollout", "Enablement", "Change Mgmt"]
  },
  {
    title: "Meeting & SDD Synthesizer",
    hoverH4: "Meeting & SDD Synthesizer",
    bullets: [
      "Captures scoping workshop dialogue and synthesizes structured Software Design Documents (SDDs)",
      "Automatically generates and syncs user stories directly into your SAP Activate backlog"
    ],
    labels: ["Architecture", "Discovery", "Backlog"]
  },
  {
    title: "SAP Ticket & Incident Router",
    hoverH4: "SAP Ticket & Incident Router",
    bullets: [
      "Parses incident tickets across ServiceNow and Jira, auto-detecting SAP module urgency and error codes",
      "Routes incidents to certified module specialists while recommending historical runbook solutions"
    ],
    labels: ["AMS Support", "IT Ops", "Service"]
  },
  {
    title: "Stakeholder Sentiment Tracker",
    hoverH4: "Stakeholder Sentiment Tracker",
    bullets: [
      "Monitors enterprise change sentiment across communication channels to detect adoption friction early",
      "Alerts Transformation Directors before adoption issues impact user sign-offs and project momentum"
    ],
    labels: ["Adoption", "Change Mgmt", "RevOps"]
  }
];

const cStart = html.indexOf('<div class="swiper agents-carousel">');
const cControls = html.indexOf('<div class="carousel-controls-center', cStart);
const cEnd = html.lastIndexOf('</ul>', cControls) + 5;

const carouselHtml = html.substring(cStart, cEnd);
const splits = carouselHtml.split('<li class="swiper-slide for-agents"');
console.log('Splitting real slides. Count:', splits.length - 1);

let newCarouselHtml = splits[0];

for (let i = 1; i < splits.length; i++) {
  let slide = splits[i];
  const agent = heroAgents[i - 1];

  if (agent) {
    // 1. Replace title in agent-card-title
    slide = slide.replace(
      /(<div class="agent-card-title[^>]*><div>)[^<]+(<\/div>)/,
      `$1${agent.title}$2`
    );

    // 2. Replace h4 in splide-agents-content-card
    slide = slide.replace(
      /(<h4[^>]*class="agent-hover-h[^>]*>)[^<]+(<\/h4>)/,
      `$1${agent.hoverH4}$2`
    );

    // 3. Replace bullets in agent-hover-ul
    const bulletHtml = agent.bullets
      .map(
        b =>
          `<li class="agent-hover-li animate-text"><div class="agent-hover-li-dot"></div><div data-anim-parent="">${b}</div></li>`
      )
      .join('');
    slide = slide.replace(
      /(<ul role="list" class="agent-hover-ul">)[\s\S]*?(<\/ul>)/,
      `$1${bulletHtml}$2`
    );

    // 4. Replace labels in agent-labels-wrap
    const colorClass = slide.includes('agent-01')
      ? 'agent-01'
      : slide.includes('agent-02')
      ? 'agent-02'
      : slide.includes('agent-03')
      ? 'agent-03'
      : slide.includes('agent-10')
      ? 'agent-10'
      : 'agent-04';

    const labelHtml = agent.labels
      .map(l => `<div data-anim-parent="" class="agent-label ${colorClass}">${l}</div>`)
      .join('');
    slide = slide.replace(
      /(<div class="agent-labels-wrap animate-text">)[\s\S]*?(<\/div>\s*<\/div>\s*<\/div>)/,
      `$1${labelHtml}$2`
    );
  }

  newCarouselHtml += '<li class="swiper-slide for-agents"' + slide;
}

html = html.substring(0, cStart) + newCarouselHtml + html.substring(cEnd);
console.log('All 10 hero carousel slides replaced successfully!');

// Re-encode JSON and update TSX
const encodedHtml = JSON.stringify(html).slice(1, -1);
tsx = tsx.replace(
  /const PERCIPERE_AGENT_STUDIO_HTML = "[\s\S]*?";\s*export default function/,
  `const PERCIPERE_AGENT_STUDIO_HTML = "${encodedHtml}";\n\nexport default function`
);

fs.writeFileSync('src/components/views/MondayAgentStudioClonedView.tsx', tsx, 'utf8');
console.log('Saved MondayAgentStudioClonedView.tsx successfully!');
