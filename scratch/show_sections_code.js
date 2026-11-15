const fs = require('fs');
const content = fs.readFileSync('src/components/views/MondayAgentStudioClonedView.tsx', 'utf8');

function showSection(name, startTag, endTag) {
  console.log(`\n===================== ${name} =====================`);
  const s = content.indexOf(startTag);
  const e = endTag ? content.indexOf(endTag, s) : s + 2000;
  console.log(content.slice(s, e));
}

showSection('SECTION 3: BUILD POWERFUL AI AGENTS', '<div class=\\"agents-tagline\\">Percipere Agent Studio</div>', '<section class=\\"agents-hidden-section\\">');
showSection('SECTION 5: CORE CAPABILITIES', '<section class=\\"background-color-black\\">', '<section><div class=\\"m_padding-global\\"><div class=\\"m_container-xlarge\\"><div class=\\"m_padding-section-large\\">');
showSection('SECTION 6: AI YOU CAN TRUST', '<section><div class=\\"m_padding-global\\"><div class=\\"m_container-xlarge\\"><div class=\\"m_padding-section-large\\">', '<section class=\\"agents-bg-section\\">');
showSection('SECTION 7: CTA SECTION', '<section class=\\"agents-bg-section\\">', '<section class=\\"agents-faq\\">');
showSection('SECTION 8: FAQ', '<section class=\\"agents-faq\\">', '</section></section>');
