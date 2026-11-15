const fs = require('fs');
const html = fs.readFileSync('c:/Users/Aditya/Desktop/Code/CLIENT/percipere/wpai/scratch/percipere_personalized_wrapper.html', 'utf8');

const regex = /([^<>\n]{0,60}monday[^<>\n]{0,60})/gi;
let match;
const matches = [];
while ((match = regex.exec(html)) !== null) {
  matches.push({ index: match.index, text: match[1].trim() });
}

console.log('Remaining matches of "monday":', matches.length);
console.log(matches);
