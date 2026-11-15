const fs = require('fs');

let html = fs.readFileSync('c:/Users/Aditya/Desktop/Code/CLIENT/percipere/wpai/scratch/clean_main_wrapper.html', 'utf8');

console.log('Original length:', html.length);

// 1. Replace Hero Logo with Percipere Agent Studio Wordmark
const heroLogoOld = /<img[^>]*class=["'][^"']*logo-2rem[^"']*["'][^>]*>/i;
const heroLogoNew = `<div class="inline-flex items-center gap-2 py-1"><span class="font-sans text-2xl font-bold tracking-tight text-[#191923]">percipere</span><span class="w-1.5 h-1.5 rounded-full bg-[#FF00B7]"></span><span class="font-mono text-xs font-semibold uppercase tracking-wider text-[#6161FF] bg-[#F0EFFF] px-2.5 py-1 rounded-full border border-[#D5D4E6] ml-2">AGENT STUDIO</span></div>`;
html = html.replace(heroLogoOld, heroLogoNew);

// 2. Replace Hero Headline & Subhead
html = html.replace(
  '<h1 class="heading-style-h1 for-agents">Your unlimited workforce</h1>',
  '<h1 class="heading-style-h1 for-agents">Your unlimited enterprise workforce</h1>'
);

html = html.replace(
  'Expand your team’s capabilities with monday agents — expert, end-to-end AI agents or custom agents tailored to your work, built to execute processes at scale.',
  'Expand your team’s capabilities with Percipere Agent Studio — expert, end-to-end AI agents or custom agents tailored to your Clean Core workflows, built to execute enterprise processes at scale.'
);

// 3. Replace CTA Banner Logo
const ctaLogoOld = /<img[^>]*class=["'][^"']*agents_monday-agents-logo[^"']*["'][^>]*>/i;
const ctaLogoNew = `<div class="inline-flex items-center gap-2 py-1 mb-2"><span class="font-sans text-3xl font-bold tracking-tight text-white">percipere</span><span class="w-2 h-2 rounded-full bg-[#FF00B7]"></span><span class="font-mono text-xs font-semibold uppercase tracking-wider text-white/90 bg-white/10 px-3 py-1 rounded-full border border-white/20 ml-2">AGENT STUDIO</span></div>`;
html = html.replace(ctaLogoOld, ctaLogoNew);

html = html.replace(
  '<h2 class="agents_h2 cta">Ready to amplify your team’s impact?</h2>',
  '<h2 class="agents_h2 cta">Ready to amplify your enterprise impact?</h2>'
);

// 4. In Coverflow cards: replace monday references
html = html.replace(
  /them directly to the context of your work, tools and data in monday\.com/gi,
  'them directly to the context of your SAP data, Clean Core scope, and enterprise tools in Percipere'
);

// 5. In Section 2: Ready-made agents
html = html.replace(
  '<div class="agents-tagline">Expert agents</div>',
  '<div class="agents-tagline">Enterprise agents</div>'
);

html = html.replace(
  '<h3 class="agents_h3">Your proactive AI Leads Agent</h3>',
  '<h3 class="agents_h3">Strategic Enterprise Lead Qualifier</h3>'
);

html = html.replace(
  'Find and enrich high-quality leads that match your target profile, so you can focus on selling, not searching.',
  'Identify and qualify enterprise ERP transformation accounts using legacy ECC version, revenue, and Clean Core migration readiness signals.'
);

// 6. In 3-step builder
html = html.replace(
  '<div class="agents-tagline">AI agent builder</div>',
  '<div class="agents-tagline">Percipere Agent Studio</div>'
);

// 7. In Agents for Every Team
html = html.replace(
  /Agents use the docs, PDFs, and boards you define as context, so every action is grounded in your real work and guidelines\./g,
  'Agents use the docs, PDFs, SAP scope items, and Jira boards you define as context, so every action is grounded in your real Clean Core architecture.'
);

html = html.replace(
  /Put agents in motion across every aspect of work, from insight to execution\.?/g,
  'Put autonomous agents in motion across every aspect of ERP delivery, from scoping and blueprinting to cutover execution.'
);

html = html.replace(
  /AI agents keep work in sync across your tools — pulling context and taking actions without you having to do the handoffs\./g,
  'AI agents keep work in sync across SAP S/4HANA, Jira, ServiceNow, Slack, and cloud APIs without manual handoffs.'
);

html = html.replace(
  /AI agents act without time, volume, or language constraints\. They can follow up, generate content, and call people around the clock\./g,
  'AI agents act without time, volume, or language constraints. They audit code, triage incidents, and reconcile master data around the clock.'
);

html = html.replace(
  /Stay in control with full transparency into every action and the ability to set clear guardrails and permissions\./g,
  'Stay in complete control with full audit logs for every system call, Clean Core compliance gates, and human approval queues.'
);

html = html.replace(
  'ications, plus GDPR compliance and HIPAA support, backed by monday.com’s enterprise-grade security',
  'ications, plus GDPR compliance and SOC 2 Type II certification, backed by Percipere’s enterprise-grade security'
);

// 8. Replace the 13 human avatar images in .agents_avatars-wrapper with clean Percipere tech glyphs
const avatarWrapRegex = /<div class="agents_avatars-wrapper">[\s\S]*?<\/div>/i;

const techGlyphs = [
  { code: 'PMO', label: 'Delivery Risk', color: '#6161FF', bg: '#F0EFFF', border: '#D5D4E6' },
  { code: 'ARC', label: 'Clean Core', color: '#00B7FF', bg: '#E6F8FF', border: '#B8EDFF' },
  { code: 'REV', label: 'Lead Scorer', color: '#00CA72', bg: '#E7F9F0', border: '#B5F1D3' },
  { code: 'AMS', label: 'Incident Lead', color: '#FF00B7', bg: '#FFF0FA', border: '#FFCCE8' },
  { code: 'GRC', label: 'Compliance', color: '#A25DDF', bg: '#F7F0FC', border: '#E8D2FA' },
  { code: 'DAT', label: 'Migration', color: '#FF9900', bg: '#FFF6E9', border: '#FFE5BA' },
  { code: 'ERP', label: 'SAP Core', color: '#1B1466', bg: '#EDEBF8', border: '#D2CDEB' }, // center anchor
  { code: 'SYN', label: 'Discovery', color: '#00C875', bg: '#EBFBF3', border: '#C6F5DE' },
  { code: 'TRN', label: 'Localization', color: '#0086C0', bg: '#E8F6FC', border: '#C0E7F7' },
  { code: 'BTP', label: 'Integration', color: '#6161FF', bg: '#F0EFFF', border: '#D5D4E6' },
  { code: 'JOU', label: 'Business AI', color: '#FF00B7', bg: '#FFF0FA', border: '#FFCCE8' },
  { code: 'SEC', label: 'Governance', color: '#A25DDF', bg: '#F7F0FC', border: '#E8D2FA' },
  { code: 'DEV', label: 'Extensibility', color: '#00B7FF', bg: '#E6F8FF', border: '#B8EDFF' }
];

const newAvatarsHtml = `<div class="agents_avatars-wrapper">` +
  techGlyphs.map(g => `
    <div class="agen-avatar flex items-center justify-center rounded-2xl shadow-md border ${g.border}" style="width: 54px; height: 54px; background-color: ${g.bg}; transform: translate(-50%, -50%); top: 50%; left: 50%; position: absolute; border: 1.5px solid ${g.border}; box-shadow: 0 4px 14px rgba(0,0,0,0.06);">
      <span style="font-family: monospace; font-size: 13px; font-weight: 700; color: ${g.color};">${g.code}</span>
    </div>
  `).join('') +
`</div>`;

html = html.replace(avatarWrapRegex, newAvatarsHtml);

// 9. Replace FAQs with clean Percipere Agent Studio FAQs
const faqOldRegex = /<section class="agents-faq">[\s\S]*?<\/section>/i;
const faqNewHtml = `<section class="agents-faq">
  <div class="agents-faq_padding">
    <div class="agents-faq_container">
      <h2 class="agents_h2">Frequently asked questions</h2>
      <div class="agents-faq_list">
        <details class="agents-faq_item">
          <summary class="agents-faq_question">
            <span>What is Percipere Agent Studio?</span>
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg" class="agents-faq_chevron">
              <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" d="m6 9 6 6 6-6"></path>
            </svg>
          </summary>
          <div class="agents-faq_answer">
            <p>Percipere Agent Studio is an enterprise AI agent builder that lets you create, deploy, and manage autonomous agents across your ERP and corporate workflows — no coding required. You can deploy ready-made specialists for SAP S/4HANA migrations, AMS incident routing, and Clean Core auditing, or design bespoke multi-step agents in plain English.</p>
          </div>
        </details>

        <details class="agents-faq_item">
          <summary class="agents-faq_question">
            <span>Do I need to know how to code to create an enterprise agent?</span>
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg" class="agents-faq_chevron">
              <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" d="m6 9 6 6 6-6"></path>
            </svg>
          </summary>
          <div class="agents-faq_answer">
            <p>No. Percipere Agent Studio is entirely no-code. You simply describe what the agent should accomplish in natural language, connect it to your SAP tables, Jira boards, or documents, and specify safety guardrails. Advanced developers can also hook into REST APIs, SAP OData services, and custom Webhooks whenever needed.</p>
          </div>
        </details>

        <details class="agents-faq_item">
          <summary class="agents-faq_question">
            <span>What is the difference between static automations and Percipere AI agents?</span>
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg" class="agents-faq_chevron">
              <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" d="m6 9 6 6 6-6"></path>
            </svg>
          </summary>
          <div class="agents-faq_answer">
            <p>Traditional automations rely on rigid "if-this-then-that" rules that fail whenever unformatted data or edge cases occur. Percipere AI agents possess contextual reasoning: they can parse unstructured discovery audio, identify Clean Core deviations, extract root-cause error stacks, and execute multi-step workflows while keeping humans in the loop for high-impact signoffs.</p>
          </div>
        </details>

        <details class="agents-faq_item">
          <summary class="agents-faq_question">
            <span>Why is Percipere Agent Studio the ideal AI agent platform for SAP teams?</span>
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg" class="agents-faq_chevron">
              <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" d="m6 9 6 6 6-6"></path>
            </svg>
          </summary>
          <div class="agents-faq_answer">
            <p>Unlike generic AI builders, Percipere Agent Studio is purpose-built for enterprise SAP environments. It integrates with the SAP Activate methodology, enforces SAP Clean Core guidelines, interfaces with SAP BTP side-by-side extensions, and reflects lessons from over 50 enterprise implementations across 50+ countries.</p>
          </div>
        </details>

        <details class="agents-faq_item">
          <summary class="agents-faq_question">
            <span>How do I connect Percipere agents to SAP S/4HANA and my other enterprise tools?</span>
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg" class="agents-faq_chevron">
              <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" d="m6 9 6 6 6-6"></path>
            </svg>
          </summary>
          <div class="agents-faq_answer">
            <p>Agents connect securely via OAuth 2.0, SAP OData endpoints, RFCs, and Model Context Protocol (MCP) integrations. You can point agents directly to SAP S/4HANA, Jira, ServiceNow, Salesforce, Slack, Microsoft Teams, and cloud document repositories.</p>
          </div>
        </details>

        <details class="agents-faq_item">
          <summary class="agents-faq_question">
            <span>Can multiple Percipere agents collaborate and trigger each other?</span>
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg" class="agents-faq_chevron">
              <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" d="m6 9 6 6 6-6"></path>
            </svg>
          </summary>
          <div class="agents-faq_answer">
            <p>Yes. Agents can form collaborative multi-agent execution chains. For example, the SDD Synthesizer can extract requirements from workshop audio, trigger the Clean Core Code Auditor to evaluate custom tables, and pass validated migration targets to the Data Reconciler automatically.</p>
          </div>
        </details>

        <details class="agents-faq_item">
          <summary class="agents-faq_question">
            <span>Is enterprise customer data used to train public foundation models?</span>
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg" class="agents-faq_chevron">
              <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" d="m6 9 6 6 6-6"></path>
            </svg>
          </summary>
          <div class="agents-faq_answer">
            <p>Never. All data processed by Percipere Agent Studio is isolated in private enterprise tenants, encrypted in transit and at rest, and protected by strict zero-data-retention agreements. Your proprietary ERP data and business logic are never used to train public AI models.</p>
          </div>
        </details>

        <details class="agents-faq_item">
          <summary class="agents-faq_question">
            <span>How do human-in-the-loop approvals work?</span>
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg" class="agents-faq_chevron">
              <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" d="m6 9 6 6 6-6"></path>
            </svg>
          </summary>
          <div class="agents-faq_answer">
            <p>You have full governance over critical actions. High-stakes operations — such as committing code transports, posting financial journal entries, or dispatching external client notifications — are held in human approval queues until authorized by designated practice leads.</p>
          </div>
        </details>
      </div>
    </div>
  </div>
</section>`;

html = html.replace(faqOldRegex, faqNewHtml);

// 10. Replace all monday links
html = html.replace(/https:\/\/auth\.monday\.com\/[^\s"'>]+/gi, '#contact');
html = html.replace(/https:\/\/monday\.com\/w\/ai-trust-center/gi, '#trust');
html = html.replace(/https:\/\/monday\.com\/w\/agents[^\s"'>]*/gi, '#');

fs.writeFileSync('c:/Users/Aditya/Desktop/Code/CLIENT/percipere/wpai/scratch/percipere_personalized_wrapper.html', html);
console.log('Saved scratch/percipere_personalized_wrapper.html, length:', html.length);
