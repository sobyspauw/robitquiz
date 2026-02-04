// Clear require cache
delete require.cache[require.resolve('./src/questions/data/subjects/ai/Deep learning/level4.js')];

const level4 = require('./src/questions/data/subjects/ai/Deep learning/level4.js');

console.log('Total questions:', level4.questions.length);
let extremeCount = 0;

level4.questions.forEach((q, idx) => {
  const qNum = idx + 1;
  let violations = [];

  // Check for extreme violations >140 chars in options
  q.options.forEach((opt, optIdx) => {
    ['en', 'es', 'de', 'nl'].forEach(lang => {
      const optLen = opt[lang]?.length || 0;
      if (optLen > 140) {
        violations.push(`Opt${optIdx+1} ${lang.toUpperCase()}: ${optLen} chars`);
        extremeCount++;
      }
    });
  });

  if (violations.length > 0) {
    console.log(`Q${qNum}: ${violations.join(', ')}`);
  }
});

console.log('\nTotal extreme violations (>140 chars):', extremeCount);
