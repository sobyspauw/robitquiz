const fs = require('fs');
const path = require('path');

function countQuestionsInFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const matches = content.match(/\{[^}]*question:/g);
    return matches ? matches.length : 0;
  } catch (error) {
    return -1;
  }
}

function scanDirectory(dir) {
  const results = [];
  const files = fs.readdirSync(dir, { withFileTypes: true });

  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    if (file.isDirectory()) {
      results.push(...scanDirectory(fullPath));
    } else if (file.name.endsWith('.js') && !file.name.includes('backup') && !file.name.includes('truncated') && !file.name.includes('expansion') && !file.name.includes('partial')) {
      const count = countQuestionsInFile(fullPath);
      if (count >= 0) {
        results.push({ path: fullPath, count });
      }
    }
  }

  return results;
}

const basePath = 'c:/Users/rbosch/OneDrive - A.S. Watson Europe/prive/RobitQuiz/src/questions/data/subjects';
const famousPeoplePath = path.join(basePath, 'famous-people');
const famousBuildingsPath = path.join(basePath, 'famous-buildings');

console.log('=== FAMOUS PEOPLE ===\n');
const peopleResults = scanDirectory(famousPeoplePath);
const peopleNeedExpansion = peopleResults.filter(r => r.count < 100);
console.log(`Total files: ${peopleResults.length}`);
console.log(`Files with <100 questions: ${peopleNeedExpansion.length}`);
console.log('\nFiles needing expansion:');
peopleNeedExpansion.forEach(r => {
  console.log(`${r.count} questions: ${r.path}`);
});

console.log('\n\n=== FAMOUS BUILDINGS ===\n');
const buildingsResults = scanDirectory(famousBuildingsPath);
const buildingsNeedExpansion = buildingsResults.filter(r => r.count < 100);
console.log(`Total files: ${buildingsResults.length}`);
console.log(`Files with <100 questions: ${buildingsNeedExpansion.length}`);
console.log('\nFiles needing expansion:');
buildingsNeedExpansion.forEach(r => {
  console.log(`${r.count} questions: ${r.path}`);
});

console.log('\n\n=== SUMMARY ===');
console.log(`Total files needing expansion: ${peopleNeedExpansion.length + buildingsNeedExpansion.length}`);
