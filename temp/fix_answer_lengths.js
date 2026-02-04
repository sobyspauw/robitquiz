// Fix answer length imbalance by intelligently padding incorrect answers
const fs = require('fs');
const path = require('path');

// Padding strategies for different types of answers
const paddingStrategies = {
  // Add clarifying details
  clarifiers: [
    " specifically",
    " in particular",
    " especially",
    " particularly",
    " notably",
    " primarily",
    " mainly",
    " typically",
    " generally",
    " commonly"
  ],

  // Add context
  contexts: [
    " in this context",
    " in this case",
    " for this purpose",
    " in practice",
    " in theory",
    " in general",
    " by definition",
    " technically speaking",
    " according to standards",
    " as defined"
  ],

  // Add scope
  scopes: [
    " and related concepts",
    " and similar items",
    " and variations",
    " and derivatives",
    " and applications",
    " and implementations",
    " and related systems",
    " and associated methods",
    " including variations",
    " with extensions"
  ],

  // Add examples
  examples: [
    " (for example)",
    " (e.g., in systems)",
    " (such as modern)",
    " (like standard)",
    " (including basic)",
    " (or similar)",
    " (and comparable)",
    " (typical case)",
    " (common type)",
    " (standard form)"
  ]
};

function selectPaddingPhrase(currentText, targetLength, currentLength) {
  const neededChars = targetLength - currentLength;

  // Try to find a phrase close to needed length
  const allPhrases = [
    ...paddingStrategies.clarifiers,
    ...paddingStrategies.contexts,
    ...paddingStrategies.scopes,
    ...paddingStrategies.examples
  ];

  // Filter phrases that would help reach target without going over too much
  const suitable = allPhrases.filter(p =>
    p.length <= neededChars + 5 && p.length >= neededChars - 10
  );

  if (suitable.length > 0) {
    // Pick random suitable phrase
    return suitable[Math.floor(Math.random() * suitable.length)];
  }

  // If no perfect match, pick based on needed length
  if (neededChars > 20) {
    const long = paddingStrategies.scopes.concat(paddingStrategies.contexts);
    return long[Math.floor(Math.random() * long.length)];
  } else if (neededChars > 10) {
    return paddingStrategies.clarifiers[Math.floor(Math.random() * paddingStrategies.clarifiers.length)];
  } else {
    // For small padding, use short phrases
    return " specifically";
  }
}

function balanceAnswerLengths(options, correctIndex) {
  // Get all language versions
  const languages = ['en', 'es', 'de', 'nl'];
  const balanced = JSON.parse(JSON.stringify(options)); // Deep clone

  for (const lang of languages) {
    // Get lengths for this language
    const texts = options.map(opt => opt[lang] || '');
    const lengths = texts.map(t => t.length);

    // Skip if no text
    if (texts.every(t => !t)) continue;

    const correctLength = lengths[correctIndex];
    const avgLength = lengths.reduce((a, b) => a + b, 0) / lengths.length;

    // Only fix if correct answer is significantly longer (15+ chars)
    if (correctLength > avgLength + 15) {
      // Target length should be around correct answer length
      const targetLength = correctLength - 5; // Slightly shorter than correct to avoid making it obvious

      // Pad incorrect answers that are too short
      for (let i = 0; i < options.length; i++) {
        if (i === correctIndex) continue; // Don't modify correct answer

        if (lengths[i] < targetLength - 10) {
          // This answer is too short, pad it
          const padding = selectPaddingPhrase(texts[i], targetLength, lengths[i]);

          // Only add padding if it makes sense (not already has similar ending)
          if (!texts[i].includes(padding.trim())) {
            balanced[i][lang] = texts[i] + padding;
          }
        }
      }
    }
  }

  return balanced;
}

function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');

    // Parse the module structure
    const moduleMatch = content.match(/\(function\(\)\s*\{[\s\S]*\}\)\(\);?/);
    if (!moduleMatch) {
      console.log(`Skipping ${filePath} - not standard format`);
      return false;
    }

    let modified = false;
    let newContent = content;

    // Find and process each question
    const questionRegex = /(options:\s*\[)([\s\S]*?)(\],\s*correct:\s*)(\d+)/g;

    newContent = newContent.replace(questionRegex, (match, prefix, optionsStr, suffix, correctIndex) => {
      // Parse options
      try {
        // Extract option objects
        const optionMatches = optionsStr.matchAll(/\{([^}]+)\}/g);
        const options = [];

        for (const optMatch of optionMatches) {
          const optStr = '{' + optMatch[1] + '}';
          // Parse each language
          const option = {};
          const langMatches = optStr.matchAll(/(\w+):\s*"([^"]*)"/g);
          for (const langMatch of langMatches) {
            option[langMatch[1]] = langMatch[2];
          }
          options.push(option);
        }

        if (options.length === 0) return match;

        // Check if balancing is needed
        const correct = parseInt(correctIndex);
        const enLengths = options.map(o => (o.en || '').length);
        const correctLength = enLengths[correct];
        const avgLength = enLengths.reduce((a, b) => a + b, 0) / enLengths.length;

        if (correctLength > avgLength + 15) {
          // Balance the options
          const balanced = balanceAnswerLengths(options, correct);

          // Rebuild options string
          const newOptionsStr = balanced.map(opt => {
            const pairs = Object.entries(opt).map(([lang, text]) =>
              `${lang}: "${text}"`
            );
            return '          { ' + pairs.join(', ') + ' }';
          }).join(',\n');

          modified = true;
          return prefix + '\n' + newOptionsStr + '\n        ' + suffix + correctIndex;
        }
      } catch (e) {
        console.error(`Error processing options in ${filePath}:`, e.message);
      }

      return match;
    });

    if (modified) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      return true;
    }

    return false;
  } catch (e) {
    console.error(`Error processing ${filePath}:`, e.message);
    return false;
  }
}

function fixDirectory(dir, limit = 100) {
  let fixed = 0;
  let processed = 0;

  function walkDir(currentPath) {
    if (fixed >= limit) return;

    const files = fs.readdirSync(currentPath);

    for (const file of files) {
      if (fixed >= limit) return;

      const filePath = path.join(currentPath, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        walkDir(filePath);
      } else if (file.endsWith('.js') && file.startsWith('level')) {
        processed++;
        if (processFile(filePath)) {
          fixed++;
          console.log(`Fixed: ${filePath}`);
        }

        if (processed % 100 === 0) {
          console.log(`Processed ${processed} files, fixed ${fixed}...`);
        }
      }
    }
  }

  walkDir(dir);

  return { processed, fixed };
}

// Run the fix on a subset first
console.log('Starting to fix answer length imbalance...\n');
console.log('This will add padding to short incorrect answers to balance lengths.\n');

// Start with AI subject as a test
const testDir = 'src/questions/data/subjects/ai';
console.log(`Testing on ${testDir}...`);
const testResults = fixDirectory(testDir, 50);

console.log(`\nTest complete: Processed ${testResults.processed} files, fixed ${testResults.fixed}`);
console.log('\nTo fix all subjects, uncomment the full run below.');

// Uncomment to run on all subjects:
// const results = fixDirectory('src/questions/data/subjects', 1000);
// console.log(`\nComplete: Processed ${results.processed} files, fixed ${results.fixed}`);