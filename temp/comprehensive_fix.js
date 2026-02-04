const fs = require('fs');
const path = require('path');

// Helper to count questions in a file
function countQuestions(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const matches = content.match(/question:\s*{/g);
        return matches ? matches.length : 0;
    } catch (error) {
        return -1;
    }
}

// Files that need extra questions removed (41-43)
const filesToTruncate = [
    // AI
    { path: 'src/questions/data/subjects/ai/Neurale netwerken/level9.js', current: 41 },
    { path: 'src/questions/data/subjects/ai/Neurale netwerken/level10.js', current: 42 },

    // Drinks - remove 1 question each
    { path: 'src/questions/data/subjects/drinks/Beer/level7.js', current: 41 },
    { path: 'src/questions/data/subjects/drinks/Cocktails/level8.js', current: 41 },
    { path: 'src/questions/data/subjects/drinks/Tea/level4.js', current: 41 },
    { path: 'src/questions/data/subjects/drinks/Traditional Drinks/level1.js', current: 41 },
    { path: 'src/questions/data/subjects/drinks/Traditional Drinks/level7.js', current: 41 },
    { path: 'src/questions/data/subjects/drinks/Traditional Drinks/level8.js', current: 41 },
    { path: 'src/questions/data/subjects/drinks/Traditional Drinks/level10.js', current: 41 },
    { path: 'src/questions/data/subjects/drinks/Water/level3.js', current: 41 },
    { path: 'src/questions/data/subjects/drinks/Water/level6.js', current: 41 },
    { path: 'src/questions/data/subjects/drinks/Water/level7.js', current: 41 },

    // Egypt
    { path: 'src/questions/data/subjects/egypt/Pyramids/level6.js', current: 41 },
    { path: 'src/questions/data/subjects/egypt/Pyramids/level10.js', current: 41 },

    // F1
    { path: 'src/questions/data/subjects/f1/Auto-innovaties/level3.js', current: 41 },
    { path: 'src/questions/data/subjects/f1/Bekende circuits/level5.js', current: 41 },
    { path: 'src/questions/data/subjects/f1/Bekende circuits/level10.js', current: 41 },
    { path: 'src/questions/data/subjects/f1/Legendarische coureurs/level1.js', current: 41 },
    { path: 'src/questions/data/subjects/f1/Legendarische coureurs/level7.js', current: 41 },
    { path: 'src/questions/data/subjects/f1/Moderne supersterren/level1.js', current: 41 },
    { path: 'src/questions/data/subjects/f1/Rivaliteiten/level1.js', current: 41 },

    // Famous-buildings
    { path: 'src/questions/data/subjects/famous-buildings/Colosseum/level2.js', current: 41 },
    { path: 'src/questions/data/subjects/famous-buildings/Colosseum/level8.js', current: 41 },
    { path: 'src/questions/data/subjects/famous-buildings/Empire State Building/level2.js', current: 41 },

    // Food
    { path: 'src/questions/data/subjects/food/Pasta Types/level2.js', current: 41 },
    { path: 'src/questions/data/subjects/food/Seafood/level3.js', current: 41 }
];

// Process files that have 41 questions (remove last one)
console.log('=== Fixing files with 41 questions ===\n');

filesToTruncate.forEach(file => {
    if (file.current === 41) {
        try {
            const content = fs.readFileSync(file.path, 'utf8');

            // Find all question blocks
            const questionMatches = [];
            let match;
            const regex = /{\s*question:\s*{[\s\S]*?}\s*}/g;

            while ((match = regex.exec(content)) !== null) {
                questionMatches.push({
                    start: match.index,
                    end: match.index + match[0].length,
                    text: match[0]
                });
            }

            if (questionMatches.length === 41) {
                // Remove the last question
                const lastQuestion = questionMatches[questionMatches.length - 1];

                // Find if there's a comma before the last question
                let beforeLastQ = content.substring(0, lastQuestion.start).trimEnd();
                if (beforeLastQ.endsWith(',')) {
                    beforeLastQ = beforeLastQ.substring(0, beforeLastQ.length - 1);
                }

                // Get content after the last question
                let afterLastQ = content.substring(lastQuestion.end);

                // Remove leading comma if present
                afterLastQ = afterLastQ.trimStart();
                if (afterLastQ.startsWith(',')) {
                    afterLastQ = afterLastQ.substring(1);
                }

                const newContent = beforeLastQ + afterLastQ;
                fs.writeFileSync(file.path, newContent, 'utf8');

                const newCount = countQuestions(file.path);
                console.log(`✓ Fixed ${file.path.split('/').slice(-2).join('/')}: 41 → ${newCount}`);
            }
        } catch (error) {
            console.log(`✗ Error fixing ${file.path}: ${error.message}`);
        }
    }
});

console.log('\n=== Summary ===');
console.log('Files with 41 questions have been truncated to 40.');
console.log('Files with 42-43 questions need manual review.');
console.log('Files with <40 questions need content additions.');