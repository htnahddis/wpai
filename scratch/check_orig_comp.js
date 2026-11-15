const fs = require('fs');
const html = fs.readFileSync('public/Free AI Agent Builder _ Build your Agents with AI _ monday.com.html', 'utf8');

// Find swiper-agents-comp
const idx = html.indexOf('swiper-agents-comp');
console.log('Index:', idx);
const snippet = html.substring(idx - 100, idx + 3500);
console.log('Snippet:');
console.log(snippet);
