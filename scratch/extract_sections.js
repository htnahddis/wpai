const fs = require('fs');

const html = fs.readFileSync('public/monday.com _ Dashboards & Reporting.html', 'utf-8');

const startTag = '<section class="m_main-wrapper">';
const startIdx = html.indexOf(startTag);

// Let's find where m_main-wrapper ends
// It ends right before the footer or near the end of body
let endIdx = html.indexOf('<footer', startIdx);
if (endIdx === -1) {
  endIdx = html.indexOf('<div class="footer', startIdx);
}
if (endIdx === -1) {
  endIdx = html.indexOf('<!-- START OF FOOTER', startIdx);
}
console.log('startIdx:', startIdx, 'endIdx:', endIdx);

let mainContent = '';
if (endIdx !== -1) {
  mainContent = html.substring(startIdx + startTag.length, endIdx);
} else {
  // Let's search for the closing section of m_main-wrapper
  const lastSection = html.lastIndexOf('</section>');
  mainContent = html.substring(startIdx + startTag.length, lastSection);
}

console.log('mainContent length:', mainContent.length);

// Count sections
const sectionMatches = mainContent.match(/<section[\s\S]*?<\/section>/gi) || [];
console.log('Top-level sections inside wrapper:', sectionMatches.length);

// Let's write out a summary of each section
sectionMatches.forEach((s, idx) => {
  const h1 = s.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const h2 = s.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i);
  const h3 = s.match(/<h3[^>]*>([\s\S]*?)<\/h3>/i);
  const heading = (h1 && h1[1]) || (h2 && h2[1]) || (h3 && h3[1]) || 'No heading';
  console.log(`[Section ${idx + 1}] Length: ${s.length} | Heading: ${heading.replace(/<[^>]+>/g, '').trim()}`);
});
