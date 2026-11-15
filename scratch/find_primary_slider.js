const fs = require('fs');

const html = fs.readFileSync('public/monday.com _ Dashboards & Reporting.html', 'utf-8');

const primIdx = html.indexOf('primary_slider');
console.log('primary_slider index:', primIdx);
if (primIdx !== -1) {
  console.log(html.substring(primIdx - 200, primIdx + 1500));
}
