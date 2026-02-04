
const fs = require('fs');
const path = require('path');

// Find all files that need expansion
function findFilesToExpand() {
    const subjects = ['famous-people', 'famous-buildings'];
    const files = [];

    subjects.forEach(subject => {
        const subjectPath = path.join(__dirname, 'src/questions/data/subjects', subject);
        if (!fs.existsSync(subjectPath)) return;

        // Get all subdirectories
        const categories = fs.readdirSync(subjectPath).filter(f => {
            return fs.statSync(path.join(subjectPath, f)).isDirectory();
        });

        categories.forEach(category => {
            const categoryPath = path.join(subjectPath, category);
            const levelFiles = fs.readdirSync(categoryPath).filter(f => f.endsWith('.js'));

            levelFiles.forEach(file => {
                const filePath = path.join(categoryPath, file);
                const content = fs.readFileSync(filePath, 'utf8');
                const questionCount = (content.match(/question:/g) || []).length;

                if (questionCount < 100) {
                    files.push({
                        path: filePath,
                        subject,
                        category,
                        level: file.replace('.js', ''),
                        currentCount: questionCount,
                        needed: 100 - questionCount
                    });
                }
            });
        });
    });

    return files;
}

// Generate new questions for a specific topic
function generateQuestionsForFile(fileInfo) {
    console.log(`Generating ${fileInfo.needed} questions for ${fileInfo.category} ${fileInfo.level}`);

    // This is where you would call an AI API or use predefined questions
    // For now, return a template
    const questions = [];

    // Template for new questions
    for (let i = 0; i < Math.min(fileInfo.needed, 5); i++) {
        questions.push({
            question: {
                en: `Advanced question ${i+1} about ${fileInfo.category}`,
                es: `Pregunta avanzada ${i+1} sobre ${fileInfo.category}`,
                de: `Fortgeschrittene Frage ${i+1} über ${fileInfo.category}`,
                nl: `Geavanceerde vraag ${i+1} over ${fileInfo.category}`
            },
            options: [
                { en: "Correct answer", es: "Respuesta correcta", de: "Richtige Antwort", nl: "Correct antwoord" },
                { en: "Wrong answer 1", es: "Respuesta incorrecta 1", de: "Falsche Antwort 1", nl: "Fout antwoord 1" },
                { en: "Wrong answer 2", es: "Respuesta incorrecta 2", de: "Falsche Antwort 2", nl: "Fout antwoord 2" },
                { en: "Wrong answer 3", es: "Respuesta incorrecta 3", de: "Falsche Antwort 3", nl: "Fout antwoord 3" }
            ],
            correct: 0,
            explanation: {
                en: "This is the correct answer because...",
                es: "Esta es la respuesta correcta porque...",
                de: "Dies ist die richtige Antwort, weil...",
                nl: "Dit is het juiste antwoord omdat..."
            }
        });
    }

    return questions;
}

// Main execution
const filesToExpand = findFilesToExpand();
console.log(`Found ${filesToExpand.length} files that need expansion:`);

filesToExpand.forEach(file => {
    console.log(`  ${file.subject}/${file.category}/${file.level}: ${file.currentCount} -> 100 questions (need ${file.needed} more)`);
});

// Save the list for reference
fs.writeFileSync('temp/files_to_expand.json', JSON.stringify(filesToExpand, null, 2));
console.log('\nList saved to temp/files_to_expand.json');
console.log('\nTo expand these files, you would need to:');
console.log('1. Generate appropriate questions for each topic');
console.log('2. Add them to the existing files');
console.log('3. Ensure proper formatting and syntax');
