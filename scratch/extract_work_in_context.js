const fs = require('fs');
const html = fs.readFileSync('public/The AI Workspace for People & Agents _ monday.com.html', 'utf8');

const pos = html.indexOf('Work in context');
const sectionStart = html.lastIndexOf('<section', pos);
const sectionEnd = html.indexOf('</section>', pos) + 10;

console.log('sectionStart:', sectionStart);
console.log('sectionEnd:', sectionEnd);
console.log('Section HTML length:', sectionEnd - sectionStart);

fs.writeFileSync('scratch/work_in_context_raw.html', html.slice(sectionStart, sectionEnd), 'utf8');
console.log('Saved to scratch/work_in_context_raw.html');
