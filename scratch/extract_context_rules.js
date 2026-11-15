const fs = require('fs');
const html = fs.readFileSync('public/The AI Workspace for People & Agents _ monday.com.html', 'utf8');
const sharedCss = fs.readFileSync('public/The AI Workspace for People & Agents _ monday.com_files/websitepages.shared.97086266a.min.css', 'utf8');

function extractRules(source, pattern) {
  const matches = [];
  let pos = 0;
  while ((pos = source.indexOf(pattern, pos)) !== -1) {
    const s = Math.max(0, pos - 50);
    const e = Math.min(source.length, pos + 250);
    matches.push(source.slice(s, e));
    pos += pattern.length;
  }
  return matches;
}

console.log('=== RULES IN SHARED CSS ===');
const sharedMatches = extractRules(sharedCss, 'hp-agents-context');
console.log('Matches in shared CSS:', sharedMatches.length);
sharedMatches.slice(0, 5).forEach((m, i) => console.log(i + ': ' + m));

console.log('=== RULES IN HTML STYLES ===');
const styleRegex = /<style[^>]*>([\s\S]*?)<\/style>/g;
let m;
let sIdx = 0;
while ((m = styleRegex.exec(html)) !== null) {
  sIdx++;
  if (m[1].includes('hp-agents-context') || m[1].includes('hp-agents_')) {
    console.log(`--- Style tag #${sIdx} ---`);
    console.log(m[1].trim());
  }
}
