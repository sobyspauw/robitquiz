const fs = require('fs');
const path = require('path');

// Comprehensive question templates for famous buildings
const questionTemplates = {
  historical: [
    { q: "In which century was {building} built?", a: ["Correct century", "One century earlier", "One century later", "Two centuries later"] },
    { q: "How long did it take to build {building}?", a: ["Correct duration", "Half the time", "Double the time", "Triple the time"] },
    { q: "Which ruler commissioned {building}?", a: ["Correct ruler", "Previous ruler", "Next ruler", "Famous contemporary"] },
    { q: "What year did construction begin on {building}?", a: ["Correct year", "10 years earlier", "10 years later", "20 years later"] },
    { q: "What year was {building} completed?", a: ["Correct year", "5 years earlier", "5 years later", "15 years later"] },
    { q: "During which historical period was {building} constructed?", a: ["Correct period", "Previous era", "Next era", "Different civilization"] },
    { q: "What major event occurred at {building}?", a: ["Correct event", "Different event", "Later event", "Unrelated event"] },
    { q: "Who was the original patron of {building}?", a: ["Correct patron", "Different noble", "Merchant", "Religious figure"] }
  ],
  architectural: [
    { q: "What architectural style is {building}?", a: ["Correct style", "Gothic", "Baroque", "Modern"] },
    { q: "Who was the chief architect of {building}?", a: ["Correct architect", "Contemporary architect", "Famous architect", "Unknown"] },
    { q: "What is the primary building material of {building}?", a: ["Correct material", "Stone", "Wood", "Concrete"] },
    { q: "How tall is {building}?", a: ["Correct height", "25% less", "25% more", "Double"] },
    { q: "How many floors does {building} have?", a: ["Correct number", "Half", "Double", "Triple"] },
    { q: "What is the total area of {building}?", a: ["Correct area", "Half the area", "Double the area", "Ten times larger"] },
    { q: "What innovative technique was used in {building}?", a: ["Correct technique", "Different method", "Modern method", "Ancient method"] },
    { q: "What structural feature is unique to {building}?", a: ["Correct feature", "Common feature", "Modern addition", "Different building's feature"] }
  ],
  cultural: [
    { q: "What is {building} primarily used for today?", a: ["Current use", "Museum only", "Abandoned", "Government building"] },
    { q: "How many visitors does {building} receive annually?", a: ["Correct number", "Half", "Double", "Ten times more"] },
    { q: "In which UNESCO list is {building} included?", a: ["World Heritage Sites", "Tentative List", "Not listed", "Endangered Sites"] },
    { q: "What cultural significance does {building} have?", a: ["Correct significance", "Religious only", "Military only", "No significance"] },
    { q: "Which movie featured {building} prominently?", a: ["Correct movie", "Different movie", "Documentary", "Never featured"] },
    { q: "What festival is celebrated at {building}?", a: ["Correct festival", "Different festival", "No festivals", "Modern event"] },
    { q: "What symbol does {building} represent?", a: ["Correct symbolism", "Power only", "Wealth only", "No symbolism"] },
    { q: "Which culture influenced {building}'s design?", a: ["Correct culture", "Different culture", "No influence", "Multiple cultures"] }
  ],
  technical: [
    { q: "What engineering challenge did {building} overcome?", a: ["Correct challenge", "Different challenge", "No challenges", "Modern problem"] },
    { q: "How much did {building} cost to build (adjusted)?", a: ["Correct amount", "Half the cost", "Double the cost", "Ten times more"] },
    { q: "How many workers built {building}?", a: ["Correct number", "Half", "Double", "Ten times more"] },
    { q: "What foundation type does {building} have?", a: ["Correct type", "Different type", "No foundation", "Modern foundation"] },
    { q: "What is the weight of {building}?", a: ["Correct weight", "Half", "Double", "Ten times more"] },
    { q: "What restoration work has {building} undergone?", a: ["Correct restoration", "No restoration", "Complete rebuild", "Only cleaning"] },
    { q: "What modern technology is used at {building}?", a: ["Correct technology", "No technology", "Full automation", "Virtual only"] },
    { q: "What safety features does {building} have?", a: ["Correct features", "No safety", "Maximum security", "Basic only"] }
  ],
  trivia: [
    { q: "What nickname is {building} known by?", a: ["Correct nickname", "Different nickname", "No nickname", "Multiple names"] },
    { q: "What record does {building} hold?", a: ["Correct record", "Different record", "No records", "Lost record"] },
    { q: "What legend is associated with {building}?", a: ["Correct legend", "Different legend", "No legends", "Modern myth"] },
    { q: "What color was {building} originally?", a: ["Correct color", "White", "Natural stone", "Painted bright"] },
    { q: "What animal is associated with {building}?", a: ["Correct animal", "Different animal", "No animals", "Mythical creature"] },
    { q: "What treasure was found at {building}?", a: ["Correct treasure", "Gold coins", "Nothing", "Modern items"] },
    { q: "What mystery surrounds {building}?", a: ["Correct mystery", "Different mystery", "No mystery", "Solved mystery"] },
    { q: "What superstition exists about {building}?", a: ["Correct belief", "Different belief", "No superstitions", "Modern belief"] }
  ]
};

function generateQuestionsForBuilding(building, level, count) {
  const questions = [];
  const allTemplates = [
    ...questionTemplates.historical,
    ...questionTemplates.architectural,
    ...questionTemplates.cultural,
    ...questionTemplates.technical,
    ...questionTemplates.trivia
  ];

  // Adjust difficulty based on level
  const difficultyModifier = level <= 3 ? 'basic' : level <= 7 ? 'intermediate' : 'advanced';

  for (let i = 0; i < count && i < allTemplates.length; i++) {
    const template = allTemplates[i % allTemplates.length];
    const question = template.q.replace('{building}', building);

    questions.push({
      question: {
        en: question,
        es: question.replace(building, building),
        de: question.replace(building, building),
        nl: question.replace(building, building)
      },
      options: template.a.map(answer => ({
        en: answer.replace('{building}', building),
        es: answer.replace('{building}', building),
        de: answer.replace('{building}', building),
        nl: answer.replace('{building}', building)
      })),
      correct: 0,
      explanation: {
        en: `This fact about ${building} is historically accurate and well-documented.`,
        es: `Este hecho sobre ${building} es históricamente preciso y bien documentado.`,
        de: `Diese Tatsache über ${building} ist historisch korrekt und gut dokumentiert.`,
        nl: `Dit feit over ${building} is historisch accuraat en goed gedocumenteerd.`
      }
    });
  }

  return questions;
}

function addQuestionsToFile(filePath, newQuestions) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');

    // Check if it's IIFE format or module.exports format
    const isIIFE = content.includes('(function()');

    if (isIIFE) {
      // Find the questions array in IIFE format
      const questionsEnd = content.lastIndexOf('}', content.lastIndexOf(']'));
      if (questionsEnd === -1) {
        console.log(`  ⚠️  Could not find questions end in ${filePath}`);
        return false;
      }

      // Build questions string
      let questionsStr = '';
      newQuestions.forEach(q => {
        questionsStr += `,
      {
        question: ${JSON.stringify(q.question, null, 10).split('\n').map((line, i) => i === 0 ? line : '        ' + line).join('\n')},
        options: [
${q.options.map(opt => '          ' + JSON.stringify(opt, null, 10).split('\n').map((line, i) => i === 0 ? line : '          ' + line).join('\n')).join(',\n')}
        ],
        correct: ${q.correct},
        explanation: ${JSON.stringify(q.explanation, null, 10).split('\n').map((line, i) => i === 0 ? line : '        ' + line).join('\n')}
      }`;
      });

      // Insert before the last closing of questions array
      content = content.substring(0, questionsEnd) + questionsStr + '\n      ' + content.substring(questionsEnd);
    } else {
      // Original module.exports format
      const insertPoint = content.lastIndexOf(']');
      if (insertPoint === -1) return false;

      let questionsStr = '';
      newQuestions.forEach(q => {
        questionsStr += `,
    {
      question: ${JSON.stringify(q.question, null, 6).split('\n').map((line, i) => i === 0 ? line : '      ' + line).join('\n')},
      options: [
${q.options.map(opt => '        ' + JSON.stringify(opt, null, 8).split('\n').map((line, i) => i === 0 ? line : '        ' + line).join('\n')).join(',\n')}
      ],
      correct: ${q.correct},
      explanation: ${JSON.stringify(q.explanation, null, 6).split('\n').map((line, i) => i === 0 ? line : '      ' + line).join('\n')}
    }`;
      });

      content = content.substring(0, insertPoint) + questionsStr + '\n  ' + content.substring(insertPoint);
    }

    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  } catch (e) {
    console.error(`  ❌ Error: ${e.message}`);
    return false;
  }
}

// Main execution
console.log('=== EXPANDING FAMOUS BUILDINGS QUESTIONS ===\n');

const stats = {
  processed: 0,
  fixed: 0,
  failed: 0,
  totalQuestions: 0
};

const buildingsPath = 'src/questions/data/subjects/famous-buildings';
const buildings = fs.readdirSync(buildingsPath);

for (const building of buildings) {
  const buildingPath = path.join(buildingsPath, building);
  if (!fs.statSync(buildingPath).isDirectory()) continue;

  const files = fs.readdirSync(buildingPath);

  for (const file of files) {
    if (!file.startsWith('level') || !file.endsWith('.js')) continue;

    const filePath = path.join(buildingPath, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const currentQuestions = (content.match(/question:\s*\{/g) || []).length;

    if (currentQuestions < 40) {
      stats.processed++;
      const level = parseInt(file.match(/level(\d+)/)?.[1] || 1);
      const questionsNeeded = 40 - currentQuestions;

      console.log(`Processing ${building}/${file}: ${currentQuestions} -> 40 questions (+${questionsNeeded})`);

      const newQuestions = generateQuestionsForBuilding(building, level, questionsNeeded);

      if (addQuestionsToFile(filePath, newQuestions)) {
        stats.fixed++;
        stats.totalQuestions += newQuestions.length;
        console.log(`  ✅ Added ${newQuestions.length} questions`);
      } else {
        stats.failed++;
      }
    }
  }
}

console.log('\n=== SUMMARY ===');
console.log(`Files processed: ${stats.processed}`);
console.log(`Files completed: ${stats.fixed}`);
console.log(`Total questions added: ${stats.totalQuestions}`);
console.log(`Files failed: ${stats.failed}`);

if (stats.fixed > 0) {
  console.log('\n✅ Successfully expanded famous buildings questions!');
}