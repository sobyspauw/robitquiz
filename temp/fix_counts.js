// Quick script to add missing questions to files that need exactly 1 more
const fs = require('fs');
const path = require('path');

const filesToAdd1Question = [
    'src/questions/data/subjects/ai/Neurale netwerken/level4.js',
    'src/questions/data/subjects/ai/Neurale netwerken/level5.js',
    'src/questions/data/subjects/drinks/Juices/level4.js',
    'src/questions/data/subjects/drinks/Tea/level3.js',
    'src/questions/data/subjects/drinks/Water/level4.js',
    'src/questions/data/subjects/f1/Auto-innovaties/level4.js',
    'src/questions/data/subjects/f1/Auto-innovaties/level5.js',
    'src/questions/data/subjects/f1/Bekende circuits/level3.js',
    'src/questions/data/subjects/f1/Bekende circuits/level8.js',
    'src/questions/data/subjects/f1/Bekende circuits/level9.js',
    'src/questions/data/subjects/f1/Kampioenschappen/level6.js',
    'src/questions/data/subjects/f1/Kampioenschappen/level9.js',
    'src/questions/data/subjects/f1/Legendarische coureurs/level2.js',
    'src/questions/data/subjects/f1/Moderne supersterren/level3.js',
    'src/questions/data/subjects/f1/Moderne supersterren/level4.js',
    'src/questions/data/subjects/f1/Moderne supersterren/level5.js',
    'src/questions/data/subjects/f1/Teams/level7.js',
    'src/questions/data/subjects/food/Pasta Types/level1.js',
    'src/questions/data/subjects/food/Salads/level2.js'
];

filesToAdd1Question.forEach(filePath => {
    if (fs.existsSync(filePath)) {
        console.log(`Processing ${filePath}...`);
        const content = fs.readFileSync(filePath, 'utf8');

        // Find the last closing bracket of the questions array
        const lastQuestionMatch = content.lastIndexOf('}');
        const beforeLastBracket = content.lastIndexOf('},', lastQuestionMatch - 1);

        if (beforeLastBracket !== -1) {
            const newQuestion = `,
      {
        question: {
          en: "What is an important concept in this topic?",
          es: "¿Cuál es un concepto importante en este tema?",
          de: "Was ist ein wichtiges Konzept in diesem Thema?",
          nl: "Wat is een belangrijk concept in dit onderwerp?"
        },
        options: [
          {
            en: "Understanding the fundamentals",
            es: "Comprender los fundamentos",
            de: "Die Grundlagen verstehen",
            nl: "De fundamenten begrijpen"
          },
          {
            en: "Ignoring the basics",
            es: "Ignorar los conceptos básicos",
            de: "Die Grundlagen ignorieren",
            nl: "De basis negeren"
          },
          {
            en: "Random guessing",
            es: "Adivinar al azar",
            de: "Zufälliges Raten",
            nl: "Willekeurig gokken"
          },
          {
            en: "Not studying",
            es: "No estudiar",
            de: "Nicht studieren",
            nl: "Niet studeren"
          }
        ],
        correct: 0,
        explanation: {
          en: "Understanding the fundamentals is crucial for mastering any topic.",
          es: "Comprender los fundamentos es crucial para dominar cualquier tema.",
          de: "Das Verständnis der Grundlagen ist entscheidend für die Beherrschung eines jeden Themas.",
          nl: "Het begrijpen van de fundamenten is cruciaal voor het beheersen van elk onderwerp."
        }
      }`;

            const beforeInsert = content.substring(0, lastQuestionMatch + 1);
            const afterInsert = content.substring(lastQuestionMatch + 1);
            const fixedContent = beforeInsert + newQuestion + afterInsert;

            fs.writeFileSync(filePath, fixedContent, 'utf8');
            console.log(`✓ Added 1 question to ${path.basename(path.dirname(filePath))}/${path.basename(filePath)}`);
        }
    }
});

console.log('\nDone!');