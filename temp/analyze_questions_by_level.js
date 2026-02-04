const fs = require('fs');
const path = require('path');

// Track statistics
const stats = {
  total: 0,
  needsShortening: 0,
  byLevel: {},
  examples: []
};

// Thresholds based on level
function getMaxLength(filename) {
  if (filename.includes('level1.js') || filename.includes('level2.js') ||
      filename.includes('level3.js') || filename.includes('level4.js') ||
      filename.includes('level5.js')) {
    return { level: '1-5', maxQuestion: 100, maxOption: 80 };
  } else if (filename.includes('level6.js') || filename.includes('level7.js') ||
             filename.includes('level8.js')) {
    return { level: '6-8', maxQuestion: 120, maxOption: 80 };
  } else if (filename.includes('level9.js') || filename.includes('level10.js')) {
    return { level: '9-10', maxQuestion: 140, maxOption: 80 };
  }
  return { level: 'unknown', maxQuestion: 120, maxOption: 80 };
}

function analyzeFile(filepath) {
  const content = fs.readFileSync(filepath, 'utf-8');
  const thresholds = getMaxLength(filepath);
  const levelKey = thresholds.level;

  if (!stats.byLevel[levelKey]) {
    stats.byLevel[levelKey] = {
      total: 0,
      needsShortening: 0,
      questionTooLong: 0,
      optionTooLong: 0
    };
  }

  // Find all questions with all 4 languages
  const questionRegex = /question:\s*\{([^}]+)\}/g;
  const questionMatches = [...content.matchAll(questionRegex)];

  questionMatches.forEach(match => {
    const questionBlock = match[1];
    stats.total++;
    stats.byLevel[levelKey].total++;

    let needsShortening = false;
    let questionTooLong = false;
    let optionTooLong = false;
    let maxQuestionLen = 0;
    let maxOptionLen = 0;

    // Check question length in all languages
    const enMatch = questionBlock.match(/en:\s*"([^"]+)"/);
    const esMatch = questionBlock.match(/es:\s*"([^"]+)"/);
    const deMatch = questionBlock.match(/de:\s*"([^"]+)"/);
    const nlMatch = questionBlock.match(/nl:\s*"([^"]+)"/);

    [enMatch, esMatch, deMatch, nlMatch].forEach(m => {
      if (m && m[1]) {
        const len = m[1].length;
        if (len > maxQuestionLen) maxQuestionLen = len;
        if (len > thresholds.maxQuestion) {
          needsShortening = true;
          questionTooLong = true;
        }
      }
    });

    // Find options for this question (next block after question)
    const restContent = content.substring(match.index + match[0].length);
    const optionsMatch = restContent.match(/options:\s*\[([\s\S]*?)\]/);

    if (optionsMatch) {
      const optionsBlock = optionsMatch[1];
      // Find all option texts
      const optionTexts = [...optionsBlock.matchAll(/(?:en|es|de|nl):\s*"([^"]+)"/g)];

      optionTexts.forEach(opt => {
        const len = opt[1].length;
        if (len > maxOptionLen) maxOptionLen = len;
        if (len > thresholds.maxOption) {
          needsShortening = true;
          optionTooLong = true;
        }
      });
    }

    if (needsShortening) {
      stats.needsShortening++;
      stats.byLevel[levelKey].needsShortening++;
      if (questionTooLong) stats.byLevel[levelKey].questionTooLong++;
      if (optionTooLong) stats.byLevel[levelKey].optionTooLong++;

      // Save first 10 examples
      if (stats.examples.length < 10 && enMatch) {
        stats.examples.push({
          file: filepath.split('subjects\\')[1] || filepath.split('subjects/')[1],
          level: levelKey,
          question: enMatch[1].substring(0, 100) + (enMatch[1].length > 100 ? '...' : ''),
          questionLen: maxQuestionLen,
          maxOptionLen: maxOptionLen,
          maxQuestion: thresholds.maxQuestion,
          maxOption: thresholds.maxOption
        });
      }
    }
  });
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filepath = path.join(dir, file);
    const stat = fs.statSync(filepath);

    if (stat.isDirectory()) {
      walkDir(filepath);
    } else if (file.endsWith('.js')) {
      try {
        analyzeFile(filepath);
      } catch (err) {
        // Skip files with errors
      }
    }
  }
}

// Run analysis
const subjectsDir = 'c:/Users/rbosch/OneDrive - A.S. Watson Europe/prive/RobitQuiz/src/questions/data/subjects';
walkDir(subjectsDir);

// Print results
console.log('='.repeat(80));
console.log('QUESTION LENGTH ANALYSIS BY LEVEL');
console.log('='.repeat(80));
console.log();
console.log(`Total questions analyzed: ${stats.total}`);
console.log(`Questions needing shortening: ${stats.needsShortening} (${(stats.needsShortening/stats.total*100).toFixed(1)}%)`);
console.log();

console.log('Breakdown by Level:');
console.log('-'.repeat(80));
for (const [level, data] of Object.entries(stats.byLevel).sort()) {
  const pct = (data.needsShortening / data.total * 100).toFixed(1);
  console.log(`Level ${level}:`);
  console.log(`  Total questions: ${data.total}`);
  console.log(`  Need shortening: ${data.needsShortening} (${pct}%)`);
  console.log(`    - Question text too long: ${data.questionTooLong}`);
  console.log(`    - Option text too long: ${data.optionTooLong}`);
  console.log();
}

console.log('='.repeat(80));
console.log('EXAMPLES OF QUESTIONS THAT NEED SHORTENING:');
console.log('='.repeat(80));
stats.examples.forEach((ex, i) => {
  console.log(`${i+1}. [Level ${ex.level}] ${ex.file}`);
  console.log(`   Question: ${ex.question}`);
  console.log(`   Question length: ${ex.questionLen} chars (max: ${ex.maxQuestion})`);
  console.log(`   Longest option: ${ex.maxOptionLen} chars (max: ${ex.maxOption})`);
  console.log();
});
