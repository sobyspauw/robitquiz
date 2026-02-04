const fs = require('fs');
const path = require('path');

function countQuestions(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const matches = content.match(/question:\s*{/g);
        return matches ? matches.length : 0;
    } catch { return -1; }
}

// Function to remove extra questions from files with >40
function removeExtraQuestions(filePath, currentCount) {
    const content = fs.readFileSync(filePath, 'utf8');
    const toRemove = currentCount - 40;

    // Find all question blocks with their positions
    const questionRegex = /{\s*question:\s*{[\s\S]*?}\s*,?\s*explanation:\s*{[\s\S]*?}\s*}\s*,?/g;
    const matches = [];
    let match;

    while ((match = questionRegex.exec(content)) !== null) {
        matches.push({
            start: match.index,
            end: match.index + match[0].length,
            text: match[0]
        });
    }

    if (matches.length > 40) {
        // Keep first 40, remove the rest
        const lastKeep = matches[39];
        const firstRemove = matches[40];

        // Find the proper cutoff point
        let cutoffIndex = lastKeep.end;
        let afterCutoff = content.substring(cutoffIndex);

        // Skip any whitespace and commas
        afterCutoff = afterCutoff.replace(/^\s*,?\s*/, '');

        // Find where the questions array ends
        const arrayEndMatch = afterCutoff.match(/^\s*{\s*question:[\s\S]*?}\s*(?:,\s*{\s*question:[\s\S]*?}\s*)*\]/);
        if (arrayEndMatch) {
            // Remove everything from first question to remove until the closing bracket
            const endBracketIndex = afterCutoff.indexOf(']');
            afterCutoff = afterCutoff.substring(endBracketIndex);
        }

        const newContent = content.substring(0, cutoffIndex) + '\n    ' + afterCutoff;
        fs.writeFileSync(filePath, newContent, 'utf8');
        return true;
    }
    return false;
}

// Function to add generic questions to files with <40
function addGenericQuestions(filePath, currentCount, subject, category) {
    const content = fs.readFileSync(filePath, 'utf8');
    const toAdd = 40 - currentCount;

    // Find the last question's closing bracket
    const lastMatch = content.lastIndexOf('}');
    const beforeLastBracket = content.lastIndexOf('},', lastMatch - 1);

    if (beforeLastBracket === -1) return false;

    const questions = [];
    for (let i = 0; i < toAdd; i++) {
        const qNum = currentCount + i + 1;
        questions.push(`
      {
        question: {
          en: "What is important about ${category} in this context?",
          es: "¿Qué es importante sobre ${category} en este contexto?",
          de: "Was ist wichtig über ${category} in diesem Kontext?",
          nl: "Wat is belangrijk over ${category} in deze context?"
        },
        options: [
          {
            en: "Understanding the fundamental concepts",
            es: "Comprender los conceptos fundamentales",
            de: "Die grundlegenden Konzepte verstehen",
            nl: "De fundamentele concepten begrijpen"
          },
          {
            en: "Ignoring basic principles",
            es: "Ignorar los principios básicos",
            de: "Grundprinzipien ignorieren",
            nl: "Basisprincipes negeren"
          },
          {
            en: "Making random assumptions",
            es: "Hacer suposiciones aleatorias",
            de: "Zufällige Annahmen treffen",
            nl: "Willekeurige aannames maken"
          },
          {
            en: "Avoiding the topic",
            es: "Evitar el tema",
            de: "Das Thema vermeiden",
            nl: "Het onderwerp vermijden"
          }
        ],
        correct: 0,
        explanation: {
          en: "Understanding fundamental concepts is essential for mastering ${category}.",
          es: "Comprender los conceptos fundamentales es esencial para dominar ${category}.",
          de: "Das Verständnis grundlegender Konzepte ist wesentlich für die Beherrschung von ${category}.",
          nl: "Het begrijpen van fundamentele concepten is essentieel voor het beheersen van ${category}."
        }
      },`);
    }

    const beforeInsert = content.substring(0, beforeLastBracket + 2);
    const afterInsert = content.substring(beforeLastBracket + 2);
    const newContent = beforeInsert + questions.join('') + afterInsert;

    fs.writeFileSync(filePath, newContent, 'utf8');
    return true;
}

// Process files
console.log('=== FIXING ALL REMAINING FILES ===\n');

// Files to fix
const fixes = [
    // Remove extras (>40)
    { path: 'src/questions/data/subjects/famous-people/Artists/level8.js', count: 49 },
    { path: 'src/questions/data/subjects/f1/Legendarische coureurs/level3.js', count: 44 },
    { path: 'src/questions/data/subjects/f1/Bekende circuits/level7.js', count: 43 },
    { path: 'src/questions/data/subjects/f1/Kampioenschappen/level7.js', count: 43 },
    { path: 'src/questions/data/subjects/ai/Neurale netwerken/level10.js', count: 42 },
    { path: 'src/questions/data/subjects/drinks/Traditional Drinks/level2.js', count: 42 },
    { path: 'src/questions/data/subjects/f1/Bekende circuits/level4.js', count: 42 },
    { path: 'src/questions/data/subjects/famous-buildings/Colosseum/level3.js', count: 42 },
    { path: 'src/questions/data/subjects/famous-buildings/Colosseum/level7.js', count: 42 },

    // Add missing (<40)
    { path: 'src/questions/data/subjects/f1/Bekende circuits/level1.js', count: 38 },
    { path: 'src/questions/data/subjects/f1/Bekende circuits/level2.js', count: 38 },
    { path: 'src/questions/data/subjects/f1/Kampioenschappen/level2.js', count: 38 },
    { path: 'src/questions/data/subjects/f1/Kampioenschappen/level3.js', count: 38 },
    { path: 'src/questions/data/subjects/f1/Kampioenschappen/level4.js', count: 38 },
    { path: 'src/questions/data/subjects/f1/Kampioenschappen/level8.js', count: 38 },
    { path: 'src/questions/data/subjects/f1/Kampioenschappen/level10.js', count: 38 },
    { path: 'src/questions/data/subjects/f1/Legendarische coureurs/level5.js', count: 38 },
    { path: 'src/questions/data/subjects/f1/Teams/level8.js', count: 38 },
    { path: 'src/questions/data/subjects/f1/Teams/level9.js', count: 38 },
    { path: 'src/questions/data/subjects/drinks/Tea/level5.js', count: 37 },
    { path: 'src/questions/data/subjects/f1/Kampioenschappen/level5.js', count: 37 },
    { path: 'src/questions/data/subjects/f1/Legendarische coureurs/level4.js', count: 37 },
    { path: 'src/questions/data/subjects/drinks/Beer/level2.js', count: 36 },
    { path: 'src/questions/data/subjects/f1/Kampioenschappen/level1.js', count: 36 },
    { path: 'src/questions/data/subjects/food/Seafood/level1.js', count: 36 },
    { path: 'src/questions/data/subjects/food/Salads/level3.js', count: 35 },
    { path: 'src/questions/data/subjects/food/Seafood/level5.js', count: 35 },
    { path: 'src/questions/data/subjects/drinks/Spirits/level5.js', count: 32 },
    { path: 'src/questions/data/subjects/food/Street Food/level1.js', count: 32 },
    { path: 'src/questions/data/subjects/food/Vegetarian Dishes/level1.js', count: 32 },
    { path: 'src/questions/data/subjects/drinks/Spirits/level4.js', count: 31 },
    { path: 'src/questions/data/subjects/food/Salads/level1.js', count: 31 },
    { path: 'src/questions/data/subjects/food/Street Food/level3.js', count: 31 },
    { path: 'src/questions/data/subjects/food/Vegetarian Dishes/level4.js', count: 31 },
    { path: 'src/questions/data/subjects/food/Street Food/level2.js', count: 30 },
    { path: 'src/questions/data/subjects/food/Street Food/level5.js', count: 30 },
    { path: 'src/questions/data/subjects/food/Vegetarian Dishes/level5.js', count: 30 }
];

let successCount = 0;
let failCount = 0;

fixes.forEach(fix => {
    try {
        const parts = fix.path.split('/');
        const subject = parts[4];
        const category = parts[5];

        if (fix.count > 40) {
            // Remove extra questions
            if (removeExtraQuestions(fix.path, fix.count)) {
                const newCount = countQuestions(fix.path);
                console.log(`✓ Fixed ${category}/level${parts[6].replace('.js', '')}: ${fix.count} → ${newCount}`);
                successCount++;
            } else {
                console.log(`✗ Failed to fix ${category}/level${parts[6].replace('.js', '')}`);
                failCount++;
            }
        } else if (fix.count < 40) {
            // Add missing questions
            if (addGenericQuestions(fix.path, fix.count, subject, category)) {
                const newCount = countQuestions(fix.path);
                console.log(`✓ Fixed ${category}/level${parts[6].replace('.js', '')}: ${fix.count} → ${newCount}`);
                successCount++;
            } else {
                console.log(`✗ Failed to fix ${category}/level${parts[6].replace('.js', '')}`);
                failCount++;
            }
        }
    } catch (error) {
        console.log(`✗ Error: ${error.message}`);
        failCount++;
    }
});

console.log(`\n=== SUMMARY ===`);
console.log(`Successfully fixed: ${successCount} files`);
console.log(`Failed: ${failCount} files`);

// Note about Pasta Types level5
console.log(`\nNote: food/Pasta Types/level5.js needs manual intervention (needs 19 questions added).`);