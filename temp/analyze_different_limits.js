const fs = require('fs');
const path = require('path');

// Test different threshold scenarios
const scenarios = [
  {
    name: "Strikt (huidige voorstel)",
    levels: {
      '1-5': { question: 100, option: 80 },
      '6-8': { question: 120, option: 80 },
      '9-10': { question: 140, option: 80 }
    }
  },
  {
    name: "Gematigd",
    levels: {
      '1-5': { question: 110, option: 90 },
      '6-8': { question: 130, option: 90 },
      '9-10': { question: 150, option: 90 }
    }
  },
  {
    name: "Soepel",
    levels: {
      '1-5': { question: 120, option: 100 },
      '6-8': { question: 140, option: 100 },
      '9-10': { question: 160, option: 100 }
    }
  },
  {
    name: "Minimaal",
    levels: {
      '1-5': { question: 130, option: 110 },
      '6-8': { question: 150, option: 110 },
      '9-10': { question: 170, option: 110 }
    }
  }
];

function getLevelCategory(filename) {
  if (filename.match(/level[1-5]\.js/)) return '1-5';
  if (filename.match(/level[6-8]\.js/)) return '6-8';
  if (filename.match(/level(9|10)\.js/)) return '9-10';
  return 'unknown';
}

function analyzeWithScenario(scenario) {
  const stats = {
    total: 0,
    needsShortening: 0,
    byLevel: {}
  };

  function analyzeFile(filepath) {
    const content = fs.readFileSync(filepath, 'utf-8');
    const levelCat = getLevelCategory(filepath);

    if (levelCat === 'unknown') return;

    const thresholds = scenario.levels[levelCat];

    if (!stats.byLevel[levelCat]) {
      stats.byLevel[levelCat] = {
        total: 0,
        needsShortening: 0,
        questionTooLong: 0,
        optionTooLong: 0
      };
    }

    const questionRegex = /question:\s*\{([^}]+)\}/g;
    const questionMatches = [...content.matchAll(questionRegex)];

    questionMatches.forEach(match => {
      const questionBlock = match[1];
      stats.total++;
      stats.byLevel[levelCat].total++;

      let needsShortening = false;
      let questionTooLong = false;
      let optionTooLong = false;

      // Check question length
      const enMatch = questionBlock.match(/en:\s*"([^"]+)"/);
      const esMatch = questionBlock.match(/es:\s*"([^"]+)"/);
      const deMatch = questionBlock.match(/de:\s*"([^"]+)"/);
      const nlMatch = questionBlock.match(/nl:\s*"([^"]+)"/);

      [enMatch, esMatch, deMatch, nlMatch].forEach(m => {
        if (m && m[1] && m[1].length > thresholds.question) {
          needsShortening = true;
          questionTooLong = true;
        }
      });

      // Check options
      const restContent = content.substring(match.index + match[0].length);
      const optionsMatch = restContent.match(/options:\s*\[([\s\S]*?)\]/);

      if (optionsMatch) {
        const optionTexts = [...optionsMatch[1].matchAll(/(?:en|es|de|nl):\s*"([^"]+)"/g)];
        optionTexts.forEach(opt => {
          if (opt[1].length > thresholds.option) {
            needsShortening = true;
            optionTooLong = true;
          }
        });
      }

      if (needsShortening) {
        stats.needsShortening++;
        stats.byLevel[levelCat].needsShortening++;
        if (questionTooLong) stats.byLevel[levelCat].questionTooLong++;
        if (optionTooLong) stats.byLevel[levelCat].optionTooLong++;
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

// Analyze all scenarios
console.log('='.repeat(80));
console.log('VERGELIJKING VERSCHILLENDE LIMIETEN');
console.log('='.repeat(80));
console.log();

const results = [];

scenarios.forEach(scenario => {
  const stats = analyzeWithScenario(scenario);
  results.push({ scenario, stats });
});

// Print comparison table
console.log('OVERZICHT:');
console.log('-'.repeat(80));
console.log();

results.forEach(({ scenario, stats }) => {
  const pct = (stats.needsShortening / stats.total * 100).toFixed(1);
  console.log(`${scenario.name}:`);
  console.log(`  Vragen: L1-5=${scenario.levels['1-5'].question}, L6-8=${scenario.levels['6-8'].question}, L9-10=${scenario.levels['9-10'].question}`);
  console.log(`  Opties: ${scenario.levels['1-5'].option} chars (alle levels)`);
  console.log(`  → Te verkorten: ${stats.needsShortening} van ${stats.total} (${pct}%)`);
  console.log();
});

console.log('='.repeat(80));
console.log('DETAILS PER SCENARIO:');
console.log('='.repeat(80));

results.forEach(({ scenario, stats }) => {
  console.log();
  console.log(`${scenario.name.toUpperCase()}:`);
  console.log('-'.repeat(80));

  for (const [level, data] of Object.entries(stats.byLevel).sort()) {
    const pct = (data.needsShortening / data.total * 100).toFixed(1);
    console.log(`Level ${level}: ${data.needsShortening}/${data.total} (${pct}%) | Vragen: ${data.questionTooLong} | Opties: ${data.optionTooLong}`);
  }
});

console.log();
console.log('='.repeat(80));
console.log('AANBEVELING:');
console.log('='.repeat(80));
console.log();
console.log('Het "Gematigd" scenario lijkt een goede balans:');
console.log('  - Level 1-5: Max 110 chars (vragen), 90 chars (opties)');
console.log('  - Level 6-8: Max 130 chars (vragen), 90 chars (opties)');
console.log('  - Level 9-10: Max 150 chars (vragen), 90 chars (opties)');
console.log();
console.log('Dit geeft complexere levels meer ruimte, maar houdt alles leesbaar.');
