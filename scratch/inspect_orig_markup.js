const fs = require('fs');

const origHtml = fs.readFileSync('public/Free AI Agent Builder _ Build your Agents with AI _ monday.com.html', 'utf8');

const cIndex = origHtml.indexOf('agents-carousel');
const cHtml = origHtml.substring(cIndex, cIndex + 12000);

// Print classes and inline styles of the container, wrapper, and first 4 slides
const lines = cHtml.split('\n');
console.log('--- First 60 lines of carousel markup in orig ---');
console.log(lines.slice(0, 60).join('\n'));
