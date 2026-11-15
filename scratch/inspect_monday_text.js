const fs = require('fs');

const html = fs.readFileSync('public/monday.com _ Dashboards & Reporting.html', 'utf-8');
const startTag = '<section class="m_main-wrapper">';
const startIdx = html.indexOf(startTag);
const endIdx = 245915;

const rawMain = html.substring(startIdx + startTag.length, endIdx);

// Let's replace asset path:
// ./monday.com _ Dashboards &amp; Reporting_files/ -> /percisuite/
// ./monday.com _ Dashboards & Reporting_files/ -> /percisuite/
// monday.com _ Dashboards & Reporting_files/ -> /percisuite/
let mainUpdated = rawMain
  .replace(/\.\/monday\.com _ Dashboards &(?:amp;)? Reporting_files\//g, '/percisuite/')
  .replace(/monday\.com _ Dashboards &(?:amp;)? Reporting_files\//g, '/percisuite/');

console.log('Main length:', mainUpdated.length);

// Let's check what occurrences of monday still exist:
const mondayOccurrences = mainUpdated.match(/monday[^\s<"']*/gi) || [];
console.log('Occurrences of monday in text:', mondayOccurrences.length);
console.log(Array.from(new Set(mondayOccurrences)));
