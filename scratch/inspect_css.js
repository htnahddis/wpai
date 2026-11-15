const fs = require('fs');

const html = fs.readFileSync('public/monday.com _ Dashboards & Reporting.html', 'utf-8');

const cssMatches = html.match(/<link[^>]+rel=["']stylesheet["'][^>]*>/gi) || [];
console.log('CSS links:');
cssMatches.forEach(l => console.log(l));

const styleMatches = html.match(/<style[^>]*>[\s\S]*?<\/style>/gi) || [];
console.log(`\nInline style tags: ${styleMatches.length}`);
