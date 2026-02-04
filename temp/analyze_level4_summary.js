// Clear cache
const modulePath = require.resolve('./src/questions/data/subjects/ai/Deep learning/level4.js');
if (require.cache[modulePath]) {
  delete require.cache[modulePath];
}

const level4 = require('./src/questions/data/subjects/ai/Deep learning/level4.js');

// Level 4 limits
const OPTION_EXTREME = 140;  // Extreme violations
const OPTION_MAJOR = 120;    // Major violations
const OPTION_MINOR = 100;    // Minor violations (acceptable)

let extreme = 0, major = 0, minor = 0, total = 0;

level4.questions.forEach((q, idx) => {
  q.options.forEach((opt) => {
    ['en', 'es', 'de', 'nl'].forEach(lang => {
      const len = opt[lang]?.length || 0;
      total++;
      if (len > OPTION_EXTREME) extreme++;
      else if (len > OPTION_MAJOR) major++;
      else if (len > OPTION_MINOR) minor++;
    });
  });
});

console.log('Deep Learning Level 4 - Option Analysis:');
console.log('==========================================');
console.log(`Total options checked: ${total}`);
console.log(`Extreme (>140 chars): ${extreme} - MUST FIX`);
console.log(`Major (120-140 chars): ${major} - Should fix`);
console.log(`Minor (100-120 chars): ${minor} - Acceptable per guidelines`);
console.log(`Good (<100 chars): ${total - extreme - major - minor}`);
