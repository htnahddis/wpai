const fs = require('fs');

const html = fs.readFileSync('public/monday.com _ Dashboards & Reporting.html', 'utf-8');
const startTag = '<section class="m_main-wrapper">';
const startIdx = html.indexOf(startTag);
const endIdx = 245915;

const rawMain = html.substring(startIdx, endIdx) + '</section>';

console.log('Total raw main wrapper length:', rawMain.length);

// Let's inspect all text content inside rawMain
let textOnly = rawMain.replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ');
console.log('Text content overview:');
console.log(textOnly.substring(0, 1500));
console.log('\n--- Mid ---\n');
console.log(textOnly.substring(1500, 3000));
