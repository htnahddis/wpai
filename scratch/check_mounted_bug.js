const fs = require('fs');

const tsx = fs.readFileSync('src/components/views/MondayAgentStudioClonedView.tsx', 'utf8');

console.log('1. Checking mounted logic...');
if (tsx.includes('if (!mounted)')) {
  console.log('Found if (!mounted) in TSX');
} else {
  console.log('No if (!mounted) in TSX');
}

console.log('2. Checking containerRef attachment...');
console.log(tsx.substring(tsx.indexOf('ref={containerRef}'), tsx.indexOf('ref={containerRef}') + 150));
