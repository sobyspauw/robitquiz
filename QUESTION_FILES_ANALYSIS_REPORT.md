# Question Files Analysis Report
**Date:** 2026-01-30
**Total Files Analyzed:** 1,810 question files

---

## Executive Summary

Out of 1,810 question files analyzed:
- **Valid Files:** 1,748 (96.6%)
- **Syntax Errors:** 12 files (0.7%) - **CRITICAL - Prevents loading**
- **Template/Placeholder Questions:** 50 files (2.8%) - Need real content
- **Empty Files:** 0 files

---

## 1. CRITICAL: Syntax Errors (12 files)

These files have JavaScript syntax errors that prevent them from loading. They must be fixed before the app can use them.

### 1.1 Board Games - Card Games (2 files)

**Files:**
- `src/questions/data/subjects/board-games/Card Games/level5.js`
- `src/questions/data/subjects/board-games/Card Games/level6.js`

**Issue:** Mismatched brackets/braces throughout the file
- **level5.js:** 705 open braces, 707 close braces (diff: -2) | 101 open brackets, 99 close brackets (diff: 2)
- **level6.js:** 705 open braces, 708 close braces (diff: -3) | 101 open brackets, 98 close brackets (diff: 3)

**Error Location:** Line 569 in both files
**Root Cause:** Likely missing or extra brackets/braces in earlier sections of the file

---

### 1.2 Board Games - Stratego (2 files)

**Files:**
- `src/questions/data/subjects/board-games/Stratego/level4.js`
- `src/questions/data/subjects/board-games/Stratego/level5.js`

**Issue:** Mismatched brackets/braces throughout the file
- **level4.js:** 705 open braces, 706 close braces (diff: -1) | 101 open brackets, 100 close brackets (diff: 1)
- **level5.js:** 705 open braces, 709 close braces (diff: -4) | 101 open brackets, 97 close brackets (diff: 4)

**Error Locations:**
- level4.js: Line 990
- level5.js: Line 885

**Root Cause:** Likely missing or extra brackets/braces in earlier sections of the file

---

### 1.3 Famous Buildings - Sydney Opera House (8 files)

**Files:**
- `src/questions/data/subjects/famous-buildings/Sydney Opera House/level3.js`
- `src/questions/data/subjects/famous-buildings/Sydney Opera House/level4.js`
- `src/questions/data/subjects/famous-buildings/Sydney Opera House/level5.js`
- `src/questions/data/subjects/famous-buildings/Sydney Opera House/level6.js`
- `src/questions/data/subjects/famous-buildings/Sydney Opera House/level7.js`
- `src/questions/data/subjects/famous-buildings/Sydney Opera House/level8.js`
- `src/questions/data/subjects/famous-buildings/Sydney Opera House/level9.js`
- `src/questions/data/subjects/famous-buildings/Sydney Opera House/level10.js`

**Issue:** Missing closing brace `}` for a question object

**Error Location:** Around line 635-637
```javascript
        }
      ,        // <-- This comma after } suggests missing } before this line
      {
```

**Root Cause:** A question object before this point is missing its closing brace `}`. The pattern shows:
- Line 635: `}` (closes explanation object)
- Line 636: `,` (orphaned comma)
- Line 637: `{` (starts next question, but previous question isn't properly closed)

**Expected Pattern:**
```javascript
        explanation: {
          ...
        }
      },      // <-- Should close the entire question object
      {       // <-- Then start next question
```

---

## 2. Template/Placeholder Questions (50 files)

These files load successfully but contain placeholder content that needs to be replaced with real questions.

### 2.1 AI - AI in gaming (10 files)
All levels 1-10 contain 100 template questions each

**Example placeholder content:**
- Question: "What is AI? (Question 1)"
- Options: "Alternative AI concept A", "Correct technical answer about AI"
- Explanation: "Technical explanation of the concept with examples and applications in the field."

### 2.2 AI - AI in transport (10 files)
All levels 1-10 contain 100 template questions each

### 2.3 AI - AI toekomst (10 files)
All levels 1-10 contain 100 template questions each

### 2.4 AI - Deep learning (10 files)
All levels 1-10 contain 100 template questions each

### 2.5 AI - AI ethiek (5 files)
Levels 1-5 contain 100 template questions each

### 2.6 AI - Natuurlijke taalverwerking (5 files)
Levels 1-5 contain 100 template questions each

---

## 3. Priority Fix List

### PRIORITY 1: Fix Syntax Errors (12 files)
**Impact:** Critical - These files cannot be loaded by the application

1. **Famous Buildings - Sydney Opera House** (8 files)
   - Action: Find the question object around line 620-635 that's missing its closing `}`
   - Files: levels 3-10

2. **Board Games - Card Games** (2 files)
   - Action: Use a brace/bracket matcher to find mismatched pairs
   - Files: levels 5-6

3. **Board Games - Stratego** (2 files)
   - Action: Use a brace/bracket matcher to find mismatched pairs
   - Files: levels 4-5

### PRIORITY 2: Replace Template Questions (50 files)
**Impact:** Medium - Files load but contain placeholder content

All 50 files need real questions to replace the generic placeholders:
- AI in gaming: 10 files (1,000 questions)
- AI in transport: 10 files (1,000 questions)
- AI toekomst: 10 files (1,000 questions)
- Deep learning: 10 files (1,000 questions)
- AI ethiek: 5 files (500 questions)
- Natuurlijke taalverwerking: 5 files (500 questions)

**Total placeholder questions to replace:** ~5,000 questions

---

## 4. Recommendations

### Immediate Actions:
1. **Fix syntax errors first** - These 12 files prevent the application from working properly
2. **Validate all fixes** - After fixing, run `node analyze_all_questions_v2.js` to verify

### Short-term Actions:
3. **Generate or write real questions** - Replace the 5,000 template questions with actual content
4. **Implement automated testing** - Add syntax validation to CI/CD pipeline

### Tools Available:
- `analyze_all_questions_v2.js` - Full analysis of all question files
- `check_syntax_details.js` - Detailed syntax error analysis
- `question_analysis_report_v2.json` - Machine-readable detailed report
- `issues_by_subject_v2.json` - Issues grouped by subject

---

## 5. File Structure Notes

All question files follow one of these export patterns:

**Pattern 1: Direct array export (older format)**
```javascript
(function() {
  const questions = [...];

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = questions;
  }
})();
```

**Pattern 2: Object export with questions property (newer format)**
```javascript
(function() {
  const level1 = {
    questions: [...]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  }
})();
```

Both formats are supported by the analysis tool and should work with the application.

---

## 6. Syntax Error Fixing Guide

### For Sydney Opera House files:

1. Open the file
2. Navigate to around line 620-635
3. Look for a pattern like:
   ```javascript
   explanation: {
     ...
   }
   ,     // <-- This comma should be inside a closing }
   {
   ```
4. Find the question object that's missing its closing `}`
5. Add the closing brace before the comma

### For Card Games and Stratego files:

1. Use a code editor with bracket matching (VS Code, etc.)
2. Start from the beginning and match each `{` with its corresponding `}`
3. Do the same for `[` and `]`
4. The mismatch count tells you how many are missing:
   - Negative = too many closing braces (extra `}`)
   - Positive = too few closing braces (missing `}`)

---

## Report Generated By
- Script: `analyze_all_questions_v2.js`
- Date: 2026-01-30
