const fs = require('fs');
const path = require('path');

function countQuestions(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const matches = content.match(/question:\s*\{/g);
    return matches ? matches.length : 0;
  } catch {
    return -1;
  }
}

function checkDir(dirPath, results = []) {
  const items = fs.readdirSync(dirPath);
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      checkDir(fullPath, results);
    } else if (item.startsWith('level') && item.endsWith('.js')) {
      const count = countQuestions(fullPath);
      if (count >= 0 && count < 40) {
        results.push({path: fullPath.replace(/\\/g, '/'), count});
      }
    }
  }
  return results;
}

const results = checkDir('src/questions/data/subjects');
const sorted = results.sort((a,b) => a.count - b.count);

console.log('Files with less than 40 questions:');
sorted.slice(0, 50).forEach(r => {
  console.log(`${r.path}: ${r.count} questions`);
});

console.log(`\nTotal files with <40 questions: ${results.length}`);

// Group by subject
const bySubject = {};
results.forEach(r => {
  const parts = r.path.split('/');
  const subject = parts[4]; // subjects/[subject]/...
  if (!bySubject[subject]) bySubject[subject] = [];
  bySubject[subject].push(r);
});

console.log('\nBy subject:');
Object.keys(bySubject).sort().forEach(subject => {
  console.log(`${subject}: ${bySubject[subject].length} files need questions`);
});