const fs = require('fs');
const path = require('path');

// Different scenarios for explanations
const scenarios = [
  { name: "Strikt", limits: { '1-5': 200, '6-8': 250, '9-10': 300 } },
  { name: "Gematigd", limits: { '1-5': 250, '6-8': 300, '9-10': 350 } },
  { name: "Soepel", limits: { '1-5': 300, '6-8': 350, '9-10': 400 } },
  { name: "Ruim", limits: { '1-5': 350, '6-8': 400, '9-10': 450 } }
];

function getLevelCategory(filename) {
  if (filename.match(/level[1-5]\.js/)) return '1-5';
  if (filename.match(/level[6-8]\.js/)) return '6-8';
  if (filename.match(/level(9|10)\.js/)) return '9-10';
  return 'unknown';
}

function analyzeWithScenario(limits) {
  const stats = { total: 0, needsShortening: 0, byLevel: {} };

  function analyzeFile(filepath) {
    const content = fs.readFileSync(filepath, 'utf-8');
    const levelCat = getLevelCategory(filepath);

    if (levelCat === 'unknown') return;

    const maxLength = limits[levelCat];

    if (!stats.byLevel[levelCat]) {
      stats.byLevel[levelCat] = { total: 0, needsShortening: 0 };
    }

    const explanationRegex = /explanation:\s*\{([^}]+)\}/g;
    const matches = [...content.matchAll(explanationRegex)];

    matches.forEach(match => {
      const explBlock = match[1];
      stats.total++;
      stats.byLevel[levelCat].total++;

      let needsShortening = false;

      const enMatch = explBlock.match(/en:\s*"([^"]+)"/);
      const esMatch = explBlock.match(/es:\s*"([^"]+)"/);
      const deMatch = explBlock.match(/de:\s*"([^"]+)"/);
      const nlMatch = explBlock.match(/nl:\s*"([^"]+)"/);

      [enMatch, esMatch, deMatch, nlMatch].forEach(m => {
        if (m && m[1] && m[1].length > maxLength) {
          needsShortening = true;
        }
      });

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

  walkDir('c:/Users/rbosch/OneDrive - A.S. Watson Europe/prive/RobitQuiz/src/questions/data/subjects');
  return stats;
}

console.log('='.repeat(80));
console.log('EXPLANATION SCENARIOS VERGELIJKING');
console.log('='.repeat(80));
console.log();

scenarios.forEach(scenario => {
  const stats = analyzeWithScenario(scenario.limits);
  const pct = (stats.needsShortening / stats.total * 100).toFixed(1);

  console.log(`${scenario.name}:`);
  console.log(`  L1-5: ${scenario.limits['1-5']}, L6-8: ${scenario.limits['6-8']}, L9-10: ${scenario.limits['9-10']}`);
  console.log(`  → ${stats.needsShortening} van ${stats.total} (${pct}%)`);

  for (const [level, data] of Object.entries(stats.byLevel).sort()) {
    const levelPct = (data.needsShortening / data.total * 100).toFixed(1);
    console.log(`     Level ${level}: ${data.needsShortening}/${data.total} (${levelPct}%)`);
  }
  console.log();
});

console.log('='.repeat(80));
console.log('TOTAAL WERK (Scenario Soepel vragen + opties):');
console.log('='.repeat(80));
console.log();
scenarios.forEach(scenario => {
  const stats = analyzeWithScenario(scenario.limits);
  const total = 4204 + stats.needsShortening;
  console.log(`${scenario.name} explanations: ${total.toLocaleString()} totale aanpassingen`);
  console.log(`  (4,204 vragen/opties + ${stats.needsShortening.toLocaleString()} explanations)`);
  console.log();
});
