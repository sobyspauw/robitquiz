const fs = require('fs');
const path = require('path');
const vm = require('vm');

// Character limit guidelines
const CHAR_LIMITS = {
    question: {
        '1-5': 120,
        '6-8': 140,
        '9-10': 160
    },
    options: {
        '1-5': 100,
        '6-8': 100,
        '9-10': 100
    },
    explanation: {
        '1-5': 350,
        '6-8': 400,
        '9-10': 450
    }
};

// Required languages
const REQUIRED_LANGS = ['en', 'es', 'de', 'nl'];

// Statistics
const stats = {
    totalFiles: 0,
    totalQuestions: 0,
    filesWithCorrectCount: 0,
    filesWithIssues: [],

    // Character limit violations
    questionsTooLong: 0,
    optionsTooLong: 0,
    explanationsTooLong: 0,

    // Translation issues
    missingTranslations: 0,
    filesWithMissingTranslations: new Set(),

    // Structure issues
    missingCorrectIndex: 0,
    invalidCorrectIndex: 0,
    wrongOptionCount: 0,

    // Per subject stats
    bySubject: {},

    // Detailed issues
    detailedIssues: []
};

function getLevelRange(level) {
    if (level <= 5) return '1-5';
    if (level <= 8) return '6-8';
    return '9-10';
}

function checkCharacterLimits(text, type, level) {
    const range = getLevelRange(level);
    const limit = CHAR_LIMITS[type][range];
    return {
        length: text.length,
        limit: limit,
        overLimit: text.length > limit,
        percentage: Math.round((text.length / limit) * 100)
    };
}

function analyzeQuestionFile(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');

        // Use vm to safely execute the module
        const sandbox = { module: { exports: {} }, exports: {} };
        vm.createContext(sandbox);
        vm.runInContext(content, sandbox);

        const data = sandbox.module.exports;

        if (!data || !data.questions || !Array.isArray(data.questions)) {
            return { error: 'Invalid file structure - no questions array found' };
        }

        const questions = data.questions;
        const level = parseInt(path.basename(filePath).match(/level(\d+)/)?.[1] || '1');
        const issues = [];
        let hasTranslationIssues = false;

        // Check question count
        if (questions.length < 100) {
            issues.push({
                type: 'INSUFFICIENT_QUESTIONS',
                message: `Only ${questions.length} questions (need 100+)`,
                severity: 'HIGH'
            });
        }

        // Analyze each question
        questions.forEach((q, index) => {
            // Check for required fields
            if (!q.question) {
                issues.push({
                    type: 'MISSING_QUESTION',
                    questionIndex: index,
                    message: `Question ${index + 1} missing question field`
                });
            }

            if (!q.options || !Array.isArray(q.options)) {
                issues.push({
                    type: 'MISSING_OPTIONS',
                    questionIndex: index,
                    message: `Question ${index + 1} missing options array`
                });
            }

            if (q.correct === undefined || q.correct === null) {
                issues.push({
                    type: 'MISSING_CORRECT',
                    questionIndex: index,
                    message: `Question ${index + 1} missing correct index`
                });
                stats.missingCorrectIndex++;
            }

            // Check translations
            REQUIRED_LANGS.forEach(lang => {
                if (q.question && !q.question[lang]) {
                    hasTranslationIssues = true;
                    stats.missingTranslations++;
                }

                if (q.explanation && !q.explanation[lang]) {
                    hasTranslationIssues = true;
                    stats.missingTranslations++;
                }
            });

            // Check character limits
            if (q.question && q.question.en) {
                const check = checkCharacterLimits(q.question.en, 'question', level);
                if (check.overLimit) {
                    stats.questionsTooLong++;
                }
            }

            // Check options
            if (q.options && Array.isArray(q.options)) {
                if (q.options.length !== 4) {
                    stats.wrongOptionCount++;
                }

                // Check correct index validity
                if (q.correct !== undefined && (q.correct < 0 || q.correct >= q.options.length)) {
                    stats.invalidCorrectIndex++;
                }

                // Check option character limits and translations
                q.options.forEach((opt, optIndex) => {
                    REQUIRED_LANGS.forEach(lang => {
                        if (!opt[lang]) {
                            hasTranslationIssues = true;
                            stats.missingTranslations++;
                        }
                    });

                    if (opt.en) {
                        const check = checkCharacterLimits(opt.en, 'options', level);
                        if (check.overLimit) {
                            stats.optionsTooLong++;
                        }
                    }
                });
            }

            // Check explanation character limits
            if (q.explanation && q.explanation.en) {
                const check = checkCharacterLimits(q.explanation.en, 'explanation', level);
                if (check.overLimit) {
                    stats.explanationsTooLong++;
                }
            }
        });

        if (hasTranslationIssues) {
            stats.filesWithMissingTranslations.add(path.relative(path.join(__dirname, '..'), filePath));
        }

        return {
            questionCount: questions.length,
            issues: issues,
            level: level
        };

    } catch (error) {
        return { error: error.message };
    }
}

function processAllFiles() {
    const baseDir = path.join(__dirname, '..', 'src', 'questions', 'data', 'subjects');
    const subjects = fs.readdirSync(baseDir);

    console.log('🔍 Starting comprehensive quality check...\n');
    console.log('=' .repeat(80));

    subjects.forEach(subject => {
        const subjectPath = path.join(baseDir, subject);
        if (!fs.statSync(subjectPath).isDirectory()) return;

        stats.bySubject[subject] = {
            totalFiles: 0,
            totalQuestions: 0,
            filesWithIssues: 0,
            filesUnder100: [],
            issues: []
        };

        const categories = fs.readdirSync(subjectPath);

        categories.forEach(category => {
            const categoryPath = path.join(subjectPath, category);
            if (!fs.statSync(categoryPath).isDirectory()) return;

            const files = fs.readdirSync(categoryPath).filter(f => f.endsWith('.js'));

            files.forEach(file => {
                const filePath = path.join(categoryPath, file);
                const result = analyzeQuestionFile(filePath);

                stats.totalFiles++;
                stats.bySubject[subject].totalFiles++;

                if (result.error) {
                    stats.filesWithIssues.push({
                        file: path.relative(baseDir, filePath),
                        error: result.error
                    });
                    stats.bySubject[subject].filesWithIssues++;
                } else {
                    stats.totalQuestions += result.questionCount;
                    stats.bySubject[subject].totalQuestions += result.questionCount;

                    if (result.questionCount >= 100) {
                        stats.filesWithCorrectCount++;
                    } else {
                        stats.bySubject[subject].filesUnder100.push({
                            file: path.relative(subjectPath, filePath),
                            count: result.questionCount
                        });
                    }

                    if (result.issues.length > 0) {
                        stats.filesWithIssues.push({
                            file: path.relative(baseDir, filePath),
                            questionCount: result.questionCount,
                            issues: result.issues
                        });
                        stats.bySubject[subject].filesWithIssues++;
                        stats.bySubject[subject].issues.push({
                            file: path.relative(subjectPath, filePath),
                            issues: result.issues
                        });
                    }
                }
            });
        });
    });

    // Generate report
    generateReport();
}

function generateReport() {
    console.log('\n📊 QUALITY CHECK REPORT');
    console.log('=' .repeat(80));

    // Overall statistics
    console.log('\n📈 OVERALL STATISTICS:');
    console.log(`Total files analyzed: ${stats.totalFiles}`);
    console.log(`Total questions: ${stats.totalQuestions.toLocaleString()}`);
    console.log(`Average questions per file: ${Math.round(stats.totalQuestions / stats.totalFiles)}`);
    console.log(`Files with 100+ questions: ${stats.filesWithCorrectCount} (${Math.round(stats.filesWithCorrectCount / stats.totalFiles * 100)}%)`);

    // Character limit violations
    const totalCharViolations = stats.questionsTooLong + stats.optionsTooLong + stats.explanationsTooLong;
    console.log('\n📏 CHARACTER LIMIT VIOLATIONS:');
    console.log(`Questions too long: ${stats.questionsTooLong}`);
    console.log(`Options too long: ${stats.optionsTooLong}`);
    console.log(`Explanations too long: ${stats.explanationsTooLong}`);
    console.log(`Total violations: ${totalCharViolations}`);

    // Translation issues
    console.log('\n🌍 TRANSLATION ISSUES:');
    console.log(`Missing translations: ${stats.missingTranslations}`);
    console.log(`Files with missing translations: ${stats.filesWithMissingTranslations.size}`);

    // Structure issues
    console.log('\n🏗️ STRUCTURE ISSUES:');
    console.log(`Missing correct index: ${stats.missingCorrectIndex}`);
    console.log(`Invalid correct index: ${stats.invalidCorrectIndex}`);
    console.log(`Wrong option count (not 4): ${stats.wrongOptionCount}`);

    // Per subject summary
    console.log('\n📚 PER SUBJECT SUMMARY:');
    console.log('-'.repeat(80));

    let totalFilesUnder100 = 0;

    Object.keys(stats.bySubject).sort().forEach(subject => {
        const subj = stats.bySubject[subject];
        const avgQuestions = Math.round(subj.totalQuestions / subj.totalFiles);
        const filesUnder100Count = subj.filesUnder100 ? subj.filesUnder100.length : 0;
        totalFilesUnder100 += filesUnder100Count;

        const status = filesUnder100Count === 0 ? '✅' : '⚠️';

        console.log(`\n${status} ${subject.toUpperCase()}`);
        console.log(`   Files: ${subj.totalFiles} | Questions: ${subj.totalQuestions.toLocaleString()} | Avg: ${avgQuestions}`);

        if (filesUnder100Count > 0) {
            console.log(`   ❌ Files with <100 questions: ${filesUnder100Count}`);
            subj.filesUnder100.slice(0, 3).forEach(f => {
                console.log(`      - ${f.file}: ${f.count} questions`);
            });
            if (filesUnder100Count > 3) {
                console.log(`      ... and ${filesUnder100Count - 3} more files`);
            }
        }
    });

    // Quality assessment
    console.log('\n' + '='.repeat(80));
    console.log('📋 QUALITY ASSESSMENT:');

    const qualityScore = {
        questionCount: stats.filesWithCorrectCount / stats.totalFiles * 100,
        charLimits: 100 - (totalCharViolations / stats.totalQuestions * 100),
        translations: 100 - (stats.filesWithMissingTranslations.size / stats.totalFiles * 100),
        structure: 100 - ((stats.missingCorrectIndex + stats.invalidCorrectIndex + stats.wrongOptionCount) / stats.totalQuestions * 100)
    };

    console.log(`✅ Question Count: ${qualityScore.questionCount.toFixed(1)}% files have 100+ questions`);
    console.log(`✅ Character Limits: ${qualityScore.charLimits.toFixed(1)}% compliance`);
    console.log(`✅ Translations: ${qualityScore.translations.toFixed(1)}% files have all languages`);
    console.log(`✅ Structure: ${qualityScore.structure.toFixed(1)}% properly formatted`);

    const overallScore = (qualityScore.questionCount + qualityScore.charLimits + qualityScore.translations + qualityScore.structure) / 4;

    console.log(`\n🏆 OVERALL QUALITY SCORE: ${overallScore.toFixed(1)}%`);

    if (overallScore >= 95) {
        console.log('✨ EXCELLENT! All quality requirements are met or exceeded!');
    } else if (overallScore >= 90) {
        console.log('✅ VERY GOOD! Minor improvements needed.');
    } else if (overallScore >= 80) {
        console.log('⚠️ GOOD! Some quality issues need attention.');
    } else {
        console.log('❌ NEEDS IMPROVEMENT! Significant quality issues found.');
    }

    // Files needing immediate attention
    if (totalFilesUnder100 > 0) {
        console.log('\n⚠️ IMMEDIATE ATTENTION NEEDED:');
        console.log(`${totalFilesUnder100} files have less than 100 questions and need to be expanded.`);
    }

    // Save detailed report
    const reportPath = path.join(__dirname, 'quality_report.json');
    fs.writeFileSync(reportPath, JSON.stringify({
        summary: {
            totalFiles: stats.totalFiles,
            totalQuestions: stats.totalQuestions,
            filesWithCorrectCount: stats.filesWithCorrectCount,
            qualityScore: qualityScore,
            overallScore: overallScore
        },
        violations: {
            characterLimits: {
                questions: stats.questionsTooLong,
                options: stats.optionsTooLong,
                explanations: stats.explanationsTooLong
            },
            translations: stats.missingTranslations,
            structure: {
                missingCorrect: stats.missingCorrectIndex,
                invalidCorrect: stats.invalidCorrectIndex,
                wrongOptionCount: stats.wrongOptionCount
            }
        },
        bySubject: stats.bySubject
    }, null, 2));

    console.log(`\n📄 Detailed report saved to: ${reportPath}`);
}

// Run the analysis
processAllFiles();