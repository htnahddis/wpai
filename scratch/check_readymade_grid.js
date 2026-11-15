const fs = require('fs');
const tsx = fs.readFileSync('src/components/views/MondayAgentStudioClonedView.tsx', 'utf8');

const match = tsx.match(/const PERCIPERE_AGENT_STUDIO_HTML = "([\s\S]*?)";\s*export default function/);
const html = JSON.parse('"' + match[1] + '"');

const startIdx = html.indexOf('Enterprise agents');
console.log('=== Enterprise agents markup ===');
console.log(html.substring(startIdx - 150, startIdx + 1200));
