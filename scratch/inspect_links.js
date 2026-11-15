const fs = require('fs');
const html = fs.readFileSync('c:/Users/Aditya/Desktop/Code/CLIENT/percipere/wpai/scratch/extracted_main_wrapper.html', 'utf8');

const links = [...html.matchAll(/<a[^>]+href=["']([^"']*)["'][^>]*>([\s\S]*?)<\/a>/gi)]
  .map(m => ({ href: m[1], text: m[2].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ') }));

console.log('Total links in main wrapper:', links.length);
console.log('Sample links:', links.slice(0, 15));
