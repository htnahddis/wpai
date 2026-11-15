const fs = require('fs');
const sharedCss = fs.readFileSync('public/The AI Workspace for People & Agents _ monday.com_files/websitepages.shared.97086266a.min.css', 'utf8');

// Find all CSS rules matching hp-agents
// A simple rule parser or regex
const rules = [];
const regex = /([^{}]*hp-agents[^{}]*\{[^{}]*\})/g;
let m;
while ((m = regex.exec(sharedCss)) !== null) {
  rules.push(m[1]);
}

console.log('Extracted hp-agents rules count:', rules.length);
fs.writeFileSync('scratch/extracted_context_css.css', rules.join('\n'), 'utf8');
console.log('Wrote to scratch/extracted_context_css.css');
