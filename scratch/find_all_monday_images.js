const fs = require('fs');

const tsx = fs.readFileSync('src/components/views/MondayAgentStudioClonedView.tsx', 'utf8');

const match = tsx.match(/const PERCIPERE_AGENT_STUDIO_HTML = "([\s\S]*?)";\s*export default function/);
const html = JSON.parse('"' + match[1] + '"');

// Search for any other occurrences of 'monday' or product symbols in image sources
const regex = /<img[^>]+src="[^"]*"[^>]*>/gi;
let m;
while ((m = regex.exec(html)) !== null) {
  if (m[0].toLowerCase().includes('monday') || m[0].toLowerCase().includes('crm') || m[0].toLowerCase().includes('symbol')) {
    console.log('Image with monday/crm/symbol:', m[0]);
  }
}
