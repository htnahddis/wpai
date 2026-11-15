const fs = require('fs');

let tsx = fs.readFileSync('src/components/views/MondayAgentStudioClonedView.tsx', 'utf8');

const match = tsx.match(/const PERCIPERE_AGENT_STUDIO_HTML = "([\s\S]*?)";\s*export default function/);
if (!match) {
  console.error('Could not find PERCIPERE_AGENT_STUDIO_HTML');
  process.exit(1);
}

let html = JSON.parse('"' + match[1] + '"');

// 1. Remove the AI-looking AGENT STUDIO pill tag from Hero top
const oldHeroTag = `<div class="inline-flex items-center gap-2 py-1"><span class="font-sans text-2xl font-bold tracking-tight text-[#191923]">percipere</span><span class="w-1.5 h-1.5 rounded-full bg-[#FF00B7]"></span><span class="font-mono text-xs font-semibold uppercase tracking-wider text-[#6161FF] bg-[#F0EFFF] px-2.5 py-1 rounded-full border border-[#D5D4E6] ml-2">AGENT STUDIO</span></div>`;
const newHeroTag = `<div class="inline-flex items-center gap-2 py-1"><span class="font-sans text-2xl font-bold tracking-tight text-[#191923]">percipere</span></div>`;

if (html.includes(oldHeroTag)) {
  html = html.replace(oldHeroTag, newHeroTag);
  console.log('Removed AGENT STUDIO pill tag from Hero successfully!');
} else {
  console.log('Could not find exact oldHeroTag, searching regex...');
  html = html.replace(
    /<div class="inline-flex items-center gap-2 py-1">[\s\S]*?<\/div>/,
    newHeroTag
  );
  console.log('Replaced with newHeroTag using regex.');
}

// 2. Restore exact base component for Ready-made/Expert agents section, replacing only text
const targetSectionStart = html.indexOf('<section class="percipere-enterprise-stack-section">');
let targetSectionEnd = -1;

if (targetSectionStart !== -1) {
  targetSectionEnd = html.indexOf('</section>', targetSectionStart) + 10;
} else {
  // If not class="percipere-enterprise-stack-section", find by "Ready-made agents"
  const rmIdx = html.indexOf('Ready-made agents');
  if (rmIdx !== -1) {
    const sStart = html.lastIndexOf('<section', rmIdx);
    targetSectionEnd = html.indexOf('</section>', rmIdx) + 10;
  }
}

const cleanExactSection = `<section><div class="m_padding-global"><div class="m_container-xlarge"><div class="m_padding-section-medium"><div class="agents-tagline">Expert agents</div><h2 class="agents_h2">Ready-made agents for specialized use cases</h2><div class="m_spacer-4rem"></div><div class="agents_readymade-grid"><div id="w-node-_97200642-9a37-2d7e-8dd1-90f5d14508f6-fdcf9692" class="agents_readymade-cards-wrapper"><div class="agents_readymade-card"><div class="agents_readymade-text-wrapper"><div class="agents_readymade-card-tag"><img src="/Free%20AI%20Agent%20Builder%20_%20Build%20your%20Agents%20with%20AI%20_%20monday.com_files/698455425efa89818d357bad_CRM-oneliner-white.svg" loading="lazy" alt=""></div><h3 class="agents_h3">Your proactive Enterprise Leads Agent</h3><p class="agents_card-text">Identify and qualify enterprise ERP transformation accounts using legacy ECC version, revenue, and Clean Core migration readiness signals.</p><a data-product-id="crm" data-button-type="signup" href="#contact" class="m_button-outline is-white w-inline-block"><div>Get Started</div><div class="m_button-arrow w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none">
  <g clip-path="url(#clip0_2450_390)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.03033 0.21967C6.73744 -0.0732233 6.26256 -0.0732233 5.96967 0.21967C5.67678 0.512563 5.67678 0.987437 5.96967 1.28033L8.93934 4.25H1C0.585786 4.25 0.25 4.58579 0.25 5C0.25 5.41421 0.585786 5.75 1 5.75H8.93934L5.96967 8.71967C5.67678 9.01256 5.67678 9.48744 5.96967 9.78033C6.26256 10.0732 6.73744 10.0732 7.03033 9.78033L11.6339 5.17678C11.7315 5.07915 11.7315 4.92085 11.6339 4.82322L7.03033 0.21967Z" fill="currentcolor"></path>
  </g>
  <defs>
    <clippath id="clip0_2450_390">
      <rect width="12" height="10" fill="currentcolor"></rect>
    </clippath>
  </defs>
</svg></div></a></div><div id="w-node-_97200642-9a37-2d7e-8dd1-90f5d1450905-fdcf9692" class="agents_readymade-grid-image-wrapper"><img src="/Free%20AI%20Agent%20Builder%20_%20Build%20your%20Agents%20with%20AI%20_%20monday.com_files/698839294330e151912bafb1_Group 2147204021.avif" loading="lazy" sizes="100vw" srcset="https://cdn.prod.website-files.com/656da6fea306219773d04208/698839294330e151912bafb1_Group%202147204021-p-500.avif 500w, https://cdn.prod.website-files.com/656da6fea306219773d04208/698839294330e151912bafb1_Group%202147204021.avif 771w" alt="" class="agents_readymade-grid-image"></div></div><div class="agents_readymade-card sticky"><div class="agents_readymade-text-wrapper"><div class="agents_readymade-card-tag"><img src="/Free%20AI%20Agent%20Builder%20_%20Build%20your%20Agents%20with%20AI%20_%20monday.com_files/682a0ca78db5a3b2791f1bac_CRM-oneliner-box.svg" loading="lazy" alt=""></div><div class="agents_h3">Your always-on Clean Core & Code Agent</div><p class="agents_card-text">Audit custom ABAP commits, evaluate user exits, and map legacy customizations into SAP BTP side-by-side extensions with full governance.</p><a data-product-id="crm" data-button-type="signup" href="#contact" class="m_button-outline w-inline-block"><div>Get Started</div><div class="m_button-arrow w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none">
  <g clip-path="url(#clip0_2450_390)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.03033 0.21967C6.73744 -0.0732233 6.26256 -0.0732233 5.96967 0.21967C5.67678 0.512563 5.67678 0.987437 5.96967 1.28033L8.93934 4.25H1C0.585786 4.25 0.25 4.58579 0.25 5C0.25 5.41421 0.585786 5.75 1 5.75H8.93934L5.96967 8.71967C5.67678 9.01256 5.67678 9.48744 5.96967 9.78033C6.26256 10.0732 6.73744 10.0732 7.03033 9.78033L11.6339 5.17678C11.7315 5.07915 11.7315 4.92085 11.6339 4.82322L7.03033 0.21967Z" fill="currentcolor"></path>
  </g>
  <defs>
    <clippath id="clip0_2450_390">
      <rect width="12" height="10" fill="currentcolor"></rect>
    </clippath>
  </defs>
</svg></div></a></div><div id="w-node-_97200642-9a37-2d7e-8dd1-90f5d1450915-fdcf9692" class="agents_readymade-grid-image-wrapper"><img src="/Free%20AI%20Agent%20Builder%20_%20Build%20your%20Agents%20with%20AI%20_%20monday.com_files/6984973f319df3c7a842c6f3_Frame 2095585972.avif" loading="lazy" sizes="100vw" srcset="https://cdn.prod.website-files.com/656da6fea306219773d04208/6984973f319df3c7a842c6f3_Frame%202095585972-p-500.avif 500w, https://cdn.prod.website-files.com/656da6fea306219773d04208/6984973f319df3c7a842c6f3_Frame%202095585972-p-800.avif 800w, https://cdn.prod.website-files.com/656da6fea306219773d04208/6984973f319df3c7a842c6f3_Frame%202095585972.avif 1459w" alt="" class="agents_readymade-grid-image"></div></div></div></div></div></div></div></section>`;

if (targetSectionStart !== -1 && targetSectionEnd !== -1) {
  html = html.substring(0, targetSectionStart) + cleanExactSection + html.substring(targetSectionEnd);
  console.log('Restored exact base Ready-made agents section successfully!');
}

const encodedHtml = JSON.stringify(html).slice(1, -1);
tsx = tsx.replace(
  /const PERCIPERE_AGENT_STUDIO_HTML = "[\s\S]*?";\s*export default function/,
  `const PERCIPERE_AGENT_STUDIO_HTML = "${encodedHtml}";\n\nexport default function`
);

fs.writeFileSync('src/components/views/MondayAgentStudioClonedView.tsx', tsx, 'utf8');
console.log('Saved MondayAgentStudioClonedView.tsx successfully!');
