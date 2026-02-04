const data = require('./src/questions/data/subjects/ai/Deep learning/level8.js');
const questions = data.questions;

console.log('=== Deep Learning Level 8 - Character Count Analysis ===\n');

let extremeViolations = [];
let extremeCount = 0;

questions.forEach((q, idx) => {
  const qNum = idx + 1;
  let violations = [];

  // Check question
  ['en', 'es', 'de', 'nl'].forEach(lang => {
    const len = q.question[lang].length;
    if (len > 140) {
      violations.push(`Question ${lang.toUpperCase()}: ${len} chars`);
      extremeCount++;
    }
  });

  // Check options
  q.options.forEach((opt, optIdx) => {
    ['en', 'es', 'de', 'nl'].forEach(lang => {
      const len = opt[lang].length;
      if (len > 140) {
        violations.push(`Option ${optIdx + 1} ${lang.toUpperCase()}: ${len} chars`);
        extremeCount++;
      }
    });
  });

  if (violations.length > 0) {
    extremeViolations.push({ qNum, violations });
  }
});

console.log('EXTREME VIOLATIONS (>140 chars):\n');
extremeViolations.forEach(v => {
  console.log(`Q${v.qNum}:`);
  v.violations.forEach(viol => console.log(`  ${viol}`));
});

console.log(`\nTotal extreme violations: ${extremeCount}`);
console.log(`Questions affected: ${extremeViolations.length}`);
