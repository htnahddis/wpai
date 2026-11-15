const fs = require('fs');

const html = fs.readFileSync('public/monday.com _ Dashboards & Reporting.html', 'utf-8');

const headMatch = html.match(/<head>([\s\S]*?)<\/head>/i);
if (headMatch) {
  const styles = headMatch[1].match(/<style[^>]*>([\s\S]*?)<\/style>/gi) || [];
  let combinedCss = '/* Percipere PerciSuite Dashboards Cloned Styles */\n\n';
  styles.forEach((s) => {
    // Strip <style> and </style>
    const css = s.replace(/<style[^>]*>/i, '').replace(/<\/style>/i, '');
    combinedCss += css + '\n\n';
  });

  fs.writeFileSync('public/percisuite/percisuite-dashboards.css', combinedCss, 'utf-8');
  console.log(`Saved percisuite-dashboards.css (${combinedCss.length} bytes)`);
}
