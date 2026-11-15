const fs = require('fs');
const html = fs.readFileSync('public/The AI Workspace for People & Agents _ monday.com.html', 'utf8');

function findScripts(pattern) {
  let pos = 0;
  while ((pos = html.indexOf(pattern, pos)) !== -1) {
    const s = Math.max(0, pos - 100);
    const e = Math.min(html.length, pos + 400);
    console.log('--- FOUND ' + pattern + ' at ' + pos + ' ---');
    console.log(html.slice(s, e));
    pos += pattern.length;
  }
}

findScripts('context-heading');
findScripts('context-agent');
findScripts('context-item');
findScripts('agents-context');
