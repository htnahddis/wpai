const fs = require('fs');

const tsx = fs.readFileSync('src/components/views/MondayAgentStudioClonedView.tsx', 'utf8');
const match = tsx.match(/const PERCIPERE_AGENT_STUDIO_HTML = "([\s\S]*?)";\s*export default function/);
const html = JSON.parse('"' + match[1] + '"');

const heroContentIdx = html.indexOf('hero-agents-content');
console.log('Hero content top snippet:');
console.log(html.substring(heroContentIdx, heroContentIdx + 500));
