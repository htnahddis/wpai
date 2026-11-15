const fs = require('fs');
const html = fs.readFileSync('public/The AI Workspace for People & Agents _ monday.com.html', 'utf8');

const pos = html.indexOf('Context Section Animation (Pinned Scroll)');
console.log(html.slice(pos - 50, pos + 2500));
