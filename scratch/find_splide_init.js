const fs = require('fs');

const html = fs.readFileSync('public/monday.com _ Dashboards & Reporting.html', 'utf-8');

const splideMatches = html.match(/new\s+Splide\([^)]*\)[^;]*;/gi) || [];
console.log('Splide inits:');
splideMatches.forEach(m => console.log(m));

// Let's also check all script tags before </body>
const scriptTags = html.match(/<script[^>]*>[\s\S]*?<\/script>/gi) || [];
console.log(`Found ${scriptTags.length} script tags.`);
scriptTags.forEach((s, i) => {
  if (s.includes('Splide') || s.includes('splide')) {
    console.log(`Script ${i+1} mentions splide:\n`, s.substring(0, 300));
  }
});
