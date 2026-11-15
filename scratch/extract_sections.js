const fs = require('fs');
const html = fs.readFileSync('c:/Users/Aditya/Desktop/Code/CLIENT/percipere/wpai/public/Free AI Agent Builder _ Build your Agents with AI _ monday.com.html', 'utf8');

// Let's find all major headings and their immediate text and parent classes
const sections = [];
const hReg = /<(h[1-3])[^>]*class=["']([^"']*)["'][^>]*>([\s\S]*?)<\/\1>/gi;
let match;
while ((match = hReg.exec(html)) !== null) {
  const tag = match[1];
  const className = match[2];
  const text = match[3].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');
  const index = match.index;
  // Get snippet around this heading (200 chars before, 800 chars after)
  const snippet = html.slice(Math.max(0, index - 100), Math.min(html.length, index + 800))
    .replace(/<svg[\s\S]*?<\/svg>/gi, '[SVG]')
    .replace(/\s+/g, ' ');
  sections.push({ tag, className, text, index, snippet: snippet.slice(0, 300) });
}

console.log(JSON.stringify(sections, null, 2));
