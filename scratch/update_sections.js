const fs = require('fs');
const file = 'src/components/views/MondayAgentStudioClonedView.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Personalize Mobile Steps in 'Build powerful AI agents in just a few steps'
content = content.replace(
  '<div class=\\"m_font-weight-medium\\">01 | Describe what you need</div><div class=\\"m_text-size-small\\">Define the agent role, the tasks at hand, and when to execute.</div>',
  '<div class=\\"m_font-weight-medium\\">01 | Define enterprise scope</div><div class=\\"m_text-size-small\\">Specify the agent role, SAP Clean Core boundaries, and target ERP workflows.</div>'
);

content = content.replace(
  '<div class=\\"m_font-weight-medium\\">02 | Make it yours</div><div class=\\"m_text-size-small\\">Connect the knowledge and tools your agent needs.</div>',
  '<div class=\\"m_font-weight-medium\\">02 | Connect enterprise systems</div><div class=\\"m_text-size-small\\">Link S/4HANA tables, BTP APIs, Jira tickets, and verified enterprise SOPs.</div>'
);

content = content.replace(
  '<div class=\\"m_font-weight-medium\\">03 | See it in action</div><div class=\\"m_text-size-small\\">Try your agent, make adjustments, and watch how work gets done.</div>',
  '<div class=\\"m_font-weight-medium\\">03 | Deploy with 24/7 governance</div><div class=\\"m_text-size-small\\">Activate autonomous execution with human-in-the-loop approvals, full audit trails, and zero hallucination risk.</div>'
);

// 2. Synchronize Mobile Core capabilities Tab 3 description
content = content.replace(
  '<p class=\\"m_text-size-small\\">AI agents keep work in sync across your tools —pulling context and taking actions without you having to do the handoffs.</p>',
  '<p class=\\"m_text-size-small\\">AI agents keep work in sync across SAP S/4HANA, Jira, ServiceNow, Slack, and cloud APIs without manual handoffs.</p>'
);

// 3. Enhance 'AI you can trust' Section
content = content.replace(
  'SOC 2 Type II and ISO certifications, plus GDPR compliance and SOC 2 Type II certification, backed by Percipere’s enterprise-grade security',
  'ISO 27001, SOC 2 Type II, and GDPR compliance, backed by Percipere’s private tenant isolation and zero-data-retention agreements'
);

content = content.replace(
  'Your data stays private, encrypted by default to protect confidentiality and integrity',
  'Your enterprise data stays private, strictly isolated in your dedicated tenant, and is never used to train public models'
);

content = content.replace(
  'Admin settings and granular permissions define who can use AI across the account and user roles',
  'Role-based access control (RBAC), granular SAP authorization mappings, and human-in-the-loop review queues'
);

content = content.replace(
  '<a href=\\"#trust\\" class=\\"m_button-outline w-inline-block\\"><div>Visit our AI Trust Center</div>',
  '<a href=\\"#contact\\" data-signup-flow=\\"marketing_ai_onboarding\\" class=\\"m_button-outline w-inline-block\\"><div>Visit our AI Trust Center</div>'
);

// 4. Enhance Bottom CTA button text
content = content.replace(
  '<a data-signup-flow=\\"marketing_ai_onboarding\\" data-button-type=\\"signup\\" href=\\"#contact\\" class=\\"m_button w-inline-block\\"><div>Get started</div>',
  '<a data-signup-flow=\\"marketing_ai_onboarding\\" data-button-type=\\"signup\\" href=\\"#contact\\" class=\\"m_button w-inline-block\\"><div>Deploy your first enterprise agent</div>'
);

fs.writeFileSync(file, content, 'utf8');
console.log('Sections updated successfully.');
