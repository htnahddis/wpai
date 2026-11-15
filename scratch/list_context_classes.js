const fs = require('fs');
const html = fs.readFileSync('scratch/work_in_context_raw.html', 'utf8');

const classRegex = /class=[\"']([^\"']+)[\"']/g;
let m;
const classes = new Set();
while ((m = classRegex.exec(html)) !== null) {
  m[1].split(/\s+/).forEach(c => classes.add(c));
}

console.log('Classes used in Work in Context:');
console.log(Array.from(classes));
