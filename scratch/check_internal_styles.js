const fs = require('fs');
const html = fs.readFileSync('c:/Users/Aditya/Desktop/Code/CLIENT/percipere/wpai/scratch/extracted_main_wrapper.html', 'utf8');

const internalStyles = [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)].map(m => m[1]);
console.log('Internal style tags inside main wrapper:', internalStyles.length);
for (let i = 0; i < internalStyles.length; i++) {
  console.log(`Internal Style ${i}:`, internalStyles[i]);
}
