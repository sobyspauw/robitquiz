const fs = require('fs');
const path = require('path');
const vm = require('vm');

let stats = {
    totalFiles: 0,
    filesFixed: 0,
    labelsRemoved: 0,
    errors: []
};

function cleanAllLabels(text) {
    if (!text) return text;

    // Remove any variation of Correct/Incorrect labels
    let cleaned = text
        .replace(/^(Correct|Incorrect|correct|incorrect|CORRECT|INCORRECT):\s*/g, '')
        .replace(/^(Correcto|Incorrecto):\s*/gi, '') // Spanish
        .replace(/^(Korrekt|Inkorrekt|Richtig|Falsch):\s*/gi, '') // German
        .replace(/^(Juist|Onjuist|Correct|Incorrect):\s*/gi, ''); // Dutch

    // Also clean if it starts after a quote or prefix
    cleaned = cleaned
        .replace(/^["']?(Correct|Incorrect):\s*/gi, '')
        .replace(/^(ES|DE|NL):\s*(Correct|Incorrect):\s*/gi, '');

    return cleaned;
}

function processFile(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');

        // Parse the module
        const sandbox = { module: { exports: {} }, exports: {} };
        vm.createContext(sandbox);
        vm.runInContext(content, sandbox);

        const data = sandbox.module.exports;

        if (!data || !data.questions || !Array.isArray(data.questions)) {
            return { error: 'Invalid file structure' };
        }

        let anyFixed = false;

        const fixedQuestions = data.questions.map((q, index) => {
            const fixedQuestion = JSON.parse(JSON.stringify(q)); // Deep clone

            // Clean question text
            if (fixedQuestion.question) {
                for (const lang of Object.keys(fixedQuestion.question)) {
                    const original = fixedQuestion.question[lang];
                    const cleaned = cleanAllLabels(original);
                    if (cleaned !== original) {
                        fixedQuestion.question[lang] = cleaned;
                        anyFixed = true;
                        stats.labelsRemoved++;
                    }
                }
            }

            // Clean options
            if (fixedQuestion.options && Array.isArray(fixedQuestion.options)) {
                fixedQuestion.options = fixedQuestion.options.map(option => {
                    const fixedOption = {...option};
                    for (const lang of Object.keys(fixedOption)) {
                        const original = fixedOption[lang];
                        const cleaned = cleanAllLabels(original);
                        if (cleaned !== original) {
                            fixedOption[lang] = cleaned;
                            anyFixed = true;
                            stats.labelsRemoved++;
                        }
                    }
                    return fixedOption;
                });
            }

            // Clean explanation
            if (fixedQuestion.explanation) {
                for (const lang of Object.keys(fixedQuestion.explanation)) {
                    const original = fixedQuestion.explanation[lang];
                    const cleaned = cleanAllLabels(original);
                    if (cleaned !== original) {
                        fixedQuestion.explanation[lang] = cleaned;
                        anyFixed = true;
                        stats.labelsRemoved++;
                    }
                }
            }

            return fixedQuestion;
        });

        if (anyFixed) {
            // Generate the new file content
            const fileName = path.basename(filePath, '.js');
            const category = path.basename(path.dirname(filePath));

            let newContent = `// ${category} - ${fileName}\n`;
            newContent += `// Total questions: ${fixedQuestions.length}\n`;
            newContent += `// Labels cleaned: ${new Date().toISOString()}\n\n`;
            newContent += `module.exports = {\n`;
            newContent += `    questions: ${JSON.stringify(fixedQuestions, null, 8).replace(/^/gm, '    ').trim()}\n`;
            newContent += `};\n`;

            // Write the fixed file
            fs.writeFileSync(filePath, newContent, 'utf8');

            return { fixed: true };
        }

        return { fixed: false };

    } catch (error) {
        return { error: error.message };
    }
}

function processAllFiles() {
    const baseDir = path.join(__dirname, '..', 'src', 'questions', 'data', 'subjects');

    // Focus on the subjects that still have issues
    const problemSubjects = ['ai', 'board-games', 'books', 'currencies'];

    console.log('🔧 Fixing remaining Correct/Incorrect labels...\n');
    console.log('=' .repeat(80));

    problemSubjects.forEach(subject => {
        const subjectPath = path.join(baseDir, subject);
        if (!fs.existsSync(subjectPath)) return;

        console.log(`\n📁 Processing ${subject}...`);

        const categories = fs.readdirSync(subjectPath);
        let subjectFixed = 0;

        categories.forEach(category => {
            const categoryPath = path.join(subjectPath, category);
            if (!fs.statSync(categoryPath).isDirectory()) return;

            const files = fs.readdirSync(categoryPath).filter(f => f.endsWith('.js'));

            files.forEach(file => {
                const filePath = path.join(categoryPath, file);
                stats.totalFiles++;

                const result = processFile(filePath);

                if (result.error) {
                    stats.errors.push({
                        file: path.relative(baseDir, filePath),
                        error: result.error
                    });
                    process.stdout.write('❌');
                } else if (result.fixed) {
                    stats.filesFixed++;
                    subjectFixed++;
                    process.stdout.write('✅');
                } else {
                    process.stdout.write('⚪');
                }

                // Progress indicator
                if (stats.totalFiles % 50 === 0) {
                    process.stdout.write(` [${stats.totalFiles}]\n`);
                }
            });
        });

        console.log(`\n   Fixed: ${subjectFixed} files`);
    });

    // Final report
    console.log('\n' + '=' .repeat(80));
    console.log('📊 LABEL CLEANUP REPORT');
    console.log('=' .repeat(80));
    console.log(`\nTotal files processed: ${stats.totalFiles}`);
    console.log(`Files fixed: ${stats.filesFixed}`);
    console.log(`Labels removed: ${stats.labelsRemoved.toLocaleString()}`);

    if (stats.errors.length > 0) {
        console.log(`\n⚠️ Errors encountered: ${stats.errors.length}`);
        stats.errors.forEach(err => {
            console.log(`  - ${err.file}: ${err.error}`);
        });
    }

    console.log('\n✅ Label cleanup complete!');
}

// Run the fix
processAllFiles();