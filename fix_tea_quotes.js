const fs = require('fs');
const path = require('path');

const teaFile = 'c:/Users/rbosch/OneDrive - A.S. Watson Europe/prive/RobitQuiz/src/questions/data/subjects/drinks/Tea/level1.js';

let content = fs.readFileSync(teaFile, 'utf8');

// Fix unquoted strings after es:, de:, nl: that are not already quoted
// Match pattern: (es|de|nl): followed by optional space, then text without quotes until comma or newline
content = content.replace(/(\s+)(es|de|nl):\s+([^"'][^\n,}]+)([,\n}])/g, (match, indent, lang, value, ending) => {
  // Trim the value and add quotes
  const trimmedValue = value.trim();
  return `${indent}${lang}: "${trimmedValue}"${ending}`;
});

fs.writeFileSync(teaFile, content, 'utf8');
console.log('Fixed all missing quotes in Tea/level1.js');
