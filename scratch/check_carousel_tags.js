const fs = require('fs');
const file = fs.readFileSync('src/components/views/MondayAgentStudioClonedView.tsx', 'utf8');

const regex = /<div[^>]*class=\"[^\"]*agents-carousel[^\"]*\"[^>]*>/gi;
let m;
while ((m = regex.exec(file)) !== null) {
  console.log('Matched agents-carousel tag in TSX:', m[0]);
}

// Also check ul swiper-wrapper
const regex2 = /<ul[^>]*class=\"[^\"]*swiper-wrapper[^\"]*\"[^>]*>/gi;
while ((m = regex2.exec(file)) !== null) {
  console.log('Matched swiper-wrapper tag in TSX:', m[0]);
}

// Also check first slide
const regex3 = /<li[^>]*class=\"[^\"]*swiper-slide[^\"]*\"[^>]*>/gi;
let count = 0;
while ((m = regex3.exec(file)) !== null && count < 3) {
  console.log('Matched swiper-slide tag in TSX:', m[0]);
  count++;
}
