const fs = require('fs');

const html = fs.readFileSync('public/monday.com _ Dashboards & Reporting.html', 'utf-8');

const startIdx = html.indexOf('<section class="m_main-wrapper">');
console.log('Start index:', startIdx);

// Look for footer
const footerIdx = html.indexOf('<footer', startIdx);
console.log('Footer index:', footerIdx);

const mainContent = html.substring(startIdx, footerIdx !== -1 ? footerIdx : undefined);
console.log('Main content length:', mainContent.length);

// Let's inspect all h1, h2, h3 in mainContent
const headingMatches = mainContent.match(/<(h[1-3])[^>]*>([\s\S]*?)<\/\1>/gi) || [];
console.log('Headings found:');
headingMatches.forEach(h => {
  const clean = h.replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
  console.log('-', clean);
});
