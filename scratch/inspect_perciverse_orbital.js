const fs = require('fs');
const content = fs.readFileSync('src/components/PerciVerseOrbitalEcosystem.tsx', 'utf8');

console.log('Total characters in PerciVerseOrbitalEcosystem:', content.length);

// Let's print lines 140 to 220
const lines = content.split('\n');
console.log('--- Lines 140-200 ---');
console.log(lines.slice(140, 200).join('\n'));

console.log('--- Lines 600-700 ---');
console.log(lines.slice(600, 700).join('\n'));
