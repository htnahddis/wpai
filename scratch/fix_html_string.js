const fs = require('fs');

const file = 'src/components/views/MondayAgentStudioClonedView.tsx';
let content = fs.readFileSync(file, 'utf8');

// Find the start of PERCIPERE_AGENT_STUDIO_HTML
const prefix = 'const PERCIPERE_AGENT_STUDIO_HTML = ';
const pIdx = content.indexOf(prefix);
const compIdx = content.indexOf('export default function MondayAgentStudioClonedView()');

console.log('pIdx:', pIdx);
console.log('compIdx:', compIdx);

if (pIdx !== -1 && compIdx !== -1) {
  let rawHtmlString = content.slice(pIdx + prefix.length, compIdx).trim();
  // If it starts with quote, strip leading and trailing quote/semicolon
  if (rawHtmlString.startsWith('"')) {
    rawHtmlString = rawHtmlString.slice(1);
  }
  if (rawHtmlString.endsWith('";')) {
    rawHtmlString = rawHtmlString.slice(0, -2);
  } else if (rawHtmlString.endsWith('"')) {
    rawHtmlString = rawHtmlString.slice(0, -1);
  } else if (rawHtmlString.endsWith(';')) {
    rawHtmlString = rawHtmlString.slice(0, -1);
  }

  // Unescape existing \" to regular "
  let cleanHtml = rawHtmlString.replace(/\\"/g, '"');
  // Remove any raw newlines inside the HTML string to keep it clean and robust
  cleanHtml = cleanHtml.replace(/\r?\n/g, ' ');

  // Re-encode properly with JSON.stringify
  const validEncodedHtml = JSON.stringify(cleanHtml);

  const newContent = content.slice(0, pIdx + prefix.length) + validEncodedHtml + ';\n\n' + content.slice(compIdx);
  fs.writeFileSync(file, newContent, 'utf8');
  console.log('Fixed PERCIPERE_AGENT_STUDIO_HTML properly.');
}
