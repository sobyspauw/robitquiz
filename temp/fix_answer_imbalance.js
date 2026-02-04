// Script to fix the answer length imbalance issue
// Currently 76.6% of correct answers are the longest option - this needs to be randomized
const fs = require('fs');
const path = require('path');

// Function to randomize answer options while updating the correct index
function randomizeAnswerOptions(question) {
  const { options, correct } = question;

  // Create an array with indices
  const indices = options.map((_, index) => index);

  // Fisher-Yates shuffle algorithm
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }

  // Reorder options based on shuffled indices
  const newOptions = indices.map(i => options[i]);

  // Find new correct index
  const newCorrectIndex = indices.indexOf(correct);

  return {
    ...question,
    options: newOptions,
    correct: newCorrectIndex
  };
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

    // Extract the module.exports structure
    const moduleMatch = content.match(/module\.exports\s*=\s*\{[\s\S]*\}/);
    if (!moduleMatch) {
      console.log(`  ⚠️  Could not parse structure in ${filePath}`);
      return { processed: false, fixed: 0 };
    }

    // Use eval (careful!) to parse the JavaScript object
    let data;
    try {
      data = eval(`(${moduleMatch[0].replace('module.exports =', '')})`);
    } catch (e) {
      console.log(`  ⚠️  Could not evaluate JavaScript in ${filePath}: ${e.message}`);
      return { processed: false, fixed: 0 };
    }

    if (!data.questions || !Array.isArray(data.questions)) {
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

    // Only process if more than 60% have longest as correct (to avoid over-correction)
    if (needsFix > data.questions.length * 0.6) {
      // Randomize all questions
      data.questions = data.questions.map(q => {
        const randomized = randomizeAnswerOptions(q);
        if (randomized.correct !== q.correct) {
          fixed++;
        }
        return randomized;
      });

      // Rebuild the file content
      const newContent = `module.exports = {
  name: ${JSON.stringify(data.name)},
  description: ${JSON.stringify(data.description, null, 4).split('\n').map((line, i) => i === 0 ? line : '  ' + line).join('\n')},
  questions: [
${data.questions.map(q => {
  const questionStr = JSON.stringify(q.question, null, 6).split('\n').map((line, i) => i === 0 ? line : '      ' + line).join('\n');
  const optionsStr = q.options.map(opt => '      ' + JSON.stringify(opt, null, 8).split('\n').map((line, i) => i === 0 ? line : '      ' + line).join('\n')).join(',\n');
  const explanationStr = JSON.stringify(q.explanation, null, 6).split('\n').map((line, i) => i === 0 ? line : '      ' + line).join('\n');

  return `    {
      question: ${questionStr},
      options: [
${optionsStr}
      ],
      correct: ${q.correct},
      explanation: ${explanationStr}
    }`;
}).join(',\n')}
  ]
};`;

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
          console.log(`  ✅ Fixed ${fullPath.replace(process.cwd() + path.sep, '')} - Randomized ${result.fixed}/${result.needsFix} questions`);
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
console.log('=== FIXING ANSWER LENGTH IMBALANCE ===\n');
console.log('This script will randomize answer options to prevent the longest answer from always being correct.\n');

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
} else {
  console.log('\n✅ All files already have balanced answer distributions!');
}