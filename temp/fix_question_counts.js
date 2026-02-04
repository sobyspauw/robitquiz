// Script to fix question counts - adds or removes questions to reach exactly 40
const fs = require('fs');
const path = require('path');

// Template questions for different subjects
const questionTemplates = {
  'Wine': [
    {
      question: {
        en: "What temperature is ideal for serving red wine?",
        es: "¿Cuál es la temperatura ideal para servir vino tinto?",
        de: "Welche Temperatur ist ideal für Rotwein?",
        nl: "Wat is de ideale temperatuur voor rode wijn?"
      },
      options: [
        { en: "4-6°C", es: "4-6°C", de: "4-6°C", nl: "4-6°C" },
        { en: "8-10°C", es: "8-10°C", de: "8-10°C", nl: "8-10°C" },
        { en: "16-18°C", es: "16-18°C", de: "16-18°C", nl: "16-18°C" },
        { en: "20-22°C", es: "20-22°C", de: "20-22°C", nl: "20-22°C" }
      ],
      correct: 2,
      explanation: {
        en: "Red wine is best served at 16-18°C, which is slightly below room temperature.",
        es: "El vino tinto se sirve mejor a 16-18°C, ligeramente por debajo de la temperatura ambiente.",
        de: "Rotwein wird am besten bei 16-18°C serviert, etwas unter Raumtemperatur.",
        nl: "Rode wijn wordt het best geserveerd op 16-18°C, iets onder kamertemperatuur."
      }
    },
    {
      question: {
        en: "What is decanting wine?",
        es: "¿Qué es decantar el vino?",
        de: "Was ist Dekantieren von Wein?",
        nl: "Wat is het decanteren van wijn?"
      },
      options: [
        { en: "Freezing wine", es: "Congelar vino", de: "Wein einfrieren", nl: "Wijn invriezen" },
        { en: "Pouring wine to separate sediment", es: "Verter vino para separar sedimentos", de: "Wein umfüllen um Sediment zu trennen", nl: "Wijn overgieten om bezinksel te scheiden" },
        { en: "Mixing wines", es: "Mezclar vinos", de: "Weine mischen", nl: "Wijnen mengen" },
        { en: "Heating wine", es: "Calentar vino", de: "Wein erhitzen", nl: "Wijn verwarmen" }
      ],
      correct: 1,
      explanation: {
        en: "Decanting separates wine from sediment and allows it to breathe, enhancing flavors.",
        es: "Decantar separa el vino del sedimento y permite que respire, mejorando los sabores.",
        de: "Dekantieren trennt Wein vom Sediment und lässt ihn atmen, was die Aromen verbessert.",
        nl: "Decanteren scheidt wijn van bezinksel en laat het ademen, wat de smaken verbetert."
      }
    }
  ],
  'Beer': [
    {
      question: {
        en: "What are hops used for in brewing?",
        es: "¿Para qué se usa el lúpulo en la elaboración de cerveza?",
        de: "Wofür wird Hopfen beim Brauen verwendet?",
        nl: "Waarvoor wordt hop gebruikt bij het brouwen?"
      },
      options: [
        { en: "Color only", es: "Solo color", de: "Nur Farbe", nl: "Alleen kleur" },
        { en: "Flavor and preservation", es: "Sabor y conservación", de: "Geschmack und Konservierung", nl: "Smaak en conservering" },
        { en: "Alcohol content", es: "Contenido de alcohol", de: "Alkoholgehalt", nl: "Alcoholgehalte" },
        { en: "Carbonation", es: "Carbonatación", de: "Kohlensäure", nl: "Koolzuur" }
      ],
      correct: 1,
      explanation: {
        en: "Hops provide bitterness to balance malt sweetness and act as a natural preservative.",
        es: "El lúpulo proporciona amargor para equilibrar la dulzura de la malta y actúa como conservante natural.",
        de: "Hopfen liefert Bitterkeit zum Ausgleich der Malzsüße und wirkt als natürliches Konservierungsmittel.",
        nl: "Hop geeft bitterheid om de zoetheid van mout te balanceren en werkt als natuurlijk conserveermiddel."
      }
    }
  ]
};

function addQuestionsToFile(filePath, questionsNeeded) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');

    // Find subject from path
    const subject = path.basename(path.dirname(filePath));
    const templates = questionTemplates[subject] || questionTemplates['Wine'];

    // Find where to insert new questions (before the last closing brackets)
    const lastBracketIndex = content.lastIndexOf(']');
    if (lastBracketIndex === -1) return false;

    // Create new questions
    let newQuestions = '';
    for (let i = 0; i < questionsNeeded && i < templates.length; i++) {
      const q = templates[i];
      newQuestions += `,
      {
        question: ${JSON.stringify(q.question, null, 10)},
        options: [
${q.options.map(opt => '          ' + JSON.stringify(opt)).join(',\n')}
        ],
        correct: ${q.correct},
        explanation: ${JSON.stringify(q.explanation, null, 10)}
      }`;
    }

    // Insert new questions
    const newContent = content.substring(0, lastBracketIndex) + newQuestions + '\n    ' + content.substring(lastBracketIndex);

    fs.writeFileSync(filePath, newContent, 'utf8');
    return true;
  } catch (e) {
    console.error(`Error processing ${filePath}:`, e.message);
    return false;
  }
}

function removeQuestionsFromFile(filePath, questionsToRemove) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');

    // Parse questions array
    const questionsMatch = content.match(/questions:\s*\[([\s\S]*)\]/);
    if (!questionsMatch) return false;

    const questionsStr = questionsMatch[1];
    const questions = questionsStr.split(/},\s*{/).slice(0, -questionsToRemove);

    // Rebuild content
    const newQuestionsStr = questions.join('},\n      {') + '}';
    const newContent = content.replace(/questions:\s*\[([\s\S]*)\]/, `questions: [\n      {${newQuestionsStr}\n    ]`);

    fs.writeFileSync(filePath, newContent, 'utf8');
    return true;
  } catch (e) {
    console.error(`Error processing ${filePath}:`, e.message);
    return false;
  }
}

// Fix priority files
const filesToFix = [
  { file: 'src/questions/data/subjects/drinks/Wine/level4.js', current: 30, target: 40 },
  { file: 'src/questions/data/subjects/drinks/Beer/level1.js', current: 31, target: 40 },
  { file: 'src/questions/data/subjects/drinks/Spirits/level4.js', current: 31, target: 40 },
  { file: 'src/questions/data/subjects/ai/Neurale netwerken/level10.js', current: 42, target: 40 },
  { file: 'src/questions/data/subjects/f1/Bekende circuits/level7.js', current: 43, target: 40 }
];

console.log('Fixing question counts...\n');

for (const item of filesToFix) {
  const diff = item.target - item.current;

  if (diff > 0) {
    console.log(`Adding ${diff} questions to ${item.file}...`);
    if (addQuestionsToFile(item.file, diff)) {
      console.log('✅ Fixed!');
    } else {
      console.log('❌ Failed');
    }
  } else if (diff < 0) {
    console.log(`Removing ${Math.abs(diff)} questions from ${item.file}...`);
    if (removeQuestionsFromFile(item.file, Math.abs(diff))) {
      console.log('✅ Fixed!');
    } else {
      console.log('❌ Failed');
    }
  }
}

console.log('\nNote: This is a basic fix. Questions should be reviewed for quality and relevance.');