const fs = require('fs');
const path = require('path');

const subjectsDir = path.join(__dirname, 'src', 'questions', 'data', 'subjects');

function countQuestions(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const matches = content.match(/question:\s*{/g);
        return matches ? matches.length : 0;
    } catch (error) {
        return -1;
    }
}

let totalFiles = 0;
let completeFiles = 0;
let remainingIssues = [];

const subjects = fs.readdirSync(subjectsDir);

subjects.forEach(subject => {
    const subjectPath = path.join(subjectsDir, subject);
    if (!fs.statSync(subjectPath).isDirectory()) return;

    const categories = fs.readdirSync(subjectPath);

    categories.forEach(category => {
        const categoryPath = path.join(subjectPath, category);
        if (!fs.statSync(categoryPath).isDirectory()) return;

        for (let level = 1; level <= 10; level++) {
            const filePath = path.join(categoryPath, `level${level}.js`);
            totalFiles++;

            if (!fs.existsSync(filePath)) {
                remainingIssues.push(`${subject}/${category}/level${level}: File missing`);
            } else {
                const count = countQuestions(filePath);
                if (count === 40) {
                    completeFiles++;
                } else {
                    remainingIssues.push(`${subject}/${category}/level${level}: ${count} questions`);
                }
            }
        }
    });
});

console.log('=== FINAL QUIZ CONTENT AUDIT ===\n');
console.log(`Total files: ${totalFiles}`);
console.log(`Complete files (40 questions): ${completeFiles}`);
console.log(`Completion rate: ${((completeFiles / totalFiles) * 100).toFixed(1)}%`);
console.log(`Files with issues: ${remainingIssues.length}\n`);

if (remainingIssues.length > 0) {
    console.log('=== REMAINING ISSUES ===\n');
    remainingIssues.forEach(issue => console.log(`  - ${issue}`));
} else {
    console.log('✓ ALL FILES ARE COMPLETE!');
}

// Summary by subject
console.log('\n=== SUBJECT SUMMARY ===\n');
const subjectStats = {};

remainingIssues.forEach(issue => {
    const subject = issue.split('/')[0];
    if (!subjectStats[subject]) {
        subjectStats[subject] = 0;
    }
    subjectStats[subject]++;
});

subjects.forEach(subject => {
    const subjectPath = path.join(subjectsDir, subject);
    if (!fs.statSync(subjectPath).isDirectory()) return;

    const categories = fs.readdirSync(subjectPath).filter(cat =>
        fs.statSync(path.join(subjectPath, cat)).isDirectory()
    );
    const totalSubjectFiles = categories.length * 10;
    const issueCount = subjectStats[subject] || 0;
    const completionRate = ((totalSubjectFiles - issueCount) / totalSubjectFiles * 100).toFixed(1);
    const status = issueCount === 0 ? '✓' : '⚠';

    console.log(`${status} ${subject}: ${completionRate}% complete (${totalSubjectFiles - issueCount}/${totalSubjectFiles} files)`);
});