const fs = require('fs');
const path = require('path');

console.log('FINAL CHECK - CHECKING FOR DUPLICATES AND PLACEHOLDERS');
console.log('=======================================================\n');

const questionsDir = path.join(__dirname, 'src', 'questions', 'data', 'subjects');

// Pick random files to check
const filesToCheck = [
    'ai/AI ethiek/level1.js',
    'ai/Machine learning/level5.js',
    'board-games/Chess/level1.js',
    'board-games/Monopoly/level1.js',
    'books/Fantasy Novels/level1.js',
    'currencies/Dollar/level1.js',
    'dinosaurs/T-Rex Family/level1.js',
    'food/BBQ/level1.js',
    'egypt/Ancient Egypt/level1.js',
    'famous-people/Scientists/level1.js'
];

filesToCheck.forEach(file => {
    const filePath = path.join(questionsDir, file);

    if (!fs.existsSync(filePath)) {
        console.log(`❌ ${file}: FILE NOT FOUND`);
        return;
    }

    try {
        const content = fs.readFileSync(filePath, 'utf8');

        // Check for placeholders
        const hasPlaceholders =
            content.includes('fact A') ||
            content.includes('fact B') ||
            content.includes('Correct answer') ||
            content.includes('[Q1]') ||
            content.includes('[Q2]') ||
            content.includes('(Q1)') ||
            content.includes('(Q2)');

        // Parse questions
        const moduleExports = eval(content + '; module.exports');
        const questions = moduleExports.questions || moduleExports;

        // Count unique questions
        const uniqueQuestions = new Set();
        questions.forEach(q => {
            if (q && q.question && q.question.en) {
                uniqueQuestions.add(q.question.en);
            }
        });

        // Check first few questions
        const firstQ = questions[0];
        const secondQ = questions[1];
        const thirdQ = questions[2];

        console.log(`\n📁 ${file}:`);
        console.log(`   Total: ${questions.length} | Unique: ${uniqueQuestions.size}`);

        if (hasPlaceholders) {
            console.log(`   ❌ HAS PLACEHOLDERS!`);
        }

        if (uniqueQuestions.size < 10) {
            console.log(`   ❌ ONLY ${uniqueQuestions.size} UNIQUE QUESTIONS!`);
        } else if (uniqueQuestions.size < 50) {
            console.log(`   ⚠️  Only ${uniqueQuestions.size} unique (questions repeat)`);
        } else {
            console.log(`   ✅ Good variety`);
        }

        console.log(`   Q1: "${firstQ.question.en.substring(0, 50)}..."`);
        console.log(`   A1: [${firstQ.options.map(o => o.en).join(', ')}]`);

        if (secondQ && secondQ.question.en !== firstQ.question.en) {
            console.log(`   Q2: "${secondQ.question.en.substring(0, 50)}..."`);
        } else if (secondQ) {
            console.log(`   Q2: ❌ DUPLICATE OF Q1`);
        }

    } catch (e) {
        console.log(`❌ ${file}: ERROR - ${e.message}`);
    }
});

console.log('\n' + '='.repeat(60));