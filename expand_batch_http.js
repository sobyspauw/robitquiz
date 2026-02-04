const fs = require('fs');
const path = require('path');
const https = require('https');

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

function countQuestions(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const matches = content.match(/\{[^}]*question:/g);
    return matches ? matches.length : 0;
  } catch (error) {
    return -1;
  }
}

function extractFileContent(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    return null;
  }
}

async function callClaude(prompt) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 16000,
      temperature: 1.0,
      messages: [{ role: 'user', content: prompt }]
    });

    const options = {
      hostname: 'api.anthropic.com',
      port: 443,
      path: '/v1/messages',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
        'Content-Length': data.length
      }
    };

    const req = https.request(options, (res) => {
      let responseData = '';

      res.on('data', (chunk) => {
        responseData += chunk;
      });

      res.on('end', () => {
        try {
          const parsed = JSON.parse(responseData);
          if (parsed.content && parsed.content[0]) {
            resolve(parsed.content[0].text);
          } else {
            reject(new Error('Invalid response format'));
          }
        } catch (error) {
          reject(error);
        }
      });
    });

    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

async function expandFileTo100(filePath) {
  const content = extractFileContent(filePath);
  if (!content) {
    return { success: false, message: 'Could not read file' };
  }

  const currentCount = countQuestions(filePath);
  if (currentCount < 0) {
    return { success: false, message: 'Could not count questions' };
  }

  if (currentCount >= 100) {
    return { success: true, message: `Already has ${currentCount} questions` };
  }

  const needed = 100 - currentCount;

  // Extract topic info from path
  const parts = filePath.split(path.sep);
  const subcategory = parts[parts.length - 2];
  const level = parts[parts.length - 1].replace('.js', '');

  // Get context from first part of file
  const lines = content.split('\n');
  const questionsStartIdx = lines.findIndex(line => line.includes('questions: ['));

  if (questionsStartIdx === -1) {
    return { success: false, message: 'Could not find questions array' };
  }

  const contextLines = lines.slice(questionsStartIdx, Math.min(questionsStartIdx + 150, lines.length));
  const context = contextLines.join('\n');

  const prompt = `You are expanding a quiz file. Generate ${needed} new questions for:

TOPIC: ${subcategory}
LEVEL: ${level}
CURRENT COUNT: ${currentCount}
NEEDED: ${needed} new questions

EXISTING QUESTIONS SAMPLE:
${context}
[... file continues with more questions ...]

Generate ${needed} NEW questions that:
- Match the difficulty and style of existing questions
- Cover different aspects of ${subcategory}
- Include all 4 languages (en, es, de, nl)
- Have 4 options each with varied correct indices (0-3)
- Include detailed explanations in all languages
- Are factually accurate and verifiable

Output format - start with comma, then question objects:
      ,
      {
        question: {
          en: "...",
          es: "...",
          de: "...",
          nl: "..."
        },
        options: [
          { en: "...", es: "...", de: "...", nl: "..." },
          { en: "...", es: "...", de: "...", nl: "..." },
          { en: "...", es: "...", de: "...", nl: "..." },
          { en: "...", es: "...", de: "...", nl: "..." }
        ],
        correct: X,
        explanation: {
          en: "...",
          es: "...",
          de: "...",
          nl: "..."
        }
      }

IMPORTANT:
- Start with a comma
- Use double quotes for JSON
- Vary the correct answer index
- Don't include any markdown or code blocks
- Just output the raw questions

Generate all ${needed} questions now:`;

  try {
    process.stdout.write('  Calling Claude API...');

    const newQuestions = await callClaude(prompt);

    // Find where to insert
    const questionsEnd = content.lastIndexOf(']');
    if (questionsEnd === -1) {
      return { success: false, message: 'Could not find questions array end' };
    }

    // Insert new questions
    const beforeClosing = content.substring(0, questionsEnd).trimEnd();
    const afterClosing = content.substring(questionsEnd);
    const newContent = beforeClosing + '\n' + newQuestions.trim() + '\n    ' + afterClosing;

    // Write back
    fs.writeFileSync(filePath, newContent, 'utf8');

    // Verify
    const newCount = countQuestions(filePath);
    if (newCount >= 100) {
      return { success: true, message: `Expanded to ${newCount} questions` };
    } else {
      return { success: false, message: `Only reached ${newCount} questions` };
    }

  } catch (error) {
    return { success: false, message: `API Error: ${error.message}` };
  }
}

function getFilesToExpand(baseDir) {
  const files = [];

  function scan(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        scan(fullPath);
      } else if (entry.name.endsWith('.js') &&
                 !entry.name.includes('backup') &&
                 !entry.name.includes('truncated') &&
                 !entry.name.includes('expansion') &&
                 !entry.name.includes('partial') &&
                 !entry.name.includes('tmp')) {
        const count = countQuestions(fullPath);
        if (count > 0 && count < 100) {
          files.push(fullPath);
        }
      }
    }
  }

  scan(baseDir);
  return files;
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  if (!ANTHROPIC_API_KEY) {
    console.error('Error: ANTHROPIC_API_KEY environment variable not set');
    process.exit(1);
  }

  const basePath = 'c:/Users/rbosch/OneDrive - A.S. Watson Europe/prive/RobitQuiz/src/questions/data/subjects';

  console.log('Scanning for files to expand...');
  const peopleFiles = getFilesToExpand(path.join(basePath, 'famous-people'));
  const buildingsFiles = getFilesToExpand(path.join(basePath, 'famous-buildings'));

  const allFiles = [...peopleFiles, ...buildingsFiles];
  console.log(`Found ${allFiles.length} files to expand (${peopleFiles.length} people, ${buildingsFiles.length} buildings)\n`);

  let success = 0;
  let failed = 0;
  const failureLog = [];

  for (let i = 0; i < allFiles.length; i++) {
    const filePath = allFiles[i];
    const relPath = filePath.split('subjects' + path.sep)[1];
    console.log(`\n[${i + 1}/${allFiles.length}] ${relPath}`);

    const result = await expandFileTo100(filePath);
    console.log(`  ${result.message}`);

    if (result.success) {
      success++;
    } else {
      failed++;
      failureLog.push(`${filePath}: ${result.message}`);
    }

    // Small delay every 5 files to avoid rate limits
    if ((i + 1) % 5 === 0) {
      console.log(`\n  Progress: ${success} succeeded, ${failed} failed. Pausing briefly...`);
      await sleep(2000);
    }
  }

  // Write failure log
  if (failureLog.length > 0) {
    fs.writeFileSync('expansion_failures.txt', failureLog.join('\n'), 'utf8');
  }

  console.log(`\n${'='.repeat(80)}`);
  console.log('FINAL RESULTS');
  console.log('='.repeat(80));
  console.log(`Total files: ${allFiles.length}`);
  console.log(`Succeeded: ${success}`);
  console.log(`Failed: ${failed}`);
  console.log(`Success rate: ${(success / allFiles.length * 100).toFixed(1)}%`);
}

main().catch(console.error);
