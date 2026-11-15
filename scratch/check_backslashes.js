const fs = require('fs');
const html = fs.readFileSync('c:/Users/Aditya/Desktop/Code/CLIENT/percipere/wpai/scratch/extracted_main_wrapper.html', 'utf8');

const backslashes = (html.match(/\\/g) || []).length;
console.log('Backslashes count:', backslashes);
if (backslashes > 0) {
  const matches = [...html.matchAll(/\\./g)].map(m => m[0]);
  console.log('Sample backslash sequences:', matches.slice(0, 10));
}
