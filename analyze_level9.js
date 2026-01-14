const data = require('./src/questions/data/subjects/ai/Deep learning/level9.js');
const questions = data.questions;

console.log('=== Deep Learning Level 9 - Extreme Violations (>140 chars) ===\n');

let extremeCount = 0;
let affected = [];

questions.forEach((q, idx) => {
  const qNum = idx + 1;
  let violations = [];

  ['en', 'es', 'de', 'nl'].forEach(lang => {
    if (q.question[lang].length > 140) {
      violations.push(`Question ${lang.toUpperCase()}: ${q.question[lang].length}`);
      extremeCount++;
    }
  });

  q.options.forEach((opt, optIdx) => {
    ['en', 'es', 'de', 'nl'].forEach(lang => {
      if (opt[lang].length > 140) {
        violations.push(`Opt${optIdx + 1} ${lang.toUpperCase()}: ${opt[lang].length}`);
        extremeCount++;
      }
    });
  });

  if (violations.length > 0) {
    affected.push({ qNum, violations });
  }
});

affected.forEach(v => {
  console.log(`Q${v.qNum}:`);
  v.violations.forEach(viol => console.log(`  ${viol}`));
});

console.log(`\nTotal: ${extremeCount} violations in ${affected.length} questions`);
