const fs = require('fs');
const html = fs.readFileSync('c:/Users/Aditya/Desktop/Code/CLIENT/percipere/wpai/scratch/extracted_main_wrapper.html', 'utf8');

const swiperIndex = html.indexOf('agents-carousel');
console.log('Swiper index:', swiperIndex);
console.log('Swiper tag and classes:', html.slice(swiperIndex - 50, swiperIndex + 150));
