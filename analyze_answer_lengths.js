// Analyze answer option lengths to detect if correct answers tend to be longer
const fs = require('fs');
const path = require('path');

function analyzeFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');

    // Extract questions array
    const questionsMatch = content.match(/questions:\s*\[([\s\S]*)\]\s*\};/);
    if (!questionsMatch) return null;

    const questionsStr = questionsMatch[1];

    // Parse each question
    const questionMatches = questionsStr.matchAll(/options:\s*\[([\s\S]*?)\],\s*correct:\s*(\d+)/g);

    const results = [];
    for (const match of questionMatches) {
      const optionsStr = match[1];
      const correctIndex = parseInt(match[2]);

      // Extract English text from each option
      const optionMatches = optionsStr.matchAll(/en:\s*"([^"]+)"/g);
      const options = Array.from(optionMatches).map(m => m[1]);

      if (options.length > 0 && correctIndex < options.length) {
        const lengths = options.map(opt => opt.length);
        const correctLength = lengths[correctIndex];
        const avgLength = lengths.reduce((a, b) => a + b, 0) / lengths.length;
        const maxLength = Math.max(...lengths);
        const isLongest = correctLength === maxLength;

        results.push({
          correctLength,
          avgLength,
          maxLength,
          isLongest,
          lengthDiff: correctLength - avgLength,
          options: options
        });
      }
    }

    return results;
  } catch (e) {
    console.error(`Error processing ${filePath}:`, e.message);
    return null;
  }
}

function analyzeDirectory(dir) {
  const stats = {
    totalQuestions: 0,
    correctIsLongest: 0,
    correctAboveAvg: 0,
    avgLengthDiff: 0,
    problematicQuestions: []
  };

  function walkDir(currentPath) {
    const files = fs.readdirSync(currentPath);

    for (const file of files) {
      const filePath = path.join(currentPath, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        walkDir(filePath);
      } else if (file.endsWith('.js') && file.startsWith('level')) {
        const results = analyzeFile(filePath);
        if (results && results.length > 0) {
          for (const result of results) {
            stats.totalQuestions++;

            if (result.isLongest) {
              stats.correctIsLongest++;

              // If correct answer is significantly longer (20+ chars more than average)
              if (result.lengthDiff > 20) {
                stats.problematicQuestions.push({
                  file: filePath.replace(/\\/g, '/'),
                  correctLength: result.correctLength,
                  avgLength: result.avgLength.toFixed(1),
                  difference: result.lengthDiff.toFixed(1)
                });
              }
            }

            if (result.lengthDiff > 0) {
              stats.correctAboveAvg++;
            }

            stats.avgLengthDiff += result.lengthDiff;
          }
        }
      }
    }
  }

  walkDir(dir);

  if (stats.totalQuestions > 0) {
    stats.avgLengthDiff = stats.avgLengthDiff / stats.totalQuestions;
    stats.percentLongest = ((stats.correctIsLongest / stats.totalQuestions) * 100).toFixed(1);
    stats.percentAboveAvg = ((stats.correctAboveAvg / stats.totalQuestions) * 100).toFixed(1);
  }

  return stats;
}

// Run analysis
console.log('Analyzing answer option lengths...\n');
const results = analyzeDirectory('src/questions/data/subjects');

console.log('=== ANALYSIS RESULTS ===\n');
console.log(`Total questions analyzed: ${results.totalQuestions}`);
console.log(`Correct answer is longest: ${results.correctIsLongest} (${results.percentLongest}%)`);
console.log(`Correct answer above average: ${results.correctAboveAvg} (${results.percentAboveAvg}%)`);
console.log(`Average length difference: ${results.avgLengthDiff.toFixed(1)} characters\n`);

if (results.problematicQuestions.length > 0) {
  console.log(`Found ${results.problematicQuestions.length} questions where correct answer is significantly longer:\n`);

  // Show first 10 problematic questions
  const toShow = results.problematicQuestions.slice(0, 10);
  for (const q of toShow) {
    console.log(`  ${q.file}`);
    console.log(`    Correct: ${q.correctLength} chars, Avg: ${q.avgLength} chars, Diff: +${q.difference} chars`);
  }

  if (results.problematicQuestions.length > 10) {
    console.log(`\n  ... and ${results.problematicQuestions.length - 10} more`);
  }
}

// Expected: ~25% for random distribution
// Problematic if > 35-40%
const threshold = 35;
if (results.percentLongest > threshold) {
  console.log(`\n⚠️  WARNING: ${results.percentLongest}% of correct answers are the longest option!`);
  console.log(`This is significantly above the expected 25% for random distribution.`);
  console.log(`Players may exploit this pattern to guess answers.`);
} else {
  console.log(`\n✅ Answer length distribution looks reasonable (${results.percentLongest}% longest).`);
}