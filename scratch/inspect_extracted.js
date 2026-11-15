const fs = require('fs');
const html = fs.readFileSync('c:/Users/Aditya/Desktop/Code/CLIENT/percipere/wpai/scratch/extracted_main_wrapper.html', 'utf8');

// Find major section classes or IDs
const sections = [...html.matchAll(/<(section|div)[^>]*class=["']([^"']*(?:hero|readymade|builder|grid|tabs|faq|cta)[^"']*)["'][^>]*>/gi)]
  .map(m => ({ tag: m[1], class: m[2] }));

console.log('Sample classes inside main wrapper:', [...new Set(sections.map(s => s.class))].slice(0, 30));

// Also let's check what images or media exist in it
const images = [...html.matchAll(/<img[^>]+src=["']([^"']+)["']/gi)].map(m => m[1]);
console.log('Images in main wrapper count:', images.length);
console.log('Sample images:', images.slice(0, 5));

const videos = [...html.matchAll(/<source[^>]+src=["']([^"']+)["']/gi)].map(m => m[1]);
console.log('Videos in main wrapper count:', videos.length);
console.log('Sample videos:', videos.slice(0, 5));
