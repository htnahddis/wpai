const fs = require('fs');
const html = fs.readFileSync('c:/Users/Aditya/Desktop/Code/CLIENT/percipere/wpai/scratch/extracted_main_wrapper.html', 'utf8');

const duplicateSlides = (html.match(/swiper-slide-duplicate/g) || []).length;
console.log('Duplicate slides count:', duplicateSlides);

const totalSlides = (html.match(/class=["'][^"']*swiper-slide[^"']*["']/g) || []).length;
console.log('Total swiper slides in HTML:', totalSlides);
