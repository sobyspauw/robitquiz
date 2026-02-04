const fs = require('fs');
const path = require('path');

const subjectsDir = path.join(__dirname, 'src', 'questions', 'data', 'subjects');
const issues = [];
let totalFiles = 0;
let completeFiles = 0;

// Function to count questions in a file
function countQuestions(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const matches = content.match(/question:\s*{/g);
        return matches ? matches.length : 0;
    } catch (error) {
        return -1;
    }
}

// Check all subjects
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
                issues.push({
                    subject,
                    category,
                    level,
                    issue: 'File missing'
                });
            } else {
                const count = countQuestions(filePath);
                if (count === -1) {
                    issues.push({
                        subject,
                        category,
                        level,
                        issue: 'Error reading file'
                    });
                } else if (count !== 40) {
                    issues.push({
                        subject,
                        category,
                        level,
                        issue: `Has ${count} questions (needs 40)`
                    });
                } else {
                    completeFiles++;
                }
            }
        }
    });
});

// Print results
console.log('=== QUIZ CONTENT AUDIT REPORT ===\n');
console.log(`Total files checked: ${totalFiles}`);
console.log(`Complete files (40 questions): ${completeFiles}`);
console.log(`Files with issues: ${issues.length}\n`);

if (issues.length > 0) {
    console.log('=== ISSUES FOUND ===\n');

    // Group issues by subject
    const issuesBySubject = {};
    issues.forEach(issue => {
        if (!issuesBySubject[issue.subject]) {
            issuesBySubject[issue.subject] = [];
        }
        issuesBySubject[issue.subject].push(issue);
    });

    Object.keys(issuesBySubject).sort().forEach(subject => {
        console.log(`\n${subject.toUpperCase()}:`);
        issuesBySubject[subject].forEach(issue => {
            console.log(`  ${issue.category} - Level ${issue.level}: ${issue.issue}`);
        });
    });
} else {
    console.log('✓ All files are complete with 40 questions each!');
}

console.log('\n=== SUMMARY BY SUBJECT ===\n');
const subjectStats = {};
issues.forEach(issue => {
    if (!subjectStats[issue.subject]) {
        subjectStats[issue.subject] = 0;
    }
    subjectStats[issue.subject]++;
});

subjects.forEach(subject => {
    const subjectPath = path.join(subjectsDir, subject);
    if (!fs.statSync(subjectPath).isDirectory()) return;

    const categories = fs.readdirSync(subjectPath);
    const totalSubjectFiles = categories.filter(cat =>
        fs.statSync(path.join(subjectPath, cat)).isDirectory()
    ).length * 10;

    const issueCount = subjectStats[subject] || 0;
    const status = issueCount === 0 ? '✓' : '⚠';
    console.log(`${status} ${subject}: ${totalSubjectFiles - issueCount}/${totalSubjectFiles} files complete`);
});