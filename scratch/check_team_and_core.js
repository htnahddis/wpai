const fs = require('fs');
const content = fs.readFileSync('src/components/views/MondayAgentStudioClonedView.tsx', 'utf8');

// Agents for every team tabs
const startTeam = content.indexOf('Agents for every team');
const endTeam = content.indexOf('Core capabilities');
const teamHtml = content.slice(startTeam, endTeam);

// Extract all text inside card titles and descriptions in this section
const cardRegex = /class=\\"agents_project-grid-card\\">[\s\S]*?<div class=\\"agents_project-grid-title\\">([^<]+)<\/div>[\s\S]*?<div class=\\"agents_project-grid-text\\">([^<]+)<\/div>/g;
let m;
console.log('=== CARDS IN AGENTS FOR EVERY TEAM ===');
while ((m = cardRegex.exec(teamHtml)) !== null) {
  console.log('TITLE:', m[1].trim());
  console.log('DESC:', m[2].trim());
  console.log('---');
}

// Core capabilities
const startCore = content.indexOf('Core capabilities');
const endCore = content.indexOf('AI you can trust');
const coreHtml = content.slice(startCore, endCore);

const coreCardRegex = /<div class=\\"layout495_tab-link-text\\">([^<]+)<\/div>[\s\S]*?<div class=\\"layout495_tab-link-desc\\">([^<]+)<\/div>/g;
console.log('=== CORE CAPABILITIES ITEMS ===');
while ((m = coreCardRegex.exec(coreHtml)) !== null) {
  console.log('TITLE:', m[1].trim());
  console.log('DESC:', m[2].trim());
  console.log('---');
}
