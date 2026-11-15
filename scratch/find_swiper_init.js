const fs = require('fs');
const html = fs.readFileSync('c:/Users/Aditya/Desktop/Code/CLIENT/percipere/wpai/public/Free AI Agent Builder _ Build your Agents with AI _ monday.com.html', 'utf8');

// Find all occurrences of Swiper in inline scripts
const scripts = [...html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/gi)].map(m => m[1]);
console.log('Total script tags:', scripts.length);

for (let i = 0; i < scripts.length; i++) {
  const s = scripts[i];
  if (s.includes('Swiper') || s.includes('swiper') || s.includes('agents')) {
    console.log(`Script ${i} mentions swiper/agents:`, s.slice(0, 400));
  }
}
