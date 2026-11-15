const fs = require('fs');

const tsx = fs.readFileSync('src/components/views/MondayAgentStudioClonedView.tsx', 'utf8');
const match = tsx.match(/const PERCIPERE_AGENT_STUDIO_HTML = "([\s\S]*?)";\s*export default function/);
const html = JSON.parse('"' + match[1] + '"');

console.log('1. Checking Hero top:');
const heroTop = html.indexOf('hero-agents-content');
console.log(html.substring(heroTop, heroTop + 300));

console.log('2. Checking Ready-made agents section:');
const rmIdx = html.indexOf('Expert agents');
console.log(html.substring(rmIdx - 50, rmIdx + 800));
