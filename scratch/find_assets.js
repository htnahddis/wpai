const fs = require('fs');

const text = fs.readFileSync('public/monday.com _ Dashboards & Reporting.html', 'utf-8');
const regex = /Dashboards\s*(?:&|&amp;)\s*Reporting_files\/([^"'\s>\)]+)/g;
let match;
const assets = new Set();

while ((match = regex.exec(text)) !== null) {
  assets.add(match[1]);
}

console.log(`Total unique assets: ${assets.size}`);
for (const a of Array.from(assets).sort()) {
  console.log(a);
}
