const fs = require('fs');
const content = fs.readFileSync('src/components/views/MondayAgentStudioClonedView.tsx', 'utf8');

const startTeam = content.indexOf('Agents for every team');
const endTeam = content.indexOf('Core capabilities');
const teamHtml = content.slice(startTeam, endTeam);

// Find all text inside tags
const textRegex = />([^<]{4,})</g;
let m;
const teamTexts = [];
while ((m = textRegex.exec(teamHtml)) !== null) {
  const t = m[1].trim();
  if (t && !t.startsWith('{') && !t.startsWith('/*')) {
    teamTexts.push(t);
  }
}
console.log('=== TEAM TEXTS ===');
console.log(teamTexts.join('\n'));

const startCore = content.indexOf('Core capabilities');
const endCore = content.indexOf('AI you can trust');
const coreHtml = content.slice(startCore, endCore);

const coreTexts = [];
while ((m = textRegex.exec(coreHtml)) !== null) {
  const t = m[1].trim();
  if (t && !t.startsWith('{') && !t.startsWith('/*')) {
    coreTexts.push(t);
  }
}
console.log('\n=== CORE TEXTS ===');
console.log(coreTexts.join('\n'));
