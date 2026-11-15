const fs = require('fs');

const cssPath = 'public/Free AI Agent Builder _ Build your Agents with AI _ monday.com_files/monday-agent-studio-head.css';
let css = fs.readFileSync(cssPath, 'utf8');

// Fix .swiper-agents-comp overflow to hidden
css = css.replace(
  /\.swiper-agents-comp\s*\{[^}]*\}/,
  `.swiper-agents-comp {
  position: relative;
  width: 100%;
  overflow: hidden !important;
}`
);

// Add uninitialized hiding rules if not already present
if (!css.includes('.agents-carousel:not(.swiper-initialized)')) {
  css = css.replace(
    /\.agents-carousel\s*\{[^}]*\}/,
    `.agents-carousel {
  overflow: visible !important;
  padding: 20px 0 50px 0 !important;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
}

.agents-carousel:not(.swiper-initialized) {
  opacity: 0;
  visibility: hidden;
  max-height: 520px;
  overflow: hidden;
}

.agents-carousel.swiper-initialized {
  opacity: 1;
  visibility: visible;
  transition: opacity 0.35s ease;
}`
  );
}

fs.writeFileSync(cssPath, css, 'utf8');
console.log('Updated monday-agent-studio-head.css successfully!');
