const fs = require('fs');
const content = fs.readFileSync('src/components/views/MondayAgentStudioClonedView.tsx', 'utf8');

console.log('1. background-color-black count:', (content.match(/background-color-black/g) || []).length);
console.log('2. percipere-core-capabilities-section exists:', content.includes('percipere-core-capabilities-section'));
console.log('3. handleCapTabClick exists:', content.includes('handleCapTabClick'));
console.log('4. Tab buttons present:');
['knowledge', 'actions', 'integrations', 'autonomy', 'guardrails'].forEach(t => {
  console.log('   - data-tab-id="' + t + '":', content.includes(`data-tab-id=\\"${t}\\"`));
  console.log('   - data-panel-id="' + t + '":', content.includes(`data-panel-id=\\"${t}\\"`));
});

console.log('5. Monday core images remaining:');
[
  '69886985c5608f06ea18418f_Group 2147204020.avif',
  '698869a1465b61765c4158c7_Group 2147203924.avif',
  '698869b3c1b394830bb662c2_Group 2147204023.avif',
  '698866ff856055bb42190ab8_Group 2147204022.avif',
  '69849af7b2f1d686b69038a6_Group 2147203997.png'
].forEach(img => {
  console.log('   - ' + img + ':', content.includes(img));
});
