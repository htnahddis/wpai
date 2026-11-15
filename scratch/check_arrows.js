const fs = require('fs');
const html = fs.readFileSync('c:/Users/Aditya/Desktop/Code/CLIENT/percipere/wpai/scratch/clean_main_wrapper.html', 'utf8');

const arrowMatches = [...html.matchAll(/<button[^>]*class=["'][^"']*(?:arrow|splide|swiper)[^"']*["'][^>]*>/gi)].map(m => m[0]);
console.log('Arrow buttons:', arrowMatches);

const divArrows = [...html.matchAll(/<div[^>]*class=["'][^"']*(?:arrow|splide|swiper|carousel-controls)[^"']*["'][^>]*>/gi)].map(m => m[0]);
console.log('Div arrows / controls:', divArrows.slice(0, 10));
