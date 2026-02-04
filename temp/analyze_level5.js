const level5 = require('./src/questions/data/subjects/ai/Deep learning/level5.js');

// Level 5 limits: Questions ~120, Options ~100, Explanations ~350
const QUESTION_LIMIT = 120;
const OPTION_LIMIT = 100;
const EXPLANATION_LIMIT = 350;

let extremeViolations = [];

level5.questions.forEach((q, idx) => {
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
