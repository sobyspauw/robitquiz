// Script to fix the answer length imbalance issue - V2 for IIFE format
const fs = require('fs');
const path = require('path');
const vm = require('vm');

// Function to randomize answer options using Fisher-Yates
function shuffleOptions(options, correctIndex) {
  // Create array of indices
  const indices = options.map((_, i) => i);
  const shuffledIndices = [...indices];

  // Fisher-Yates shuffle
  for (let i = shuffledIndices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledIndices[i], shuffledIndices[j]] = [shuffledIndices[j], shuffledIndices[i]];
  }

  // Reorder options based on shuffled indices
  const newOptions = shuffledIndices.map(i => options[i]);

  // Find new correct index
  const newCorrectIndex = shuffledIndices.indexOf(correctIndex);

  return { options: newOptions, correct: newCorrectIndex };
}

// Function to get average length of an option across all languages
function getAverageLength(option) {
  const languages = ['en', 'es', 'de', 'nl'];
  const lengths = languages.map(lang => (option[lang] || '').length);
  return lengths.reduce((sum, len) => sum + len, 0) / lengths.length;
}

// Function to check if correct answer is longest
function isCorrectLongest(question) {
  const lengths = question.options.map(opt => getAverageLength(opt));
  const correctLength = lengths[question.correct];
  const maxLength = Math.max(...lengths);
  return correctLength === maxLength && lengths.filter(l => l === maxLength).length === 1;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');

    // Create a sandbox to safely evaluate the IIFE
    const sandbox = {
      module: { exports: {} },
      console: console
    };

    // Create context
    const context = vm.createContext(sandbox);

    // Run the code in sandbox
    try {
      vm.runInContext(content, context);
    } catch (e) {
      console.log(`  ⚠️  Could not evaluate JavaScript in ${filePath}: ${e.message}`);
      return { processed: false, fixed: 0 };
    }

    // Get the exported data
    const data = sandbox.module.exports;

    if (!data || !data.questions || !Array.isArray(data.questions)) {
      console.log(`  ⚠️  No questions array found in ${filePath}`);
      return { processed: false, fixed: 0 };
    }

    let fixed = 0;
    let needsFix = 0;

    // Check how many questions have the longest answer as correct
    data.questions.forEach(q => {
      if (isCorrectLongest(q)) {
        needsFix++;
      }
    });

    // Only process if more than 60% have longest as correct
    if (needsFix > data.questions.length * 0.6) {
      // Randomize all questions
      const shuffledQuestions = data.questions.map(q => {
        const shuffled = shuffleOptions(q.options, q.correct);
        if (shuffled.correct !== q.correct) {
          fixed++;
        }
        return {
          ...q,
          options: shuffled.options,
          correct: shuffled.correct
        };
      });

      // Rebuild the file content
      const levelVar = content.match(/const\s+(\w+)\s*=/)?.[1] || 'level1';

      const newContent = `// ${path.basename(path.dirname(filePath))} Quiz - ${path.basename(filePath, '.js').replace('level', 'Level ')}
(function() {
  const ${levelVar} = {
    name: ${JSON.stringify(data.name, null, 6).split('\n').map((line, i) => i === 0 ? line : '    ' + line).join('\n')},
    questions: [
${shuffledQuestions.map(q => {
  const questionStr = JSON.stringify(q.question, null, 10).split('\n').map((line, i) => i === 0 ? line : '        ' + line).join('\n');
  const optionsStr = q.options.map(opt => '        ' + JSON.stringify(opt, null, 10).split('\n').map((line, i) => i === 0 ? line : '        ' + line).join('\n')).join(',\n');
  const explanationStr = JSON.stringify(q.explanation, null, 10).split('\n').map((line, i) => i === 0 ? line : '        ' + line).join('\n');

  return `      {
        question: ${questionStr},
        options: [
${optionsStr}
        ],
        correct: ${q.correct},
        explanation: ${explanationStr}
      }`;
}).join(',\n')}
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = ${levelVar};
  }
})();`;

      fs.writeFileSync(filePath, newContent, 'utf8');

      return { processed: true, fixed, needsFix };
    } else {
      return { processed: true, fixed: 0, needsFix };
    }

  } catch (e) {
    console.error(`  ❌ Error processing ${filePath}:`, e.message);
    return { processed: false, fixed: 0 };
  }
}

// Function to process all files in a directory
function processDirectory(dirPath, stats) {
  const items = fs.readdirSync(dirPath);

  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      processDirectory(fullPath, stats);
    } else if (item.endsWith('.js') && item.startsWith('level')) {
      stats.total++;
      const result = processFile(fullPath);

      if (result.processed) {
        stats.processed++;
        if (result.fixed > 0) {
          stats.filesFixed++;
          stats.questionsFixed += result.fixed;
          const relativePath = fullPath.replace(process.cwd() + path.sep, '').replace(/\\/g, '/');
          console.log(`  ✅ Fixed ${relativePath} - Randomized ${result.fixed}/${result.needsFix} questions`);
        } else if (result.needsFix === 0) {
          stats.alreadyGood++;
        }
      } else {
        stats.failed++;
      }
    }
  }
}

// Main execution
console.log('=== FIXING ANSWER LENGTH IMBALANCE V2 ===\n');
console.log('This script will randomize answer options to prevent the longest answer from always being correct.\n');
console.log('Processing files with IIFE format...\n');

const stats = {
  total: 0,
  processed: 0,
  filesFixed: 0,
  questionsFixed: 0,
  alreadyGood: 0,
  failed: 0
};

const rootPath = 'src/questions/data/subjects';
processDirectory(rootPath, stats);

console.log('\n=== SUMMARY ===');
console.log(`Total files checked: ${stats.total}`);
console.log(`Files processed: ${stats.processed}`);
console.log(`Files fixed: ${stats.filesFixed}`);
console.log(`Questions randomized: ${stats.questionsFixed}`);
console.log(`Files already balanced: ${stats.alreadyGood}`);
console.log(`Files failed: ${stats.failed}`);

if (stats.failed > 0) {
  console.log('\n⚠️  Some files could not be processed. Please check the errors above.');
} else if (stats.filesFixed > 0) {
  console.log('\n✅ Successfully randomized answer options to fix length imbalance!');
  console.log('\n📊 Answer distribution is now randomized, preventing exploitation of length patterns.');
} else {
  console.log('\n✅ All files already have balanced answer distributions!');
}