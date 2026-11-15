const fs = require('fs');

const html = fs.readFileSync('public/monday.com _ Dashboards & Reporting.html', 'utf-8');
const sec9Idx = html.indexOf('Trusted by Fortune 500 companies');
console.log('sec9Idx:', sec9Idx);

console.log(html.substring(sec9Idx - 100, sec9Idx + 2000));
