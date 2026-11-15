const fs = require('fs');

const tsx = fs.readFileSync('src/components/views/MondayAgentStudioClonedView.tsx', 'utf8');

const match = tsx.match(/const PERCIPERE_AGENT_STUDIO_HTML = "([\s\S]*?)";\s*export default function/);
const html = JSON.parse('"' + match[1] + '"');

// Search for CRM or svg or oneliner
const regex = /<img[^>]+src="[^"]*"/gi;
let m;
while ((m = regex.exec(html)) !== null) {
  if (m[0].toLowerCase().includes('crm') || m[0].includes('oneliner')) {
    console.log('Found CRM image:', m[0]);
  }
}

// Find agents_readymade-card-tag
const tagRegex = /<div class="agents_readymade-card-tag">[\s\S]*?<\/div>/gi;
while ((m = tagRegex.exec(html)) !== null) {
  console.log('Found card tag:', m[0]);
}

// Check other cards in the HTML (like tab cards or other sections) for monday CRM
const crmIdx = [];
let pos = 0;
while ((pos = html.indexOf('CRM', pos)) !== -1) {
  crmIdx.push(pos);
  console.log('CRM found at pos:', pos);
  console.log(html.substring(Math.max(0, pos - 100), Math.min(html.length, pos + 100)));
  pos += 3;
}
