const fs = require('fs');
let html = fs.readFileSync('c:/Users/Aditya/Desktop/Code/CLIENT/percipere/wpai/scratch/extracted_main_wrapper.html', 'utf8');

// 1. Clean container classes
html = html.replace(/class="swiper agents-carousel[^"]*"/, 'class="swiper agents-carousel"');

// 2. Clean wrapper tag
html = html.replace(/<ul class="swiper-wrapper for-agents"[^>]*>/, '<ul class="swiper-wrapper for-agents">');

// 3. Clean each slide tag
html = html.replace(/<li class="swiper-slide for-agents[^"]*"[^>]*>/g, '<li class="swiper-slide for-agents">');

// Also check if there's pagination and navigation in swiper
console.log('Has pagination element?', html.includes('swiper-pagination'));
console.log('Has swiper navigation?', html.includes('swiper-button-next') || html.includes('custom-arrow-next-agents') || html.includes('arrow-for-agents'));

fs.writeFileSync('c:/Users/Aditya/Desktop/Code/CLIENT/percipere/wpai/scratch/clean_main_wrapper.html', html);
console.log('Saved clean_main_wrapper.html');
