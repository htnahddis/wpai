const fs = require('fs');
const path = require('path');

const srcDir = 'public/monday.com _ Dashboards & Reporting_files';
const destDir = 'public/percisuite';

const files = fs.readdirSync(srcDir);
console.log(`Copying all ${files.length} files from ${srcDir} to ${destDir}...`);

for (const file of files) {
  fs.copyFileSync(path.join(srcDir, file), path.join(destDir, file));
}

console.log(`All ${fs.readdirSync(destDir).length} files copied to ${destDir}!`);
