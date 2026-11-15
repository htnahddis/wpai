const fs = require('fs');
const html = fs.readFileSync('c:/Users/Aditya/Desktop/Code/CLIENT/percipere/wpai/scratch/extracted_main_wrapper.html', 'utf8');

const swiperWrapperMatch = html.match(/<ul[^>]*class=["'][^"']*swiper-wrapper[^"']*["'][^>]*>/i);
console.log('Swiper wrapper tag:', swiperWrapperMatch ? swiperWrapperMatch[0] : 'not found');

const slideMatches = [...html.matchAll(/<li[^>]*class=["'][^"']*swiper-slide[^"']*["'][^>]*>/gi)].map(m => m[0]);
console.log('First 3 slide tags:');
console.log(slideMatches.slice(0, 3));
