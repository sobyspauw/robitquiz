#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'src', 'questions', 'data', 'subjects');
const stats = {
  categories: {},
  totalFiles: 0,
  totalQuestions: 0,
  placeholders: 0
};

function scanDir(dir, category) {
  category = category || '';
  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dir, item.name);

    if (item.isDirectory()) {
      const newCategory = category || item.name;
      if (!stats.categories[newCategory]) {
        stats.categories[newCategory] = { files: 0, questions: 0 };
      }
      scanDir(fullPath, newCategory);
    } else if (item.name.match(/^level[0-9]+\.js$/)) {
      stats.totalFiles++;
      const content = fs.readFileSync(fullPath, 'utf8');
      const questionCount = (content.match(/"question":/g) || []).length;
      stats.totalQuestions += questionCount;

      if (category && stats.categories[category]) {
        stats.categories[category].files++;
        stats.categories[category].questions += questionCount;
      }

      if (content.includes('"Correct answer"')) {
        stats.placeholders++;
      }
    }
  }
}

scanDir(baseDir);

console.log('');
console.log('═══════════════════════════════════════════════════════════════════════');
console.log('     ROBITQUIZ QUESTION GENERATOR - FINAL VERIFICATION REPORT');
console.log('═══════════════════════════════════════════════════════════════════════');
console.log('');
console.log('📊 OVERALL STATISTICS');
console.log('─────────────────────────────────────────────────────────────────────');
console.log('  Total Files:              ', stats.totalFiles);
console.log('  Total Questions:          ', stats.totalQuestions.toLocaleString());
console.log('  Files with Placeholders:  ', stats.placeholders);
console.log('  Files with Real Answers:  ', stats.totalFiles - stats.placeholders);
console.log('');
console.log('  ✅ Completion Rate:        ', ((stats.totalFiles - stats.placeholders)/stats.totalFiles*100).toFixed(1) + '%');
console.log('');
console.log('📁 BREAKDOWN BY CATEGORY');
console.log('─────────────────────────────────────────────────────────────────────');

const categories = Object.keys(stats.categories).sort();
categories.forEach(cat => {
  const c = stats.categories[cat];
  const name = cat.padEnd(25);
  const files = c.files.toString().padStart(4);
  const questions = c.questions.toLocaleString().padStart(8);
  console.log('  ' + name + files + ' files   ' + questions + ' questions');
});

console.log('');
console.log('═══════════════════════════════════════════════════════════════════════');
console.log('  🎯 STATUS: ' + (stats.placeholders === 0 ? '✅ ALL QUESTIONS COMPLETE!' : '⚠️  INCOMPLETE'));
console.log('═══════════════════════════════════════════════════════════════════════');
console.log('');
