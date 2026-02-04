const fs = require('fs');
const path = require('path');

// Chosen limits for explanations
const explanationLimits = {
  '1-5': 200,
  '6-8': 250,
  '9-10': 300
};

const stats = {
  total: 0,
  needsShortening: 0,
  byLevel: {}
};

function getLevelCategory(filename) {
  if (filename.match(/level[1-5]\.js/)) return '1-5';
  if (filename.match(/level[6-8]\.js/)) return '6-8';
  if (filename.match(/level(9|10)\.js/)) return '9-10';
  return 'unknown';
}

function analyzeFile(filepath) {
  const content = fs.readFileSync(filepath, 'utf-8');
  const levelCat = getLevelCategory(filepath);

  if (levelCat === 'unknown') return;

  const maxLength = explanationLimits[levelCat];

  if (!stats.byLevel[levelCat]) {
    stats.byLevel[levelCat] = {
      total: 0,
      needsShortening: 0,
      maxLen: 0
    };
  }

  // Find all explanations
  const explanationRegex = /explanation:\s*\{([^}]+)\}/g;
  const matches = [...content.matchAll(explanationRegex)];

  matches.forEach(match => {
    const explBlock = match[1];
    stats.total++;
    stats.byLevel[levelCat].total++;

    let needsShortening = false;
    let maxLen = 0;

    // Check all languages
    const enMatch = explBlock.match(/en:\s*"([^"]+)"/);
    const esMatch = explBlock.match(/es:\s*"([^"]+)"/);
    const deMatch = explBlock.match(/de:\s*"([^"]+)"/);
    const nlMatch = explBlock.match(/nl:\s*"([^"]+)"/);

    [enMatch, esMatch, deMatch, nlMatch].forEach(m => {
      if (m && m[1]) {
        const len = m[1].length;
        if (len > maxLen) maxLen = len;
        if (len > maxLength) {
          needsShortening = true;
        }
      }
    });

    if (maxLen > stats.byLevel[levelCat].maxLen) {
      stats.byLevel[levelCat].maxLen = maxLen;
    }

    if (needsShortening) {
      stats.needsShortening++;
      stats.byLevel[levelCat].needsShortening++;
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
      } catch (err) {}
    }
  }
}

// Run analysis
walkDir('c:/Users/rbosch/OneDrive - A.S. Watson Europe/prive/RobitQuiz/src/questions/data/subjects');

// Print results
console.log('='.repeat(80));
console.log('EXPLANATION LENGTH ANALYSIS');
console.log('='.repeat(80));
console.log();
console.log('Limieten:');
console.log('  - Level 1-5: Max 200 chars');
console.log('  - Level 6-8: Max 250 chars');
console.log('  - Level 9-10: Max 300 chars');
console.log();
console.log(`Total explanations: ${stats.total}`);
console.log(`Need shortening: ${stats.needsShortening} (${(stats.needsShortening/stats.total*100).toFixed(1)}%)`);
console.log();

console.log('Details per level:');
console.log('-'.repeat(80));
for (const [level, data] of Object.entries(stats.byLevel).sort()) {
  const pct = (data.needsShortening / data.total * 100).toFixed(1);
  console.log(`Level ${level}:`);
  console.log(`  Total: ${data.total}`);
  console.log(`  Need shortening: ${data.needsShortening} (${pct}%)`);
  console.log(`  Longest found: ${data.maxLen} chars`);
  console.log(`  Limit: ${explanationLimits[level]} chars`);
  console.log();
}

console.log('='.repeat(80));
console.log('COMBINED TOTAAL (Scenario Soepel + Explanations):');
console.log('='.repeat(80));
console.log();
console.log('Vragen + Opties (Scenario Soepel): 4,204 aanpassingen');
console.log(`Explanations: ${stats.needsShortening} aanpassingen`);
console.log(`TOTAAL: ${4204 + stats.needsShortening} aanpassingen`);
console.log();
