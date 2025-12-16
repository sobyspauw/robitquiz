# Long Questions Analysis Report
**RobitQuiz Project - Questions Over 120 Characters**

Generated: 2025-12-09

---

## Executive Summary

This report analyzes all quiz questions in the RobitQuiz project to identify questions that exceed 120 characters in length. Long questions can cause display issues, reduce readability, and negatively impact user experience on smaller screens.

### Key Findings

- **Total Long Questions:** 7,194 question text entries (across all languages)
- **Files Affected:** 385 JavaScript files contain at least one question over 120 characters
- **Unique Questions:** 2,722 unique questions (accounting for multiple language versions)

---

## Severity Breakdown

Questions are categorized by their character count:

| Character Range | Count | Percentage |
|----------------|-------|------------|
| 150+ chars | 2,399 | 33.3% |
| 140-149 chars | 1,018 | 14.2% |
| 130-139 chars | 1,647 | 22.9% |
| 121-129 chars | 2,130 | 29.6% |

**Critical Issues:** Over 33% of the long questions exceed 150 characters, which is significantly above the recommended limit.

---

## Top Offenders (Longest Questions)

### Extreme Cases (300+ characters):

The longest questions are found in `currencies/Pound/level10.js`:

1. **371 chars** - German question about Sterling's transcendence and Bank of England's role
2. **361 chars** - Spanish question about the pound's conceptual boundaries
3. **355 chars** - Spanish question about monetary policy consciousness
4. **353 chars** - Spanish question about infinite consciousness field

These questions are **3x longer** than the recommended maximum and need significant shortening.

---

## Subject Area Analysis

Files with long questions by subject (sorted by count):

| Subject Area | Files with Long Questions |
|-------------|--------------------------|
| F1 | 70 |
| Currencies | 55 |
| Dinosaurs | 51 |
| Desserts | 50 |
| Famous People | 50 |
| Egypt | 24 |
| Drinks | 22 |
| Books | 19 |
| AI | 15 |
| Food | 12 |
| Famous Buildings | 9 |
| Board Games | 8 |

**Note:** The F1, Currencies, Dinosaurs, Desserts, and Famous People categories have the most files with long questions and should be prioritized for review.

---

## Most Problematic Files

Based on the analysis, here are some files with particularly long questions:

### Currencies Category
- `currencies/Pound/level10.js` - Contains multiple questions exceeding 300 characters
- `currencies/Pound/level7.js` - Advanced economic theory questions (250+ chars)
- `currencies/Pound/level8.js` - Technical AI/economics questions (260+ chars)
- `currencies/Yen/level9.js` - Theoretical economics questions (280+ chars)
- `currencies/Yuan/level9.js` - Physics/economics crossover questions (270+ chars)

### AI Category
- `ai/AI geschiedenis/level10.js` - 8 questions with multiple language versions over 120 chars
- `ai/AI geschiedenis/level6.js` - 10 questions over limit
- `ai/Machine learning/level10.js` - Complex theoretical questions (160+ chars)

### Board Games Category
- `board-games/Catan/level10.js` - 14 questions, many technical game theory questions (200+ chars)

### Dinosaurs Category
- `dinosaurs/Early Dinosaurs/level10.js` - Scientific terminology questions (275+ chars)

---

## Recommendations

### Immediate Actions (Priority 1)
1. **Review all questions over 200 characters** - These are critically too long
   - Focus on `currencies/Pound/level10.js` first (contains 300+ char questions)
   - These questions are philosophical/abstract and may need complete rewrites

### Short-term Actions (Priority 2)
2. **Address 150-199 character questions** - Moderately too long
   - Focus on F1, Currencies, and Dinosaurs categories
   - Many technical questions can be simplified by:
     - Removing redundant phrasing
     - Breaking complex concepts into simpler language
     - Removing excessive context

### Medium-term Actions (Priority 3)
3. **Review 121-149 character questions** - Slightly over limit
   - These often just need minor trimming
   - Consider which details are truly necessary

### General Guidelines for Shortening Questions
- Remove unnecessary adjectives and adverbs
- Use simpler synonyms where possible
- Break compound questions into separate questions
- Remove redundant context that's implied
- Use abbreviations where appropriate and clear
- Consider if philosophical/abstract questions need to be more concrete

---

## Language Distribution

Questions appear in 4 languages: English (en), Spanish (es), German (de), and Dutch (nl).

**Important Note:** When shortening questions, ensure all language versions are updated to maintain consistency across translations.

---

## Files for Reference

The following analysis files have been generated:

1. `long_questions_report.txt` - Complete detailed report of all long questions organized by file
2. `analyze_long_questions.js` - Script to generate the detailed report
3. `analyze_top_long_questions.js` - Script to identify the longest questions
4. `analyze_by_subject.js` - Script to count long questions by subject area

You can re-run these scripts at any time to track progress as questions are shortened.

---

## Next Steps

1. Review the top 50 longest questions (run `node analyze_top_long_questions.js`)
2. Start with the currencies/Pound category, especially level 10
3. Consider creating a style guide for maximum question length per difficulty level
4. Set up a pre-commit hook or linter to prevent new long questions from being added

---

## Technical Details

- **Search Pattern:** Questions identified by `question:` property in JavaScript objects
- **Threshold:** 120 characters per individual language string
- **Scope:** `src/questions/data/subjects/` directory and all subdirectories
- **File Types:** JavaScript (.js) files only
