const fs = require('fs');
const path = require('path');

// Get all question files recursively
function getAllQuestionFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      getAllQuestionFiles(filePath, fileList);
    } else if (file.match(/^level\d+\.js$/)) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

const results = {
  syntaxErrors: [],
  emptyFiles: [],
  templateQuestions: [],
  validFiles: [],
  totalFiles: 0
};

const subjectsDir = path.join(__dirname, 'src', 'questions', 'data', 'subjects');
const allFiles = getAllQuestionFiles(subjectsDir);
results.totalFiles = allFiles.length;

console.log(`Analyzing ${allFiles.length} question files...\n`);

allFiles.forEach((filePath, index) => {
  const relativePath = path.relative(__dirname, filePath);

  try {
    // Try to require the file
    delete require.cache[require.resolve(filePath)];
    const fileExport = require(filePath);

    // Handle both formats: direct array export or object with questions property
    let questions = null;
    if (Array.isArray(fileExport)) {
      questions = fileExport;
    } else if (fileExport && Array.isArray(fileExport.questions)) {
      questions = fileExport.questions;
    } else if (fileExport && typeof fileExport === 'object') {
      // Try to find questions in any property
      const keys = Object.keys(fileExport);
      for (const key of keys) {
        if (Array.isArray(fileExport[key])) {
          questions = fileExport[key];
          break;
        }
      }
    }

    if (!questions || questions.length === 0) {
      results.emptyFiles.push({
        path: relativePath,
        count: 0,
        structure: typeof fileExport
      });
    } else {
      // Check for template/placeholder questions
      const hasTemplates = questions.some(q => {
        const questionText = q.question?.en || '';
        const optionText = q.options?.[0]?.en || '';
        const explanationText = q.explanation?.en || '';

        return questionText.includes('(Question ') ||
               questionText.includes('placeholder') ||
               optionText.includes('Alternative') ||
               optionText.includes('Correct technical answer') ||
               explanationText.includes('Technical explanation of the concept');
      });

      if (hasTemplates) {
        results.templateQuestions.push({
          path: relativePath,
          count: questions.length
        });
      } else {
        results.validFiles.push({
          path: relativePath,
          count: questions.length
        });
      }
    }
  } catch (error) {
    results.syntaxErrors.push({
      path: relativePath,
      error: error.message,
      stack: error.stack.split('\n').slice(0, 3).join('\n')
    });
  }

  // Progress indicator
  if ((index + 1) % 50 === 0) {
    console.log(`Processed ${index + 1}/${allFiles.length} files...`);
  }
});

console.log('\n========================================');
console.log('ANALYSIS COMPLETE');
console.log('========================================\n');

console.log(`Total files analyzed: ${results.totalFiles}`);
console.log(`Valid files: ${results.validFiles.length}`);
console.log(`Files with syntax errors: ${results.syntaxErrors.length}`);
console.log(`Files with 0 questions: ${results.emptyFiles.length}`);
console.log(`Files with template/placeholder questions: ${results.templateQuestions.length}`);

// Write detailed report
const report = {
  summary: {
    totalFiles: results.totalFiles,
    validFiles: results.validFiles.length,
    syntaxErrors: results.syntaxErrors.length,
    emptyFiles: results.emptyFiles.length,
    templateQuestions: results.templateQuestions.length
  },
  syntaxErrors: results.syntaxErrors,
  emptyFiles: results.emptyFiles,
  templateQuestions: results.templateQuestions
};

fs.writeFileSync('question_analysis_report_v2.json', JSON.stringify(report, null, 2));
console.log('\nDetailed report saved to: question_analysis_report_v2.json');

// Print files with issues
if (results.syntaxErrors.length > 0) {
  console.log('\n========================================');
  console.log('FILES WITH SYNTAX ERRORS:');
  console.log('========================================');
  results.syntaxErrors.slice(0, 10).forEach(item => {
    console.log(`\n${item.path}`);
    console.log(`  Error: ${item.error}`);
  });
  if (results.syntaxErrors.length > 10) {
    console.log(`\n... and ${results.syntaxErrors.length - 10} more files with syntax errors`);
  }
}

if (results.emptyFiles.length > 0) {
  console.log('\n========================================');
  console.log('FILES WITH 0 QUESTIONS:');
  console.log('========================================');
  results.emptyFiles.forEach(item => {
    console.log(`  ${item.path}`);
  });
}

if (results.templateQuestions.length > 0) {
  console.log('\n========================================');
  console.log('FILES WITH TEMPLATE/PLACEHOLDER QUESTIONS:');
  console.log('========================================');
  results.templateQuestions.forEach(item => {
    console.log(`  ${item.path} (${item.count} questions)`);
  });
}

// Group by subject for priority list
const bySubject = {};

[...results.syntaxErrors, ...results.emptyFiles, ...results.templateQuestions].forEach(item => {
  const parts = item.path.split(path.sep);
  const subjectIndex = parts.indexOf('subjects') + 1;
  const category = parts[subjectIndex] || 'unknown';
  const subject = parts[subjectIndex + 1] || 'unknown';
  const key = `${category}/${subject}`;

  if (!bySubject[key]) {
    bySubject[key] = {
      syntaxErrors: [],
      emptyFiles: [],
      templateQuestions: [],
      totalIssues: 0
    };
  }

  if (results.syntaxErrors.find(e => e.path === item.path)) {
    bySubject[key].syntaxErrors.push(item);
  } else if (results.emptyFiles.find(e => e.path === item.path)) {
    bySubject[key].emptyFiles.push(item);
  } else if (results.templateQuestions.find(e => e.path === item.path)) {
    bySubject[key].templateQuestions.push(item);
  }
  bySubject[key].totalIssues++;
});

console.log('\n========================================');
console.log('ISSUES GROUPED BY SUBJECT:');
console.log('========================================');

// Sort by total issues descending
const sortedSubjects = Object.keys(bySubject).sort((a, b) => {
  return bySubject[b].totalIssues - bySubject[a].totalIssues;
});

sortedSubjects.forEach(subject => {
  const issues = bySubject[subject];

  console.log(`\n${subject} (${issues.totalIssues} files with issues):`);
  if (issues.syntaxErrors.length > 0) {
    console.log(`  - Syntax errors: ${issues.syntaxErrors.length} files`);
  }
  if (issues.emptyFiles.length > 0) {
    console.log(`  - Empty files: ${issues.emptyFiles.length} files`);
  }
  if (issues.templateQuestions.length > 0) {
    console.log(`  - Template questions: ${issues.templateQuestions.length} files`);
  }
});

fs.writeFileSync('issues_by_subject_v2.json', JSON.stringify(bySubject, null, 2));
console.log('\n\nSubject-grouped issues saved to: issues_by_subject_v2.json');

// Create priority fix list
console.log('\n========================================');
console.log('PRIORITY FIX LIST');
console.log('========================================');

console.log('\n1. SYNTAX ERRORS (Must fix first - prevents loading):');
const syntaxErrorSubjects = sortedSubjects.filter(s => bySubject[s].syntaxErrors.length > 0);
syntaxErrorSubjects.forEach((subject, idx) => {
  const count = bySubject[subject].syntaxErrors.length;
  console.log(`   ${idx + 1}. ${subject}: ${count} files`);
});

console.log('\n2. TEMPLATE/PLACEHOLDER QUESTIONS (Replace with real questions):');
const templateSubjects = sortedSubjects.filter(s => bySubject[s].templateQuestions.length > 0);
templateSubjects.forEach((subject, idx) => {
  const count = bySubject[subject].templateQuestions.length;
  console.log(`   ${idx + 1}. ${subject}: ${count} files`);
});

console.log('\n3. EMPTY FILES (No questions found):');
const emptySubjects = sortedSubjects.filter(s => bySubject[s].emptyFiles.length > 0);
emptySubjects.forEach((subject, idx) => {
  const count = bySubject[subject].emptyFiles.length;
  console.log(`   ${idx + 1}. ${subject}: ${count} files`);
});

console.log('\n');
