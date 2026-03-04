const fs = require('fs');
const path = require('path');
const vm = require('vm');

// Statistics
const stats = {
    totalFiles: 0,
    totalQuestions: 0,

    // Different types of issues
    filesWithFakeTranslations: [],
    filesWithCorrectIncorrectLabels: [],
    filesWithTemplateContent: [],
    filesWithMixedLanguages: [],

    // Counters
    totalFakeTranslations: 0,
    totalCorrectIncorrectLabels: 0,
    totalTemplateContent: 0,

    bySubject: {}
};

function checkForIssues(text, lang, fieldType) {
    const issues = [];

    if (!text) return issues;

    // 1. Check for fake translation patterns
    const fakePatterns = [
        new RegExp(`^${lang.toUpperCase()}:\\s*`, 'i'), // Starts with "ES:", "DE:", "NL:"
        new RegExp(`^${lang}:\\s*`, 'i'), // Starts with "es:", "de:", "nl:"
    ];

    for (const pattern of fakePatterns) {
        if (pattern.test(text)) {
            issues.push('FAKE_TRANSLATION');
            break;
        }
    }

    // 2. Check for "Correct:" or "Incorrect:" labels in options
    if (fieldType === 'option') {
        if (/^(Correct|Incorrect):/i.test(text)) {
            issues.push('CORRECT_INCORRECT_LABEL');
        }
    }

    // 3. Check for template/placeholder content
    const templatePatterns = [
        /Option [A-D] for Q\d+/i,
        /sample question/i,
        /placeholder/i,
        /question \d+ for level/i,
        /represents.*?level \d+/i,
        /It (represents|influences|determines|provides)/i, // Generic template language
    ];

    for (const pattern of templatePatterns) {
        if (pattern.test(text)) {
            issues.push('TEMPLATE_CONTENT');
            break;
        }
    }

    // 4. Check for mixed languages (Dutch words in supposedly English text)
    if (lang === 'en') {
        const dutchWords = ['geschiedenis', 'ethiek', 'toekomst', 'netwerken', 'taalverwerking'];
        for (const word of dutchWords) {
            if (text.toLowerCase().includes(word)) {
                issues.push('MIXED_LANGUAGE');
                break;
            }
        }
    }

    return issues;
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
        const issues = {
            fakeTranslations: [],
            correctIncorrectLabels: [],
            templateContent: [],
            mixedLanguages: []
        };

        questions.forEach((q, qIndex) => {
            // Check question
            if (q.question) {
                Object.keys(q.question).forEach(lang => {
                    const questionIssues = checkForIssues(q.question[lang], lang, 'question');
                    questionIssues.forEach(issueType => {
                        if (issueType === 'FAKE_TRANSLATION') {
                            issues.fakeTranslations.push({
                                questionIndex: qIndex + 1,
                                field: 'question',
                                language: lang,
                                text: q.question[lang].substring(0, 60)
                            });
                        } else if (issueType === 'TEMPLATE_CONTENT') {
                            issues.templateContent.push({
                                questionIndex: qIndex + 1,
                                field: 'question',
                                language: lang,
                                text: q.question[lang].substring(0, 60)
                            });
                        } else if (issueType === 'MIXED_LANGUAGE') {
                            issues.mixedLanguages.push({
                                questionIndex: qIndex + 1,
                                field: 'question',
                                language: lang,
                                text: q.question[lang].substring(0, 60)
                            });
                        }
                    });
                });
            }

            // Check options
            if (q.options && Array.isArray(q.options)) {
                q.options.forEach((opt, optIndex) => {
                    Object.keys(opt).forEach(lang => {
                        const optionIssues = checkForIssues(opt[lang], lang, 'option');
                        optionIssues.forEach(issueType => {
                            if (issueType === 'CORRECT_INCORRECT_LABEL') {
                                issues.correctIncorrectLabels.push({
                                    questionIndex: qIndex + 1,
                                    optionIndex: optIndex + 1,
                                    language: lang,
                                    text: opt[lang]
                                });
                            } else if (issueType === 'FAKE_TRANSLATION') {
                                issues.fakeTranslations.push({
                                    questionIndex: qIndex + 1,
                                    field: `option ${optIndex + 1}`,
                                    language: lang,
                                    text: opt[lang]
                                });
                            } else if (issueType === 'TEMPLATE_CONTENT') {
                                issues.templateContent.push({
                                    questionIndex: qIndex + 1,
                                    field: `option ${optIndex + 1}`,
                                    language: lang,
                                    text: opt[lang]
                                });
                            }
                        });
                    });
                });
            }

            // Check explanation
            if (q.explanation) {
                Object.keys(q.explanation).forEach(lang => {
                    const explainIssues = checkForIssues(q.explanation[lang], lang, 'explanation');
                    explainIssues.forEach(issueType => {
                        if (issueType === 'FAKE_TRANSLATION') {
                            issues.fakeTranslations.push({
                                questionIndex: qIndex + 1,
                                field: 'explanation',
                                language: lang,
                                text: q.explanation[lang].substring(0, 60)
                            });
                        } else if (issueType === 'TEMPLATE_CONTENT') {
                            issues.templateContent.push({
                                questionIndex: qIndex + 1,
                                field: 'explanation',
                                language: lang,
                                text: q.explanation[lang].substring(0, 60)
                            });
                        } else if (issueType === 'MIXED_LANGUAGE') {
                            issues.mixedLanguages.push({
                                questionIndex: qIndex + 1,
                                field: 'explanation',
                                language: lang,
                                text: q.explanation[lang].substring(0, 60)
                            });
                        }
                    });
                });
            }
        });

        return {
            questionCount: questions.length,
            issues: issues
        };

    } catch (error) {
        return { error: error.message };
    }
}

function processAllFiles() {
    const baseDir = path.join(__dirname, '..', 'src', 'questions', 'data', 'subjects');
    const subjects = fs.readdirSync(baseDir);

    console.log('🔍 Detecting all quality issues...\n');
    console.log('=' .repeat(80));

    subjects.forEach(subject => {
        const subjectPath = path.join(baseDir, subject);
        if (!fs.statSync(subjectPath).isDirectory()) return;

        stats.bySubject[subject] = {
            totalFiles: 0,
            filesWithFakeTranslations: 0,
            filesWithCorrectIncorrect: 0,
            filesWithTemplates: 0,
            filesWithMixedLang: 0,
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

                if (!result.error) {
                    stats.totalQuestions += result.questionCount;

                    const fileRelPath = path.relative(baseDir, filePath);
                    let hasIssues = false;

                    // Track fake translations
                    if (result.issues.fakeTranslations.length > 0) {
                        stats.filesWithFakeTranslations.push({
                            file: fileRelPath,
                            count: result.issues.fakeTranslations.length,
                            examples: result.issues.fakeTranslations.slice(0, 2)
                        });
                        stats.totalFakeTranslations += result.issues.fakeTranslations.length;
                        stats.bySubject[subject].filesWithFakeTranslations++;
                        hasIssues = true;
                    }

                    // Track Correct/Incorrect labels
                    if (result.issues.correctIncorrectLabels.length > 0) {
                        stats.filesWithCorrectIncorrectLabels.push({
                            file: fileRelPath,
                            count: result.issues.correctIncorrectLabels.length,
                            examples: result.issues.correctIncorrectLabels.slice(0, 2)
                        });
                        stats.totalCorrectIncorrectLabels += result.issues.correctIncorrectLabels.length;
                        stats.bySubject[subject].filesWithCorrectIncorrect++;
                        hasIssues = true;
                    }

                    // Track template content
                    if (result.issues.templateContent.length > 0) {
                        stats.filesWithTemplateContent.push({
                            file: fileRelPath,
                            count: result.issues.templateContent.length,
                            examples: result.issues.templateContent.slice(0, 2)
                        });
                        stats.totalTemplateContent += result.issues.templateContent.length;
                        stats.bySubject[subject].filesWithTemplates++;
                        hasIssues = true;
                    }

                    // Track mixed languages
                    if (result.issues.mixedLanguages.length > 0) {
                        stats.filesWithMixedLanguages.push({
                            file: fileRelPath,
                            count: result.issues.mixedLanguages.length,
                            examples: result.issues.mixedLanguages.slice(0, 2)
                        });
                        stats.bySubject[subject].filesWithMixedLang++;
                        hasIssues = true;
                    }

                    if (hasIssues) {
                        stats.bySubject[subject].affectedFiles.push({
                            file: path.relative(subjectPath, filePath),
                            issues: {
                                fakeTranslations: result.issues.fakeTranslations.length,
                                correctIncorrect: result.issues.correctIncorrectLabels.length,
                                templates: result.issues.templateContent.length,
                                mixedLang: result.issues.mixedLanguages.length
                            }
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
    console.log('\n📊 COMPREHENSIVE QUALITY ISSUES REPORT');
    console.log('=' .repeat(80));

    console.log('\n📈 OVERALL STATISTICS:');
    console.log(`Total files analyzed: ${stats.totalFiles}`);
    console.log(`Total questions: ${stats.totalQuestions.toLocaleString()}`);

    console.log('\n❌ CRITICAL ISSUES FOUND:');
    console.log(`1. Fake translations: ${stats.filesWithFakeTranslations.length} files (${stats.totalFakeTranslations.toLocaleString()} instances)`);
    console.log(`2. Correct/Incorrect labels: ${stats.filesWithCorrectIncorrectLabels.length} files (${stats.totalCorrectIncorrectLabels.toLocaleString()} instances)`);
    console.log(`3. Template content: ${stats.filesWithTemplateContent.length} files (${stats.totalTemplateContent.toLocaleString()} instances)`);
    console.log(`4. Mixed languages: ${stats.filesWithMixedLanguages.length} files`);

    const totalAffectedFiles = new Set([
        ...stats.filesWithFakeTranslations.map(f => f.file),
        ...stats.filesWithCorrectIncorrectLabels.map(f => f.file),
        ...stats.filesWithTemplateContent.map(f => f.file),
        ...stats.filesWithMixedLanguages.map(f => f.file)
    ]).size;

    console.log(`\n📉 Total files with issues: ${totalAffectedFiles}/${stats.totalFiles} (${(totalAffectedFiles/stats.totalFiles*100).toFixed(1)}%)`);

    // Per subject summary
    console.log('\n📚 PER SUBJECT BREAKDOWN:');
    console.log('-'.repeat(80));

    Object.keys(stats.bySubject).sort().forEach(subject => {
        const subj = stats.bySubject[subject];
        const totalIssueFiles = subj.affectedFiles.length;

        if (totalIssueFiles === 0) {
            console.log(`\n✅ ${subject.toUpperCase()} - No issues found`);
        } else {
            console.log(`\n❌ ${subject.toUpperCase()}`);
            console.log(`   Total files: ${subj.totalFiles} | Files with issues: ${totalIssueFiles}`);

            if (subj.filesWithFakeTranslations > 0) {
                console.log(`   • Fake translations: ${subj.filesWithFakeTranslations} files`);
            }
            if (subj.filesWithCorrectIncorrect > 0) {
                console.log(`   • Correct/Incorrect labels: ${subj.filesWithCorrectIncorrect} files`);
            }
            if (subj.filesWithTemplates > 0) {
                console.log(`   • Template content: ${subj.filesWithTemplates} files`);
            }
            if (subj.filesWithMixedLang > 0) {
                console.log(`   • Mixed languages: ${subj.filesWithMixedLang} files`);
            }

            // Show worst files
            const worstFiles = subj.affectedFiles
                .sort((a, b) => {
                    const totalA = a.issues.fakeTranslations + a.issues.correctIncorrect + a.issues.templates;
                    const totalB = b.issues.fakeTranslations + b.issues.correctIncorrect + b.issues.templates;
                    return totalB - totalA;
                })
                .slice(0, 3);

            if (worstFiles.length > 0) {
                console.log('   Most problematic files:');
                worstFiles.forEach(f => {
                    const issues = [];
                    if (f.issues.fakeTranslations > 0) issues.push(`${f.issues.fakeTranslations} fake translations`);
                    if (f.issues.correctIncorrect > 0) issues.push(`${f.issues.correctIncorrect} correct/incorrect labels`);
                    if (f.issues.templates > 0) issues.push(`${f.issues.templates} template texts`);
                    console.log(`     - ${f.file}: ${issues.join(', ')}`);
                });
            }
        }
    });

    // Examples of issues
    console.log('\n⚠️ EXAMPLES OF ISSUES:');
    console.log('-'.repeat(80));

    // Correct/Incorrect labels examples
    if (stats.filesWithCorrectIncorrectLabels.length > 0) {
        console.log('\n1. CORRECT/INCORRECT LABELS IN OPTIONS:');
        stats.filesWithCorrectIncorrectLabels.slice(0, 3).forEach(fileInfo => {
            console.log(`\nFile: ${fileInfo.file}`);
            fileInfo.examples.forEach(ex => {
                console.log(`  Q${ex.questionIndex}, Option ${ex.optionIndex} [${ex.language}]: "${ex.text}"`);
            });
        });
    }

    // Fake translations examples
    if (stats.filesWithFakeTranslations.length > 0) {
        console.log('\n2. FAKE TRANSLATIONS:');
        stats.filesWithFakeTranslations.slice(0, 3).forEach(fileInfo => {
            console.log(`\nFile: ${fileInfo.file}`);
            fileInfo.examples.forEach(ex => {
                console.log(`  Q${ex.questionIndex} ${ex.field} [${ex.language}]: "${ex.text}..."`);
            });
        });
    }

    // Template content examples
    if (stats.filesWithTemplateContent.length > 0) {
        console.log('\n3. TEMPLATE/PLACEHOLDER CONTENT:');
        stats.filesWithTemplateContent.slice(0, 3).forEach(fileInfo => {
            console.log(`\nFile: ${fileInfo.file}`);
            fileInfo.examples.forEach(ex => {
                console.log(`  Q${ex.questionIndex} ${ex.field}: "${ex.text}..."`);
            });
        });
    }

    // Summary
    console.log('\n' + '='.repeat(80));
    console.log('📋 QUALITY ASSESSMENT:');

    const qualityScore = {
        translations: 100 - (stats.filesWithFakeTranslations.length / stats.totalFiles * 100),
        optionLabels: 100 - (stats.filesWithCorrectIncorrectLabels.length / stats.totalFiles * 100),
        content: 100 - (stats.filesWithTemplateContent.length / stats.totalFiles * 100),
        overall: 100 - (totalAffectedFiles / stats.totalFiles * 100)
    };

    console.log(`\nTranslation Quality: ${qualityScore.translations.toFixed(1)}%`);
    console.log(`Option Quality: ${qualityScore.optionLabels.toFixed(1)}%`);
    console.log(`Content Quality: ${qualityScore.content.toFixed(1)}%`);
    console.log(`\n🏆 OVERALL QUALITY: ${qualityScore.overall.toFixed(1)}%`);

    if (qualityScore.overall < 50) {
        console.log('\n❌ CRITICAL: Major quality issues found. Immediate attention required!');
    } else if (qualityScore.overall < 80) {
        console.log('\n⚠️ WARNING: Significant quality issues need to be addressed.');
    } else if (qualityScore.overall < 95) {
        console.log('\n⚠️ ATTENTION: Some quality issues found.');
    } else {
        console.log('\n✅ GOOD: Minor issues only.');
    }

    // Save detailed report
    const reportPath = path.join(__dirname, 'comprehensive_quality_report.json');
    fs.writeFileSync(reportPath, JSON.stringify({
        summary: {
            totalFiles: stats.totalFiles,
            totalQuestions: stats.totalQuestions,
            totalAffectedFiles: totalAffectedFiles,
            qualityScore: qualityScore
        },
        issues: {
            fakeTranslations: stats.filesWithFakeTranslations.length,
            correctIncorrectLabels: stats.filesWithCorrectIncorrectLabels.length,
            templateContent: stats.filesWithTemplateContent.length,
            mixedLanguages: stats.filesWithMixedLanguages.length
        },
        bySubject: stats.bySubject
    }, null, 2));

    console.log(`\n📄 Detailed report saved to: ${reportPath}`);
}

// Run the analysis
processAllFiles();