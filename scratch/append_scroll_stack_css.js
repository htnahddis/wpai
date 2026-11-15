const fs = require('fs');
const cssPath = 'public/Free AI Agent Builder _ Build your Agents with AI _ monday.com_files/monday-agent-studio-head.css';
let css = fs.readFileSync(cssPath, 'utf8');

const scrollStackCss = `
/* =========================================================
   Enterprise Agents - Interactive Sticky Scroll Stack
   ========================================================= */
.percipere-enterprise-stack-section {
  position: relative;
  z-index: 5;
}

.percipere-scroll-stack {
  position: relative !important;
  display: flex !important;
  flex-direction: column !important;
  gap: 3.5rem !important;
  padding-bottom: 6rem !important;
}

.percipere-scroll-stack .agents_readymade-card {
  position: sticky !important;
  border-radius: 1.5rem !important;
  box-shadow: 0 15px 45px -10px rgba(0, 0, 0, 0.3) !important;
  display: grid !important;
  grid-template-columns: 1fr 1fr !important;
  gap: 2rem !important;
  align-items: center !important;
  overflow: hidden !important;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
  will-change: transform;
}

@media screen and (max-width: 991px) {
  .percipere-scroll-stack .agents_readymade-card {
    grid-template-columns: 1fr !important;
    gap: 1.5rem !important;
  }
}

.percipere-scroll-stack .stack-card-1 {
  top: 90px !important;
  z-index: 10 !important;
}

.percipere-scroll-stack .stack-card-2 {
  top: 115px !important;
  z-index: 20 !important;
}

.percipere-scroll-stack .stack-card-3 {
  top: 140px !important;
  z-index: 30 !important;
}

.percipere-scroll-stack .stack-card-4 {
  top: 165px !important;
  z-index: 40 !important;
}

.percipere-scroll-stack .agents_readymade-grid-image-wrapper {
  margin: 0 !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  padding: 1.5rem !important;
}

.percipere-scroll-stack .agents_readymade-grid-image {
  border-radius: 1rem !important;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15) !important;
  max-height: 380px !important;
  width: auto !important;
  max-width: 100% !important;
  object-fit: contain !important;
}
`;

if (!css.includes('.percipere-scroll-stack')) {
  css += scrollStackCss;
  fs.writeFileSync(cssPath, css, 'utf8');
  console.log('Appended scroll stack CSS to monday-agent-studio-head.css');
} else {
  console.log('Scroll stack CSS already present');
}
