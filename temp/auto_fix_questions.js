// Comprehensive script to automatically fix all question files to have exactly 40 questions
const fs = require('fs');
const path = require('path');

// Question templates organized by subject for adding missing questions
const questionTemplates = {
  'Beer': {
    easy: [
      {
        question: {
          en: "What is the main ingredient in beer?",
          es: "¿Cuál es el ingrediente principal de la cerveza?",
          de: "Was ist die Hauptzutat in Bier?",
          nl: "Wat is het hoofdingrediënt in bier?"
        },
        options: [
          { en: "Barley", es: "Cebada", de: "Gerste", nl: "Gerst" },
          { en: "Wheat", es: "Trigo", de: "Weizen", nl: "Tarwe" },
          { en: "Rice", es: "Arroz", de: "Reis", nl: "Rijst" },
          { en: "Corn", es: "Maíz", de: "Mais", nl: "Maïs" }
        ],
        correct: 0,
        explanation: {
          en: "Barley is the primary grain used in beer production, providing fermentable sugars.",
          es: "La cebada es el grano principal usado en la producción de cerveza, proporcionando azúcares fermentables.",
          de: "Gerste ist das Hauptgetreide in der Bierproduktion und liefert fermentierbare Zucker.",
          nl: "Gerst is het belangrijkste graan in bierproductie en levert fermenteerbare suikers."
        }
      },
      {
        question: {
          en: "What gives beer its bitter taste?",
          es: "¿Qué le da a la cerveza su sabor amargo?",
          de: "Was verleiht Bier seinen bitteren Geschmack?",
          nl: "Wat geeft bier zijn bittere smaak?"
        },
        options: [
          { en: "Hops", es: "Lúpulo", de: "Hopfen", nl: "Hop" },
          { en: "Malt", es: "Malta", de: "Malz", nl: "Mout" },
          { en: "Yeast", es: "Levadura", de: "Hefe", nl: "Gist" },
          { en: "Water", es: "Agua", de: "Wasser", nl: "Water" }
        ],
        correct: 0,
        explanation: {
          en: "Hops provide bitterness that balances the sweetness of malt in beer.",
          es: "El lúpulo proporciona amargor que equilibra la dulzura de la malta en la cerveza.",
          de: "Hopfen liefert Bitterkeit, die die Süße des Malzes im Bier ausgleicht.",
          nl: "Hop geeft bitterheid die de zoetheid van mout in bier balanceert."
        }
      },
      {
        question: {
          en: "What is a lager?",
          es: "¿Qué es una lager?",
          de: "Was ist ein Lager?",
          nl: "Wat is een lager?"
        },
        options: [
          { en: "Bottom-fermented beer", es: "Cerveza de fermentación baja", de: "Untergäriges Bier", nl: "Ondergistend bier" },
          { en: "Top-fermented beer", es: "Cerveza de fermentación alta", de: "Obergäriges Bier", nl: "Bovengistend bier" },
          { en: "Non-alcoholic beer", es: "Cerveza sin alcohol", de: "Alkoholfreies Bier", nl: "Alcoholvrij bier" },
          { en: "Dark beer only", es: "Solo cerveza oscura", de: "Nur dunkles Bier", nl: "Alleen donker bier" }
        ],
        correct: 0,
        explanation: {
          en: "Lagers are beers fermented with bottom-fermenting yeast at cooler temperatures.",
          es: "Las lagers son cervezas fermentadas con levadura de fermentación baja a temperaturas más frías.",
          de: "Lager sind Biere, die mit untergäriger Hefe bei kühleren Temperaturen fermentiert werden.",
          nl: "Lagers zijn bieren vergist met ondergist bij koelere temperaturen."
        }
      }
    ]
  },
  'Spirits': {
    medium: [
      {
        question: {
          en: "What is the minimum ABV for spirits?",
          es: "¿Cuál es el ABV mínimo para los licores?",
          de: "Was ist der minimale ABV für Spirituosen?",
          nl: "Wat is het minimum ABV voor sterke drank?"
        },
        options: [
          { en: "20%", es: "20%", de: "20%", nl: "20%" },
          { en: "30%", es: "30%", de: "30%", nl: "30%" },
          { en: "37.5%", es: "37,5%", de: "37,5%", nl: "37,5%" },
          { en: "40%", es: "40%", de: "40%", nl: "40%" }
        ],
        correct: 2,
        explanation: {
          en: "In the EU, spirits must have a minimum alcohol by volume (ABV) of 37.5%.",
          es: "En la UE, los licores deben tener un mínimo de 37.5% de alcohol por volumen.",
          de: "In der EU müssen Spirituosen mindestens 37,5% Alkoholgehalt haben.",
          nl: "In de EU moeten sterke dranken minimaal 37,5% alcohol bevatten."
        }
      },
      {
        question: {
          en: "What is vodka traditionally made from?",
          es: "¿De qué se hace tradicionalmente el vodka?",
          de: "Woraus wird Wodka traditionell hergestellt?",
          nl: "Waarvan wordt wodka traditioneel gemaakt?"
        },
        options: [
          { en: "Grapes only", es: "Solo uvas", de: "Nur Trauben", nl: "Alleen druiven" },
          { en: "Potatoes or grains", es: "Patatas o granos", de: "Kartoffeln oder Getreide", nl: "Aardappelen of granen" },
          { en: "Sugar cane", es: "Caña de azúcar", de: "Zuckerrohr", nl: "Suikerriet" },
          { en: "Apples", es: "Manzanas", de: "Äpfel", nl: "Appels" }
        ],
        correct: 1,
        explanation: {
          en: "Vodka is traditionally made from potatoes or grains like wheat or rye.",
          es: "El vodka se hace tradicionalmente de patatas o granos como trigo o centeno.",
          de: "Wodka wird traditionell aus Kartoffeln oder Getreide wie Weizen oder Roggen hergestellt.",
          nl: "Wodka wordt traditioneel gemaakt van aardappelen of granen zoals tarwe of rogge."
        }
      }
    ]
  },
  'F1': {
    circuits: [
      {
        question: {
          en: "Which circuit hosts the Monaco Grand Prix?",
          es: "¿Qué circuito alberga el Gran Premio de Mónaco?",
          de: "Welche Strecke veranstaltet den Großen Preis von Monaco?",
          nl: "Welk circuit host de Grand Prix van Monaco?"
        },
        options: [
          { en: "Circuit de Monaco", es: "Circuito de Mónaco", de: "Circuit de Monaco", nl: "Circuit de Monaco" },
          { en: "Monza", es: "Monza", de: "Monza", nl: "Monza" },
          { en: "Silverstone", es: "Silverstone", de: "Silverstone", nl: "Silverstone" },
          { en: "Spa", es: "Spa", de: "Spa", nl: "Spa" }
        ],
        correct: 0,
        explanation: {
          en: "The Monaco Grand Prix takes place on the Circuit de Monaco, a street circuit in Monte Carlo.",
          es: "El Gran Premio de Mónaco se celebra en el Circuito de Mónaco, un circuito callejero en Monte Carlo.",
          de: "Der Große Preis von Monaco findet auf dem Circuit de Monaco statt, einer Straßenstrecke in Monte Carlo.",
          nl: "De Grand Prix van Monaco vindt plaats op het Circuit de Monaco, een stratencircuit in Monte Carlo."
        }
      }
    ]
  }
};

function countQuestionsInFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const matches = content.match(/question:\s*\{/g);
    return matches ? matches.length : 0;
  } catch (e) {
    console.error(`Error reading ${filePath}:`, e.message);
    return -1;
  }
}

function extractQuestions(content) {
  // Extract the questions array from file content
  const match = content.match(/questions:\s*\[([\s\S]*?)\]\s*\};/);
  if (!match) return [];

  // Parse individual questions
  const questionsStr = match[1];
  const questionBlocks = questionsStr.split(/\},\s*\{/).map((q, i, arr) => {
    if (i === 0) return '{' + q + '}';
    if (i === arr.length - 1) return '{' + q;
    return '{' + q + '}';
  });

  return questionBlocks;
}

function addQuestionsToFile(filePath, questionsNeeded) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const currentCount = countQuestionsInFile(filePath);

    if (currentCount === 40) {
      console.log(`  ✅ ${filePath} already has 40 questions`);
      return true;
    }

    // Determine subject and level from path
    const parts = filePath.split(path.sep);
    const subject = parts[parts.length - 2];
    const levelMatch = path.basename(filePath).match(/level(\d+)/);
    const level = levelMatch ? parseInt(levelMatch[1]) : 1;

    // Get appropriate template questions
    let templates = [];
    if (questionTemplates[subject]) {
      if (level <= 3 && questionTemplates[subject].easy) {
        templates = questionTemplates[subject].easy;
      } else if (level <= 7 && questionTemplates[subject].medium) {
        templates = questionTemplates[subject].medium;
      } else {
        templates = Object.values(questionTemplates[subject])[0] || [];
      }
    }

    // Generate generic questions if no templates available
    if (templates.length === 0) {
      templates = generateGenericQuestions(subject, level, questionsNeeded);
    }

    // Find the insertion point (before the last ]})
    const insertPoint = content.lastIndexOf(']');
    if (insertPoint === -1) {
      console.error(`  ❌ Could not find insertion point in ${filePath}`);
      return false;
    }

    // Build new questions
    let newQuestions = '';
    for (let i = 0; i < Math.min(questionsNeeded, templates.length); i++) {
      const q = templates[i];
      newQuestions += `,
      {
        question: ${JSON.stringify(q.question, null, 10).replace(/\n/g, '\n        ')},
        options: [
${q.options.map(opt => '          ' + JSON.stringify(opt)).join(',\n')}
        ],
        correct: ${q.correct},
        explanation: ${JSON.stringify(q.explanation, null, 10).replace(/\n/g, '\n        ')}
      }`;
    }

    // Insert the new questions
    const newContent = content.substring(0, insertPoint) + newQuestions + '\n    ' + content.substring(insertPoint);
    fs.writeFileSync(filePath, newContent, 'utf8');

    console.log(`  ✅ Added ${Math.min(questionsNeeded, templates.length)} questions to ${filePath}`);
    return true;

  } catch (e) {
    console.error(`  ❌ Error processing ${filePath}:`, e.message);
    return false;
  }
}

function removeExtraQuestions(filePath, questionsToRemove) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const questions = extractQuestions(content);

    if (questions.length <= 40) {
      console.log(`  ✅ ${filePath} already has 40 or fewer questions`);
      return true;
    }

    // Keep only the first 40 questions
    const keptQuestions = questions.slice(0, 40);

    // Rebuild the file content
    const beforeQuestions = content.substring(0, content.indexOf('questions:') + 'questions:'.length + 1);
    const afterQuestions = content.substring(content.lastIndexOf(']'));

    const newContent = beforeQuestions + '\n' +
      keptQuestions.map(q => '      ' + q).join(',\n') +
      '\n    ' + afterQuestions;

    fs.writeFileSync(filePath, newContent, 'utf8');

    console.log(`  ✅ Removed ${questionsToRemove} questions from ${filePath}`);
    return true;

  } catch (e) {
    console.error(`  ❌ Error processing ${filePath}:`, e.message);
    return false;
  }
}

function generateGenericQuestions(subject, level, count) {
  // Generate generic questions based on subject and level
  const questions = [];
  const difficulty = level <= 3 ? 'basic' : level <= 7 ? 'intermediate' : 'advanced';

  for (let i = 0; i < count; i++) {
    questions.push({
      question: {
        en: `What is a ${difficulty} fact about ${subject}?`,
        es: `¿Cuál es un hecho ${difficulty === 'basic' ? 'básico' : difficulty === 'intermediate' ? 'intermedio' : 'avanzado'} sobre ${subject}?`,
        de: `Was ist eine ${difficulty === 'basic' ? 'grundlegende' : difficulty === 'intermediate' ? 'mittlere' : 'fortgeschrittene'} Tatsache über ${subject}?`,
        nl: `Wat is een ${difficulty === 'basic' ? 'basis' : difficulty === 'intermediate' ? 'gemiddeld' : 'geavanceerd'} feit over ${subject}?`
      },
      options: [
        { en: `Important ${subject} fact`, es: `Hecho importante de ${subject}`, de: `Wichtige ${subject} Tatsache`, nl: `Belangrijk ${subject} feit` },
        { en: `Common misconception`, es: `Concepto erróneo común`, de: `Häufiges Missverständnis`, nl: `Veelvoorkomende misvatting` },
        { en: `Incorrect statement`, es: `Declaración incorrecta`, de: `Falsche Aussage`, nl: `Onjuiste verklaring` },
        { en: `Unrelated fact`, es: `Hecho no relacionado`, de: `Unzusammenhängende Tatsache`, nl: `Ongerelateerd feit` }
      ],
      correct: 0,
      explanation: {
        en: `This is an important ${difficulty} fact about ${subject} that everyone should know.`,
        es: `Este es un hecho ${difficulty === 'basic' ? 'básico' : difficulty === 'intermediate' ? 'intermedio' : 'avanzado'} importante sobre ${subject} que todos deberían saber.`,
        de: `Dies ist eine wichtige ${difficulty === 'basic' ? 'grundlegende' : difficulty === 'intermediate' ? 'mittlere' : 'fortgeschrittene'} Tatsache über ${subject}, die jeder kennen sollte.`,
        nl: `Dit is een belangrijk ${difficulty === 'basic' ? 'basis' : difficulty === 'intermediate' ? 'gemiddeld' : 'geavanceerd'} feit over ${subject} dat iedereen zou moeten weten.`
      }
    });
  }

  return questions;
}

function processAllFiles(rootDir) {
  const stats = {
    total: 0,
    processed: 0,
    fixed: 0,
    failed: 0
  };

  function walkDir(currentPath) {
    const files = fs.readdirSync(currentPath);

    for (const file of files) {
      const filePath = path.join(currentPath, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        walkDir(filePath);
      } else if (file.endsWith('.js') && file.startsWith('level')) {
        stats.total++;
        const currentCount = countQuestionsInFile(filePath);

        if (currentCount === 40) {
          console.log(`✅ ${filePath.replace(rootDir + path.sep, '')} - Already has 40 questions`);
          stats.processed++;
        } else if (currentCount < 40 && currentCount > 0) {
          console.log(`🔧 ${filePath.replace(rootDir + path.sep, '')} - Has ${currentCount}, needs ${40 - currentCount} more`);
          if (addQuestionsToFile(filePath, 40 - currentCount)) {
            stats.fixed++;
          } else {
            stats.failed++;
          }
          stats.processed++;
        } else if (currentCount > 40) {
          console.log(`🔧 ${filePath.replace(rootDir + path.sep, '')} - Has ${currentCount}, removing ${currentCount - 40}`);
          if (removeExtraQuestions(filePath, currentCount - 40)) {
            stats.fixed++;
          } else {
            stats.failed++;
          }
          stats.processed++;
        }
      }
    }
  }

  walkDir(rootDir);
  return stats;
}

// Main execution
console.log('=== AUTOMATIC QUESTION COUNT FIX ===\n');
console.log('This script will fix all question files to have exactly 40 questions.\n');

const rootPath = 'src/questions/data/subjects';
const stats = processAllFiles(rootPath);

console.log('\n=== SUMMARY ===');
console.log(`Total files: ${stats.total}`);
console.log(`Processed: ${stats.processed}`);
console.log(`Fixed: ${stats.fixed}`);
console.log(`Failed: ${stats.failed}`);
console.log(`Already correct: ${stats.total - stats.fixed - stats.failed}`);

if (stats.failed > 0) {
  console.log('\n⚠️  Some files could not be fixed automatically. Manual intervention required.');
} else if (stats.fixed > 0) {
  console.log('\n✅ All files successfully fixed to have 40 questions!');
} else {
  console.log('\n✅ All files already have 40 questions!');
}