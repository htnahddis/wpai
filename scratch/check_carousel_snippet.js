const fs = require('fs');
const tsx = fs.readFileSync('src/components/views/MondayAgentStudioClonedView.tsx', 'utf8');

const match = tsx.match(/const PERCIPERE_AGENT_STUDIO_HTML = "([\s\S]*?)";\s*export default function/);
const html = JSON.parse('"' + match[1] + '"');

const cIndex = html.indexOf('agents-carousel');
console.log('agents-carousel snippet in html:');
console.log(html.substring(cIndex, cIndex + 800));
