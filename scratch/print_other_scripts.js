const fs = require('fs');
const html = fs.readFileSync('c:/Users/Aditya/Desktop/Code/CLIENT/percipere/wpai/public/Free AI Agent Builder _ Build your Agents with AI _ monday.com.html', 'utf8');

const scripts = [...html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/gi)].map(m => m[1]);
for (let i = 41; i < scripts.length; i++) {
  console.log(`=== SCRIPT ${i} (length: ${scripts[i].length}) ===`);
  if (scripts[i].length < 1000) {
    console.log(scripts[i]);
  } else {
    console.log(scripts[i].slice(0, 300) + '...');
  }
}
