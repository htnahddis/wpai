const fs = require('fs');
const content = fs.readFileSync('src/components/views/MondayAgentStudioClonedView.tsx', 'utf8');

console.log('1. CTA button text:', content.includes('Deploy your first enterprise agent'));
console.log('2. Compliance certifications:', content.includes('ISO 27001, SOC 2 Type II, and GDPR compliance'));
console.log('3. Data privacy:', content.includes('never used to train public models'));
console.log('4. Access control:', content.includes('Role-based access control (RBAC)'));
console.log('5. Trust Center button points to #contact:', content.includes('href=\\"#contact\\" data-signup-flow=\\"marketing_ai_onboarding\\" class=\\"m_button-outline'));
console.log('6. Mobile step 1:', content.includes('01 | Define enterprise scope'));
console.log('7. Mobile step 2:', content.includes('02 | Connect enterprise systems'));
console.log('8. Mobile step 3:', content.includes('03 | Deploy with 24/7 governance'));
console.log('9. Mobile core integrations synced:', content.includes('keep work in sync across SAP S/4HANA, Jira, ServiceNow'));
