const fs = require('fs');

const html = fs.readFileSync('public/monday.com _ Dashboards & Reporting.html', 'utf-8');
const startIdx = html.indexOf('<section class="m_main-wrapper">');
const mainContent = html.substring(startIdx);

const imgMatches = mainContent.match(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi) || [];
console.log(`Found ${imgMatches.length} images:`);
const uniqueSrcs = new Set();
imgMatches.forEach(img => {
  const src = img.match(/src=["']([^"']+)["']/i);
  if (src) uniqueSrcs.add(src[1]);
});

Array.from(uniqueSrcs).forEach(s => console.log('-', s));
