const fs = require('fs');
const path = require('path');

// Base directory for all quiz subjects
const baseDir = 'C:/Users/rbosch/OneDrive - A.S. Watson Europe/prive/RobitQuiz/src/questions/data/subjects';

let totalFiles = 0;
let filesWithCorrectCount = 0;
let filesWithWrongCount = [];
let filesByQuestionCount = {};

// Function to count questions in a file
function countQuestions(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        // Match only question objects, not "question:" in explanations
        const questionMatches = content.match(/^\s{8}question:\s*{$/gm);
        return questionMatches ? questionMatches.length : 0;
    } catch (error) {
        console.error(`Error reading ${filePath}: ${error.message}`);
        return -1;
    }
}

// Function to recursively check all JS files
function checkDirectory(dir) {
    const items = fs.readdirSync(dir);

    items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            checkDirectory(fullPath);
        } else if (path.extname(fullPath) === '.js') {
            totalFiles++;
            const questionCount = countQuestions(fullPath);
            const relativePath = fullPath.replace(baseDir + '/', '').replace(/\\/g, '/');

            if (questionCount === 40) {
                filesWithCorrectCount++;
            } else {
                filesWithWrongCount.push({
                    path: relativePath,
                    count: questionCount
                });
            }

            // Track distribution of question counts
            if (!filesByQuestionCount[questionCount]) {
                filesByQuestionCount[questionCount] = 0;
            }
            filesByQuestionCount[questionCount]++;

            // Progress indicator every 100 files
            if (totalFiles % 100 === 0) {
                console.log(`Processed ${totalFiles} files...`);
            }
        }
    });
}

// Start the check
console.log('Starting comprehensive check of ALL quiz files...\n');
console.log('='.repeat(60));

checkDirectory(baseDir);

// Print results
console.log('\n' + '='.repeat(60));
console.log('COMPREHENSIVE CHECK RESULTS');
console.log('='.repeat(60));
console.log(`Total files checked: ${totalFiles}`);
console.log(`Files with exactly 40 questions: ${filesWithCorrectCount} (${(filesWithCorrectCount/totalFiles*100).toFixed(1)}%)`);
console.log(`Files with WRONG question count: ${filesWithWrongCount.length} (${(filesWithWrongCount.length/totalFiles*100).toFixed(1)}%)`);

// Show distribution
console.log('\n--- Question Count Distribution ---');
Object.keys(filesByQuestionCount).sort((a,b) => a-b).forEach(count => {
    console.log(`${count} questions: ${filesByQuestionCount[count]} files`);
});

// List problematic files
if (filesWithWrongCount.length > 0) {
    console.log('\n--- FILES THAT NEED FIXING ---');
    filesWithWrongCount.forEach(file => {
        console.log(`❌ ${file.path}: ${file.count} questions (needs ${40 - file.count > 0 ? '+' : ''}${40 - file.count})`);
    });
} else {
    console.log('\n✅ SUCCESS! All files have exactly 40 questions!');
}

// Summary by subject
console.log('\n--- SUMMARY BY SUBJECT ---');
const subjects = {};
filesWithWrongCount.forEach(file => {
    const subject = file.path.split('/')[0];
    if (!subjects[subject]) {
        subjects[subject] = [];
    }
    subjects[subject].push(file);
});

if (Object.keys(subjects).length > 0) {
    Object.keys(subjects).sort().forEach(subject => {
        console.log(`${subject}: ${subjects[subject].length} files need fixing`);
    });
} else {
    console.log('All subjects are complete with 40 questions per file! ✅');
}