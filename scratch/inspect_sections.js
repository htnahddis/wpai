const fs = require('fs');

const html = fs.readFileSync('public/monday.com _ Dashboards & Reporting.html', 'utf-8');

// Find all top-level sections inside m_main-wrapper
const mainMatch = html.match(/<section class="m_main-wrapper">([\s\S]*?)<\/section>\s*(?:<footer|<div class="footer)/i);

if (mainMatch) {
  console.log("Found m_main-wrapper, length:", mainMatch[1].length);
  // Let's count sections inside
  const sections = mainMatch[1].match(/<section[^>]*>[\s\S]*?<\/section>/gi) || [];
  console.log(`Contains ${sections.length} sub-sections`);
  sections.forEach((sec, i) => {
    const h1 = sec.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
    const h2 = sec.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i);
    const h3 = sec.match(/<h3[^>]*>([\s\S]*?)<\/h3>/i);
    const heading = (h1 && h1[1]) || (h2 && h2[1]) || (h3 && h3[1]) || "No heading";
    const cleanHeading = heading.replace(/<[^>]+>/g, '').trim();
    console.log(`Section ${i + 1}: ${cleanHeading}`);
  });
} else {
  console.log("m_main-wrapper not found with regex, let's search for main sections");
}
