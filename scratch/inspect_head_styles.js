const fs = require('fs');

const html = fs.readFileSync('public/monday.com _ Dashboards & Reporting.html', 'utf-8');

const headMatch = html.match(/<head>([\s\S]*?)<\/head>/i);
if (headMatch) {
  const styles = headMatch[1].match(/<style[^>]*>([\s\S]*?)<\/style>/gi) || [];
  console.log(`Found ${styles.length} style tags in head.`);
  styles.forEach((s, i) => {
    console.log(`Style tag ${i + 1} length:`, s.length);
  });
}
