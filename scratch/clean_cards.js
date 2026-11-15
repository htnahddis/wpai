const fs = require('fs');
const file = 'src/components/views/MondayAgentStudioClonedView.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Remove monday CRM card tags
const regex1 = /<div class=\\"agents_readymade-card-tag\\"><img src=\\"\/Free%20AI%20Agent%20Builder%20_%20Build%20your%20Agents%20with%20AI%20_%20monday\.com_files\/698455425efa89818d357bad_CRM-oneliner-white\.svg\\" loading=\\"lazy\\" alt=\\"\\"><\/div>/g;
const regex2 = /<div class=\\"agents_readymade-card-tag\\"><img src=\\"\/Free%20AI%20Agent%20Builder%20_%20Build%20your%20Agents%20with%20AI%20_%20monday\.com_files\/682a0ca78db5a3b2791f1bac_CRM-oneliner-box\.svg\\" loading=\\"lazy\\" alt=\\"\\"><\/div>/g;

console.log('regex1 matches:', (content.match(regex1) || []).length);
console.log('regex2 matches:', (content.match(regex2) || []).length);

content = content.replace(regex1, '');
content = content.replace(regex2, '');

// Also any other agents_readymade-card-tag containing CRM
const regexAnyCRM = /<div class=\\"agents_readymade-card-tag\\">[\s\S]*?CRM[\s\S]*?<\/div>/g;
console.log('regexAnyCRM matches:', (content.match(regexAnyCRM) || []).length);
content = content.replace(regexAnyCRM, '');

// 2. Remove AI-looking pill tag from CTA section
const ctaTagRegex = /<span class=\\"w-2 h-2 rounded-full bg-\[#FF00B7\]\\"><\/span><span class=\\"font-mono text-xs font-semibold uppercase tracking-wider text-white\/90 bg-white\/10 px-3 py-1 rounded-full border border-white\/20 ml-2\\">AGENT STUDIO<\/span>/g;
console.log('ctaTag matches:', (content.match(ctaTagRegex) || []).length);
content = content.replace(ctaTagRegex, '');

fs.writeFileSync(file, content, 'utf8');
console.log('Cleaned file successfully.');
