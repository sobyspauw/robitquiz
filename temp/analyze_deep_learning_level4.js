const level4 = require('./src/questions/data/subjects/ai/Deep learning/level4.js');

// Level 4 limits: Questions ~120, Options ~100, Explanations ~350
const QUESTION_LIMIT = 120;
const OPTION_LIMIT = 100;
const EXPLANATION_LIMIT = 350;

level4.questions.forEach((q, idx) => {
  const qNum = idx + 1;
  let violations = [];

  // Check question lengths
  ['en', 'es', 'de', 'nl'].forEach(lang => {
    const qLen = q.question[lang]?.length || 0;
    if (qLen > QUESTION_LIMIT) {
      violations.push(`Q${lang.toUpperCase()}: ${qLen} chars`);
    }
  });

  // Check option lengths
  q.options.forEach((opt, optIdx) => {
    ['en', 'es', 'de', 'nl'].forEach(lang => {
      const optLen = opt[lang]?.length || 0;
      if (optLen > OPTION_LIMIT) {
        violations.push(`Opt${optIdx+1} ${lang.toUpperCase()}: ${optLen} chars`);
      }
    });
  });

  // Check explanation lengths
  ['en', 'es', 'de', 'nl'].forEach(lang => {
    const expLen = q.explanation[lang]?.length || 0;
    if (expLen > EXPLANATION_LIMIT) {
      violations.push(`Exp ${lang.toUpperCase()}: ${expLen} chars`);
    }
  });

  if (violations.length > 0) {
    console.log(`Q${qNum}: ${violations.join(', ')}`);
  }
});
