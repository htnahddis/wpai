const fs = require('fs');
const html = fs.readFileSync('c:/Users/Aditya/Desktop/Code/CLIENT/percipere/wpai/scratch/clean_main_wrapper.html', 'utf8');

const heroLogoMatch = html.match(/<img[^>]*class=["'][^"']*logo-2rem[^"']*["'][^>]*>/i);
console.log('Hero logo tag:', heroLogoMatch ? heroLogoMatch[0] : 'not found');

const ctaLogoMatch = html.match(/<img[^>]*class=["'][^"']*agents_monday-agents-logo[^"']*["'][^>]*>/i);
console.log('CTA logo tag:', ctaLogoMatch ? ctaLogoMatch[0] : 'not found');
