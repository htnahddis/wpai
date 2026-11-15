const fs = require('fs');
const html = fs.readFileSync('c:/Users/Aditya/Desktop/Code/CLIENT/percipere/wpai/public/Free AI Agent Builder _ Build your Agents with AI _ monday.com.html', 'utf8');

const imgMatches = [...html.matchAll(/<img[^>]+src=["']([^"']+)["']/gi)].map(m => m[1]);
console.log('Sample img src (first 10):', imgMatches.slice(0, 10));

const videoMatches = [...html.matchAll(/<video[^>]+src=["']([^"']+)["']/gi)].map(m => m[1]);
console.log('Sample video src:', videoMatches.slice(0, 5));

const sourceMatches = [...html.matchAll(/<source[^>]+src=["']([^"']+)["']/gi)].map(m => m[1]);
console.log('Sample source src:', sourceMatches.slice(0, 5));
