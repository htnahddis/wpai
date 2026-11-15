const fs = require('fs');

const html = fs.readFileSync('public/monday.com _ Dashboards & Reporting.html', 'utf-8');
const sec7Idx = html.indexOf('See your data your way');
console.log('sec7Idx:', sec7Idx);

const sec7Snippet = html.substring(sec7Idx - 200, sec7Idx + 3000);
console.log('Section 7 snippet:\n', sec7Snippet);
