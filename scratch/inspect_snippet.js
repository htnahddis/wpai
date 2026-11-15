const fs = require('fs');

const html = fs.readFileSync('public/monday.com _ Dashboards & Reporting.html', 'utf-8');

const idx = html.indexOf('m_main-wrapper');
console.log('Index of m_main-wrapper:', idx);
if (idx !== -1) {
  console.log('Snippet around m_main-wrapper:', html.substring(idx - 50, idx + 200));
}
