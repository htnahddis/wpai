const fs = require('fs');

const html = fs.readFileSync('public/monday.com _ Dashboards & Reporting.html', 'utf-8');

const matches = [];
let pos = 0;
while ((pos = html.indexOf('primary_slider', pos)) !== -1) {
  matches.push(pos);
  pos += 14;
}
console.log('Occurrences of primary_slider:', matches);
matches.forEach(p => {
  console.log(p, ':', html.substring(p - 100, p + 150));
});
