const fs = require('fs');
const path = require('path');

const subjectsDir = path.join(__dirname, 'src', 'questions', 'data', 'subjects');

function getAllJsFiles(dir) {
  const files = [];

  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);

    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item.endsWith('.js')) {
        files.push(fullPath);
      }
    }
  }

  traverse(dir);
  return files;
}

function analyzeFile(filePath) {
  try {
    // Clear the require cache
    delete require.cache[require.resolve(filePath)];
    const module = require(filePath);

    if (!module || !module.questions || !Array.isArray(module.questions)) {
      return { error: 'Invalid format', count: 0 };
    }

    return { count: module.questions.length, error: null };
  } catch (error) {
    return { error: error.message, count: 0 };
  }
}

console.log('Analyzing all question files...\n');

const allFiles = getAllJsFiles(subjectsDir);
console.log(`Total files found: ${allFiles.length}\n`);

const stats = {
  total: 0,
  complete: 0,  // >= 100 questions
  incomplete: 0, // < 100 questions
  errors: 0,
  bySubject: {}
};

const filesNeedingWork = [];

allFiles.forEach(filePath => {
  const relativePath = path.relative(subjectsDir, filePath);
  const parts = relativePath.split(path.sep);
  const subject = parts[0];

  if (!stats.bySubject[subject]) {
    stats.bySubject[subject] = {
      total: 0,
      complete: 0,
      incomplete: 0,
      errors: 0,
      totalQuestions: 0
    };
  }

  const result = analyzeFile(filePath);

  stats.total++;
  stats.bySubject[subject].total++;

  if (result.error) {
    stats.errors++;
    stats.bySubject[subject].errors++;
    filesNeedingWork.push({ path: relativePath, count: 0, error: result.error });
  } else {
    stats.bySubject[subject].totalQuestions += result.count;

    if (result.count >= 100) {
      stats.complete++;
      stats.bySubject[subject].complete++;
    } else {
      stats.incomplete++;
      stats.bySubject[subject].incomplete++;
      filesNeedingWork.push({ path: relativePath, count: result.count, error: null });
    }
  }
});

console.log('=== OVERALL STATISTICS ===');
console.log(`Total files: ${stats.total}`);
console.log(`Complete (>=100): ${stats.complete} (${(stats.complete/stats.total*100).toFixed(1)}%)`);
console.log(`Incomplete (<100): ${stats.incomplete} (${(stats.incomplete/stats.total*100).toFixed(1)}%)`);
console.log(`Errors: ${stats.errors}\n`);

console.log('=== BY SUBJECT ===');
Object.keys(stats.bySubject).sort().forEach(subject => {
  const s = stats.bySubject[subject];
  console.log(`\n${subject}:`);
  console.log(`  Files: ${s.total}`);
  console.log(`  Complete: ${s.complete} (${(s.complete/s.total*100).toFixed(1)}%)`);
  console.log(`  Incomplete: ${s.incomplete}`);
  console.log(`  Errors: ${s.errors}`);
  console.log(`  Total questions: ${s.totalQuestions}`);
  console.log(`  Avg per file: ${(s.totalQuestions/s.total).toFixed(1)}`);
});

console.log('\n=== FILES NEEDING WORK ===');
console.log(`Total files needing work: ${filesNeedingWork.length}\n`);

// Group by count
const grouped = {};
filesNeedingWork.forEach(f => {
  const key = f.error ? 'ERROR' : `${f.count}q`;
  if (!grouped[key]) grouped[key] = [];
  grouped[key].push(f.path);
});

Object.keys(grouped).sort().forEach(key => {
  console.log(`\n${key} (${grouped[key].length} files):`);
  grouped[key].slice(0, 10).forEach(p => console.log(`  - ${p}`));
  if (grouped[key].length > 10) {
    console.log(`  ... and ${grouped[key].length - 10} more`);
  }
});

// Export detailed list
const outputPath = path.join(__dirname, 'files_needing_100_questions.json');
fs.writeFileSync(outputPath, JSON.stringify(filesNeedingWork, null, 2));
console.log(`\n\nDetailed list saved to: ${outputPath}`);
