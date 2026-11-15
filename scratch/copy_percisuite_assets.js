const fs = require('fs');
const path = require('path');

const srcDir = 'public/monday.com _ Dashboards & Reporting_files';
const destDir = 'public/percisuite';

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Find all files referenced in monday.com _ Dashboards & Reporting.html
const html = fs.readFileSync('public/monday.com _ Dashboards & Reporting.html', 'utf-8');
const regex = /Dashboards\s*(?:&|&amp;)\s*Reporting_files\/([^"'\s>\)]+)/g;
let match;
const assets = new Set();

while ((match = regex.exec(html)) !== null) {
  let file = decodeURIComponent(match[1]);
  // Clean off query params if any
  file = file.split('?')[0].split('#')[0];
  assets.add(file);
}

console.log(`Copying ${assets.size} assets to ${destDir}...`);

let copied = 0;
for (const file of assets) {
  const srcPath = path.join(srcDir, file);
  const destPath = path.join(destDir, file);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    copied++;
  } else {
    console.log(`Missing on disk: ${file}`);
  }
}

console.log(`Successfully copied ${copied} assets to ${destDir}!`);
