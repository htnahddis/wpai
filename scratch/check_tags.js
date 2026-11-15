const fs = require('fs');
const html = fs.readFileSync('c:/Users/Aditya/Desktop/Code/CLIENT/percipere/wpai/scratch/extracted_main_wrapper.html', 'utf8');

// Check tag balance for div, section, p, h1, h2, h3, a
const tags = ['div', 'section', 'p', 'h1', 'h2', 'h3', 'a', 'span'];
for (const tag of tags) {
  const openCount = (html.match(new RegExp(`<${tag}[\\s>]`, 'gi')) || []).length;
  const closeCount = (html.match(new RegExp(`<\/${tag}>`, 'gi')) || []).length;
  console.log(`Tag <${tag}>: open=${openCount}, close=${closeCount}, diff=${openCount - closeCount}`);
}
