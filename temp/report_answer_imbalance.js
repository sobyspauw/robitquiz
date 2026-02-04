// Report files with worst answer length imbalance
const fs = require('fs');
const path = require('path');

function analyzeFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const questionsMatch = content.match(/questions:\s*\[([\s\S]*)\]\s*\};/);
    if (!questionsMatch) return null;

    const questionsStr = questionsMatch[1];
    const questionMatches = questionsStr.matchAll(/options:\s*\[([\s\S]*?)\],\s*correct:\s*(\d+)/g);

    let correctIsLongest = 0;
    let totalQuestions = 0;
    let totalDiff = 0;
    const problematicQuestions = [];

    for (const match of questionMatches) {
      const optionsStr = match[1];
      const correctIndex = parseInt(match[2]);

      const optionMatches = optionsStr.matchAll(/en:\s*"([^"]+)"/g);
      const options = Array.from(optionMatches).map(m => m[1]);

      if (options.length > 0 && correctIndex < options.length) {
        totalQuestions++;
        const lengths = options.map(opt => opt.length);
        const correctLength = lengths[correctIndex];
        const avgLength = lengths.reduce((a, b) => a + b, 0) / lengths.length;
        const maxLength = Math.max(...lengths);

        if (correctLength === maxLength) {
          correctIsLongest++;
          const diff = correctLength - avgLength;
          totalDiff += diff;

          if (diff > 30) {
            // Extract question text
            const qMatch = questionsStr.substring(0, match.index).match(/question:\s*\{[^}]*en:\s*"([^"]+)"/g);
            const questionText = qMatch ? qMatch[qMatch.length - 1].match(/en:\s*"([^"]+)"/)[1] : 'Unknown';

            problematicQuestions.push({
              question: questionText.substring(0, 50) + '...',
              correctLength,
              avgLength: avgLength.toFixed(0),
              diff: diff.toFixed(0)
            });
          }
        }
      }
    }

    if (totalQuestions === 0) return null;

    return {
      file: filePath,
      totalQuestions,
      correctIsLongest,
      percentage: (correctIsLongest / totalQuestions * 100),
      avgDiff: correctIsLongest > 0 ? totalDiff / correctIsLongest : 0,
      problematicQuestions
    };
  } catch (e) {
    return null;
  }
}

function analyzeAllFiles(dir) {
  const results = [];

  function walkDir(currentPath) {
    const files = fs.readdirSync(currentPath);

    for (const file of files) {
      const filePath = path.join(currentPath, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        walkDir(filePath);
      } else if (file.endsWith('.js') && file.startsWith('level')) {
        const analysis = analyzeFile(filePath);
        if (analysis && analysis.percentage > 50) {
          results.push(analysis);
        }
      }
    }
  }

  walkDir(dir);
  return results;
}

// Run analysis
console.log('Analyzing answer length imbalance...\n');
const results = analyzeAllFiles('src/questions/data/subjects');

// Sort by percentage
results.sort((a, b) => b.percentage - a.percentage);

// Show worst offenders
console.log('=== FILES WITH WORST ANSWER LENGTH IMBALANCE ===\n');
console.log('(Showing files where >50% of correct answers are the longest option)\n');

const worstFiles = results.slice(0, 20);
for (const result of worstFiles) {
  const shortPath = result.file.replace(/\\/g, '/').replace('src/questions/data/subjects/', '');
  console.log(`${shortPath}`);
  console.log(`  ${result.correctIsLongest}/${result.totalQuestions} questions (${result.percentage.toFixed(0)}%) - Avg diff: ${result.avgDiff.toFixed(0)} chars`);

  if (result.problematicQuestions.length > 0) {
    console.log(`  Most problematic:`);
    for (const q of result.problematicQuestions.slice(0, 2)) {
      console.log(`    "${q.question}"`);
      console.log(`     Correct: ${q.correctLength} chars, Avg: ${q.avgLength} chars (+${q.diff})`);
    }
  }
  console.log();
}

// Summary stats
const totalFiles = results.length;
const over90 = results.filter(r => r.percentage > 90).length;
const over80 = results.filter(r => r.percentage > 80).length;
const over70 = results.filter(r => r.percentage > 70).length;

console.log('=== SUMMARY ===\n');
console.log(`Total files with >50% imbalance: ${totalFiles}`);
console.log(`Files with >90% imbalance: ${over90}`);
console.log(`Files with >80% imbalance: ${over80}`);
console.log(`Files with >70% imbalance: ${over70}`);

console.log('\n⚠️  These files need manual review to:');
console.log('1. Shorten overly detailed correct answers');
console.log('2. Add more context to incorrect answers');
console.log('3. Ensure all options are plausible and similar in detail level');