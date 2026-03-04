const fs = require('fs');
const path = require('path');
const vm = require('vm');

// Statistics
const stats = {
    totalFiles: 0,
    filesWithFakeTranslations: [],
    totalFakeTranslations: 0,
    bySubject: {}
};

function checkForFakeTranslations(text, lang) {
    if (!text) return false;

    // Check for obvious fake translation patterns
    const fakePatterns = [
        new RegExp(`^${lang.toUpperCase()}:\\s*`, 'i'), // Starts with "ES:", "DE:", "NL:"
        new RegExp(`^${lang}:\\s*`, 'i'), // Starts with "es:", "de:", "nl:"
    ];

    // Check if it starts with language prefix
    for (const pattern of fakePatterns) {
        if (pattern.test(text)) {
            return true;
        }
    }

    // Additional check: if non-English translation contains mostly English words
    // and is very similar to English version (for non-en languages)
    if (lang !== 'en') {
        // Check for "Incorrect:" or "Correct:" prefixes which shouldn't be in translations
        if (text.includes('Incorrect:') || text.includes('Correct:')) {
            return true;
        }

        // Check if text contains "AI geschiedenis" without translation
        if (lang === 'es' && text.includes('AI geschiedenis')) return true;
        if (lang === 'de' && text.includes('AI geschiedenis')) return true;
    }

    return false;
}

function analyzeFile(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');

        // Use vm to safely execute the module
        const sandbox = { module: { exports: {} }, exports: {} };
        vm.createContext(sandbox);
        vm.runInContext(content, sandbox);

        const data = sandbox.module.exports;

        if (!data || !data.questions || !Array.isArray(data.questions)) {
            return { error: 'Invalid file structure' };
        }

        const questions = data.questions;
        const fakeTranslations = [];

        questions.forEach((q, qIndex) => {
            // Check question translations
            if (q.question) {
                ['es', 'de', 'nl'].forEach(lang => {
                    if (q.question[lang] && checkForFakeTranslations(q.question[lang], lang)) {
                        fakeTranslations.push({
                            questionIndex: qIndex + 1,
                            field: 'question',
                            language: lang,
                            text: q.question[lang].substring(0, 50) + '...'
                        });
                    }
                });
            }

            // Check option translations
            if (q.options && Array.isArray(q.options)) {
                q.options.forEach((opt, optIndex) => {
                    ['es', 'de', 'nl'].forEach(lang => {
                        if (opt[lang] && checkForFakeTranslations(opt[lang], lang)) {
                            fakeTranslations.push({
                                questionIndex: qIndex + 1,
                                field: `option ${optIndex + 1}`,
                                language: lang,
                                text: opt[lang].substring(0, 50) + '...'
                            });
                        }
                    });
                });
            }

            // Check explanation translations
            if (q.explanation) {
                ['es', 'de', 'nl'].forEach(lang => {
                    if (q.explanation[lang] && checkForFakeTranslations(q.explanation[lang], lang)) {
                        fakeTranslations.push({
                            questionIndex: qIndex + 1,
                            field: 'explanation',
                            language: lang,
                            text: q.explanation[lang].substring(0, 50) + '...'
                        });
                    }
                });
            }
        });

        return {
            questionCount: questions.length,
            fakeTranslations: fakeTranslations
        };

    } catch (error) {
        return { error: error.message };
    }
}

function processAllFiles() {
    const baseDir = path.join(__dirname, '..', 'src', 'questions', 'data', 'subjects');
    const subjects = fs.readdirSync(baseDir);

    console.log('🔍 Detecting fake translations...\n');
    console.log('=' .repeat(80));

    subjects.forEach(subject => {
        const subjectPath = path.join(baseDir, subject);
        if (!fs.statSync(subjectPath).isDirectory()) return;

        stats.bySubject[subject] = {
            totalFiles: 0,
            filesWithFakes: 0,
            fakeCount: 0,
            affectedFiles: []
        };

        const categories = fs.readdirSync(subjectPath);

        categories.forEach(category => {
            const categoryPath = path.join(subjectPath, category);
            if (!fs.statSync(categoryPath).isDirectory()) return;

            const files = fs.readdirSync(categoryPath).filter(f => f.endsWith('.js'));

            files.forEach(file => {
                const filePath = path.join(categoryPath, file);
                const result = analyzeFile(filePath);

                stats.totalFiles++;
                stats.bySubject[subject].totalFiles++;

                if (!result.error && result.fakeTranslations && result.fakeTranslations.length > 0) {
                    const fileInfo = {
                        file: path.relative(baseDir, filePath),
                        category: category,
                        fakeCount: result.fakeTranslations.length,
                        examples: result.fakeTranslations.slice(0, 3) // First 3 examples
                    };

                    stats.filesWithFakeTranslations.push(fileInfo);
                    stats.totalFakeTranslations += result.fakeTranslations.length;
                    stats.bySubject[subject].filesWithFakes++;
                    stats.bySubject[subject].fakeCount += result.fakeTranslations.length;
                    stats.bySubject[subject].affectedFiles.push({
                        file: path.relative(subjectPath, filePath),
                        fakeCount: result.fakeTranslations.length
                    });
                }
            });
        });
    });

    // Generate report
    generateReport();
}

function generateReport() {
    console.log('\n📊 FAKE TRANSLATION DETECTION REPORT');
    console.log('=' .repeat(80));

    console.log('\n📈 OVERALL STATISTICS:');
    console.log(`Total files analyzed: ${stats.totalFiles}`);
    console.log(`Files with fake translations: ${stats.filesWithFakeTranslations.length}`);
    console.log(`Total fake translations found: ${stats.totalFakeTranslations}`);
    console.log(`Percentage affected: ${(stats.filesWithFakeTranslations.length / stats.totalFiles * 100).toFixed(1)}%`);

    // Per subject summary
    console.log('\n📚 PER SUBJECT ISSUES:');
    console.log('-'.repeat(80));

    Object.keys(stats.bySubject).sort().forEach(subject => {
        const subj = stats.bySubject[subject];
        if (subj.filesWithFakes > 0) {
            console.log(`\n❌ ${subject.toUpperCase()}`);
            console.log(`   Files with fake translations: ${subj.filesWithFakes}/${subj.totalFiles}`);
            console.log(`   Total fake translations: ${subj.fakeCount}`);

            // Show most affected files
            const sortedFiles = subj.affectedFiles.sort((a, b) => b.fakeCount - a.fakeCount);
            console.log('   Most affected files:');
            sortedFiles.slice(0, 3).forEach(f => {
                console.log(`     - ${f.file}: ${f.fakeCount} fake translations`);
            });

            if (sortedFiles.length > 3) {
                console.log(`     ... and ${sortedFiles.length - 3} more files`);
            }
        } else {
            console.log(`\n✅ ${subject.toUpperCase()} - No fake translations found`);
        }
    });

    // Examples of fake translations
    if (stats.filesWithFakeTranslations.length > 0) {
        console.log('\n⚠️ EXAMPLES OF FAKE TRANSLATIONS:');
        console.log('-'.repeat(80));

        stats.filesWithFakeTranslations.slice(0, 5).forEach(fileInfo => {
            console.log(`\nFile: ${fileInfo.file}`);
            fileInfo.examples.forEach(ex => {
                console.log(`  Q${ex.questionIndex} ${ex.field} [${ex.language}]: "${ex.text}"`);
            });
        });

        if (stats.filesWithFakeTranslations.length > 5) {
            console.log(`\n... and ${stats.filesWithFakeTranslations.length - 5} more files with fake translations`);
        }
    }

    // Summary
    console.log('\n' + '='.repeat(80));
    if (stats.filesWithFakeTranslations.length === 0) {
        console.log('✅ EXCELLENT! No fake translations detected.');
    } else {
        console.log(`❌ ATTENTION NEEDED! ${stats.filesWithFakeTranslations.length} files contain fake translations.`);
        console.log('These files have placeholder text instead of proper translations.');
    }

    // Save detailed report
    const reportPath = path.join(__dirname, 'fake_translations_report.json');
    fs.writeFileSync(reportPath, JSON.stringify({
        summary: {
            totalFiles: stats.totalFiles,
            filesWithFakeTranslations: stats.filesWithFakeTranslations.length,
            totalFakeTranslations: stats.totalFakeTranslations,
            percentageAffected: (stats.filesWithFakeTranslations.length / stats.totalFiles * 100).toFixed(1)
        },
        bySubject: stats.bySubject,
        affectedFiles: stats.filesWithFakeTranslations
    }, null, 2));

    console.log(`\n📄 Detailed report saved to: ${reportPath}`);
}

// Run the analysis
processAllFiles();