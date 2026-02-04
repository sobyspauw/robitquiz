// Check if all question files have exactly 40 questions
const fs = require('fs');
const path = require('path');

function countQuestionsInFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');

    // Count occurrences of "question:" which indicates a question object
    const matches = content.match(/question:\s*\{/g);
    return matches ? matches.length : 0;
  } catch (e) {
    console.error(`Error reading ${filePath}:`, e.message);
    return -1;
  }
}

function checkAllFiles(dir) {
  const results = {
    totalFiles: 0,
    with40Questions: 0,
    withLess: [],
    withMore: [],
    errors: []
  };

  function walkDir(currentPath) {
    const files = fs.readdirSync(currentPath);

    for (const file of files) {
      const filePath = path.join(currentPath, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        walkDir(filePath);
      } else if (file.endsWith('.js') && file.startsWith('level')) {
        results.totalFiles++;

        const count = countQuestionsInFile(filePath);
        const shortPath = filePath.replace(/\\/g, '/').replace('src/questions/data/subjects/', '');

        if (count === -1) {
          results.errors.push(shortPath);
        } else if (count === 40) {
          results.with40Questions++;
        } else if (count < 40) {
          results.withLess.push({ file: shortPath, count });
        } else {
          results.withMore.push({ file: shortPath, count });
        }
      }
    }
  }

  walkDir(dir);
  return results;
}

// Run the check
console.log('Checking question counts in all level files...\n');
const results = checkAllFiles('src/questions/data/subjects');

console.log('=== QUESTION COUNT ANALYSIS ===\n');
console.log(`Total level files: ${results.totalFiles}`);
console.log(`Files with exactly 40 questions: ${results.with40Questions} (${(results.with40Questions/results.totalFiles*100).toFixed(1)}%)`);
console.log(`Files with less than 40: ${results.withLess.length}`);
console.log(`Files with more than 40: ${results.withMore.length}`);
console.log(`Files with errors: ${results.errors.length}\n`);

if (results.withLess.length > 0) {
  console.log('FILES WITH LESS THAN 40 QUESTIONS:');
  for (const item of results.withLess.slice(0, 20)) {
    console.log(`  ${item.file}: ${item.count} questions`);
  }
  if (results.withLess.length > 20) {
    console.log(`  ... and ${results.withLess.length - 20} more\n`);
  } else {
    console.log();
  }
}

if (results.withMore.length > 0) {
  console.log('FILES WITH MORE THAN 40 QUESTIONS:');
  for (const item of results.withMore.slice(0, 20)) {
    console.log(`  ${item.file}: ${item.count} questions`);
  }
  if (results.withMore.length > 20) {
    console.log(`  ... and ${results.withMore.length - 20} more\n`);
  } else {
    console.log();
  }
}

if (results.errors.length > 0) {
  console.log('FILES WITH ERRORS:');
  for (const file of results.errors) {
    console.log(`  ${file}`);
  }
  console.log();
}

// Summary
if (results.with40Questions === results.totalFiles) {
  console.log('✅ PERFECT! All files have exactly 40 questions.');
} else {
  const percentage = (results.with40Questions/results.totalFiles*100).toFixed(1);
  if (percentage > 95) {
    console.log(`✅ ALMOST PERFECT! ${percentage}% of files have 40 questions.`);
  } else {
    console.log(`⚠️  Only ${percentage}% of files have 40 questions. Needs fixing!`);
  }
}