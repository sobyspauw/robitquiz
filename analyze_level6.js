const level6 = require('./src/questions/data/subjects/ai/Deep learning/level6.js');

// Level 6 limits: Questions ~120, Options ~100, Explanations ~400
let extremeViolations = [];

level6.questions.forEach((q, idx) => {
  const qNum = idx + 1;
  let violations = [];

  // Check option lengths - focus on >140 chars (extreme)
  q.options.forEach((opt, optIdx) => {
    ['en', 'es', 'de', 'nl'].forEach(lang => {
      const optLen = opt[lang]?.length || 0;
      if (optLen > 140) {
        violations.push(`Opt${optIdx+1} ${lang.toUpperCase()}: ${optLen}`);
        extremeViolations.push({q: qNum, type: 'option', lang, len: optLen});
      }
    });
  });

  if (violations.length > 0) {
    console.log(`Q${qNum}: ${violations.join(', ')}`);
  }
});

console.log(`\nTotal extreme violations (>140): ${extremeViolations.length}`);
console.log(`Total questions: ${level6.questions.length}`);
