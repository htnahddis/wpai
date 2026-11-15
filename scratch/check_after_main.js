const fs = require('fs');

const html = fs.readFileSync('public/monday.com _ Dashboards & Reporting.html', 'utf-8');
const endIdx = 245915;

console.log('Snippet from endIdx:', html.substring(endIdx, endIdx + 1500));
