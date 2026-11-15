const fs = require('fs');
const path = require('path');

const srcDir = 'public/Free AI Agent Builder _ Build your Agents with AI _ monday.com_files';
const destDir = 'public/vendor';

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// 1. Swiper JS
let swiperJs = fs.readFileSync(path.join(srcDir, 'swiper-bundle.min.js.download'), 'utf8');
swiperJs += '\nif(typeof window!=="undefined"){window.Swiper=Swiper;}if(typeof globalThis!=="undefined"){globalThis.Swiper=Swiper;}\n';
fs.writeFileSync(path.join(destDir, 'swiper-bundle.min.js'), swiperJs);

// 2. Swiper CSS
const swiperCss = fs.readFileSync(path.join(srcDir, 'swiper-bundle.min.css'), 'utf8');
fs.writeFileSync(path.join(destDir, 'swiper-bundle.min.css'), swiperCss);

// 3. GSAP
let gsapJs = fs.readFileSync(path.join(srcDir, 'gsap.min.js.download'), 'utf8');
gsapJs += '\nif(typeof window!=="undefined"){window.gsap=gsap;}if(typeof globalThis!=="undefined"){globalThis.gsap=gsap;}\n';
fs.writeFileSync(path.join(destDir, 'gsap.min.js'), gsapJs);

// 4. ScrollTrigger
let stJs = fs.readFileSync(path.join(srcDir, 'ScrollTrigger.min.js.download'), 'utf8');
stJs += '\nif(typeof window!=="undefined"){window.ScrollTrigger=ScrollTrigger;}if(typeof globalThis!=="undefined"){globalThis.ScrollTrigger=ScrollTrigger;}\n';
fs.writeFileSync(path.join(destDir, 'ScrollTrigger.min.js'), stJs);

console.log('Vendor files created successfully in public/vendor!');
