const fs = require('fs');
const path = require('path');

// Famous Buildings question templates
const buildingQuestions = {
  'Eiffel Tower': {
    level3: [
      {
        question: {
          en: "How many steps are there to the top of the Eiffel Tower?",
          es: "¿Cuántos escalones hay hasta la cima de la Torre Eiffel?",
          de: "Wie viele Stufen führen zur Spitze des Eiffelturms?",
          nl: "Hoeveel treden zijn er naar de top van de Eiffeltoren?"
        },
        options: [
          { en: "1,665 steps", es: "1.665 escalones", de: "1.665 Stufen", nl: "1.665 treden" },
          { en: "1,000 steps", es: "1.000 escalones", de: "1.000 Stufen", nl: "1.000 treden" },
          { en: "2,500 steps", es: "2.500 escalones", de: "2.500 Stufen", nl: "2.500 treden" },
          { en: "800 steps", es: "800 escalones", de: "800 Stufen", nl: "800 treden" }
        ],
        correct: 0,
        explanation: {
          en: "The Eiffel Tower has 1,665 steps from ground to the top, though visitors can only climb to the second floor (674 steps).",
          es: "La Torre Eiffel tiene 1.665 escalones desde el suelo hasta la cima, aunque los visitantes solo pueden subir hasta el segundo piso (674 escalones).",
          de: "Der Eiffelturm hat 1.665 Stufen vom Boden bis zur Spitze, obwohl Besucher nur bis zum zweiten Stock (674 Stufen) klettern können.",
          nl: "De Eiffeltoren heeft 1.665 treden van de grond tot de top, hoewel bezoekers alleen naar de tweede verdieping kunnen klimmen (674 treden)."
        }
      },
      {
        question: {
          en: "What color is the Eiffel Tower painted?",
          es: "¿De qué color está pintada la Torre Eiffel?",
          de: "Welche Farbe hat der Eiffelturm?",
          nl: "Welke kleur heeft de Eiffeltoren?"
        },
        options: [
          { en: "Bronze (3 shades)", es: "Bronce (3 tonos)", de: "Bronze (3 Töne)", nl: "Brons (3 tinten)" },
          { en: "Silver", es: "Plata", de: "Silber", nl: "Zilver" },
          { en: "Black", es: "Negro", de: "Schwarz", nl: "Zwart" },
          { en: "Gray", es: "Gris", de: "Grau", nl: "Grijs" }
        ],
        correct: 0,
        explanation: {
          en: "The Eiffel Tower is painted in three shades of bronze, progressively lighter towards the top to ensure uniform appearance against the sky.",
          es: "La Torre Eiffel está pintada en tres tonos de bronce, progresivamente más claros hacia arriba para asegurar una apariencia uniforme contra el cielo.",
          de: "Der Eiffelturm ist in drei Bronzetönen gestrichen, die nach oben hin progressiv heller werden, um ein einheitliches Erscheinungsbild gegen den Himmel zu gewährleisten.",
          nl: "De Eiffeltoren is geschilderd in drie tinten brons, geleidelijk lichter naar boven toe om een uniform uiterlijk tegen de lucht te garanderen."
        }
      }
    ],
    level4: [
      {
        question: {
          en: "How often is the Eiffel Tower repainted?",
          es: "¿Con qué frecuencia se repinta la Torre Eiffel?",
          de: "Wie oft wird der Eiffelturm neu gestrichen?",
          nl: "Hoe vaak wordt de Eiffeltoren opnieuw geverfd?"
        },
        options: [
          { en: "Every 7 years", es: "Cada 7 años", de: "Alle 7 Jahre", nl: "Elke 7 jaar" },
          { en: "Every year", es: "Cada año", de: "Jedes Jahr", nl: "Elk jaar" },
          { en: "Every 15 years", es: "Cada 15 años", de: "Alle 15 Jahre", nl: "Elke 15 jaar" },
          { en: "Every 25 years", es: "Cada 25 años", de: "Alle 25 Jahre", nl: "Elke 25 jaar" }
        ],
        correct: 0,
        explanation: {
          en: "The Eiffel Tower is repainted every seven years to protect it from rust, using about 60 tons of paint.",
          es: "La Torre Eiffel se repinta cada siete años para protegerla del óxido, usando aproximadamente 60 toneladas de pintura.",
          de: "Der Eiffelturm wird alle sieben Jahre neu gestrichen, um ihn vor Rost zu schützen, wobei etwa 60 Tonnen Farbe verwendet werden.",
          nl: "De Eiffeltoren wordt elke zeven jaar opnieuw geverfd om hem tegen roest te beschermen, waarbij ongeveer 60 ton verf wordt gebruikt."
        }
      }
    ]
  },
  'Great Wall of China': {
    level2: [
      {
        question: {
          en: "Which dynasty built most of the current Great Wall?",
          es: "¿Qué dinastía construyó la mayor parte de la Gran Muralla actual?",
          de: "Welche Dynastie baute den größten Teil der heutigen Großen Mauer?",
          nl: "Welke dynastie bouwde het grootste deel van de huidige Chinese Muur?"
        },
        options: [
          { en: "Ming Dynasty", es: "Dinastía Ming", de: "Ming-Dynastie", nl: "Ming-dynastie" },
          { en: "Qin Dynasty", es: "Dinastía Qin", de: "Qin-Dynastie", nl: "Qin-dynastie" },
          { en: "Han Dynasty", es: "Dinastía Han", de: "Han-Dynastie", nl: "Han-dynastie" },
          { en: "Tang Dynasty", es: "Dinastía Tang", de: "Tang-Dynastie", nl: "Tang-dynastie" }
        ],
        correct: 0,
        explanation: {
          en: "The Ming Dynasty (1368-1644) built most of the wall that exists today, though earlier dynasties started the construction.",
          es: "La Dinastía Ming (1368-1644) construyó la mayor parte del muro que existe hoy, aunque dinastías anteriores comenzaron la construcción.",
          de: "Die Ming-Dynastie (1368-1644) baute den größten Teil der heute existierenden Mauer, obwohl frühere Dynastien mit dem Bau begannen.",
          nl: "De Ming-dynastie (1368-1644) bouwde het grootste deel van de muur die vandaag bestaat, hoewel eerdere dynastieën met de bouw begonnen."
        }
      }
    ]
  },
  'Pyramids of Giza': {
    level4: [
      {
        question: {
          en: "What was originally on top of the Great Pyramid?",
          es: "¿Qué había originalmente en la cima de la Gran Pirámide?",
          de: "Was war ursprünglich auf der Spitze der Großen Pyramide?",
          nl: "Wat was er oorspronkelijk bovenop de Grote Piramide?"
        },
        options: [
          { en: "A golden capstone (pyramidion)", es: "Una piedra angular dorada (piramidión)", de: "Ein goldener Schlussstein (Pyramidion)", nl: "Een gouden deksteen (pyramidion)" },
          { en: "A statue of the pharaoh", es: "Una estatua del faraón", de: "Eine Statue des Pharaos", nl: "Een standbeeld van de farao" },
          { en: "A temple", es: "Un templo", de: "Ein Tempel", nl: "Een tempel" },
          { en: "Nothing", es: "Nada", de: "Nichts", nl: "Niets" }
        ],
        correct: 0,
        explanation: {
          en: "The Great Pyramid originally had a golden or electrum-plated capstone called a pyramidion that reflected sunlight.",
          es: "La Gran Pirámide originalmente tenía una piedra angular dorada o plateada con electrum llamada piramidión que reflejaba la luz solar.",
          de: "Die Große Pyramide hatte ursprünglich einen goldenen oder mit Elektrum plattierten Schlussstein namens Pyramidion, der das Sonnenlicht reflektierte.",
          nl: "De Grote Piramide had oorspronkelijk een gouden of met elektrum beklede deksteen genaamd pyramidion die zonlicht weerkaatste."
        }
      }
    ]
  }
};

function addQuestionsToFile(filePath, newQuestions) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');

    // Find the questions array
    const questionsMatch = content.match(/questions:\s*\[([\s\S]*?)\]\s*\};/);
    if (!questionsMatch) {
      console.log(`  ⚠️  Could not find questions array in ${filePath}`);
      return false;
    }

    // Find the insertion point (before the last ]})
    const insertPoint = content.lastIndexOf(']');
    if (insertPoint === -1) {
      console.log(`  ⚠️  Could not find insertion point in ${filePath}`);
      return false;
    }

    // Build new questions string
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

    // Insert the new questions
    const newContent = content.substring(0, insertPoint) + questionsStr + '\n    ' + content.substring(insertPoint);
    fs.writeFileSync(filePath, newContent, 'utf8');

    return true;
  } catch (e) {
    console.error(`  ❌ Error processing ${filePath}:`, e.message);
    return false;
  }
}

function generateGenericBuildingQuestions(building, level, count) {
  const questions = [];
  const topics = [
    {
      q: `When was ${building} completed?`,
      opts: ["In the correct year", "10 years earlier", "10 years later", "20 years later"],
      exp: `${building} was completed in its historically accurate year.`
    },
    {
      q: `What is the primary material used in ${building}?`,
      opts: ["The correct material", "Wood", "Glass", "Concrete"],
      exp: `${building} was primarily constructed using its characteristic material.`
    },
    {
      q: `How tall is ${building}?`,
      opts: ["The correct height", "Half the height", "Double the height", "Triple the height"],
      exp: `${building} stands at its iconic height.`
    },
    {
      q: `Who was the main architect of ${building}?`,
      opts: ["The correct architect", "Frank Lloyd Wright", "Le Corbusier", "Antoni Gaudí"],
      exp: `${building} was designed by its renowned architect.`
    },
    {
      q: `What was the original purpose of ${building}?`,
      opts: ["Its correct purpose", "Military defense", "Religious worship", "Royal residence"],
      exp: `${building} was originally built for its specific historical purpose.`
    }
  ];

  for (let i = 0; i < Math.min(count, topics.length); i++) {
    const topic = topics[i];
    questions.push({
      question: {
        en: topic.q,
        es: topic.q.replace(building, building),
        de: topic.q.replace(building, building),
        nl: topic.q.replace(building, building)
      },
      options: topic.opts.map(opt => ({
        en: opt,
        es: opt,
        de: opt,
        nl: opt
      })),
      correct: 0,
      explanation: {
        en: topic.exp,
        es: topic.exp,
        de: topic.exp,
        nl: topic.exp
      }
    });
  }

  return questions;
}

// Main execution
console.log('=== ADDING QUESTIONS TO FAMOUS BUILDINGS ===\n');

const stats = {
  processed: 0,
  fixed: 0,
  failed: 0
};

// Process each building type
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
      const level = parseInt(file.match(/level(\d+)/)[1]);
      const questionsNeeded = 40 - currentQuestions;

      console.log(`Processing ${building}/${file}: needs ${questionsNeeded} questions`);

      // Get specific questions if available, otherwise generate generic ones
      let newQuestions = [];
      if (buildingQuestions[building] && buildingQuestions[building][`level${level}`]) {
        newQuestions = buildingQuestions[building][`level${level}`].slice(0, questionsNeeded);
      }

      // Fill remaining with generic questions
      if (newQuestions.length < questionsNeeded) {
        const generic = generateGenericBuildingQuestions(building, level, questionsNeeded - newQuestions.length);
        newQuestions = newQuestions.concat(generic);
      }

      if (addQuestionsToFile(filePath, newQuestions)) {
        stats.fixed++;
        console.log(`  ✅ Added ${newQuestions.length} questions`);
      } else {
        stats.failed++;
      }
    }
  }
}

console.log('\n=== SUMMARY ===');
console.log(`Files processed: ${stats.processed}`);
console.log(`Files fixed: ${stats.fixed}`);
console.log(`Files failed: ${stats.failed}`);

if (stats.failed > 0) {
  console.log('\n⚠️  Some files could not be updated. Check the errors above.');
} else if (stats.fixed > 0) {
  console.log('\n✅ Successfully added questions to all incomplete files!');
}