const fs = require('fs');
const path = require('path');

function countQuestions(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const matches = content.match(/question:\s*{/g);
        return matches ? matches.length : 0;
    } catch { return -1; }
}

const subjectsDir = 'src/questions/data/subjects';
const issues = [];

fs.readdirSync(subjectsDir).forEach(subject => {
    const subjectPath = path.join(subjectsDir, subject);
    if (!fs.statSync(subjectPath).isDirectory()) return;

    fs.readdirSync(subjectPath).forEach(category => {
        const categoryPath = path.join(subjectPath, category);
        if (!fs.statSync(categoryPath).isDirectory()) return;

        for (let level = 1; level <= 10; level++) {
            const filePath = path.join(categoryPath, `level${level}.js`);

            if (fs.existsSync(filePath)) {
                const count = countQuestions(filePath);
                if (count !== 40) {
                    issues.push({
                        subject,
                        category,
                        level,
                        count,
                        path: filePath
                    });
                }
            }
        }
    });
});

// Group by question count
const grouped = {};
issues.forEach(issue => {
    if (!grouped[issue.count]) {
        grouped[issue.count] = [];
    }
    grouped[issue.count].push(issue);
});

console.log('=== REMAINING ISSUES BY QUESTION COUNT ===\n');

Object.keys(grouped).sort((a, b) => b - a).forEach(count => {
    console.log(`\n${count} questions (${count > 40 ? `remove ${count - 40}` : `add ${40 - count}`}):`);
    grouped[count].forEach(issue => {
        console.log(`  - ${issue.subject}/${issue.category}/level${issue.level}.js`);
    });
});

console.log(`\n\nTotal remaining: ${issues.length} files`);