// Script to fix common syntax errors in question files
const fs = require('fs');
const path = require('path');

// List of files that had syntax errors from the previous script run
const failedFiles = [
  "src/questions/data/subjects/ai/Machine learning/level1.js",
  "src/questions/data/subjects/ai/Machine learning/level4.js",
  "src/questions/data/subjects/board-games/Card Games/level5.js",
  "src/questions/data/subjects/board-games/Card Games/level6.js",
  "src/questions/data/subjects/board-games/Checkers/level3.js",
  "src/questions/data/subjects/board-games/Checkers/level4.js",
  // Add more as needed
];

function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;
    const originalContent = content;

    // Fix 1: Extra closing brace before end of questions array
    // Pattern: }, } at the end of questions array
    if (content.includes('      },\n      }\n  };')) {
      content = content.replace('      },\n      }\n  };', '      }\n    ]\n  };');
      fixed = true;
      console.log(`  Fixed extra closing brace in ${filePath}`);
    }

    // Fix 2: Missing opening brace for question object
    // Pattern: }, question: { instead of }, { question: {
    const missingBracePattern = /\},\s*question:\s*\{/g;
    if (missingBracePattern.test(content)) {
      content = content.replace(missingBracePattern, '},\n      {\n        question: {');
      fixed = true;
      console.log(`  Fixed missing opening brace in ${filePath}`);
    }

    // Fix 3: Extra comma at the end of questions array
    // Pattern: }, ] instead of } ]
    const extraCommaPattern = /\},\s*\]/g;
    if (extraCommaPattern.test(content)) {
      content = content.replace(extraCommaPattern, '}\n    ]');
      fixed = true;
      console.log(`  Fixed extra comma in ${filePath}`);
    }

    // Fix 4: Double closing braces at end of question
    // Pattern: }} where there should be just }
    const doubleClosingPattern = /\}\s*\}\s*\]\s*\};/g;
    if (doubleClosingPattern.test(content)) {
      content = content.replace(doubleClosingPattern, '}\n    ]\n  };');
      fixed = true;
      console.log(`  Fixed double closing braces in ${filePath}`);
    }

    // Fix 5: Missing closing bracket for questions array
    // Check if questions array is not properly closed
    const questionsStart = content.indexOf('questions: [');
    if (questionsStart !== -1) {
      // Count opening and closing brackets after questions start
      const afterQuestions = content.substring(questionsStart);
      const openBrackets = (afterQuestions.match(/\[/g) || []).length;
      const closeBrackets = (afterQuestions.match(/\]/g) || []).length;

      if (openBrackets > closeBrackets) {
        // Find the last } before the module.exports part
        const moduleExportIndex = content.lastIndexOf('if (typeof module');
        if (moduleExportIndex !== -1) {
          const beforeExport = content.substring(0, moduleExportIndex);
          const lastBrace = beforeExport.lastIndexOf('}');
          if (lastBrace !== -1 && !beforeExport.substring(lastBrace - 10, lastBrace).includes(']')) {
            content = beforeExport.substring(0, lastBrace) + '}\n    ]\n  };\n\n  ' + content.substring(moduleExportIndex);
            fixed = true;
            console.log(`  Fixed missing closing bracket in ${filePath}`);
          }
        }
      }
    }

    // Write back if fixed
    if (fixed) {
      // Validate the fix by trying to parse it
      try {
        // Create a test function to check syntax
        const testFunc = new Function(content);
        // If no error, write the fixed content
        fs.writeFileSync(filePath, content, 'utf8');
        return { success: true, fixed: true };
      } catch (e) {
        console.error(`  ⚠️  Fix validation failed for ${filePath}: ${e.message}`);
        // Revert to original
        fs.writeFileSync(filePath, originalContent, 'utf8');
        return { success: false, error: e.message };
      }
    }

    return { success: true, fixed: false };

  } catch (e) {
    console.error(`  ❌ Error processing ${filePath}: ${e.message}`);
    return { success: false, error: e.message };
  }
}

function findAllLevelFiles(rootDir) {
  const files = [];

  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);

    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        walkDir(fullPath);
      } else if (item.endsWith('.js') && item.startsWith('level')) {
        files.push(fullPath);
      }
    }
  }

  walkDir(rootDir);
  return files;
}

// Main execution
console.log('=== FIXING SYNTAX ERRORS IN QUESTION FILES ===\n');

const stats = {
  total: 0,
  fixed: 0,
  alreadyGood: 0,
  failed: 0
};

// Get all level files
const rootPath = 'src/questions/data/subjects';
const allFiles = findAllLevelFiles(rootPath);

console.log(`Found ${allFiles.length} level files to check\n`);

// Check each file for syntax errors
for (const filePath of allFiles) {
  // Try to validate current syntax
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    new Function(content);
    // If no error, file is good
    stats.alreadyGood++;
  } catch (e) {
    // File has syntax error, try to fix it
    stats.total++;
    console.log(`Checking ${filePath}...`);
    const result = fixSyntaxErrors(filePath);

    if (result.success && result.fixed) {
      stats.fixed++;
    } else if (!result.success) {
      stats.failed++;
    }
  }
}

console.log('\n=== SUMMARY ===');
console.log(`Files checked: ${allFiles.length}`);
console.log(`Files with syntax errors: ${stats.total}`);
console.log(`Files fixed: ${stats.fixed}`);
console.log(`Files already good: ${stats.alreadyGood}`);
console.log(`Files failed to fix: ${stats.failed}`);

if (stats.failed > 0) {
  console.log('\n⚠️  Some files could not be fixed automatically and need manual intervention.');
} else if (stats.fixed > 0) {
  console.log('\n✅ Successfully fixed all syntax errors!');
} else {
  console.log('\n✅ All files have valid syntax!');
}