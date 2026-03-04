const fs = require('fs');
const path = require('path');

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

        // Extract questions array
        const questionsMatch = content.match(/questions:\s*\[([\s\S]*)\];?\s*$/);
        if (!questionsMatch) {
            return { error: 'Could not parse questions array' };
        }

        // Parse questions more carefully
        const questionsStr = questionsMatch[1];
        let questions;
        try {
            // Create a temporary function to evaluate the questions array
            const evalFunc = new Function('return [' + questionsStr + ']');
            questions = evalFunc();
        } catch (e) {
            return { error: 'Failed to parse questions: ' + e.message };
        }

        const level = parseInt(path.basename(filePath).match(/level(\d+)/)?.[1] || '1');
        const issues = [];

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
                    issues.push({
                        type: 'MISSING_TRANSLATION',
                        questionIndex: index,
                        field: 'question',
                        language: lang,
                        message: `Q${index + 1}: Missing ${lang} translation for question`
                    });
                    stats.missingTranslations++;
                }

                if (q.explanation && !q.explanation[lang]) {
                    issues.push({
                        type: 'MISSING_TRANSLATION',
                        questionIndex: index,
                        field: 'explanation',
                        language: lang,
                        message: `Q${index + 1}: Missing ${lang} translation for explanation`
                    });
                    stats.missingTranslations++;
                }
            });

            // Check character limits
            if (q.question && q.question.en) {
                const check = checkCharacterLimits(q.question.en, 'question', level);
                if (check.overLimit) {
                    issues.push({
                        type: 'CHAR_LIMIT_EXCEEDED',
                        questionIndex: index,
                        field: 'question',
                        length: check.length,
                        limit: check.limit,
                        message: `Q${index + 1}: Question too long (${check.length}/${check.limit} chars)`
                    });
                    stats.questionsTooLong++;
                }
            }

            // Check options
            if (q.options && Array.isArray(q.options)) {
                if (q.options.length !== 4) {
                    issues.push({
                        type: 'WRONG_OPTION_COUNT',
                        questionIndex: index,
                        count: q.options.length,
                        message: `Q${index + 1}: Has ${q.options.length} options (need exactly 4)`
                    });
                    stats.wrongOptionCount++;
                }

                // Check correct index validity
                if (q.correct !== undefined && (q.correct < 0 || q.correct >= q.options.length)) {
                    issues.push({
                        type: 'INVALID_CORRECT_INDEX',
                        questionIndex: index,
                        correctIndex: q.correct,
                        optionCount: q.options.length,
                        message: `Q${index + 1}: Invalid correct index ${q.correct} for ${q.options.length} options`
                    });
                    stats.invalidCorrectIndex++;
                }

                // Check option character limits and translations
                q.options.forEach((opt, optIndex) => {
                    REQUIRED_LANGS.forEach(lang => {
                        if (!opt[lang]) {
                            issues.push({
                                type: 'MISSING_TRANSLATION',
                                questionIndex: index,
                                optionIndex: optIndex,
                                language: lang,
                                message: `Q${index + 1}, Option ${optIndex + 1}: Missing ${lang} translation`
                            });
                        }
                    });

                    if (opt.en) {
                        const check = checkCharacterLimits(opt.en, 'options', level);
                        if (check.overLimit) {
                            issues.push({
                                type: 'CHAR_LIMIT_EXCEEDED',
                                questionIndex: index,
                                optionIndex: optIndex,
                                field: 'option',
                                length: check.length,
                                limit: check.limit,
                                message: `Q${index + 1}, Option ${optIndex + 1}: Too long (${check.length}/${check.limit} chars)`
                            });
                            stats.optionsTooLong++;
                        }
                    }
                });
            }

            // Check explanation character limits
            if (q.explanation && q.explanation.en) {
                const check = checkCharacterLimits(q.explanation.en, 'explanation', level);
                if (check.overLimit) {
                    issues.push({
                        type: 'CHAR_LIMIT_EXCEEDED',
                        questionIndex: index,
                        field: 'explanation',
                        length: check.length,
                        limit: check.limit,
                        message: `Q${index + 1}: Explanation too long (${check.length}/${check.limit} chars)`
                    });
                    stats.explanationsTooLong++;
                }
            }
        });

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
    console.log(`Files with issues: ${stats.filesWithIssues.length} (${Math.round(stats.filesWithIssues.length / stats.totalFiles * 100)}%)`);

    // Character limit violations
    console.log('\n📏 CHARACTER LIMIT VIOLATIONS:');
    console.log(`Questions too long: ${stats.questionsTooLong}`);
    console.log(`Options too long: ${stats.optionsTooLong}`);
    console.log(`Explanations too long: ${stats.explanationsTooLong}`);
    console.log(`Total violations: ${stats.questionsTooLong + stats.optionsTooLong + stats.explanationsTooLong}`);

    // Translation issues
    console.log('\n🌍 TRANSLATION ISSUES:');
    console.log(`Missing translations: ${stats.missingTranslations}`);

    // Structure issues
    console.log('\n🏗️ STRUCTURE ISSUES:');
    console.log(`Missing correct index: ${stats.missingCorrectIndex}`);
    console.log(`Invalid correct index: ${stats.invalidCorrectIndex}`);
    console.log(`Wrong option count (not 4): ${stats.wrongOptionCount}`);

    // Per subject summary
    console.log('\n📚 PER SUBJECT SUMMARY:');
    console.log('-'.repeat(80));

    Object.keys(stats.bySubject).sort().forEach(subject => {
        const subj = stats.bySubject[subject];
        const issueCount = subj.filesWithIssues;
        const status = issueCount === 0 ? '✅' : '⚠️';

        console.log(`\n${status} ${subject.toUpperCase()}`);
        console.log(`   Files: ${subj.totalFiles} | Questions: ${subj.totalQuestions.toLocaleString()}`);
        console.log(`   Files with issues: ${issueCount}`);

        if (issueCount > 0 && subj.issues.length > 0) {
            // Show first few issues as examples
            const maxShow = 3;
            subj.issues.slice(0, maxShow).forEach(fileIssue => {
                console.log(`   - ${fileIssue.file}: ${fileIssue.issues.length} issues`);
                if (fileIssue.issues.length > 0) {
                    console.log(`     ${fileIssue.issues[0].message}`);
                }
            });
            if (subj.issues.length > maxShow) {
                console.log(`   ... and ${subj.issues.length - maxShow} more files with issues`);
            }
        }
    });

    // Critical issues
    if (stats.filesWithIssues.length > 0) {
        console.log('\n⚠️ CRITICAL ISSUES REQUIRING ATTENTION:');
        console.log('-'.repeat(80));

        // Files with less than 100 questions
        const insufficientQuestions = stats.filesWithIssues.filter(f =>
            f.issues && f.issues.some(i => i.type === 'INSUFFICIENT_QUESTIONS')
        );

        if (insufficientQuestions.length > 0) {
            console.log('\n❌ Files with less than 100 questions:');
            insufficientQuestions.forEach(f => {
                const issue = f.issues.find(i => i.type === 'INSUFFICIENT_QUESTIONS');
                console.log(`   ${f.file}: ${issue.message}`);
            });
        }

        // Files with parsing errors
        const parseErrors = stats.filesWithIssues.filter(f => f.error);
        if (parseErrors.length > 0) {
            console.log('\n❌ Files with parsing errors:');
            parseErrors.forEach(f => {
                console.log(`   ${f.file}: ${f.error}`);
            });
        }
    }

    // Summary
    console.log('\n' + '='.repeat(80));
    if (stats.filesWithIssues.length === 0) {
        console.log('✅ EXCELLENT! All quality checks passed!');
    } else if (stats.filesWithIssues.length < stats.totalFiles * 0.05) {
        console.log('✅ VERY GOOD! Quality is high with minor issues in <5% of files.');
    } else if (stats.filesWithIssues.length < stats.totalFiles * 0.1) {
        console.log('⚠️ GOOD! Some quality issues found in <10% of files.');
    } else {
        console.log('❌ ATTENTION NEEDED! Quality issues found in >10% of files.');
    }

    // Save detailed report
    const reportPath = path.join(__dirname, 'quality_report.json');
    fs.writeFileSync(reportPath, JSON.stringify({
        summary: {
            totalFiles: stats.totalFiles,
            totalQuestions: stats.totalQuestions,
            filesWithCorrectCount: stats.filesWithCorrectCount,
            filesWithIssues: stats.filesWithIssues.length,
            characterViolations: stats.questionsTooLong + stats.optionsTooLong + stats.explanationsTooLong,
            translationIssues: stats.missingTranslations,
            structureIssues: stats.missingCorrectIndex + stats.invalidCorrectIndex + stats.wrongOptionCount
        },
        bySubject: stats.bySubject,
        detailedIssues: stats.filesWithIssues
    }, null, 2));

    console.log(`\n📄 Detailed report saved to: ${reportPath}`);
}

// Run the analysis
processAllFiles();