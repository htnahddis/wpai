const fs = require('fs');
const html = fs.readFileSync('public/The AI Workspace for People & Agents _ monday.com.html', 'utf8');

// Find all link stylesheet tags
const linkRegex = /<link[^>]+rel=[\"']stylesheet[\"'][^>]*>/g;
let m;
while ((m = linkRegex.exec(html)) !== null) {
  console.log('Stylesheet link:', m[0]);
}

// Also check for inline <style> tags containing hp-agents-context
const styleRegex = /<style[^>]*>([\s\S]*?)<\/style>/g;
let sCount = 0;
while ((m = styleRegex.exec(html)) !== null) {
  sCount++;
  if (m[1].includes('hp-agents') || m[1].includes('context')) {
    console.log(`Style #${sCount} has context styles, length:`, m[1].length);
  }
}
